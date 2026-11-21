import * as THREE from 'three';
import { BRNO_LANDMARKS, Collectible, MissionDef, MissionStep } from './types';
import { BrnoWorld } from './world';

export const BRNO_MISSIONS: MissionDef[] = [
  {
    id: 'orloj-kulicka',
    title: 'Kulička z Orloje',
    giver: 'Mára ze Svoboďáku',
    reward: 15000,
    steps: [
      {
        title: 'Chyť kuličku z Brněnského orloje',
        hint: 'Dojdi k černému Orloji na Náměstí Svobody a stiskni [E]',
        type: 'interact',
        targetX: -10,
        targetZ: -4,
        radius: 6.5
      },
      {
        title: 'Doruč kuličku pod sochu Jošta',
        hint: 'Nastup do auta [F] a dojeď po Rašínově k soše Jošta na Moravské náměstí',
        type: 'goto',
        targetX: -31,
        targetZ: -333,
        radius: 14
      }
    ]
  },
  {
    id: 'spilberk-escape',
    title: 'Útěk ze Špilberku',
    giver: 'Klára (Moravia Crew)',
    reward: 25000,
    steps: [
      {
        title: 'Vyjeď na nádvoří Hradu Špilberk',
        hint: 'Vystoupej přes Husovu a Gorazdovu až na vrchol Hradu Špilberk',
        type: 'vehicle_goto',
        targetX: -666,
        targetZ: 84,
        radius: 22,
        wantedToTrigger: 2
      },
      {
        title: 'Setřes Policii ČR nebo projeď Autolakýrnou Cejl',
        hint: 'Zajeď na Cejl do Autolakýrny (azurový bod na mapě) nebo zmiz PČR',
        type: 'escape_police',
        targetX: 720,
        targetZ: -201,
        radius: 16
      }
    ]
  },
  {
    id: 'koliste-race',
    title: 'Noční Závod přes Koliště k AZ Tower',
    giver: 'Brno Street Club',
    reward: 35000,
    steps: [
      {
        title: 'Projeď 6 závodních branek centrem Brna',
        hint: 'Sešlápni plyn + Nitro [Shift]: Koliště -> Hlavní nádraží -> Nové sady -> Heršpická -> AZ Tower',
        type: 'checkpoints',
        targetX: 465,
        targetZ: -80,
        radius: 22,
        checkpoints: [
          { x: 465, z: -80 },   // Koliště sever
          { x: 505, z: 220 },   // Malinovského náměstí
          { x: 295, z: 465 },   // Hlavní nádraží (Nádražní)
          { x: -165, z: 660 },  // Nové sady
          { x: -270, z: 1200 }, // Heršpická
          { x: -83, z: 1380 }   // AZ Tower 111 m!
        ]
      }
    ]
  },
  {
    id: 'zelnak-gang',
    title: 'Přestřelka na Zelném trhu',
    giver: 'Lukáš',
    reward: 50000,
    steps: [
      {
        title: 'Zneškodni rivaly u Kašny Parnas',
        hint: 'Vyber zbraň [2/3/4] a eliminuj 4 členy gangu na Zelném trhu',
        type: 'eliminate',
        targetX: 33,
        targetZ: 287,
        radius: 38,
        enemyCount: 4
      },
      {
        title: 'Stáhni se do Parku Lužánky',
        hint: 'Uklidni situaci na severu v Parku Lužánky (ulice Lužánecká)',
        type: 'goto',
        targetX: -109,
        targetZ: -1000,
        radius: 24
      }
    ]
  }
];

export class MissionAndCollectibleSystem {
  public readonly group = new THREE.Group();
  public readonly collectibles: Collectible[] = [];
  public missionIdx = 0;
  public stepIdx = 0;
  public checkpointIdx = 0;
  public allMissionsDone = false;
  public enemiesRemaining = 0;
  private enemiesSpawnedForStep = false;

  private beaconGroup = new THREE.Group();
  private beaconRing: THREE.Mesh;
  private beaconBeam: THREE.Mesh;

