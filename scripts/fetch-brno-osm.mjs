import fs from 'node:fs';
import path from 'node:path';

const ORIGIN_LAT = 49.19518;
const ORIGIN_LON = 16.60830;
const METERS_PER_LAT = 111210;
const METERS_PER_LON = 111320 * Math.cos((ORIGIN_LAT * Math.PI) / 180);

// True 1:1 Brno bounding box (~2.4 km x 2.78 km):
// Covers Park Lužánky (N) -> AZ Tower & Svratka (S), Mendlovo nám. & Špilberk (W) -> Cejl & Křenová (E)
const BBOX = {
  minLat: 49.1815,
  maxLat: 49.2065,
  minLon: 16.5915,
  maxLon: 16.6245
};

function project(lat, lon) {
  const x = Math.round(((lon - ORIGIN_LON) * METERS_PER_LON) * 2) / 2;
  const z = Math.round(((ORIGIN_LAT - lat) * METERS_PER_LAT) * 2) / 2;
  return [x, z];
}

// Douglas-Peucker polyline simplification (in meters) to keep file compact while preserving exact 1:1 shapes
function simplify(pts, eps = 0.9) {
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

async function fetchTile(minLon, minLat, maxLon, maxLat, depth = 0) {
  const url = `https://api.openstreetmap.org/api/0.6/map.json?bbox=${minLon.toFixed(5)},${minLat.toFixed(5)},${maxLon.toFixed(5)},${maxLat.toFixed(5)}`;
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'BrnoGTAGameBuilder/1.0 (https://github.com/Kotakovec/brnenske_gta)',
      Accept: 'application/json'
    }
  });

  if (res.status === 400 && depth < 2) {
    // Too many nodes in this tile — cleanly subdivide into 4 quadrants
    const midLon = (minLon + maxLon) / 2;
    const midLat = (minLat + maxLat) / 2;
    await fetchTile(minLon, minLat, midLon, midLat, depth + 1);
    await fetchTile(midLon, minLat, maxLon, midLat, depth + 1);
    await fetchTile(minLon, midLat, midLon, maxLat, depth + 1);
    await fetchTile(midLon, midLat, maxLon, maxLat, depth + 1);
    return;
  }

  if (res.status === 429 || res.status >= 500) {
    await new Promise(r => setTimeout(r, 1200));
    return fetchTile(minLon, minLat, maxLon, maxLat, depth);
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
  const rows = 5;
  const cols = 5;
  const dLat = (BBOX.maxLat - BBOX.minLat) / rows;
  const dLon = (BBOX.maxLon - BBOX.minLon) / cols;

  console.log(`Fetching 1:1 Brno OpenStreetMap data (${rows}x${cols} tiles)...`);
  let done = 0;
  const total = rows * cols;

  // Fetch 3 tiles concurrently with polite pacing
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

  const concurrency = 3;
  let cursor = 0;
  async function worker() {
    while (cursor < tasks.length) {
      const t = tasks[cursor++];
      await fetchTile(t.minLon, t.minLat, t.maxLon, t.maxLat);
      done++;
      process.stdout.write(`\rTiles fetched: ${done}/${total} (nodes: ${allNodes.size}, ways: ${allWays.size})`);
      await new Promise(r => setTimeout(r, 120));
    }
  }
  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  console.log('\nProcessing OSM geometry...');

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
    service: 4.5,
    track: 4
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

    // 1. Roads & Named Streets
    if (tags.highway && roadWidths[tags.highway]) {
      const isArea = tags.area === 'yes' && pts.length >= 4 && pts[0][0] === pts[pts.length - 1][0] && pts[0][1] === pts[pts.length - 1][1];
      if (isArea && tags.highway === 'pedestrian') {
        const simp = simplify(pts.slice(0, -1), 1.4);
        if (simp.length >= 3) plazas.push({ n: tags.name || '', p: flatten(simp) });
      } else {
        const simp = simplify(pts, 1.1);
        if (simp.length >= 2) {
          let w = roadWidths[tags.highway];
          if (tags.lanes) {
            const lanes = parseInt(tags.lanes, 10);
            if (!Number.isNaN(lanes) && lanes >= 2) w = Math.max(w, lanes * 3.4);
          }
          roads.push({
            n: tags.name || '',
            t: tags.highway,
            w: Math.round(w * 2) / 2,
            p: flatten(simp)
          });
        }
      }
      continue;
    }

    // 2. Real DPMB Tram Tracks
    if (tags.railway === 'tram') {
      const simp = simplify(pts, 1.2);
      if (simp.length >= 2) {
        trams.push(flatten(simp));
      }
      continue;
    }

    // 3. Buildings (closed polygons with real height / levels!)
    if (tags.building && pts.length >= 4) {
      const isClosed = pts[0][0] === pts[pts.length - 1][0] && pts[0][1] === pts[pts.length - 1][1];
      const poly = isClosed ? pts.slice(0, -1) : pts;
      const simp = simplify(poly, 1.0);
      if (simp.length < 3) continue;

      // Compute approximate footprint area & center to filter tiny sheds (<18 m^2)
      let area = 0;
      let cx = 0;
      let cz = 0;
      for (let i = 0; i < simp.length; i++) {
        const [x1, z1] = simp[i];
        const [x2, z2] = simp[(i + 1) % simp.length];
        area += x1 * z2 - x2 * z1;
        cx += x1;
        cz += z1;
      }
      area = Math.abs(area) * 0.5;
      if (area < 20) continue;
      cx /= simp.length;
      cz /= simp.length;

      // Skip exact footprint where our ultra-detailed custom hero monuments stand (AZ Tower, Petrov Cathedral, Orloj)
      if (Math.hypot(cx - (-81), cz - 1428) < 35) continue; // AZ Tower custom skyscraper
      if (Math.hypot(cx - (-84), cz - 459) < 30) continue;  // Petrov Cathedral custom twin spires

      // Real height from OSM height or building:levels
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
        h = distCenter < 550 ? 15 + ((Math.abs(Math.round(cx + cz)) % 4) * 2.5) : 11 + ((Math.abs(Math.round(cx * 3 + cz)) % 4) * 2.5);
      }
      h = Math.min(68, Math.max(4.5, Math.round(h * 10) / 10));

      // Architectural style palette
      let c = Math.abs(Math.round(cx * 7 + cz * 13)) % 5; // 0..4 Moravian historic colors
      if (tags.building === 'commercial' || tags.building === 'office' || tags.building === 'retail' || tags.building === 'industrial' || h > 28) {
        c = 5; // Modern glass / office
      } else if (tags.building === 'church' || tags.building === 'cathedral' || tags.building === 'castle' || tags.historic === 'castle') {
        c = 6; // Historic stone / heritage
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
      const simp = simplify(poly, 2.2);
      if (simp.length >= 3) parks.push(flatten(simp));
      continue;
    }

    // 5. Water (Svratka river polygons & ponds)
    if ((tags.natural === 'water' || tags.waterway === 'riverbank') && pts.length >= 4) {
      const poly = pts[0][0] === pts[pts.length - 1][0] && pts[0][1] === pts[pts.length - 1][1] ? pts.slice(0, -1) : pts;
      const simp = simplify(poly, 2.0);
      if (simp.length >= 3) water.push(flatten(simp));
      continue;
    }

    if (tags.waterway === 'river' || tags.waterway === 'stream') {
      const simp = simplify(pts, 2.5);
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
  console.log(`\nDONE! Wrote ${outPath} (${(json.length / 1024).toFixed(1)} KB)`);
  console.log(`  Roads: ${roads.length} segments (${namedStreets.size} unique named Brno streets!)`);
  console.log(`  Tram tracks: ${trams.length} segments`);
  console.log(`  Buildings: ${buildings.length} real 1:1 footprints`);
  console.log(`  Parks: ${parks.length}, Plazas: ${plazas.length}, Water: ${water.length}, Rivers: ${waterways.length}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
