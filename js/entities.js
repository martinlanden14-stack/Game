import {
  game, ui, stage, ARENA, TAU, FRENZY_TIME, TYPES, PALETTE, pointer,
  clamp, clampArena, rand, chance, pick, angleDiff, roman
} from './core.js';
import { sfx } from './audio.js';
import { spawnGib, spawnMist, addBlood, addFloat } from './fx.js';
import { showBanner, setBoss, clearBoss, hideBanner, clearPrompt } from './ui.js';

export function makePlayer() {
  return {
    x: ARENA.x + ARENA.w * 0.5,
    y: ARENA.y + ARENA.h * 0.58,
    r: 10,
    hp: 100,
    maxHp: 100,
    speed: 128,
    damage: 9,
    reach: 39,
    level: 1,
    xp: 0,
    xpNext: 16,
    aimAngle: Math.PI * 0.5,
    moveAngle: Math.PI * 0.5,
    attackAngle: Math.PI * 0.5,
    attackTime: 0,
    attackCd: 0,
    comboStep: 0,
    comboWindow: 0,
    invuln: 0,
    dashTime: 0,
    dashCd: 0,
    dashAngle: 0,
    hitFlash: 0,
    walk: 0,
    moving: false,
    size: 1,
    bloodlust: 0,
    frenzy: 0,
    eatCd: 0,
    devourGlow: 0,
    roar: 0,
    stepDust: 0
  };
}

export function makeEnemy(type, x, y, dormant) {
  const def = TYPES[type];
  const scale = 1 + Math.max(0, game.night - 1) * (def.boss ? 0.11 : 0.075);
  const hp = Math.round(def.hp * scale);
  return {
    type: type,
    def: def,
    x: x,
    y: y,
    r: def.radius,
    hp: hp,
    maxHp: hp,
    speed: def.speed * (1 + Math.min(0.22, (game.night - 1) * 0.012)),
    damage: def.damage + Math.floor((game.night - 1) * 1.1),
    reach: def.reach,
    windup: def.windup,
    cooldown: def.cooldown,
    attackCd: rand(0.1, 0.5),
    state: 'chase',
    timer: 0,
    stun: 0,
    hitFlash: 0,
    walk: rand(0, TAU),
    facing: 1,
    vx: 0,
    vy: 0,
    limbs: def.gibs,
    maxLimbs: def.gibs,
    dead: false,
    dormant: !!dormant,
    tremble: rand(0, TAU),
    swing: 0,
    special: false,
    specialCount: 0,
    bleed: 0,
    flee: false,
    healCd: rand(2, 4),
    dashHit: false,
    attackAngle: 0,
    label: def.label,
    boss: !!def.boss
  };
}

export function spawnEnemy(type, x, y) {
  const def = TYPES[type];
  let px = x;
  let py = y;
  if (px === undefined) {
    const angle = rand(0, TAU);
    const radius = type === 'warden' ? rand(180, 250) : game.night === 1 ? rand(105, 165) : rand(185, 310);
    px = clamp(game.player.x + Math.cos(angle) * radius, ARENA.x + 50, ARENA.x + ARENA.w - 50);
    py = clamp(game.player.y + Math.sin(angle) * radius, ARENA.y + 50, ARENA.y + ARENA.h - 50);
  }
  const enemy = makeEnemy(type, px, py);
  game.enemies.push(enemy);
  spawnMist(px, py, def.boss ? 26 : 11);
  if (def.boss) {
    game.boss = enemy;
    setBoss(def.label);
    game.shake = Math.max(game.shake, 9);
    addFloat('THE WARDEN', px, py - 48, '#f2c8c8', 8);
  }
  return enemy;
}

export function makePlayerAttackAngle() {
  if (pointer.active) {
    return Math.atan2(pointer.wy - game.player.y, pointer.wx - game.player.x);
  }
  let best = null;
  let bestDist = 270;
  for (let i = 0; i < game.enemies.length; i += 1) {
    const enemy = game.enemies[i];
    if (enemy.dead || enemy.dormant) continue;
    const d = Math.hypot(enemy.x - game.player.x, enemy.y - game.player.y) - enemy.r;
    if (d < bestDist) {
      bestDist = d;
      best = enemy;
    }
  }
  if (best) return Math.atan2(best.y - game.player.y, best.x - game.player.x);
  return game.player.aimAngle;
}

