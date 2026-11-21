import './style.css';
import { BRNO_LANDMARKS, GameHUDState, TimePreset, VehicleKind, WeaponId } from './game/types';
import { BannerEvent, BrnoGameEngine } from './game/engine';

// DOM references
const mount = document.getElementById('canvas-mount') as HTMLDivElement;
const startScreen = document.getElementById('start-screen') as HTMLElement;
const hud = document.getElementById('hud') as HTMLDivElement;
const crosshair = document.getElementById('crosshair') as HTMLDivElement;

const hudMinimap = document.getElementById('minimap-canvas') as HTMLCanvasElement;
const fullMapCanvas = document.getElementById('full-map-canvas') as HTMLCanvasElement;

const mapDialog = document.getElementById('map-dialog') as HTMLDialogElement;
const settingsDialog = document.getElementById('settings-dialog') as HTMLDialogElement;
const landmarkList = document.getElementById('landmark-list') as HTMLDivElement;
const mapClickStatus = document.getElementById('map-click-status') as HTMLParagraphElement;

// HUD fields
const elWanted = document.getElementById('hud-wanted') as HTMLDivElement;
const elMoney = document.getElementById('hud-money') as HTMLDivElement;
const elDistrict = document.getElementById('hud-district') as HTMLSpanElement;
const elClock = document.getElementById('hud-clock') as HTMLSpanElement;
const elWeaponName = document.getElementById('hud-weapon-name') as HTMLSpanElement;
const elAmmo = document.getElementById('hud-ammo') as HTMLElement;
const elMissionTitle = document.getElementById('hud-mission-title') as HTMLElement;
const elMissionDist = document.getElementById('hud-mission-dist') as HTMLSpanElement;
const elMissionHint = document.getElementById('hud-mission-hint') as HTMLParagraphElement;
const elCollectibles = document.getElementById('hud-collectibles') as HTMLSpanElement;
const elFps = document.getElementById('hud-fps') as HTMLSpanElement;
const elPrompt = document.getElementById('hud-prompt') as HTMLDivElement;
const elBarHealth = document.getElementById('bar-health') as HTMLDivElement;
const elBarArmor = document.getElementById('bar-armor') as HTMLDivElement;

const elVehBox = document.getElementById('hud-vehicle') as HTMLElement;
const elVehName = document.getElementById('hud-veh-name') as HTMLDivElement;
const elSpeed = document.getElementById('hud-speed') as HTMLSpanElement;
const elGear = document.getElementById('hud-gear') as HTMLSpanElement;
const elRadio = document.getElementById('hud-radio') as HTMLSpanElement;

const elBanner = document.getElementById('event-banner') as HTMLDivElement;
const elBannerTitle = document.getElementById('banner-title') as HTMLElement;
const elBannerSubtitle = document.getElementById('banner-subtitle') as HTMLSpanElement;

let bannerTimeout = 0;

function showBanner(ev: BannerEvent): void {
  elBanner.dataset.accent = ev.accent;
  elBannerTitle.textContent = ev.title;
  elBannerSubtitle.textContent = ev.subtitle;
  elBanner.hidden = false;
  window.clearTimeout(bannerTimeout);
  bannerTimeout = window.setTimeout(() => {
    elBanner.hidden = true;
  }, 4200);
}

function updateHUD(state: GameHUDState): void {
  elWanted.textContent = state.wanted > 0 ? '★'.repeat(state.wanted) : '';
  elWanted.classList.toggle('chasing', state.wanted > 0);
  elMoney.textContent = `${state.money.toLocaleString('cs-CZ')} Kč`;
  elDistrict.textContent = state.district;
  elClock.textContent = state.gameTimeStr;

  elMissionTitle.textContent = state.missionTitle;
  elMissionHint.textContent = state.missionHint;
  elMissionDist.textContent = state.missionDistance !== null ? `${state.missionDistance} m` : 'Hotovo';
  elCollectibles.textContent = `Kuličky: ${state.collectiblesFound} / ${state.collectiblesTotal}`;
  elFps.textContent = `${state.fps} FPS`;

  elBarHealth.style.width = `${Math.max(0, Math.min(100, (state.health / state.maxHealth) * 100))}%`;
  elBarArmor.style.width = `${state.inVehicle ? state.nitro : state.armor}%`;

  elWeaponName.textContent = state.weaponName;
  elAmmo.textContent = state.ammoText;

  document.querySelectorAll<HTMLButtonElement>('.weapon-slot').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(btn.dataset.weapon === state.weaponId));
  });

  crosshair.classList.toggle('active', !state.inVehicle && state.weaponId !== 'fists' && engine.started && !engine.paused);

  if (state.promptText) {
    elPrompt.textContent = state.promptText;
    elPrompt.hidden = false;
  } else {
    elPrompt.hidden = true;
  }

  elVehBox.hidden = !state.inVehicle;
  if (state.inVehicle) {
    elVehName.textContent = state.vehicleName;
    elSpeed.textContent = String(state.speedKmh);
    elGear.textContent = state.gear;
    elRadio.textContent = state.radioStation;
  }
}

