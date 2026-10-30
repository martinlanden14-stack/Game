import {
  game, ui, stage, camera, ARENA, VIEW, WORLD, TAU,
  clamp, lerp, rand, chance, pick, roman
} from './core.js';
import { initAudio, sfx } from './audio.js';
import { addBlood, spawnGib, clearDecals } from './fx.js';
import { makePlayer, makeEnemy, spawnEnemy } from './entities.js';
import { showBanner, updateUI, clearPrompt, clearBoss, hideBanner } from './ui.js';

export const torches = [
  { x: 272, y: 226, phase: 0.3 },
  { x: 542, y: 187, phase: 1.8 },
  { x: 810, y: 189, phase: 3.2 },
  { x: 1062, y: 187, phase: 4.1 },
  { x: 1334, y: 228, phase: 2.4 },
  { x: 1338, y: 522, phase: 5.3 },
  { x: 1336, y: 800, phase: 0.9 },
  { x: 1072, y: 835, phase: 3.8 },
  { x: 812, y: 838, phase: 1.1 },
  { x: 552, y: 835, phase: 4.7 },
  { x: 274, y: 798, phase: 2.8 },
  { x: 268, y: 522, phase: 5.9 },
  { x: 610, y: 408, phase: 3.5, big: true },
  { x: 990, y: 408, phase: 1.4, big: true },
  { x: 610, y: 692, phase: 5.1, big: true },
  { x: 990, y: 692, phase: 2.2, big: true }
];

export function buildWave(night) {
  const list = [];
  const count = Math.min(20, 3 + night * 2);
  for (let i = 0; i < count; i += 1) {
    const roll = Math.random();
    if (night >= 4 && roll < 0.13) list.push('knight');
    else if (night >= 3 && roll < 0.25) list.push('priest');
    else if (night >= 2 && roll < 0.42) list.push('archer');
    else if (night >= 2 && roll < 0.7) list.push('guard');
    else list.push('villager');
  }
  if (night % 4 === 0) list.push('warden');
  for (let i = list.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = list[i];
    list[i] = list[j];
    list[j] = temp;
  }
  return list;
}

function initFireflies() {
  if (game.fireflies.length) return;
  for (let i = 0; i < 22; i += 1) {
    game.fireflies.push({
      ox: rand(ARENA.x + 20, ARENA.x + ARENA.w - 20),
      oy: rand(ARENA.y + 30, ARENA.y + ARENA.h - 10),
      x: 0,
      y: 0,
      phase: rand(0, TAU),
      speed: rand(0.35, 0.9),
      rangeX: rand(8, 30),
      rangeY: rand(5, 18)
    });
  }
  game.fireflies.forEach(function (fly) {
    fly.x = fly.ox;
    fly.y = fly.oy;
  });
}

export function clearWorld() {
  game.enemies = [];
  game.gibs = [];
  game.projectiles = [];
  game.particles = [];
  game.texts = [];
  game.slashes = [];
  game.afterimages = [];
  game.spawnQueue = [];
  game.boss = null;
  game.comboHits = 0;
  game.comboTimer = 0;
  game.shake = 0;
  game.shakeX = 0;
  game.shakeY = 0;
  game.hitstop = 0;
  game.damageVignette = 0;
  game.flash = 0;
  game.bannerTimer = 0;
  clearDecals();
  clearPrompt();
  clearBoss();
  hideBanner();
}

export function setupAttract() {
  clearWorld();
  initFireflies();
  game.state = 'title';
  game.time = 0;
  game.night = 1;
  game.kills = 0;
  game.souls = 0;
  game.eaten = 0;
  game.player = makePlayer();
  game.player.x = ARENA.x + ARENA.w * 0.51;
  game.player.y = ARENA.y + ARENA.h * 0.68;
  game.player.aimAngle = -Math.PI * 0.5;
  game.player.roar = 0.4;
  game.player.size = 1.34;

  [
    ['villager', 632, 462, -1],
    ['villager', 962, 486, 1],
    ['villager', 850, 728, 1],
    ['guard', 704, 720, -1]
  ].forEach(function (spot) {
    const enemy = makeEnemy(spot[0], spot[1], spot[2], true);
    enemy.dormant = true;
    enemy.tremble = rand(0, TAU);
    game.enemies.push(enemy);
  });

  [
    [746, 610, 'torso'],
    [716, 642, 'arm'],
    [798, 660, 'head'],
    [866, 646, 'leg'],
    [876, 612, 'arm']
  ].forEach(function (g, i) {
    spawnGib(g[0], g[1], g[2], 0, 0, 1);
    const gib = game.gibs[game.gibs.length - 1];
    gib.rest = true;
    gib.vx = 0;
    gib.vy = 0;
    gib.rot = rand(-0.5, 0.5) + (i % 2 ? 0.2 : -0.15);
    gib.life = 99999;
  });

  for (let i = 0; i < 9; i += 1) addBlood(rand(680, 910), rand(566, 706), rand(2, 6), i < 4);

  game.player.hp = game.player.maxHp;
  camera.x = game.player.x - VIEW.w / 2;
  camera.y = game.player.y - VIEW.h / 2 - VIEW.h * 0.14;
  updateCamera(0, true);
  stage.classList.add('is-menu');
  stage.classList.remove('is-playing', 'is-dead');
  ui.death.hidden = true;
  ui.death.setAttribute('aria-hidden', 'true');
  ui.menu.setAttribute('aria-hidden', 'false');
  updateUI();
}