export function performAttack() {
  const p = game.player;
  if (!p || p.attackCd > 0 || p.dashTime > 0) return;
  p.aimAngle = makePlayerAttackAngle();
  p.attackAngle = p.aimAngle;
  const chain = p.comboWindow > 0 ? (p.comboStep % 3) + 1 : 1;
  p.comboStep = chain;
  p.comboWindow = 0.9;
  p.attackTime = 0.18;
  p.attackCd = (p.frenzy > 0 ? 0.18 : 0.27) + (chain === 3 ? 0.09 : 0);
  const arc = chain === 3 ? 1.38 : 1.06;
  const reach = p.reach + (chain === 3 ? 9 : 0);
  const raw = p.damage * (1 + (chain - 1) * 0.2) * (p.frenzy > 0 ? 1.4 : 1);
  game.slashes.push({
    x: p.x,
    y: p.y - 13,
    angle: p.attackAngle,
    radius: reach,
    time: 0,
    life: chain === 3 ? 0.3 : 0.2,
    arc: arc,
    chain: chain,
    hostile: false
  });
  let hits = 0;
  for (let i = 0; i < game.enemies.length; i += 1) {
    const enemy = game.enemies[i];
    if (enemy.dead || enemy.dormant) continue;
    const dx = enemy.x - p.x;
    const dy = enemy.y - p.y;
    const d = Math.hypot(dx, dy);
    if (d > reach + enemy.r) continue;
    const a = Math.atan2(dy, dx);
    const spread = Math.abs(angleDiff(a, p.attackAngle));
    if (spread > arc || (d > 15 && spread > arc * 0.86)) continue;
    hits += 1;
    const crit = chance(0.14 + p.level * 0.008);
    let damage = raw * rand(0.9, 1.12);
    if (crit) damage *= 1.7;
    hurtEnemy(enemy, damage, a, crit, chain);
  }
  if (hits > 0) {
    game.hitstop = Math.max(game.hitstop, chain === 3 ? 0.055 : 0.022);
    game.shake = Math.max(game.shake, chain === 3 ? 5 : 2.2);
    sfx('hit');
    if (hits > 1) addFloat('REND', p.x, p.y - 56, '#f4d7a3', 6);
  } else {
    sfx('slash');
  }
  if (chain === 3) {
    for (let i = 0; i < 10; i += 1) {
      const a = rand(0, TAU);
      game.particles.push({
        x: p.x + Math.cos(a) * rand(4, 26),
        y: p.y - 14 + Math.sin(a) * rand(3, 18),
        vx: Math.cos(a) * rand(10, 60),
        vy: Math.sin(a) * rand(10, 60) - 20,
        life: rand(0.2, 0.45),
        maxLife: 0.45,
        size: rand(1, 2),
        color: '#a9c7ff',
        drag: 4,
        gravity: 20
      });
    }
  }
}

