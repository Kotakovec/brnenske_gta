import fs from 'node:fs';
import path from 'node:path';

const ORIGIN_LAT = 49.19518;
const ORIGIN_LON = 16.60830;
const METERS_PER_LAT = 111210;
const METERS_PER_LON = 111320 * Math.cos((ORIGIN_LAT * Math.PI) / 180);

// 2x expanded true 1:1 Brno bounding box (~4.8 km x 5.56 km = ~26.7 km^2):
// N: Královo Pole / Ponava / Černá Pole (49.2195)
// S: Komárov / Horní Heršpice / Vídeňská / AZ Tower (49.1695)
// W: BVV Výstaviště / Pisárky / Kraví hora / Žabovřesky (16.5745)
// E: Židenice / Stará osada / Černovice / Svitava (16.6405)
const BBOX = {
  minLat: 49.1695,
  maxLat: 49.2195,
  minLon: 16.5745,
  maxLon: 16.6405
};

function project(lat, lon) {
  const x = Math.round((lon - ORIGIN_LON) * METERS_PER_LON);
  const z = Math.round((ORIGIN_LAT - lat) * METERS_PER_LAT);
  return [x, z];
}

function simplify(pts, eps = 1.4) {
  if (pts.length <= 2) return pts;
  let maxDist = 0;
  let idx = 0;
  const [x1, y1] = pts[0];
  const [x2, y2] = pts[pts.length - 1];
  const dx = x2 - x1;
  const dy = y2 - y1;
  const lenSq = dx * dx + dy * dy;

  for (let i = 1; i < pts.length - 1; i++) {
    const [px, py] = pts[i];
    let dist;
    if (lenSq < 1e-6) {
      dist = Math.hypot(px - x1, py - y1);
    } else {
      const t = Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / lenSq));
      dist = Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
    }
    if (dist > maxDist) {
      maxDist = dist;
      idx = i;
    }
  }
  if (maxDist > eps) {
    const left = simplify(pts.slice(0, idx + 1), eps);
    const right = simplify(pts.slice(idx), eps);
    return left.slice(0, -1).concat(right);
  }
  return [pts[0], pts[pts.length - 1]];
}

function flatten(pts) {
  const out = [];
  for (const [x, z] of pts) {
    out.push(x, z);
  }
  return out;
}

const allNodes = new Map();
const allWays = new Map();

async function fetchTile(minLon, minLat, maxLon, maxLat, depth = 0, retries = 0) {
  const url = `https://api.openstreetmap.org/api/0.6/map.json?bbox=${minLon.toFixed(5)},${minLat.toFixed(5)},${maxLon.toFixed(5)},${maxLat.toFixed(5)}`;
  let res;
  try {
    res = await fetch(url, {
      headers: {
        'User-Agent': 'BrnoGTAGameBuilder/2.0 (https://github.com/Kotakovec/brnenske_gta)',
        Accept: 'application/json'
      }
    });
  } catch (err) {
    if (retries < 4) {
      await new Promise(r => setTimeout(r, 1500));
      return fetchTile(minLon, minLat, maxLon, maxLat, depth, retries + 1);
    }
    throw err;
  }

  if (res.status === 400 && depth < 2) {
    const midLon = (minLon + maxLon) / 2;
    const midLat = (minLat + maxLat) / 2;
    await fetchTile(minLon, minLat, midLon, midLat, depth + 1);
    await fetchTile(midLon, minLat, maxLon, midLat, depth + 1);
    await fetchTile(minLon, midLat, midLon, maxLat, depth + 1);
    await fetchTile(midLon, midLat, maxLon, maxLat, depth + 1);
    return;
  }

  if ((res.status === 429 || res.status >= 500) && retries < 5) {
    await new Promise(r => setTimeout(r, 1600 * (retries + 1)));
    return fetchTile(minLon, minLat, maxLon, maxLat, depth, retries + 1);
  }

  if (!res.ok) {
    throw new Error(`HTTP ${res.status} for ${url}`);
  }

  const data = await res.json();
  for (const el of data.elements || []) {
    if (el.type === 'node') {
      allNodes.set(el.id, [el.lat, el.lon]);
    } else if (el.type === 'way' && el.nodes && el.nodes.length >= 2) {
      allWays.set(el.id, el);
    }
  }
}

