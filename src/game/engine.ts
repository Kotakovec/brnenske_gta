import * as THREE from 'three';
import {
  BRNO_LANDMARKS,
  GameHUDState,
  TimePreset,
  VehicleKind,
  WEAPON_SPECS,
  getDistrictAt
} from './types';
import { BrnoOSMData } from './osm';
import { createBrnoTextures } from './textures';
import { BrnoAudioEngine } from './audio';
import { BrnoWorld, buildBrnoWorld } from './world';
import { SalinaSystem } from './tram';
import { DriveInput, Vehicle, VehicleManager } from './vehicles';
import { PlayerAndNPCSystem } from './player';
import { MissionAndCollectibleSystem } from './missions';
import { BrnoMinimapRenderer } from './minimap';

interface Particle {
  mesh: THREE.Mesh;
  vx: number;
  vy: number;
  vz: number;
  life: number;
  maxLife: number;
  grow: number;
}

export interface BannerEvent {
  title: string;
  subtitle: string;
  accent: 'gold' | 'pink' | 'cyan' | 'red';
}

export class BrnoGameEngine {
  private container: HTMLElement;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private sunLight: THREE.DirectionalLight;
  private hemiLight: THREE.HemisphereLight;
  private skyMat: THREE.ShaderMaterial;

  private world: BrnoWorld;
  private trams: SalinaSystem;
  private vehicles: VehicleManager;
  private playerSys: PlayerAndNPCSystem;
  private missions: MissionAndCollectibleSystem;
  private minimap: BrnoMinimapRenderer;
  public readonly audio = new BrnoAudioEngine();

  private particles: Particle[] = [];
  private particleGeo = new THREE.SphereGeometry(0.38, 6, 6);

  public started = false;
  public paused = false;
  private playerVehicle: Vehicle | null = null;
  private money = 5000;
  private wanted = 0;
  private wantedTimer = 0;
  private nitro = 100;
  private timeOfDay = 17.8;
  private timeSpeed = 0.04;
  private customWaypoint: { x: number; z: number } | null = null;
  private sprayCooldown = 0;

  private camYaw = Math.PI;
  private camPitch = 0.24;
  private camPos = new THREE.Vector3(-2, 10, 26);
  private camLook = new THREE.Vector3(-2, 2, 12);
  private isDraggingMouse = false;
  private pointerLocked = false;

  private keys = new Set<string>();
  private touchMove = { x: 0, y: 0 };
  private touchActions = { sprint: false, brake: false, shoot: false };
  private interactQueued = false;
  private mouseDown = false;

  private onHUDUpdate: (state: GameHUDState) => void;
  private onBanner: (banner: BannerEvent) => void;
  private lastTime = 0;
  private hudTimer = 0;
  private fps = 60;
  private rafId = 0;

  constructor(
    container: HTMLElement,
    hudMinimapCanvas: HTMLCanvasElement,
    fullMapCanvas: HTMLCanvasElement,
    osm: BrnoOSMData,
    onHUDUpdate: (state: GameHUDState) => void,
    onBanner: (banner: BannerEvent) => void
  ) {
    this.container = container;
    this.onHUDUpdate = onHUDUpdate;
    this.onBanner = onBanner;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.08;
    container.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x2d1e3b, 0.00072);

    this.camera = new THREE.PerspectiveCamera(62, container.clientWidth / container.clientHeight, 0.4, 2400);

