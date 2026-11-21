export interface RadioStation {
  id: string;
  name: string;
  bpm: number;
  bassNotes: number[];
  leadNotes: number[];
  wave: OscillatorType;
}

export const RADIO_STATIONS: RadioStation[] = [
  {
    id: 'vice-brno',
    name: 'RADIO BRNO 94.6 FM (Vice Synth)',
    bpm: 112,
    bassNotes: [55, 55, 65.4, 65.4, 73.4, 73.4, 61.7, 65.4],
    leadNotes: [220, 261.6, 329.6, 392, 329.6, 261.6, 293.7, 329.6],
    wave: 'sawtooth'
  },
  {
    id: 'salina-bass',
    name: 'ŠALINA BASS FM (Moravia Club)',
    bpm: 126,
    bassNotes: [49, 49, 49, 58.3, 65.4, 65.4, 55, 49],
    leadNotes: [196, 0, 233.1, 293.7, 0, 392, 349.2, 293.7],
    wave: 'square'
  },
  {
    id: 'petrov-chill',
    name: 'PETROV SUNSET FM (Chillwave)',
    bpm: 88,
    bassNotes: [65.4, 65.4, 87.3, 87.3, 73.4, 73.4, 98, 98],
    leadNotes: [261.6, 329.6, 392, 493.9, 440, 392, 329.6, 293.7],
    wave: 'triangle'
  },
  {
    id: 'off',
    name: 'Rádio vypnuto',
    bpm: 0,
    bassNotes: [],
    leadNotes: [],
    wave: 'sine'
  }
];