export function hurtEnemy(enemy, damage, angle, crit, chain) {
  if (enemy.dead) return;
  const dmg = Math.max(1, Math.round(damage));
  enemy.hp -= dmg;
  enemy.hitFlash = 0.12;
  enemy.stun = Math.max(enemy.stun, 0.12 + (chain === 3 ? 0.1 : 0));
  enemy.vx += Math.cos(angle) * (chain === 3 ? 210 : 135);
  enemy.vy += Math.sin(angle) * (chain === 3 ? 210 : 135);
  enemy.facing = Math.cos(angle) > 0 ? 1 : -1;
  addBlood(enemy.x, enemy.y, crit ? 8 : 4, crit || chain === 3);
  for (let i = 0; i < (crit ? 13 : 7); i += 1) {
    const a = angle + rand(-0.85, 0.85);
    const speed = rand(28, 130);
    game.particles.push({
      x: enemy.x + rand(-3, 3),
      y: enemy.y - rand(4, 15),
      vx: Math.cos(a) * speed,
      vy: Math.sin(a) * speed - rand(0, 30),
      life: rand(0.25, 0.7),
      maxLife: 0.7,
      size: rand(1, 3),
      color: pick(PALETTE.blood),
      drag: 2.5,
      gravity: 65
    });
  }
  addFloat((crit ? 'CRIT ' : '') + dmg, enemy.x + rand(-5, 5), enemy.y - 22, crit ? '#ffd373' : '#f0d8d0', crit ? 7 : 5);
  game.comboHits += 1;
  game.comboTimer = 2.4;
  game.player.bloodlust = Math.min(100, game.player.bloodlust + (crit ? 8 : 5));
  game.shake = Math.max(game.shake, crit ? 4 : 1.8);
  if (enemy.hp <= 0) {
    killEnemy(enemy, angle);
    return;
  }
  const dismemberChance = 0.2 + chain * 0.08 + game.player.level * 0.006 + (crit ? 0.12 : 0);
  if (enemy.limbs > 0 && chance(dismemberChance)) {
    enemy.limbs -= 1;
    enemy.hp -= Math.max(1, Math.round(damage * 0.18));
    enemy.stun = Math.max(enemy.stun, 0.35);
    enemy.bleed += 2.2;
    const kind = chance(0.5) ? 'arm' : 'leg';
    spawnGib(enemy.x + Math.cos(angle) * 7, enemy.y - 8, kind, Math.max(1, Math.round(enemy.def.xp * 0.1)), 3, 0.9);
    addFloat('RIPPED', enemy.x, enemy.y - 30, '#e85167', 5);
    addBlood(enemy.x, enemy.y, 7, true);
    for (let i = 0; i < 8; i += 1) {
      const a = angle + rand(-0.7, 0.7);
      game.particles.push({
        x: enemy.x,
        y: enemy.y - 9,
        vx: Math.cos(a) * rand(35, 120),
        vy: Math.sin(a) * rand(35, 120) - 20,
        life: rand(0.25, 0.6),
        maxLife: 0.6,
        size: rand(1, 3),
        color: pick(PALETTE.blood),
        drag: 2.6,
        gravity: 70
      });
    }
    sfx('rip');
    if (enemy.hp <= 0) killEnemy(enemy, angle);
  }
}

export function killEnemy(enemy, angle) {
  if (enemy.dead) return;
  enemy.dead = true;
  addBlood(enemy.x, enemy.y, 18, true);
  const poolAngle = angle || rand(0, TAU);
  for (let i = 0; i < 24; i += 1) {
    const a = poolAngle + rand(-1.8, 1.8);
    const speed = rand(28, 185);
    game.particles.push({
      x: enemy.x + rand(-4, 4),
      y: enemy.y - rand(0, 14),
      vx: Math.cos(a) * speed,
      vy: Math.sin(a) * speed - rand(0, 40),
      life: rand(0.3, 1),
      maxLife: 1,
      size: rand(1, 4),
      color: pick(PALETTE.blood),
      drag: 2.2,
      gravity: 90
    });
  }
  const gibs = Math.max(2, enemy.limbs + 1);
  const kinds = ['head', 'torso', 'arm', 'leg', 'arm', 'leg', 'torso', 'arm', 'leg', 'head'];
  for (let i = 0; i < gibs; i += 1) {
    let kind = kinds[i % kinds.length];
    if (i === 0) kind = 'head';
    if (i === 1) kind = 'torso';
    const xpValue = Math.max(1, Math.round(enemy.def.xp * (kind === 'torso' ? 0.34 : kind === 'head' ? 0.28 : 0.17)));
    const heal = kind === 'torso' ? 7 : kind === 'head' ? 5 : 3;
    spawnGib(
      enemy.x + rand(-7, 7),
      enemy.y - rand(4, 16),
      kind,
      xpValue,
      heal,
      enemy.boss ? 1.8 : 1
    );
  }
  game.kills += 1;
  game.souls += enemy.def.value + game.comboHits;
  game.player.bloodlust = Math.min(100, game.player.bloodlust + (enemy.boss ? 45 : 10));
  game.comboHits += 1;
  game.comboTimer = 2.7;
  game.shake = Math.max(game.shake, enemy.boss ? 14 : 7);
  game.hitstop = Math.max(game.hitstop, enemy.boss ? 0.14 : 0.06);
  addFloat('+' + (enemy.def.value + game.comboHits) + ' SOUL', enemy.x, enemy.y - 38, '#f0cda7', enemy.boss ? 8 : 5);
  sfx('kill');
  if (enemy.boss) {
    game.boss = null;
    clearBoss();
    showBanner('THE WARDEN FALLS', 'IRON TASTES LIKE MEAT', 'The village has no more walls.', 3.2);
    for (let i = 0; i < 30; i += 1) {
      const a = rand(0, TAU);
      game.particles.push({
        x: enemy.x,
        y: enemy.y - 10,
        vx: Math.cos(a) * rand(30, 220),
        vy: Math.sin(a) * rand(30, 220) - 30,
        life: rand(0.3, 1.2),
        maxLife: 1.2,
        size: rand(1, 4),
        color: pick(['#f0cda7', '#c92a45', '#6b5e73', '#dbc9a6']),
        drag: 2,
        gravity: 95
      });
    }
  }
}

