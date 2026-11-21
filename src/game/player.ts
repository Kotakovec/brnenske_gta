import * as THREE from 'three';
import { WEAPON_SPECS, WeaponId, WORLD_BOUNDS } from './types';
import { BrnoWorld } from './world';
import { Vehicle } from './vehicles';

export interface PedNPC {
  mesh: THREE.Group;
  legL: THREE.Mesh;
  legR: THREE.Mesh;
  armL: THREE.Mesh;
  armR: THREE.Mesh;
  x: number;
  y: number;
  z: number;
  yaw: number;
  speed: number;
  hp: number;
  alive: boolean;
  hostile: boolean;
  panicTimer: number;
  wanderTimer: number;
  shootTimer: number;
}

export interface Projectile {
  mesh: THREE.Mesh;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  life: number;
  damage: number;
  explosive: boolean;
  fromPlayer: boolean;
}

export class PlayerAndNPCSystem {
  public readonly group = new THREE.Group();
  public readonly playerMesh: THREE.Group;
  private legL!: THREE.Mesh;
  private legR!: THREE.Mesh;
  private armL!: THREE.Mesh;
  private armR!: THREE.Mesh;
  private gunMesh!: THREE.Mesh;

  // Start right on real Náměstí Svobody facing Brněnský orloj!
  public x = -2;
  public y = 0;
  public z = 12;
  public vy = 0;
  public yaw = Math.PI;
  public grounded = true;
  public health = 100;
  public maxHealth = 100;
  public armor = 100;
  public weaponId: WeaponId = 'pistol';
  public ammo: Record<WeaponId, number> = {
    fists: 0,
    pistol: WEAPON_SPECS.pistol.ammo,
    smg: WEAPON_SPECS.smg.ammo,
    rpg: WEAPON_SPECS.rpg.ammo
  };
  private fireCooldown = 0;
  private walkPhase = 0;

  public readonly peds: PedNPC[] = [];
  public readonly projectiles: Projectile[] = [];
  private world: BrnoWorld;

  constructor(world: BrnoWorld) {
    this.world = world;
    this.y = world.getSurfaceHeight(this.x, this.z).y;
    this.playerMesh = this.buildCharacterMesh(0xff2e7e, 0x1e293b, 0xf1c27d, true);
    this.playerMesh.position.set(this.x, this.y, this.z);
    this.group.add(this.playerMesh);

    this.spawnAmbientPeds();
  }

