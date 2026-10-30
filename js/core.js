export const WORLD = { w: 1600, h: 1000 };
export const ARENA = { x: 210, y: 160, w: 1180, h: 690 };
export const TAU = Math.PI * 2;
export const FRENZY_TIME = 8;
export const VIEW = { w: 640, h: 400, scale: 2 };

export const canvas = document.getElementById('game');
export const ctx = canvas.getContext('2d', { alpha: false });
export const lightCanvas = document.createElement('canvas');
export const lightCtx = lightCanvas.getContext('2d');
export const bgCanvas = document.createElement('canvas');
export const decalCanvas = document.createElement('canvas');
export const decalCtx = decalCanvas.getContext('2d');

export const stage = document.getElementById('stage');

export const ui = {
  level: document.getElementById('levelValue'),
  hpFill: document.getElementById('hpFill'),
  hpText: document.getElementById('hpText'),
  xpFill: document.getElementById('xpFill'),
  xpText: document.getElementById('xpText'),
  lustFill: document.getElementById('lustFill'),
  lustText: document.getElementById('lustText'),
  night: document.getElementById('nightValue'),
  prey: document.getElementById('preyValue'),
  souls: document.getElementById('soulsValue'),
  combo: document.getElementById('combo'),
  comboNum: document.getElementById('comboNum'),
  prompt: document.getElementById('devourPrompt'),
  promptText: document.querySelector('#devourPrompt span'),
  banner: document.getElementById('banner'),
  bannerKicker: document.getElementById('bannerKicker'),
  bannerTitle: document.getElementById('bannerTitle'),
  bannerSub: document.getElementById('bannerSub'),
  bossBar: document.getElementById('bossBar'),
  bossName: document.getElementById('bossName'),
  bossFill: document.getElementById('bossFill'),
  menu: document.getElementById('menu'),
  death: document.getElementById('deathScreen'),
  deathNight: document.getElementById('deathNight'),
  deathSouls: document.getElementById('deathSouls'),
  deathLevel: document.getElementById('deathLevel'),
  deathEaten: document.getElementById('deathEaten'),
  damageFlash: document.getElementById('damageFlash'),
  sound: document.getElementById('soundToggle'),
  play: document.getElementById('playButton'),
  again: document.getElementById('againButton'),
  stickZone: document.getElementById('stickZone'),
  stickKnob: document.getElementById('stickKnob'),
  touchRip: document.getElementById('touchRip'),
  touchEat: document.getElementById('touchEat'),
  touchDash: document.getElementById('touchDash'),
  hud: document.getElementById('hud'),
  legend: document.getElementById('controlsLegend')
};

export const camera = { x: 0, y: 0 };

export const keyState = Object.create(null);
export const pointer = { x: 0, y: 0, wx: 0, wy: 0, active: false, down: false };
export const touchMove = { x: 0, y: 0, active: false, id: null };

export const PALETTE = {
  ground: '#101018',
  grass: ['#13151d', '#171a22', '#1b1c24', '#1e1922', '#121018'],
  stone: ['#282531', '#2d2937', '#25222e', '#312c3a', '#211e29'],
  stoneLine: '#17151e',
  blood: ['#5a0f1e', '#761426', '#941a2e', '#b22239', '#410812'],
  red: '#c92a45',
  redHot: '#f24c64',
  bone: '#dbc9a6',
  boneDark: '#9e8a6d',
  skin: ['#c59265', '#a97554', '#d9a778', '#8c624b', '#b9855d'],
  violet: '#9b6dff',
  fire: '#ffad4e',
  fireHot: '#ffe08a',
  green: '#9fce6e'
};

export const TYPES = {
  villager: {
    hp: 26, speed: 47, damage: 6, reach: 25, windup: 0.44, cooldown: 1.05,
    xp: 7, gibs: 3, value: 10, radius: 7, label: 'VILLAGER'
  },
  guard: {
    hp: 52, speed: 41, damage: 10, reach: 30, windup: 0.5, cooldown: 1.15,
    xp: 10, gibs: 4, value: 18, radius: 8, label: 'WATCHMAN'
  },
  archer: {
    hp: 30, speed: 45, damage: 8, reach: 175, windup: 0.62, cooldown: 1.9,
    xp: 9, gibs: 3, value: 16, radius: 7, ranged: true, label: 'HUNTER'
  },
  priest: {
    hp: 38, speed: 39, damage: 6, reach: 34, windup: 0.55, cooldown: 1.5,
    xp: 10, gibs: 3, value: 20, radius: 7, healer: true, label: 'PRIEST'
  },
  knight: {
    hp: 86, speed: 34, damage: 15, reach: 36, windup: 0.65, cooldown: 1.25,
    xp: 15, gibs: 5, value: 30, radius: 9, label: 'KNIGHT'
  },
  warden: {
    hp: 320, speed: 35, damage: 22, reach: 44, windup: 0.8, cooldown: 1.5,
    xp: 55, gibs: 8, value: 120, radius: 13, boss: true, label: 'THE WARDEN'
  }
};

export const game = {
  state: 'title',
  time: 0,
  loopTime: 0,
  night: 1,
  player: null,
  enemies: [],
  gibs: [],
  projectiles: [],
  particles: [],
  texts: [],
  slashes: [],
  afterimages: [],
  fireflies: [],
  torches: [],
  spawnQueue: [],
  spawnTimer: 0,
  waveActive: false,
  waveTotal: 0,
  betweenTimer: 0,
  boss: null,
  kills: 0,
  souls: 0,
  eaten: 0,
  comboHits: 0,
  comboTimer: 0,
  shake: 0,
  shakeX: 0,
  shakeY: 0,
  hitstop: 0,
  damageVignette: 0,
  flash: 0,
  flashColor: '255,255,255',
  bannerTimer: 0,
  promptPulse: 0,
  mood: 0,
  lastTime: 0
};

export function clamp(value, min, max) {
  return value < min ? min : value > max ? max : value;
}

export function lerp(a, b, t) {
  return a + (b - a) * t;
}

export function rand(min, max) {
  return min + Math.random() * (max - min);
}

export function randInt(min, max) {
  return Math.floor(rand(min, max + 1));
}

export function chance(p) {
  return Math.random() < p;
}

export function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

export function angleDiff(a, b) {
  let d = (a - b + Math.PI) % TAU;
  if (d < 0) d += TAU;
  return d - Math.PI;
}

export function dist(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

export function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function roman(n) {
  const nums = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV'];
  return nums[n] || String(n);
}

export function insideArena(x, y, pad) {
  const p = pad || 0;
  return x >= ARENA.x + p && x <= ARENA.x + ARENA.w - p && y >= ARENA.y + p && y <= ARENA.y + ARENA.h - p;
}

export function clampArena(entity, pad) {
  const p = pad || 0;
  entity.x = clamp(entity.x, ARENA.x + p, ARENA.x + ARENA.w - p);
  entity.y = clamp(entity.y, ARENA.y + p, ARENA.y + ARENA.h - p);
}

export function setText(element, value) {
  const text = String(value);
  if (element.textContent !== text) element.textContent = text;
}
