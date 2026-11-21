import * as THREE from 'three';
import { RampCollider, getTerrainHeight } from './types';
import { BrnoTextures } from './textures';
import { BrnoOSMData, BrnoSpatialIndex } from './osm';

export interface DestructibleProp {
  mesh: THREE.Object3D;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  rx: number;
  rz: number;
  hit: boolean;
  radius: number;
}

export interface BrnoWorld {
  group: THREE.Group;
  spatial: BrnoSpatialIndex;
  ramps: RampCollider[];
  destructibles: DestructibleProp[];
  windowMaterials: THREE.MeshStandardMaterial[];
  neonMaterials: THREE.MeshStandardMaterial[];
  orlojRings: THREE.Mesh[];
  azBeacon: THREE.Mesh;
  tramPath: THREE.Vector3[];
  updateVisuals: (time: number, nightFactor: number) => void;
  getSurfaceHeight: (x: number, z: number) => { y: number; ramp: RampCollider | null };
}

class MeshAccumulator {
  positions: number[] = [];
  normals: number[] = [];
  uvs: number[] = [];

  addTri(
    ax: number, ay: number, az: number, au: number, av: number,
    bx: number, by: number, bz: number, bu: number, bv: number,
    cx: number, cy: number, cz: number, cu: number, cv: number,
    nx: number, ny: number, nz: number
  ): void {
    this.positions.push(ax, ay, az, bx, by, bz, cx, cy, cz);
    this.normals.push(nx, ny, nz, nx, ny, nz, nx, ny, nz);
    this.uvs.push(au, av, bu, bv, cu, cv);
  }

  addQuad(
    ax: number, ay: number, az: number, au: number, av: number,
    bx: number, by: number, bz: number, bu: number, bv: number,
    cx: number, cy: number, cz: number, cu: number, cv: number,
    dx: number, dy: number, dz: number, du: number, dv: number,
    nx: number, ny: number, nz: number
  ): void {
    this.addTri(ax, ay, az, au, av, bx, by, bz, bu, bv, cx, cy, cz, cu, cv, nx, ny, nz);
    this.addTri(ax, ay, az, au, av, cx, cy, cz, cu, cv, dx, dy, dz, du, dv, nx, ny, nz);
  }

  toGeometry(): THREE.BufferGeometry {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(this.positions, 3));
    geo.setAttribute('normal', new THREE.Float32BufferAttribute(this.normals, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(this.uvs, 2));
    geo.computeBoundingSphere();
    return geo;
  }
}

function polygonSignedArea(poly: number[]): number {
  let area = 0;
  for (let i = 0; i < poly.length; i += 2) {
    const j = (i + 2) % poly.length;
    area += poly[i] * poly[j + 1] - poly[j] * poly[i + 1];
  }
  return area * 0.5;
}

function addFlatPolygonToAcc(
  acc: MeshAccumulator,
  poly: number[],
  yOffset: number,
  uvScale: number
): void {
  if (poly.length < 6) return;
  const contour: THREE.Vector2[] = [];
  for (let i = 0; i < poly.length; i += 2) {
    contour.push(new THREE.Vector2(poly[i], poly[i + 1]));
  }
  let faces: number[][];
  try {
    faces = THREE.ShapeUtils.triangulateShape(contour, []);
  } catch {
    return;
  }
  for (const [i0, i1, i2] of faces) {
    const a = contour[i0], b = contour[i1], c = contour[i2];
    const ay = getTerrainHeight(a.x, a.y) + yOffset;
    const by = getTerrainHeight(b.x, b.y) + yOffset;
    const cy = getTerrainHeight(c.x, c.y) + yOffset;
    // Ensure upward winding (CCW in XZ plane -> normal +Y)
    const cross = (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);
    if (cross < 0) {
      acc.addTri(
        a.x, ay, a.y, a.x * uvScale, a.y * uvScale,
        b.x, by, b.y, b.x * uvScale, b.y * uvScale,
        c.x, cy, c.y, c.x * uvScale, c.y * uvScale,
        0, 1, 0
      );
    } else {
      acc.addTri(
        a.x, ay, a.y, a.x * uvScale, a.y * uvScale,
        c.x, cy, c.y, c.x * uvScale, c.y * uvScale,
        b.x, by, b.y, b.x * uvScale, b.y * uvScale,
        0, 1, 0
      );
    }
  }
}

function addRibbonPolyline(
  acc: MeshAccumulator,
  pts: number[],
  halfW: number,
  yOffset: number,
  vRepeatMeters: number
): void {
  let distAcc = 0;
  for (let i = 0; i < pts.length - 2; i += 2) {
    const x1 = pts[i], z1 = pts[i + 1];
    const x2 = pts[i + 2], z2 = pts[i + 3];
    const dx = x2 - x1;
    const dz = z2 - z1;
    const len = Math.hypot(dx, dz);
    if (len < 0.2) continue;

    // Slight lengthwise overlap (0.45m) smoothly closes corner miters
    const ux = dx / len;
    const uz = dz / len;
    const px = -uz * halfW;
    const pz = ux * halfW;

    const sx1 = x1 - ux * 0.45;
    const sz1 = z1 - uz * 0.45;
    const sx2 = x2 + ux * 0.45;
    const sz2 = z2 + uz * 0.45;

    const y1L = getTerrainHeight(sx1 + px, sz1 + pz) + yOffset;
    const y1R = getTerrainHeight(sx1 - px, sz1 - pz) + yOffset;
    const y2L = getTerrainHeight(sx2 + px, sz2 + pz) + yOffset;
    const y2R = getTerrainHeight(sx2 - px, sz2 - pz) + yOffset;

    const v0 = distAcc / vRepeatMeters;
    distAcc += len;
    const v1 = distAcc / vRepeatMeters;

    acc.addQuad(
      sx1 + px, y1L, sz1 + pz, 0, v0,
      sx2 + px, y2L, sz2 + pz, 0, v1,
      sx2 - px, y2R, sz2 - pz, 1, v1,
      sx1 - px, y1R, sz1 - pz, 1, v0,
      0, 1, 0
    );
  }
}

