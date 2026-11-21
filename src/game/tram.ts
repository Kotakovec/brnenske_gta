import * as THREE from 'three';
import { BrnoTextures } from './textures';

export interface SalinaUnit {
  line: string;
  dest: string;
  dist: number;
  speed: number;
  maxSpeed: number;
  frontMesh: THREE.Group;
  rearMesh: THREE.Group;
  position: THREE.Vector3;
  yaw: number;
  bellCooldown: number;
}

export class SalinaSystem {
  public readonly group = new THREE.Group();
  public readonly trams: SalinaUnit[] = [];
  private path: THREE.Vector3[];
  private segLengths: number[] = [];
  private totalLength = 0;

  constructor(path: THREE.Vector3[], textures: BrnoTextures) {
    this.path = path;
    for (let i = 0; i < path.length; i++) {
      const a = path[i];
      const b = path[(i + 1) % path.length];
      const d = a.distanceTo(b);
      this.segLengths.push(d);
      this.totalLength += d;
    }

    const lines = [
      { line: '1', dest: 'ŘEČKOVICE', startRatio: 0.05 },
      { line: '4', dest: 'OBŘANY', startRatio: 0.38 },
      { line: '12', dest: 'KOMÁROV', startRatio: 0.72 }
    ];

    for (const cfg of lines) {
      const frontMesh = this.createCarriage(textures, `${cfg.line} ${cfg.dest}`, true);
      const rearMesh = this.createCarriage(textures, cfg.line, false);
      this.group.add(frontMesh, rearMesh);

      const unit: SalinaUnit = {
        line: cfg.line,
        dest: cfg.dest,
        dist: cfg.startRatio * this.totalLength,
        speed: 12,
        maxSpeed: 13.5,
        frontMesh,
        rearMesh,
        position: new THREE.Vector3(),
        yaw: 0,
        bellCooldown: 0
      };
      this.trams.push(unit);
    }
    this.update(0, new THREE.Vector3(999, 0, 999), () => {});
  }

  private createCarriage(textures: BrnoTextures, label: string, isFront: boolean): THREE.Group {
    const g = new THREE.Group();
    const redMat = new THREE.MeshStandardMaterial({ color: 0xdc2626, roughness: 0.35, metalness: 0.2 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xf8fafc, roughness: 0.4 });
    const sideMat = new THREE.MeshStandardMaterial({ map: textures.tramSide, roughness: 0.35, metalness: 0.2 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.5 });

    // Authentic Brno Šalina body (length 11.2m, width 2.55m, height 3.1m)
    const materials = [sideMat, sideMat, whiteMat, darkMat, redMat, redMat];
    const body = new THREE.Mesh(new THREE.BoxGeometry(2.55, 2.8, 11.2), materials);
    body.position.y = 1.85;
    body.castShadow = true;
    body.receiveShadow = true;
    g.add(body);

    // Roof equipment + Pantograph on front carriage
    const roofBox = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.35, 7.2), darkMat);
    roofBox.position.y = 3.4;
    g.add(roofBox);

    if (isFront) {
      const panto1 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.4, 0.1), darkMat);
      panto1.position.set(0, 4.0, 0.4);
      panto1.rotation.x = 0.45;
      const panto2 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.4, 0.1), darkMat);
      panto2.position.set(0, 4.0, -0.4);
      panto2.rotation.x = -0.45;
      const bar = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.1, 0.2), darkMat);
      bar.position.set(0, 4.65, 0);
      g.add(panto1, panto2, bar);

      // Front glowing LED line banner
      const ledTex = textures.createSign(`LINKA ${label}`, '#09090b', '#fbbf24', '#f59e0b');
      const ledMat = new THREE.MeshBasicMaterial({ map: ledTex });
      const led = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 0.48), ledMat);
      led.position.set(0, 2.85, 5.62);
      g.add(led);

      // Headlights
      const hlMat = new THREE.MeshBasicMaterial({ color: 0xfef9c3 });
      for (const sx of [-0.85, 0.85]) {
        const hl = new THREE.Mesh(new THREE.CircleGeometry(0.2, 8), hlMat);
        hl.position.set(sx, 0.95, 5.63);
        g.add(hl);
      }
    } else {
      // Rear brake lights
      const tlMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
      for (const sx of [-0.85, 0.85]) {
        const tl = new THREE.Mesh(new THREE.CircleGeometry(0.18, 8), tlMat);
        tl.position.set(sx, 1.0, -5.63);
        tl.rotation.y = Math.PI;
        g.add(tl);
      }
    }

    // Undercarriage bogies
    const bogie = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.55, 8.6), darkMat);
    bogie.position.y = 0.35;
    g.add(bogie);

    return g;
  }

  private samplePath(distance: number): { pos: THREE.Vector3; yaw: number } {
    let d = ((distance % this.totalLength) + this.totalLength) % this.totalLength;
    for (let i = 0; i < this.segLengths.length; i++) {
      const seg = this.segLengths[i];
      if (d <= seg || i === this.segLengths.length - 1) {
        const t = Math.max(0, Math.min(1, d / seg));
        const a = this.path[i];
        const b = this.path[(i + 1) % this.path.length];
        const pos = new THREE.Vector3().lerpVectors(a, b, t);
        const yaw = Math.atan2(b.x - a.x, b.z - a.z);
        return { pos, yaw };
      }
      d -= seg;
    }
    return { pos: this.path[0].clone(), yaw: 0 };
  }

  public update(dt: number, playerPos: THREE.Vector3, onRingBell: () => void): void {
    for (const tram of this.trams) {
      tram.bellCooldown = Math.max(0, tram.bellCooldown - dt);

      const frontSample = this.samplePath(tram.dist);
      // Check if player is right ahead on tracks
      const fwdX = Math.sin(frontSample.yaw);
      const fwdZ = Math.cos(frontSample.yaw);
      const dx = playerPos.x - frontSample.pos.x;
      const dz = playerPos.z - frontSample.pos.z;
      const along = dx * fwdX + dz * fwdZ;
      const side = Math.abs(dx * fwdZ - dz * fwdX);

      const blocked = along > 2.5 && along < 17 && side < 3.4;
      if (blocked) {
        tram.speed = Math.max(0, tram.speed - 24 * dt);
        if (tram.bellCooldown <= 0) {
          onRingBell();
          tram.bellCooldown = 1.6;
        }
      } else {
        tram.speed = Math.min(tram.maxSpeed, tram.speed + 8 * dt);
      }

      tram.dist = (tram.dist + tram.speed * dt) % this.totalLength;

      const sFront = this.samplePath(tram.dist);
      const sRear = this.samplePath(tram.dist - 12.1);

      tram.position.copy(sFront.pos);
      tram.yaw = sFront.yaw;

      tram.frontMesh.position.copy(sFront.pos);
      tram.frontMesh.rotation.y = sFront.yaw;

      tram.rearMesh.position.copy(sRear.pos);
      tram.rearMesh.rotation.y = sRear.yaw;
    }
  }
}
