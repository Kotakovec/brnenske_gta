import * as THREE from 'three';

function makeCanvas(w: number, h: number): [HTMLCanvasElement, CanvasRenderingContext2D] {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d')!;
  return [c, ctx];
}

function toTexture(canvas: HTMLCanvasElement, repeatX = 1, repeatY = 1, srgb = true): THREE.CanvasTexture {
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeatX, repeatY);
  if (srgb) tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  tex.needsUpdate = true;
  return tex;
}

export interface BrnoTextures {
  asphalt: THREE.CanvasTexture;
  cobble: THREE.CanvasTexture;
  grass: THREE.CanvasTexture;
  stone: THREE.CanvasTexture;
  roofTiles: THREE.CanvasTexture;
  azGlass: THREE.CanvasTexture;
  facades: THREE.CanvasTexture[];
  facadesEmissive: THREE.CanvasTexture[];
  tramSide: THREE.CanvasTexture;
  policeSide: THREE.CanvasTexture;
  createSign: (text: string, bg: string, fg: string, border?: string) => THREE.CanvasTexture;
}

export function createBrnoTextures(): BrnoTextures {
  // 1. Asphalt road with dashed white center line + curbs
  const [ac, actx] = makeCanvas(256, 256);
  actx.fillStyle = '#252932';
  actx.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 3200; i++) {
    const v = 30 + Math.floor(Math.random() * 24);
    actx.fillStyle = `rgb(${v},${v + 2},${v + 6})`;
    actx.fillRect(Math.random() * 256, Math.random() * 256, 2, 2);
  }
  // Edge lines
  actx.fillStyle = 'rgba(235, 240, 250, 0.45)';
  actx.fillRect(10, 0, 5, 256);
  actx.fillRect(241, 0, 5, 256);
  // Center dashed line
  actx.fillStyle = '#f8fafc';
  actx.fillRect(125, 16, 6, 92);
  actx.fillRect(125, 148, 6, 92);
  const asphalt = toTexture(ac, 1, 1);

  // 2. Brno historic cobblestones (Svoboďák & Zelňák)
  const [cc, cctx] = makeCanvas(256, 256);
  cctx.fillStyle = '#6c6864';
  cctx.fillRect(0, 0, 256, 256);
  const rows = 16;
  const cols = 12;
  const rw = 256 / cols;
  const rh = 256 / rows;
  for (let r = 0; r < rows; r++) {
    const offset = (r % 2) * (rw * 0.5);
    for (let col = -1; col <= cols; col++) {
      const shade = 112 + Math.floor(Math.random() * 38);
      const warm = Math.floor(Math.random() * 14);
      cctx.fillStyle = `rgb(${shade + warm}, ${shade + Math.floor(warm * 0.6)}, ${shade - 4})`;
      cctx.fillRect(col * rw + offset + 1.5, r * rh + 1.5, rw - 3, rh - 3);
    }
  }
  const cobble = toTexture(cc, 14, 14);

  // 3. Park grass (Lužánky, Špilberk hill, Denisovy sady)
  const [gc, gctx] = makeCanvas(256, 256);
  gctx.fillStyle = '#3c6e3b';
  gctx.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 4500; i++) {
    const g = 88 + Math.floor(Math.random() * 44);
    const r = 46 + Math.floor(Math.random() * 28);
    gctx.fillStyle = `rgb(${r},${g},${42 + Math.floor(Math.random() * 20)})`;
    gctx.fillRect(Math.random() * 256, Math.random() * 256, 2, 4);
  }
  const grass = toTexture(gc, 24, 24);

  // 4. Historic limestone/fortress stone (Špilberk & Petrov)
  const [sc, sctx] = makeCanvas(256, 256);
  sctx.fillStyle = '#b9ad99';
  sctx.fillRect(0, 0, 256, 256);
  for (let r = 0; r < 12; r++) {
    const y = r * (256 / 12);
    const shift = (r % 2) * 24;
    for (let c = -1; c < 6; c++) {
      const x = c * 48 + shift;
      const tone = 165 + Math.floor(Math.random() * 34);
      sctx.fillStyle = `rgb(${tone}, ${tone - 10}, ${tone - 25})`;
      sctx.fillRect(x + 1, y + 1, 46, 256 / 12 - 2);
    }
  }
  const stone = toTexture(sc, 3, 2);

  // 5. Terracotta roof tiles (Classic Moravian red roofs)
  const [rc, rctx] = makeCanvas(128, 128);
  rctx.fillStyle = '#8f3a29';
  rctx.fillRect(0, 0, 128, 128);
  for (let r = 0; r < 16; r++) {
    for (let c = 0; c < 12; c++) {
      const shade = 135 + Math.floor(Math.random() * 35);
      rctx.fillStyle = `rgb(${shade}, ${Math.floor(shade * 0.42)}, ${Math.floor(shade * 0.28)})`;
      rctx.fillRect(c * 11 + 1, r * 8 + 1, 9, 6);
    }
  }
  const roofTiles = toTexture(rc, 4, 4);

  // 6. AZ Tower iconic white + orange terracotta vertical facade
  const [azc, azctx] = makeCanvas(256, 512);
  azctx.fillStyle = '#e7edf4';
  azctx.fillRect(0, 0, 256, 512);
  const floors = 24;
  const fh = 512 / floors;
  for (let f = 0; f < floors; f++) {
    const y = f * fh;
    // Glass band
    azctx.fillStyle = '#1e3a5f';
    azctx.fillRect(10, y + 5, 236, fh - 9);
    // Warm sunlit reflection
    azctx.fillStyle = 'rgba(255, 180, 130, 0.24)';
    azctx.fillRect(14, y + 7, 110, fh - 13);
    // Iconic AZ Tower orange ceramic cladding accents
    if ((f + 1) % 3 === 0) {
      azctx.fillStyle = '#ea580c';
      azctx.fillRect(160, y + 2, 76, fh - 4);
    } else if (f % 4 === 0) {
      azctx.fillStyle = '#f97316';
      azctx.fillRect(20, y + 2, 48, fh - 4);
    }
  }
  const azGlass = toTexture(azc, 1, 1);

  // 7. Brno Historic & Modern Facades (with paired emissive night window maps!)
  const palettes = [
    { wall: '#e8c99b', trim: '#f5ead6', shop: '#3b2e2a' }, // Moravian ochre
    { wall: '#d9967a', trim: '#f3d8cc', shop: '#2b2936' }, // Terracotta salmon
    { wall: '#e6e1d3', trim: '#ffffff', shop: '#23303d' }, // Cream Baroque
    { wall: '#a8c2b9', trim: '#e0ede8', shop: '#1e2c2e' }, // Pastel mint historic
    { wall: '#c9b3c4', trim: '#ede2ea', shop: '#2c2233' }, // Vice-sunset lavender plaster
    { wall: '#334155', trim: '#64748b', shop: '#111827' }  // Modern glass office
  ];
  const facades: THREE.CanvasTexture[] = [];
  const facadesEmissive: THREE.CanvasTexture[] = [];

  for (const p of palettes) {
    const [fc, fctx] = makeCanvas(256, 256);
    const [ec, ectx] = makeCanvas(256, 256);
    fctx.fillStyle = p.wall;
    fctx.fillRect(0, 0, 256, 256);
    ectx.fillStyle = '#000000';
    ectx.fillRect(0, 0, 256, 256);

    // Cornice lines
    fctx.fillStyle = p.trim;
    fctx.fillRect(0, 0, 256, 8);
    fctx.fillRect(0, 198, 256, 6);

    // Ground floor shopfront
    fctx.fillStyle = p.shop;
    fctx.fillRect(0, 204, 256, 52);
    for (let sx = 16; sx < 240; sx += 76) {
      fctx.fillStyle = '#fde68a';
      fctx.fillRect(sx, 212, 58, 36);
      ectx.fillStyle = '#fbbf24';
      ectx.fillRect(sx, 212, 58, 36);
    }

    // Upper floor windows (4 rows x 5 cols)
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 5; c++) {
        const wx = 18 + c * 46;
        const wy = 18 + r * 44;
        // Frame
        fctx.fillStyle = p.trim;
        fctx.fillRect(wx - 3, wy - 3, 30, 34);
        // Glass
        const lit = Math.random() > 0.42;
        fctx.fillStyle = lit ? '#4b5563' : '#1f2937';
        fctx.fillRect(wx, wy, 24, 28);
        // Window muntins
        fctx.fillStyle = p.trim;
        fctx.fillRect(wx + 11, wy, 2, 28);
        fctx.fillRect(wx, wy + 12, 24, 2);

        if (lit) {
          ectx.fillStyle = Math.random() > 0.25 ? '#fcd34d' : '#67e8f9';
          ectx.fillRect(wx + 1, wy + 1, 22, 26);
        }
      }
    }
    facades.push(toTexture(fc, 1, 1));
    facadesEmissive.push(toTexture(ec, 1, 1));
  }

  // 8. DPMB Šalina side livery (authentic Brno red + white stripe + dark windows)
  const [tc, tctx] = makeCanvas(512, 128);
  tctx.fillStyle = '#dc2626';
  tctx.fillRect(0, 0, 512, 128);
  // White middle band
  tctx.fillStyle = '#f8fafc';
  tctx.fillRect(0, 14, 512, 56);
  // Windows
  tctx.fillStyle = '#111827';
  for (let i = 0; i < 6; i++) {
    tctx.fillRect(16 + i * 82, 20, 68, 44);
  }
  // Red skirt + yellow stripe + DPMB text
  tctx.fillStyle = '#facc15';
  tctx.fillRect(0, 72, 512, 5);
  tctx.fillStyle = '#ffffff';
  tctx.font = 'bold 20px sans-serif';
  tctx.fillText('DPMB  •  ŠALINA  •  LINKA 1', 120, 106);
  const tramSide = toTexture(tc, 1, 1);

  // 9. Policie ČR side livery (silver + blue/yellow reflective squares)
  const [pc, pctx] = makeCanvas(256, 128);
  pctx.fillStyle = '#dce3ec';
  pctx.fillRect(0, 0, 256, 128);
  // Blue-yellow Czech police stripe
  for (let i = 0; i < 16; i++) {
    pctx.fillStyle = i % 2 === 0 ? '#0047ab' : '#facc15';
    pctx.fillRect(i * 16, 62, 16, 18);
  }
  pctx.fillStyle = '#003580';
  pctx.fillRect(0, 82, 256, 12);
  pctx.fillStyle = '#0f172a';
  pctx.font = 'bold 22px sans-serif';
  pctx.fillText('POLICIE ČR', 64, 52);
  const policeSide = toTexture(pc, 1, 1);

  // Helper for crisp street/landmark signs
  const createSign = (text: string, bg: string, fg: string, border = '#ffffff') => {
    const [sgc, sgctx] = makeCanvas(512, 128);
    sgctx.fillStyle = bg;
    sgctx.fillRect(0, 0, 512, 128);
    sgctx.strokeStyle = border;
    sgctx.lineWidth = 8;
    sgctx.strokeRect(8, 8, 496, 112);
    sgctx.fillStyle = fg;
    sgctx.font = 'bold 42px Inter, system-ui, sans-serif';
    sgctx.textAlign = 'center';
    sgctx.textBaseline = 'middle';
    sgctx.fillText(text, 256, 66);
    const tex = new THREE.CanvasTexture(sgc);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    return tex;
  };

  return {
    asphalt,
    cobble,
    grass,
    stone,
    roofTiles,
    azGlass,
    facades,
    facadesEmissive,
    tramSide,
    policeSide,
    createSign
  };
}
