import * as THREE from 'three';
import {
  VEHICLE_SPECS,
  VehicleKind,
  VehicleSpec,
  WORLD_BOUNDS
} from './types';
import { BrnoTextures } from './textures';
import { BrnoWorld } from './world';
import { OSMRoad } from './osm';

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
  yawRate: number;
  speed: number;
  steerInputSmooth: number; // -1..1 progressive steering wheel position
  steerAngle: number;       // physical front wheel angle in radians
  tireSlip: number;         // 0..1 tire slip intensity (screech & smoke)
  latAccel: number;         // lateral G acceleration for body roll
  longAccel: number;        // longitudinal acceleration for dive/squat
  grounded: boolean;
  health: number;
  maxHealth: number;
  isPlayer: boolean;
  isAI: boolean;
  isPoliceChaser: boolean;
  sirenOn: boolean;
  aiRoad?: OSMRoad;
  aiPointIdx: number;
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

  const cabLen = spec.kind === 'van' ? l * 0.85 : spec.kind === 'supercar' ? l * 0.48 : l * 0.55;
  const cabH = h * (spec.kind === 'van' ? 0.4 : 0.46);
  const cabZ = spec.kind === 'van' ? 0 : spec.kind === 'supercar' ? -0.18 : -0.12;
  const cabin = new THREE.Mesh(new THREE.BoxGeometry(w * 0.86, cabH, cabLen), glassMat);
  cabin.position.set(0, 0.42 + chassisH + cabH * 0.45, cabZ);
  cabin.castShadow = true;
  bodyGroup.add(cabin);

  const roof = new THREE.Mesh(new THREE.BoxGeometry(w * 0.84, 0.12, cabLen * 0.9), bodyMat);
  roof.position.set(0, 0.42 + chassisH + cabH * 0.92, cabZ);
  bodyGroup.add(roof);

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

  const headMat = new THREE.MeshBasicMaterial({ color: 0xfef9c3 });
  const brakeLights = new THREE.MeshBasicMaterial({ color: 0x991b1b });
  for (const sx of [-w * 0.34, w * 0.34]) {
    const hl = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.18, 0.08), headMat);
    hl.position.set(sx, 0.45 + chassisH * 0.52, l * 0.5 + 0.02);
    const tl = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.18, 0.08), brakeLights);
    tl.position.set(sx, 0.45 + chassisH * 0.56, -l * 0.5 - 0.02);
    bodyGroup.add(hl, tl);
  }

  const plateMat = new THREE.MeshBasicMaterial({ color: 0xf8fafc });
  const plateRear = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.14, 0.05), plateMat);
  plateRear.position.set(0, 0.55, -l * 0.5 - 0.02);
  bodyGroup.add(plateRear);

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
    options?: { isAI?: boolean; isPoliceChaser?: boolean; color?: number; aiRoad?: OSMRoad; aiPointIdx?: number }
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
      yawRate: 0,
      speed: 0,
      steerInputSmooth: 0,
      steerAngle: 0,
      tireSlip: 0,
      latAccel: 0,
      longAccel: 0,
      grounded: true,
      health: 100,
      maxHealth: 100,
      isPlayer: false,
      isAI: options?.isAI ?? false,
      isPoliceChaser: options?.isPoliceChaser ?? false,
      sirenOn: options?.isPoliceChaser ?? false,
      aiRoad: options?.aiRoad,
      aiPointIdx: options?.aiPointIdx ?? 0,
      aiDir: 1,
      aiSpeed: 10 + Math.random() * 8,
      airTime: 0,
      stuntStartX: x,
      stuntStartZ: z,
      lastRampName: null
    };
    this.vehicles.push(v);
    return v;
  }

  private spawnInitialFleet(): void {
    // Hero parked vehicles right on real 1:1 Brno plazas & streets!
    this.spawnVehicle('supercar', 8, 12, Math.PI, { color: 0xff2e7e });           // Náměstí Svobody right by player!
    this.spawnVehicle('octavia', -16, 16, 0.3, { color: 0x10b981 });              // Náměstí Svobody west
    this.spawnVehicle('police', -35, -315, Math.PI * 0.5);                        // Moravské náměstí PČR patrol
    this.spawnVehicle('suv', 275, -326, Math.PI, { color: 0x181c28 });            // Janáčkovo divadlo
    this.spawnVehicle('supercar', -83, 1380, 0, { color: 0x06b6d4 });             // AZ Tower Heršpická supercar
    this.spawnVehicle('classic', 26, 286, 0.2, { color: 0xf59e0b });              // Zelný trh Felicia
    this.spawnVehicle('van', 295, 465, -Math.PI * 0.4);                           // Hlavní nádraží Starobrno van
    this.spawnVehicle('supercar', -1082, 584, 0, { color: 0xa855f7 });            // Mendlovo náměstí
    this.spawnVehicle('suv', -666, 84, Math.PI * 0.5, { color: 0xdc2626 });       // Hrad Špilberk courtyard

    // Spawn 28 AI Traffic cars driving directly along REAL 1:1 OSM Brno streets!
    const roads = this.world.spatial.drivableRoads.filter(r => r.p.length >= 8);
    const trafficKinds: VehicleKind[] = ['octavia', 'classic', 'suv', 'van', 'octavia', 'supercar'];
    const trafficColors = [0xe2e8f0, 0x3b82f6, 0xef4444, 0x10b981, 0xf59e0b, 0x6366f1, 0x475569];

    if (roads.length > 0) {
      const step = Math.max(1, Math.floor(roads.length / 28));
      let spawned = 0;
      for (let i = 0; i < roads.length && spawned < 28; i += step) {
        const road = roads[i];
        const x1 = road.p[0], z1 = road.p[1];
        const x2 = road.p[2], z2 = road.p[3];
        const yaw = Math.atan2(x2 - x1, z2 - z1);
        this.spawnVehicle(
          trafficKinds[spawned % trafficKinds.length],
          x1,
          z1,
          yaw,
          {
            isAI: true,
            color: trafficColors[spawned % trafficColors.length],
            aiRoad: road,
            aiPointIdx: 1
          }
        );
        spawned++;
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
      }
      return;
    }

    if (active.length < desired) {
      const sp = this.world.spatial.getNearestRoadSpawn(
        playerX + (Math.random() - 0.5) * 180,
        playerZ + (Math.random() - 0.5) * 180,
        95
      );
      this.spawnVehicle('police', sp.x, sp.z, sp.yaw, { isPoliceChaser: true });
    }
  }

  public repaintAndRepair(v: Vehicle): void {
    v.health = v.maxHealth;
    if (!v.spec.isPolice) {
      const palette = [0xff2e7e, 0x06b6d4, 0x10b981, 0xf59e0b, 0x8b5cf6, 0xf43f5e, 0xf8fafc];
      v.bodyMat.color.setHex(palette[Math.floor(Math.random() * palette.length)]);
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
      } else if (v.isAI && v.aiRoad) {
        this.updateTrafficAI(v, clampedDt, playerTargetX, playerTargetZ);
      } else {
        this.applyPassivePhysics(v, clampedDt);
      }

      v.mesh.position.set(v.x, v.y, v.z);
      v.mesh.rotation.y = v.yaw;

      const spin = v.speed * clampedDt * 2.55;
      // Ackermann visual front wheel angles (inner wheel turns slightly sharper than outer wheel)
      const wheelbase = v.spec.length * 0.64;
      const track = v.spec.width * 0.92;
      const absDelta = Math.abs(v.steerAngle);
      let leftWheelYaw = v.steerAngle;
      let rightWheelYaw = v.steerAngle;
      if (absDelta > 0.01) {
        const turnR = wheelbase / Math.tan(absDelta);
        const inner = Math.atan(wheelbase / Math.max(1.2, turnR - track * 0.5));
        const outer = Math.atan(wheelbase / (turnR + track * 0.5));
        if (v.steerAngle > 0) {
          leftWheelYaw = inner;
          rightWheelYaw = outer;
        } else {
          leftWheelYaw = -outer;
          rightWheelYaw = -inner;
        }
      }
      v.wheels.forEach((w, idx) => {
        if (idx === 0) w.rotation.y = leftWheelYaw;
        else if (idx === 1) w.rotation.y = rightWheelYaw;
        w.children[0].rotation.x += spin;
      });
    }

    // Vehicle-to-vehicle collision
    for (let i = 0; i < this.vehicles.length; i++) {
      const a = this.vehicles[i];
      for (let j = i + 1; j < this.vehicles.length; j++) {
        const b = this.vehicles[j];
        const dx = b.x - a.x;
        const dz = b.z - a.z;
        const dist = Math.hypot(dx, dz);
        const minDist = (a.spec.width + b.spec.width) * 0.55;
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
    const wheelbase = spec.length * 0.64;
    const halfL = wheelbase * 0.5;
    const prevFwdSpeed = v.vx * Math.sin(v.yaw) + v.vz * Math.cos(v.yaw);

    // 1. Progressive Steering Wheel Rack with Counter-Steer Boost & Self-Centering Caster
    const curSpeedAbs = Math.hypot(v.vx, v.vz);
    if (Math.abs(input.steer) > 0.02) {
      const counterSteering = input.steer * v.steerInputSmooth < -0.05;
      const steerRate = counterSteering ? 6.4 : 3.4;
      const diff = input.steer - v.steerInputSmooth;
      const step = Math.sign(diff) * Math.min(Math.abs(diff), steerRate * dt);
      v.steerInputSmooth += step;
    } else {
      // Natural self-centering caster torque (returns faster at road speed)
      const returnRate = 4.6 + Math.min(4.2, curSpeedAbs * 0.14);
      if (Math.abs(v.steerInputSmooth) <= returnRate * dt) {
        v.steerInputSmooth = 0;
      } else {
        v.steerInputSmooth -= Math.sign(v.steerInputSmooth) * returnRate * dt;
      }
    }

    // 2. Speed-Sensitive Max Steering Lock (36° tight city turns -> 5.5° rock-solid at 200 km/h)
    const maxLockLow = spec.kind === 'van' ? 0.56 : 0.64; // ~36.6 deg
    const speedLockFactor = 1 / (1 + Math.pow(curSpeedAbs / 16.5, 1.48));
    // Give slightly more lock when drifting with handbrake so counter-steering catches big angles!
    const handbrakeLockBonus = input.handbrake ? 1.22 : 1.0;
    const maxWheelAngle = Math.max(0.085, maxLockLow * speedLockFactor * handbrakeLockBonus);
    v.steerAngle = v.steerInputSmooth * maxWheelAngle;

    const maxSpd = input.nitro ? spec.maxSpeed * 1.38 : spec.maxSpeed;
    const engineAccel = input.nitro ? spec.accel * 1.85 : spec.accel;

    // 3. Sub-stepped Realistic Bicycle Tire Dynamics (4 substeps for 100% stability at any FPS)
    let slipPeak = 0;
    let accumLatAccel = 0;

    if (v.grounded) {
      const subSteps = 4;
      const subDt = dt / subSteps;
      const baseGripG = spec.grip * 1.75; // realistic peak lateral acceleration (~11-14 m/s^2)
      const aeroDrag = 0.00055;           // aerodynamic drag grows with v^2
      const rollingRes = 0.32;

      for (let s = 0; s < subSteps; s++) {
        const sinY = Math.sin(v.yaw);
        const cosY = Math.cos(v.yaw);
        // Car-local basis: fwd = (sinY, cosY), left = (cosY, -sinY)
        let vFwd = v.vx * sinY + v.vz * cosY;
        let vLat = v.vx * cosY - v.vz * sinY;

        // Longitudinal force (throttle, braking, engine braking, aero drag)
        let longF = 0;
        if (input.throttle > 0.05) {
          if (vFwd < -1.0) {
            longF = spec.brake * input.throttle;
          } else {
            // Realistic torque falloff near top speed
            const powerCurve = Math.max(0.15, 1 - Math.pow(Math.max(0, vFwd) / maxSpd, 2.2));
            longF = engineAccel * input.throttle * powerCurve;
          }
        } else if (input.throttle < -0.05) {
          if (vFwd > 0.8) {
            longF = -spec.brake * (-input.throttle);
          } else {
            const revMax = spec.maxSpeed * 0.34;
            const revCurve = Math.max(0.1, 1 - Math.abs(vFwd) / revMax);
            longF = -spec.accel * 0.52 * (-input.throttle) * revCurve;
          }
        } else {
          // Engine coasting + rolling resistance
          if (Math.abs(vFwd) > 0.08) {
            longF = -Math.sign(vFwd) * (rollingRes + Math.abs(vFwd) * 0.06);
          } else {
            vFwd = 0;
          }
        }

        // Aero drag + handbrake rear braking
        longF -= vFwd * Math.abs(vFwd) * aeroDrag;
        if (input.handbrake && Math.abs(vFwd) > 0.2) {
          longF -= Math.sign(vFwd) * (spec.brake * 0.38);
        }

        // Dynamic weight transfer (braking loads front tires for sharper turn-in; accel loads rear)
        const weightShift = THREE.MathUtils.clamp(longF / 22, -0.35, 0.35);
        const frontLoad = 1.0 - weightShift * 0.32;
        const rearLoad = 1.0 + weightShift * 0.32;

        const absFwd = Math.abs(vFwd);

        if (absFwd < 3.5) {
          // Low-speed exact Kinematic Ackermann Bicycle Model (true parking-lot turning arc, zero jitter)
          const targetOmega = (vFwd / wheelbase) * Math.tan(v.steerAngle);
          v.yawRate = THREE.MathUtils.lerp(v.yawRate, targetOmega, Math.min(1, subDt * 18));
          vFwd += longF * subDt;
          vLat *= Math.max(0, 1 - 14 * subDt);
          v.yaw += v.yawRate * subDt;
        } else {
          // Dynamic Slip-Angle Bicycle Tire Model (Pacejka-like tanh saturation)
          const vFrontLat = vLat + v.yawRate * halfL;
          const vRearLat = vLat - v.yawRate * halfL;

          const dirSign = vFwd >= 0 ? 1 : -1;
          const alphaFront = Math.atan2(vFrontLat, absFwd) - v.steerAngle * dirSign;
          const alphaRear = Math.atan2(vRearLat, absFwd);

          // Cornering stiffness & grip ceilings
          const cornerStiff = spec.kind === 'supercar' ? 5.6 : spec.kind === 'police' ? 5.3 : 4.6;
          const maxFrontLat = baseGripG * frontLoad * 1.05;
          // Handbrake drops rear grip sharply so the tail swings out cleanly into a controllable drift!
          const rearGripMult = input.handbrake ? 0.30 : (input.nitro && Math.abs(v.steerAngle) > 0.08 ? 0.78 : 1.0);
          const maxRearLat = baseGripG * rearLoad * rearGripMult;

          const latForceFront = -maxFrontLat * Math.tanh(alphaFront * cornerStiff);
          const latForceRear = -maxRearLat * Math.tanh(alphaRear * cornerStiff);

          // Subtle tire scrubbing slows forward speed slightly when sliding hard
          const scrubDrag = (Math.abs(latForceFront * Math.sin(v.steerAngle)) + Math.abs(latForceRear * Math.sin(alphaRear))) * 0.22;

          // Update local velocities & rotational inertia
          const netLatAccel = (latForceFront + latForceRear) * 0.52;
          // Torque around vertical axis (scaled by realistic radius of gyration)
          const yawInertiaFactor = spec.kind === 'suv' || spec.kind === 'van' ? 0.56 : 0.72;
          const yawAccel = ((latForceFront - latForceRear) * halfL) / (wheelbase * wheelbase * 0.24) * yawInertiaFactor;

          vFwd += (longF - Math.sign(vFwd) * scrubDrag) * subDt;
          // Centrifugal coupling (-vFwd * yawRate) + tire lateral acceleration!
          vLat += (netLatAccel - vFwd * v.yawRate) * subDt;
          v.yawRate += yawAccel * subDt;

          // Subtle yaw stability damping so keyboard driving feels natural & never spins uncontrollably
          const stabDamp = input.handbrake ? 1.15 : 2.8;
          v.yawRate *= Math.max(0, 1 - stabDamp * subDt);
          v.yaw += v.yawRate * subDt;

          accumLatAccel += netLatAccel;
          const fSlip = Math.abs(alphaFront);
          const rSlip = Math.abs(alphaRear);
          slipPeak = Math.max(slipPeak, Math.max(fSlip, rSlip) * (input.handbrake ? 1.5 : 1.0));
        }

        vFwd = THREE.MathUtils.clamp(vFwd, -spec.maxSpeed * 0.35, maxSpd);

        // Convert updated local velocity back to world (vx, vz)
        const nSin = Math.sin(v.yaw);
        const nCos = Math.cos(v.yaw);
        v.vx = nSin * vFwd + nCos * vLat;
        v.vz = nCos * vFwd - nSin * vLat;
      }

      const newFwdSpeed = v.vx * Math.sin(v.yaw) + v.vz * Math.cos(v.yaw);
      v.longAccel = THREE.MathUtils.lerp(v.longAccel, (newFwdSpeed - prevFwdSpeed) / Math.max(0.001, dt), dt * 9);
      v.latAccel = THREE.MathUtils.lerp(v.latAccel, accumLatAccel / subSteps, dt * 10);

      // Tire slip indicator (0..1) for screech audio & rear tire smoke
      const rawSlip = curSpeedAbs > 7 ? THREE.MathUtils.clamp((slipPeak - 0.17) * 2.4, 0, 1) : 0;
      v.tireSlip = THREE.MathUtils.lerp(v.tireSlip, rawSlip, dt * 12);

      // Emit realistic dual rear-tire smoke when tires slip or handbrake drifting
      if (v.tireSlip > 0.24 && curSpeedAbs > 8) {
        const sY = Math.sin(v.yaw), cY = Math.cos(v.yaw);
        const rearDist = spec.length * 0.34;
        const halfTrack = spec.width * 0.44;
        for (const side of [-1, 1]) {
          if (Math.random() < v.tireSlip * 0.65) {
            const tx = v.x - sY * rearDist + cY * halfTrack * side;
            const tz = v.z - cY * rearDist - sY * halfTrack * side;
            callbacks.onDriftParticle(tx, v.y + 0.18, tz, 0xdbe4ee);
          }
        }
      }
      if (input.nitro && newFwdSpeed > 4) {
        const sY = Math.sin(v.yaw), cY = Math.cos(v.yaw);
        callbacks.onDriftParticle(v.x - sY * (spec.length * 0.54), v.y + 0.42, v.z - cY * (spec.length * 0.54), 0x06b6d4);
      }

      v.speed = newFwdSpeed;
    } else {
      // Airborne: preserve momentum, slow yaw decay, zero tire slip
      v.yaw += v.yawRate * 0.45 * dt;
      v.yawRate *= Math.max(0, 1 - 1.5 * dt);
      v.tireSlip = THREE.MathUtils.lerp(v.tireSlip, 0, dt * 10);
      v.latAccel = THREE.MathUtils.lerp(v.latAccel, 0, dt * 6);
      v.longAccel = THREE.MathUtils.lerp(v.longAccel, 0, dt * 6);
      v.speed = v.vx * Math.sin(v.yaw) + v.vz * Math.cos(v.yaw);
    }

    // Brake lights when actively braking or handbrake held
    const isBraking = (input.throttle < -0.1 && v.speed > 0.6) || input.handbrake;
    v.brakeLights.color.setHex(isBraking ? 0xff2244 : 0x7f1d1d);

    // Realistic G-Force Suspension Body Roll & Pitch (SUV/Van leans more than stiff supercar!)
    const rollStiffness = spec.kind === 'supercar' ? 0.0052 : spec.kind === 'suv' || spec.kind === 'van' ? 0.0115 : 0.0078;
    const pitchStiffness = spec.kind === 'supercar' ? 0.0022 : 0.0038;
    const targetRoll = THREE.MathUtils.clamp(-v.latAccel * rollStiffness, -0.15, 0.15);
    const targetPitch = THREE.MathUtils.clamp(-v.longAccel * pitchStiffness, -0.075, 0.085);
    v.bodyGroup.rotation.z = THREE.MathUtils.lerp(v.bodyGroup.rotation.z, targetRoll, dt * 9);
    v.bodyGroup.rotation.x = THREE.MathUtils.lerp(v.bodyGroup.rotation.x, targetPitch, dt * 9);

    this.integrateMotionAndCollisions(v, dt, callbacks);
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

    const targetSpd = dist > 14 ? Math.min(38, 18 + dist * 0.16) : 10;
    const curSpd = Math.hypot(v.vx, v.vz);
    const nextSpd = THREE.MathUtils.lerp(curSpd, targetSpd, dt * 2.6);
    v.vx = Math.sin(v.yaw) * nextSpd;
    v.vz = Math.cos(v.yaw) * nextSpd;
    v.speed = nextSpd;
    v.sirenOn = true;

    this.integrateMotionAndCollisions(v, dt, callbacks);
  }

  private updateTrafficAI(v: Vehicle, dt: number, playerX: number, playerZ: number): void {
    const road = v.aiRoad!;
    const numPts = road.p.length / 2;
    const tx = road.p[v.aiPointIdx * 2];
    const tz = road.p[v.aiPointIdx * 2 + 1];

    const dx = tx - v.x;
    const dz = tz - v.z;
    const distToPt = Math.hypot(dx, dz);
    if (distToPt < 4.5) {
      v.aiPointIdx += v.aiDir;
      if (v.aiPointIdx >= numPts || v.aiPointIdx < 0) {
        v.aiDir = v.aiDir === 1 ? -1 : 1;
        v.aiPointIdx = Math.max(0, Math.min(numPts - 1, v.aiPointIdx + v.aiDir * 2));
      }
      return;
    }

    const desiredYaw = Math.atan2(dx, dz);
    let diff = desiredYaw - v.yaw;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    v.yaw += diff * Math.min(1, dt * 5.5);

    // Yield if player is right ahead
    const fwdX = Math.sin(v.yaw);
    const fwdZ = Math.cos(v.yaw);
    const pdx = playerX - v.x;
    const pdz = playerZ - v.z;
    const along = pdx * fwdX + pdz * fwdZ;
    const side = Math.abs(pdx * fwdZ - pdz * fwdX);
    const blocked = along > 1 && along < 14 && side < 3.4;

    v.speed = THREE.MathUtils.lerp(v.speed, blocked ? 0 : v.aiSpeed, dt * 4);
    v.vx = fwdX * v.speed;
    v.vz = fwdZ * v.speed;
    v.x += v.vx * dt;
    v.z += v.vz * dt;
    v.y = this.world.getSurfaceHeight(v.x, v.z).y;
  }

  private applyPassivePhysics(v: Vehicle, dt: number): void {
    v.vx *= Math.max(0, 1 - 4 * dt);
    v.vz *= Math.max(0, 1 - 4 * dt);
    v.yawRate *= Math.max(0, 1 - 6 * dt);
    v.tireSlip = 0;
    v.steerInputSmooth = THREE.MathUtils.lerp(v.steerInputSmooth, 0, Math.min(1, dt * 6));
    v.steerAngle = THREE.MathUtils.lerp(v.steerAngle, 0, Math.min(1, dt * 6));
    v.bodyGroup.rotation.z = THREE.MathUtils.lerp(v.bodyGroup.rotation.z, 0, Math.min(1, dt * 6));
    v.bodyGroup.rotation.x = THREE.MathUtils.lerp(v.bodyGroup.rotation.x, 0, Math.min(1, dt * 6));
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
    const nextX = THREE.MathUtils.clamp(v.x + v.vx * dt, WORLD_BOUNDS.minX, WORLD_BOUNDS.maxX);
    const nextZ = THREE.MathUtils.clamp(v.z + v.vz * dt, WORLD_BOUNDS.minZ, WORLD_BOUNDS.maxZ);

    // Exact 2D polygon collision against all 4,762 real 1:1 Brno buildings via O(1) spatial hash!
    const rad = v.spec.width * 0.5;
    const res = this.world.spatial.resolveCircleCollision(nextX, v.y, nextZ, rad);
    v.x = res.x;
    v.z = res.z;

    if (res.hit) {
      // Slide smoothly along the building wall instead of getting stuck!
      const vn = v.vx * res.nx + v.vz * res.nz;
      if (vn < 0) {
        if (v.isPlayer && -vn > 6) {
          callbacks.onCrash(Math.min(1, -vn / 24));
        }
        v.vx -= 1.28 * vn * res.nx;
        v.vz -= 1.28 * vn * res.nz;
        v.vx *= 0.85;
        v.vz *= 0.85;
        v.yawRate *= 0.35;
      }
    }

    const surf = this.world.getSurfaceHeight(v.x, v.z);
    if (surf.ramp) v.lastRampName = surf.ramp.name;

    if (v.grounded) {
      const dh = surf.y - prevSurf.y;
      if (dh < -0.55 && prevSurf.ramp) {
        const horizSpd = Math.hypot(v.vx, v.vz);
        v.vy = Math.min(17.5, horizSpd * 0.34 + 3.8);
        v.grounded = false;
        v.airTime = 0;
        v.stuntStartX = v.x;
        v.stuntStartZ = v.z;
      } else if (v.y > surf.y + 0.8) {
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
          if (dist >= 14) callbacks.onStuntComplete(v.lastRampName, dist);
        }
        v.lastRampName = null;
      }
    }

    // Destructible props (Zelný trh stalls)
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