export function tryDash() {
  const p = game.player;
  if (!p || game.state !== 'playing' || p.dashCd > 0) return;
  let mx = 0;
  let my = 0;
  if (game.keyMove) {
    mx = game.keyMove.x;
    my = game.keyMove.y;
  }
  if (mx === 0 && my === 0) {
    mx = Math.cos(p.aimAngle);
    my = Math.sin(p.aimAngle);
  }
  const a = Math.atan2(my, mx);
  p.dashAngle = a;
  p.dashTime = 0.17;
  p.dashCd = 1.15;
  p.invuln = Math.max(p.invuln, 0.28);
  p.aimAngle = a;
  game.enemies.forEach(function (enemy) { enemy.dashHit = false; });
  for (let i = 0; i < 8; i += 1) {
    game.particles.push({
      x: p.x + rand(-6, 6),
      y: p.y - rand(0, 10),
      vx: Math.cos(a + Math.PI) * rand(15, 60),
      vy: Math.sin(a + Math.PI) * rand(15, 60),
      life: rand(0.2, 0.45),
      maxLife: 0.45,
      size: rand(1, 3),
      color: '#6d4c91',
      drag: 4,
      gravity: 0
    });
  }
  sfx('dash');
  game.shake = Math.max(game.shake, 2);
}

export function damagePlayer(amount, angle) {
  const p = game.player;
  if (!p || p.invuln > 0 || game.state !== 'playing') return;
  const dmg = Math.max(2, Math.round(amount));
  p.hp -= dmg;
  p.invuln = 0.72;
  p.hitFlash = 0.24;
  p.bloodlust = Math.min(100, p.bloodlust + 4);
  game.damageVignette = 1;
  game.shake = Math.max(game.shake, 9);
  game.hitstop = Math.max(game.hitstop, 0.04);
  addFloat('-' + dmg, p.x, p.y - 48, '#ff6674', 6);
  addBlood(p.x, p.y, 8, true);
  for (let i = 0; i < 14; i += 1) {
    const a = angle + rand(-1, 1);
    game.particles.push({
      x: p.x,
      y: p.y - 14,
      vx: Math.cos(a) * rand(20, 100),
      vy: Math.sin(a) * rand(20, 100) - 20,
      life: rand(0.25, 0.65),
      maxLife: 0.65,
      size: rand(1, 3),
      color: pick(PALETTE.blood),
      drag: 2.4,
      gravity: 65
    });
  }
  sfx('hurt');
  if (p.hp <= 0) die();
}

export function die() {
  const p = game.player;
  p.hp = 0;
  game.state = 'dead';
  game.shake = 14;
  game.hitstop = 0.18;
  hideBanner();
  clearPrompt();
  stage.classList.remove('is-playing');
  stage.classList.add('is-dead');
  ui.deathNight.textContent = roman(game.night);
  ui.deathSouls.textContent = String(game.souls);
  ui.deathLevel.textContent = String(p.level);
  ui.deathEaten.textContent = String(game.eaten);
  ui.death.hidden = false;
  ui.death.setAttribute('aria-hidden', 'false');
  sfx('roar');
}

export function triggerFrenzy() {
  const p = game.player;
  if (!p || p.frenzy > 0) return;
  p.frenzy = FRENZY_TIME;
  p.bloodlust = 100;
  game.shake = Math.max(game.shake, 10);
  game.hitstop = Math.max(game.hitstop, 0.12);
  game.flash = 0.7;
  game.flashColor = '180,52,90';
  showBanner('BLOODLUST', 'TEAR THEM OPEN', 'Your body remembers what it is.', 2.4);
  addFloat('BLOODLUST', p.x, p.y - 64, '#ffb74d', 8);
  sfx('frenzy');
  for (let i = 0; i < 18; i += 1) {
    const a = rand(0, TAU);
    game.particles.push({
      x: p.x,
      y: p.y - 16,
      vx: Math.cos(a) * rand(20, 90),
      vy: Math.sin(a) * rand(20, 90),
      life: rand(0.3, 0.8),
      maxLife: 0.8,
      size: rand(1, 3),
      color: pick(['#ffb74d', '#f24c64', '#8b1731']),
      drag: 2.5,
      gravity: -10
    });
  }
}

