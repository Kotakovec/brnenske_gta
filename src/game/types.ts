import * as THREE from 'three';

export interface Vec2 {
  x: number;
  z: number;
}

export interface AABB {
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
  minZ: number;
  maxZ: number;
  label?: string;
}

export interface RampCollider {
  x: number;
  z: number;
  width: number;
  length: number;
  height: number;
  rotY: number; // direction the ramp ascends toward (local +Z)
  name: string;
}

export interface Landmark {
  id: string;
  name: string;
  subtitle: string;
  x: number;
  z: number;
  color: string;
  icon: 'clock' | 'castle' | 'church' | 'tower' | 'train' | 'horse' | 'fountain' | 'park' | 'spray' | 'expo';
  fastTravelYaw?: number;
}

export interface District {
  name: string;
  x: number;
  z: number;
  radius: number;
}

export type VehicleKind = 'supercar' | 'octavia' | 'police' | 'suv' | 'van' | 'classic';

export interface VehicleSpec {
  kind: VehicleKind;
  name: string;
  maxSpeed: number;     // m/s
  accel: number;        // m/s^2
  brake: number;        // m/s^2
  turnRate: number;     // rad/s
  grip: number;         // lateral grip factor
  mass: number;
  length: number;
  width: number;
  height: number;
  color: number;
  accentColor?: number;
  isPolice?: boolean;
}

export type WeaponId = 'fists' | 'pistol' | 'smg' | 'rpg';

export interface WeaponSpec {
  id: WeaponId;
  name: string;
  damage: number;
  fireRate: number; // shots/sec
  range: number;
  spread: number;
  explosive?: boolean;
  ammo: number;
  maxAmmo: number;
}

export interface MissionStep {
  title: string;
  hint: string;
  type: 'goto' | 'interact' | 'vehicle_goto' | 'escape_police' | 'checkpoints' | 'eliminate';
  targetX: number;
  targetZ: number;
  radius: number;
  requiredVehicle?: VehicleKind;
  wantedToTrigger?: number;
  checkpoints?: Vec2[];
  enemyCount?: number;
}

export interface MissionDef {
  id: string;
  title: string;
  giver: string;
  reward: number;
  steps: MissionStep[];
}

export interface Collectible {
  id: string;
  name: string;
  x: number;
  z: number;
  yOffset: number;
  collected: boolean;
  mesh?: THREE.Group;
}

export type TimePreset = 'sunset' | 'day' | 'night' | 'dawn';

export interface GameHUDState {
  health: number;
  maxHealth: number;
  armor: number;
  money: number;
  wanted: number;
  wantedCooldown: number; // 0..1
  inVehicle: boolean;
  vehicleName: string;
  speedKmh: number;
  gear: string;
  nitro: number; // 0..100
  weaponId: WeaponId;
  weaponName: string;
  ammoText: string;
  district: string;
  gameTimeStr: string;
  radioStation: string;
  missionTitle: string;
  missionHint: string;
  missionDistance: number | null;
  collectiblesFound: number;
  collectiblesTotal: number;
  promptText: string;
  isPoliceSiren: boolean;
  fps: number;
}

// Single source of truth for Brno street network
export const WORLD_HALF = 410;
export const ROAD_WIDTH = 16;

export const ROAD_X = [-290, -140, -60, 20, 130, 240] as const;
export const ROAD_Z = [-220, -110, 0, 110, 220, 310] as const;

export const RIVER_Z_MIN = 338;
export const RIVER_Z_MAX = 374;
export const BRIDGE_XS = [-140, 20, 240] as const;

