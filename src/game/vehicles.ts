import * as THREE from 'three';
import {
  AABB,
  ROAD_X,
  ROAD_Z,
  VEHICLE_SPECS,
  VehicleKind,
  VehicleSpec,
  WORLD_HALF
} from './types';
import { BrnoTextures } from './textures';
import { BrnoWorld } from './world';

export interface Vehicle {
  id: number;
  spec: VehicleSpec;
  mesh: THREE.Group;
  bodyGroup: THREE.Group;
  bodyMat: THREE.MeshStandardMaterial;
  wheels: THREE.Object3D[];
  brakeLights: THREE.MeshBasicMaterial;
  lightbarRed?: THREE.MeshBasicMaterial;
  lightbarBlue?: THREE.MeshBasicMaterial;
  underglow?: THREE.MeshBasicMaterial;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  yaw: number;
  speed: number;
  steerAngle: number;
  grounded: boolean;
  health: number;
  maxHealth: number;
  isPlayer: boolean;
  isAI: boolean;
  isPoliceChaser: boolean;
  sirenOn: boolean;
  aiAxis: 'x' | 'z';
  aiDir: 1 | -1;
  aiSpeed: number;
  airTime: number;
  stuntStartX: number;
  stuntStartZ: number;
  lastRampName: string | null;
}

export interface DriveInput {
  throttle: number; // -1..1
  steer: number;    // -1..1
  handbrake: boolean;
  nitro: boolean;
}

let nextVehicleId = 1;

