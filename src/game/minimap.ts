import {
  BRNO_LANDMARKS,
  RIVER_Z_MAX,
  RIVER_Z_MIN,
  ROAD_WIDTH,
  ROAD_X,
  ROAD_Z,
  WORLD_HALF
} from './types';
import { Vehicle } from './vehicles';
import { SalinaUnit } from './tram';

export interface MinimapRenderParams {
  playerX: number;
  playerZ: number;
  headingYaw: number;
  vehicles: Vehicle[];
  trams: SalinaUnit[];
  missionTarget: { x: number; z: number } | null;
  customWaypoint: { x: number; z: number } | null;
}

export class BrnoMinimapRenderer {
  private hudCanvas: HTMLCanvasElement;
  private hudCtx: CanvasRenderingContext2D;
  private fullCanvas: HTMLCanvasElement;
  private fullCtx: CanvasRenderingContext2D;

  constructor(hudCanvas: HTMLCanvasElement, fullCanvas: HTMLCanvasElement) {
    this.hudCanvas = hudCanvas;
    this.hudCtx = hudCanvas.getContext('2d')!;
    this.fullCanvas = fullCanvas;
    this.fullCtx = fullCanvas.getContext('2d')!;
  }

  public renderHUD(params: MinimapRenderParams): void {
    const ctx = this.hudCtx;
    const w = this.hudCanvas.width;
    const h = this.hudCanvas.height;
    const cx = w * 0.5;
    const cy = h * 0.5;
    const scale = 0.55; // world meters -> pixels

    ctx.save();
    ctx.clearRect(0, 0, w, h);

    // Background dark radar base
    ctx.fillStyle = '#0e1422';
    ctx.fillRect(0, 0, w, h);

    // Rotate map relative to player camera heading so "up" is forward
    ctx.translate(cx, cy);
    ctx.rotate(params.headingYaw);
    ctx.translate(-params.playerX * scale, -params.playerZ * scale);

    this.drawCityLayer(ctx, scale, false);

    // Tram units (red rectangles)
    ctx.fillStyle = '#ef4444';
    for (const t of params.trams) {
      ctx.beginPath();
      ctx.arc(t.position.x * scale, t.position.z * scale, 3.2, 0, Math.PI * 2);
      ctx.fill();
    }

    // Police vehicles (flashing blue/red blips)
    const flash = Math.floor(performance.now() / 220) % 2 === 0;
    for (const v of params.vehicles) {
      if (v.isPoliceChaser) {
        ctx.fillStyle = flash ? '#3b82f6' : '#ef4444';
        ctx.beginPath();
        ctx.arc(v.x * scale, v.z * scale, 4.4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Landmarks
    for (const lm of BRNO_LANDMARKS) {
      ctx.fillStyle = lm.color;
      ctx.beginPath();
      ctx.arc(lm.x * scale, lm.z * scale, 3.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // GPS line to mission or custom waypoint
    const target = params.customWaypoint ?? params.missionTarget;
    if (target) {
      ctx.strokeStyle = params.customWaypoint ? '#22d3ee' : '#fbbf24';
      ctx.lineWidth = 2.4;
      ctx.setLineDash([5, 4]);
      ctx.beginPath();
      ctx.moveTo(params.playerX * scale, params.playerZ * scale);
      ctx.lineTo(target.x * scale, target.z * scale);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = params.customWaypoint ? '#22d3ee' : '#fbbf24';
      ctx.beginPath();
      ctx.arc(target.x * scale, target.z * scale, 5.5, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();

    // Player chevron in center (always pointing up)
    ctx.save();
    ctx.translate(cx, cy);
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#090d16';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, -8);
    ctx.lineTo(6, 7);
    ctx.lineTo(0, 4);
    ctx.lineTo(-6, 7);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // North indicator on radar edge
    const northAngle = params.headingYaw - Math.PI / 2;
    const nx = cx + Math.cos(northAngle) * (cx - 14);
    const ny = cy + Math.sin(northAngle) * (cy - 14);
    ctx.fillStyle = '#090d16';
    ctx.beginPath();
    ctx.arc(nx, ny, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 10px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('S', nx, ny + 0.5);
  }

  public renderFullMap(params: MinimapRenderParams): void {
    const ctx = this.fullCtx;
    const w = this.fullCanvas.width;
    const h = this.fullCanvas.height;
    const scale = Math.min(w, h) / (WORLD_HALF * 2.08);
    const cx = w * 0.5;
    const cy = h * 0.5;

    ctx.save();
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#0b101d';
    ctx.fillRect(0, 0, w, h);

    ctx.translate(cx, cy);
    this.drawCityLayer(ctx, scale, true);

    // Draw tram lines
    ctx.strokeStyle = 'rgba(239, 68, 68, 0.55)';
    ctx.lineWidth = 2;
    ctx.strokeRect(-4 * scale, -104 * scale, 128 * scale, 318 * scale);

    // Landmarks with readable Czech labels
    for (const lm of BRNO_LANDMARKS) {
      const lx = lm.x * scale;
      const ly = lm.z * scale;
      ctx.fillStyle = lm.color;
      ctx.beginPath();
      ctx.arc(lx, ly, 6.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#090d16';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.font = '600 11px Inter, sans-serif';
      const label = lm.name.split(' ')[0] === 'Brno' ? 'Hl. nádraží' : lm.name.split('&')[0].trim();
      const tw = ctx.measureText(label).width;
      ctx.fillStyle = 'rgba(9, 13, 22, 0.84)';
      ctx.fillRect(lx - tw * 0.5 - 4, ly - 22, tw + 8, 14);
      ctx.fillStyle = '#f8fafc';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(label, lx, ly - 15);
    }

    // Active Mission marker
    if (params.missionTarget) {
      const mx = params.missionTarget.x * scale;
      const my = params.missionTarget.z * scale;
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(mx, my, 12, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Player live marker
    const px = params.playerX * scale;
    const py = params.playerZ * scale;
    ctx.fillStyle = '#ff2e7e';
    ctx.beginPath();
    ctx.arc(px, py, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    ctx.restore();
  }

  public canvasPointToWorld(canvasX: number, canvasY: number): { x: number; z: number } {
    const w = this.fullCanvas.width;
    const h = this.fullCanvas.height;
    const scale = Math.min(w, h) / (WORLD_HALF * 2.08);
    return {
      x: (canvasX - w * 0.5) / scale,
      z: (canvasY - h * 0.5) / scale
    };
  }

  private drawCityLayer(ctx: CanvasRenderingContext2D, scale: number, showDistrictText: boolean): void {
    // Parks & Hills
    ctx.fillStyle = '#183a2d';
    // Lužánky
    ctx.fillRect(-75 * scale, -350 * scale, 240 * scale, 125 * scale);
    // Špilberk hill
    ctx.beginPath();
    ctx.arc(-215 * scale, -25 * scale, 88 * scale, 0, Math.PI * 2);
    ctx.fill();
    // Petrov hill
    ctx.beginPath();
    ctx.arc(-116 * scale, 132 * scale, 54 * scale, 0, Math.PI * 2);
    ctx.fill();

    // Svratka River
    ctx.fillStyle = '#0c4a6e';
    ctx.fillRect(-WORLD_HALF * scale, RIVER_Z_MIN * scale, WORLD_HALF * 2 * scale, (RIVER_Z_MAX - RIVER_Z_MIN) * scale);

    // Cobblestone plazas
    ctx.fillStyle = '#334155';
    ctx.fillRect(-52 * scale, -43 * scale, 86 * scale, 86 * scale); // Svoboďák
    ctx.fillRect(-55 * scale, 80 * scale, 66 * scale, 60 * scale);  // Zelňák

    // Road Network
    ctx.fillStyle = '#475569';
    const rw = ROAD_WIDTH * scale;
    for (const rx of ROAD_X) {
      const zMin = rx === -290 ? -110 : -220;
      const zMax = rx === -140 || rx === 20 || rx === 240 ? 395 : 310;
      ctx.fillRect(rx * scale - rw * 0.5, zMin * scale, rw, (zMax - zMin) * scale);
    }
    for (const rz of ROAD_Z) {
      const xMin = rz === -220 ? -140 : rz === 0 ? -140 : -340;
      const xMax = 300;
      ctx.fillRect(xMin * scale, rz * scale - rw * 0.5, (xMax - xMin) * scale, rw);
    }

    if (showDistrictText) {
      ctx.fillStyle = 'rgba(148, 163, 184, 0.35)';
      ctx.font = '700 11px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('ŘEKA SVRATKA', -60 * scale, 357 * scale);
      ctx.fillText('KOLIŠTĚ', 130 * scale, 55 * scale);
    }
  }
}