export const BRNO_LANDMARKS: Landmark[] = [
  { id: 'orloj', name: 'Náměstí Svobody & Orloj', subtitle: 'Brněnský orloj, chytání kuličky v 11:00', x: 0, z: 0, color: '#ff5e8e', icon: 'clock', fastTravelYaw: 0 },
  { id: 'spilberk', name: 'Hrad Špilberk', subtitle: 'Královský hrad a pevnost nad Brnem', x: -212, z: -25, color: '#f59e0b', icon: 'castle', fastTravelYaw: Math.PI * 0.5 },
  { id: 'petrov', name: 'Katedrála Petrov', subtitle: 'Sv. Petr a Pavel, zvoní poledne v 11:00', x: -116, z: 132, color: '#a78bfa', icon: 'church', fastTravelYaw: 0 },
  { id: 'aztower', name: 'AZ Tower', subtitle: 'Nejvyšší mrakodrap ČR (111 m)', x: 200, z: 274, color: '#fb7185', icon: 'tower', fastTravelYaw: -Math.PI * 0.5 },
  { id: 'hlavak', name: 'Brno Hlavní nádraží', subtitle: 'Nádražní třída a šalina uzel', x: 20, z: 232, color: '#38bdf8', icon: 'train', fastTravelYaw: Math.PI },
  { id: 'jost', name: 'Moravské náměstí (Jošt)', subtitle: 'Jezdecká socha markraběte Jošta', x: 20, z: -124, color: '#fbbf24', icon: 'horse', fastTravelYaw: 0 },
  { id: 'zelnak', name: 'Zelný trh & Parnas', subtitle: 'Tržiště, kašna Parnas a Stará radnice', x: -22, z: 110, color: '#34d399', icon: 'fountain', fastTravelYaw: 0 },
  { id: 'luzanky', name: 'Park Lužánky', subtitle: 'Nejstarší městský park v Česku', x: 40, z: -285, color: '#10b981', icon: 'park', fastTravelYaw: 0 },
  { id: 'spray', name: 'Autolakýrna Cejl', subtitle: 'Oprava, přelakování a smazání hvězd PČR', x: 185, z: -55, color: '#06b6d4', icon: 'spray', fastTravelYaw: -Math.PI * 0.5 },
  { id: 'bvv', name: 'Brněnské výstaviště', subtitle: 'Pavilon A a driftovací rovinka', x: -315, z: 165, color: '#c084fc', icon: 'expo', fastTravelYaw: Math.PI * 0.5 }
];

export const BRNO_DISTRICTS: District[] = [
  { name: 'Náměstí Svobody', x: 0, z: 0, radius: 55 },
  { name: 'Hrad Špilberk', x: -215, z: -25, radius: 85 },
  { name: 'Petrov & Denisovy sady', x: -116, z: 132, radius: 60 },
  { name: 'Zelný trh', x: -22, z: 110, radius: 50 },
  { name: 'Moravské náměstí', x: 20, z: -115, radius: 65 },
  { name: 'Janáčkovo divadlo', x: 130, z: -145, radius: 55 },
  { name: 'Park Lužánky', x: 40, z: -285, radius: 110 },
  { name: 'Brno Hlavní nádraží', x: 20, z: 245, radius: 65 },
  { name: 'AZ Tower & Heršpická', x: 205, z: 275, radius: 80 },
  { name: 'Cejl & Koliště', x: 185, z: -25, radius: 85 },
  { name: 'Brněnské výstaviště', x: -315, z: 165, radius: 100 },
  { name: 'Nábřeží Svratky', x: 0, z: 350, radius: 180 }
];

export const VEHICLE_SPECS: Record<VehicleKind, VehicleSpec> = {
  supercar: {
    kind: 'supercar',
    name: 'Leonida GT Moravia',
    maxSpeed: 48,
    accel: 26,
    brake: 34,
    turnRate: 2.55,
    grip: 7.5,
    mass: 1350,
    length: 4.7,
    width: 2.1,
    height: 1.28,
    color: 0xff2e7e,
    accentColor: 0x00f0ff
  },
  octavia: {
    kind: 'octavia',
    name: 'Škoda Octavia RS 1B2',
    maxSpeed: 39,
    accel: 19,
    brake: 28,
    turnRate: 2.4,
    grip: 7.2,
    mass: 1500,
    length: 4.65,
    width: 1.95,
    height: 1.46,
    color: 0x10b981,
    accentColor: 0x111827
  },
  police: {
    kind: 'police',
    name: 'Policie ČR Interceptor',
    maxSpeed: 44,
    accel: 23,
    brake: 32,
    turnRate: 2.5,
    grip: 7.8,
    mass: 1680,
    length: 4.75,
    width: 2.0,
    height: 1.52,
    color: 0xdbe2ea,
    accentColor: 0x0047ab,
    isPolice: true
  },
  suv: {
    kind: 'suv',
    name: 'Brno G-Klasa 4x4',
    maxSpeed: 35,
    accel: 16,
    brake: 24,
    turnRate: 2.05,
    grip: 6.4,
    mass: 2450,
    length: 4.95,
    width: 2.18,
    height: 1.95,
    color: 0x181c28,
    accentColor: 0xf59e0b
  },
  van: {
    kind: 'van',
    name: 'Kurýr Starobrno',
    maxSpeed: 30,
    accel: 13,
    brake: 21,
    turnRate: 1.85,
    grip: 5.8,
    mass: 2600,
    length: 5.3,
    width: 2.15,
    height: 2.25,
    color: 0xf8fafc,
    accentColor: 0x15803d
  },
  classic: {
    kind: 'classic',
    name: 'Felicia Turbo 98',
    maxSpeed: 34,
    accel: 16,
    brake: 24,
    turnRate: 2.45,
    grip: 6.5,
    mass: 1180,
    length: 4.1,
    width: 1.8,
    height: 1.42,
    color: 0xf59e0b,
    accentColor: 0x1f2937
  }
};