export function createVehicleMesh(
  spec: VehicleSpec,
  textures: BrnoTextures,
  colorOverride?: number
): {
  mesh: THREE.Group;
  bodyGroup: THREE.Group;
  bodyMat: THREE.MeshStandardMaterial;
  wheels: THREE.Object3D[];
  brakeLights: THREE.MeshBasicMaterial;
  lightbarRed?: THREE.MeshBasicMaterial;
  lightbarBlue?: THREE.MeshBasicMaterial;
  underglow?: THREE.MeshBasicMaterial;
} {
  const mesh = new THREE.Group();
  const bodyGroup = new THREE.Group();
  mesh.add(bodyGroup);

  const paintColor = colorOverride ?? spec.color;
  const bodyMat = new THREE.MeshStandardMaterial({
    color: paintColor,
    roughness: spec.kind === 'supercar' ? 0.16 : 0.3,
    metalness: spec.kind === 'supercar' ? 0.72 : 0.45
  });

  const sideMat = spec.isPolice
    ? new THREE.MeshStandardMaterial({ map: textures.policeSide, roughness: 0.28, metalness: 0.45 })
    : bodyMat;

  const glassMat = new THREE.MeshStandardMaterial({
    color: 0x0f172a,
    roughness: 0.08,
    metalness: 0.9,
    transparent: true,
    opacity: 0.85
  });
  const trimMat = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.65, metalness: 0.2 });

  const w = spec.width;
  const l = spec.length;
  const h = spec.height;

  // Lower chassis
  const chassisH = h * (spec.kind === 'van' ? 0.68 : 0.48);
  const chassisGeo = new THREE.BoxGeometry(w, chassisH, l);
  const chassisMats = spec.isPolice
    ? [sideMat, sideMat, bodyMat, trimMat, bodyMat, bodyMat]
    : bodyMat;
  const chassis = new THREE.Mesh(chassisGeo, chassisMats);
  chassis.position.y = 0.42 + chassisH * 0.5;
  chassis.castShadow = true;
  chassis.receiveShadow = true;
  bodyGroup.add(chassis);

  // Upper cabin
  const cabLen = spec.kind === 'van' ? l * 0.85 : spec.kind === 'supercar' ? l * 0.48 : l * 0.55;
  const cabH = h * (spec.kind === 'van' ? 0.4 : 0.46);
  const cabZ = spec.kind === 'van' ? 0 : spec.kind === 'supercar' ? -0.18 : -0.12;
  const cabin = new THREE.Mesh(new THREE.BoxGeometry(w * 0.86, cabH, cabLen), glassMat);
  cabin.position.set(0, 0.42 + chassisH + cabH * 0.45, cabZ);
  cabin.castShadow = true;
  bodyGroup.add(cabin);

  // Roof cap
  const roof = new THREE.Mesh(new THREE.BoxGeometry(w * 0.84, 0.12, cabLen * 0.9), bodyMat);
  roof.position.set(0, 0.42 + chassisH + cabH * 0.92, cabZ);
  bodyGroup.add(roof);

  // Supercar rear spoiler & neon underglow
  let underglow: THREE.MeshBasicMaterial | undefined;
  if (spec.kind === 'supercar') {
    const wing = new THREE.Mesh(new THREE.BoxGeometry(w * 0.96, 0.1, 0.42), trimMat);
    wing.position.set(0, 0.42 + chassisH + 0.38, -l * 0.44);
    bodyGroup.add(wing);
    for (const sx of [-0.65, 0.65]) {
      const strut = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.36, 0.24), trimMat);
      strut.position.set(sx, 0.42 + chassisH + 0.2, -l * 0.44);
      bodyGroup.add(strut);
    }
    underglow = new THREE.MeshBasicMaterial({
      color: spec.accentColor ?? 0x00f0ff,
      transparent: true,
      opacity: 0.65,
      side: THREE.DoubleSide
    });
    const glowPlane = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.85, l * 0.8), underglow);
    glowPlane.rotation.x = -Math.PI / 2;
    glowPlane.position.y = 0.12;
    mesh.add(glowPlane);
  }

  // Policie ČR flashing lightbar
  let lightbarRed: THREE.MeshBasicMaterial | undefined;
  let lightbarBlue: THREE.MeshBasicMaterial | undefined;
  if (spec.isPolice) {
    const barY = 0.42 + chassisH + cabH + 0.12;
    lightbarBlue = new THREE.MeshBasicMaterial({ color: 0x3b82f6 });
    lightbarRed = new THREE.MeshBasicMaterial({ color: 0xef4444 });
    const bLeft = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.22, 0.32), lightbarBlue);
    bLeft.position.set(-0.34, barY, cabZ + 0.15);
    const bRight = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.22, 0.32), lightbarRed);
    bRight.position.set(0.34, barY, cabZ + 0.15);
    bodyGroup.add(bLeft, bRight);
  }

  // Headlights & Taillights
  const headMat = new THREE.MeshBasicMaterial({ color: 0xfef9c3 });
  const brakeLights = new THREE.MeshBasicMaterial({ color: 0x991b1b });
  for (const sx of [-w * 0.34, w * 0.34]) {
    const hl = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.18, 0.08), headMat);
    hl.position.set(sx, 0.45 + chassisH * 0.52, l * 0.5 + 0.02);
    const tl = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.18, 0.08), brakeLights);
    tl.position.set(sx, 0.45 + chassisH * 0.56, -l * 0.5 - 0.02);
    bodyGroup.add(hl, tl);
  }

  // Czech License Plates (1B2 = South Moravia / Brno!)
  const plateMat = new THREE.MeshBasicMaterial({ color: 0xf8fafc });
  const plateRear = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.14, 0.05), plateMat);
  plateRear.position.set(0, 0.55, -l * 0.5 - 0.02);
  bodyGroup.add(plateRear);

  // 4 Wheels
  const wheelGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.28, 12);
  wheelGeo.rotateZ(Math.PI / 2);
  const tireMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.9 });
  const rimGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.3, 8);
  rimGeo.rotateZ(Math.PI / 2);
  const rimMat = new THREE.MeshStandardMaterial({ color: 0xd4d4d8, metalness: 0.85, roughness: 0.25 });

  const wheels: THREE.Object3D[] = [];
  const wz = l * 0.32;
  const wx = w * 0.49;
  for (const [px, pz] of [[-wx, wz], [wx, wz], [-wx, -wz], [wx, -wz]] as const) {
    const pivot = new THREE.Group();
    pivot.position.set(px, 0.38, pz);
    const tire = new THREE.Mesh(wheelGeo, tireMat);
    const rim = new THREE.Mesh(rimGeo, rimMat);
    tire.castShadow = true;
    pivot.add(tire, rim);
    mesh.add(pivot);
    wheels.push(pivot);
  }

  return { mesh, bodyGroup, bodyMat, wheels, brakeLights, lightbarRed, lightbarBlue, underglow };
}

export class VehicleManager {
  public readonly group = new THREE.Group();
  public readonly vehicles: Vehicle[] = [];
  private textures: BrnoTextures;
  private world: BrnoWorld;

  constructor(textures: BrnoTextures, world: BrnoWorld) {
    this.textures = textures;
    this.world = world;
    this.spawnInitialFleet();
  }