export function gainXp(amount) {
  const p = game.player;
  p.xp += amount;
  while (p.xp >= p.xpNext) {
    p.xp -= p.xpNext;
    p.level += 1;
    p.xpNext = Math.floor(16 * Math.pow(p.level, 1.36));
    p.maxHp += 20;
    p.hp = Math.min(p.maxHp, p.hp + Math.round(p.maxHp * 0.32));
    p.damage += 2.4;
    p.speed += 3;
    p.reach += 1.5;
    p.size = Math.min(1.46, 1 + (p.level - 1) * 0.045);
    game.flash = 1;
    game.flashColor = '150,92,255';
    game.shake = Math.max(game.shake, 8);
    addFloat('EVOLUTION', p.x, p.y - 72, '#d8c4ff', 9);
    for (let i = 0; i < 30; i += 1) {
      const a = rand(0, TAU);
      game.particles.push({
        x: p.x,
        y: p.y - 18,
        vx: Math.cos(a) * rand(20, 160),
        vy: Math.sin(a) * rand(20, 160) - 20,
        life: rand(0.35, 1.1),
        maxLife: 1.1,
        size: rand(1, 4),
        color: pick(['#d8c4ff', '#9b6dff', '#f0e2c4', '#f24c64']),
        drag: 2.2,
        gravity: 10
      });
    }
    if (ui.level.animate) {
      ui.level.animate(
        [{ transform: 'scale(1)' }, { transform: 'scale(1.7)' }, { transform: 'scale(1)' }],
        { duration: 420, easing: 'steps(3, end)' }
      );
    }
    sfx('level');
  }
}

export function eatGib(gib) {
  const p = game.player;
  const index = game.gibs.indexOf(gib);
  if (index === -1) return;
  game.gibs.splice(index, 1);
  p.hp = Math.min(p.maxHp, p.hp + gib.heal);
  game.eaten += 1;
  p.bloodlust = Math.min(100, p.bloodlust + 7);
  gainXp(gib.xp);
  addFloat('+' + gib.xp + ' XP', gib.x, gib.y - 8, '#bca6ff', 5);
  if (gib.heal > 3) addFloat('+' + gib.heal, gib.x + 12, gib.y - 1, '#a6cf6e', 4);
  for (let i = 0; i < 8; i += 1) {
    const a = rand(0, TAU);
    game.particles.push({
      x: gib.x,
      y: gib.y,
      vx: Math.cos(a) * rand(16, 72),
      vy: Math.sin(a) * rand(16, 72),
      life: rand(0.18, 0.45),
      maxLife: 0.45,
      size: rand(1, 2),
      color: pick(['#b4213e', '#f24c64', '#dbc9a6']),
      drag: 3,
      gravity: 30
    });
  }
  p.devourGlow = 0.3;
  sfx('eat');
}