export const WEAPON_SPECS: Record<WeaponId, WeaponSpec> = {
  fists: { id: 'fists', name: 'Pěsti', damage: 28, fireRate: 2.5, range: 3.2, spread: 0, ammo: 0, maxAmmo: 0 },
  pistol: { id: 'pistol', name: 'CZ 75 Brno 9mm', damage: 35, fireRate: 4.2, range: 95, spread: 0.015, ammo: 60, maxAmmo: 120 },
  smg: { id: 'smg', name: 'Škorpion EVO 3', damage: 22, fireRate: 11, range: 85, spread: 0.045, ammo: 150, maxAmmo: 300 },
  rpg: { id: 'rpg', name: 'RPG-7 Šutr', damage: 180, fireRate: 0.7, range: 160, spread: 0.01, explosive: true, ammo: 12, maxAmmo: 20 }
};

/**
 * Continuous heightfield for Brno topography:
 * - Špilberk hill at (-215, -25), plateau at y=22
 * - Petrov hill at (-116, 132), plateau at y=13
 * - Svratka river depression at z in [338..374] (bridges stay flat at y=0.2)
 */
export function getTerrainHeight(x: number, z: number): number {
  let h = 0;

  // Špilberk hill: smooth plateau + gentle drivable slope
  const sdx = x - (-215);
  const sdz = z - (-25);
  const sDist = Math.hypot(sdx, sdz);
  if (sDist < 95) {
    if (sDist <= 38) {
      h = Math.max(h, 20);
    } else {
      const t = (sDist - 38) / (95 - 38);
      const smooth = 0.5 * (1 + Math.cos(Math.PI * t));
      h = Math.max(h, 20 * smooth);
    }
  }

  // Petrov hill: smooth plateau
  const pdx = x - (-116);
  const pdz = z - 132;
  const pDist = Math.hypot(pdx, pdz);
  if (pDist < 62) {
    if (pDist <= 24) {
      h = Math.max(h, 11.5);
    } else {
      const t = (pDist - 24) / (62 - 24);
      const smooth = 0.5 * (1 + Math.cos(Math.PI * t));
      h = Math.max(h, 11.5 * smooth);
    }
  }

  // Svratka river depression (except bridges)
  if (z > RIVER_Z_MIN - 8 && z < RIVER_Z_MAX + 8) {
    let onBridge = false;
    for (const bx of BRIDGE_XS) {
      if (Math.abs(x - bx) < ROAD_WIDTH * 0.62) {
        onBridge = true;
        break;
      }
    }
    if (!onBridge) {
      if (z >= RIVER_Z_MIN && z <= RIVER_Z_MAX) {
        h = -3.0;
      } else {
        const edgeDist = z < RIVER_Z_MIN ? (RIVER_Z_MIN - z) : (z - RIVER_Z_MAX);
        const t = 1 - edgeDist / 8;
        h = Math.min(h, -3.0 * t);
      }
    }
  }

  return h;
}

export function getDistrictAt(x: number, z: number): string {
  let best = 'Brno Centrum';
  let bestScore = Infinity;
  for (const d of BRNO_DISTRICTS) {
    const dist = Math.hypot(x - d.x, z - d.z);
    if (dist < d.radius && dist / d.radius < bestScore) {
      bestScore = dist / d.radius;
      best = d.name;
    }
  }
  return best;
}
