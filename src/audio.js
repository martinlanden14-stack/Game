export class Sound {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.ready = false;
    this.muted = localStorage.getItem('grindcity.muted') === '1';
    this.rollGain = null;
    this.windGain = null;
    this.grindGain = null;
    this.rollFilter = null;
    this.windFilter = null;
    this.noise = null;
    this.lastPush = 0;
  }

  init() {
    if (this.ready) {
      this.ctx?.resume?.();
      return;
    }
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    try {
      this.ctx = new Ctx();
      this.master = this.ctx.createGain();
      this.master.gain.value = this.muted ? 0 : 0.8;
      this.master.connect(this.ctx.destination);

      const len = this.ctx.sampleRate * 2;
      const buffer = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let last = 0;
      for (let i = 0; i < len; i++) {
        const white = Math.random() * 2 - 1;
        last = (last + 0.03 * white) / 1.03;
        data[i] = last * 3.2;
      }
      this.noise = buffer;

      // Rolling loop.
      const roll = this.ctx.createBufferSource();
      roll.buffer = buffer;
      roll.loop = true;
      this.rollFilter = this.ctx.createBiquadFilter();
      this.rollFilter.type = 'lowpass';
      this.rollFilter.frequency.value = 260;
      this.rollFilter.Q.value = 0.6;
      this.rollGain = this.ctx.createGain();
      this.rollGain.gain.value = 0;
      roll.connect(this.rollFilter).connect(this.rollGain).connect(this.master);
      roll.start();

      // Wind loop.
      const wind = this.ctx.createBufferSource();
      wind.buffer = buffer;
      wind.loop = true;
      wind.playbackRate.value = 0.6;
      this.windFilter = this.ctx.createBiquadFilter();
      this.windFilter.type = 'bandpass';
      this.windFilter.frequency.value = 600;
      this.windFilter.Q.value = 0.5;
      this.windGain = this.ctx.createGain();
      this.windGain.gain.value = 0;
      wind.connect(this.windFilter).connect(this.windGain).connect(this.master);
      wind.start();

      // Grind loop.
      const grind = this.ctx.createBufferSource();
      grind.buffer = buffer;
      grind.loop = true;
      grind.playbackRate.value = 1.7;
      const grindFilter = this.ctx.createBiquadFilter();
      grindFilter.type = 'bandpass';
      grindFilter.frequency.value = 2200;
      grindFilter.Q.value = 2.2;
      this.grindGain = this.ctx.createGain();
      this.grindGain.gain.value = 0;
      grind.connect(grindFilter).connect(this.grindGain).connect(this.master);
      grind.start();

      this.ready = true;
    } catch (e) {
      console.warn('Audio unavailable', e);
    }
  }

  setMuted(muted) {
    this.muted = muted;
    localStorage.setItem('grindcity.muted', muted ? '1' : '0');
    if (this.master) {
      this.master.gain.setTargetAtTime(muted ? 0 : 0.8, this.ctx.currentTime, 0.05);
    }
  }

  toggle() {
    this.setMuted(!this.muted);
    return this.muted;
  }

  update({ speed = 0, grounded = true, grinding = false, air = false }) {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    const s = Math.min(1, Math.abs(speed) / 14);
    const rollTarget = grounded ? 0.018 + s * 0.1 : 0;
    this.rollGain.gain.setTargetAtTime(rollTarget, t, 0.06);
    this.rollFilter.frequency.setTargetAtTime(180 + s * 480, t, 0.1);
    this.windGain.gain.setTargetAtTime(air ? 0.015 + s * 0.055 : 0.006, t, 0.12);
    this.windFilter.frequency.setTargetAtTime(380 + s * 900, t, 0.1);
    this.grindGain.gain.setTargetAtTime(grinding ? 0.11 : 0, t, 0.04);
  }

  _env(node, gain, attack, decay, when = 0) {
    const t = this.ctx.currentTime + when;
    gain.gain.cancelScheduledValues(t);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(Math.max(0.0002, gain.gain._peak || 0.2), t + attack);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay);
    node.start(t);
    node.stop(t + attack + decay + 0.05);
  }

  tone(freq, dur = 0.12, type = 'sine', volume = 0.14, slide = 0, delay = 0) {
    if (!this.ready) return;
    const t = this.ctx.currentTime + delay;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(30, freq + slide), t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(volume, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(this.master);
    o.start(t);
    o.stop(t + dur + 0.03);
  }

  noiseBurst(dur = 0.12, volume = 0.12, freq = 1200, q = 0.8, type = 'bandpass', delay = 0) {
    if (!this.ready) return;
    const t = this.ctx.currentTime + delay;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noise;
    const f = this.ctx.createBiquadFilter();
    f.type = type;
    f.frequency.setValueAtTime(freq, t);
    f.Q.value = q;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(volume, t + 0.006);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f).connect(g).connect(this.master);
    src.start(t);
    src.stop(t + dur + 0.02);
  }

  push() {
    if (!this.ready) return;
    const now = performance.now();
    if (now - this.lastPush < 140) return;
    this.lastPush = now;
    this.noiseBurst(0.09, 0.055, 760, 0.9);
    this.tone(95, 0.08, 'triangle', 0.035, -20);
  }

  ollie() {
    this.noiseBurst(0.1, 0.18, 1500, 0.7);
    this.tone(190, 0.12, 'square', 0.08, 110);
  }

  land(impact = 4) {
    const v = Math.min(0.35, 0.08 + impact * 0.015);
    this.tone(80, 0.16, 'sine', v, -35);
    this.noiseBurst(0.11, v * 0.7, 420, 0.8, 'lowpass');
  }

  bail() {
    this.noiseBurst(0.38, 0.24, 900, 0.5, 'lowpass');
    this.tone(120, 0.3, 'sawtooth', 0.11, -70);
    this.tone(73, 0.4, 'triangle', 0.12, -20);
  }

  coin() {
    this.tone(1180, 0.1, 'sine', 0.11);
    this.tone(1760, 0.12, 'sine', 0.07, 0, 0.04);
  }

  letter() {
    [523, 659, 784, 1046].forEach((f, i) => this.tone(f, 0.22, 'triangle', 0.12, 0, i * 0.06));
    this.noiseBurst(0.3, 0.07, 5000, 0.7, 'highpass', 0.1);
  }

  trick(name = '') {
    this.noiseBurst(0.16, 0.08, 2400, 0.5);
  }

  grindStart() {
    this.noiseBurst(0.2, 0.12, 2800, 1.4);
    this.tone(640, 0.18, 'square', 0.035, 240);
  }

  goal() {
    [392, 523, 659, 784, 1046].forEach((f, i) => this.tone(f, 0.5, 'triangle', 0.1, 0, i * 0.09));
    this.noiseBurst(0.6, 0.06, 4000, 0.9, 'highpass', 0.18);
  }

  ui() {
    this.tone(440, 0.05, 'sine', 0.06);
  }

  countdown(final = false) {
    this.tone(final ? 880 : 440, final ? 0.35 : 0.1, 'triangle', 0.1);
  }
}
