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
        targetX: -14,
        targetZ: 6,
        radius: 5.5
      },
      {
        title: 'Doruč kuličku pod sochu Jošta',
        hint: 'Nastup do auta [F] a dojeď k jezdecké soše na Moravském náměstí',
        type: 'goto',
        targetX: 20,
        targetZ: -124,
        radius: 10
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
        hint: 'Použij kopec nad Husovou a dostaň se až na hradní nádvoří',
        type: 'vehicle_goto',
        targetX: -206,
        targetZ: -25,
        radius: 14,
        wantedToTrigger: 2
      },
      {
        title: 'Setřes Policii ČR nebo projeď Autolakýrnou',
        hint: 'Skoč z hradní rampy a zajeď do Autolakýrny Cejl (azurový bod)',
        type: 'escape_police',
        targetX: 185,
        targetZ: -55,
        radius: 12
      }
    ]
  },
  {
    id: 'koliste-race',
    title: 'Noční Závod k AZ Tower',
    giver: 'Brno Street Club',
    reward: 35000,
    steps: [
      {
        title: 'Projeď všechny závodní branky (6)',
        hint: 'Sešlápni plyn + Nitro [Shift] přes Koliště a Hlavní nádraží až k AZ Tower',
        type: 'checkpoints',
        targetX: 130,
        targetZ: -110,
        radius: 14,
        checkpoints: [
          { x: 130, z: -110 },
          { x: 130, z: 0 },
          { x: 130, z: 110 },
          { x: 130, z: 220 },
          { x: 20, z: 220 },
          { x: 185, z: 260 }
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
        targetX: -22,
        targetZ: 110,
        radius: 36,
        enemyCount: 4
      },
      {
        title: 'Stáhni se do Parku Lužánky',
        hint: 'Uklidni situaci u pavilonu v Parku Lužánky',
        type: 'goto',
        targetX: 40,
        targetZ: -265,
        radius: 16
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

  // 3D glowing mission beacon cylinder + ring
  private beaconGroup = new THREE.Group();
  private beaconRing: THREE.Mesh;
  private beaconBeam: THREE.Mesh;

  constructor(world: BrnoWorld) {
    // Glowing GTA-style yellow/pink vertical mission beacon
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24, side: THREE.DoubleSide, transparent: true, opacity: 0.9 });
    const beamMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24, transparent: true, opacity: 0.22, depthWrite: false });
    this.beaconRing = new THREE.Mesh(new THREE.RingGeometry(2.4, 3.4, 28), ringMat);
    this.beaconRing.rotation.x = -Math.PI / 2;
    this.beaconBeam = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.8, 38, 18, 1, true), beamMat);
    this.beaconBeam.position.y = 19;
    this.beaconGroup.add(this.beaconRing, this.beaconBeam);
    this.group.add(this.beaconGroup);

    // 10 Golden "Brněnské Kuličky" collectibles at iconic landmarks!
    const ballGeo = new THREE.OctahedronGeometry(0.9, 1);
    const ballMat = new THREE.MeshStandardMaterial({
      color: 0xfbbf24,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.85,
      metalness: 0.9,
      roughness: 0.15
    });
    const haloGeo = new THREE.TorusGeometry(1.3, 0.08, 8, 24);
    const haloMat = new THREE.MeshBasicMaterial({ color: 0xff5e8e });

    BRNO_LANDMARKS.forEach((lm, idx) => {
      const cGroup = new THREE.Group();
      const ox = lm.id === 'orloj' ? -10 : lm.x + (idx % 2 === 0 ? 6 : -6);
      const oz = lm.id === 'orloj' ? 2 : lm.z + 6;
      const baseY = world.getSurfaceHeight(ox, oz).y;
      const orb = new THREE.Mesh(ballGeo, ballMat);
      const halo = new THREE.Mesh(haloGeo, haloMat);
      cGroup.add(orb, halo);
      cGroup.position.set(ox, baseY + 1.8, oz);
      this.group.add(cGroup);

      this.collectibles.push({
        id: `ball-${lm.id}`,
        name: `Kulička: ${lm.name}`,
        x: ox,
        z: oz,
        yOffset: baseY + 1.8,
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
    if (this.enemiesRemaining > 0) {
      this.enemiesRemaining--;
    }
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

    // 1. Animate & check 10 Golden Brno Kuličky
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
      if (Math.hypot(playerX - c.x, playerZ - c.z) < 3.4) {
        c.collected = true;
        if (c.mesh) c.mesh.visible = false;
        collectedCount++;
        callbacks.onCollectible(c.name, collectedCount, this.collectibles.length);
      }
    }

    // 2. Active Mission Step logic
    const mission = this.getCurrentMission();
    const step = this.getCurrentStep();
    const target = this.getTargetPosition();

    if (!mission || !step || !target) {
      this.beaconGroup.visible = false;
      return { promptText };
    }

    // Update 3D beacon visuals
    this.beaconGroup.visible = true;
    const groundY = world.getSurfaceHeight(target.x, target.z).y;
    this.beaconGroup.position.set(target.x, groundY + 0.2, target.z);
    this.beaconRing.rotation.z = time * 1.8;
    const pulse = 1 + Math.sin(time * 4) * 0.14;
    this.beaconRing.scale.set(pulse, pulse, 1);

    const dist = Math.hypot(playerX - target.x, playerZ - target.z);
    let stepComplete = false;

    if (step.type === 'interact') {
      if (dist < step.radius) {
        promptText = 'Stiskni [E] pro zachycení kuličky z Orloje!';
        if (interactPressed) {
          stepComplete = true;
        }
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
      if (wanted === 0) {
        stepComplete = true;
      }
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
      if (!this.enemiesSpawnedForStep && dist < 75) {
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
        if (this.missionIdx >= BRNO_MISSIONS.length) {
          this.allMissionsDone = true;
        }
      } else {
        const nextStep = mission.steps[this.stepIdx];
        callbacks.onMissionStep(nextStep.title);
      }
    }

    return { promptText };
  }
}