  constructor(world: BrnoWorld) {
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24, side: THREE.DoubleSide, transparent: true, opacity: 0.9 });
    const beamMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24, transparent: true, opacity: 0.24, depthWrite: false });
    this.beaconRing = new THREE.Mesh(new THREE.RingGeometry(2.8, 4.0, 28), ringMat);
    this.beaconRing.rotation.x = -Math.PI / 2;
    this.beaconBeam = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 3.2, 65, 18, 1, true), beamMat);
    this.beaconBeam.position.y = 32.5;
    this.beaconGroup.add(this.beaconRing, this.beaconBeam);
    this.group.add(this.beaconGroup);

    const ballGeo = new THREE.OctahedronGeometry(1.0, 1);
    const ballMat = new THREE.MeshStandardMaterial({
      color: 0xfbbf24,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.9,
      metalness: 0.9,
      roughness: 0.15
    });
    const haloGeo = new THREE.TorusGeometry(1.4, 0.09, 8, 24);
    const haloMat = new THREE.MeshBasicMaterial({ color: 0xff5e8e });

    BRNO_LANDMARKS.forEach((lm) => {
      const cGroup = new THREE.Group();
      const ox = lm.x;
      const oz = lm.z;
      const baseY = world.getSurfaceHeight(ox, oz).y;
      const orb = new THREE.Mesh(ballGeo, ballMat);
      const halo = new THREE.Mesh(haloGeo, haloMat);
      cGroup.add(orb, halo);
      cGroup.position.set(ox, baseY + 1.9, oz);
      this.group.add(cGroup);

      this.collectibles.push({
        id: `ball-${lm.id}`,
        name: `Kulička: ${lm.name}`,
        x: ox,
        z: oz,
        yOffset: baseY + 1.9,
        collected: false,
        mesh: cGroup
      });
    });
  }

  public getCurrentMission(): MissionDef | null {
    if (this.allMissionsDone) return null;
    return BRNO_MISSIONS[this.missionIdx] ?? null;
  }

  public getCurrentStep(): MissionStep | null {
    const m = this.getCurrentMission();
    if (!m) return null;
    return m.steps[this.stepIdx] ?? null;
  }

  public getTargetPosition(): { x: number; z: number } | null {
    const step = this.getCurrentStep();
    if (!step) return null;
    if (step.type === 'checkpoints' && step.checkpoints) {
      return step.checkpoints[this.checkpointIdx] ?? null;
    }
    return { x: step.targetX, z: step.targetZ };
  }

  public notifyHostileKilled(): void {
    if (this.enemiesRemaining > 0) this.enemiesRemaining--;
  }

  public update(
    dt: number,
    time: number,
    playerX: number,
    playerZ: number,
    inVehicle: boolean,
    wanted: number,
    interactPressed: boolean,
    world: BrnoWorld,
    callbacks: {
      onCollectible: (name: string, count: number, total: number) => void;
      onMissionStep: (msg: string) => void;
      onMissionComplete: (title: string, reward: number) => void;
      onTriggerWanted: (stars: number) => void;
      onSpawnEnemies: (x: number, z: number, count: number) => void;
    }
  ): { promptText: string } {
    let promptText = '';
    let collectedCount = 0;

    for (const c of this.collectibles) {
      if (c.collected) {
        collectedCount++;
        continue;
      }
      if (c.mesh) {
        c.mesh.rotation.y = time * 2.2;
        c.mesh.position.y = c.yOffset + Math.sin(time * 3.1 + c.x) * 0.35;
      }
      if (Math.hypot(playerX - c.x, playerZ - c.z) < 4.2) {
        c.collected = true;
        if (c.mesh) c.mesh.visible = false;
        collectedCount++;
        callbacks.onCollectible(c.name, collectedCount, this.collectibles.length);
      }
    }

    const mission = this.getCurrentMission();
    const step = this.getCurrentStep();
    const target = this.getTargetPosition();

    if (!mission || !step || !target) {
      this.beaconGroup.visible = false;
      return { promptText };
    }

    this.beaconGroup.visible = true;
    const groundY = world.getSurfaceHeight(target.x, target.z).y;
    this.beaconGroup.position.set(target.x, groundY + 0.25, target.z);
    this.beaconRing.rotation.z = time * 1.8;
    const pulse = 1 + Math.sin(time * 4) * 0.14;
    this.beaconRing.scale.set(pulse, pulse, 1);

    const dist = Math.hypot(playerX - target.x, playerZ - target.z);
    let stepComplete = false;

    if (step.type === 'interact') {
      if (dist < step.radius) {
        promptText = 'Stiskni [E] pro zachycení kuličky z Orloje!';
        if (interactPressed) stepComplete = true;
      }
    } else if (step.type === 'goto') {
      if (dist < step.radius) stepComplete = true;
    } else if (step.type === 'vehicle_goto') {
      if (dist < step.radius && inVehicle) {
        if (step.wantedToTrigger) callbacks.onTriggerWanted(step.wantedToTrigger);
        stepComplete = true;
      } else if (dist < step.radius && !inVehicle) {
        promptText = 'Pro splnění úkolu musíš být ve vozidle [F]!';
      }
    } else if (step.type === 'escape_police') {
      if (wanted === 0) stepComplete = true;
    } else if (step.type === 'checkpoints' && step.checkpoints) {
      if (dist < step.radius) {
        this.checkpointIdx++;
        if (this.checkpointIdx >= step.checkpoints.length) {
          this.checkpointIdx = 0;
          stepComplete = true;
        } else {
          callbacks.onMissionStep(`Branka ${this.checkpointIdx}/${step.checkpoints.length} projetá!`);
        }
      }
    } else if (step.type === 'eliminate') {
      if (!this.enemiesSpawnedForStep && dist < 85) {
        this.enemiesSpawnedForStep = true;
        const cnt = step.enemyCount ?? 4;
        this.enemiesRemaining = cnt;
        callbacks.onSpawnEnemies(step.targetX, step.targetZ, cnt);
        callbacks.onMissionStep('Pozor! Rivalové na Zelném trhu vytáhli zbraně!');
      }
      if (this.enemiesSpawnedForStep && this.enemiesRemaining <= 0) {
        this.enemiesSpawnedForStep = false;
        stepComplete = true;
      }
    }

    if (stepComplete) {
      this.stepIdx++;
      if (this.stepIdx >= mission.steps.length) {
        callbacks.onMissionComplete(mission.title, mission.reward);
        this.missionIdx++;
        this.stepIdx = 0;
        this.checkpointIdx = 0;
        if (this.missionIdx >= BRNO_MISSIONS.length) this.allMissionsDone = true;
      } else {
        callbacks.onMissionStep(mission.steps[this.stepIdx].title);
      }
    }

    return { promptText };
  }
}