export function updatePlayer(dt, input) {
  const p = game.player;
  if (!p) return;
  p.attackCd = Math.max(0, p.attackCd - dt);
  p.comboWindow = Math.max(0, p.comboWindow - dt);
  p.attackTime = Math.max(0, p.attackTime - dt);
  p.invuln = Math.max(0, p.invuln - dt);
  p.dashCd = Math.max(0, p.dashCd - dt);
  p.hitFlash = Math.max(0, p.hitFlash - dt);
  p.devourGlow = Math.max(0, p.devourGlow - dt);
  p.roar = Math.max(0, p.roar - dt);
  p.eatCd = Math.max(0, p.eatCd - dt);

  if (pointer.active) {
    p.aimAngle = Math.atan2(pointer.wy - p.y, pointer.wx - p.x);
  } else {
    p.aimAngle = makePlayerAttackAngle();
  }

  let mx = input.moveX;
  let my = input.moveY;
  const len = Math.hypot(mx, my);
  p.moving = len > 0.01;
  if (len > 0) {
    mx /= len;
    my /= len;
    p.moveAngle = Math.atan2(my, mx);
    if (!pointer.active) p.aimAngle = p.moveAngle;
  }
  game.keyMove = { x: input.moveX, y: input.moveY };

  if (p.frenzy > 0) {
    p.frenzy = Math.max(0, p.frenzy - dt);
    p.bloodlust = 100 * (p.frenzy / FRENZY_TIME);
    if (p.frenzy <= 0) p.bloodlust = 0;
  } else {
    p.bloodlust = Math.max(0, p.bloodlust - dt * 1.25);
    if (p.bloodlust >= 100) triggerFrenzy();
  }

  if (p.dashTime > 0) {
    p.dashTime = Math.max(0, p.dashTime - dt);
    const dashSpeed = 510;
    p.x += Math.cos(p.dashAngle) * dashSpeed * dt;
    p.y += Math.sin(p.dashAngle) * dashSpeed * dt;
    if (chance(dt * 45)) {
      game.afterimages.push({ x: p.x, y: p.y, life: 0.22, maxLife: 0.22, scale: p.size });
    }
    for (let i = 0; i < game.enemies.length; i += 1) {
      const enemy = game.enemies[i];
      if (enemy.dead || enemy.dormant || enemy.dashHit) continue;
      if (Math.hypot(enemy.x - p.x, enemy.y - p.y) < enemy.r + 16) {
        enemy.dashHit = true;
        hurtEnemy(enemy, p.damage * 0.7, p.dashAngle, chance(0.2), 2);
      }
    }
    if (chance(0.8)) {
      game.particles.push({
        x: p.x + rand(-5, 5),
        y: p.y - rand(0, 10),
        vx: -Math.cos(p.dashAngle) * rand(10, 30) + rand(-10, 10),
        vy: -Math.sin(p.dashAngle) * rand(10, 30) + rand(-10, 10),
        life: rand(0.15, 0.35),
        maxLife: 0.35,
        size: rand(1, 3),
        color: chance(0.5) ? '#6d4c91' : '#3f255a',
        drag: 4,
        gravity: 0
      });
    }
  } else {
    const speed = p.speed * (p.frenzy > 0 ? 1.22 : 1);
    p.x += mx * speed * dt;
    p.y += my * speed * dt;
    if (p.moving) {
      p.walk += dt * (6.5 + speed * 0.032);
      p.stepDust -= dt;
      if (p.stepDust <= 0) {
        p.stepDust = 0.11;
        game.particles.push({
          x: p.x + rand(-8, 8),
          y: p.y + rand(-1, 2),
          vx: rand(-7, 7),
          vy: rand(-3, 4),
          life: rand(0.2, 0.42),
          maxLife: 0.42,
          size: rand(1, 2),
          color: chance(0.5) ? '#302938' : '#211b27',
          drag: 4,
          gravity: 0
        });
      }
    }
  }

  p.x = clamp(p.x, ARENA.x + p.r + 4, ARENA.x + ARENA.w - p.r - 4);
  p.y = clamp(p.y, ARENA.y + p.r + 4, ARENA.y + ARENA.h - p.r - 4);

  if (input.attack) performAttack();

  if (input.devour || p.frenzy > 0) {
    if (p.eatCd <= 0) {
      let nearest = null;
      let nearestD = p.frenzy > 0 ? 92 : 31;
      for (let i = 0; i < game.gibs.length; i += 1) {
        const g = game.gibs[i];
        const d = Math.hypot(g.x - p.x, (g.y - p.y) * 1.15);
        if (d < nearestD) {
          nearestD = d;
          nearest = g;
        }
      }
      if (nearest) {
        eatGib(nearest);
        p.eatCd = p.frenzy > 0 ? 0.13 : 0.17;
      }
    }
  }

  if (p.frenzy > 0 && chance(dt * 14)) {
    game.particles.push({
      x: p.x + rand(-14, 14),
      y: p.y - rand(2, 24),
      vx: rand(-8, 8),
      vy: rand(-45, -18),
      life: rand(0.2, 0.55),
      maxLife: 0.55,
      size: rand(1, 2),
      color: pick(['#ffb74d', '#f24c64', '#ffdf8d']),
      drag: 1,
      gravity: -20
    });
  }
}

