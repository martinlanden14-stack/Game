export class Sound {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.muted = false;
    this.noiseBuffer = null;
    this.ambientStarted = false;
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    this.ctx = new Ctx();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.55;
    this.master.connect(this.ctx.destination);
    this.noiseBuffer = this.createNoiseBuffer(2.5);
    this.startAmbience();
  }

  createNoiseBuffer(seconds) {
    const rate = this.ctx.sampleRate;
    const buffer = this.ctx.createBuffer(1, rate * seconds, rate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < data.length; i++) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;
      data[i] = last * 3.2;
    }
    return buffer;
  }

  startAmbience() {
    if (this.ambientStarted || !this.ctx) return;
    this.ambientStarted = true;
    const ctx = this.ctx;

    const wind = ctx.createBufferSource();
    wind.buffer = this.noiseBuffer;
    wind.loop = true;
    const windFilter = ctx.createBiquadFilter();
    windFilter.type = 'bandpass';
    windFilter.frequency.value = 460;
    windFilter.Q.value = 0.4;
    const windGain = ctx.createGain();
    windGain.gain.value = 0.045;
    wind.connect(windFilter).connect(windGain).connect(this.master);
    wind.start();

    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.07;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.025;
    lfo.connect(lfoGain).connect(windGain.gain);
    lfo.start();

    const rumble = ctx.createOscillator();
    rumble.type = 'sine';
    rumble.frequency.value = 38;
    const rumbleGain = ctx.createGain();
    rumbleGain.gain.value = 0.035;
    const rumbleLfo = ctx.createOscillator();
    rumbleLfo.frequency.value = 0.055;
    const rumbleLfoGain = ctx.createGain();
    rumbleLfoGain.gain.value = 0.018;
    rumbleLfo.connect(rumbleLfoGain).connect(rumbleGain.gain);
    rumble.connect(rumbleGain).connect(this.master);
    rumble.start();
    rumbleLfo.start();

    const hiss = ctx.createBufferSource();
    hiss.buffer = this.noiseBuffer;
    hiss.loop = true;
    const hissFilter = ctx.createBiquadFilter();
    hissFilter.type = 'highpass';
    hissFilter.frequency.value = 5200;
    const hissGain = ctx.createGain();
    hissGain.gain.value = 0.008;
    hiss.connect(hissFilter).connect(hissGain).connect(this.master);
    hiss.start();
  }

  toggleMute() {
    this.muted = !this.muted;
    if (this.master) {
      this.master.gain.cancelScheduledValues(this.ctx.currentTime);
      this.master.gain.setTargetAtTime(this.muted ? 0 : 0.55, this.ctx.currentTime, 0.05);
    }
    return this.muted;
  }

  noise(duration, { type = 'bandpass', freq = 1200, q = 0.8, gain = 0.4, attack = 0.002, pan = 0, sweep = null } = {}) {
    if (!this.ctx || this.muted) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const src = ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.playbackRate.value = 0.85 + Math.random() * 0.3;
    const filter = ctx.createBiquadFilter();
    filter.type = type;
    filter.frequency.setValueAtTime(freq, now);
    filter.Q.value = q;
    if (sweep) filter.frequency.exponentialRampToValueAtTime(Math.max(40, sweep), now + duration);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(gain, now + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
    if (panner) {
      panner.pan.value = Math.max(-1, Math.min(1, pan));
      src.connect(filter).connect(g).connect(panner).connect(this.master);
    } else {
      src.connect(filter).connect(g).connect(this.master);
    }
    src.start(now);
    src.stop(now + duration + 0.05);
  }

  tone(freq, duration, { type = 'sine', gain = 0.15, endFreq = null, pan = 0, delay = 0 } = {}) {
    if (!this.ctx || this.muted) return;
    const ctx = this.ctx;
    const now = ctx.currentTime + delay;
    const osc = ctx.createOscillator();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    if (endFreq) osc.frequency.exponentialRampToValueAtTime(Math.max(20, endFreq), now + duration);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(gain, now + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
    if (panner) {
      panner.pan.value = Math.max(-1, Math.min(1, pan));
      osc.connect(g).connect(panner).connect(this.master);
    } else {
      osc.connect(g).connect(this.master);
    }
    osc.start(now);
    osc.stop(now + duration + 0.05);
  }

  gunshot() {
    if (!this.ctx) return;
    this.noise(0.16, { type: 'bandpass', freq: 1500, q: 0.55, gain: 0.55, sweep: 260 });
    this.noise(0.34, { type: 'lowpass', freq: 520, q: 0.8, gain: 0.34, sweep: 90 });
    this.tone(120, 0.18, { type: 'sine', gain: 0.5, endFreq: 42 });
    this.tone(2600, 0.05, { type: 'square', gain: 0.035, endFreq: 900 });
  }

  dryFire() {
    this.noise(0.035, { type: 'highpass', freq: 2600, gain: 0.18 });
    this.tone(440, 0.03, { type: 'square', gain: 0.03 });
  }

  reload() {
    if (!this.ctx) return;
    this.noise(0.05, { type: 'bandpass', freq: 1800, gain: 0.18 });
    this.noise(0.06, { type: 'bandpass', freq: 900, gain: 0.16, delay: 1 });
    this.tone(220, 0.05, { type: 'square', gain: 0.04, delay: 0.45 });
    this.tone(330, 0.06, { type: 'square', gain: 0.05, delay: 0.95 });
    this.noise(0.07, { type: 'highpass', freq: 2200, gain: 0.2 });
  }

  hit(headshot = false) {
    if (headshot) {
      this.tone(1500, 0.09, { type: 'sine', gain: 0.18, endFreq: 2100 });
      this.tone(2300, 0.12, { type: 'sine', gain: 0.1, endFreq: 1500, delay: 0.03 });
    } else {
      this.tone(900, 0.055, { type: 'triangle', gain: 0.12, endFreq: 520 });
    }
  }

  kill() {
    this.tone(180, 0.4, { type: 'sawtooth', gain: 0.06, endFreq: 80 });
    this.noise(0.35, { type: 'lowpass', freq: 700, gain: 0.09, sweep: 180 });
  }

  hurt() {
    this.noise(0.3, { type: 'lowpass', freq: 420, gain: 0.3, sweep: 90 });
    this.tone(70, 0.35, { type: 'sine', gain: 0.28, endFreq: 35 });
    this.tone(1200, 0.12, { type: 'square', gain: 0.03, endFreq: 300 });
  }

  growl(pan = 0, pitch = 1) {
    if (!this.ctx || this.muted) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;
    const dur = 0.55 + Math.random() * 0.75;
    const osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    const base = (58 + Math.random() * 46) * pitch;
    osc.frequency.setValueAtTime(base, now);
    osc.frequency.linearRampToValueAtTime(base * 0.65, now + dur);
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 6 + Math.random() * 15;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 17;
    lfo.connect(lfoGain).connect(osc.frequency);
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 380 + Math.random() * 420;
    filter.Q.value = 4;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.026 + Math.random() * 0.02, now + 0.14);
    g.gain.exponentialRampToValueAtTime(0.0001, now + dur);
    const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
    if (panner) {
      panner.pan.value = Math.max(-1, Math.min(1, pan));
      osc.connect(filter).connect(g).connect(panner).connect(this.master);
    } else {
      osc.connect(filter).connect(g).connect(this.master);
    }
    osc.start(now);
    lfo.start(now);
    osc.stop(now + dur + 0.05);
    lfo.stop(now + dur + 0.05);
  }

  wave() {
    this.tone(90, 0.9, { type: 'sawtooth', gain: 0.05, endFreq: 62 });
    this.tone(220, 1.2, { type: 'sine', gain: 0.06, endFreq: 165, delay: 0.1 });
    this.noise(1.1, { type: 'lowpass', freq: 360, gain: 0.06, sweep: 80 });
  }

  death() {
    this.tone(60, 1.8, { type: 'sine', gain: 0.3, endFreq: 28 });
    this.noise(1.4, { type: 'lowpass', freq: 300, gain: 0.12, sweep: 60 });
  }

  heal() {
    this.tone(520, 0.2, { type: 'sine', gain: 0.05, endFreq: 780 });
  }
}