  public spawnVehicle(
    kind: VehicleKind,
    x: number,
    z: number,
    yaw = 0,
    options?: { isAI?: boolean; isPoliceChaser?: boolean; color?: number }
  ): Vehicle {
    const spec = VEHICLE_SPECS[kind];
    const built = createVehicleMesh(spec, this.textures, options?.color);
    const surface = this.world.getSurfaceHeight(x, z);

    built.mesh.position.set(x, surface.y, z);
    built.mesh.rotation.y = yaw;
    this.group.add(built.mesh);

    const v: Vehicle = {
      id: nextVehicleId++,
      spec,
      mesh: built.mesh,
      bodyGroup: built.bodyGroup,
      bodyMat: built.bodyMat,
      wheels: built.wheels,
      brakeLights: built.brakeLights,
      lightbarRed: built.lightbarRed,
      lightbarBlue: built.lightbarBlue,
      underglow: built.underglow,
      x,
      y: surface.y,
      z,
      vx: 0,
      vy: 0,
      vz: 0,
      yaw,
      speed: 0,
      steerAngle: 0,
      grounded: true,
      health: 100,
      maxHealth: 100,
      isPlayer: false,
      isAI: options?.isAI ?? false,
      isPoliceChaser: options?.isPoliceChaser ?? false,
      sirenOn: options?.isPoliceChaser ?? false,
      aiAxis: Math.abs(Math.sin(yaw)) > 0.5 ? 'x' : 'z',
      aiDir: (Math.sin(yaw) + Math.cos(yaw)) >= 0 ? 1 : -1,
      aiSpeed: 10 + Math.random() * 6,
      airTime: 0,
      stuntStartX: x,
      stuntStartZ: z,
      lastRampName: null
    };
    this.vehicles.push(v);
    return v;
  }

  private spawnInitialFleet(): void {
    // Parked hero cars around Brno landmarks for instant stealing/driving!
    this.spawnVehicle('supercar', 20, -14, Math.PI, { color: 0xff2e7e });       // Right at Náměstí Svobody!
    this.spawnVehicle('octavia', -42, 22, 0, { color: 0x10b981 });              // Svoboďák west
    this.spawnVehicle('police', 34, -104, Math.PI * 0.5);                        // Moravské náměstí PČR patrol
    this.spawnVehicle('suv', 130, -130, Math.PI, { color: 0x181c28 });           // Janáčkovo divadlo
    this.spawnVehicle('supercar', 194, 240, -Math.PI * 0.5, { color: 0x06b6d4 }); // AZ Tower cyber-cyan supercar
    this.spawnVehicle('classic', -36, 98, Math.PI * 0.35, { color: 0xf59e0b });  // Zelný trh Felicia
    this.spawnVehicle('van', 42, 220, -Math.PI * 0.5);                           // Hlavní nádraží Starobrno van
    this.spawnVehicle('supercar', -290, 145, 0, { color: 0xa855f7 });            // BVV drift car
    this.spawnVehicle('suv', -204, -22, Math.PI * 0.5, { color: 0xdc2626 });     // Hrad Špilberk courtyard SUV

    // Ambient AI traffic patrolling Brno avenues
    const trafficKinds: VehicleKind[] = ['octavia', 'classic', 'suv', 'van', 'octavia', 'supercar'];
    const trafficColors = [0xe2e8f0, 0x3b82f6, 0xef4444, 0x10b981, 0xf59e0b, 0x6366f1, 0x475569];

    let idx = 0;
    for (const rx of [-140, 20, 130, 240]) {
      for (let i = 0; i < 3; i++) {
        const dir: 1 | -1 = i % 2 === 0 ? 1 : -1;
        const laneX = rx + (dir === 1 ? -3.4 : 3.4);
        const lz = -170 + i * 145 + (Math.random() - 0.5) * 35;
        const v = this.spawnVehicle(
          trafficKinds[idx % trafficKinds.length],
          laneX,
          lz,
          dir === 1 ? 0 : Math.PI,
          { isAI: true, color: trafficColors[idx % trafficColors.length] }
        );
        v.aiAxis = 'z';
        v.aiDir = dir;
        idx++;
      }
    }
    for (const rz of [-110, 110, 220, 310]) {
      for (let i = 0; i < 2; i++) {
        const dir: 1 | -1 = i % 2 === 0 ? 1 : -1;
        const laneZ = rz + (dir === 1 ? 3.4 : -3.4);
        const lx = -120 + i * 210 + (Math.random() - 0.5) * 40;
        const v = this.spawnVehicle(
          trafficKinds[idx % trafficKinds.length],
          lx,
          laneZ,
          dir === 1 ? Math.PI * 0.5 : -Math.PI * 0.5,
          { isAI: true, color: trafficColors[idx % trafficColors.length] }
        );
        v.aiAxis = 'x';
        v.aiDir = dir;
        idx++;
      }
    }
  }

