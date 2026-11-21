import * as THREE from 'three';
import {
  AABB,
  BRIDGE_XS,
  RIVER_Z_MAX,
  RIVER_Z_MIN,
  ROAD_WIDTH,
  ROAD_X,
  ROAD_Z,
  RampCollider,
  WORLD_HALF,
  getTerrainHeight
} from './types';
import { BrnoTextures } from './textures';

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
  colliders: AABB[];
  ramps: RampCollider[];
  destructibles: DestructibleProp[];
  windowMaterials: THREE.MeshStandardMaterial[];
  neonMaterials: THREE.MeshStandardMaterial[];
  lampBulbs: THREE.MeshBasicMaterial[];
  orlojRings: THREE.Mesh[];
  azBeacon: THREE.Mesh;
  waterMesh: THREE.Mesh;
  tramPath: THREE.Vector3[];
  updateVisuals: (time: number, nightFactor: number) => void;
  getSurfaceHeight: (x: number, z: number) => { y: number; ramp: RampCollider | null };
}

export function buildBrnoWorld(textures: BrnoTextures): BrnoWorld {
  const group = new THREE.Group();
  const colliders: AABB[] = [];
  const ramps: RampCollider[] = [];
  const destructibles: DestructibleProp[] = [];
  const windowMaterials: THREE.MeshStandardMaterial[] = [];
  const neonMaterials: THREE.MeshStandardMaterial[] = [];
  const lampBulbs: THREE.MeshBasicMaterial[] = [];
  const orlojRings: THREE.Mesh[] = [];

  const addBoxCollider = (cx: number, cy: number, cz: number, sx: number, sy: number, sz: number, label?: string) => {
    colliders.push({
      minX: cx - sx * 0.5,
      maxX: cx + sx * 0.5,
      minY: cy - sy * 0.5,
      maxY: cy + sy * 0.5,
      minZ: cz - sz * 0.5,
      maxZ: cz + sz * 0.5,
      label
    });
  };

  // -------------------------------------------------------
  // 1. 3D SCULPTED TERRAIN (Špilberk, Petrov, Svratka, Lužánky)
  // -------------------------------------------------------
  const terrainSize = WORLD_HALF * 2 + 120;
  const terrainGeo = new THREE.PlaneGeometry(terrainSize, terrainSize, 150, 150);
  terrainGeo.rotateX(-Math.PI / 2);
  const posAttr = terrainGeo.attributes.position;
  const colors = new Float32Array(posAttr.count * 3);

  const cUrban = new THREE.Color('#474c54');
  const cGrass = new THREE.Color('#3f703d');
  const cHill = new THREE.Color('#376434');
  const cRiver = new THREE.Color('#273545');
  const cTmp = new THREE.Color();

  for (let i = 0; i < posAttr.count; i++) {
    const vx = posAttr.getX(i);
    const vz = posAttr.getZ(i);
    const vy = getTerrainHeight(vx, vz);
    posAttr.setY(i, vy);

    // Determine surface color biome
    const isLuzanky = vx > -75 && vx < 165 && vz < -226;
    const isSpilberk = Math.hypot(vx + 215, vz + 25) < 92;
    const isPetrov = Math.hypot(vx + 116, vz - 132) < 58;
    const isRiver = vz > RIVER_Z_MIN - 6 && vz < RIVER_Z_MAX + 6;
    const isOuter = Math.abs(vx) > 330 || Math.abs(vz) > 340;

    if (isRiver && vy < -0.2) {
      cTmp.copy(cRiver);
    } else if (isSpilberk || isPetrov) {
      cTmp.copy(cHill).lerp(cGrass, Math.min(1, vy / 18));
    } else if (isLuzanky || isOuter) {
      cTmp.copy(cGrass);
    } else {
      cTmp.copy(cUrban);
    }
    colors[i * 3] = cTmp.r;
    colors[i * 3 + 1] = cTmp.g;
    colors[i * 3 + 2] = cTmp.b;
  }
  terrainGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  terrainGeo.computeVertexNormals();

  const terrainMat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.92,
    metalness: 0.04
  });
  const terrainMesh = new THREE.Mesh(terrainGeo, terrainMat);
  terrainMesh.receiveShadow = true;
  group.add(terrainMesh);

  // -------------------------------------------------------
  // 2. ŘEKA SVRATKA (Water plane & bridges)
  // -------------------------------------------------------
  const waterGeo = new THREE.PlaneGeometry(terrainSize, RIVER_Z_MAX - RIVER_Z_MIN + 14, 24, 6);
  waterGeo.rotateX(-Math.PI / 2);
  const waterMat = new THREE.MeshStandardMaterial({
    color: 0x0e6b8a,
    roughness: 0.16,
    metalness: 0.65,
    transparent: true,
    opacity: 0.88
  });
  const waterMesh = new THREE.Mesh(waterGeo, waterMat);
  waterMesh.position.set(0, -1.0, (RIVER_Z_MIN + RIVER_Z_MAX) * 0.5);
  waterMesh.receiveShadow = true;
  group.add(waterMesh);

  // Bridges over Svratka
  const bridgeMat = new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.7 });
  for (const bx of BRIDGE_XS) {
    const deck = new THREE.Mesh(new THREE.BoxGeometry(ROAD_WIDTH + 3, 1.2, RIVER_Z_MAX - RIVER_Z_MIN + 18), bridgeMat);
    deck.position.set(bx, -0.45, (RIVER_Z_MIN + RIVER_Z_MAX) * 0.5);
    deck.receiveShadow = true;
    deck.castShadow = true;
    group.add(deck);

    // Bridge side rails
    for (const side of [-1, 1]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(0.6, 1.4, RIVER_Z_MAX - RIVER_Z_MIN + 18), bridgeMat);
      rail.position.set(bx + side * (ROAD_WIDTH * 0.5 + 1.1), 0.75, (RIVER_Z_MIN + RIVER_Z_MAX) * 0.5);
      rail.castShadow = true;
      group.add(rail);
      addBoxCollider(rail.position.x, 0.8, rail.position.z, 0.8, 2.0, RIVER_Z_MAX - RIVER_Z_MIN + 16, 'Most Svratka');
    }
  }

  // -------------------------------------------------------
  // 3. ROAD NETWORK (Asphalt avenues + intersections + Špilberk access road)
  // -------------------------------------------------------
  const makeRoadStrip = (x1: number, z1: number, x2: number, z2: number, width: number) => {
    const len = Math.hypot(x2 - x1, z2 - z1);
    const tex = textures.asphalt.clone();
    tex.needsUpdate = true;
    tex.repeat.set(1, Math.max(1, Math.round(len / 18)));
    const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.85, metalness: 0.05 });
    const geo = new THREE.PlaneGeometry(width, len);
    geo.rotateX(-Math.PI / 2);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set((x1 + x2) * 0.5, 0.08, (z1 + z2) * 0.5);
    mesh.rotation.y = Math.atan2(x2 - x1, z2 - z1);
    mesh.receiveShadow = true;
    group.add(mesh);
  };

  // North-South Avenues
  for (const rx of ROAD_X) {
    // Skip going straight over Petrov hill on x=-140 near z=132? No, x=-140 passes right beside Petrov smoothly!
    const zMin = rx === -290 ? -110 : -220;
    const zMax = BRIDGE_XS.includes(rx as -140 | 20 | 240) ? 395 : 310;
    // Skip right through Náměstí Svobody center if needed, keep clean intersections
    makeRoadStrip(rx, zMin, rx, zMax, ROAD_WIDTH);
  }
  // East-West Avenues
  for (const rz of ROAD_Z) {
    const xMin = rz === -220 ? -140 : -340;
    const xMax = 300;
    // On z=0, stop before Špilberk hill steep side (split around x=-290..-140)
    if (rz === 0) {
      makeRoadStrip(-140, 0, xMax, 0, ROAD_WIDTH);
    } else {
      makeRoadStrip(xMin, rz, xMax, rz, ROAD_WIDTH);
    }
  }

  // Intersection dark asphalt patches (prevent z-fighting stripes)
  const interMat = new THREE.MeshStandardMaterial({ color: 0x262b35, roughness: 0.88 });
  for (const rx of ROAD_X) {
    for (const rz of ROAD_Z) {
      if (rx === -290 && rz === -220) continue;
      if (rx === -290 && rz === 0) continue;
      const h = getTerrainHeight(rx, rz);
      if (h > 2.5) continue;
      const patch = new THREE.Mesh(new THREE.PlaneGeometry(ROAD_WIDTH + 0.4, ROAD_WIDTH + 0.4), interMat);
      patch.rotation.x = -Math.PI / 2;
      patch.position.set(rx, 0.11, rz);
      patch.receiveShadow = true;
      group.add(patch);
    }
  }

  // -------------------------------------------------------
  // 4. HISTORIC COBBLESTONE PLAZAS (Náměstí Svobody & Zelný trh)
  // -------------------------------------------------------
  const cobbleMat = new THREE.MeshStandardMaterial({ map: textures.cobble, roughness: 0.82 });

  // Náměstí Svobody (Svoboďák)
  const svobodak = new THREE.Mesh(new THREE.PlaneGeometry(86, 86), cobbleMat);
  svobodak.rotation.x = -Math.PI / 2;
  svobodak.position.set(-10, 0.14, 0);
  svobodak.receiveShadow = true;
  group.add(svobodak);

  // Zelný trh (Zelňák)
  const zelnak = new THREE.Mesh(new THREE.PlaneGeometry(66, 60), cobbleMat);
  zelnak.rotation.x = -Math.PI / 2;
  zelnak.position.set(-22, 0.14, 110);
  zelnak.receiveShadow = true;
  group.add(zelnak);

  // Moravské náměstí stone plaza
  const moravak = new THREE.Mesh(new THREE.PlaneGeometry(64, 58), cobbleMat);
  moravak.rotation.x = -Math.PI / 2;
  moravak.position.set(20, 0.14, -125);
  moravak.receiveShadow = true;
  group.add(moravak);

  // -------------------------------------------------------
  // 5. CONTINUOUS TRAM RAILS (DPMB Šalina loop)
  // -------------------------------------------------------
  const tramWaypoints = [
    new THREE.Vector3(-4, 0.2, 220),    // Hlavní nádraží
    new THREE.Vector3(-4, 0.2, 110),    // Masarykova / Zelňák edge
    new THREE.Vector3(-4, 0.2, 0),      // Náměstí Svobody
    new THREE.Vector3(-4, 0.2, -104),   // Česká / Moravské náměstí
    new THREE.Vector3(124, 0.2, -104),  // Rooseveltova / Janáčkovo divadlo
    new THREE.Vector3(124, 0.2, 214),   // Koliště / Maliňák
    new THREE.Vector3(24, 0.2, 214)     // Nádražní approach
  ];
  const railMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.85, roughness: 0.3 });
  for (let i = 0; i < tramWaypoints.length; i++) {
    const a = tramWaypoints[i];
    const b = tramWaypoints[(i + 1) % tramWaypoints.length];
    const len = a.distanceTo(b);
    const angle = Math.atan2(b.x - a.x, b.z - a.z);
    const perpX = Math.cos(angle) * 0.72;
    const perpZ = -Math.sin(angle) * 0.72;
    for (const s of [-1, 1]) {
      const rail = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.06, len), railMat);
      rail.position.set((a.x + b.x) * 0.5 + perpX * s, 0.15, (a.z + b.z) * 0.5 + perpZ * s);
      rail.rotation.y = angle;
      group.add(rail);
    }
  }

  // -------------------------------------------------------
  // 6. ICONIC BRNO LANDMARKS
  // -------------------------------------------------------
  const makeNeonSign = (text: string, x: number, y: number, z: number, rotY: number, w: number, h: number, bg: string, fg: string, glowHex: number) => {
    const tex = textures.createSign(text, bg, fg, fg);
    const mat = new THREE.MeshStandardMaterial({
      map: tex,
      emissive: new THREE.Color(glowHex),
      emissiveMap: tex,
      emissiveIntensity: 0.65,
      roughness: 0.35
    });
    neonMaterials.push(mat);
    const board = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.45), mat);
    board.position.set(x, y, z);
    board.rotation.y = rotY;
    board.castShadow = true;
    group.add(board);
    return board;
  };

  // === LANDMARK A: BRNĚNSKÝ ORLOJ (Náměstí Svobody) ===
  {
    const orlojGroup = new THREE.Group();
    orlojGroup.position.set(-14, 0.14, 6);

    // Sleek black African granite bullet profile (LatheGeometry!)
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
    const graniteMat = new THREE.MeshStandardMaterial({
      color: 0x101318,
      roughness: 0.14,
      metalness: 0.42
    });
    const body = new THREE.Mesh(new THREE.LatheGeometry(pts, 28), graniteMat);
    body.castShadow = true;
    body.receiveShadow = true;
    orlojGroup.add(body);

    // Rotating bronze/brass astronomical rings
    const brassMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.85, roughness: 0.25 });
    for (const [ry, rad] of [[2.6, 1.12], [3.5, 1.07], [4.3, 0.99]] as const) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(rad, 0.055, 10, 32), brassMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = ry;
      orlojGroup.add(ring);
      orlojRings.push(ring);
    }

    // 4 catching openings (where the glass marble drops at 11:00!)
    const holeMat = new THREE.MeshStandardMaterial({ color: 0xff5e8e, emissive: 0xff2e7e, emissiveIntensity: 0.8 });
    for (let i = 0; i < 4; i++) {
      const a = (i * Math.PI) / 2;
      const hole = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.48, 0.14), holeMat);
      hole.position.set(Math.cos(a) * 1.08, 1.25, Math.sin(a) * 1.08);
      hole.rotation.y = -a + Math.PI / 2;
      orlojGroup.add(hole);
    }

    // Illuminated plaza ring around Orloj
    const baseGlow = new THREE.Mesh(
      new THREE.RingGeometry(1.5, 2.0, 32),
      new THREE.MeshBasicMaterial({ color: 0xff5e8e, side: THREE.DoubleSide })
    );
    baseGlow.rotation.x = -Math.PI / 2;
    baseGlow.position.y = 0.05;
    orlojGroup.add(baseGlow);

    group.add(orlojGroup);
    addBoxCollider(-14, 3.2, 6, 2.3, 6.5, 2.3, 'Brněnský orloj');

    // Morový sloup (Plague Column on Náměstí Svobody)
    const colGroup = new THREE.Group();
    colGroup.position.set(8, 0.14, -14);
    const limestone = new THREE.MeshStandardMaterial({ map: textures.stone, roughness: 0.72 });
    const ped1 = new THREE.Mesh(new THREE.BoxGeometry(4.4, 1.2, 4.4), limestone);
    ped1.position.y = 0.6;
    const ped2 = new THREE.Mesh(new THREE.BoxGeometry(2.6, 2.4, 2.6), limestone);
    ped2.position.y = 2.4;
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.65, 8.5, 12), limestone);
    shaft.position.y = 7.6;
    const goldTop = new THREE.Mesh(new THREE.OctahedronGeometry(0.95, 0), brassMat);
    goldTop.position.y = 12.6;
    [ped1, ped2, shaft, goldTop].forEach(m => { m.castShadow = true; colGroup.add(m); });
    group.add(colGroup);
    addBoxCollider(8, 6, -14, 4.4, 12, 4.4, 'Morový sloup');
  }

  // === LANDMARK B: HRAD ŠPILBERK (-215, -25, y = 20) ===
  {
    const baseH = 20;
    const castle = new THREE.Group();
    castle.position.set(-215, baseH, -25);

    const wallMat = new THREE.MeshStandardMaterial({ map: textures.stone, roughness: 0.85 });
    const palaceMat = new THREE.MeshStandardMaterial({ color: 0xe6c88a, roughness: 0.75 });
    const roofMat = new THREE.MeshStandardMaterial({ map: textures.roofTiles, roughness: 0.78 });

    // Bastion stone foundation platform
    const plinth = new THREE.Mesh(new THREE.CylinderGeometry(36, 44, 6, 8), wallMat);
    plinth.position.y = -2.2;
    plinth.receiveShadow = true;
    plinth.castShadow = true;
    castle.add(plinth);

    // 3 historic castle wings forming an open courtyard (facing East so player can drive right in!)
    const wingSpecs: Array<[number, number, number, number, number, number]> = [
      [-18, 5, 0, 10, 10, 34],   // West main wing
      [0, 5, -17, 36, 10, 9],    // North wing
      [0, 5, 17, 36, 10, 9]      // South wing
    ];
    for (const [wx, wy, wz, sx, sy, sz] of wingSpecs) {
      const wing = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), palaceMat);
      wing.position.set(wx, wy, wz);
      wing.castShadow = true;
      wing.receiveShadow = true;
      castle.add(wing);

      const roof = new THREE.Mesh(new THREE.ConeGeometry(Math.max(sx, sz) * 0.56, 4.2, 4), roofMat);
      roof.position.set(wx, wy + sy * 0.5 + 2.0, wz);
      roof.rotation.y = Math.PI / 4;
      roof.scale.set(sx / Math.max(sx, sz), 1, sz / Math.max(sx, sz));
      roof.castShadow = true;
      castle.add(roof);

      addBoxCollider(-215 + wx, baseH + wy, -25 + wz, sx, sy + 2, sz, 'Hrad Špilberk');
    }

    // Iconic Špilberk Watchtower (Rozhledna)
    const tower = new THREE.Mesh(new THREE.BoxGeometry(7.2, 22, 7.2), palaceMat);
    tower.position.set(-18, 15, -15);
    tower.castShadow = true;
    castle.add(tower);

    const gallery = new THREE.Mesh(new THREE.BoxGeometry(8.6, 2.2, 8.6), wallMat);
    gallery.position.set(-18, 26.2, -15);
    castle.add(gallery);

    const spire = new THREE.Mesh(new THREE.ConeGeometry(5.6, 9, 4), roofMat);
    spire.position.set(-18, 31.8, -15);
    spire.rotation.y = Math.PI / 4;
    spire.castShadow = true;
    castle.add(spire);

    group.add(castle);
    makeNeonSign('HRAD ŠPILBERK', -195, baseH + 12, -25, Math.PI / 2, 16, 3.2, '#1e1b2e', '#fbbf24', 0xf59e0b);
  }

  // === LANDMARK C: KATEDRÁLA SV. PETRA A PAVLA — PETROV (-116, 132, y = 11.5) ===
  {
    const baseH = 11.5;
    const petrov = new THREE.Group();
    petrov.position.set(-116, baseH, 132);

    const gothicStone = new THREE.MeshStandardMaterial({ map: textures.stone, color: 0xd8d0c0, roughness: 0.8 });
    const slateMat = new THREE.MeshStandardMaterial({ color: 0x222938, roughness: 0.55, metalness: 0.25 });
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, metalness: 0.9, roughness: 0.2 });

    // Main Cathedral Nave
    const nave = new THREE.Mesh(new THREE.BoxGeometry(20, 18, 34), gothicStone);
    nave.position.set(0, 9, 0);
    nave.castShadow = true;
    nave.receiveShadow = true;
    petrov.add(nave);

    const naveRoof = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 13.5, 34, 3), slateMat);
    naveRoof.rotation.x = Math.PI / 2;
    naveRoof.position.set(0, 21.5, 0);
    naveRoof.scale.set(1.0, 1, 0.72);
    petrov.add(naveRoof);

    // Iconic Twin Neo-Gothic Spires! (Visible from all over Brno!)
    for (const sx of [-6.8, 6.8]) {
      const belfry = new THREE.Mesh(new THREE.BoxGeometry(6.2, 28, 6.2), gothicStone);
      belfry.position.set(sx, 14, -14);
      belfry.castShadow = true;
      petrov.add(belfry);

      const octagon = new THREE.Mesh(new THREE.CylinderGeometry(2.3, 3.1, 10, 8), gothicStone);
      octagon.position.set(sx, 33, -14);
      octagon.castShadow = true;
      petrov.add(octagon);

      const spire = new THREE.Mesh(new THREE.ConeGeometry(2.6, 20, 8), slateMat);
      spire.position.set(sx, 48, -14);
      spire.castShadow = true;
      petrov.add(spire);

      // Golden cross atop each spire
      const crossV = new THREE.Mesh(new THREE.BoxGeometry(0.28, 2.8, 0.28), goldMat);
      crossV.position.set(sx, 59, -14);
      const crossH = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.28, 0.28), goldMat);
      crossH.position.set(sx, 59.4, -14);
      petrov.add(crossV, crossH);
    }

    // Glowing stained-glass rose window
    const roseMat = new THREE.MeshStandardMaterial({
      color: 0xf472b6,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.85
    });
    neonMaterials.push(roseMat);
    const rose = new THREE.Mesh(new THREE.CircleGeometry(3.2, 16), roseMat);
    rose.position.set(0, 14, -17.15);
    rose.rotation.y = Math.PI;
    petrov.add(rose);

    group.add(petrov);
    addBoxCollider(-116, baseH + 10, 132, 21, 22, 35, 'Katedrála Petrov');
  }

  // === LANDMARK D: AZ TOWER (200, 274) — Tallest building in Czech Republic! ===
  {
    const az = new THREE.Group();
    az.position.set(200, 0, 274);

    const azMat = new THREE.MeshStandardMaterial({
      map: textures.azGlass,
      roughness: 0.22,
      metalness: 0.65
    });
    const orangeMat = new THREE.MeshStandardMaterial({
      color: 0xf97316,
      roughness: 0.35,
      metalness: 0.25,
      emissive: 0xea580c,
      emissiveIntensity: 0.2
    });
    neonMaterials.push(orangeMat);
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.3, metalness: 0.3 });

    // Wide podium base
    const podium = new THREE.Mesh(new THREE.BoxGeometry(30, 10, 24), whiteMat);
    podium.position.y = 5;
    podium.castShadow = true;
    podium.receiveShadow = true;
    az.add(podium);

    // Lower main tower shaft
    const shaft1 = new THREE.Mesh(new THREE.BoxGeometry(18, 42, 16), azMat);
    shaft1.position.set(0, 31, 0);
    shaft1.castShadow = true;
    az.add(shaft1);

    // Iconic shifted/angled upper shaft of AZ Tower
    const shaft2 = new THREE.Mesh(new THREE.BoxGeometry(15.5, 34, 14), azMat);
    shaft2.position.set(2.8, 66, 0);
    shaft2.rotation.z = -0.055;
    shaft2.castShadow = true;
    az.add(shaft2);

    // Iconic orange diagonal structural ribs
    const rib = new THREE.Mesh(new THREE.BoxGeometry(1.8, 76, 16.5), orangeMat);
    rib.position.set(-7.6, 46, 0);
    rib.rotation.z = -0.05;
    az.add(rib);

    const crown = new THREE.Mesh(new THREE.BoxGeometry(14, 5, 13), orangeMat);
    crown.position.set(3.8, 84.5, 0);
    crown.rotation.z = -0.14;
    az.add(crown);

    // Spire & red aircraft warning beacon
    const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.35, 14, 8), whiteMat);
    antenna.position.set(4.4, 93, 0);
    az.add(antenna);

    const azBeacon = new THREE.Mesh(
      new THREE.SphereGeometry(0.85, 10, 10),
      new THREE.MeshBasicMaterial({ color: 0xff2244 })
    );
    azBeacon.position.set(4.4, 100.2, 0);
    az.add(azBeacon);

    group.add(az);
    addBoxCollider(200, 12, 274, 30, 26, 24, 'AZ Tower');
    makeNeonSign('AZ TOWER BRNO', 200, 12.5, 261.7, Math.PI, 18, 3.2, '#0f172a', '#fb923c', 0xf97316);

    // Neighboring Spielberk Office glass tower
    const offMat = new THREE.MeshStandardMaterial({
      map: textures.facades[5],
      emissiveMap: textures.facadesEmissive[5],
      emissive: new THREE.Color(0x93c5fd),
      emissiveIntensity: 0.4,
      roughness: 0.25,
      metalness: 0.6
    });
    windowMaterials.push(offMat);
    const spielberkOffice = new THREE.Mesh(new THREE.BoxGeometry(24, 38, 20), offMat);
    spielberkOffice.position.set(162, 19, 274);
    spielberkOffice.castShadow = true;
    spielberkOffice.receiveShadow = true;
    group.add(spielberkOffice);
    addBoxCollider(162, 19, 274, 24, 38, 20, 'Spielberk Office');

    // Save azBeacon reference on outer variable
    (group as unknown as { _azBeacon: THREE.Mesh })._azBeacon = azBeacon;
  }

  // === LANDMARK E: BRNO HLAVNÍ NÁDRAŽÍ (20, 262) ===
  {
    const st = new THREE.Group();
    st.position.set(20, 0, 262);
    const facadeMat = new THREE.MeshStandardMaterial({ color: 0xe9d8a6, roughness: 0.72 });
    const trimMat = new THREE.MeshStandardMaterial({ color: 0xf8f4e8, roughness: 0.65 });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.15, metalness: 0.7, transparent: true, opacity: 0.62 });

    // Main Neo-Renaissance hall
    const mainHall = new THREE.Mesh(new THREE.BoxGeometry(68, 15, 16), facadeMat);
    mainHall.position.set(0, 7.5, 0);
    mainHall.castShadow = true;
    mainHall.receiveShadow = true;
    st.add(mainHall);

    // Central clock gable
    const gable = new THREE.Mesh(new THREE.BoxGeometry(22, 20, 18), trimMat);
    gable.position.set(0, 10, -1);
    gable.castShadow = true;
    st.add(gable);

    // Arched train canopy behind station
    const canopy = new THREE.Mesh(new THREE.CylinderGeometry(14, 14, 62, 16, 1, true, 0, Math.PI), glassMat);
    canopy.rotation.z = Math.PI / 2;
    canopy.position.set(0, 9, 18);
    st.add(canopy);

    group.add(st);
    addBoxCollider(20, 8, 262, 68, 16, 18, 'Brno Hlavní nádraží');
    makeNeonSign('BRNO HLAVNÍ NÁDRAŽÍ', 20, 17.5, 251.5, Math.PI, 26, 3.6, '#1e293b', '#38bdf8', 0x06b6d4);
  }

  // === LANDMARK F: SOCHA MARKRABĚTE JOŠTA (Moravské náměstí 20, -124) ===
  {
    const jost = new THREE.Group();
    jost.position.set(20, 0.14, -124);
    const bronze = new THREE.MeshStandardMaterial({ color: 0x4b4237, metalness: 0.78, roughness: 0.32 });

    // Iconic ultra-long legs of Jošt's horse (you can walk/drive right under it!)
    for (const [lx, lz] of [[-1.1, -1.7], [1.1, -1.7], [-1.1, 1.7], [1.1, 1.7]] as const) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, 6.2, 8), bronze);
      leg.position.set(lx, 3.1, lz);
      leg.castShadow = true;
      jost.add(leg);
    }
    // Horse torso, neck, head
    const horseBody = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.7, 4.6), bronze);
    horseBody.position.set(0, 6.6, 0);
    horseBody.castShadow = true;
    const horseNeck = new THREE.Mesh(new THREE.BoxGeometry(1.1, 2.2, 1.2), bronze);
    horseNeck.position.set(0, 8.1, 2.0);
    horseNeck.rotation.x = 0.35;
    const horseHead = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.9, 1.8), bronze);
    horseHead.position.set(0, 9.0, 2.9);
    // Rider + shield + tall lance
    const rider = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.65, 2.6, 8), bronze);
    rider.position.set(0, 8.6, -0.2);
    const shield = new THREE.Mesh(new THREE.CylinderGeometry(1.15, 1.15, 0.16, 16), bronze);
    shield.rotation.z = Math.PI / 2;
    shield.position.set(1.15, 8.5, 0.1);
    const lance = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 6.5, 6), bronze);
    lance.position.set(-1.1, 10.6, 0.2);
    jost.add(horseBody, horseNeck, horseHead, rider, shield, lance);
    group.add(jost);
    // Only collide the 4 corner legs slightly, leaving center open!
    addBoxCollider(20 - 1.2, 2.5, -124 - 1.7, 0.6, 5, 0.6, 'Socha Jošta');
    addBoxCollider(20 + 1.2, 2.5, -124 + 1.7, 0.6, 5, 0.6, 'Socha Jošta');
  }

  // === LANDMARK G: ZELNÝ TRH — KAŠNA PARNAS & STÁNKY (-22, 110) ===
  {
    const parnas = new THREE.Group();
    parnas.position.set(-22, 0.14, 110);
    const rockMat = new THREE.MeshStandardMaterial({ map: textures.stone, roughness: 0.85 });
    const basinWater = new THREE.MeshStandardMaterial({
      color: 0x22d3ee,
      emissive: 0x0891b2,
      emissiveIntensity: 0.35,
      roughness: 0.12,
      metalness: 0.5
    });
    const basin = new THREE.Mesh(new THREE.CylinderGeometry(5.6, 6.0, 1.2, 6), rockMat);
    basin.position.y = 0.6;
    const water = new THREE.Mesh(new THREE.CylinderGeometry(5.0, 5.0, 0.2, 6), basinWater);
    water.position.y = 1.15;
    const grotto = new THREE.Mesh(new THREE.DodecahedronGeometry(2.6, 0), rockMat);
    grotto.position.y = 3.2;
    const topStatue = new THREE.Mesh(new THREE.ConeGeometry(1.1, 3.0, 6), rockMat);
    topStatue.position.y = 6.2;
    [basin, water, grotto, topStatue].forEach(m => { m.castShadow = true; parnas.add(m); });
    group.add(parnas);
    addBoxCollider(-22, 3, 110, 10.5, 6, 10.5, 'Kašna Parnas');

    // Market Stalls around Kašna Parnas
    const stallColors = [0xef4444, 0x10b981, 0xf59e0b, 0x3b82f6];
    const stallOffsets: Array<[number, number]> = [
      [-16, -12], [-16, 0], [-16, 12], [16, -12], [16, 0], [16, 12]
    ];
    stallOffsets.forEach(([ox, oz], idx) => {
      const stall = new THREE.Group();
      stall.position.set(-22 + ox, 0.14, 110 + oz);
      const table = new THREE.Mesh(
        new THREE.BoxGeometry(3.8, 1.0, 2.2),
        new THREE.MeshStandardMaterial({ color: 0x92400e, roughness: 0.9 })
      );
      table.position.y = 0.5;
      const canopy = new THREE.Mesh(
        new THREE.BoxGeometry(4.2, 0.25, 2.8),
        new THREE.MeshStandardMaterial({ color: stallColors[idx % stallColors.length], roughness: 0.6 })
      );
      canopy.position.y = 2.6;
      canopy.rotation.x = 0.12;
      stall.add(table, canopy);
      for (const px of [-1.8, 1.8]) {
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 2.5, 6), railMat);
        pole.position.set(px, 1.3, 0);
        stall.add(pole);
      }
      group.add(stall);
      // Market stalls are fun destructible props!
      destructibles.push({
        mesh: stall,
        x: stall.position.x,
        y: stall.position.y,
        z: stall.position.z,
        vx: 0,
        vy: 0,
        vz: 0,
        rx: 0,
        rz: 0,
        hit: false,
        radius: 2.1
      });
    });
  }

  // === LANDMARK H: JANÁČKOVO DIVADLO (130, -162) ===
  {
    const divadlo = new THREE.Group();
    divadlo.position.set(170, 0, -162);
    const marble = new THREE.MeshStandardMaterial({ color: 0xe5e0d5, roughness: 0.55 });
    const body = new THREE.Mesh(new THREE.BoxGeometry(38, 18, 28), marble);
    body.position.y = 9;
    body.castShadow = true;
    body.receiveShadow = true;
    divadlo.add(body);

    // Front colonnade pillars
    for (let i = -3; i <= 3; i++) {
      const col = new THREE.Mesh(new THREE.BoxGeometry(1.1, 13, 1.1), marble);
      col.position.set(i * 4.5, 6.5, 16.5);
      col.castShadow = true;
      divadlo.add(col);
    }
    const porticoRoof = new THREE.Mesh(new THREE.BoxGeometry(34, 2.2, 6), marble);
    porticoRoof.position.set(0, 14, 15.5);
    divadlo.add(porticoRoof);
    group.add(divadlo);
    addBoxCollider(170, 9, -162, 38, 18, 32, 'Janáčkovo divadlo');
    makeNeonSign('JANÁČKOVO DIVADLO', 170, 16, -144.8, 0, 22, 2.8, '#1e293b', '#f8fafc', 0xf472b6);
  }

  // === LANDMARK I: AUTOLAKÝRNA CEJL (Pay 'n' Spray at 185, -55) ===
  {
    const spray = new THREE.Group();
    spray.position.set(185, 0, -55);
    const garMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.65, metalness: 0.3 });
    const leftW = new THREE.Mesh(new THREE.BoxGeometry(1.6, 6.2, 14), garMat);
    leftW.position.set(-6.5, 3.1, 0);
    const rightW = new THREE.Mesh(new THREE.BoxGeometry(1.6, 6.2, 14), garMat);
    rightW.position.set(6.5, 3.1, 0);
    const roof = new THREE.Mesh(new THREE.BoxGeometry(14.8, 1.4, 14.4), garMat);
    roof.position.set(0, 6.6, 0);
    const padMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.85
    });
    neonMaterials.push(padMat);
    const pad = new THREE.Mesh(new THREE.BoxGeometry(9.5, 0.16, 10.5), padMat);
    pad.position.set(0, 0.12, 0);
    spray.add(leftW, rightW, roof, pad);
    group.add(spray);
    addBoxCollider(185 - 6.5, 3, -55, 1.8, 6.5, 14, 'Autolakýrna');
    addBoxCollider(185 + 6.5, 3, -55, 1.8, 6.5, 14, 'Autolakýrna');
    makeNeonSign('AUTOLAKÝRNA CEJL • PAY N SPRAY', 185, 8.6, -47.6, 0, 15, 2.6, '#0b0f19', '#22d3ee', 0x06b6d4);
  }

  // === LANDMARK J: BRNĚNSKÉ VÝSTAVIŠTĚ — BVV PAVILON A (-322, 165) ===
  {
    const bvv = new THREE.Group();
    bvv.position.set(-328, 0, 165);
    const concrete = new THREE.MeshStandardMaterial({ color: 0xd6d3d1, roughness: 0.7 });
    const glass = new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.18, metalness: 0.7, transparent: true, opacity: 0.55 });
    const hall = new THREE.Mesh(new THREE.CylinderGeometry(16, 16, 56, 14, 1, false, 0, Math.PI), glass);
    hall.rotation.x = Math.PI / 2;
    hall.position.y = 0;
    bvv.add(hall);
    // Iconic parabolic arches
    for (let z = -26; z <= 26; z += 13) {
      const arch = new THREE.Mesh(new THREE.TorusGeometry(16.4, 0.85, 8, 20, Math.PI), concrete);
      arch.position.set(0, 0, z);
      arch.castShadow = true;
      bvv.add(arch);
    }
    group.add(bvv);
    addBoxCollider(-328, 8, 165, 32, 16, 56, 'BVV Pavilon A');
    makeNeonSign('VÝSTAVIŠTĚ BRNO (BVV)', -310, 18, 165, Math.PI / 2, 22, 3.2, '#1e1b2e', '#c084fc', 0xa855f7);
  }

  // === LANDMARK K: PARK LUŽÁNKY (40, -285) ===
  {
    const pondMat = new THREE.MeshStandardMaterial({ color: 0x0e7490, roughness: 0.15, metalness: 0.5 });
    const pond = new THREE.Mesh(new THREE.CircleGeometry(24, 24), pondMat);
    pond.rotation.x = -Math.PI / 2;
    pond.position.set(42, 0.12, -285);
    group.add(pond);

    const pavMat = new THREE.MeshStandardMaterial({ color: 0xf1f5f9, roughness: 0.55 });
    const pavRoof = new THREE.Mesh(new THREE.ConeGeometry(8.5, 4.5, 8), new THREE.MeshStandardMaterial({ color: 0x059669, roughness: 0.6 }));
    pavRoof.position.set(82, 7.2, -280);
    const pavBase = new THREE.Mesh(new THREE.CylinderGeometry(7.2, 7.6, 0.9, 8), pavMat);
    pavBase.position.set(82, 0.45, -280);
    group.add(pavRoof, pavBase);
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      const p = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 4.8, 6), pavMat);
      p.position.set(82 + Math.cos(a) * 6.2, 3.0, -280 + Math.sin(a) * 6.2);
      group.add(p);
    }
    addBoxCollider(82, 3, -280, 14, 7, 14, 'Pavilon Lužánky');
  }

  // -------------------------------------------------------
  // 7. STUNT RAMPS AROUND BRNO (5 iconic jumps!)
  // -------------------------------------------------------
  const rampSpecs: RampCollider[] = [
    { x: -175, z: -25, width: 8, length: 16, height: 5.2, rotY: Math.PI / 2, name: 'Skok ze Špilberku' },
    { x: 130, z: 55, width: 9, length: 16, height: 4.5, rotY: 0, name: 'Koliště Turbo Skok' },
    { x: -290, z: 105, width: 9, length: 16, height: 4.8, rotY: 0, name: 'BVV Drift Rampa' },
    { x: 85, z: 310, width: 9, length: 15, height: 4.6, rotY: Math.PI / 2, name: 'Skok k AZ Tower' },
    { x: 18, z: -245, width: 8, length: 14, height: 4.2, rotY: Math.PI / 2, name: 'Lužánky Park Skok' }
  ];
  const rampMat = new THREE.MeshStandardMaterial({ color: 0xf43f5e, roughness: 0.45, metalness: 0.2 });
  const rampStripe = new THREE.MeshStandardMaterial({ color: 0xfbbf24, emissive: 0xf59e0b, emissiveIntensity: 0.45 });
  neonMaterials.push(rampStripe);

  for (const r of rampSpecs) {
    ramps.push(r);
    const baseY = getTerrainHeight(r.x, r.z);
    // Custom wedge geometry (ascends along local +Z)
    const shape = new THREE.Shape();
    shape.moveTo(-r.length * 0.5, 0);
    shape.lineTo(r.length * 0.5, 0);
    shape.lineTo(r.length * 0.5, r.height);
    shape.closePath();
    const wedgeGeo = new THREE.ExtrudeGeometry(shape, { depth: r.width, bevelEnabled: false });
    // Center width & orient so slope goes along +Z
    wedgeGeo.translate(0, 0, -r.width * 0.5);
    wedgeGeo.rotateY(-Math.PI / 2);

    const mesh = new THREE.Mesh(wedgeGeo, rampMat);
    mesh.position.set(r.x, baseY, r.z);
    mesh.rotation.y = r.rotY;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);

    // Glowing lip marker
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
  // 8. PROCEDURAL BRNO CITY BLOCKS (Historic & Modern Buildings)
  // -------------------------------------------------------
  const buildingMaterials = textures.facades.map((map, idx) => {
    const mat = new THREE.MeshStandardMaterial({
      map,
      emissiveMap: textures.facadesEmissive[idx],
      emissive: new THREE.Color(0xffdfa0),
      emissiveIntensity: 0.15,
      roughness: 0.72,
      metalness: idx === 5 ? 0.45 : 0.08
    });
    windowMaterials.push(mat);
    return mat;
  });
  const pitchedRoofMat = new THREE.MeshStandardMaterial({ map: textures.roofTiles, roughness: 0.8 });
  const flatRoofMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.85 });

  // Deterministic pseudo-random so Brno layout is identical every load
  let seed = 1337602;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  // Protected zones where procedural buildings must NOT spawn
  const isBlocked = (x: number, z: number, halfW: number, halfD: number): boolean => {
    // Near roads
    for (const rx of ROAD_X) {
      if (Math.abs(x - rx) < ROAD_WIDTH * 0.5 + halfW + 5) return true;
    }
    for (const rz of ROAD_Z) {
      if (Math.abs(z - rz) < ROAD_WIDTH * 0.5 + halfD + 5) return true;
    }
    // River
    if (z + halfD > RIVER_Z_MIN - 14) return true;
    // Park Lužánky
    if (z - halfD < -222 && x > -90 && x < 180) return true;
    // Náměstí Svobody
    if (Math.abs(x + 10) < 48 + halfW && Math.abs(z) < 48 + halfD) return true;
    // Zelný trh
    if (Math.abs(x + 22) < 38 + halfW && Math.abs(z - 110) < 35 + halfD) return true;
    // Moravské náměstí
    if (Math.abs(x - 20) < 38 + halfW && Math.abs(z + 125) < 34 + halfD) return true;
    // Špilberk hill
    if (Math.hypot(x + 215, z + 25) < 92 + Math.max(halfW, halfD)) return true;
    // Petrov hill
    if (Math.hypot(x + 116, z - 132) < 62 + Math.max(halfW, halfD)) return true;
    // Hlavní nádraží
    if (Math.abs(x - 20) < 46 + halfW && Math.abs(z - 266) < 32 + halfD) return true;
    // AZ Tower & Spielberk Office
    if (Math.abs(x - 184) < 48 + halfW && Math.abs(z - 274) < 32 + halfD) return true;
    // Janáčkovo divadlo
    if (Math.abs(x - 170) < 32 + halfW && Math.abs(z + 162) < 28 + halfD) return true;
    // Autolakýrna Cejl
    if (Math.abs(x - 185) < 22 + halfW && Math.abs(z + 55) < 22 + halfD) return true;
    // BVV Expo
    if (x < -280 && z > 80 && z < 230) return true;
    // Stunt ramps
    for (const r of rampSpecs) {
      if (Math.hypot(x - r.x, z - r.z) < 24 + Math.max(halfW, halfD)) return true;
    }
    return false;
  };

  for (let gx = -265; gx <= 275; gx += 28) {
    for (let gz = -200; gz <= 295; gz += 28) {
      const bx = gx + (rand() - 0.5) * 6;
      const bz = gz + (rand() - 0.5) * 6;
      const bw = 13 + rand() * 9;
      const bd = 13 + rand() * 9;
      if (isBlocked(bx, bz, bw * 0.5, bd * 0.5)) continue;

      const distFromCenter = Math.hypot(bx, bz);
      const isModernZone = bx > 140 || bz > 235;
      const bh = isModernZone
        ? 16 + rand() * 26
        : distFromCenter < 130
          ? 13 + rand() * 11
          : 11 + rand() * 16;

      const matIdx = isModernZone && rand() > 0.45
        ? 5
        : Math.floor(rand() * 5);

      const bMesh = new THREE.Mesh(
        new THREE.BoxGeometry(bw, bh, bd),
        buildingMaterials[matIdx]
      );
      bMesh.position.set(bx, bh * 0.5, bz);
      bMesh.castShadow = true;
      bMesh.receiveShadow = true;
      group.add(bMesh);

      // Authentic Moravian pitched terracotta roofs on historic center buildings!
      if (matIdx !== 5) {
        const roof = new THREE.Mesh(
          new THREE.ConeGeometry(Math.max(bw, bd) * 0.72, 3.6 + rand() * 2.0, 4),
          pitchedRoofMat
        );
        roof.rotation.y = Math.PI / 4;
        roof.scale.set(bw / Math.max(bw, bd), 1, bd / Math.max(bw, bd));
        roof.position.set(bx, bh + 1.8, bz);
        roof.castShadow = true;
        group.add(roof);
      } else {
        const cap = new THREE.Mesh(new THREE.BoxGeometry(bw - 1.2, 0.8, bd - 1.2), flatRoofMat);
        cap.position.set(bx, bh + 0.4, bz);
        group.add(cap);
      }

      addBoxCollider(bx, bh * 0.5, bz, bw, bh, bd, 'Budova');
    }
  }

  // Iconic Brno neon shop signs in the center
  makeNeonSign('STAROBRNO PIVNICE', -52, 8, -32, Math.PI / 2, 11, 2.2, '#052e16', '#4ade80', 0x22c55e);
  makeNeonSign('BAR ŠPILAS 24/7', 42, 9, -22, -Math.PI / 2, 11, 2.2, '#2e1065', '#f472b6', 0xec4899);
  makeNeonSign('KÁVA SVOBOĎÁK', 38, 7.5, 22, -Math.PI / 2, 10, 2.0, '#451a03', '#fbbf24', 0xf59e0b);

  // -------------------------------------------------------
  // 9. TREES (Instanced foliage in Lužánky, Špilberk, Petrov, Avenues)
  // -------------------------------------------------------
  const treePositions: Array<[number, number, number]> = [];
  // Park Lužánky dense trees
  for (let i = 0; i < 65; i++) {
    const tx = -75 + rand() * 240;
    const tz = -232 - rand() * 115;
    if (Math.hypot(tx - 42, tz + 285) < 28) continue; // pond
    if (Math.hypot(tx - 82, tz + 280) < 16) continue; // pavilion
    treePositions.push([tx, getTerrainHeight(tx, tz), tz]);
  }
  // Špilberk park trees on hill slopes
  for (let i = 0; i < 52; i++) {
    const a = rand() * Math.PI * 2;
    const r = 46 + rand() * 42;
    const tx = -215 + Math.cos(a) * r;
    const tz = -25 + Math.sin(a) * r;
    if (Math.abs(tx + 140) < 14) continue;
    treePositions.push([tx, getTerrainHeight(tx, tz), tz]);
  }
  // Petrov / Denisovy sady trees
  for (let i = 0; i < 24; i++) {
    const a = rand() * Math.PI * 2;
    const r = 28 + rand() * 24;
    const tx = -116 + Math.cos(a) * r;
    const tz = 132 + Math.sin(a) * r;
    treePositions.push([tx, getTerrainHeight(tx, tz), tz]);
  }
  // Koliště & riverfront boulevard trees
  for (let z = -200; z <= 290; z += 36) {
    if (Math.abs(z) < 20 || Math.abs(z - 110) < 20 || Math.abs(z - 220) < 20 || Math.abs(z + 110) < 20) continue;
    treePositions.push([142, 0, z]);
    treePositions.push([118, 0, z]);
  }

  const trunkGeo = new THREE.CylinderGeometry(0.32, 0.45, 3.2, 6);
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5c3d2e, roughness: 0.9 });
  const crownGeo = new THREE.IcosahedronGeometry(2.7, 1);
  const crownMat = new THREE.MeshStandardMaterial({ color: 0x2d6a36, roughness: 0.85 });

  const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, treePositions.length);
  const crowns = new THREE.InstancedMesh(crownGeo, crownMat, treePositions.length);
  trunks.castShadow = true;
  crowns.castShadow = true;
  const dummy = new THREE.Object3D();
  treePositions.forEach(([tx, ty, tz], i) => {
    const sc = 0.8 + rand() * 0.65;
    dummy.position.set(tx, ty + 1.5 * sc, tz);
    dummy.scale.set(sc, sc, sc);
    dummy.rotation.y = rand() * Math.PI * 2;
    dummy.updateMatrix();
    trunks.setMatrixAt(i, dummy.matrix);

    dummy.position.set(tx, ty + 4.3 * sc, tz);
    dummy.scale.set(sc, sc * 1.15, sc);
    dummy.updateMatrix();
    crowns.setMatrixAt(i, dummy.matrix);
  });
  group.add(trunks, crowns);

  // -------------------------------------------------------
  // 10. DESTRUCTIBLE BRNO STREET LAMPS ALONG MAIN AVENUES
  // -------------------------------------------------------
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.6, roughness: 0.4 });
  const lampBulbMat = new THREE.MeshBasicMaterial({ color: 0xfef08a });
  lampBulbs.push(lampBulbMat);

  const addStreetLamp = (lx: number, lz: number) => {
    const ly = getTerrainHeight(lx, lz);
    if (ly < -0.2) return;
    const lamp = new THREE.Group();
    lamp.position.set(lx, ly, lz);
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.16, 6.2, 6), poleMat);
    pole.position.y = 3.1;
    const arm = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.14, 0.14), poleMat);
    arm.position.set(0.6, 6.1, 0);
    const bulb = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.2, 0.35), lampBulbMat);
    bulb.position.set(1.1, 5.95, 0);
    lamp.add(pole, arm, bulb);
    group.add(lamp);

    destructibles.push({
      mesh: lamp,
      x: lx,
      y: ly,
      z: lz,
      vx: 0,
      vy: 0,
      vz: 0,
      rx: 0,
      rz: 0,
      hit: false,
      radius: 0.7
    });
  };

  for (const rx of [-140, 20, 130]) {
    for (let z = -190; z <= 280; z += 48) {
      if (Math.abs(z) < 28 || Math.abs(z - 110) < 24 || Math.abs(z - 220) < 22 || Math.abs(z + 110) < 24) continue;
      addStreetLamp(rx + ROAD_WIDTH * 0.5 + 1.5, z);
    }
  }

  // Helper to check terrain + ramps surface height
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

  const azBeacon = (group as unknown as { _azBeacon: THREE.Mesh })._azBeacon;

  const updateVisuals = (time: number, nightFactor: number) => {
    // Rotate Brněnský orloj astronomical rings gently
    orlojRings.forEach((ring, i) => {
      ring.rotation.z = time * (0.25 + i * 0.14) * (i % 2 === 0 ? 1 : -1);
    });
    // Blink AZ Tower aviation red beacon
    const blink = Math.sin(time * 4.2) > 0.15;
    (azBeacon.material as THREE.MeshBasicMaterial).color.setHex(blink ? 0xff1e42 : 0x450a0a);

    // Adjust glowing building windows & neon signs with sunset/night cycle
    const winEmissive = 0.08 + nightFactor * 1.15;
    for (const wm of windowMaterials) {
      wm.emissiveIntensity = winEmissive;
    }
    const neonEmissive = 0.35 + nightFactor * 1.25;
    for (const nm of neonMaterials) {
      nm.emissiveIntensity = neonEmissive;
    }
    lampBulbMat.color.setHex(nightFactor > 0.35 ? 0xfef08a : 0x94a3b8);

    // Gentle Svratka river shimmer
    waterMesh.position.y = -1.0 + Math.sin(time * 1.4) * 0.08;
  };

  return {
    group,
    colliders,
    ramps,
    destructibles,
    windowMaterials,
    neonMaterials,
    lampBulbs,
    orlojRings,
    azBeacon,
    waterMesh,
    tramPath: tramWaypoints,
    updateVisuals,
    getSurfaceHeight
  };
}