export class BrnoAudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private engineOsc: OscillatorNode | null = null;
  private engineGain: GainNode | null = null;
  private sirenOsc: OscillatorNode | null = null;
  private sirenGain: GainNode | null = null;
  private screechGain: GainNode | null = null;
  private screechFilter: BiquadFilterNode | null = null;
  private muted = false;
  private volume = 0.45;
  private radioIndex = 0;
  private radioStep = 0;
  private radioTimer = 0;
  private sirenTimer = 0;
  private isDriving = false;

  public unlock(): void {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
      return;
    }
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;

    this.ctx = new AudioCtx();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.value = this.muted ? 0 : this.volume;
    this.masterGain.connect(this.ctx.destination);

    // Continuous engine hum (quiet unless driving)
    this.engineOsc = this.ctx.createOscillator();
    this.engineOsc.type = 'sawtooth';
    this.engineOsc.frequency.value = 58;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 260;
    this.engineGain = this.ctx.createGain();
    this.engineGain.gain.value = 0;
    this.engineOsc.connect(filter);
    filter.connect(this.engineGain);
    this.engineGain.connect(this.masterGain);
    this.engineOsc.start();

    // Police two-tone Czech PČR siren
    this.sirenOsc = this.ctx.createOscillator();
    this.sirenOsc.type = 'triangle';
    this.sirenOsc.frequency.value = 660;
    this.sirenGain = this.ctx.createGain();
    this.sirenGain.gain.value = 0;
    this.sirenOsc.connect(this.sirenGain);
    this.sirenGain.connect(this.masterGain);
    this.sirenOsc.start();

    // Realistic tire screech / slip synthesizer (resonant bandpass noise loop)
    const bufLen = this.ctx.sampleRate * 2;
    const noiseBuf = this.ctx.createBuffer(1, bufLen, this.ctx.sampleRate);
    const ch = noiseBuf.getChannelData(0);
    for (let i = 0; i < bufLen; i++) ch[i] = Math.random() * 2 - 1;
    const screechSrc = this.ctx.createBufferSource();
    screechSrc.buffer = noiseBuf;
    screechSrc.loop = true;
    this.screechFilter = this.ctx.createBiquadFilter();
    this.screechFilter.type = 'bandpass';
    this.screechFilter.frequency.value = 1450;
    this.screechFilter.Q.value = 9.5;
    this.screechGain = this.ctx.createGain();
    this.screechGain.gain.value = 0;
    screechSrc.connect(this.screechFilter);
    this.screechFilter.connect(this.screechGain);
    this.screechGain.connect(this.masterGain);
    screechSrc.start();
  }

  public setMuted(m: boolean): void {
    this.muted = m;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(m ? 0 : this.volume, this.ctx.currentTime, 0.05);
    }
  }

  public isMuted(): boolean {
    return this.muted;
  }

  public setVolume(v: number): void {
    this.volume = Math.max(0, Math.min(1, v));
    if (this.masterGain && this.ctx && !this.muted) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.05);
    }
  }

  public getVolume(): number {
    return this.volume;
  }

  public nextRadio(): string {
    this.radioIndex = (this.radioIndex + 1) % RADIO_STATIONS.length;
    this.radioStep = 0;
    return RADIO_STATIONS[this.radioIndex].name;
  }

  public getRadioName(): string {
    return RADIO_STATIONS[this.radioIndex].name;
  }

  public update(dt: number, driving: boolean, speedRatio: number, policeSirenActive: boolean, tireSlip = 0): void {
    this.isDriving = driving;
    if (!this.ctx || !this.engineOsc || !this.engineGain || !this.sirenOsc || !this.sirenGain) return;
    const now = this.ctx.currentTime;

    // Engine RPM modulation
    if (driving) {
      const targetFreq = 52 + Math.abs(speedRatio) * 155;
      this.engineOsc.frequency.setTargetAtTime(targetFreq, now, 0.06);
      this.engineGain.gain.setTargetAtTime(0.085 + Math.abs(speedRatio) * 0.06, now, 0.08);
    } else {
      this.engineGain.gain.setTargetAtTime(0, now, 0.1);
    }

    // Tire screech proportional to real tire slip angle
    if (this.screechGain && this.screechFilter) {
      const slipVol = driving && tireSlip > 0.2 ? Math.min(0.11, (tireSlip - 0.2) * 0.14) : 0;
      this.screechGain.gain.setTargetAtTime(slipVol, now, 0.05);
      this.screechFilter.frequency.setTargetAtTime(1280 + tireSlip * 520, now, 0.08);
    }

    // Czech Police two-tone siren (tů-tá-tů-tá)
    if (policeSirenActive) {
      this.sirenTimer += dt;
      const hi = Math.floor(this.sirenTimer * 2.4) % 2 === 0;
      this.sirenOsc.frequency.setTargetAtTime(hi ? 780 : 585, now, 0.03);
      this.sirenGain.gain.setTargetAtTime(0.075, now, 0.06);
    } else {
      this.sirenGain.gain.setTargetAtTime(0, now, 0.1);
    }

    // In-car radio synth sequencer
    const station = RADIO_STATIONS[this.radioIndex];
    if (driving && station.bpm > 0 && !this.muted) {
      const stepDur = 60 / station.bpm / 2;
      this.radioTimer += dt;
      if (this.radioTimer >= stepDur) {
        this.radioTimer -= stepDur;
        this.playRadioStep(station, this.radioStep, stepDur);
        this.radioStep = (this.radioStep + 1) % station.bassNotes.length;
      }
    }
  }

  private playRadioStep(station: RadioStation, step: number, dur: number): void {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // Bass note
    const bassFreq = station.bassNotes[step];
    if (bassFreq > 0) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filt = this.ctx.createBiquadFilter();
      osc.type = station.wave;
      osc.frequency.value = bassFreq;
      filt.type = 'lowpass';
      filt.frequency.value = 380;
      gain.gain.setValueAtTime(0.065, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + dur * 0.9);
      osc.connect(filt);
      filt.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + dur);
    }

    // Kick drum on even beats
    if (step % 2 === 0) {
      const kOsc = this.ctx.createOscillator();
      const kGain = this.ctx.createGain();
      kOsc.type = 'sine';
      kOsc.frequency.setValueAtTime(125, now);
      kOsc.frequency.exponentialRampToValueAtTime(36, now + 0.11);
      kGain.gain.setValueAtTime(0.11, now);
      kGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      kOsc.connect(kGain);
      kGain.connect(this.masterGain);
      kOsc.start(now);
      kOsc.stop(now + 0.13);
    }

    // Lead arpeggio
    const leadFreq = station.leadNotes[step];
    if (leadFreq > 0) {
      const lOsc = this.ctx.createOscillator();
      const lGain = this.ctx.createGain();
      lOsc.type = 'triangle';
      lOsc.frequency.value = leadFreq;
      lGain.gain.setValueAtTime(0.032, now);
      lGain.gain.exponentialRampToValueAtTime(0.001, now + dur * 0.85);
      lOsc.connect(lGain);
      lGain.connect(this.masterGain);
      lOsc.start(now);
      lOsc.stop(now + dur);
    }
  }

  public playHorn(): void {
    if (!this.ctx || !this.masterGain || this.muted) return;
    const now = this.ctx.currentTime;
    for (const freq of [390, 488]) {
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.value = freq;
      g.gain.setValueAtTime(0.08, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.32);
      osc.connect(g);
      g.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 0.34);
    }
  }

  public playTramBell(): void {
    if (!this.ctx || !this.masterGain || this.muted) return;
    const now = this.ctx.currentTime;
    for (let i = 0; i < 2; i++) {
      const start = now + i * 0.16;
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = 1480;
      g.gain.setValueAtTime(0.08, start);
      g.gain.exponentialRampToValueAtTime(0.001, start + 0.25);
      osc.connect(g);
      g.connect(this.masterGain);
      osc.start(start);
      osc.stop(start + 0.26);
    }
  }

  public playShot(heavy = false): void {
    if (!this.ctx || !this.masterGain || this.muted) return;
    const now = this.ctx.currentTime;
    const dur = heavy ? 0.28 : 0.09;
    const bufferSize = Math.floor(this.ctx.sampleRate * dur);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const filt = this.ctx.createBiquadFilter();
    filt.type = 'bandpass';
    filt.frequency.value = heavy ? 320 : 1100;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(heavy ? 0.35 : 0.2, now);
    g.gain.exponentialRampToValueAtTime(0.001, now + dur);
    noise.connect(filt);
    filt.connect(g);
    g.connect(this.masterGain);
    noise.start(now);
  }

  public playExplosion(): void {
    if (!this.ctx || !this.masterGain || this.muted) return;
    const now = this.ctx.currentTime;
    const dur = 0.75;
    const bufferSize = Math.floor(this.ctx.sampleRate * dur);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.32));
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const filt = this.ctx.createBiquadFilter();
    filt.type = 'lowpass';
    filt.frequency.setValueAtTime(480, now);
    filt.frequency.exponentialRampToValueAtTime(60, now + dur);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.5, now);
    g.gain.exponentialRampToValueAtTime(0.001, now + dur);
    noise.connect(filt);
    filt.connect(g);
    g.connect(this.masterGain);
    noise.start(now);
  }

  public playSuccess(): void {
    if (!this.ctx || !this.masterGain || this.muted) return;
    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((f, idx) => {
      const osc = this.ctx!.createOscillator();
      const g = this.ctx!.createGain();
      osc.type = 'triangle';
      osc.frequency.value = f;
      const t = now + idx * 0.085;
      g.gain.setValueAtTime(0.12, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
      osc.connect(g);
      g.connect(this.masterGain!);
      osc.start(t);
      osc.stop(t + 0.36);
    });
  }

  public playCrash(intensity: number): void {
    if (!this.ctx || !this.masterGain || this.muted) return;
    const now = this.ctx.currentTime;
    const dur = 0.22;
    const bufferSize = Math.floor(this.ctx.sampleRate * dur);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.2));
    }
    const src = this.ctx.createBufferSource();
    src.buffer = buffer;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(Math.min(0.32, 0.08 + intensity * 0.16), now);
    g.gain.exponentialRampToValueAtTime(0.001, now + dur);
    src.connect(g);
    g.connect(this.masterGain);
    src.start(now);
  }
}