  public ensurePoliceChasers(wantedLevel: number, playerX: number, playerZ: number): void {
    const desired = wantedLevel <= 0 ? 0 : Math.min(4, wantedLevel);
    const active = this.vehicles.filter(v => v.isPoliceChaser && !v.isPlayer);

    if (wantedLevel === 0) {
      for (const cop of active) {
        cop.isPoliceChaser = false;
        cop.sirenOn = false;
        cop.isAI = true;
      }
      return;
    }

    if (active.length < desired) {
      // Spawn PČR cruiser ~90m away on nearest road
      const angle = Math.random() * Math.PI * 2;
      let sx = Math.max(-310, Math.min(280, playerX + Math.cos(angle) * 95));
      let sz = Math.max(-220, Math.min(305, playerZ + Math.sin(angle) * 95));
      // Snap to nearest road X
      let nearestRx: number = ROAD_X[3];
      let bestD = Infinity;
      for (const rx of ROAD_X) {
        const d = Math.abs(rx - sx);
        if (d < bestD) { bestD = d; nearestRx = rx; }
      }
      sx = nearestRx;
      const yaw = Math.atan2(playerX - sx, playerZ - sz);
      this.spawnVehicle('police', sx, sz, yaw, { isPoliceChaser: true });
    }
  }

  public repaintAndRepair(v: Vehicle): void {
    v.health = v.maxHealth;
    if (!v.spec.isPolice) {
      const palette = [0xff2e7e, 0x06b6d4, 0x10b981, 0xf59e0b, 0x8b5cf6, 0xf43f5e, 0xf8fafc];
      const next = palette[Math.floor(Math.random() * palette.length)];
      v.bodyMat.color.setHex(next);
    }
  }

  public update(
    dt: number,
    time: number,
    playerVehicle: Vehicle | null,
    input: DriveInput,
    playerTargetX: number,
    playerTargetZ: number,
    callbacks: {
      onCrash: (intensity: number) => void;
      onStuntComplete: (rampName: string, distance: number) => void;
      onPropHit: (propX: number, propZ: number) => void;
      onDriftParticle: (x: number, y: number, z: number, color: number) => void;
    }
  ): void {
    const clampedDt = Math.min(dt, 0.05);

    for (const v of this.vehicles) {
      // Animate police lightbar flashing
      if (v.lightbarRed && v.lightbarBlue) {
        if (v.sirenOn) {
          const flash = Math.floor(time * 9) % 2 === 0;
          v.lightbarBlue.color.setHex(flash ? 0x2563eb : 0x0f172a);
          v.lightbarRed.color.setHex(flash ? 0x0f172a : 0xef4444);
        } else {
          v.lightbarBlue.color.setHex(0x1e3a8a);
          v.lightbarRed.color.setHex(0x7f1d1d);
        }
      }

      if (v === playerVehicle) {
        this.updatePlayerVehicle(v, clampedDt, input, callbacks);
      } else if (v.isPoliceChaser) {
        this.updatePoliceAI(v, clampedDt, playerTargetX, playerTargetZ, callbacks);
      } else if (v.isAI) {
        this.updateTrafficAI(v, clampedDt, playerTargetX, playerTargetZ);
      } else {
        // Parked vehicle damping + gravity
        this.applyPassivePhysics(v, clampedDt);
      }

      // Sync mesh transform
      v.mesh.position.set(v.x, v.y, v.z);
      v.mesh.rotation.y = v.yaw;

      // Wheel spin & front wheel steering visual
      const spin = v.speed * clampedDt * 2.4;
      v.wheels.forEach((w, idx) => {
        if (idx < 2) w.rotation.y = v.steerAngle * 0.6;
        w.children[0].rotation.x += spin;
      });
    }

    // Vehicle-to-vehicle simple elastic collision
    for (let i = 0; i < this.vehicles.length; i++) {
      const a = this.vehicles[i];
      for (let j = i + 1; j < this.vehicles.length; j++) {
        const b = this.vehicles[j];
        const dx = b.x - a.x;
        const dz = b.z - a.z;
        const dist = Math.hypot(dx, dz);
        const minDist = (a.spec.width + b.spec.width) * 0.56;
        if (dist > 0.01 && dist < minDist) {
          const nx = dx / dist;
          const nz = dz / dist;
          const overlap = (minDist - dist) * 0.52;
          a.x -= nx * overlap;
          a.z -= nz * overlap;
          b.x += nx * overlap;
          b.z += nz * overlap;

          const relSpeed = Math.hypot(a.vx - b.vx, a.vz - b.vz);
          if (relSpeed > 5 && (a.isPlayer || b.isPlayer)) {
            callbacks.onCrash(Math.min(1, relSpeed / 25));
          }
          const push = relSpeed * 0.35 + 2.5;
          a.vx -= nx * push * 0.5;
          a.vz -= nz * push * 0.5;
          b.vx += nx * push * 0.5;
          b.vz += nz * push * 0.5;
        }
      }
    }
  }

