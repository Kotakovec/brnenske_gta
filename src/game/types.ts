import * as THREE from 'three';

export interface Vec2 {
  x: number;
  z: number;
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
  maxSpeed: number;     // m/s (1:1 real meters/sec!)
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
  wantedCooldown: number;
  inVehicle: boolean;
  vehicleName: string;
  speedKmh: number;
  gear: string;
  nitro: number;
  weaponId: WeaponId;
  weaponName: string;
  ammoText: string;
  streetName: string;
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

// True 1:1 meter bounds around Náměstí Svobody (49.19518°N, 16.60830°E)
export const WORLD_BOUNDS = {
  minX: -1210,
  maxX: 1165,
  minZ: -1245,
  maxZ: 1505
} as const;

// Real 1:1 GPS-projected Brno landmarks (verified clear of OSM building footprints!)
export const BRNO_LANDMARKS: Landmark[] = [
  { id: 'orloj', name: 'Náměstí Svobody & Orloj', subtitle: 'Brněnský orloj, střed města 1:1', x: -2, z: 4, color: '#ff5e8e', icon: 'clock' },
  { id: 'spilberk', name: 'Hrad Špilberk', subtitle: 'Královský hrad a pevnost na kopci', x: -666, z: 84, color: '#f59e0b', icon: 'castle' },
  { id: 'petrov', name: 'Katedrála Petrov', subtitle: 'Sv. Petr a Pavel, zvoní v 11:00', x: -99, z: 460, color: '#a78bfa', icon: 'church' },
  { id: 'zelnak', name: 'Zelný trh & Parnas', subtitle: 'Historické tržiště a kašna Parnas', x: 33, z: 287, color: '#34d399', icon: 'fountain' },
  { id: 'jost', name: 'Moravské náměstí (Jošt)', subtitle: 'Jezdecká socha markraběte Jošta', x: -31, z: -333, color: '#fbbf24', icon: 'horse' },
  { id: 'hlavak', name: 'Brno Hlavní nádraží', subtitle: 'Nádražní třída a šalina uzel', x: 295, z: 465, color: '#38bdf8', icon: 'train' },
  { id: 'aztower', name: 'AZ Tower (Heršpická)', subtitle: 'Nejvyšší mrakodrap ČR (111 m)', x: -83, z: 1380, color: '#fb7185', icon: 'tower' },
  { id: 'luzanky', name: 'Park Lužánky', subtitle: 'Nejstarší městský park v Česku', x: -109, z: -1000, color: '#10b981', icon: 'park' },
  { id: 'mendlak', name: 'Mendlovo náměstí', subtitle: 'Staré Brno, bazilika a pivovar', x: -1082, z: 584, color: '#c084fc', icon: 'expo' },
  { id: 'spray', name: 'Autolakýrna Cejl', subtitle: 'Oprava, přelakování a smazání PČR hvězd', x: 720, z: -201, color: '#06b6d4', icon: 'spray' }
];

export const BRNO_DISTRICTS: District[] = [
  { name: 'Náměstí Svobody', x: 0, z: 0, radius: 130 },
  { name: 'Zelný trh', x: 40, z: 300, radius: 130 },
  { name: 'Petrov & Denisovy sady', x: -90, z: 465, radius: 145 },
  { name: 'Hrad Špilberk', x: -666, z: 84, radius: 245 },
  { name: 'Moravské náměstí', x: -20, z: -330, radius: 170 },
  { name: 'Janáčkovo divadlo', x: 220, z: -330, radius: 165 },
  { name: 'Hlavní nádraží', x: 310, z: 515, radius: 190 },
  { name: 'Staré Brno (Mendlák)', x: -1040, z: 580, radius: 320 },
  { name: 'Veveří', x: -460, z: -560, radius: 420 },
  { name: 'Park Lužánky & Ponava', x: -60, z: -1040, radius: 340 },
  { name: 'Zábrdovice & Cejl', x: 760, z: -200, radius: 420 },
  { name: 'Křenová & Trnitá', x: 780, z: 560, radius: 440 },
  { name: 'Štýřice & AZ Tower', x: -100, z: 1340, radius: 380 },
  { name: 'Nábřeží Svratky', x: -550, z: 1100, radius: 340 }
];

// Tuned for exciting true 1:1 scale city driving (m/s -> km/h = * 3.6)
export const VEHICLE_SPECS: Record<VehicleKind, VehicleSpec> = {
  supercar: {
    kind: 'supercar',
    name: 'Leonida GT Moravia',
    maxSpeed: 64,       // ~230 km/h (with nitro ~300+ km/h!)
    accel: 30,
    brake: 42,
    turnRate: 2.55,
    grip: 7.8,
    mass: 1350,
    length: 4.7,
    width: 2.05,
    height: 1.28,
    color: 0xff2e7e,
    accentColor: 0x00f0ff
  },
  octavia: {
    kind: 'octavia',
    name: 'Škoda Octavia RS 1B2',
    maxSpeed: 52,       // ~187 km/h
    accel: 22,
    brake: 34,
    turnRate: 2.45,
    grip: 7.4,
    mass: 1500,
    length: 4.65,
    width: 1.92,
    height: 1.46,
    color: 0x10b981,
    accentColor: 0x111827
  },
  police: {
    kind: 'police',
    name: 'Policie ČR Interceptor',
    maxSpeed: 57,       // ~205 km/h
    accel: 26,
    brake: 38,
    turnRate: 2.55,
    grip: 8.0,
    mass: 1680,
    length: 4.75,
    width: 1.96,
    height: 1.52,
    color: 0xdbe2ea,
    accentColor: 0x0047ab,
    isPolice: true
  },
  suv: {
    kind: 'suv',
    name: 'Brno G-Klasa 4x4',
    maxSpeed: 46,
    accel: 19,
    brake: 28,
    turnRate: 2.1,
    grip: 6.6,
    mass: 2450,
    length: 4.9,
    width: 2.1,
    height: 1.95,
    color: 0x181c28,
    accentColor: 0xf59e0b
  },
  van: {
    kind: 'van',
    name: 'Kurýr Starobrno',
    maxSpeed: 38,
    accel: 15,
    brake: 24,
    turnRate: 1.9,
    grip: 6.0,
    mass: 2600,
    length: 5.2,
    width: 2.08,
    height: 2.25,
    color: 0xf8fafc,
    accentColor: 0x15803d
  },
  classic: {
    kind: 'classic',
    name: 'Felicia Turbo 98',
    maxSpeed: 44,
    accel: 18,
    brake: 28,
    turnRate: 2.5,
    grip: 6.8,
    mass: 1180,
    length: 4.1,
    width: 1.78,
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
 * True 1:1 Brno Topography (heights relative to Náměstí Svobody = 0m):
 * - Špilberk hill at (-666, 84): rises smoothly up to +32m
 * - Petrov hill at (-84, 459): rises smoothly up to +16m
 * - Gentle historic slope down from Česká/Svoboďák toward Poříčí & Svratka
 */
export function getTerrainHeight(x: number, z: number): number {
  let h = 0;

  // Hrad Špilberk hill (real hill ~235m radius, plateau ~80m)
  const sDist = Math.hypot(x - (-666), z - 84);
  if (sDist < 235) {
    if (sDist <= 78) {
      h = Math.max(h, 30);
    } else {
      const t = (sDist - 78) / (235 - 78);
      h = Math.max(h, 30 * 0.5 * (1 + Math.cos(Math.PI * t)));
    }
  }

  // Petrov hill (real cathedral bluff ~120m radius, plateau ~42m)
  const pDist = Math.hypot(x - (-84), z - 459);
  if (pDist < 120) {
    if (pDist <= 42) {
      h = Math.max(h, 15.5);
    } else {
      const t = (pDist - 42) / (120 - 42);
      h = Math.max(h, 15.5 * 0.5 * (1 + Math.cos(Math.PI * t)));
    }
  }

  return h;
}

export function getDistrictAt(x: number, z: number): string {
  let best = 'Brno-střed';
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