const engine = new BrnoGameEngine(mount, hudMinimap, fullMapCanvas, updateHUD, showBanner);

// Fallback for browsers without native <dialog closedby="any"> light-dismiss (per Modern Web Guidance)
if (!('closedBy' in HTMLDialogElement.prototype)) {
  const isOutside = (e: PointerEvent, dialog: HTMLDialogElement) => {
    const r = dialog.getBoundingClientRect();
    return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
  };
  for (const dlg of document.querySelectorAll<HTMLDialogElement>('dialog[closedby="any"]')) {
    let pressedOutside = false;
    dlg.addEventListener('pointerdown', (e) => {
      pressedOutside = isOutside(e, dlg);
    });
    dlg.addEventListener('pointerup', (e) => {
      if (pressedOutside && isOutside(e, dlg)) {
        dlg.close();
      }
    });
  }
}

function openMapDialog(): void {
  if (mapDialog.open) return;
  if (engine.started) engine.setPaused(true);
  engine.renderFullMapModal();
  mapDialog.showModal();
}

function openSettingsDialog(): void {
  if (settingsDialog.open) return;
  if (engine.started) engine.setPaused(true);
  settingsDialog.showModal();
}

mapDialog.addEventListener('close', () => {
  mapDialog.returnValue = '';
  if (engine.started && !settingsDialog.open) engine.setPaused(false);
});

settingsDialog.addEventListener('close', () => {
  settingsDialog.returnValue = '';
  if (engine.started && !mapDialog.open) engine.setPaused(false);
});

// Populate Brno Landmarks in Full Map Dialog
BRNO_LANDMARKS.forEach((lm) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'landmark-item';
  btn.innerHTML = `
    <span>
      <strong>${lm.name}</strong>
      <small>${lm.subtitle}</small>
    </span>
    <span class="landmark-dot" style="background:${lm.color}" aria-hidden="true"></span>
  `;
  btn.addEventListener('click', () => {
    if (!engine.started) {
      startScreen.hidden = true;
      hud.hidden = false;
      engine.startGame();
    }
    engine.fastTravelTo(lm.x, lm.z, lm.name);
    mapDialog.close();
  });
  landmarkList.appendChild(btn);
});

// Interactive Map Canvas click (GPS) & double-click (Fast Travel)
fullMapCanvas.addEventListener('click', (e) => {
  const rect = fullMapCanvas.getBoundingClientRect();
  const cx = ((e.clientX - rect.left) / rect.width) * fullMapCanvas.width;
  const cy = ((e.clientY - rect.top) / rect.height) * fullMapCanvas.height;
  const label = engine.handleFullMapClick(cx, cy, false);
  engine.renderFullMapModal();
  mapClickStatus.textContent = `GPS trasa nastavena na: ${label}. Dvojklikem se přesuneš okamžitě.`;
});

fullMapCanvas.addEventListener('dblclick', (e) => {
  const rect = fullMapCanvas.getBoundingClientRect();
  const cx = ((e.clientX - rect.left) / rect.width) * fullMapCanvas.width;
  const cy = ((e.clientY - rect.top) / rect.height) * fullMapCanvas.height;
  if (!engine.started) {
    startScreen.hidden = true;
    hud.hidden = false;
    engine.startGame();
  }
  engine.handleFullMapClick(cx, cy, true);
  mapDialog.close();
});

// Start screen buttons
document.getElementById('btn-play')!.addEventListener('click', () => {
  startScreen.hidden = true;
  hud.hidden = false;
  engine.startGame();
});
document.getElementById('btn-start-map')!.addEventListener('click', openMapDialog);
document.getElementById('btn-start-controls')!.addEventListener('click', openSettingsDialog);

// HUD Toolbar buttons
document.getElementById('btn-hud-map')!.addEventListener('click', openMapDialog);
document.getElementById('btn-hud-menu')!.addEventListener('click', openSettingsDialog);
document.getElementById('btn-hud-time')!.addEventListener('click', () => engine.cycleTimePreset());
document.getElementById('btn-hud-lock')!.addEventListener('click', () => engine.requestPointerLock());

const btnAudio = document.getElementById('btn-hud-audio') as HTMLButtonElement;
btnAudio.addEventListener('click', () => {
  engine.audio.unlock();
  const nextMuted = !engine.audio.isMuted();
  engine.audio.setMuted(nextMuted);
  btnAudio.setAttribute('aria-pressed', String(nextMuted));
  btnAudio.textContent = nextMuted ? 'Zvuk: Vyp' : 'Zvuk: Zap';
});