  private updatePlayerVehicle(
    v: Vehicle,
    dt: number,
    input: DriveInput,
    callbacks: {
      onCrash: (intensity: number) => void;
      onStuntComplete: (rampName: string, distance: number) => void;
      onPropHit: (propX: number, propZ: number) => void;
      onDriftParticle: (x: number, y: number, z: number, color: number) => void;
    }
  ): void {
    const spec = v.spec;
    const fwdX = Math.sin(v.yaw);
    const fwdZ = Math.cos(v.yaw);
    const rightX = Math.cos(v.yaw);
    const rightZ = -Math.sin(v.yaw);

    let forwardSpeed = v.vx * fwdX + v.vz * fwdZ;
    let lateralSpeed = v.vx * rightX + v.vz * rightZ;

    const maxSpd = input.nitro ? spec.maxSpeed * 1.42 : spec.maxSpeed;
    const accel = input.nitro ? spec.accel * 1.9 : spec.accel;

    if (v.grounded) {
      if (input.throttle > 0.05) {
        forwardSpeed += accel * input.throttle * dt;
      } else if (input.throttle < -0.05) {
        if (forwardSpeed > 1) {
          forwardSpeed -= spec.brake * (-input.throttle) * dt;
        } else {
          forwardSpeed += spec.accel * 0.55 * input.throttle * dt;
        }
      } else {
        // Rolling friction
        forwardSpeed *= Math.max(0, 1 - 1.35 * dt);
      }

      if (input.handbrake) {
        forwardSpeed *= Math.max(0, 1 - 2.6 * dt);
      }

      forwardSpeed = Math.max(-spec.maxSpeed * 0.38, Math.min(maxSpd, forwardSpeed));

      // Steering (scales smoothly with speed, reverses when going backward)
      const speedFactor = Math.min(1, Math.abs(forwardSpeed) / 7);
      const steerSign = forwardSpeed >= -0.3 ? 1 : -1;
      const driftBoost = input.handbrake ? 1.45 : 1.0;
      const targetSteer = input.steer * spec.turnRate * speedFactor * steerSign * driftBoost;
      v.yaw += targetSteer * dt;
      v.steerAngle = THREE.MathUtils.lerp(v.steerAngle, input.steer, dt * 10);

      // Lateral tire grip (lower during handbrake = sweet GTA drifts!)
      const grip = input.handbrake ? 1.65 : spec.grip;
      lateralSpeed *= Math.max(0, 1 - grip * dt);

      const newFwdX = Math.sin(v.yaw);
      const newFwdZ = Math.cos(v.yaw);
      const newRightX = Math.cos(v.yaw);
      const newRightZ = -Math.sin(v.yaw);
      v.vx = newFwdX * forwardSpeed + newRightX * lateralSpeed;
      v.vz = newFwdZ * forwardSpeed + newRightZ * lateralSpeed;

      // Drift smoke & nitro exhaust flames!
      if ((input.handbrake && Math.abs(forwardSpeed) > 10) || Math.abs(lateralSpeed) > 6.5) {
        callbacks.onDriftParticle(v.x - newFwdX * 1.8, v.y + 0.25, v.z - newFwdZ * 1.8, 0xcbd5e1);
      }
      if (input.nitro && forwardSpeed > 4) {
        callbacks.onDriftParticle(v.x - newFwdX * (spec.length * 0.55), v.y + 0.45, v.z - newFwdZ * (spec.length * 0.55), 0x06b6d4);
      }
    }

    // Brake lights
    v.brakeLights.color.setHex(input.throttle < -0.1 || input.handbrake ? 0xff2244 : 0x7f1d1d);

    // Body pitch & roll lean for tactile GTA weight!
    const targetRoll = THREE.MathUtils.clamp(-input.steer * (forwardSpeed / spec.maxSpeed) * 0.11, -0.14, 0.14);
    const targetPitch = THREE.MathUtils.clamp((input.throttle < 0 ? 0.06 : -input.throttle * 0.045), -0.07, 0.08);
    v.bodyGroup.rotation.z = THREE.MathUtils.lerp(v.bodyGroup.rotation.z, targetRoll, dt * 8);
    v.bodyGroup.rotation.x = THREE.MathUtils.lerp(v.bodyGroup.rotation.x, targetPitch, dt * 8);

    this.integrateMotionAndCollisions(v, dt, callbacks);
    v.speed = forwardSpeed;
  }