export function buildBrnoWorld(textures: BrnoTextures, osm: BrnoOSMData): BrnoWorld {
  const group = new THREE.Group();
  const spatial = new BrnoSpatialIndex(osm, getTerrainHeight);
  const ramps: RampCollider[] = [];
  const destructibles: DestructibleProp[] = [];
  const windowMaterials: THREE.MeshStandardMaterial[] = [];
  const neonMaterials: THREE.MeshStandardMaterial[] = [];
  const orlojRings: THREE.Mesh[] = [];

  // -------------------------------------------------------
  // 1. 1:1 3D TERRAIN GROUND PLANE (2x expanded: 5.5 km x 6.2 km)
  // -------------------------------------------------------
  const wSize = 5600;
  const hSize = 6200;
  const terrainGeo = new THREE.PlaneGeometry(wSize, hSize, 150, 150);
  terrainGeo.rotateX(-Math.PI / 2);
  terrainGeo.translate(-60, 0, 80);

  const posAttr = terrainGeo.attributes.position;
  const colors = new Float32Array(posAttr.count * 3);
  const cUrban = new THREE.Color('#3c414a');
  const cHill = new THREE.Color('#345e36');
  const cTmp = new THREE.Color();

  for (let i = 0; i < posAttr.count; i++) {
    const vx = posAttr.getX(i);
    const vz = posAttr.getZ(i);
    const vy = getTerrainHeight(vx, vz);
    posAttr.setY(i, vy);
    const hillBlend = Math.min(1, vy / 10);
    cTmp.copy(cUrban).lerp(cHill, hillBlend);
    colors[i * 3] = cTmp.r;
    colors[i * 3 + 1] = cTmp.g;
    colors[i * 3 + 2] = cTmp.b;
  }
  terrainGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  terrainGeo.computeVertexNormals();

  const terrainMesh = new THREE.Mesh(
    terrainGeo,
    new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.94, metalness: 0.03 })
  );
  terrainMesh.receiveShadow = true;
  group.add(terrainMesh);

  // -------------------------------------------------------
  // 2. MERGED REAL 1:1 PARKS, PLAZAS & ŘEKA SVRATKA
  // -------------------------------------------------------
  const parkAcc = new MeshAccumulator();
  for (const poly of osm.parks) {
    addFlatPolygonToAcc(parkAcc, poly, 0.08, 0.04);
  }
  if (parkAcc.positions.length > 0) {
    const parkMesh = new THREE.Mesh(
      parkAcc.toGeometry(),
      new THREE.MeshStandardMaterial({ map: textures.grass, roughness: 0.92 })
    );
    parkMesh.receiveShadow = true;
    group.add(parkMesh);
  }

  const plazaAcc = new MeshAccumulator();
  for (const pl of osm.plazas) {
    addFlatPolygonToAcc(plazaAcc, pl.p, 0.12, 0.08);
  }
  if (plazaAcc.positions.length > 0) {
    const plazaMesh = new THREE.Mesh(
      plazaAcc.toGeometry(),
      new THREE.MeshStandardMaterial({ map: textures.cobble, roughness: 0.84 })
    );
    plazaMesh.receiveShadow = true;
    group.add(plazaMesh);
  }

  const waterAcc = new MeshAccumulator();
  for (const poly of osm.water) {
    addFlatPolygonToAcc(waterAcc, poly, 0.14, 0.02);
  }
  for (const ww of osm.waterways) {
    addRibbonPolyline(waterAcc, ww.p, ww.w * 0.5, 0.13, 20);
  }
  if (waterAcc.positions.length > 0) {
    const waterMesh = new THREE.Mesh(
      waterAcc.toGeometry(),
      new THREE.MeshStandardMaterial({
        color: 0x0e7490,
        roughness: 0.18,
        metalness: 0.6,
        transparent: true,
        opacity: 0.9
      })
    );
    waterMesh.receiveShadow = true;
    group.add(waterMesh);
  }

  // -------------------------------------------------------
  // 3. MERGED REAL 1:1 BRNO STREETS (2,357 OSM ROAD SEGMENTS!)
  // -------------------------------------------------------
  const majorRoadAcc = new MeshAccumulator();
  const minorRoadAcc = new MeshAccumulator();
  const pedRoadAcc = new MeshAccumulator();

  for (const r of osm.roads) {
    if (r.t === 'pedestrian' || r.t === 'living_street') {
      addRibbonPolyline(pedRoadAcc, r.p, r.w * 0.5, 0.16, 12);
    } else if (r.t === 'primary' || r.t === 'secondary' || r.t === 'trunk' || r.t === 'motorway' || r.t === 'tertiary') {
      addRibbonPolyline(majorRoadAcc, r.p, r.w * 0.5, 0.22, 16);
    } else {
      addRibbonPolyline(minorRoadAcc, r.p, r.w * 0.5, 0.18, 16);
    }
  }

  if (majorRoadAcc.positions.length > 0) {
    const majorRoadMesh = new THREE.Mesh(
      majorRoadAcc.toGeometry(),
      new THREE.MeshStandardMaterial({ map: textures.asphalt, roughness: 0.85, metalness: 0.06 })
    );
    majorRoadMesh.receiveShadow = true;
    group.add(majorRoadMesh);
  }
  if (minorRoadAcc.positions.length > 0) {
    const minorRoadMesh = new THREE.Mesh(
      minorRoadAcc.toGeometry(),
      new THREE.MeshStandardMaterial({ color: 0x2b303a, roughness: 0.88 })
    );
    minorRoadMesh.receiveShadow = true;
    group.add(minorRoadMesh);
  }
  if (pedRoadAcc.positions.length > 0) {
    const pedRoadMesh = new THREE.Mesh(
      pedRoadAcc.toGeometry(),
      new THREE.MeshStandardMaterial({ map: textures.cobble, roughness: 0.82 })
    );
    pedRoadMesh.receiveShadow = true;
    group.add(pedRoadMesh);
  }

  // -------------------------------------------------------
  // 4. MERGED REAL 1:1 DPMB TRAM TRACKS (314 SEGMENTS!)
  // -------------------------------------------------------
  const tramAcc = new MeshAccumulator();
  for (const tr of osm.trams) {
    for (let i = 0; i < tr.length - 2; i += 2) {
      const x1 = tr[i], z1 = tr[i + 1];
      const x2 = tr[i + 2], z2 = tr[i + 3];
      const dx = x2 - x1, dz = z2 - z1;
      const len = Math.hypot(dx, dz);
      if (len < 0.2) continue;
      const px = (-dz / len) * 0.72;
      const pz = (dx / len) * 0.72;
      for (const side of [-1, 1]) {
        addRibbonPolyline(
          tramAcc,
          [x1 + px * side, z1 + pz * side, x2 + px * side, z2 + pz * side],
          0.08,
          0.26,
          10
        );
      }
    }
  }
  if (tramAcc.positions.length > 0) {
    const railMesh = new THREE.Mesh(
      tramAcc.toGeometry(),
      new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.85, roughness: 0.28 })
    );
    group.add(railMesh);
  }

  // -------------------------------------------------------
  // 5. MERGED REAL 1:1 BRNO BUILDINGS (4,762 FOOTPRINTS -> 9 DRAW CALLS!)
  // -------------------------------------------------------
  const wallBuckets = Array.from({ length: 7 }, () => new MeshAccumulator());
  const redRoofAcc = new MeshAccumulator();
  const flatRoofAcc = new MeshAccumulator();

  for (const b of osm.buildings) {
    const p = b.p;
    if (p.length < 6) continue;
    let cx = 0, cz = 0;
    const nPts = p.length / 2;
    for (let i = 0; i < p.length; i += 2) {
      cx += p[i];
      cz += p[i + 1];
    }
    cx /= nPts;
    cz /= nPts;

    const groundY = getTerrainHeight(cx, cz);
    const botY = groundY - 2.5; // Embed slightly into hillsides so buildings never float on Špilberk/Petrov!
    const topY = groundY + b.h;
    const bucket = wallBuckets[Math.min(6, Math.max(0, b.c))];

    // Ensure consistent polygon orientation so outward wall normals always point outward!
    const signedArea = polygonSignedArea(p);
    const flip = signedArea > 0;

    for (let i = 0; i < p.length; i += 2) {
      const j = (i + 2) % p.length;
      const ax = flip ? p[j] : p[i];
      const az = flip ? p[j + 1] : p[i + 1];
      const bx = flip ? p[i] : p[j];
      const bz = flip ? p[i + 1] : p[j + 1];
      const edgeLen = Math.hypot(bx - ax, bz - az);
      if (edgeLen < 0.2) continue;

      const nx = (bz - az) / edgeLen;
      const nz = -(bx - ax) / edgeLen;
      const uSpan = Math.max(0.5, edgeLen / 12);
      const vSpan = Math.max(0.5, (topY - botY) / 14);

      bucket.addQuad(
        ax, botY, az, 0, 0,
        bx, botY, bz, uSpan, 0,
        bx, topY, bz, uSpan, vSpan,
        ax, topY, az, 0, vSpan,
        nx, 0, nz
      );
    }

    // Triangulated Roof Cap (Moravian terracotta red roofs for historic buildings, slate for modern)
    const roofAcc = b.c === 5 ? flatRoofAcc : redRoofAcc;
    const contour: THREE.Vector2[] = [];
    for (let i = 0; i < p.length; i += 2) {
      contour.push(new THREE.Vector2(p[i], p[i + 1]));
    }
    try {
      const faces = THREE.ShapeUtils.triangulateShape(contour, []);
      for (const [i0, i1, i2] of faces) {
        const va = contour[i0], vb = contour[i1], vc = contour[i2];
        const cross = (vb.x - va.x) * (vc.y - va.y) - (vb.y - va.y) * (vc.x - va.x);
        if (cross < 0) {
          roofAcc.addTri(
            va.x, topY, va.y, va.x * 0.08, va.y * 0.08,
            vb.x, topY, vb.y, vb.x * 0.08, vb.y * 0.08,
            vc.x, topY, vc.y, vc.x * 0.08, vc.y * 0.08,
            0, 1, 0
          );
        } else {
          roofAcc.addTri(
            va.x, topY, va.y, va.x * 0.08, va.y * 0.08,
            vc.x, topY, vc.y, vc.x * 0.08, vc.y * 0.08,
            vb.x, topY, vb.y, vb.x * 0.08, vb.y * 0.08,
            0, 1, 0
          );
        }
      }
    } catch {
      // Skip degenerate roofs
    }
  }

  // Create 7 merged building wall meshes (cast & receive real shadows!)
  wallBuckets.forEach((acc, idx) => {
    if (acc.positions.length === 0) return;
    let mat: THREE.MeshStandardMaterial;
    if (idx === 6) {
      mat = new THREE.MeshStandardMaterial({ map: textures.stone, roughness: 0.8 });
    } else {
      const fIdx = Math.min(textures.facades.length - 1, idx);
      mat = new THREE.MeshStandardMaterial({
        map: textures.facades[fIdx],
        emissiveMap: textures.facadesEmissive[fIdx],
        emissive: new THREE.Color(0xffdfa0),
        emissiveIntensity: 0.25,
        roughness: idx === 5 ? 0.35 : 0.75,
        metalness: idx === 5 ? 0.5 : 0.08
      });
      windowMaterials.push(mat);
    }
    const mesh = new THREE.Mesh(acc.toGeometry(), mat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
  });

  if (redRoofAcc.positions.length > 0) {
    const redRoofs = new THREE.Mesh(
      redRoofAcc.toGeometry(),
      new THREE.MeshStandardMaterial({ map: textures.roofTiles, roughness: 0.82 })
    );
    redRoofs.receiveShadow = true;
    group.add(redRoofs);
  }
  if (flatRoofAcc.positions.length > 0) {
    const flatRoofs = new THREE.Mesh(
      flatRoofAcc.toGeometry(),
      new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.85 })
    );
    flatRoofs.receiveShadow = true;
    group.add(flatRoofs);
  }

  // -------------------------------------------------------
  // 6. HERO 3D BRNO LANDMARKS AT EXACT 1:1 GPS POSITIONS!
  // -------------------------------------------------------
  const makeNeonSign = (text: string, x: number, y: number, z: number, rotY: number, w: number, h: number, bg: string, fg: string, glowHex: number) => {
    const tex = textures.createSign(text, bg, fg, fg);
    const mat = new THREE.MeshStandardMaterial({
      map: tex,
      emissive: new THREE.Color(glowHex),
      emissiveMap: tex,
      emissiveIntensity: 0.7,
      roughness: 0.35
    });
    neonMaterials.push(mat);
    const board = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.45), mat);
    board.position.set(x, y, z);
    board.rotation.y = rotY;
    group.add(board);
    return board;
  };

  // A. BRNĚNSKÝ ORLOJ & MOROVÝ SLOUP (Náměstí Svobody, exact GPS origin!)
  {
    const orlojGroup = new THREE.Group();
    orlojGroup.position.set(-10, getTerrainHeight(-10, -4) + 0.16, -4);

    const pts: THREE.Vector2[] = [
      new THREE.Vector2(0.0, 0),
      new THREE.Vector2(1.05, 0),
      new THREE.Vector2(1.12, 1.2),
      new THREE.Vector2(1.1, 3.0),
      new THREE.Vector2(0.95, 4.6),
      new THREE.Vector2(0.65, 5.7),
      new THREE.Vector2(0.28, 6.25),
      new THREE.Vector2(0.0, 6.45)
    ];
    const body = new THREE.Mesh(
      new THREE.LatheGeometry(pts, 28),
      new THREE.MeshStandardMaterial({ color: 0x101318, roughness: 0.14, metalness: 0.45 })
    );
    body.castShadow = true;
    orlojGroup.add(body);

    const brassMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.85, roughness: 0.25 });
    for (const [ry, rad] of [[2.6, 1.12], [3.5, 1.07], [4.3, 0.99]] as const) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(rad, 0.055, 10, 32), brassMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = ry;
      orlojGroup.add(ring);
      orlojRings.push(ring);
    }

    const baseGlow = new THREE.Mesh(
      new THREE.RingGeometry(1.5, 2.0, 32),
      new THREE.MeshBasicMaterial({ color: 0xff5e8e, side: THREE.DoubleSide })
    );
    baseGlow.rotation.x = -Math.PI / 2;
    baseGlow.position.y = 0.06;
    orlojGroup.add(baseGlow);
    group.add(orlojGroup);

    // Morový sloup at north end of Náměstí Svobody
    const colGroup = new THREE.Group();
    colGroup.position.set(4, 0.16, -44);
    const limestone = new THREE.MeshStandardMaterial({ map: textures.stone, roughness: 0.72 });
    const ped = new THREE.Mesh(new THREE.BoxGeometry(4.2, 2.4, 4.2), limestone);
    ped.position.y = 1.2;
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.65, 9.2, 12), limestone);
    shaft.position.y = 7.0;
    const goldTop = new THREE.Mesh(new THREE.OctahedronGeometry(0.95, 0), brassMat);
    goldTop.position.y = 12.2;
    colGroup.add(ped, shaft, goldTop);
    group.add(colGroup);
  }

  // B. KATEDRÁLA SV. PETRA A PAVLA (PETROV) at exact GPS (-84, 459)
  {
    const baseH = getTerrainHeight(-84, 459);
    const petrov = new THREE.Group();
    petrov.position.set(-84, baseH, 459);
    petrov.rotation.y = 0.22;

    const gothicStone = new THREE.MeshStandardMaterial({ map: textures.stone, color: 0xd8d0c0, roughness: 0.8 });
    const slateMat = new THREE.MeshStandardMaterial({ color: 0x222938, roughness: 0.55, metalness: 0.25 });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.9, roughness: 0.2 });

    const nave = new THREE.Mesh(new THREE.BoxGeometry(20, 20, 44), gothicStone);
    nave.position.set(0, 10, 0);
    nave.castShadow = true;
    petrov.add(nave);

    // Famous 84m Twin Gothic Spires visible across all of Brno!
    for (const sx of [-6.8, 6.8]) {
      const belfry = new THREE.Mesh(new THREE.BoxGeometry(6.4, 34, 6.4), gothicStone);
      belfry.position.set(sx, 17, -18);
      belfry.castShadow = true;
      const spire = new THREE.Mesh(new THREE.ConeGeometry(3.2, 32, 8), slateMat);
      spire.position.set(sx, 50, -18);
      spire.castShadow = true;
      const crossV = new THREE.Mesh(new THREE.BoxGeometry(0.32, 3.6, 0.32), goldMat);
      crossV.position.set(sx, 67, -18);
      const crossH = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.32, 0.32), goldMat);
      crossH.position.set(sx, 67.6, -18);
      petrov.add(belfry, spire, crossV, crossH);
    }

    const roseMat = new THREE.MeshStandardMaterial({ color: 0xf472b6, emissive: 0xf59e0b, emissiveIntensity: 0.9 });
    neonMaterials.push(roseMat);
    const rose = new THREE.Mesh(new THREE.CircleGeometry(3.4, 16), roseMat);
    rose.position.set(0, 15, -22.2);
    rose.rotation.y = Math.PI;
    petrov.add(rose);
    group.add(petrov);
  }

  // C. HRAD ŠPILBERK WATCHTOWER & SIGN at exact GPS (-666, 84)
  {
    const baseH = getTerrainHeight(-666, 84);
    const palaceMat = new THREE.MeshStandardMaterial({ color: 0xe6c88a, roughness: 0.75 });
    const roofMat = new THREE.MeshStandardMaterial({ map: textures.roofTiles, roughness: 0.78 });

    const tower = new THREE.Mesh(new THREE.BoxGeometry(8.5, 28, 8.5), palaceMat);
    tower.position.set(-666, baseH + 14, 72);
    tower.castShadow = true;
    const spire = new THREE.Mesh(new THREE.ConeGeometry(6.8, 12, 4), roofMat);
    spire.position.set(-666, baseH + 34, 72);
    spire.rotation.y = Math.PI / 4;
    group.add(tower, spire);

    makeNeonSign('HRAD ŠPILBERK', -642, baseH + 18, 84, Math.PI / 2, 18, 3.4, '#1e1b2e', '#fbbf24', 0xf59e0b);
  }

  // D. AZ TOWER (111m TRUE 1:1 HEIGHT!) at exact GPS (-81, 1428)
  let azBeacon!: THREE.Mesh;
  {
    const az = new THREE.Group();
    az.position.set(-81, getTerrainHeight(-81, 1428), 1428);

    const azMat = new THREE.MeshStandardMaterial({ map: textures.azGlass, roughness: 0.22, metalness: 0.65 });
    const orangeMat = new THREE.MeshStandardMaterial({
      color: 0xf97316,
      roughness: 0.35,
      metalness: 0.25,
      emissive: 0xea580c,
      emissiveIntensity: 0.25
    });
    neonMaterials.push(orangeMat);
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.3, metalness: 0.3 });

    const podium = new THREE.Mesh(new THREE.BoxGeometry(34, 12, 28), whiteMat);
    podium.position.y = 6;
    const shaft1 = new THREE.Mesh(new THREE.BoxGeometry(20, 52, 18), azMat);
    shaft1.position.set(0, 38, 0);
    shaft1.castShadow = true;
    const shaft2 = new THREE.Mesh(new THREE.BoxGeometry(17.5, 42, 16), azMat);
    shaft2.position.set(3.2, 82, 0);
    shaft2.rotation.z = -0.055;
    shaft2.castShadow = true;
    const rib = new THREE.Mesh(new THREE.BoxGeometry(2.1, 92, 18.4), orangeMat);
    rib.position.set(-8.6, 56, 0);
    rib.rotation.z = -0.05;
    const crown = new THREE.Mesh(new THREE.BoxGeometry(16, 6, 15), orangeMat);
    crown.position.set(4.5, 105, 0);
    crown.rotation.z = -0.14;
    const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.4, 14, 8), whiteMat);
    antenna.position.set(5.2, 114, 0);
    azBeacon = new THREE.Mesh(
      new THREE.SphereGeometry(1.1, 10, 10),
      new THREE.MeshBasicMaterial({ color: 0xff2244 })
    );
    azBeacon.position.set(5.2, 121.5, 0);
    az.add(podium, shaft1, shaft2, rib, crown, antenna, azBeacon);
    group.add(az);
    makeNeonSign('AZ TOWER 111 m', -81, 15, 1412, Math.PI, 20, 3.6, '#0f172a', '#fb923c', 0xf97316);
  }

  // E. JEZDECKÁ SOCHA MARKRABĚTE JOŠTA at exact GPS (-31, -333)
  {
    const jost = new THREE.Group();
    jost.position.set(-31, 0.16, -333);
    const bronze = new THREE.MeshStandardMaterial({ color: 0x4b4237, metalness: 0.78, roughness: 0.32 });
    for (const [lx, lz] of [[-1.1, -1.7], [1.1, -1.7], [-1.1, 1.7], [1.1, 1.7]] as const) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, 6.2, 8), bronze);
      leg.position.set(lx, 3.1, lz);
      jost.add(leg);
    }
    const horseBody = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.7, 4.6), bronze);
    horseBody.position.set(0, 6.6, 0);
    const horseNeck = new THREE.Mesh(new THREE.BoxGeometry(1.1, 2.2, 1.2), bronze);
    horseNeck.position.set(0, 8.1, 2.0);
    horseNeck.rotation.x = 0.35;
    const horseHead = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.9, 1.8), bronze);
    horseHead.position.set(0, 9.0, 2.9);
    const rider = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.65, 2.6, 8), bronze);
    rider.position.set(0, 8.6, -0.2);
    const lance = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 6.5, 6), bronze);
    lance.position.set(-1.1, 10.6, 0.2);
    jost.add(horseBody, horseNeck, horseHead, rider, lance);
    group.add(jost);
  }

  // F. KAŠNA PARNAS & SMASHABLE MARKET STALLS (Zelný trh 42, 302)
  {
    const parnas = new THREE.Group();
    parnas.position.set(42, getTerrainHeight(42, 302) + 0.16, 302);
    const rockMat = new THREE.MeshStandardMaterial({ map: textures.stone, roughness: 0.85 });
    const basinWater = new THREE.MeshStandardMaterial({ color: 0x22d3ee, emissive: 0x0891b2, emissiveIntensity: 0.35 });
    const basin = new THREE.Mesh(new THREE.CylinderGeometry(5.2, 5.6, 1.2, 6), rockMat);
    basin.position.y = 0.6;
    const water = new THREE.Mesh(new THREE.CylinderGeometry(4.6, 4.6, 0.2, 6), basinWater);
    water.position.y = 1.15;
    const grotto = new THREE.Mesh(new THREE.DodecahedronGeometry(2.5, 0), rockMat);
    grotto.position.y = 3.2;
    const topStatue = new THREE.Mesh(new THREE.ConeGeometry(1.0, 3.0, 6), rockMat);
    topStatue.position.y = 6.2;
    parnas.add(basin, water, grotto, topStatue);
    group.add(parnas);

    const stallColors = [0xef4444, 0x10b981, 0xf59e0b, 0x3b82f6];
    const stallOffsets: Array<[number, number]> = [[-14, -10], [-14, 4], [14, -10], [14, 4], [0, -16], [0, 16]];
    stallOffsets.forEach(([ox, oz], idx) => {
      const sx = 42 + ox, sz = 302 + oz;
      const sy = getTerrainHeight(sx, sz) + 0.16;
      const stall = new THREE.Group();
      stall.position.set(sx, sy, sz);
      const table = new THREE.Mesh(new THREE.BoxGeometry(3.6, 1.0, 2.1), new THREE.MeshStandardMaterial({ color: 0x92400e }));
      table.position.y = 0.5;
      const canopy = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.24, 2.6), new THREE.MeshStandardMaterial({ color: stallColors[idx % 4] }));
      canopy.position.y = 2.5;
      stall.add(table, canopy);
      group.add(stall);
      destructibles.push({ mesh: stall, x: sx, y: sy, z: sz, vx: 0, vy: 0, vz: 0, rx: 0, rz: 0, hit: false, radius: 2.0 });
    });
  }

  // G. BRNO HLAVNÍ NÁDRAŽÍ, BVV, HVĚZDÁRNA KRAVÍ HORA & AUTOLAKÝRNA CEJL
  makeNeonSign('BRNO HLAVNÍ NÁDRAŽÍ', 318, 16, 495, -0.5, 26, 3.8, '#1e293b', '#38bdf8', 0x06b6d4);
  makeNeonSign('NÁMĚSTÍ SVOBODY', 0, 12, -55, 0, 18, 2.8, '#2e1065', '#f472b6', 0xec4899);
  makeNeonSign('VÝSTAVIŠTĚ BRNO (BVV)', -1804, 22, 743, 0, 26, 3.8, '#1e1b2e', '#e879f9', 0xc084fc);
  makeNeonSign('VILA TUGENDHAT • UNESCO', 567, 15, -1337, 0.3, 22, 3.2, '#0f172a', '#f8fafc', 0x38bdf8);

  // Hvězdárna a planetárium Brno (Kraví hora summit -1738, -1025)
  {
    const khY = getTerrainHeight(-1738, -1025);
    const obsMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.32, metalness: 0.25 });
    const domeBase = new THREE.Mesh(new THREE.CylinderGeometry(11, 12, 8, 20), obsMat);
    domeBase.position.set(-1738, khY + 4, -1025);
    const dome = new THREE.Mesh(new THREE.SphereGeometry(11, 20, 14, 0, Math.PI * 2, 0, Math.PI * 0.5), obsMat);
    dome.position.set(-1738, khY + 8, -1025);
    group.add(domeBase, dome);
    makeNeonSign('HVĚZDÁRNA KRAVÍ HORA', -1738, khY + 21, -1012, 0, 22, 3.2, '#0b1120', '#60a5fa', 0x3b82f6);
  }

  // Autolakýrna Cejl (Pay 'n' Spray neon arch at 720, -201)
  {
    const sx = 720, sz = -201;
    const spray = new THREE.Group();
    spray.position.set(sx, getTerrainHeight(sx, sz), sz);
    const padMat = new THREE.MeshStandardMaterial({ color: 0x06b6d4, emissive: 0x06b6d4, emissiveIntensity: 0.9 });
    neonMaterials.push(padMat);
    const pad = new THREE.Mesh(new THREE.BoxGeometry(10, 0.25, 10), padMat);
    pad.position.y = 0.18;
    const archMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.5 });
    const colL = new THREE.Mesh(new THREE.BoxGeometry(1.1, 6.2, 1.1), archMat);
    colL.position.set(-5.2, 3.1, 0);
    const colR = new THREE.Mesh(new THREE.BoxGeometry(1.1, 6.2, 1.1), archMat);
    colR.position.set(5.2, 3.1, 0);
    const bar = new THREE.Mesh(new THREE.BoxGeometry(11.6, 1.2, 1.4), archMat);
    bar.position.set(0, 6.4, 0);
    spray.add(pad, colL, colR, bar);
    group.add(spray);
    makeNeonSign('AUTOLAKÝRNA CEJL • PAY N SPRAY', sx, 8.6, sz, 0, 16, 2.6, '#0b0f19', '#22d3ee', 0x06b6d4);
  }

  // -------------------------------------------------------
  // 7. 5 STUNT RAMPS ON REAL 1:1 BRNO STREETS
  // -------------------------------------------------------
  const rampSpecs: RampCollider[] = [
    { x: -615, z: 84, width: 8, length: 16, height: 5.2, rotY: Math.PI / 2, name: 'Skok ze Špilberku' },
    { x: 465, z: -20, width: 8.5, length: 16, height: 4.5, rotY: 0, name: 'Koliště Turbo Skok' },
    { x: -245, z: 1210, width: 9, length: 16, height: 4.8, rotY: 0, name: 'Heršpická k AZ Tower' },
    { x: -535, z: 1110, width: 9, length: 16, height: 4.6, rotY: Math.PI / 2, name: 'Nábřeží Svratky Skok' },
    { x: -75, z: -1010, width: 8, length: 15, height: 4.2, rotY: Math.PI / 2, name: 'Lužánky Park Skok' }
  ];
  const rampMat = new THREE.MeshStandardMaterial({ color: 0xf43f5e, roughness: 0.45 });
  const rampStripe = new THREE.MeshStandardMaterial({ color: 0xfbbf24, emissive: 0xf59e0b, emissiveIntensity: 0.5 });
  neonMaterials.push(rampStripe);

  for (const r of rampSpecs) {
    ramps.push(r);
    const baseY = getTerrainHeight(r.x, r.z);
    const shape = new THREE.Shape();
    shape.moveTo(-r.length * 0.5, 0);
    shape.lineTo(r.length * 0.5, 0);
    shape.lineTo(r.length * 0.5, r.height);
    shape.closePath();
    const wedgeGeo = new THREE.ExtrudeGeometry(shape, { depth: r.width, bevelEnabled: false });
    wedgeGeo.translate(0, 0, -r.width * 0.5);
    wedgeGeo.rotateY(-Math.PI / 2);

    const mesh = new THREE.Mesh(wedgeGeo, rampMat);
    mesh.position.set(r.x, baseY, r.z);
    mesh.rotation.y = r.rotY;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);

    const lip = new THREE.Mesh(new THREE.BoxGeometry(r.width + 0.2, 0.35, 0.5), rampStripe);
    lip.position.set(
      r.x + Math.sin(r.rotY) * (r.length * 0.5),
      baseY + r.height,
      r.z + Math.cos(r.rotY) * (r.length * 0.5)
    );
    lip.rotation.y = r.rotY;
    group.add(lip);
  }

  // -------------------------------------------------------
  // 8. INSTANCED TREES IN REAL BRNO PARKS (Lužánky, Špilberk, Denisovy sady, Koliště)
  // -------------------------------------------------------
  let seed = 4919518;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
  const treePositions: Array<[number, number, number]> = [];
  for (const poly of osm.parks) {
    if (poly.length < 6) continue;
    let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
    for (let i = 0; i < poly.length; i += 2) {
      if (poly[i] < minX) minX = poly[i];
      if (poly[i] > maxX) maxX = poly[i];
      if (poly[i + 1] < minZ) minZ = poly[i + 1];
      if (poly[i + 1] > maxZ) maxZ = poly[i + 1];
    }
    const approxArea = (maxX - minX) * (maxZ - minZ);
    const count = Math.min(20, Math.floor(approxArea / 1800));
    for (let k = 0; k < count && treePositions.length < 1100; k++) {
      const tx = minX + rand() * (maxX - minX);
      const tz = minZ + rand() * (maxZ - minZ);
      if (spatial.pointInPoly(tx, tz, poly) && !spatial.hitsBuilding(tx, 5, tz)) {
        treePositions.push([tx, getTerrainHeight(tx, tz), tz]);
      }
    }
  }

  if (treePositions.length > 0) {
    const trunkGeo = new THREE.CylinderGeometry(0.32, 0.45, 3.4, 6);
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5c3d2e, roughness: 0.9 });
    const crownGeo = new THREE.IcosahedronGeometry(3.0, 1);
    const crownMat = new THREE.MeshStandardMaterial({ color: 0x2d6a36, roughness: 0.85 });

    const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, treePositions.length);
    const crowns = new THREE.InstancedMesh(crownGeo, crownMat, treePositions.length);
    const dummy = new THREE.Object3D();
    treePositions.forEach(([tx, ty, tz], i) => {
      const sc = 0.8 + rand() * 0.75;
      dummy.position.set(tx, ty + 1.6 * sc, tz);
      dummy.scale.set(sc, sc, sc);
      dummy.rotation.y = rand() * Math.PI * 2;
      dummy.updateMatrix();
      trunks.setMatrixAt(i, dummy.matrix);

      dummy.position.set(tx, ty + 4.7 * sc, tz);
      dummy.scale.set(sc, sc * 1.15, sc);
      dummy.updateMatrix();
      crowns.setMatrixAt(i, dummy.matrix);
    });
    group.add(trunks, crowns);
  }

  // -------------------------------------------------------
  // 9. REAL 1:1 BRNO TRAM LOOP PATH (Linka 1 & 4 downtown loop)
  // -------------------------------------------------------
  // Exact 1:1 GPS coordinates tracing Nádražní -> Masarykova -> náměstí Svobody -> Rašínova -> Moravské nám. -> Rooseveltova -> Koliště -> Benešova -> Nádražní
  const tramPath = [
    new THREE.Vector3(280, 0.25, 480),   // Hlavní nádraží (Nádražní)
    new THREE.Vector3(165, 0.25, 310),   // Masarykova south
    new THREE.Vector3(60, 0.25, 145),    // Masarykova north
    new THREE.Vector3(-4, 0.25, 4),      // Náměstí Svobody (past Orloj!)
    new THREE.Vector3(-42, 0.25, -135),  // Rašínova
    new THREE.Vector3(-75, 0.25, -285),  // Moravské náměstí
    new THREE.Vector3(195, 0.25, -280),  // Rooseveltova (Janáčkovo divadlo)
    new THREE.Vector3(460, 0.25, -140),  // Koliště north
    new THREE.Vector3(505, 0.25, 195),   // Malinovského náměstí / Koliště
    new THREE.Vector3(425, 0.25, 395)    // Benešova -> Hlavní nádraží
  ];

  const getSurfaceHeight = (x: number, z: number): { y: number; ramp: RampCollider | null } => {
    const base = getTerrainHeight(x, z);
    for (const r of ramps) {
      const dx = x - r.x;
      const dz = z - r.z;
      const cos = Math.cos(-r.rotY);
      const sin = Math.sin(-r.rotY);
      const localX = dx * cos - dz * sin;
      const localZ = dx * sin + dz * cos;
      if (Math.abs(localX) <= r.width * 0.52 && Math.abs(localZ) <= r.length * 0.52) {
        const t = Math.max(0, Math.min(1, (localZ + r.length * 0.5) / r.length));
        const rampY = getTerrainHeight(r.x, r.z) + t * r.height;
        if (rampY >= base) {
          return { y: rampY, ramp: r };
        }
      }
    }
    return { y: base, ramp: null };
  };

  const updateVisuals = (time: number, nightFactor: number) => {
    orlojRings.forEach((ring, i) => {
      ring.rotation.z = time * (0.25 + i * 0.14) * (i % 2 === 0 ? 1 : -1);
    });
    const blink = Math.sin(time * 4.2) > 0.15;
    (azBeacon.material as THREE.MeshBasicMaterial).color.setHex(blink ? 0xff1e42 : 0x450a0a);

    const winEmissive = 0.08 + nightFactor * 1.15;
    for (const wm of windowMaterials) wm.emissiveIntensity = winEmissive;
    const neonEmissive = 0.38 + nightFactor * 1.25;
    for (const nm of neonMaterials) nm.emissiveIntensity = neonEmissive;
  };

  return {
    group,
    spatial,
    ramps,
    destructibles,
    windowMaterials,
    neonMaterials,
    orlojRings,
    azBeacon,
    tramPath,
    updateVisuals,
    getSurfaceHeight
  };
}