    this.skyMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      uniforms: {
        topColor: { value: new THREE.Color(0x1b1445) },
        midColor: { value: new THREE.Color(0xc2416f) },
        bottomColor: { value: new THREE.Color(0xfba95b) }
      },
      vertexShader: `
        varying vec3 vWorldPos;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 midColor;
        uniform vec3 bottomColor;
        varying vec3 vWorldPos;
        void main() {
          float h = normalize(vWorldPos).y;
          vec3 col = mix(bottomColor, midColor, smoothstep(-0.05, 0.22, h));
          col = mix(col, topColor, smoothstep(0.2, 0.72, h));
          gl_FragColor = vec4(col, 1.0);
        }
      `
    });
    const skyDome = new THREE.Mesh(new THREE.SphereGeometry(2250, 24, 16), this.skyMat);
    this.scene.add(skyDome);

    this.hemiLight = new THREE.HemisphereLight(0xffb59b, 0x26293d, 0.85);
    this.scene.add(this.hemiLight);

    this.sunLight = new THREE.DirectionalLight(0xffc98c, 1.85);
    this.sunLight.position.set(180, 140, -160);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.set(2048, 2048);
    this.sunLight.shadow.camera.near = 20;
    this.sunLight.shadow.camera.far = 560;
    const d = 180;
    this.sunLight.shadow.camera.left = -d;
    this.sunLight.shadow.camera.right = d;
    this.sunLight.shadow.camera.top = d;
    this.sunLight.shadow.camera.bottom = -d;
    this.sunLight.shadow.bias = -0.0005;
    this.scene.add(this.sunLight);
    this.scene.add(this.sunLight.target);

    const textures = createBrnoTextures();
    this.world = buildBrnoWorld(textures, osm);
    this.scene.add(this.world.group);

    this.trams = new SalinaSystem(this.world.tramPath, textures);
    this.scene.add(this.trams.group);

    this.vehicles = new VehicleManager(textures, this.world);
    this.scene.add(this.vehicles.group);

    this.playerSys = new PlayerAndNPCSystem(this.world);
    this.scene.add(this.playerSys.group);

    this.missions = new MissionAndCollectibleSystem(this.world);
    this.scene.add(this.missions.group);

    this.minimap = new BrnoMinimapRenderer(hudMinimapCanvas, fullMapCanvas, osm);

    this.bindEvents();
    this.applyLightingForTime();
    this.lastTime = performance.now();
    this.loop(this.lastTime);
  }

  private bindEvents(): void {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', () => {
      this.mouseDown = false;
      this.isDraggingMouse = false;
    });

    const canvas = this.renderer.domElement;
    canvas.addEventListener('mousedown', (e) => {
      if (!this.started || this.paused) return;
      this.audio.unlock();
      if (e.button === 0) {
        this.mouseDown = true;
        this.isDraggingMouse = true;
      } else if (e.button === 2) {
        this.isDraggingMouse = true;
      }
    });
    canvas.addEventListener('contextmenu', (e) => e.preventDefault());

    document.addEventListener('pointerlockchange', () => {
      this.pointerLocked = document.pointerLockElement === this.renderer.domElement;
    });
  }

  private handleResize = (): void => {
    const w = this.container.clientWidth;
    const h = this.container.clientHeight;
    this.camera.aspect = w / Math.max(1, h);
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  };

  private handleKeyDown = (e: KeyboardEvent): void => {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
      return;
    }
    const code = e.code;
    this.keys.add(code);

    if (!this.started || this.paused) return;
    this.audio.unlock();

    if (code === 'KeyF') this.toggleVehicle();
    else if (code === 'KeyE') this.interactQueued = true;
    else if (code === 'Digit1') this.playerSys.setWeapon('fists');
    else if (code === 'Digit2') this.playerSys.setWeapon('pistol');
    else if (code === 'Digit3') this.playerSys.setWeapon('smg');
    else if (code === 'Digit4') this.playerSys.setWeapon('rpg');
    else if (code === 'KeyR' && this.playerVehicle) {
      const name = this.audio.nextRadio();
      this.onBanner({ title: name, subtitle: 'Naladěno rádio', accent: 'cyan' });
    } else if (code === 'KeyH' && this.playerVehicle) {
      if (this.playerVehicle.spec.isPolice) this.playerVehicle.sirenOn = !this.playerVehicle.sirenOn;
      else this.audio.playHorn();
    } else if (code === 'KeyT') this.cycleTimePreset();
    else if (code === 'KeyC') this.requestPointerLock();
  };

  private handleKeyUp = (e: KeyboardEvent): void => {
    this.keys.delete(e.code);
  };

  private handleMouseMove = (e: MouseEvent): void => {
    if (!this.started || this.paused) return;
    if (this.pointerLocked || this.isDraggingMouse) {
      this.camYaw -= e.movementX * 0.0038;
      this.camPitch = THREE.MathUtils.clamp(this.camPitch + e.movementY * 0.0032, 0.04, 0.95);
    }
  };

  public requestPointerLock(): void {
    this.renderer.domElement.requestPointerLock?.();
  }

  public startGame(): void {
    this.started = true;
    this.paused = false;
    this.audio.unlock();
    const osm = this.world.spatial.data;
    const streets = new Set(osm.roads.map(r => r.n).filter(Boolean)).size;
    this.onBanner({
      title: 'VÍTEJ V BRNĚ 1:1 (4,8 × 5,6 km)',
      subtitle: `náměstí Svobody • ${streets} reálných ulic a ${osm.buildings.length.toLocaleString('cs-CZ')} budov`,
      accent: 'pink'
    });
  }

  public setPaused(p: boolean): void {
    this.paused = p;
    if (p && document.pointerLockElement) document.exitPointerLock?.();
  }

  public setShadowsEnabled(enabled: boolean): void {
    this.renderer.shadowMap.enabled = enabled;
    this.sunLight.castShadow = enabled;
  }

  public setTimePreset(preset: TimePreset): void {
    const map: Record<TimePreset, number> = { dawn: 6.2, day: 11.0, sunset: 17.8, night: 22.8 };
    this.timeOfDay = map[preset];
    this.applyLightingForTime();
  }

  public cycleTimePreset(): void {
    if (this.timeOfDay >= 16 && this.timeOfDay < 20) this.setTimePreset('night');
    else if (this.timeOfDay >= 20 || this.timeOfDay < 5) this.setTimePreset('dawn');
    else if (this.timeOfDay < 9) this.setTimePreset('day');
    else this.setTimePreset('sunset');
  }

  public spawnPlayerCar(kind: VehicleKind): void {
    const pos = this.getPlayerPos();
    const sp = this.world.spatial.getNearestRoadSpawn(pos.x, pos.z, 3);
    const car = this.vehicles.spawnVehicle(kind, sp.x, sp.z, sp.yaw);
    this.onBanner({
      title: car.spec.name,
      subtitle: 'Přistaveno na nejbližší ulici • Nastup klávesou [F]',
      accent: 'cyan'
    });
  }

  public fastTravelTo(x: number, z: number, label?: string): void {
    const safe = this.world.spatial.hitsBuilding(x, 2, z)
      ? this.world.spatial.getNearestRoadSpawn(x, z, 0)
      : { x, z };
    const surf = this.world.getSurfaceHeight(safe.x, safe.z);
    if (this.playerVehicle) {
      this.playerVehicle.x = safe.x;
      this.playerVehicle.y = surf.y + 0.4;
      this.playerVehicle.z = safe.z;
      this.playerVehicle.vx = 0;
      this.playerVehicle.vz = 0;
      this.playerVehicle.speed = 0;
    } else {
      this.playerSys.x = safe.x;
      this.playerSys.y = surf.y + 0.2;
      this.playerSys.z = safe.z;
    }
    this.customWaypoint = null;
    if (label) {
      this.onBanner({ title: label, subtitle: 'Rychlý přesun dokončen', accent: 'gold' });
    }
  }

  public handleFullMapClick(canvasX: number, canvasY: number, fastTravel: boolean): string {
    const worldPt = this.minimap.canvasPointToWorld(canvasX, canvasY);
    let nearest = null;
    let bestD = 75;
    for (const lm of BRNO_LANDMARKS) {
      const d = Math.hypot(lm.x - worldPt.x, lm.z - worldPt.z);
      if (d < bestD) { bestD = d; nearest = lm; }
    }
    const tx = nearest ? nearest.x : worldPt.x;
    const tz = nearest ? nearest.z : worldPt.z;
    const street = this.world.spatial.getStreetNameAt(tx, tz);
    const label = nearest ? nearest.name : `${street} (${getDistrictAt(tx, tz)})`;
    if (fastTravel) this.fastTravelTo(tx, tz, label);
    else this.customWaypoint = { x: tx, z: tz };
    return label;
  }

  public renderFullMapModal(): void {
    const pos = this.getPlayerPos();
    this.minimap.renderFullMap({
      playerX: pos.x,
      playerZ: pos.z,
      headingYaw: this.camYaw,
      vehicles: this.vehicles.vehicles,
      trams: this.trams.trams,
      missionTarget: this.missions.getTargetPosition(),
      customWaypoint: this.customWaypoint
    });
  }

  public setTouchMove(x: number, y: number): void {
    this.touchMove.x = x;
    this.touchMove.y = y;
  }

  public setTouchAction(action: 'sprint' | 'brake' | 'shoot', active: boolean): void {
    this.touchActions[action] = active;
  }

  public triggerInteract(): void {
    this.interactQueued = true;
  }

  public toggleVehicle(): void {
    if (this.playerVehicle) {
      const v = this.playerVehicle;
      v.isPlayer = false;
      v.sirenOn = false;
      this.playerVehicle = null;
      const sideX = Math.cos(v.yaw) * (v.spec.width * 0.5 + 1.3);
      const sideZ = -Math.sin(v.yaw) * (v.spec.width * 0.5 + 1.3);
      const res = this.world.spatial.resolveCircleCollision(v.x - sideX, v.y, v.z - sideZ, 0.6);
      this.playerSys.x = res.x;
      this.playerSys.z = res.z;
      this.playerSys.y = this.world.getSurfaceHeight(this.playerSys.x, this.playerSys.z).y;
      return;
    }

    let best: Vehicle | null = null;
    let bestDist = 6.8;
    for (const v of this.vehicles.vehicles) {
      const d = Math.hypot(v.x - this.playerSys.x, v.z - this.playerSys.z);
      if (d < bestDist) { bestDist = d; best = v; }
    }
    if (best) {
      if (best.isAI || best.spec.isPolice) this.addWanted(best.spec.isPolice ? 2 : 1);
      best.isAI = false;
      best.isPoliceChaser = false;
      best.isPlayer = true;
      this.playerVehicle = best;
      this.camYaw = best.yaw + Math.PI;
      this.onBanner({
        title: best.spec.name,
        subtitle: '[R] Rádio • [Shift] Nitro • [Space] Drift • [H] Klakson/Siréna',
        accent: 'pink'
      });
    }
  }

  public getPlayerPos(): THREE.Vector3 {
    if (this.playerVehicle) return new THREE.Vector3(this.playerVehicle.x, this.playerVehicle.y, this.playerVehicle.z);
    return new THREE.Vector3(this.playerSys.x, this.playerSys.y, this.playerSys.z);
  }

  public addWanted(stars: number): void {
    const next = Math.min(5, Math.max(this.wanted, stars));
    if (next > this.wanted) {
      this.wanted = next;
      this.onBanner({
        title: `HLEDÁN POLICIÍ ČR (${'★'.repeat(this.wanted)})`,
        subtitle: 'Zajeď na Cejl do Autolakýrny nebo jim zmiz z dohledu!',
        accent: 'red'
      });
    }
    this.wantedTimer = 26;
  }

  public clearWanted(): void {
    if (this.wanted > 0) {
      this.wanted = 0;
      this.wantedTimer = 0;
      this.vehicles.ensurePoliceChasers(0, 0, 0);
      this.onBanner({ title: 'ČISTÝ ŠTÍT', subtitle: 'Policie ČR tě ztratila z dohledu', accent: 'cyan' });
    }
  }

  private spawnParticle(x: number, y: number, z: number, color: number, scale = 1, vy = 2, life = 0.55): void {
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.85 });
    const mesh = new THREE.Mesh(this.particleGeo, mat);
    mesh.position.set(x, y, z);
    mesh.scale.setScalar(scale);
    this.scene.add(mesh);
    this.particles.push({
      mesh,
      vx: (Math.random() - 0.5) * 3.5,
      vy: vy + Math.random() * 2.5,
      vz: (Math.random() - 0.5) * 3.5,
      life,
      maxLife: life,
      grow: 1.8
    });
  }

  private spawnExplosion(x: number, y: number, z: number): void {
    this.audio.playExplosion();
    for (let i = 0; i < 18; i++) {
      const col = i % 3 === 0 ? 0xfef08a : i % 2 === 0 ? 0xf97316 : 0xef4444;
      this.spawnParticle(x, y, z, col, 1.4 + Math.random() * 1.4, 4 + Math.random() * 6, 0.75 + Math.random() * 0.4);
    }
  }

  private applyLightingForTime(): void {
    const t = ((this.timeOfDay % 24) + 24) % 24;
    let nightFactor = 0;

    if (t >= 17 && t < 20) {
      const k = (t - 17) / 3;
      nightFactor = k * 0.75;
      this.skyMat.uniforms.topColor.value.setHex(0x1e1348);
      this.skyMat.uniforms.midColor.value.setHex(0xd9467a);
      this.skyMat.uniforms.bottomColor.value.setHex(0xfb923c);
      this.sunLight.color.setHex(0xffb470);
      this.sunLight.intensity = 1.8 - k * 1.0;
      this.hemiLight.color.setHex(0xffa4c4);
      this.hemiLight.intensity = 0.85 - k * 0.25;
      (this.scene.fog as THREE.FogExp2).color.setHex(0x3a203e);
    } else if (t >= 20 || t < 5.5) {
      nightFactor = 1.0;
      this.skyMat.uniforms.topColor.value.setHex(0x050816);
      this.skyMat.uniforms.midColor.value.setHex(0x131936);
      this.skyMat.uniforms.bottomColor.value.setHex(0x281b44);
      this.sunLight.color.setHex(0x818cf8);
      this.sunLight.intensity = 0.55;
      this.hemiLight.color.setHex(0x6366f1);
      this.hemiLight.intensity = 0.48;
      (this.scene.fog as THREE.FogExp2).color.setHex(0x0d1226);
    } else if (t >= 5.5 && t < 8) {
      nightFactor = 0.35;
      this.skyMat.uniforms.topColor.value.setHex(0x312e81);
      this.skyMat.uniforms.midColor.value.setHex(0xf472b6);
      this.skyMat.uniforms.bottomColor.value.setHex(0xfde68a);
      this.sunLight.color.setHex(0xfed7aa);
      this.sunLight.intensity = 1.35;
      this.hemiLight.color.setHex(0xfce7f3);
      this.hemiLight.intensity = 0.78;
      (this.scene.fog as THREE.FogExp2).color.setHex(0x4a3b5c);
    } else {
      nightFactor = 0.0;
      this.skyMat.uniforms.topColor.value.setHex(0x1d4ed8);
      this.skyMat.uniforms.midColor.value.setHex(0x60a5fa);
      this.skyMat.uniforms.bottomColor.value.setHex(0xdbeafe);
      this.sunLight.color.setHex(0xfffbeb);
      this.sunLight.intensity = 1.95;
      this.hemiLight.color.setHex(0xbae6fd);
      this.hemiLight.intensity = 0.92;
      (this.scene.fog as THREE.FogExp2).color.setHex(0x93c5fd);
    }

    const sunAngle = ((t - 6) / 12) * Math.PI;
    const sunX = Math.cos(sunAngle) * 210;
    const sunY = Math.max(45, Math.sin(sunAngle) * 200);
    const pPos = this.getPlayerPos();
    this.sunLight.position.set(pPos.x + sunX, sunY, pPos.z - 140);
    this.sunLight.target.position.set(pPos.x, 0, pPos.z);

    this.world.updateVisuals(performance.now() * 0.001, nightFactor);
  }

  private loop = (now: number): void => {
    this.rafId = requestAnimationFrame(this.loop);
    const rawDt = (now - this.lastTime) / 1000;
    this.lastTime = now;
    const dt = Math.min(rawDt, 0.05);
    if (rawDt > 0) this.fps = Math.round(this.fps * 0.9 + (1 / rawDt) * 0.1);

    const elapsed = now * 0.001;

    if (!this.started) {
      const angle = elapsed * 0.14;
      this.camera.position.set(Math.cos(angle) * 140, 62 + Math.sin(elapsed * 0.3) * 8, Math.sin(angle) * 140);
      this.camera.lookAt(-10, 12, 0);
      this.world.updateVisuals(elapsed, 0.55);
      this.trams.update(dt, new THREE.Vector3(9999, 0, 9999), () => {});
      this.renderer.render(this.scene, this.camera);
      return;
    }

    if (this.paused) {
      this.renderer.render(this.scene, this.camera);
      return;
    }

    this.timeOfDay = (this.timeOfDay + dt * this.timeSpeed) % 24;
    this.applyLightingForTime();

    const fwd = (this.keys.has('KeyW') || this.keys.has('ArrowUp') ? 1 : 0) - (this.keys.has('KeyS') || this.keys.has('ArrowDown') ? 1 : 0);
    const side = (this.keys.has('KeyD') || this.keys.has('ArrowRight') ? 1 : 0) - (this.keys.has('KeyA') || this.keys.has('ArrowLeft') ? 1 : 0);
    const sprint = this.keys.has('ShiftLeft') || this.keys.has('ShiftRight') || this.touchActions.sprint;
    const space = this.keys.has('Space') || this.touchActions.brake;
    const firing = this.mouseDown || this.touchActions.shoot;

    const usingNitro = Boolean(this.playerVehicle && sprint && this.nitro > 2 && fwd > 0);
    if (usingNitro) this.nitro = Math.max(0, this.nitro - 25 * dt);
    else this.nitro = Math.min(100, this.nitro + 12 * dt);

    const driveInput: DriveInput = {
      throttle: THREE.MathUtils.clamp(fwd - this.touchMove.y, -1, 1),
      steer: THREE.MathUtils.clamp(-side - this.touchMove.x, -1, 1),
      handbrake: space,
      nitro: usingNitro
    };

    const pPosBefore = this.getPlayerPos();

    this.vehicles.update(dt, elapsed, this.playerVehicle, driveInput, pPosBefore.x, pPosBefore.z, {
      onCrash: (intensity) => {
        this.audio.playCrash(intensity);
        if (intensity > 0.65) this.addWanted(1);
      },
      onStuntComplete: (rampName, dist) => {
        const bonus = dist * 250;
        this.money += bonus;
        this.audio.playSuccess();
        this.onBanner({
          title: `KASKADÉRSKÝ SKOK! ${dist} m`,
          subtitle: `${rampName} • Odměna +${bonus.toLocaleString('cs-CZ')} Kč`,
          accent: 'gold'
        });
      },
      onPropHit: () => this.audio.playCrash(0.4),
      onDriftParticle: (x, y, z, color) => {
        if (Math.random() < 0.45) this.spawnParticle(x, y, z, color, 0.7, 0.8, 0.38);
      }
    });

    this.playerSys.updatePlayer(
      dt,
      Boolean(this.playerVehicle),
      THREE.MathUtils.clamp(side + this.touchMove.x, -1, 1),
      THREE.MathUtils.clamp(-fwd + this.touchMove.y, -1, 1),
      this.camYaw,
      sprint,
      space
    );

    if (!this.playerVehicle && firing) {
      const aimDir = new THREE.Vector3();
      this.camera.getWorldDirection(aimDir);
      aimDir.y = THREE.MathUtils.clamp(aimDir.y, -0.35, 0.35);
      aimDir.normalize();
      this.playerSys.tryFireWeapon(aimDir, {
        onShot: (heavy) => this.audio.playShot(heavy),
        onCrime: (sev) => this.addWanted(sev),
        onMuzzleFlash: (x, y, z) => this.spawnParticle(x, y, z, 0xfef08a, 0.55, 0.5, 0.1)
      });
    }

    const pPos = this.getPlayerPos();

    this.playerSys.updateNPCsAndProjectiles(dt, pPos.x, pPos.y, pPos.z, this.vehicles.vehicles, {
      onExplosion: (x, y, z) => this.spawnExplosion(x, y, z),
      onCrime: (sev) => this.addWanted(sev),
      onPlayerHit: (dmg) => {
        if (this.playerSys.armor > 0) this.playerSys.armor = Math.max(0, this.playerSys.armor - dmg);
        else this.playerSys.health = Math.max(0, this.playerSys.health - dmg);
        if (this.playerSys.health <= 0) this.handleWasted();
      },
      onHostileKilled: () => {
        this.money += 1500;
        this.missions.notifyHostileKilled();
      }
    });

    this.trams.update(dt, pPos, () => this.audio.playTramBell());

    for (const prop of this.world.destructibles) {
      if (!prop.hit) continue;
      prop.vy -= 20 * dt;
      prop.x += prop.vx * dt;
      prop.y += prop.vy * dt;
      prop.z += prop.vz * dt;
      const gY = this.world.getSurfaceHeight(prop.x, prop.z).y;
      if (prop.y < gY) {
        prop.y = gY;
        prop.vx *= 0.6;
        prop.vz *= 0.6;
        prop.vy = 0;
        prop.rx *= 0.6;
        prop.rz *= 0.6;
      }
      prop.mesh.position.set(prop.x, prop.y, prop.z);
      prop.mesh.rotation.x += prop.rx * dt;
      prop.mesh.rotation.z += prop.rz * dt;
    }

    // Autolakýrna Cejl (720, -201)
    this.sprayCooldown = Math.max(0, this.sprayCooldown - dt);
    if (this.playerVehicle && this.sprayCooldown <= 0 && Math.hypot(pPos.x - 720, pPos.z + 201) < 8.5) {
      this.vehicles.repaintAndRepair(this.playerVehicle);
      this.clearWanted();
      this.audio.playSuccess();
      this.sprayCooldown = 8;
      this.onBanner({
        title: 'AUTOLAKÝRNA CEJL',
        subtitle: 'Vozidlo opraveno, přelakováno a PČR hvězdy smazány!',
        accent: 'cyan'
      });
    }

    if (this.wanted > 0) {
      this.vehicles.ensurePoliceChasers(this.wanted, pPos.x, pPos.z);
      const closestCop = this.vehicles.vehicles
        .filter(v => v.isPoliceChaser)
        .reduce((min, v) => Math.min(min, Math.hypot(v.x - pPos.x, v.z - pPos.z)), Infinity);
      if (closestCop > 45) {
        this.wantedTimer -= dt;
        if (this.wantedTimer <= 0) this.clearWanted();
      } else {
        this.wantedTimer = Math.min(26, this.wantedTimer + dt * 2);
      }
    }

    const { promptText: missionPrompt } = this.missions.update(
      dt,
      elapsed,
      pPos.x,
      pPos.z,
      Boolean(this.playerVehicle),
      this.wanted,
      this.interactQueued,
      this.world,
      {
        onCollectible: (name, count, total) => {
          this.money += 2500;
          this.audio.playSuccess();
          this.onBanner({
            title: `ZLATÁ KULIČKA (${count}/${total})`,
            subtitle: `${name} • +2 500 Kč`,
            accent: 'gold'
          });
        },
        onMissionStep: (msg) => {
          this.audio.playSuccess();
          this.onBanner({ title: 'AKTUALIZACE MISE', subtitle: msg, accent: 'cyan' });
        },
        onMissionComplete: (title, reward) => {
          this.money += reward;
          this.audio.playSuccess();
          this.onBanner({
            title: `MISE SPLNĚNA: ${title}`,
            subtitle: `Odměna +${reward.toLocaleString('cs-CZ')} Kč`,
            accent: 'gold'
          });
        },
        onTriggerWanted: (stars) => this.addWanted(stars),
        onSpawnEnemies: (x, z, count) => this.playerSys.spawnHostileSquad(x, z, count)
      }
    );
    this.interactQueued = false;

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const pt = this.particles[i];
      pt.life -= dt;
      pt.mesh.position.x += pt.vx * dt;
      pt.mesh.position.y += pt.vy * dt;
      pt.mesh.position.z += pt.vz * dt;
      const ratio = Math.max(0, pt.life / pt.maxLife);
      pt.mesh.scale.addScalar(pt.grow * dt);
      (pt.mesh.material as THREE.MeshBasicMaterial).opacity = ratio * 0.85;
      if (pt.life <= 0) {
        this.scene.remove(pt.mesh);
        (pt.mesh.material as THREE.Material).dispose();
        this.particles.splice(i, 1);
      }
    }

    if (this.playerVehicle) {
      if (!this.isDraggingMouse && !this.pointerLocked && Math.abs(this.playerVehicle.speed) > 2.5) {
        const desiredYaw = this.playerVehicle.yaw + Math.PI;
        let diff = desiredYaw - this.camYaw;
        while (diff > Math.PI) diff -= Math.PI * 2;
        while (diff < -Math.PI) diff += Math.PI * 2;
        this.camYaw += diff * Math.min(1, dt * 3.4);
      }
      const speedExtra = Math.min(4.0, Math.abs(this.playerVehicle.speed) * 0.065);
      const dist = 9.4 + speedExtra;
      const targetPos = new THREE.Vector3(
        pPos.x + Math.sin(this.camYaw) * dist * Math.cos(this.camPitch),
        pPos.y + 3.2 + Math.sin(this.camPitch) * dist,
        pPos.z + Math.cos(this.camYaw) * dist * Math.cos(this.camPitch)
      );
      const targetLook = new THREE.Vector3(pPos.x, pPos.y + 1.6, pPos.z);
      this.camPos.lerp(targetPos, Math.min(1, dt * 8));
      this.camLook.lerp(targetLook, Math.min(1, dt * 11));
    } else {
      const dist = 5.4;
      const targetPos = new THREE.Vector3(
        pPos.x + Math.sin(this.camYaw) * dist * Math.cos(this.camPitch),
        pPos.y + 2.1 + Math.sin(this.camPitch) * dist,
        pPos.z + Math.cos(this.camYaw) * dist * Math.cos(this.camPitch)
      );
      const targetLook = new THREE.Vector3(pPos.x, pPos.y + 1.55, pPos.z);
      this.camPos.lerp(targetPos, Math.min(1, dt * 10));
      this.camLook.lerp(targetLook, Math.min(1, dt * 13));
    }
    this.camera.position.copy(this.camPos);
    this.camera.lookAt(this.camLook);

    const speedRatio = this.playerVehicle ? this.playerVehicle.speed / this.playerVehicle.spec.maxSpeed : 0;
    const policeSirenNear = this.wanted > 0 || Boolean(this.playerVehicle?.sirenOn);
    this.audio.update(dt, Boolean(this.playerVehicle), speedRatio, policeSirenNear);

    this.renderer.render(this.scene, this.camera);

    this.hudTimer += dt;
    if (this.hudTimer >= 0.06) {
      this.hudTimer = 0;
      const missionTarget = this.missions.getTargetPosition();
      this.minimap.renderHUD({
        playerX: pPos.x,
        playerZ: pPos.z,
        headingYaw: this.camYaw,
        vehicles: this.vehicles.vehicles,
        trams: this.trams.trams,
        missionTarget,
        customWaypoint: this.customWaypoint
      });

      let promptText = missionPrompt;
      if (!promptText && !this.playerVehicle) {
        const nearCar = this.vehicles.vehicles.find(v => Math.hypot(v.x - pPos.x, v.z - pPos.z) < 6.2);
        if (nearCar) promptText = `Stiskni [F] pro nastoupení do ${nearCar.spec.name}`;
      }

      const speedKmh = this.playerVehicle ? Math.round(Math.abs(this.playerVehicle.speed) * 3.6) : 0;
      const gear = !this.playerVehicle
        ? 'N'
        : this.playerVehicle.speed < -0.5
          ? 'R'
          : speedKmh < 32
            ? '1'
            : speedKmh < 72
              ? '2'
              : speedKmh < 120
                ? '3'
                : speedKmh < 168
                  ? '4'
                  : '5';

      const hh = Math.floor(this.timeOfDay).toString().padStart(2, '0');
      const mm = Math.floor((this.timeOfDay % 1) * 60).toString().padStart(2, '0');
      const activeMission = this.missions.getCurrentMission();
      const activeStep = this.missions.getCurrentStep();
      const weaponSpec = WEAPON_SPECS[this.playerSys.weaponId];
      const collected = this.missions.collectibles.filter(c => c.collected).length;

      this.onHUDUpdate({
        health: Math.round(this.playerSys.health),
        maxHealth: this.playerSys.maxHealth,
        armor: Math.round(this.playerSys.armor),
        money: this.money,
        wanted: this.wanted,
        wantedCooldown: this.wanted > 0 ? Math.max(0, Math.min(1, this.wantedTimer / 26)) : 0,
        inVehicle: Boolean(this.playerVehicle),
        vehicleName: this.playerVehicle?.spec.name ?? '',
        speedKmh,
        gear,
        nitro: Math.round(this.nitro),
        weaponId: this.playerSys.weaponId,
        weaponName: weaponSpec.name,
        ammoText: this.playerSys.weaponId === 'fists' ? '∞' : `${this.playerSys.ammo[this.playerSys.weaponId]}`,
        streetName: this.world.spatial.getStreetNameAt(pPos.x, pPos.z),
        district: getDistrictAt(pPos.x, pPos.z),
        gameTimeStr: `${hh}:${mm}`,
        radioStation: this.audio.getRadioName(),
        missionTitle: activeMission ? activeMission.title : 'Volná jízda po Brně 1:1',
        missionHint: activeStep ? activeStep.hint : 'Všechny mise splněny! Prozkoumej všech 237 brněnských ulic.',
        missionDistance: missionTarget ? Math.round(Math.hypot(pPos.x - missionTarget.x, pPos.z - missionTarget.z)) : null,
        collectiblesFound: collected,
        collectiblesTotal: this.missions.collectibles.length,
        promptText,
        isPoliceSiren: Boolean(this.playerVehicle?.sirenOn),
        fps: this.fps
      });
    }
  };

  private handleWasted(): void {
    this.playerSys.health = 100;
    this.playerSys.armor = 50;
    this.clearWanted();
    this.money = Math.max(0, this.money - 1000);
    if (this.playerVehicle) this.toggleVehicle();
    this.fastTravelTo(-2, 12);
    this.onBanner({
      title: 'ZABIT (FN BRNO BOHUNICE)',
      subtitle: 'Ošetření stálo 1 000 Kč • Zpět na Náměstí Svobody',
      accent: 'red'
    });
  }

  public dispose(): void {
    cancelAnimationFrame(this.rafId);
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
    window.removeEventListener('mousemove', this.handleMouseMove);
    this.renderer.dispose();
  }
}