  private updatePoliceAI(
    v: Vehicle,
    dt: number,
    targetX: number,
    targetZ: number,
    callbacks: { onCrash: (i: number) => void; onStuntComplete: (n: string, d: number) => void; onPropHit: (x: number, z: number) => void }
  ): void {
    const dx = targetX - v.x;
    const dz = targetZ - v.z;
    const dist = Math.hypot(dx, dz);
    const desiredYaw = Math.atan2(dx, dz);

    let diff = desiredYaw - v.yaw;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;

    const steer = THREE.MathUtils.clamp(diff * 2.2, -1, 1);
    v.yaw += steer * v.spec.turnRate * dt;
    v.steerAngle = steer;

    const targetSpd = dist > 12 ? Math.min(32, 16 + dist * 0.18) : 10;
    const curSpd = Math.hypot(v.vx, v.vz);
    const nextSpd = THREE.MathUtils.lerp(curSpd, targetSpd, dt * 2.6);
    v.vx = Math.sin(v.yaw) * nextSpd;
    v.vz = Math.cos(v.yaw) * nextSpd;
    v.speed = nextSpd;
    v.sirenOn = true;

    this.integrateMotionAndCollisions(v, dt, callbacks);
  }

  private updateTrafficAI(v: Vehicle, dt: number, playerX: number, playerZ: number): void {
    // Slow down if player is right ahead
    const fwdX = Math.sin(v.yaw);
    const fwdZ = Math.cos(v.yaw);
    const dx = playerX - v.x;
    const dz = playerZ - v.z;
    const along = dx * fwdX + dz * fwdZ;
    const side = Math.abs(dx * fwdZ - dz * fwdX);
    const blocked = along > 1 && along < 14 && side < 3.4;

    const target = blocked ? 0 : v.aiSpeed;
    v.speed = THREE.MathUtils.lerp(v.speed, target, dt * 4);
    v.vx = fwdX * v.speed;
    v.vz = fwdZ * v.speed;

    v.x += v.vx * dt;
    v.z += v.vz * dt;

    // Loop smoothly at Brno outer ring edges
    if (v.aiAxis === 'z') {
      if (v.z > 305) v.z = -210;
      if (v.z < -215) v.z = 300;
    } else {
      if (v.x > 290) v.x = -280;
      if (v.x < -285) v.x = 285;
    }
    const surf = this.world.getSurfaceHeight(v.x, v.z);
    v.y = surf.y;
  }

  private applyPassivePhysics(v: Vehicle, dt: number): void {
    v.vx *= Math.max(0, 1 - 4 * dt);
    v.vz *= Math.max(0, 1 - 4 * dt);
    v.x += v.vx * dt;
    v.z += v.vz * dt;
    v.speed = Math.hypot(v.vx, v.vz);
    const surf = this.world.getSurfaceHeight(v.x, v.z);
    if (v.y > surf.y + 0.05) {
      v.vy -= 22 * dt;
      v.y = Math.max(surf.y, v.y + v.vy * dt);
    } else {
      v.y = surf.y;
      v.vy = 0;
    }
  }

