import { BRNO_LANDMARKS } from './types';
import { BrnoOSMData } from './osm';
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

const KEY_STREET_LABELS = new Set([
  'náměstí Svobody', 'Masarykova', 'Česká', 'Joštova', 'Husova',
  'Koliště', 'Nádražní', 'Zelný trh', 'Moravské náměstí', 'Pekařská',
  'Cejl', 'Lidická', 'Veveří', 'Úvoz', 'Heršpická', 'Poříčí',
  'Mendlovo náměstí', 'Křenová', 'Dornych', 'Nové sady', 'Hybešova',
  'Milady Horákové', 'Rooseveltova', 'Benešova', 'Bratislavská', 'Opuštěná'
]);

export class BrnoMinimapRenderer {
  private hudCanvas: HTMLCanvasElement;
  private hudCtx: CanvasRenderingContext2D;
  private fullCanvas: HTMLCanvasElement;
  private fullCtx: CanvasRenderingContext2D;

  // High-res offscreen pre-rendered 1:1 Brno OSM vector canvas (rendered ONCE for 60 FPS blitting!)
  private baseMap: HTMLCanvasElement;
  private mapMinX: number;
  private mapMinZ: number;
  private mapSpan: number;
  private mapPx = 2048;

  constructor(hudCanvas: HTMLCanvasElement, fullCanvas: HTMLCanvasElement, osm: BrnoOSMData) {
    this.hudCanvas = hudCanvas;
    this.hudCtx = hudCanvas.getContext('2d')!;
    this.fullCanvas = fullCanvas;
    this.fullCtx = fullCanvas.getContext('2d')!;

    const b = osm.bounds;
    const spanX = b.maxX - b.minX;
    const spanZ = b.maxZ - b.minZ;
    this.mapSpan = Math.max(spanX, spanZ) + 120;
    const cx = (b.minX + b.maxX) * 0.5;
    const cz = (b.minZ + b.maxZ) * 0.5;
    this.mapMinX = cx - this.mapSpan * 0.5;
    this.mapMinZ = cz - this.mapSpan * 0.5;

    this.baseMap = document.createElement('canvas');
    this.baseMap.width = this.mapPx;
    this.baseMap.height = this.mapPx;
    this.bakeOSMMap(osm);
  }

  private worldToBase(x: number, z: number): [number, number] {
    const s = this.mapPx / this.mapSpan;
    return [(x - this.mapMinX) * s, (z - this.mapMinZ) * s];
  }