  private buildCharacterMesh(
    shirtColor: number,
    pantsColor: number,
    skinColor: number,
    isPlayer: boolean
  ): THREE.Group {
    const g = new THREE.Group();
    const shirtMat = new THREE.MeshStandardMaterial({ color: shirtColor, roughness: 0.65 });
    const pantsMat = new THREE.MeshStandardMaterial({ color: pantsColor, roughness: 0.8 });
    const skinMat = new THREE.MeshStandardMaterial({ color: skinColor, roughness: 0.7 });
    const hairMat = new THREE.MeshStandardMaterial({ color: isPlayer ? 0x1e1b18 : 0x3b2f2f, roughness: 0.8 });

    const legGeo = new THREE.BoxGeometry(0.22, 0.78, 0.24);
    const legL = new THREE.Mesh(legGeo, pantsMat);
    legL.position.set(-0.15, 0.39, 0);
    legL.castShadow = true;
    const legR = new THREE.Mesh(legGeo, pantsMat);
    legR.position.set(0.15, 0.39, 0);
    legR.castShadow = true;

    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.68, 0.3), shirtMat);
    torso.position.set(0, 1.12, 0);
    torso.castShadow = true;

    const head = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.36, 0.34), skinMat);
    head.position.set(0, 1.66, 0);
    head.castShadow = true;

    const hair = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.14, 0.36), hairMat);
    hair.position.set(0, 1.84, -0.02);

    const armGeo = new THREE.BoxGeometry(0.18, 0.64, 0.2);
    const armL = new THREE.Mesh(armGeo, shirtMat);
    armL.position.set(-0.39, 1.12, 0);
    armL.castShadow = true;
    const armR = new THREE.Mesh(armGeo, shirtMat);
    armR.position.set(0.39, 1.12, 0);
    armR.castShadow = true;

    g.add(legL, legR, torso, head, hair, armL, armR);

    if (isPlayer) {
      this.legL = legL;
      this.legR = legR;
      this.armL = armL;
      this.armR = armR;

      const gun = new THREE.Mesh(
        new THREE.BoxGeometry(0.1, 0.14, 0.48),
        new THREE.MeshStandardMaterial({ color: 0x18181b, metalness: 0.75, roughness: 0.25 })
      );
      gun.position.set(0, -0.25, 0.32);
      armR.add(gun);
      this.gunMesh = gun;
    } else {
      g.userData = { legL, legR, armL, armR };
    }
    return g;
  }

  private spawnAmbientPeds(): void {
    const zones: Array<[number, number, number]> = [
      [-2, 0, 14],          // Náměstí Svobody
      [33, 295, 10],        // Zelný trh
      [-31, -333, 9],       // Moravské náměstí
      [295, 465, 9],        // Hlavní nádraží
      [-109, -1000, 8],     // Park Lužánky
      [-666, 84, 6],        // Hrad Špilberk
      [-1082, 584, 6]       // Mendlovo náměstí
    ];
    const shirts = [0x38bdf8, 0xf59e0b, 0x10b981, 0xa78bfa, 0xf8fafc, 0xf43f5e, 0x64748b];
    const pants = [0x1e293b, 0x334155, 0x1e3a5f, 0x292524];

    for (const [zx, zz, count] of zones) {
      for (let i = 0; i < count; i++) {
        const px = zx + (Math.random() - 0.5) * 42;
        const pz = zz + (Math.random() - 0.5) * 42;
        if (this.world.spatial.hitsBuilding(px, 2, pz)) continue;
        this.spawnPed(
          px,
          pz,
          false,
          shirts[Math.floor(Math.random() * shirts.length)],
          pants[Math.floor(Math.random() * pants.length)]
        );
      }
    }
  }

  public spawnPed(x: number, z: number, hostile: boolean, shirt = 0xef4444, pants = 0x111827): PedNPC {
    const m = this.buildCharacterMesh(hostile ? 0xdc2626 : shirt, pants, 0xefc6a0, false);
    const surf = this.world.getSurfaceHeight(x, z);
    m.position.set(x, surf.y, z);
    this.group.add(m);
    const ud = m.userData as { legL: THREE.Mesh; legR: THREE.Mesh; armL: THREE.Mesh; armR: THREE.Mesh };
    const ped: PedNPC = {
      mesh: m,
      legL: ud.legL,
      legR: ud.legR,
      armL: ud.armL,
      armR: ud.armR,
      x,
      y: surf.y,
      z,
      yaw: Math.random() * Math.PI * 2,
      speed: hostile ? 4.2 : 1.9 + Math.random() * 1.1,
      hp: hostile ? 75 : 40,
      alive: true,
      hostile,
      panicTimer: 0,
      wanderTimer: 2 + Math.random() * 4,
      shootTimer: 1.4 + Math.random() * 1.2
    };
    this.peds.push(ped);
    return ped;
  }

  public spawnHostileSquad(cx: number, cz: number, count: number): PedNPC[] {
    const out: PedNPC[] = [];
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2;
      const p = this.spawnPed(cx + Math.cos(a) * 14, cz + Math.sin(a) * 14, true);
      out.push(p);
    }
    return out;
  }

  public setWeapon(id: WeaponId): void {
    this.weaponId = id;
    if (this.gunMesh) {
      this.gunMesh.visible = id !== 'fists';
      if (id === 'rpg') {
        this.gunMesh.scale.set(1.9, 1.9, 2.5);
        (this.gunMesh.material as THREE.MeshStandardMaterial).color.setHex(0x3f6212);
      } else if (id === 'smg') {
        this.gunMesh.scale.set(1.2, 1.2, 1.5);
        (this.gunMesh.material as THREE.MeshStandardMaterial).color.setHex(0x1f2937);
      } else {
        this.gunMesh.scale.set(1, 1, 1);
        (this.gunMesh.material as THREE.MeshStandardMaterial).color.setHex(0x18181b);
      }
    }
  }

  public updatePlayer(
    dt: number,
    inVehicle: boolean,
    moveX: number,
    moveZ: number,
    cameraYaw: number,
    sprint: boolean,
    jump: boolean
  ): void {
    this.fireCooldown = Math.max(0, this.fireCooldown - dt);
    this.playerMesh.visible = !inVehicle;
    if (inVehicle) return;

    const clampedDt = Math.min(dt, 0.05);
    const inputLen = Math.hypot(moveX, moveZ);

    if (inputLen > 0.05) {
      const fwdX = -Math.sin(cameraYaw);
      const fwdZ = -Math.cos(cameraYaw);
      const rightX = Math.cos(cameraYaw);
      const rightZ = -Math.sin(cameraYaw);

      const wx = fwdX * (-moveZ) + rightX * moveX;
      const wz = fwdZ * (-moveZ) + rightZ * moveX;
      const len = Math.hypot(wx, wz) || 1;
      const dirX = wx / len;
      const dirZ = wz / len;

      const moveSpeed = sprint ? 11.5 : 6.2;
      const nextX = THREE.MathUtils.clamp(this.x + dirX * moveSpeed * clampedDt, WORLD_BOUNDS.minX, WORLD_BOUNDS.maxX);
      const nextZ = THREE.MathUtils.clamp(this.z + dirZ * moveSpeed * clampedDt, WORLD_BOUNDS.minZ, WORLD_BOUNDS.maxZ);

      const res = this.world.spatial.resolveCircleCollision(nextX, this.y, nextZ, 0.55);
      this.x = res.x;
      this.z = res.z;

      const targetYaw = Math.atan2(dirX, dirZ);
      let diff = targetYaw - this.yaw;
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      this.yaw += diff * Math.min(1, clampedDt * 12);

      this.walkPhase += clampedDt * (sprint ? 14 : 9);
      const swing = Math.sin(this.walkPhase) * (sprint ? 0.85 : 0.55);
      this.legL.rotation.x = swing;
      this.legR.rotation.x = -swing;
      this.armL.rotation.x = -swing * 0.7;
      this.armR.rotation.x = this.weaponId === 'fists' ? swing * 0.7 : -1.15;
    } else {
      this.legL.rotation.x = THREE.MathUtils.lerp(this.legL.rotation.x, 0, clampedDt * 10);
      this.legR.rotation.x = THREE.MathUtils.lerp(this.legR.rotation.x, 0, clampedDt * 10);
      this.armL.rotation.x = THREE.MathUtils.lerp(this.armL.rotation.x, 0, clampedDt * 10);
      this.armR.rotation.x = THREE.MathUtils.lerp(this.armR.rotation.x, this.weaponId === 'fists' ? 0 : -0.85, clampedDt * 10);
    }

    const surf = this.world.getSurfaceHeight(this.x, this.z);
    if (jump && this.grounded) {
      this.vy = 8.4;
      this.grounded = false;
    }
    if (!this.grounded || this.y > surf.y + 0.05) {
      this.vy -= 22 * clampedDt;
      this.y += this.vy * clampedDt;
      if (this.y <= surf.y) {
        this.y = surf.y;
        this.vy = 0;
        this.grounded = true;
      }
    } else {
      this.y = surf.y;
      this.vy = 0;
      this.grounded = true;
    }

    this.playerMesh.position.set(this.x, this.y, this.z);
    this.playerMesh.rotation.y = this.yaw;
  }

  public tryFireWeapon(
    aimDir: THREE.Vector3,
    callbacks: {
      onShot: (heavy: boolean) => void;
      onCrime: (severity: number) => void;
      onMuzzleFlash: (x: number, y: number, z: number) => void;
    }
  ): boolean {
    const spec = WEAPON_SPECS[this.weaponId];
    if (this.fireCooldown > 0) return false;
    if (this.weaponId !== 'fists' && this.ammo[this.weaponId] <= 0) return false;

    this.fireCooldown = 1 / spec.fireRate;
    if (this.weaponId !== 'fists') this.ammo[this.weaponId]--;

    this.yaw = Math.atan2(aimDir.x, aimDir.z);

    if (this.weaponId === 'fists') {
      this.armR.rotation.x = -1.6;
      callbacks.onShot(false);
      for (const ped of this.peds) {
        if (!ped.alive) continue;
        if (Math.hypot(ped.x - this.x, ped.z - this.z) < spec.range) {
          this.damagePed(ped, spec.damage, callbacks.onCrime);
        }
      }
      return true;
    }

    const isRPG = Boolean(spec.explosive);
    const speed = isRPG ? 46 : 115;
    const sx = this.x + aimDir.x * 0.9;
    const sy = this.y + 1.42;
    const sz = this.z + aimDir.z * 0.9;

    const projGeo = isRPG
      ? new THREE.CylinderGeometry(0.11, 0.11, 0.65, 6)
      : new THREE.BoxGeometry(0.08, 0.08, 0.85);
    const projMat = new THREE.MeshBasicMaterial({ color: isRPG ? 0xf97316 : 0xfef08a });
    const mesh = new THREE.Mesh(projGeo, projMat);
    mesh.position.set(sx, sy, sz);
    mesh.lookAt(sx + aimDir.x * 10, sy + aimDir.y * 10, sz + aimDir.z * 10);
    if (isRPG) mesh.rotateX(Math.PI / 2);
    this.group.add(mesh);

    const spreadX = (Math.random() - 0.5) * spec.spread;
    const spreadY = (Math.random() - 0.5) * spec.spread;
    this.projectiles.push({
      mesh,
      x: sx,
      y: sy,
      z: sz,
      vx: (aimDir.x + spreadX) * speed,
      vy: (aimDir.y + spreadY) * speed,
      vz: (aimDir.z + spreadX) * speed,
      life: isRPG ? 3.0 : 1.0,
      damage: spec.damage,
      explosive: isRPG,
      fromPlayer: true
    });

    callbacks.onShot(isRPG);
    callbacks.onMuzzleFlash(sx, sy, sz);
    this.triggerPanic(this.x, this.z, 36);
    if (isRPG) callbacks.onCrime(2);
    return true;
  }

  public triggerPanic(cx: number, cz: number, radius: number): void {
    for (const p of this.peds) {
      if (!p.alive || p.hostile) continue;
      if (Math.hypot(p.x - cx, p.z - cz) < radius) p.panicTimer = 7.5;
    }
  }

  private damagePed(ped: PedNPC, dmg: number, onCrime: (sev: number) => void): void {
    ped.hp -= dmg;
    ped.panicTimer = 8;
    if (ped.hp <= 0 && ped.alive) {
      ped.alive = false;
      ped.mesh.rotation.x = Math.PI / 2;
      ped.mesh.position.y += 0.25;
      if (!ped.hostile) onCrime(1);
    }
  }

  public updateNPCsAndProjectiles(
    dt: number,
    playerX: number,
    playerY: number,
    playerZ: number,
    vehicles: Vehicle[],
    callbacks: {
      onExplosion: (x: number, y: number, z: number) => void;
      onCrime: (severity: number) => void;
      onPlayerHit: (dmg: number) => void;
      onHostileKilled: () => void;
    }
  ): void {
    const clampedDt = Math.min(dt, 0.05);

    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const pr = this.projectiles[i];
      pr.life -= clampedDt;
      pr.x += pr.vx * clampedDt;
      pr.y += pr.vy * clampedDt;
      pr.z += pr.vz * clampedDt;
      pr.mesh.position.set(pr.x, pr.y, pr.z);

      let hit = pr.life <= 0;
      const groundY = this.world.getSurfaceHeight(pr.x, pr.z).y;
      if (pr.y <= groundY + 0.15) hit = true;
      if (!hit && this.world.spatial.hitsBuilding(pr.x, pr.y, pr.z)) hit = true;

      if (!hit && pr.fromPlayer) {
        for (const ped of this.peds) {
          if (!ped.alive) continue;
          if (Math.hypot(pr.x - ped.x, pr.z - ped.z) < 0.9 && Math.abs(pr.y - (ped.y + 1.0)) < 1.1) {
            const wasHostile = ped.hostile;
            const wasAlive = ped.alive;
            this.damagePed(ped, pr.damage, callbacks.onCrime);
            if (wasHostile && wasAlive && !ped.alive) callbacks.onHostileKilled();
            hit = true;
            break;
          }
        }
      }

      if (!hit && pr.fromPlayer) {
        for (const v of vehicles) {
          if (v.isPlayer) continue;
          if (Math.hypot(pr.x - v.x, pr.z - v.z) < v.spec.length * 0.5 && Math.abs(pr.y - (v.y + 1.0)) < 1.3) {
            v.health -= pr.damage * 0.45;
            callbacks.onCrime(v.spec.isPolice ? 2 : 1);
            hit = true;
            break;
          }
        }
      }

      if (!hit && !pr.fromPlayer) {
        if (Math.hypot(pr.x - playerX, pr.z - playerZ) < 1.1 && Math.abs(pr.y - (playerY + 1.1)) < 1.4) {
          callbacks.onPlayerHit(pr.damage);
          hit = true;
        }
      }

      if (hit) {
        if (pr.explosive) {
          callbacks.onExplosion(pr.x, Math.max(groundY + 0.5, pr.y), pr.z);
          this.triggerPanic(pr.x, pr.z, 55);
          for (const v of vehicles) {
            const d = Math.hypot(v.x - pr.x, v.z - pr.z);
            if (d < 15) {
              const force = (1 - d / 15) * 26;
              const ang = Math.atan2(v.x - pr.x, v.z - pr.z);
              v.vx += Math.sin(ang) * force;
              v.vz += Math.cos(ang) * force;
              v.vy += 8 * (1 - d / 15);
              v.grounded = false;
            }
          }
          for (const ped of this.peds) {
            if (!ped.alive) continue;
            if (Math.hypot(ped.x - pr.x, ped.z - pr.z) < 14) {
              const wasHostile = ped.hostile;
              this.damagePed(ped, 160, callbacks.onCrime);
              if (wasHostile && !ped.alive) callbacks.onHostileKilled();
            }
          }
        }
        this.group.remove(pr.mesh);
        this.projectiles.splice(i, 1);
      }
    }

    for (const ped of this.peds) {
      if (!ped.alive) continue;
      const distToPlayer = Math.hypot(ped.x - playerX, ped.z - playerZ);
      if (distToPlayer > 220 && !ped.hostile) continue; // Save CPU for far peds in 2.8km city!

      if (ped.hostile) {
        ped.yaw = Math.atan2(playerX - ped.x, playerZ - ped.z);
        if (distToPlayer > 14 && distToPlayer < 65) {
          ped.x += Math.sin(ped.yaw) * ped.speed * clampedDt;
          ped.z += Math.cos(ped.yaw) * ped.speed * clampedDt;
        }
        ped.shootTimer -= clampedDt;
        if (ped.shootTimer <= 0 && distToPlayer < 48) {
          ped.shootTimer = 1.35 + Math.random() * 0.9;
          const dir = new THREE.Vector3(playerX - ped.x, (playerY + 1.1) - (ped.y + 1.4), playerZ - ped.z).normalize();
          const bMesh = new THREE.Mesh(
            new THREE.BoxGeometry(0.1, 0.1, 0.7),
            new THREE.MeshBasicMaterial({ color: 0xff3b5c })
          );
          bMesh.position.set(ped.x, ped.y + 1.4, ped.z);
          this.group.add(bMesh);
          this.projectiles.push({
            mesh: bMesh,
            x: ped.x,
            y: ped.y + 1.4,
            z: ped.z,
            vx: dir.x * 55,
            vy: dir.y * 55,
            vz: dir.z * 55,
            life: 1.4,
            damage: 9,
            explosive: false,
            fromPlayer: false
          });
        }
      } else {
        if (ped.panicTimer > 0) {
          ped.panicTimer -= clampedDt;
          ped.yaw = Math.atan2(ped.x - playerX, ped.z - playerZ);
          ped.x += Math.sin(ped.yaw) * 6.4 * clampedDt;
          ped.z += Math.cos(ped.yaw) * 6.4 * clampedDt;
        } else {
          ped.wanderTimer -= clampedDt;
          if (ped.wanderTimer <= 0) {
            ped.yaw += (Math.random() - 0.5) * 2.2;
            ped.wanderTimer = 2.5 + Math.random() * 4;
          }
          ped.x += Math.sin(ped.yaw) * ped.speed * clampedDt;
          ped.z += Math.cos(ped.yaw) * ped.speed * clampedDt;
        }
      }

      const res = this.world.spatial.resolveCircleCollision(ped.x, ped.y, ped.z, 0.5);
      ped.x = THREE.MathUtils.clamp(res.x, WORLD_BOUNDS.minX, WORLD_BOUNDS.maxX);
      ped.z = THREE.MathUtils.clamp(res.z, WORLD_BOUNDS.minZ, WORLD_BOUNDS.maxZ);
      ped.y = this.world.getSurfaceHeight(ped.x, ped.z).y;
      ped.mesh.position.set(ped.x, ped.y, ped.z);
      ped.mesh.rotation.y = ped.yaw;

      const phase = performance.now() * 0.008 + ped.x;
      const amp = ped.panicTimer > 0 ? 0.75 : 0.35;
      ped.legL.rotation.x = Math.sin(phase) * amp;
      ped.legR.rotation.x = -Math.sin(phase) * amp;

      for (const v of vehicles) {
        if (Math.abs(v.speed) < 5) continue;
        if (Math.hypot(v.x - ped.x, v.z - ped.z) < 2.2) {
          const wasHostile = ped.hostile;
          this.damagePed(ped, 100, v.isPlayer ? callbacks.onCrime : () => {});
          if (wasHostile && !ped.alive) callbacks.onHostileKilled();
        }
      }
    }
  }
}
