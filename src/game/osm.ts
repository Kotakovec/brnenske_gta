export interface OSMRoad {
  n: string;       // Real Brno street name
  t: string;       // OSM highway class (primary, secondary, residential, pedestrian...)
  w: number;       // Width in real meters
  p: number[];     // Flat [x0, z0, x1, z1, ...]
}

export interface OSMBuilding {
  h: number;       // Height in meters
  c: number;       // Palette class 0..6
  p: number[];     // Flat polygon [x0, z0, x1, z1, ...]
}

export interface OSMPlaza {
  n: string;
  p: number[];
}

export interface OSMWaterway {
  w: number;
  p: number[];
}

export interface BrnoOSMData {
  origin: { lat: number; lon: number };
  bounds: { minX: number; maxX: number; minZ: number; maxZ: number };
  roads: OSMRoad[];
  trams: number[][];
  buildings: OSMBuilding[];
  parks: number[][];
  plazas: OSMPlaza[];
  water: number[][];
  waterways: OSMWaterway[];
}

interface IndexedBuilding {
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
  maxY: number;
  poly: number[];
}

interface IndexedRoadSeg {
  x1: number;
  z1: number;
  x2: number;
  z2: number;
  name: string;
  width: number;
}

const CELL_SIZE = 55;

export class BrnoSpatialIndex {
  public readonly data: BrnoOSMData;
  public readonly drivableRoads: OSMRoad[];
  private buildingGrid = new Map<string, IndexedBuilding[]>();
  private streetGrid = new Map<string, IndexedRoadSeg[]>();

  constructor(data: BrnoOSMData, getTerrainHeight: (x: number, z: number) => number) {
    this.data = data;

    // 1. Index all 4,762 real 1:1 buildings into 55m spatial hash cells
    for (const b of data.buildings) {
      const p = b.p;
      if (p.length < 6) continue;
      let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
      let cx = 0, cz = 0;
      const count = p.length / 2;
      for (let i = 0; i < p.length; i += 2) {
        const x = p[i], z = p[i + 1];
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (z < minZ) minZ = z;
        if (z > maxZ) maxZ = z;
        cx += x;
        cz += z;
      }
      const baseY = getTerrainHeight(cx / count, cz / count);
      const entry: IndexedBuilding = { minX, maxX, minZ, maxZ, maxY: baseY + b.h, poly: p };

      const gx0 = Math.floor(minX / CELL_SIZE);
      const gx1 = Math.floor(maxX / CELL_SIZE);
      const gz0 = Math.floor(minZ / CELL_SIZE);
      const gz1 = Math.floor(maxZ / CELL_SIZE);
      for (let gx = gx0; gx <= gx1; gx++) {
        for (let gz = gz0; gz <= gz1; gz++) {
          const key = `${gx},${gz}`;
          let arr = this.buildingGrid.get(key);
          if (!arr) { arr = []; this.buildingGrid.set(key, arr); }
          arr.push(entry);
        }
      }
    }

    // 2. Index named road segments for O(1) live Brno street name HUD lookup
    const drivableTypes = new Set(['primary', 'secondary', 'tertiary', 'residential', 'unclassified', 'primary_link', 'secondary_link']);
    this.drivableRoads = [];

    for (const r of data.roads) {
      if (drivableTypes.has(r.t) && r.p.length >= 6) {
        this.drivableRoads.push(r);
      }
      if (!r.n) continue;
      for (let i = 0; i < r.p.length - 2; i += 2) {
        const x1 = r.p[i], z1 = r.p[i + 1];
        const x2 = r.p[i + 2], z2 = r.p[i + 3];
        const seg: IndexedRoadSeg = { x1, z1, x2, z2, name: r.n, width: r.w };
        const gx0 = Math.floor(Math.min(x1, x2) / CELL_SIZE);
        const gx1 = Math.floor(Math.max(x1, x2) / CELL_SIZE);
        const gz0 = Math.floor(Math.min(z1, z2) / CELL_SIZE);
        const gz1 = Math.floor(Math.max(z1, z2) / CELL_SIZE);
        for (let gx = gx0; gx <= gx1; gx++) {
          for (let gz = gz0; gz <= gz1; gz++) {
            const key = `${gx},${gz}`;
            let arr = this.streetGrid.get(key);
            if (!arr) { arr = []; this.streetGrid.set(key, arr); }
            arr.push(seg);
          }
        }
      }
    }
  }