function beginEnemyAttack(enemy) {
  const a = Math.atan2(game.player.y - enemy.y, game.player.x - enemy.x);
  enemy.state = 'windup';
  enemy.timer = enemy.windup;
  enemy.attackAngle = a;
  enemy.attackCd = enemy.cooldown + rand(-0.08, 0.18);
  enemy.swing = 0;
  enemy.special = false;
  if (enemy.boss) {
    enemy.specialCount += 1;
    if (enemy.specialCount % 3 === 0) {
      enemy.special = true;
      enemy.timer = 0.95;
      addFloat('SLAM', enemy.x, enemy.y - 52, '#ff7788', 7);
    }
  }
  sfx('slash');
}

function resolveEnemyAttack(enemy) {
  const p = game.player;
  if (!p) return;
  const d = Math.hypot(p.x - enemy.x, p.y - enemy.y);
  if (enemy.def.ranged) {
    const a = Math.atan2(p.y - enemy.y, p.x - enemy.x);
    game.projectiles.push({
      x: enemy.x + Math.cos(a) * 8,
      y: enemy.y - 10 + Math.sin(a) * 8,
      vx: Math.cos(a) * 255,
      vy: Math.sin(a) * 255,
      life: 2.6,
      angle: a,
      damage: enemy.damage
    });
    sfx('arrow');
    return;
  }
  const radius = enemy.special ? 68 : enemy.reach + 8;
  if (d <= radius) {
    damagePlayer(enemy.damage, Math.atan2(p.y - enemy.y, p.x - enemy.x));
  }
  game.slashes.push({
    x: enemy.x,
    y: enemy.y - 12,
    angle: enemy.attackAngle,
    radius: radius,
    time: 0,
    life: 0.24,
    arc: enemy.special ? 1.9 : 0.95,
    chain: 1,
    hostile: true
  });
  if (enemy.special) {
    game.shake = Math.max(game.shake, 11);
    addBlood(enemy.x, enemy.y, 5, true);
  }
}