export function startGame() {
  initAudio();
  clearWorld();
  initFireflies();
  game.state = 'playing';
  game.time = 0;
  game.night = 1;
  game.kills = 0;
  game.souls = 0;
  game.eaten = 0;
  game.waveActive = false;
  game.betweenTimer = 0;
  game.player = makePlayer();
  game.player.x = ARENA.x + ARENA.w * 0.5;
  game.player.y = ARENA.y + ARENA.h * 0.55;
  camera.x = game.player.x - VIEW.w / 2;
  camera.y = game.player.y - VIEW.h / 2;
  updateCamera(0, true);
  stage.classList.remove('is-menu', 'is-dead');
  stage.classList.add('is-playing');
  ui.menu.setAttribute('aria-hidden', 'true');
  ui.death.hidden = true;
  ui.death.setAttribute('aria-hidden', 'true');
  game.player.roar = 0.65;
  game.player.bloodlust = 9;
  game.shake = 5;
  for (let i = 0; i < 5; i += 1) {
    const a = rand(0, TAU);
    const d = rand(28, 54);
    spawnGib(
      game.player.x + Math.cos(a) * d,
      game.player.y + Math.sin(a) * d * 0.7,
      ['head', 'arm', 'leg', 'torso', 'arm'][i],
      i === 3 ? 3 : 1,
      i === 3 ? 6 : 3,
      i === 3 ? 1.1 : 0.95
    );
    addBlood(game.player.x + Math.cos(a) * d, game.player.y + Math.sin(a) * d * 0.7, 4, i === 3);
  }
  sfx('roar');
  startWave(1);
  updateUI();
}

export function startWave(night) {
  game.night = night;
  game.waveActive = true;
  game.spawnQueue = buildWave(night);
  game.waveTotal = game.spawnQueue.length;
  game.spawnTimer = 0.35;
  game.betweenTimer = 0;
  if (night === 1) {
    for (let i = 0; i < 3; i += 1) spawnEnemy(game.spawnQueue.shift());
  }
  const bossNight = night % 4 === 0;
  showBanner(
    'NIGHT ' + roman(night),
    bossNight ? 'THE WARDEN WAKES' : (night === 1 ? 'THE HUNT BEGINS' : 'THE VILLAGE STIRS'),
    bossNight ? 'A wall of iron stands between you and the feast.' : (night === 1 ? 'Rip them apart. Devour what remains.' : 'They have brought more meat.'),
    3
  );
  sfx('wave');
  updateUI();
}

export function updateCamera(dt, snap) {
  if (!game.player) return;
  const p = game.player;
  let tx = p.x - VIEW.w / 2 + Math.cos(p.aimAngle) * 18;
  let ty = p.y - VIEW.h / 2 + Math.sin(p.aimAngle) * 12;
  if (game.state === 'title') {
    tx = p.x - VIEW.w / 2;
    ty = p.y - VIEW.h / 2 - VIEW.h * 0.14;
  }
  const maxX = Math.max(0, WORLD.w - VIEW.w);
  const maxY = Math.max(0, WORLD.h - VIEW.h);
  tx = clamp(tx, 0, maxX);
  ty = clamp(ty, 0, maxY);
  if (snap || dt <= 0) {
    camera.x = tx;
    camera.y = ty;
  } else {
    const follow = 1 - Math.pow(0.0001, dt);
    camera.x = lerp(camera.x, tx, follow);
    camera.y = lerp(camera.y, ty, follow);
  }
}

export function updateWaves(dt) {
  if (game.state !== 'playing') return;
  if (!game.waveActive) {
    if (game.betweenTimer > 0) {
      game.betweenTimer -= dt;
      if (game.betweenTimer <= 0) startWave(game.night + 1);
    }
    return;
  }
  if (game.spawnQueue.length > 0) {
    game.spawnTimer -= dt;
    if (game.spawnTimer <= 0) {
      const type = game.spawnQueue.shift();
      spawnEnemy(type);
      game.spawnTimer = type === 'warden' ? 1.1 : rand(0.18, 0.38);
    }
  }
  const alive = game.enemies.filter(function (enemy) { return !enemy.dead; }).length;
  if (game.spawnQueue.length === 0 && alive === 0) {
    game.waveActive = false;
    game.betweenTimer = 4.8;
    game.boss = null;
    clearBoss();
    showBanner('THE SCREAMING STOPS', 'NIGHT ' + roman(game.night) + ' CLEARED', 'Gorge on the remains. The next night is already coming.', 3.6);
    game.shake = Math.max(game.shake, 4);
    sfx('wave');
  }
}

export function updateAmbient(dt) {
  for (let i = 0; i < game.fireflies.length; i += 1) {
    const fly = game.fireflies[i];
    fly.phase += dt * fly.speed;
    fly.x = fly.ox + Math.sin(fly.phase) * fly.rangeX;
    fly.y = fly.oy + Math.cos(fly.phase * 0.73) * fly.rangeY;
  }
  if (chance(dt * 4) && torches.length) {
    const t = pick(torches);
    game.particles.push({
      x: t.x + rand(-4, 4),
      y: t.y - rand(17, 25),
      vx: rand(-6, 6),
      vy: rand(-24, -10),
      life: rand(0.4, 1.1),
      maxLife: 1.1,
      size: rand(1, 2),
      color: chance(0.5) ? '#ffb74d' : '#ffdb85',
      drag: 1,
      gravity: -8
    });
  }
  if (game.state === 'title' && game.player) {
    const p = game.player;
    p.walk += dt * 1.1;
    for (let i = 0; i < game.enemies.length; i += 1) {
      const enemy = game.enemies[i];
      if (enemy.dormant) enemy.tremble += dt * 1.9;
    }
    if (chance(dt * 0.32)) {
      p.roar = 0.45;
      game.shake = Math.max(game.shake, 2.5);
    }
  }
}
