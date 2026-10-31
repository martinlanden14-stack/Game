(() => {
  'use strict';
  const CR = window.CR = window.CR || {};

  // ------------------------------------------------------------
  //  math / helpers
  // ------------------------------------------------------------
  const TAU = Math.PI * 2;
  const clamp = (v, a, b) => v < a ? a : v > b ? b : v;
  const lerp = (a, b, t) => a + (b - a) * t;
  const rand = (a = 1, b = 0) => b + Math.random() * (a - b);
  const randInt = (a, b) => Math.floor(b + Math.random() * (a - b + 1));
  const pick = arr => arr[(Math.random() * arr.length) | 0];
  const dist = (ax, ay, bx, by) => Math.hypot(bx - ax, by - ay);
  const angleDiff = (a, b) => Math.atan2(Math.sin(a - b), Math.cos(a - b));
  const approach = (v, target, step) => v < target ? Math.min(v + step, target) : Math.max(v - step, target);

  function mulberry32(a) {
    return function () {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      let t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  function rr(c, x, y, w, h, r) {
    r = Math.min(r, w / 2, h / 2);
    c.beginPath();
    c.moveTo(x + r, y);
    c.lineTo(x + w - r, y);
    c.quadraticCurveTo(x + w, y, x + w, y + r);
    c.lineTo(x + w, y + h - r);
    c.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    c.lineTo(x + r, y + h);
    c.quadraticCurveTo(x, y + h, x, y + h - r);
    c.lineTo(x, y + r);
    c.quadraticCurveTo(x, y, x + r, y);
    c.closePath();
  }

  function ellipse(c, x, y, rx, ry, color) {
    c.fillStyle = color;
    c.beginPath();
    c.ellipse(x, y, rx, ry, 0, 0, TAU);
    c.fill();
  }

  // ------------------------------------------------------------
  //  5x7 pixel typeface
  // ------------------------------------------------------------
  const FONT_SRC = {
    A: '01110/10001/10001/11111/10001/10001/10001',
    B: '11110/10001/10001/11110/10001/10001/11110',
    C: '01111/10000/10000/10000/10000/10000/01111',
    D: '11110/10001/10001/10001/10001/10001/11110',
    E: '11111/10000/10000/11110/10000/10000/11111',
    F: '11111/10000/10000/11110/10000/10000/10000',
    G: '01111/10000/10000/10111/10001/10001/01111',
    H: '10001/10001/10001/11111/10001/10001/10001',
    I: '11111/00100/00100/00100/00100/00100/11111',
    J: '00111/00010/00010/00010/00010/10010/01100',
    K: '10001/10010/10100/11000/10100/10010/10001',
    L: '10000/10000/10000/10000/10000/10000/11111',
    M: '10001/11011/10101/10101/10001/10001/10001',
    N: '10001/11001/10101/10011/10001/10001/10001',
    O: '01110/10001/10001/10001/10001/10001/01110',
    P: '11110/10001/10001/11110/10000/10000/10000',
    Q: '01110/10001/10001/10001/10101/10010/01101',
    R: '11110/10001/10001/11110/10100/10010/10001',
    S: '01111/10000/10000/01110/00001/00001/11110',
    T: '11111/00100/00100/00100/00100/00100/00100',
    U: '10001/10001/10001/10001/10001/10001/01110',
    V: '10001/10001/10001/10001/10001/01010/00100',
    W: '10001/10001/10001/10101/10101/10101/01010',
    X: '10001/10001/01010/00100/01010/10001/10001',
    Y: '10001/10001/01010/00100/00100/00100/00100',
    Z: '11111/00001/00010/00100/01000/10000/11111',
    0: '01110/10001/10011/10101/11001/10001/01110',
    1: '00100/01100/00100/00100/00100/00100/01110',
    2: '01110/10001/00001/00010/00100/01000/11111',
    3: '11111/00010/00100/00010/00001/10001/01110',
    4: '00010/00110/01010/10010/11111/00010/00010',
    5: '11111/10000/11110/00001/00001/10001/01110',
    6: '00110/01000/10000/11110/10001/10001/01110',
    7: '11111/00001/00010/00100/01000/01000/01000',
    8: '01110/10001/10001/01110/10001/10001/01110',
    9: '01110/10001/10001/01111/00001/00010/01100',
    '.': '00000/00000/00000/00000/00000/00110/00110',
    ',': '00000/00000/00000/00000/00110/00110/00100',
    ':': '00000/00110/00110/00000/00110/00110/00000',
    ';': '00000/00110/00110/00000/00110/00110/00100',
    '!': '00100/00100/00100/00100/00100/00000/00100',
    '?': '01110/10001/00001/00010/00100/00000/00100',
    "'": '00100/00100/00000/00000/00000/00000/00000',
    '"': '01010/01010/00000/00000/00000/00000/00000',
    '-': '00000/00000/00000/11111/00000/00000/00000',
    '+': '00000/00100/00100/11111/00100/00100/00000',
    '/': '00001/00010/00010/00100/01000/01000/10000',
    '\\': '10000/01000/01000/00100/00010/00010/00001',
    '(': '00010/00100/01000/01000/01000/00100/00010',
    ')': '01000/00100/00010/00010/00010/00100/01000',
    '[': '01110/01000/01000/01000/01000/01000/01110',
    ']': '01110/00010/00010/00010/00010/00010/01110',
    '<': '00010/00100/01000/10000/01000/00100/00010',
    '>': '01000/00100/00010/00001/00010/00100/01000',
    '%': '11001/11010/00010/00100/01000/01011/10011',
    '#': '01010/01010/11111/01010/11111/01010/01010',
    '*': '00000/10101/01110/11111/01110/10101/00000',
    '_': '00000/00000/00000/00000/00000/00000/11111',
    '=': '00000/00000/11111/00000/11111/00000/00000',
    '@': '01110/10001/10111/10101/10111/10000/01110',
    ' ': '00000/00000/00000/00000/00000/00000/00000',
    '^': '00100/01010/10001/00000/00000/00000/00000',
    '|': '00100/00100/00100/00100/00100/00100/00100',
    '~': '00000/00000/01001/10110/00000/00000/00000'
  };
  const FONT = {};
  for (const ch in FONT_SRC) FONT[ch] = FONT_SRC[ch].split('/');

  function textWidth(text, scale = 1) {
    const s = String(text);
    return Math.max(0, s.length * 6 * scale - scale);
  }

  function drawText(c, text, x, y, opts = {}) {
    const s = String(text).toUpperCase();
    const scale = opts.scale || 1;
    const color = opts.color || '#e9e2cf';
    const align = opts.align || 'left';
    const w = textWidth(s, scale);
    let px = Math.round(align === 'center' ? x - w / 2 : align === 'right' ? x - w : x);
    const py = Math.round(y);
    const prevAlpha = c.globalAlpha;

    if (opts.shadow !== false) {
      c.globalAlpha = prevAlpha * (opts.shadowAlpha ?? 0.7);
      c.fillStyle = opts.shadowColor || '#050607';
      drawGlyphs(c, s, px + scale, py + scale, scale);
      c.globalAlpha = prevAlpha;
    }
    c.fillStyle = color;
    drawGlyphs(c, s, px, py, scale);

    if (opts.outline) {
      c.globalAlpha = prevAlpha * 0.85;
      c.fillStyle = opts.outline;
      const o = Math.max(1, scale * 0.5);
      drawGlyphs(c, s, px - o, py, scale);
      drawGlyphs(c, s, px + o, py, scale);
      drawGlyphs(c, s, px, py - o, scale);
      drawGlyphs(c, s, px, py + o, scale);
      c.globalAlpha = prevAlpha;
      c.fillStyle = color;
      drawGlyphs(c, s, px, py, scale);
    }
    c.globalAlpha = prevAlpha;
  }

  function drawGlyphs(c, s, x, y, scale) {
    for (let i = 0; i < s.length; i++) {
      const g = FONT[s[i]];
      if (!g) {
        c.fillRect(x + i * 6 * scale, y, 5 * scale, 7 * scale);
        continue;
      }
      for (let row = 0; row < 7; row++) {
        const line = g[row];
        for (let col = 0; col < 5; col++) {
          if (line[col] === '1') c.fillRect(x + (i * 6 + col) * scale, y + row * scale, scale, scale);
        }
      }
    }
  }

  // ------------------------------------------------------------
  //  DOM / canvas
  // ------------------------------------------------------------
  const dom = CR.dom = {
    canvas: document.getElementById('game'),
    title: document.getElementById('title-screen'),
    gameover: document.getElementById('gameover-screen'),
    pause: document.getElementById('pause-screen'),
    start: document.getElementById('start-btn'),
    restart: document.getElementById('restart-btn'),
    resume: document.getElementById('resume-btn'),
    mute: document.getElementById('mute-btn'),
    fullscreen: document.getElementById('fullscreen-btn'),
    damage: document.getElementById('fx-damage'),
    frenzy: document.getElementById('fx-frenzy'),
    statWave: document.getElementById('stat-wave'),
    statKills: document.getElementById('stat-kills'),
    statScore: document.getElementById('stat-score'),
    statCombo: document.getElementById('stat-combo')
  };
  const canvas = dom.canvas;
  const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true });

  const view = CR.view = { w: 480, h: 300, scale: 3, dpr: 1 };
  const world = CR.world = { w: 1600, h: 1000 };

  function resize() {
    const vw = Math.max(320, window.innerWidth);
    const vh = Math.max(240, window.innerHeight);
    const portrait = vh > vw;
    let scale;
    if (portrait) {
      // Keep the world view narrow on phones so characters stay readable.
      scale = clamp(vw / 280, 1.35, 2.2);
    } else {
      scale = clamp(Math.round(Math.min(vw, vh) / 300), 2, 4);
      // Very wide/short windows still need a usable horizontal view.
      if (vw / scale < 380) scale = vw / 380;
    }
    view.scale = scale;
    view.w = Math.round(vw / scale);
    view.h = Math.round(vh / scale);
    canvas.width = view.w;
    canvas.height = view.h;
    canvas.style.width = vw + 'px';
    canvas.style.height = vh + 'px';
    ctx.imageSmoothingEnabled = false;
    if (CR.onResize) CR.onResize();
  }

  // ------------------------------------------------------------
  //  input
  // ------------------------------------------------------------
  const input = CR.input = {
    keys: new Set(),
    pressed: new Set(),
    mouse: { x: view.w / 2, y: view.h / 2, wx: 0, wy: 0, down: false, inside: true },
    touch: { active: false, dx: 0, dy: 0, attack: false, dash: false },
    lastMoveAngle: 0
  };

  function pointerToCanvas(e) {
    const r = canvas.getBoundingClientRect();
    return {
      x: (e.clientX - r.left) / r.width * view.w,
      y: (e.clientY - r.top) / r.height * view.h
    };
  }

  function setupInput() {
    window.addEventListener('keydown', e => {
      const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if ([' ', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) e.preventDefault();
      if (!input.keys.has(k)) input.pressed.add(k);
      input.keys.add(k);
    });
    window.addEventListener('keyup', e => {
      const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      input.keys.delete(k);
    });
    window.addEventListener('blur', () => {
      input.keys.clear();
      input.mouse.down = false;
    });
    canvas.addEventListener('pointermove', e => {
      const p = pointerToCanvas(e);
      input.mouse.x = p.x;
      input.mouse.y = p.y;
      input.mouse.inside = true;
    });
    canvas.addEventListener('pointerdown', e => {
      if (e.button === 0) {
        input.mouse.down = true;
        const p = pointerToCanvas(e);
        input.mouse.x = p.x; input.mouse.y = p.y;
        if (CR.sound) CR.sound.unlock();
      }
    });
    window.addEventListener('pointerup', e => {
      if (e.button === 0) input.mouse.down = false;
    });
    canvas.addEventListener('pointerleave', () => { input.mouse.inside = false; });
    canvas.addEventListener('contextmenu', e => e.preventDefault());
    window.addEventListener('pointerdown', e => {
      if (e.pointerType === 'touch') input.touch.active = true;
    }, { passive: true });
  }

  // ------------------------------------------------------------
  //  procedural audio
  // ------------------------------------------------------------
  class SoundEngine {
    constructor() {
      this.ctx = null;
      this.master = null;
      this.muted = false;
      this.started = false;
      this.sawGain = null;
      this.sawOsc = null;
      this.sawOsc2 = null;
      this.sawNoiseGain = null;
      this.noiseBuf = null;
      this.ambient = null;
    }

    makeNoise(seconds = 2) {
      const c = this.ctx;
      const buf = c.createBuffer(1, Math.floor(c.sampleRate * seconds), c.sampleRate);
      const data = buf.getChannelData(0);
      let last = 0;
      for (let i = 0; i < data.length; i++) {
        const white = Math.random() * 2 - 1;
        last = (last + 0.02 * white) / 1.02;
        data[i] = last * 3.5;
      }
      return buf;
    }

    init() {
      if (this.ctx) return;
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      const c = this.ctx = new AC();
      this.master = c.createGain();
      this.master.gain.value = 0.52;
      this.master.connect(c.destination);
      this.noiseBuf = this.makeNoise(2.5);
      this.buildAmbient();
      this.buildSaw();
    }

    unlock() {
      if (!this.ctx) this.init();
      if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume().catch(() => {});
    }

    buildAmbient() {
      const c = this.ctx;
      const ambient = c.createGain();
      ambient.gain.value = 0.16;
      ambient.connect(this.master);

      const wind = c.createBufferSource();
      wind.buffer = this.noiseBuf;
      wind.loop = true;
      const wf = c.createBiquadFilter();
      wf.type = 'lowpass';
      wf.frequency.value = 380;
      wf.Q.value = 0.7;
      const wg = c.createGain();
      wg.gain.value = 0.065;
      wind.connect(wf).connect(wg).connect(ambient);
      wind.start();

      const rain = c.createBufferSource();
      rain.buffer = this.noiseBuf;
      rain.loop = true;
      const rf = c.createBiquadFilter();
      rf.type = 'highpass';
      rf.frequency.value = 2600;
      const rg = c.createGain();
      rg.gain.value = 0.018;
      rain.connect(rf).connect(rg).connect(ambient);
      rain.start();

      [55, 82.5, 110].forEach((f, i) => {
        const o = c.createOscillator();
        o.type = i === 2 ? 'triangle' : 'sine';
        o.frequency.value = f;
        const g = c.createGain();
        g.gain.value = i === 2 ? 0.007 : 0.014;
        o.connect(g).connect(ambient);
        o.start();
        const lfo = c.createOscillator();
        lfo.frequency.value = 0.06 + i * 0.023;
        const lg = c.createGain();
        lg.gain.value = 0.006;
        lfo.connect(lg).connect(g.gain);
        lfo.start();
      });

      this.ambient = ambient;
    }

    buildSaw() {
      const c = this.ctx;
      const gain = this.sawGain = c.createGain();
      gain.gain.value = 0;
      const filter = c.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 760;
      filter.Q.value = 3;
      gain.connect(filter).connect(this.master);

      const o = this.sawOsc = c.createOscillator();
      o.type = 'sawtooth';
      o.frequency.value = 42;
      const g1 = c.createGain();
      g1.gain.value = 0.28;
      o.connect(g1).connect(gain);
      o.start();

      const o2 = this.sawOsc2 = c.createOscillator();
      o2.type = 'square';
      o2.frequency.value = 84;
      const g2 = c.createGain();
      g2.gain.value = 0.08;
      o2.connect(g2).connect(gain);
      o2.start();

      const n = c.createBufferSource();
      n.buffer = this.noiseBuf;
      n.loop = true;
      const nf = c.createBiquadFilter();
      nf.type = 'bandpass';
      nf.frequency.value = 1100;
      nf.Q.value = 0.8;
      const ng = this.sawNoiseGain = c.createGain();
      ng.gain.value = 0.18;
      n.connect(nf).connect(ng).connect(gain);
      n.start();
    }

    setMuted(v) {
      this.muted = v;
      if (this.master) this.master.gain.setTargetAtTime(v ? 0 : 0.52, this.ctx.currentTime, 0.03);
    }

    saw(rev, attacking) {
      if (!this.ctx || !this.sawGain) return;
      const t = this.ctx.currentTime;
      const target = this.started ? (0.005 + rev * 0.045 + (attacking ? 0.025 : 0)) : 0;
      this.sawGain.gain.setTargetAtTime(target, t, 0.04);
      const f = 38 + rev * 34 + (attacking ? 12 : 0);
      this.sawOsc.frequency.setTargetAtTime(f, t, 0.06);
      this.sawOsc2.frequency.setTargetAtTime(f * 2.02, t, 0.06);
      if (this.sawNoiseGain) this.sawNoiseGain.gain.setTargetAtTime(0.1 + rev * 0.16, t, 0.05);
    }

    blip(freq, dur, vol, type = 'square', slide = 0) {
      if (!this.ctx || this.muted) return;
      const c = this.ctx, t = c.currentTime;
      const o = c.createOscillator();
      o.type = type;
      o.frequency.setValueAtTime(freq, t);
      if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq + slide), t + dur);
      const g = c.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(vol, t + 0.006);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g).connect(this.master);
      o.start(t); o.stop(t + dur + 0.02);
    }

    noiseHit(dur, vol, freq, type = 'lowpass') {
      if (!this.ctx || this.muted) return;
      const c = this.ctx, t = c.currentTime;
      const n = c.createBufferSource();
      n.buffer = this.noiseBuf;
      const f = c.createBiquadFilter();
      f.type = type;
      f.frequency.setValueAtTime(freq, t);
      f.frequency.exponentialRampToValueAtTime(Math.max(80, freq * 0.35), t + dur);
      const g = c.createGain();
      g.gain.setValueAtTime(vol, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      n.connect(f).connect(g).connect(this.master);
      n.start(t); n.stop(t + dur + 0.02);
    }

    hit() {
      this.noiseHit(0.13, 0.16, 900, 'bandpass');
      this.blip(110, 0.1, 0.05, 'sine', -60);
    }
    splat() {
      this.noiseHit(0.26, 0.2, 620);
      this.blip(72, 0.18, 0.06, 'sawtooth', -28);
    }
    dismember() {
      this.noiseHit(0.34, 0.24, 420);
      this.blip(58, 0.24, 0.07, 'square', -24);
    }
    growl() {
      if (!this.ctx || this.muted) return;
      const c = this.ctx, t = c.currentTime;
      const o = c.createOscillator();
      o.type = 'sawtooth';
      o.frequency.setValueAtTime(rand(75, 52), t);
      o.frequency.exponentialRampToValueAtTime(rand(42, 32), t + 0.6);
      const f = c.createBiquadFilter();
      f.type = 'lowpass';
      f.frequency.value = 320;
      const g = c.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.055, t + 0.05);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.7);
      o.connect(f).connect(g).connect(this.master);
      o.start(t); o.stop(t + 0.75);
    }
    dash() {
      this.noiseHit(0.22, 0.12, 1800, 'bandpass');
      this.blip(180, 0.16, 0.04, 'sine', 140);
    }
    hurt() {
      this.noiseHit(0.3, 0.2, 300);
      this.blip(82, 0.24, 0.09, 'sawtooth', -38);
    }
    pickup() {
      this.blip(520, 0.08, 0.08, 'square', 120);
      setTimeout(() => this.blip(780, 0.1, 0.07, 'square', 80), 70);
    }
    wave() {
      this.blip(62, 0.55, 0.07, 'sawtooth', 20);
      setTimeout(() => this.blip(82, 0.7, 0.055, 'sawtooth', -18), 160);
    }
    click() {
      this.blip(340, 0.05, 0.06, 'square', 40);
    }
    death() {
      this.noiseHit(0.8, 0.25, 240);
      this.blip(48, 0.9, 0.1, 'sawtooth', -24);
    }
    thunder() {
      this.noiseHit(1.4, 0.18, 180);
    }
    frenzy() {
      this.blip(48, 0.7, 0.1, 'sawtooth', 90);
      setTimeout(() => this.blip(96, 0.8, 0.08, 'sawtooth', 50), 120);
    }
  }

  // ------------------------------------------------------------
  //  state
  // ------------------------------------------------------------
  const state = CR.state = {
    mode: 'menu',
    time: 0,
    gameTime: 0,
    wave: 0,
    waveState: 'idle',
    waveTimer: 0,
    spawnTimer: 0,
    spawnQueue: [],
    remaining: 0,
    score: 0,
    kills: 0,
    combo: 0,
    comboTimer: 0,
    bestCombo: 0,
    boss: null,
    announce: null,
    flash: 0,
    whiteFlash: 0,
    hitstop: 0,
    slowmo: 0,
    shake: 0,
    shakeX: 0,
    shakeY: 0,
    damageFlash: 0,
    lowHealth: false,
    started: false,
    menuCamera: 0,
    lightning: rand(8, 18),
    deaths: 0,
    totalGore: 0,
    bannerTimer: 0,
    touchHint: 0
  };

  const cam = CR.cam = { x: 0, y: 0 };

  CR.zombies = [];
  CR.corpses = [];
  CR.particles = [];
  CR.gibs = [];
  CR.floaters = [];
  CR.pickups = [];
  CR.afterimages = [];
  CR.screenDrops = [];
  CR.rain = [];
  CR.props = [];
  CR.lights = [];
  CR.decorCorpses = [];

  // ------------------------------------------------------------
  //  exports
  // ------------------------------------------------------------
  Object.assign(CR, {
    TAU, clamp, lerp, rand, randInt, pick, dist, angleDiff, approach, mulberry32,
    rr, ellipse, textWidth, drawText, FONT,
    canvas, ctx, view, world, resize, setupInput, input, cam, state,
    SoundEngine
  });
  CR.sound = new SoundEngine();
})();