document.getElementById('btn-radio-next')!.addEventListener('click', () => {
  const name = engine.audio.nextRadio();
  showBanner({ title: name, subtitle: 'Naladěno rádio', accent: 'cyan' });
});

// Weapon click slots
document.querySelectorAll<HTMLButtonElement>('.weapon-slot').forEach((btn) => {
  btn.addEventListener('click', () => {
    const wid = btn.dataset.weapon as WeaponId;
    window.dispatchEvent(new KeyboardEvent('keydown', { code: wid === 'fists' ? 'Digit1' : wid === 'pistol' ? 'Digit2' : wid === 'smg' ? 'Digit3' : 'Digit4' }));
  });
});

// Settings modal controls
document.querySelectorAll<HTMLButtonElement>('[data-time]').forEach((btn) => {
  btn.addEventListener('click', () => {
    engine.setTimePreset(btn.dataset.time as TimePreset);
    showBanner({ title: btn.textContent ?? 'Čas upraven', subtitle: 'Atmosféra Brna změněna', accent: 'gold' });
  });
});

document.querySelectorAll<HTMLButtonElement>('[data-spawn]').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (!engine.started) {
      startScreen.hidden = true;
      hud.hidden = false;
      engine.startGame();
    }
    engine.spawnPlayerCar(btn.dataset.spawn as VehicleKind);
    settingsDialog.close();
  });
});

document.getElementById('btn-clear-wanted')!.addEventListener('click', () => {
  engine.clearWanted();
  settingsDialog.close();
});

document.getElementById('btn-respawn-center')!.addEventListener('click', () => {
  engine.fastTravelTo(0, 14, 'Náměstí Svobody');
  settingsDialog.close();
});

const volumeSlider = document.getElementById('volume-slider') as HTMLInputElement;
volumeSlider.addEventListener('input', () => {
  engine.audio.unlock();
  engine.audio.setVolume(Number(volumeSlider.value) / 100);
});

const shadowsToggle = document.getElementById('shadows-toggle') as HTMLInputElement;
shadowsToggle.addEventListener('change', () => {
  engine.setShadowsEnabled(shadowsToggle.checked);
});

// Global hotkeys M (Map) & P (Pause/Menu)
window.addEventListener('keydown', (e) => {
  if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
  if (e.code === 'KeyM') {
    if (mapDialog.open) mapDialog.close();
    else openMapDialog();
  } else if (e.code === 'KeyP') {
    if (settingsDialog.open) settingsDialog.close();
    else openSettingsDialog();
  }
});

// Touch Controls Joystick & Buttons
const stickBase = document.getElementById('touch-stick-base') as HTMLDivElement;
const stickKnob = document.getElementById('touch-stick-knob') as HTMLDivElement;
let stickPointerId: number | null = null;

stickBase.addEventListener('pointerdown', (e) => {
  stickPointerId = e.pointerId;
  stickBase.setPointerCapture(e.pointerId);
  updateStick(e);
});
stickBase.addEventListener('pointermove', (e) => {
  if (e.pointerId === stickPointerId) updateStick(e);
});
const releaseStick = (e: PointerEvent) => {
  if (e.pointerId === stickPointerId) {
    stickPointerId = null;
    stickKnob.style.transform = 'translate(-50%, -50%)';
    engine.setTouchMove(0, 0);
  }
};
stickBase.addEventListener('pointerup', releaseStick);
stickBase.addEventListener('pointercancel', releaseStick);

function updateStick(e: PointerEvent): void {
  const rect = stickBase.getBoundingClientRect();
  const cx = rect.left + rect.width * 0.5;
  const cy = rect.top + rect.height * 0.5;
  const maxR = rect.width * 0.36;
  let dx = e.clientX - cx;
  let dy = e.clientY - cy;
  const dist = Math.hypot(dx, dy);
  if (dist > maxR) {
    dx = (dx / dist) * maxR;
    dy = (dy / dist) * maxR;
  }
  stickKnob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
  engine.setTouchMove(dx / maxR, dy / maxR);
}

document.getElementById('tbtn-enter')!.addEventListener('click', () => engine.toggleVehicle());
document.getElementById('tbtn-interact')!.addEventListener('click', () => engine.triggerInteract());

const bindHold = (id: string, action: 'sprint' | 'shoot') => {
  const el = document.getElementById(id)!;
  el.addEventListener('pointerdown', () => engine.setTouchAction(action, true));
  el.addEventListener('pointerup', () => engine.setTouchAction(action, false));
  el.addEventListener('pointercancel', () => engine.setTouchAction(action, false));
};
bindHold('tbtn-sprint', 'sprint');
bindHold('tbtn-shoot', 'shoot');