  /**
   * Exact 2D circle vs real OSM building footprint polygon collision resolution.
   * Allows smooth driving along angled/curved real Brno streets!
   */
  public resolveCircleCollision(
    x: number,
    y: number,
    z: number,
    radius: number
  ): { x: number; z: number; hit: boolean; nx: number; nz: number } {
    let curX = x;
    let curZ = z;
    let hit = false;
    let outNx = 0;
    let outNz = 0;

    const gx0 = Math.floor((curX - radius) / CELL_SIZE);
    const gx1 = Math.floor((curX + radius) / CELL_SIZE);
    const gz0 = Math.floor((curZ - radius) / CELL_SIZE);
    const gz1 = Math.floor((curZ + radius) / CELL_SIZE);

    const visited = new Set<IndexedBuilding>();
    for (let gx = gx0; gx <= gx1; gx++) {
      for (let gz = gz0; gz <= gz1; gz++) {
        const list = this.buildingGrid.get(`${gx},${gz}`);
        if (!list) continue;
        for (const b of list) {
          if (visited.has(b)) continue;
          visited.add(b);
          if (y > b.maxY + 0.5) continue;
          if (curX + radius < b.minX || curX - radius > b.maxX || curZ + radius < b.minZ || curZ - radius > b.maxZ) {
            continue;
          }

          const poly = b.poly;
          const inside = this.pointInPoly(curX, curZ, poly);

          // Find closest edge point on polygon
          let bestDistSq = Infinity;
          let closestX = curX;
          let closestZ = curZ;
          for (let i = 0; i < poly.length; i += 2) {
            const j = (i + 2) % poly.length;
            const ax = poly[i], az = poly[i + 1];
            const bx = poly[j], bz = poly[j + 1];
            const abx = bx - ax, abz = bz - az;
            const lenSq = abx * abx + abz * abz;
            let t = 0;
            if (lenSq > 1e-6) {
              t = Math.max(0, Math.min(1, ((curX - ax) * abx + (curZ - az) * abz) / lenSq));
            }
            const px = ax + t * abx;
            const pz = az + t * abz;
            const dSq = (curX - px) * (curX - px) + (curZ - pz) * (curZ - pz);
            if (dSq < bestDistSq) {
              bestDistSq = dSq;
              closestX = px;
              closestZ = pz;
            }
          }

          const dist = Math.sqrt(bestDistSq);
          if (inside) {
            // Push cleanly back outside across nearest wall
            const dx = closestX - curX;
            const dz = closestZ - curZ;
            const len = Math.hypot(dx, dz) || 1;
            const nx = dx / len;
            const nz = dz / len;
            curX = closestX + nx * (radius + 0.08);
            curZ = closestZ + nz * (radius + 0.08);
            hit = true;
            outNx = nx;
            outNz = nz;
          } else if (dist < radius && dist > 1e-5) {
            const nx = (curX - closestX) / dist;
            const nz = (curZ - closestZ) / dist;
            const push = radius - dist;
            curX += nx * push;
            curZ += nz * push;
            hit = true;
            outNx = nx;
            outNz = nz;
          }
        }
      }
    }

    return { x: curX, z: curZ, hit, nx: outNx, nz: outNz };
  }

  /** Point collision check for fast projectiles (bullets / rockets) */
  public hitsBuilding(x: number, y: number, z: number): boolean {
    const key = `${Math.floor(x / CELL_SIZE)},${Math.floor(z / CELL_SIZE)}`;
    const list = this.buildingGrid.get(key);
    if (!list) return false;
    for (const b of list) {
      if (y > b.maxY) continue;
      if (x >= b.minX && x <= b.maxX && z >= b.minZ && z <= b.maxZ) {
        if (this.pointInPoly(x, z, b.poly)) return true;
      }
    }
    return false;
  }

  /** Live real Brno street name at (x, z) */
  public getStreetNameAt(x: number, z: number): string {
    const gx = Math.floor(x / CELL_SIZE);
    const gz = Math.floor(z / CELL_SIZE);
    let bestName = '';
    let bestDist = 42;

    for (let dx = -1; dx <= 1; dx++) {
      for (let dz = -1; dz <= 1; dz++) {
        const list = this.streetGrid.get(`${gx + dx},${gz + dz}`);
        if (!list) continue;
        for (const s of list) {
          const abx = s.x2 - s.x1, abz = s.z2 - s.z1;
          const lenSq = abx * abx + abz * abz;
          let t = 0;
          if (lenSq > 1e-5) t = Math.max(0, Math.min(1, ((x - s.x1) * abx + (z - s.z1) * abz) / lenSq));
          const px = s.x1 + t * abx;
          const pz = s.z1 + t * abz;
          const d = Math.hypot(x - px, z - pz);
          if (d < bestDist) {
            bestDist = d;
            bestName = s.name;
          }
        }
      }
    }
    return bestName || 'Brno-střed';
  }

  /** Nearest real road point + direction (for PČR police spawns & vehicle drops) */
  public getNearestRoadSpawn(targetX: number, targetZ: number, minDist = 0): { x: number; z: number; yaw: number } {
    let bestX = targetX;
    let bestZ = targetZ;
    let bestYaw = 0;
    let bestScore = Infinity;

    for (let k = 0; k < this.drivableRoads.length; k += 2) {
      const r = this.drivableRoads[k];
      for (let i = 0; i < r.p.length - 2; i += 2) {
        const x1 = r.p[i], z1 = r.p[i + 1];
        const x2 = r.p[i + 2], z2 = r.p[i + 3];
        const mx = (x1 + x2) * 0.5;
        const mz = (z1 + z2) * 0.5;
        const d = Math.hypot(mx - targetX, mz - targetZ);
        if (d < minDist) continue;
        if (d < bestScore) {
          bestScore = d;
          bestX = mx;
          bestZ = mz;
          bestYaw = Math.atan2(x2 - x1, z2 - z1);
        }
      }
    }
    return { x: bestX, z: bestZ, yaw: bestYaw };
  }

  public pointInPoly(x: number, z: number, p: number[]): boolean {
    let inside = false;
    for (let i = 0, j = p.length - 2; i < p.length; j = i, i += 2) {
      const xi = p[i], zi = p[i + 1];
      const xj = p[j], zj = p[j + 1];
      if (((zi > z) !== (zj > z)) && (x < ((xj - xi) * (z - zi)) / (zj - zi + 1e-9) + xi)) {
        inside = !inside;
      }
    }
    return inside;
  }
}

export async function loadBrnoOSMData(): Promise<BrnoOSMData> {
  const res = await fetch('./brno-osm.json');
  if (!res.ok) {
    throw new Error(`Nepodařilo se načíst 1:1 mapu Brna (HTTP ${res.status})`);
  }
  return (await res.json()) as BrnoOSMData;
}