  private bakeOSMMap(osm: BrnoOSMData): void {
    const ctx = this.baseMap.getContext('2d')!;
    const s = this.mapPx / this.mapSpan;

    ctx.fillStyle = '#0d1322';
    ctx.fillRect(0, 0, this.mapPx, this.mapPx);

    const drawPoly = (pts: number[], fill: string) => {
      if (pts.length < 6) return;
      ctx.beginPath();
      ctx.moveTo((pts[0] - this.mapMinX) * s, (pts[1] - this.mapMinZ) * s);
      for (let i = 2; i < pts.length; i += 2) {
        ctx.lineTo((pts[i] - this.mapMinX) * s, (pts[i + 1] - this.mapMinZ) * s);
      }
      ctx.closePath();
      ctx.fillStyle = fill;
      ctx.fill();
    };

    // 1. Real Brno Parks (526 polygons)
    for (const poly of osm.parks) drawPoly(poly, '#17382b');

    // 2. Real Plazas (43 polygons)
    for (const pl of osm.plazas) drawPoly(pl.p, '#263044');

    // 3. Real Water & Svratka River
    for (const poly of osm.water) drawPoly(poly, '#0b4a6e');
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    for (const ww of osm.waterways) {
      if (ww.p.length < 4) continue;
      ctx.beginPath();
      ctx.moveTo((ww.p[0] - this.mapMinX) * s, (ww.p[1] - this.mapMinZ) * s);
      for (let i = 2; i < ww.p.length; i += 2) {
        ctx.lineTo((ww.p[i] - this.mapMinX) * s, (ww.p[i + 1] - this.mapMinZ) * s);
      }
      ctx.strokeStyle = '#0c527a';
      ctx.lineWidth = Math.max(3, ww.w * s);
      ctx.stroke();
    }

    // 4. Real 1:1 Brno Building Footprints (4,762 real silhouettes!)
    for (const b of osm.buildings) {
      drawPoly(b.p, b.c === 5 ? '#263147' : '#1b2336');
    }

    // 5. Real 1:1 Brno Streets (2,357 segments, color-coded by road hierarchy!)
    const drawRoadLayer = (filter: (t: string) => boolean, color: string, widthBoost: number) => {
      ctx.strokeStyle = color;
      for (const r of osm.roads) {
        if (!filter(r.t) || r.p.length < 4) continue;
        ctx.beginPath();
        ctx.moveTo((r.p[0] - this.mapMinX) * s, (r.p[1] - this.mapMinZ) * s);
        for (let i = 2; i < r.p.length; i += 2) {
          ctx.lineTo((r.p[i] - this.mapMinX) * s, (r.p[i + 1] - this.mapMinZ) * s);
        }
        ctx.lineWidth = Math.max(1.6, r.w * s * widthBoost);
        ctx.stroke();
      }
    };

    drawRoadLayer(t => t === 'service' || t === 'track', '#334155', 0.65);
    drawRoadLayer(t => t === 'pedestrian' || t === 'living_street', '#64748b', 0.8);
    drawRoadLayer(t => t === 'residential' || t === 'unclassified', '#4f6078', 0.9);
    drawRoadLayer(t => t === 'tertiary' || t === 'tertiary_link', '#7286a3', 1.0);
    drawRoadLayer(t => t === 'secondary' || t === 'secondary_link', '#94a3b8', 1.05);
    drawRoadLayer(t => t === 'primary' || t === 'primary_link' || t === 'trunk' || t === 'motorway', '#cbd5e1', 1.15);

    // 6. Real DPMB Tram Tracks
    ctx.strokeStyle = 'rgba(239, 68, 68, 0.72)';
    ctx.lineWidth = 1.6;
    for (const tr of osm.trams) {
      if (tr.length < 4) continue;
      ctx.beginPath();
      ctx.moveTo((tr[0] - this.mapMinX) * s, (tr[1] - this.mapMinZ) * s);
      for (let i = 2; i < tr.length; i += 2) {
        ctx.lineTo((tr[i] - this.mapMinX) * s, (tr[i + 1] - this.mapMinZ) * s);
      }
      ctx.stroke();
    }

    // 7. Bake Major Real Brno Street Names onto the map!
    const placedLabels = new Set<string>();
    ctx.font = '700 18px Inter, system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (const r of osm.roads) {
      if (!r.n || placedLabels.has(r.n) || !KEY_STREET_LABELS.has(r.n)) continue;
      placedLabels.add(r.n);
      const mid = Math.floor(r.p.length / 4) * 2;
      const [bx, by] = this.worldToBase(r.p[mid], r.p[mid + 1]);
      ctx.lineWidth = 5;
      ctx.strokeStyle = 'rgba(9, 13, 22, 0.9)';
      ctx.strokeText(r.n, bx, by);
      ctx.fillStyle = '#e2e8f0';
      ctx.fillText(r.n, bx, by);
    }
  }

  public renderHUD(params: MinimapRenderParams): void {
    const ctx = this.hudCtx;
    const w = this.hudCanvas.width;
    const h = this.hudCanvas.height;
    const cx = w * 0.5;
    const cy = h * 0.5;
    // Show ~380m x 380m real 1:1 Brno street detail around player!
    const worldToHudScale = 0.46;
    const baseToHudScale = (this.mapSpan / this.mapPx) * worldToHudScale;
    const [pBaseX, pBaseY] = this.worldToBase(params.playerX, params.playerZ);

    ctx.save();
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#0d1322';
    ctx.fillRect(0, 0, w, h);

    // Rotate pre-baked 1:1 OSM Brno map around player heading
    ctx.translate(cx, cy);
    ctx.rotate(params.headingYaw);
    ctx.scale(baseToHudScale, baseToHudScale);
    ctx.drawImage(this.baseMap, -pBaseX, -pBaseY);
    ctx.restore();

    // Dynamic world overlays in rotated HUD coordinates
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(params.headingYaw);
    ctx.translate(-params.playerX * worldToHudScale, -params.playerZ * worldToHudScale);

    // Live DPMB Šalinas
    ctx.fillStyle = '#ef4444';
    for (const t of params.trams) {
      ctx.beginPath();
      ctx.arc(t.position.x * worldToHudScale, t.position.z * worldToHudScale, 3.6, 0, Math.PI * 2);
      ctx.fill();
    }

    // Policie ČR flashing radar blips
    const flash = Math.floor(performance.now() / 220) % 2 === 0;
    for (const v of params.vehicles) {
      if (v.isPoliceChaser) {
        ctx.fillStyle = flash ? '#3b82f6' : '#ef4444';
        ctx.beginPath();
        ctx.arc(v.x * worldToHudScale, v.z * worldToHudScale, 4.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Landmark pins
    for (const lm of BRNO_LANDMARKS) {
      ctx.fillStyle = lm.color;
      ctx.beginPath();
      ctx.arc(lm.x * worldToHudScale, lm.z * worldToHudScale, 3.8, 0, Math.PI * 2);
      ctx.fill();
    }

    // GPS line to mission or custom waypoint
    const target = params.customWaypoint ?? params.missionTarget;
    if (target) {
      ctx.strokeStyle = params.customWaypoint ? '#22d3ee' : '#fbbf24';
      ctx.lineWidth = 2.6;
      ctx.setLineDash([5, 4]);
      ctx.beginPath();
      ctx.moveTo(params.playerX * worldToHudScale, params.playerZ * worldToHudScale);
      ctx.lineTo(target.x * worldToHudScale, target.z * worldToHudScale);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = params.customWaypoint ? '#22d3ee' : '#fbbf24';
      ctx.beginPath();
      ctx.arc(target.x * worldToHudScale, target.z * worldToHudScale, 5.5, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    // Player chevron in center
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

    // North badge (S)
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
    const s = w / this.mapSpan;

    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(this.baseMap, 0, 0, w, h);

    const toCanvas = (x: number, z: number): [number, number] => [
      (x - this.mapMinX) * s,
      (z - this.mapMinZ) * s
    ];

    // Landmarks with clean labels
    for (const lm of BRNO_LANDMARKS) {
      const [lx, ly] = toCanvas(lm.x, lm.z);
      ctx.fillStyle = lm.color;
      ctx.beginPath();
      ctx.arc(lx, ly, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#090d16';
      ctx.lineWidth = 2;
      ctx.stroke();

      const shortName = lm.name.split('&')[0].replace('Brno ', '').trim();
      ctx.font = '600 10.5px Inter, sans-serif';
      const tw = ctx.measureText(shortName).width;
      ctx.fillStyle = 'rgba(9, 13, 22, 0.85)';
      ctx.fillRect(lx - tw * 0.5 - 4, ly - 21, tw + 8, 14);
      ctx.fillStyle = '#f8fafc';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(shortName, lx, ly - 14);
    }

    // Active Mission beacon ring
    if (params.missionTarget) {
      const [mx, my] = toCanvas(params.missionTarget.x, params.missionTarget.z);
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 2.6;
      ctx.beginPath();
      ctx.arc(mx, my, 12, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Custom Waypoint
    if (params.customWaypoint) {
      const [wx, wy] = toCanvas(params.customWaypoint.x, params.customWaypoint.z);
      ctx.strokeStyle = '#22d3ee';
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      ctx.arc(wx, wy, 10, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Player live marker
    const [px, py] = toCanvas(params.playerX, params.playerZ);
    ctx.fillStyle = '#ff2e7e';
    ctx.beginPath();
    ctx.arc(px, py, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2.5;
    ctx.stroke();
  }

  public canvasPointToWorld(canvasX: number, canvasY: number): { x: number; z: number } {
    const s = this.fullCanvas.width / this.mapSpan;
    return {
      x: this.mapMinX + canvasX / s,
      z: this.mapMinZ + canvasY / s
    };
  }
}