export function updateEnemy(enemy, dt) {
  if (enemy.dead) return;
  enemy.hitFlash = Math.max(0, enemy.hitFlash - dt);
  enemy.swing = Math.max(0, enemy.swing - dt);
  if (enemy.dormant) {
    enemy.tremble += dt * 2.2;
    return;
  }
  enemy.attackCd = Math.max(0, enemy.attackCd - dt);
  const p = game.player;
  if (!p) return;
  const dx = p.x - enemy.x;
  const dy = p.y - enemy.y;
  const d = Math.max(0.001, Math.hypot(dx, dy));
  const dirX = dx / d;
  const dirY = dy / d;
  enemy.facing = dirX >= 0 ? 1 : -1;

  if (enemy.bleed > 0) {
    enemy.hp -= enemy.bleed * dt;
    if (chance(dt * 2.2)) addBlood(enemy.x + rand(-4, 4), enemy.y, 1, false);
    if (enemy.hp <= 0) {
      killEnemy(enemy, enemy.attackAngle || 0);
      return;
    }
  }

  if (enemy.stun > 0) {
    enemy.stun -= dt;
    enemy.x += enemy.vx * dt;
    enemy.y += enemy.vy * dt;
    enemy.vx *= Math.pow(0.0008, dt);
    enemy.vy *= Math.pow(0.0008, dt);
    clampArena(enemy, 6);
    return;
  }

  let mx = 0;
  let my = 0;
  let moving = false;

  if (enemy.state === 'windup') {
    enemy.timer -= dt;
    if (enemy.timer <= 0) {
      resolveEnemyAttack(enemy);
      enemy.state = 'recover';
      enemy.timer = enemy.def.ranged ? 0.6 : 0.45;
    }
  } else if (enemy.state === 'recover') {
    enemy.timer -= dt;
    if (enemy.timer <= 0) enemy.state = 'chase';
  } else {
    if (enemy.healer) {
      enemy.healCd -= dt;
      if (enemy.healCd <= 0) {
        enemy.healCd = 4.2;
        let healed = 0;
        for (let i = 0; i < game.enemies.length; i += 1) {
          const other = game.enemies[i];
          if (other.dead || other === enemy || other.hp >= other.maxHp) continue;
          if (Math.hypot(other.x - enemy.x, other.y - enemy.y) < 92) {
            other.hp = Math.min(other.maxHp, other.hp + 14);
            healed += 1;
            addFloat('+14', other.x, other.y - 26, '#a6cf6e', 5);
            for (let k = 0; k < 5; k += 1) {
              game.particles.push({
                x: other.x + rand(-6, 6),
                y: other.y - rand(2, 16),
                vx: rand(-8, 8),
                vy: rand(-30, -10),
                life: rand(0.3, 0.7),
                maxLife: 0.7,
                size: rand(1, 2),
                color: '#a6cf6e',
                drag: 2,
                gravity: -20
              });
            }
          }
        }
        if (healed) {
          addFloat('BLESS', enemy.x, enemy.y - 32, '#b8e08a', 5);
          sfx('bless');
        }
      }
    }

    if (enemy.hp < enemy.maxHp * 0.3 && (enemy.type === 'villager' || enemy.type === 'archer') && !enemy.boss) {
      enemy.flee = true;
    }
    if (enemy.flee && d > 290) enemy.flee = false;

    if (enemy.flee) {
      mx = -dirX;
      my = -dirY;
      enemy.speed = enemy.def.speed * 1.34;
      moving = true;
    } else if (enemy.def.ranged) {
      if (d < 105) {
        mx = -dirX;
        my = -dirY;
        moving = true;
      } else if (d > 175) {
        mx = dirX;
        my = dirY;
        moving = true;
      } else {
        const strafe = Math.sin(game.time * 1.4 + enemy.walk) * 0.45;
        mx = -dirY * strafe;
        my = dirX * strafe;
        moving = Math.abs(strafe) > 0.1;
      }
      if (enemy.attackCd <= 0 && d <= 215) beginEnemyAttack(enemy);
    } else {
      const ideal = enemy.reach - 4;
      if (d > ideal) {
        mx = dirX;
        my = dirY;
        moving = true;
      } else {
        const strafe = Math.sin(game.time * 2 + enemy.walk) * 0.22;
        mx = -dirY * strafe;
        my = dirX * strafe;
      }
      if (enemy.attackCd <= 0 && d <= enemy.reach + 7) beginEnemyAttack(enemy);
    }
  }

  if (moving) {
    enemy.walk += dt * (5 + enemy.speed * 0.055);
    enemy.x += mx * enemy.speed * dt;
    enemy.y += my * enemy.speed * dt;
  }

  let sx = 0;
  let sy = 0;
  for (let i = 0; i < game.enemies.length; i += 1) {
    const other = game.enemies[i];
    if (other === enemy || other.dead) continue;
    const ox = enemy.x - other.x;
    const oy = enemy.y - other.y;
    const od2 = ox * ox + oy * oy;
    if (od2 < 260 && od2 > 0.01) {
      const od = Math.sqrt(od2);
      sx += (ox / od) * (1 - od / 16);
      sy += (oy / od) * (1 - od / 16);
    }
  }
  const pdx = enemy.x - p.x;
  const pdy = enemy.y - p.y;
  const pd = Math.hypot(pdx, pdy);
  if (pd < enemy.r + p.r + 2 && pd > 0.01) {
    sx += (pdx / pd) * 0.6;
    sy += (pdy / pd) * 0.6;
  }
  enemy.x += (enemy.vx + sx * 40) * dt;
  enemy.y += (enemy.vy + sy * 40) * dt;
  enemy.vx *= Math.pow(0.0015, dt);
  enemy.vy *= Math.pow(0.0015, dt);
  clampArena(enemy, 6);
}

export function updateProjectiles(dt) {
  const p = game.player;
  for (let i = game.projectiles.length - 1; i >= 0; i -= 1) {
    const arrow = game.projectiles[i];
    arrow.life -= dt;
    arrow.x += arrow.vx * dt;
    arrow.y += arrow.vy * dt;
    if (chance(dt * 20)) {
      game.particles.push({
        x: arrow.x,
        y: arrow.y,
        vx: rand(-4, 4),
        vy: rand(-4, 4),
        life: rand(0.08, 0.2),
        maxLife: 0.2,
        size: 1,
        color: '#9f8f7d',
        drag: 2,
        gravity: 0
      });
    }
    if (p && Math.hypot(arrow.x - p.x, arrow.y - (p.y - 13)) < 11) {
      damagePlayer(arrow.damage || 8, Math.atan2(arrow.vy, arrow.vx));
      game.projectiles.splice(i, 1);
      continue;
    }
    if (arrow.life <= 0 || arrow.x < ARENA.x - 12 || arrow.x > ARENA.x + ARENA.w + 12 || arrow.y < ARENA.y - 12 || arrow.y > ARENA.y + ARENA.h + 12) {
      game.projectiles.splice(i, 1);
    }
  }
}