  private integrateMotionAndCollisions(
    v: Vehicle,
    dt: number,
    callbacks: {
      onCrash: (intensity: number) => void;
      onStuntComplete: (rampName: string, distance: number) => void;
      onPropHit: (propX: number, propZ: number) => void;
    }
  ): void {
    const prevSurf = this.world.getSurfaceHeight(v.x, v.z);
    const nextX = THREE.MathUtils.clamp(v.x + v.vx * dt, -WORLD_HALF + 12, WORLD_HALF - 12);
    const nextZ = THREE.MathUtils.clamp(v.z + v.vz * dt, -WORLD_HALF + 12, WORLD_HALF - 12);

    // Building AABB collision
    const rad = v.spec.width * 0.52;
    let finalX = nextX;
    let finalZ = nextZ;
    let crashed = false;

    for (const box of this.world.colliders) {
      if (v.y > box.maxY + 0.5 || v.y + v.spec.height < box.minY) continue;
      if (
        finalX + rad > box.minX &&
        finalX - rad < box.maxX &&
        finalZ + rad > box.minZ &&
        finalZ - rad < box.maxZ
      ) {
        const penLeft = Math.abs((finalX + rad) - box.minX);
        const penRight = Math.abs(box.maxX - (finalX - rad));
        const penTop = Math.abs((finalZ + rad) - box.minZ);
        const penBottom = Math.abs(box.maxZ - (finalZ - rad));
        const minPen = Math.min(penLeft, penRight, penTop, penBottom);

        if (minPen === penLeft) { finalX = box.minX - rad; v.vx = -v.vx * 0.32; }
        else if (minPen === penRight) { finalX = box.maxX + rad; v.vx = -v.vx * 0.32; }
        else if (minPen === penTop) { finalZ = box.minZ - rad; v.vz = -v.vz * 0.32; }
        else { finalZ = box.maxZ + rad; v.vz = -v.vz * 0.32; }
        crashed = true;
      }
    }

    if (crashed && v.isPlayer) {
      const spd = Math.hypot(v.vx, v.vz);
      if (spd > 4) callbacks.onCrash(Math.min(1, spd / 22));
    }

    v.x = finalX;
    v.z = finalZ;

    // Terrain & Ramp elevation + Airborne Stunt Jump physics!
    const surf = this.world.getSurfaceHeight(v.x, v.z);
    if (surf.ramp) {
      v.lastRampName = surf.ramp.name;
    }

    if (v.grounded) {
      const dh = surf.y - prevSurf.y;
      if (dh < -0.55 && prevSurf.ramp) {
        // Launched off the top lip of a stunt ramp!
        const horizSpd = Math.hypot(v.vx, v.vz);
        v.vy = Math.min(15.5, horizSpd * 0.36 + 3.5);
        v.grounded = false;
        v.airTime = 0;
        v.stuntStartX = v.x;
        v.stuntStartZ = v.z;
      } else if (v.y > surf.y + 0.75) {
        v.grounded = false;
        v.airTime = 0;
      } else {
        v.y = surf.y;
        v.vy = 0;
      }
    } else {
      v.airTime += dt;
      v.vy -= 21 * dt;
      v.y += v.vy * dt;
      if (v.y <= surf.y) {
        v.y = surf.y;
        v.vy = 0;
        v.grounded = true;
        if (v.isPlayer && v.airTime > 0.75 && v.lastRampName) {
          const dist = Math.round(Math.hypot(v.x - v.stuntStartX, v.z - v.stuntStartZ));
          if (dist >= 14) {
            callbacks.onStuntComplete(v.lastRampName, dist);
          }
        }
        v.lastRampName = null;
      }
    }

    // Check destructible props (street lamps, Zelňák market stalls!)
    if (v.isPlayer || v.isPoliceChaser) {
      for (const prop of this.world.destructibles) {
        if (prop.hit) continue;
        const d = Math.hypot(v.x - prop.x, v.z - prop.z);
        if (d < rad + prop.radius) {
          prop.hit = true;
          prop.vx = v.vx * 1.15 + (Math.random() - 0.5) * 6;
          prop.vy = 5 + Math.random() * 5;
          prop.vz = v.vz * 1.15 + (Math.random() - 0.5) * 6;
          prop.rx = (Math.random() - 0.5) * 8;
          prop.rz = (Math.random() - 0.5) * 8;
          if (v.isPlayer) callbacks.onPropHit(prop.x, prop.z);
        }
      }
    }
  }
}