async function main() {
  const rows = 8;
  const cols = 8;
  const dLat = (BBOX.maxLat - BBOX.minLat) / rows;
  const dLon = (BBOX.maxLon - BBOX.minLon) / cols;

  console.log(`Fetching 2x expanded 1:1 Brno OSM data (${rows}x${cols} = ${rows * cols} tiles)...`);
  let done = 0;
  const total = rows * cols;

  const tasks = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      tasks.push({
        minLon: BBOX.minLon + c * dLon,
        maxLon: BBOX.minLon + (c + 1) * dLon,
        minLat: BBOX.minLat + r * dLat,
        maxLat: BBOX.minLat + (r + 1) * dLat
      });
    }
  }

  const concurrency = 4;
  let cursor = 0;
  async function worker() {
    while (cursor < tasks.length) {
      const t = tasks[cursor++];
      await fetchTile(t.minLon, t.minLat, t.maxLon, t.maxLat);
      done++;
      if (done % 4 === 0 || done === total) {
        console.log(`Tiles fetched: ${done}/${total} (nodes: ${allNodes.size}, ways: ${allWays.size})`);
      }
      await new Promise(r => setTimeout(r, 100));
    }
  }
  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  console.log('Processing expanded 1:1 OSM geometry...');

  const roadWidths = {
    motorway: 15,
    trunk: 14,
    primary: 12.5,
    primary_link: 9,
    secondary: 10.5,
    secondary_link: 8,
    tertiary: 8.5,
    tertiary_link: 7,
    residential: 7,
    unclassified: 6.5,
    living_street: 6.5,
    pedestrian: 9.5,
    service: 4.5
  };

  const roads = [];
  const trams = [];
  const buildings = [];
  const parks = [];
  const plazas = [];
  const water = [];
  const waterways = [];

  const getWayPts = (way) => {
    const pts = [];
    for (const nid of way.nodes) {
      const ll = allNodes.get(nid);
      if (ll) pts.push(project(ll[0], ll[1]));
    }
    return pts;
  };

  const bounds = {
    minX: Math.round((BBOX.minLon - ORIGIN_LON) * METERS_PER_LON),
    maxX: Math.round((BBOX.maxLon - ORIGIN_LON) * METERS_PER_LON),
    minZ: Math.round((ORIGIN_LAT - BBOX.maxLat) * METERS_PER_LAT),
    maxZ: Math.round((ORIGIN_LAT - BBOX.minLat) * METERS_PER_LAT)
  };

  const inBounds = (pts) => {
    for (const [x, z] of pts) {
      if (x >= bounds.minX - 60 && x <= bounds.maxX + 60 && z >= bounds.minZ - 60 && z <= bounds.maxZ + 60) {
        return true;
      }
    }
    return false;
  };

  for (const way of allWays.values()) {
    const tags = way.tags || {};
    const pts = getWayPts(way);
    if (pts.length < 2 || !inBounds(pts)) continue;

    // 1. Roads & Named Streets (skip tiny unnamed driveway stubs in outer suburbs)
    if (tags.highway && roadWidths[tags.highway]) {
      if (tags.highway === 'service' && !tags.name && (tags.service === 'parking_aisle' || tags.service === 'driveway')) {
        continue;
      }
      const isArea = tags.area === 'yes' && pts.length >= 4 && pts[0][0] === pts[pts.length - 1][0] && pts[0][1] === pts[pts.length - 1][1];
      if (isArea && tags.highway === 'pedestrian') {
        const simp = simplify(pts.slice(0, -1), 1.8);
        if (simp.length >= 3) plazas.push({ n: tags.name || '', p: flatten(simp) });
      } else {
        const simp = simplify(pts, 1.5);
        if (simp.length >= 2) {
          let w = roadWidths[tags.highway];
          if (tags.lanes) {
            const lanes = parseInt(tags.lanes, 10);
            if (!Number.isNaN(lanes) && lanes >= 2) w = Math.max(w, lanes * 3.4);
          }
          roads.push({
            n: tags.name || '',
            t: tags.highway,
            w: Math.round(w),
            p: flatten(simp)
          });
        }
      }
      continue;
    }

    // 2. Real DPMB Tram Tracks
    if (tags.railway === 'tram') {
      const simp = simplify(pts, 1.8);
      if (simp.length >= 2) trams.push(flatten(simp));
      continue;
    }

    // 3. Buildings (closed polygons >= 30 m^2)
    if (tags.building && pts.length >= 4) {
      const isClosed = pts[0][0] === pts[pts.length - 1][0] && pts[0][1] === pts[pts.length - 1][1];
      const poly = isClosed ? pts.slice(0, -1) : pts;
      const simp = simplify(poly, 1.4);
      if (simp.length < 3) continue;

      let area = 0, cx = 0, cz = 0;
      for (let i = 0; i < simp.length; i++) {
        const [x1, z1] = simp[i];
        const [x2, z2] = simp[(i + 1) % simp.length];
        area += x1 * z2 - x2 * z1;
        cx += x1;
        cz += z1;
      }
      area = Math.abs(area) * 0.5;
      if (area < 30) continue;
      cx /= simp.length;
      cz /= simp.length;

      // Reserve exact spots for custom detailed hero monuments
      if (Math.hypot(cx - (-81), cz - 1428) < 35) continue; // AZ Tower
      if (Math.hypot(cx - (-84), cz - 459) < 30) continue;  // Petrov Cathedral

      let h = 0;
      if (tags.height) {
        const parsed = parseFloat(String(tags.height).replace(',', '.'));
        if (!Number.isNaN(parsed) && parsed >= 3) h = parsed;
      }
      if (!h && tags['building:levels']) {
        const lv = parseFloat(String(tags['building:levels']).replace(',', '.'));
        if (!Number.isNaN(lv) && lv >= 1) h = lv * 3.4 + 2.2;
      }
      if (!h) {
        const distCenter = Math.hypot(cx, cz);
        h = distCenter < 650
          ? 15 + ((Math.abs(Math.round(cx + cz)) % 4) * 2.5)
          : distCenter < 1500
            ? 12 + ((Math.abs(Math.round(cx * 3 + cz)) % 4) * 2.5)
            : 9 + ((Math.abs(Math.round(cx * 5 + cz)) % 4) * 2.0);
      }
      h = Math.min(68, Math.max(4.5, Math.round(h)));

      let c = Math.abs(Math.round(cx * 7 + cz * 13)) % 5;
      if (tags.building === 'commercial' || tags.building === 'office' || tags.building === 'retail' || tags.building === 'industrial' || h > 28) {
        c = 5;
      } else if (tags.building === 'church' || tags.building === 'cathedral' || tags.building === 'castle' || tags.historic === 'castle') {
        c = 6;
      }

      buildings.push({ h, c, p: flatten(simp) });
      continue;
    }

    // 4. Parks & Green Spaces
    if (
      (tags.leisure === 'park' || tags.leisure === 'garden' || tags.landuse === 'grass' || tags.landuse === 'forest' || tags.natural === 'wood') &&
      pts.length >= 4
    ) {
      const poly = pts[0][0] === pts[pts.length - 1][0] && pts[0][1] === pts[pts.length - 1][1] ? pts.slice(0, -1) : pts;
      const simp = simplify(poly, 3.0);
      if (simp.length >= 3) parks.push(flatten(simp));
      continue;
    }

    // 5. Water (Svratka & Svitava rivers + ponds)
    if ((tags.natural === 'water' || tags.waterway === 'riverbank') && pts.length >= 4) {
      const poly = pts[0][0] === pts[pts.length - 1][0] && pts[0][1] === pts[pts.length - 1][1] ? pts.slice(0, -1) : pts;
      const simp = simplify(poly, 2.5);
      if (simp.length >= 3) water.push(flatten(simp));
      continue;
    }

    if (tags.waterway === 'river' || tags.waterway === 'stream') {
      const simp = simplify(pts, 3.0);
      if (simp.length >= 2) {
        waterways.push({ w: tags.waterway === 'river' ? 26 : 6, p: flatten(simp) });
      }
    }
  }

  const out = {
    origin: { lat: ORIGIN_LAT, lon: ORIGIN_LON },
    bounds,
    roads,
    trams,
    buildings,
    parks,
    plazas,
    water,
    waterways
  };

  const outPath = path.resolve('public/brno-osm.json');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  const json = JSON.stringify(out);
  fs.writeFileSync(outPath, json);

  const namedStreets = new Set(roads.map(r => r.n).filter(Boolean));
  const widthKm = ((bounds.maxX - bounds.minX) / 1000).toFixed(2);
  const heightKm = ((bounds.maxZ - bounds.minZ) / 1000).toFixed(2);
  console.log(`\nDONE! Wrote ${outPath} (${(json.length / 1024).toFixed(1)} KB)`);
  console.log(`  1:1 Extent: ${widthKm} km x ${heightKm} km (bounds: ${JSON.stringify(bounds)})`);
  console.log(`  Roads: ${roads.length} segments (${namedStreets.size} unique named Brno streets!)`);
  console.log(`  Tram tracks: ${trams.length} segments`);
  console.log(`  Buildings: ${buildings.length} real 1:1 footprints`);
  console.log(`  Parks: ${parks.length}, Plazas: ${plazas.length}, Water: ${water.length}, Rivers: ${waterways.length}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
