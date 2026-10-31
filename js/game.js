(() => {
  'use strict';
  const CR = window.CR;
  const {
    TAU, clamp, lerp, rand, randInt, pick, dist, angleDiff, approach,
    input, state, cam, world, view
  } = CR;

  const ZTYPES = {
    walker: { hp: 26, speed: 27, radius: 7, damage: 9, scale: 1.0, score: 100 },
    runner: { hp: 17, speed: 57, radius: 6, damage: 7, scale: 0.92, score: 150 },
    brute: { hp: 88, speed: 19, radius: 11, damage: 18, scale: 1.42, score: 320 },
    boss: { hp: 680, speed: 15, radius: 20, damage: 27, scale: 2.05, score: 2800 }
  };

  const player = CR.player = {
    x: 800, y: 520, vx: 0, vy: 0, radius: 7,
    aim: 0, moveAngle: 0, walkPhase: 0, moving: false,
    hp: 100, maxHp: 100, speed: 134,
    attack: false, rev: 0, bladePhase: 0, attackTick: 0, swing: 0,
    dashTime: 0, dashCd: 0, dashX: 0, dashY: 0,
    invuln: 0, hurtFlash: 0, dead: false,
    frenzy: 0, frenzyTime: 0, kills: 0,
    exhaust: 0, step: 0
  };

  CR.buildDecor = function () {
    CR.decorCorpses.length = 0;
    CR.decorCorpses.push(
      { x: 724, y: 560, angle: 0.8, scale: 1.0, kind: 'ripped', life: Infinity, static: true },
      { x: 860, y: 474, angle: 2.45, scale: 0.95, kind: 'gutted', life: Infinity, static: true },
      { x: 646, y: 468, angle: -0.35, scale: 0.9, kind: 'crawler', life: Infinity, static: true },
      { x: 944, y: 592, angle: 1.9, scale: 1.05, kind: 'ripped', life: Infinity, static: true },
      { x: 1098, y: 542, angle: -1.3, scale: 0.8, kind: 'gutted', life: Infinity, static: true }
    );
  };

  CR.resetGame = function () {
    CR.zombies.length = 0;
    CR.particles.length = 0;
    CR.gibs.length = 0;
    CR.floaters.length = 0;
    CR.pickups.length = 0;
    CR.afterimages.length = 0;
    CR.screenDrops.length = 0;
    CR.corpses.length = 0;
    CR.resetDecals();

    const p = player;
    p.x = 800; p.y = 520; p.vx = 0; p.vy = 0; p.radius = 7;
    p.aim = -0.2; p.moveAngle = 0; p.walkPhase = 0; p.moving = false;
    p.hp = 100; p.maxHp = 100; p.speed = 134;
    p.attack = false; p.rev = 0; p.bladePhase = 0; p.attackTick = 0; p.swing = 0;
    p.dashTime = 0; p.dashCd = 0; p.dashX = 0; p.dashY = 0;
    p.invuln = 0; p.hurtFlash = 0; p.dead = false;
    p.frenzy = 0; p.frenzyTime = 0; p.kills = 0;
    p.exhaust = 0; p.step = 0;

    state.wave = 0;
    state.waveState = 'idle';
    state.waveTimer = 0;
    state.spawnTimer = 0;
    state.spawnQueue.length = 0;
    state.remaining = 0;
    state.score = 0;
    state.kills = 0;
    state.combo = 0;
    state.comboTimer = 0;
    state.bestCombo = 0;
    state.boss = null;
    state.announce = null;
    state.flash = 0;
    state.whiteFlash = 0;
    state.hitstop = 0;
    state.slowmo = 0;
    state.shake = 0;
    state.damageFlash = 0;
    state.lowHealth = false;
    state.gameTime = 0;
    state.deaths = 0;
    state.totalGore = 0;
    state.bannerTimer = 0;
    state.mode = 'playing';
    state.started = true;
    state.menuCamera = 0;

    cam.x = clamp(p.x - view.w / 2, 0, world.w - view.w);
    cam.y = clamp(p.y - view.h / 2, 0, world.h - view.h);

    CR.dom.damage.classList.remove('low', 'hit');
    CR.dom.frenzy.classList.remove('on');
    CR.dom.gameover.classList.add('hidden');
    CR.dom.pause.classList.add('hidden');
    document.body.classList.remove('menu-open');

    CR.startWave(1);
    if (CR.sound) {
      CR.sound.unlock();
      CR.sound.started = true;
    }
  };

  CR.startWave = function (n) {
    state.wave = n;
    state.waveState = 'active';
    state.waveTimer = 0;
    state.spawnTimer = 0;
    state.spawnQueue.length = 0;
    state.boss = null;

    const isBoss = n % 5 === 0;
    const count = Math.min(34, 4 + Math.ceil(n * 1.65));
    for (let i = 0; i < count; i++) {
      let type = 'walker';
      const roll = Math.random();
      if (n >= 2 && roll < Math.min(0.28, 0.08 + n * 0.022)) type = 'runner';
      if (n >= 3 && roll > 0.86 - Math.min(0.12, n * 0.008)) type = 'brute';
      state.spawnQueue.push(type);
    }
    if (isBoss) state.spawnQueue.push('boss');

    // First few are close enough to read immediately.
    const first = isBoss ? 3 : Math.min(4, state.spawnQueue.length);
    for (let i = 0; i < first; i++) {
      const type = state.spawnQueue.shift();
      CR.spawnZombie(type, true);
    }
    state.remaining = state.spawnQueue.length + CR.zombies.length;

    const names = [
      'THE YARD', 'MEAT LOCKER', 'BLOOD RUN', 'THE KILL FLOOR', 'ABATTOIR PROTOCOL',
      'RUST & ROT', 'NIGHT SHIFT', 'THE GRINDER', 'BONE ORCHARD', 'FINAL CUT'
    ];
    const sub = isBoss ? 'ABATTOIR PROTOCOL // KILL THE BIG ONE' : names[(n - 1) % names.length];
    CR.announce(`WAVE ${String(n).padStart(2, '0')}`, sub, isBoss ? 2.6 : 1.9);
    if (CR.sound) CR.sound.wave();
  };

  CR.announce = function (title, sub, time = 2.4) {
    state.announce = { title, sub, time, max: time };
  };

  CR.spawnZombie = function (type, near = false) {
    const def = ZTYPES[type] || ZTYPES.walker;
    let x = player.x, y = player.y;
    for (let tries = 0; tries < 60; tries++) {
      const a = rand(0, TAU);
      const d = near ? rand(112, 185) : rand(245, 390);
      x = clamp(player.x + Math.cos(a) * d, 55, world.w - 55);
      y = clamp(player.y + Math.sin(a) * d, 55, world.h - 55);
      if (!CR.isBlocked(x, y, def.radius + 5)) break;
    }
    if (CR.isBlocked(x, y, def.radius + 2)) {
      x = clamp(player.x + rand(-150, 150), 55, world.w - 55);
      y = clamp(player.y + rand(-120, 120), 55, world.h - 55);
    }
    const waveScale = 1 + (state.wave - 1) * 0.115;
    const z = {
      type, x, y, vx: 0, vy: 0,
      radius: def.radius, scale: def.scale,
      hp: def.hp * waveScale, maxHp: def.hp * waveScale,
      speed: def.speed * (1 + Math.min(0.32, state.wave * 0.014)),
      damage: def.damage * (1 + Math.min(0.5, state.wave * 0.028)),
      score: def.score,
      angle: rand(0, TAU), phase: rand(0, TAU), seed: rand(0, 100),
      limbs: { armL: true, armR: true, head: true, legL: true, legR: true },
      attackCd: rand(0.6, 1.7), swipe: 0, stagger: 0, flash: 0,
      dead: false, slow: 1, growlCd: rand(2, 7), lunge: 0, hurtTint: 0,
      boss: type === 'boss'
    };
    CR.zombies.push(z);
    if (type === 'boss') {
      state.boss = z;
      CR.announce('ABATTOIR', 'THE BIG ONE IS HUNGRY', 3.2);
      state.shake = 7;
      state.flash = 0.6;
    }
    // dirt burst at spawn
    for (let i = 0; i < 10; i++) {
      CR.particles.push({
        type: 'dirt', x, y, z: rand(0, 3), vx: rand(-30, 30), vy: rand(-30, 30), vz: rand(8, 38),
        life: rand(0.4, 1.1), max: 1.1, size: rand(1, 3), color: pick(['#3b3422', '#282317', '#4a3b25'])
      });
    }
    if (near) {
      for (let i = 0; i < 5; i++) {
        CR.particles.push({
          type: 'smoke', x, y, z: rand(0, 8), vx: rand(-8, 8), vy: rand(-8, 8), vz: rand(5, 16),
          life: rand(0.5, 1.2), max: 1.2, size: rand(2, 5), color: '#131810'
        });
      }
    }
    if (Math.random() < 0.35) CR.sound.growl();
    return z;
  };

  // ------------------------------------------------------------
  //  player update
  // ------------------------------------------------------------
  function updatePlayer(dt) {
    const p = player;
    if (p.dead) {
      p.vx *= Math.pow(0.001, dt);
      p.vy *= Math.pow(0.001, dt);
      p.x += p.vx * dt; p.y += p.vy * dt;
      return;
    }

    let ix = 0, iy = 0;
    if (input.keys.has('a') || input.keys.has('ArrowLeft')) ix -= 1;
    if (input.keys.has('d') || input.keys.has('ArrowRight')) ix += 1;
    if (input.keys.has('w') || input.keys.has('ArrowUp')) iy -= 1;
    if (input.keys.has('s') || input.keys.has('ArrowDown')) iy += 1;
    if (input.touch.active) {
      ix += input.touch.dx;
      iy += input.touch.dy;
    }
    let mag = Math.hypot(ix, iy);
    if (mag > 1) { ix /= mag; iy /= mag; mag = 1; }
    p.moving = mag > 0.08;

    // aim
    const mwx = cam.x + input.mouse.x;
    const mwy = cam.y + input.mouse.y;
    let aimTarget = Math.atan2(mwy - p.y, mwx - p.x);
    if (input.touch.active && !input.mouse.inside) {
      let best = null, bestD = 260;
      for (const z of CR.zombies) {
        if (z.dead) continue;
        const d = dist(p.x, p.y, z.x, z.y);
        if (d < bestD) { bestD = d; best = z; }
      }
      if (best) aimTarget = Math.atan2(best.y - p.y, best.x - p.x);
      else if (p.moving) aimTarget = Math.atan2(iy, ix);
    }
    p.aim = p.aim + angleDiff(aimTarget, p.aim) * Math.min(1, dt * 24);

    if (p.moving) {
      p.moveAngle = Math.atan2(iy, ix);
      p.walkPhase += dt * (8 + Math.hypot(p.vx, p.vy) * 0.025);
      p.step += dt * (7 + Math.hypot(p.vx, p.vy) * 0.03);
    } else {
      p.walkPhase += dt * 1.6;
    }

    // dash
    p.dashCd = Math.max(0, p.dashCd - dt);
    const dashPressed = input.pressed.has('Shift') || input.pressed.has('shift') || input.touch.dash;
    if (dashPressed && p.dashCd <= 0) {
      let dx = ix, dy = iy;
      if (mag < 0.1) { dx = Math.cos(p.aim); dy = Math.sin(p.aim); }
      const m = Math.hypot(dx, dy) || 1;
      p.dashX = dx / m; p.dashY = dy / m;
      p.dashTime = 0.16;
      p.dashCd = 0.82;
      p.invuln = Math.max(p.invuln, 0.3);
      p.hurtFlash = 0;
      if (CR.sound) CR.sound.dash();
      for (let i = 0; i < 9; i++) {
        CR.particles.push({
          type: 'dust', x: p.x + rand(-6, 6), y: p.y + rand(-6, 6), z: rand(0, 3),
          vx: -p.dashX * rand(15, 55) + rand(-15, 15), vy: -p.dashY * rand(15, 55) + rand(-15, 15),
          vz: rand(4, 18), life: rand(0.25, 0.55), max: 0.55, size: rand(2, 4), color: pick(['#4b4734', '#2d2c21', '#5b5541'])
        });
      }
    }
    input.touch.dash = false;

    if (p.dashTime > 0) {
      p.dashTime -= dt;
      p.vx = p.dashX * 520;
      p.vy = p.dashY * 520;
      p.invuln = Math.max(p.invuln, 0.1);
      if (Math.random() < 0.8) {
        CR.afterimages.push({ x: p.x, y: p.y, angle: p.aim, life: 0.24, max: 0.24 });
      }
    } else {
      const maxSpeed = p.speed * (p.attack ? 0.72 : 1) * (p.frenzyTime > 0 ? 1.12 : 1);
      const accel = 980;
      p.vx = approach(p.vx, ix * maxSpeed, accel * dt);
      p.vy = approach(p.vy, iy * maxSpeed, accel * dt);
      if (!p.moving) {
        p.vx *= Math.pow(0.0001, dt);
        p.vy *= Math.pow(0.0001, dt);
      }
    }

    p.x += p.vx * dt;
    p.y += p.vy * dt;
    CR.resolveProps(p);

    // chainsaw
    const wantsAttack = input.mouse.down || input.keys.has(' ') || input.touch.attack;
    p.attack = wantsAttack;
    if (wantsAttack) {
      p.rev = Math.min(1, p.rev + dt * 7.5);
      p.bladePhase += dt * (18 + p.rev * 52);
      p.attackTick -= dt;
      if (p.rev > 0.22 && p.attackTick <= 0) {
        p.attackTick = p.frenzyTime > 0 ? 0.052 : 0.082;
        doChainsawHit();
      }
      p.swing = Math.min(1, p.swing + dt * 8);
    } else {
      p.rev = Math.max(0, p.rev - dt * 5);
      p.attackTick = 0;
      p.swing = Math.max(0, p.swing - dt * 7);
    }

    // chainsaw exhaust
    p.exhaust -= dt;
    if (p.rev > 0.35 && p.exhaust <= 0) {
      p.exhaust = rand(0.05, 0.14);
      const a = p.aim + Math.PI + rand(-0.3, 0.3);
      CR.particles.push({
        type: 'smoke', x: p.x + Math.cos(a) * 9, y: p.y + Math.sin(a) * 9, z: rand(2, 6),
        vx: Math.cos(a) * rand(6, 20) + rand(-4, 4), vy: Math.sin(a) * rand(6, 20) + rand(-4, 4),
        vz: rand(8, 20), life: rand(0.35, 0.8), max: 0.8, size: rand(2, 4), color: pick(['#6a6658', '#49463c', '#2e2d27'])
      });
    }

    p.invuln = Math.max(0, p.invuln - dt);
    p.hurtFlash = Math.max(0, p.hurtFlash - dt * 3.2);
    p.frenzyTime = Math.max(0, p.frenzyTime - dt);
    if (p.frenzyTime <= 0 && p.frenzy > 0 && p.frenzy < 100) p.frenzy = Math.max(0, p.frenzy - dt * 1.6);
    if (p.frenzyTime > 0) {
      if (CR.sound) CR.sound.saw(p.rev, p.attack);
    }
    if (p.frenzy >= 100 && p.frenzyTime <= 0 && (input.pressed.has('q') || input.pressed.has('Q'))) {
      p.frenzyTime = 8;
      p.frenzy = 0;
      state.flash = 0.7;
      state.shake = 8;
      CR.announce('BLOOD FRENZY', 'RIP AND TEAR UNTIL IT STOPS MOVING', 2.4);
      if (CR.sound) CR.sound.frenzy();
    }
    CR.dom.frenzy.classList.toggle('on', p.frenzyTime > 0);
    if (CR.sound) CR.sound.saw(p.rev, p.attack);
  }

  function doChainsawHit() {
    const p = player;
    const frenzy = p.frenzyTime > 0;
    const range = 36 + p.rev * 6 + (frenzy ? 8 : 0);
    const arc = 0.88 + (frenzy ? 0.22 : 0);
    const dmg = (8 + p.rev * 5 + (frenzy ? 7 : 0)) * rand(0.86, 1.14);
    let hitAny = false;

    for (const z of CR.zombies) {
      if (z.dead) continue;
      const d = dist(p.x, p.y, z.x, z.y);
      if (d > range + z.radius) continue;
      const a = Math.atan2(z.y - p.y, z.x - p.x);
      if (Math.abs(angleDiff(a, p.aim)) > arc) continue;
      hitAny = true;
      damageZombie(z, dmg, p.aim, d);
    }

    if (hitAny) {
      p.swing = 1;
      state.hitstop = Math.max(state.hitstop, 0.018);
      state.shake = Math.max(state.shake, 2.2);
      state.flash = Math.max(state.flash, 0.12);
      if (CR.sound) CR.sound.hit();
      // spray from the blade tip
      const bx = p.x + Math.cos(p.aim) * (range * 0.7);
      const by = p.y + Math.sin(p.aim) * (range * 0.7);
      for (let i = 0; i < 5; i++) {
        CR.particles.push({
          type: 'spark', x: bx + rand(-4, 4), y: by + rand(-4, 4), z: rand(1, 5),
          vx: Math.cos(p.aim + rand(-1.2, 1.2)) * rand(20, 80), vy: Math.sin(p.aim + rand(-1.2, 1.2)) * rand(20, 80),
          vz: rand(10, 50), life: rand(0.15, 0.4), max: 0.4, size: 1, color: pick(['#ffd166', '#ff8a2b', '#fff1b8'])
        });
      }
    }
  }

  function damageZombie(z, dmg, dir, distance) {
    if (z.dead) return;
    const p = player;
    z.hp -= dmg;
    z.flash = 0.13;
    z.stagger = Math.max(z.stagger, 0.13);
    z.vx += Math.cos(dir) * 80;
    z.vy += Math.sin(dir) * 80;

    const hx = z.x - Math.cos(dir) * z.radius * 0.35;
    const hy = z.y - Math.sin(dir) * z.radius * 0.35;
    spawnBlood(hx, hy, dir, 7 + Math.round(dmg * 0.8), 1 + dmg * 0.01);
    CR.addSplat(hx, hy, dir, 5, 0.42, 0.55);

    if (CR.sound && Math.random() < 0.55) CR.sound.splat();

    if (z.hp <= 0) {
      killZombie(z, dir);
      return;
    }

    // dismemberment
    const roll = Math.random();
    if (z.limbs.head && roll < 0.025) {
      z.limbs.head = false;
      z.hp = 0;
      CR.addFloater('DECAP +100', z.x, z.y - 16, '#ff5a5f', 1);
      state.score += 100;
      state.totalGore += 1;
      spawnGib(z.x, z.y, dir, 120, 'head', 1.2);
      spawnBlood(z.x, z.y, dir, 30, 1.5);
      killZombie(z, dir);
      return;
    }
    if (z.limbs.armL && roll < 0.075) {
      z.limbs.armL = false;
      CR.addFloater('DISARMED +40', z.x, z.y - 14, '#ffb15c', 1);
      state.score += 40;
      state.totalGore += 1;
      spawnGib(z.x, z.y, dir + rand(-0.7, 0.7), 140, 'arm', 1.1);
      spawnBlood(z.x, z.y, dir + rand(-0.6, 0.6), 20, 1.25);
      state.shake = Math.max(state.shake, 3);
      state.hitstop = Math.max(state.hitstop, 0.035);
      if (CR.sound) CR.sound.dismember();
    } else if (z.limbs.armR && roll < 0.12) {
      z.limbs.armR = false;
      CR.addFloater('DISARMED +40', z.x, z.y - 14, '#ffb15c', 1);
      state.score += 40;
      state.totalGore += 1;
      spawnGib(z.x, z.y, dir + rand(-0.7, 0.7), 140, 'arm', 1.1);
      spawnBlood(z.x, z.y, dir + rand(-0.6, 0.6), 20, 1.25);
      state.shake = Math.max(state.shake, 3);
      state.hitstop = Math.max(state.hitstop, 0.035);
      if (CR.sound) CR.sound.dismember();
    } else if (z.limbs.legL && roll < 0.155) {
      z.limbs.legL = false;
      z.speed *= 0.55;
      z.limbs.legR = false;
      CR.addFloater('HAMSTRUNG +30', z.x, z.y - 14, '#ffd166', 1);
      state.score += 30;
      state.totalGore += 1;
      spawnGib(z.x, z.y, dir + rand(-0.9, 0.9), 110, 'leg', 1.0);
      spawnBlood(z.x, z.y, dir, 16, 1.1);
    }
  }

  function killZombie(z, dir) {
    if (z.dead) return;
    z.dead = true;
    const p = player;
    const base = z.score || 100;

    state.combo += 1;
    state.comboTimer = 3.4;
    state.bestCombo = Math.max(state.bestCombo, state.combo);
    state.kills += 1;
    p.kills += 1;
    state.totalGore += 4 + Math.round(z.scale * 2);

    const mult = 1 + Math.min(4, (state.combo - 1) * 0.18);
    const gained = Math.round(base * mult);
    state.score += gained;
    CR.addFloater(`+${gained}`, z.x, z.y - 14, state.combo > 3 ? '#ffd166' : '#e9e2cf', state.combo > 6 ? 2 : 1);
    if (state.combo >= 5 && state.combo % 5 === 0) {
      CR.addFloater(state.combo >= 20 ? 'CARNAGE!' : 'MASSACRE!', p.x, p.y - 34, '#ff3b43', 2);
    }

    if (p.frenzyTime <= 0) p.frenzy = Math.min(100, p.frenzy + 10 + z.scale * 2);
    if (p.frenzy >= 100 && p.frenzyTime <= 0) {
      CR.addFloater('FRENZY READY // Q', p.x, p.y - 42, '#d7ff4a', 1);
    }

    // gore explosion
    const n = z.boss ? 34 : Math.round(9 + z.scale * 5);
    for (let i = 0; i < n; i++) {
      const a = rand(0, TAU);
      const power = rand(30, 180) * (z.boss ? 1.7 : 1);
      CR.gibs.push({
        type: pick(['meat', 'meat', 'meat', 'bone', 'cloth', 'tooth', 'eye']),
        x: z.x + rand(-3, 3), y: z.y + rand(-3, 3),
        z: rand(3, 16), vx: Math.cos(a) * power + Math.cos(dir) * 30,
        vy: Math.sin(a) * power + Math.sin(dir) * 30,
        vz: rand(40, 130), rot: rand(0, TAU), vr: rand(-8, 8),
        size: rand(1.2, 3.4) * z.scale, life: rand(7, 18), max: 18,
        grounded: false, color: pick(['#7d0a12', '#9d0e18', '#5b070d', '#c41723'])
      });
    }
    for (const key of ['armL', 'armR', 'legL', 'legR', 'head']) {
      if (z.limbs[key]) {
        CR.gibs.push({
          type: key === 'head' ? 'head' : key.startsWith('arm') ? 'arm' : 'leg',
          x: z.x, y: z.y, z: rand(5, 12),
          vx: Math.cos(dir + rand(-0.9, 0.9)) * rand(60, 160),
          vy: Math.sin(dir + rand(-0.9, 0.9)) * rand(60, 160),
          vz: rand(50, 110), rot: rand(0, TAU), vr: rand(-5, 5),
          size: z.scale, life: rand(10, 20), max: 20, grounded: false
        });
      }
    }
    spawnBlood(z.x, z.y, dir, z.boss ? 90 : 34, z.boss ? 2.2 : 1.35);
    CR.addPool(z.x, z.y, z.boss ? 40 : 14 + z.scale * 6, 0.9);
    CR.addSplat(z.x, z.y, dir, z.boss ? 40 : 16, z.boss ? 1.8 : 0.9, 0.9);
    CR.corpses.push({
      x: z.x, y: z.y, angle: z.angle + rand(-0.4, 0.4),
      scale: z.scale, kind: 'ripped', life: 42, max: 42, static: false
    });

    if (Math.random() < (z.boss ? 1 : 0.075)) {
      CR.pickups.push({
        type: 'medkit', x: z.x + rand(-5, 5), y: z.y + rand(-5, 5),
        life: 22, bob: rand(0, TAU)
      });
    }
    if (Math.random() < 0.05) {
      CR.pickups.push({
        type: 'adrenaline', x: z.x + rand(-5, 5), y: z.y + rand(-5, 5),
        life: 20, bob: rand(0, TAU)
      });
    }

    state.shake = Math.max(state.shake, z.boss ? 12 : 4.2);
    state.hitstop = Math.max(state.hitstop, z.boss ? 0.16 : 0.05);
    state.flash = Math.max(state.flash, z.boss ? 1 : 0.2);
    if (z.boss) {
      state.slowmo = 1.2;
      state.whiteFlash = 0.9;
      state.boss = null;
      CR.announce('ABATTOIR DOWN', 'THE MEAT KEEPS COMING', 2.6);
      if (CR.sound) CR.sound.death();
    } else if (CR.sound) {
      CR.sound.splat();
      if (Math.random() < 0.5) CR.sound.dismember();
    }

    if (state.kills % 10 === 0) {
      CR.addFloater(`${state.kills} DEAD`, p.x, p.y - 46, '#ff5a5f', 2);
    }
  }

  function spawnBlood(x, y, dir, count, power = 1) {
    for (let i = 0; i < count; i++) {
      const a = dir + rand(-0.65, 0.65);
      const sp = rand(20, 150) * power;
      CR.particles.push({
        type: 'blood', x: x + rand(-2, 2), y: y + rand(-2, 2),
        z: rand(1, 8), vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
        vz: rand(20, 100) * power, life: rand(0.3, 1.0), max: 1.0,
        size: rand(1, 2.6), color: pick(['#8d0d16', '#b9121f', '#6a0710', '#d21c29'])
      });
    }
    // mist
    for (let i = 0; i < Math.min(6, count * 0.25); i++) {
      CR.particles.push({
        type: 'mist', x, y, z: rand(1, 8), vx: rand(-20, 20), vy: rand(-20, 20),
        vz: rand(0, 18), life: rand(0.2, 0.55), max: 0.55, size: rand(2, 5),
        color: 'rgba(111,8,17,0.5)'
      });
    }
  }

  function spawnGib(x, y, dir, speed, type, scale = 1) {
    CR.gibs.push({
      type, x, y, z: rand(4, 10),
      vx: Math.cos(dir) * speed + rand(-20, 20),
      vy: Math.sin(dir) * speed + rand(-20, 20),
      vz: rand(40, 100), rot: rand(0, TAU), vr: rand(-7, 7),
      size: scale, life: rand(10, 18), max: 18, grounded: false
    });
  }

  // ------------------------------------------------------------
  //  zombies
  // ------------------------------------------------------------
  function updateZombies(dt) {
    const p = player;
    const list = CR.zombies;
    for (const z of list) {
      if (z.dead) continue;
      z.flash = Math.max(0, z.flash - dt);
      z.swipe = Math.max(0, z.swipe - dt);
      z.growlCd -= dt;
      if (z.growlCd <= 0) {
        z.growlCd = rand(4, 10);
        if (Math.random() < 0.4 && CR.sound) CR.sound.growl();
      }

      if (z.stagger > 0) {
        z.stagger -= dt;
        z.x += z.vx * dt;
        z.y += z.vy * dt;
        z.vx *= Math.pow(0.001, dt);
        z.vy *= Math.pow(0.001, dt);
        CR.resolveProps(z);
        continue;
      }

      const dx = p.x - z.x, dy = p.y - z.y;
      const d = Math.hypot(dx, dy) || 1;
      let target = Math.atan2(dy, dx);
      const wobble = Math.sin(state.time * 1.7 + z.seed) * (z.type === 'runner' ? 0.14 : 0.34);
      target += wobble;
      z.angle += angleDiff(target, z.angle) * Math.min(1, dt * (z.type === 'runner' ? 7 : 3.8));

      const minD = z.radius + p.radius + 2;
      if (d > minD + 1 && !p.dead && state.mode !== 'menu') {
        let sp = z.speed * z.slow;
        if (z.type === 'runner') sp *= 0.9 + Math.sin(state.time * 6 + z.seed) * 0.15;
        z.x += Math.cos(z.angle) * sp * dt;
        z.y += Math.sin(z.angle) * sp * dt;
      } else if (state.mode === 'menu') {
        z.x += Math.cos(z.angle + Math.PI / 2) * z.speed * 0.25 * dt;
        z.y += Math.sin(z.angle + Math.PI / 2) * z.speed * 0.25 * dt;
      }

      // attack
      if (state.mode === 'playing' && !p.dead) {
        z.attackCd -= dt;
        if (d < minD + 7 && z.attackCd <= 0) {
          z.attackCd = z.type === 'runner' ? 0.95 : z.type === 'brute' ? 1.55 : 1.35;
          z.swipe = 0.32;
          if (p.invuln <= 0) {
            damagePlayer(z.damage, Math.atan2(p.y - z.y, p.x - z.x), z);
          }
        }
      }

      // crowd separation
      for (const o of list) {
        if (o === z || o.dead) continue;
        const ox = z.x - o.x, oy = z.y - o.y;
        const od = Math.hypot(ox, oy);
        const min = z.radius + o.radius - 1;
        if (od < min && od > 0.001) {
          const push = (min - od) / od * 0.5;
          z.x += ox * push;
          z.y += oy * push;
        }
      }

      CR.resolveProps(z);
    }
  }

  function damagePlayer(dmg, dir, source) {
    const p = player;
    if (p.dead || p.invuln > 0) return;
    p.hp -= dmg;
    p.invuln = 0.9;
    p.hurtFlash = 1;
    p.vx += Math.cos(dir) * 120;
    p.vy += Math.sin(dir) * 120;
    state.shake = Math.max(state.shake, 6);
    state.damageFlash = 1;
    state.flash = Math.max(state.flash, 0.35);
    CR.dom.damage.classList.add('hit');
    setTimeout(() => CR.dom.damage.classList.remove('hit'), 110);
    spawnBlood(p.x, p.y, dir, 14, 1.0);
    CR.addSplat(p.x, p.y, dir, 8, 0.6, 0.6);
    for (let i = 0; i < 7; i++) {
      CR.screenDrops.push({
        x: rand(0, view.w), y: rand(-4, view.h * 0.2),
        vx: rand(-8, 8), vy: rand(10, 40), r: rand(1, 3), life: rand(0.8, 2.2), max: 2.2
      });
    }
    if (CR.sound) CR.sound.hurt();
    if (source) {
      source.vx -= Math.cos(dir) * 30;
      source.vy -= Math.sin(dir) * 30;
    }
    if (p.hp <= 0) {
      p.hp = 0;
      die();
    }
  }

  function die() {
    const p = player;
    p.dead = true;
    state.mode = 'dead';
    state.slowmo = 1.3;
    state.shake = 13;
    state.flash = 1;
    state.whiteFlash = 0.7;
    spawnBlood(p.x, p.y, p.aim, 60, 1.8);
    CR.addPool(p.x, p.y, 26, 0.9);
    CR.corpses.push({ x: p.x, y: p.y, angle: p.aim, scale: 1, kind: 'player', life: 999, max: 999, static: true });
    CR.dom.frenzy.classList.remove('on');
    CR.dom.damage.classList.remove('low');
    document.body.classList.add('menu-open');
    if (CR.sound) {
      CR.sound.death();
      CR.sound.saw(0, false);
    }
    setTimeout(() => {
      if (state.mode !== 'dead') return;
      CR.dom.statWave.textContent = state.wave;
      CR.dom.statKills.textContent = state.kills;
      CR.dom.statScore.textContent = state.score.toLocaleString('en-US');
      CR.dom.statCombo.textContent = 'x' + state.bestCombo;
      CR.dom.gameover.classList.remove('hidden');
    }, 1200);
  }

  // ------------------------------------------------------------
  //  pickups / particles / corpses
  // ------------------------------------------------------------
  function updatePickups(dt) {
    const p = player;
    for (const item of CR.pickups) {
      item.life -= dt;
      item.bob += dt * 3;
      if (dist(p.x, p.y, item.x, item.y) < 16 && !p.dead) {
        item.life = 0;
        if (item.type === 'medkit') {
          p.hp = Math.min(p.maxHp, p.hp + 28);
          CR.addFloater('+28 HP', p.x, p.y - 26, '#d7ff4a', 1);
        } else {
          p.frenzy = Math.min(100, p.frenzy + 55);
          CR.addFloater('+55 FRENZY', p.x, p.y - 26, '#ffb15c', 1);
        }
        if (CR.sound) CR.sound.pickup();
      }
    }
    CR.pickups = CR.pickups.filter(item => item.life > 0);
  }

  function updateParticles(dt) {
    // blood / dust / sparks
    for (const pt of CR.particles) {
      pt.life -= dt;
      if (pt.z > 0 || pt.type === 'blood' || pt.type === 'dirt') {
        pt.x += pt.vx * dt;
        pt.y += pt.vy * dt;
        pt.z += pt.vz * dt;
        pt.vz -= (pt.type === 'spark' ? 320 : 240) * dt;
        if (pt.z <= 0) {
          if (pt.type === 'blood') {
            CR.addSplat(pt.x, pt.y, Math.atan2(pt.vy, pt.vx), 2, 0.22, 0.65);
            pt.life = 0;
          } else {
            pt.z = 0;
            pt.vz *= -0.2;
            if (Math.abs(pt.vz) < 8) pt.vz = 0;
            pt.vx *= 0.7; pt.vy *= 0.7;
          }
        }
      } else {
        pt.x += pt.vx * dt;
        pt.y += pt.vy * dt;
      }
    }
    CR.particles = CR.particles.filter(pt => pt.life > 0);
    if (CR.particles.length > 900) CR.particles.splice(0, CR.particles.length - 900);

    // gibs
    for (const g of CR.gibs) {
      g.life -= dt;
      if (!g.grounded) {
        g.x += g.vx * dt;
        g.y += g.vy * dt;
        g.z += g.vz * dt;
        g.vz -= 320 * dt;
        g.rot += g.vr * dt;
        if (g.z <= 0) {
          g.z = 0;
          if (g.vz < -45) {
            g.vz *= -0.28;
            g.vx *= 0.55; g.vy *= 0.55; g.vr *= 0.5;
            CR.addSplat(g.x, g.y, rand(0, TAU), 3, 0.3, 0.6);
          } else {
            g.grounded = true;
            g.vx = 0; g.vy = 0; g.vz = 0; g.vr = 0;
            CR.addSplat(g.x, g.y, g.rot, 4, 0.35, 0.65);
            if (g.type === 'head') CR.addPool(g.x, g.y, 5, 0.6);
          }
        }
      }
    }
    CR.gibs = CR.gibs.filter(g => g.life > 0);
    if (CR.gibs.length > 260) CR.gibs.splice(0, CR.gibs.length - 260);

    // floating text
    for (const f of CR.floaters) {
      f.life -= dt;
      f.y -= 18 * dt;
      f.x += Math.sin((f.max - f.life) * 4 + f.seed) * 5 * dt;
    }
    CR.floaters = CR.floaters.filter(f => f.life > 0);

    // afterimages
    for (const a of CR.afterimages) a.life -= dt;
    CR.afterimages = CR.afterimages.filter(a => a.life > 0);

    // screen blood
    for (const d of CR.screenDrops) {
      d.life -= dt;
      d.x += d.vx * dt;
      d.y += d.vy * dt;
      d.vy += 12 * dt;
    }
    CR.screenDrops = CR.screenDrops.filter(d => d.life > 0);

    // corpses fade
    for (const c of CR.corpses) {
      if (!c.static) c.life -= dt;
    }
    CR.corpses = CR.corpses.filter(c => c.life > 0);
    if (CR.corpses.length > 80) CR.corpses.splice(0, CR.corpses.length - 80);
  }

  function updateWaves(dt) {
    if (state.mode !== 'playing') return;
    if (state.waveState === 'active') {
      state.spawnTimer -= dt;
      if (state.spawnQueue.length && state.spawnTimer <= 0) {
        state.spawnTimer = Math.max(0.14, 0.42 - state.wave * 0.012);
        const type = state.spawnQueue.shift();
        CR.spawnZombie(type, false);
      }
      state.remaining = state.spawnQueue.length + CR.zombies.filter(z => !z.dead).length;
      if (!state.spawnQueue.length && CR.zombies.length === 0) {
        state.waveState = 'clear';
        state.waveTimer = 4.2;
        CR.announce('YARD CLEARED', 'CATCH YOUR BREATH // NEXT WAVE INCOMING', 2.6);
        player.hp = Math.min(player.maxHp, player.hp + 8);
        player.frenzy = Math.min(100, player.frenzy + 8);
        if (CR.sound) CR.sound.wave();
      }
    } else if (state.waveState === 'clear') {
      state.waveTimer -= dt;
      if (state.waveTimer <= 0) CR.startWave(state.wave + 1);
    }
  }

  function updateCamera(dt) {
    const p = player;
    const lookX = Math.cos(p.aim) * 16;
    const lookY = Math.sin(p.aim) * 16;
    let tx = p.x + lookX - view.w / 2;
    let ty = p.y + lookY - view.h / 2;
    if (state.mode === 'menu') {
      tx = 800 - view.w / 2 + Math.sin(state.time * 0.1) * 26;
      ty = 500 - view.h / 2 + Math.cos(state.time * 0.08) * 14;
    }
    tx = clamp(tx, 0, Math.max(0, world.w - view.w));
    ty = clamp(ty, 0, Math.max(0, world.h - view.h));
    const smooth = state.mode === 'menu' ? 2.5 : 9;
    cam.x = lerp(cam.x, tx, Math.min(1, dt * smooth));
    cam.y = lerp(cam.y, ty, Math.min(1, dt * smooth));
  }

  CR.update = function (rawDt) {
    let dt = Math.min(rawDt, 0.05);
    state.time += dt;
    if (state.hitstop > 0) {
      state.hitstop -= dt;
      dt *= 0.18;
    }
    if (state.slowmo > 0) {
      state.slowmo -= rawDt;
      dt *= 0.35;
    }
    state.shake = Math.max(0, state.shake - rawDt * 18);
    state.flash = Math.max(0, state.flash - rawDt * 3.4);
    state.whiteFlash = Math.max(0, state.whiteFlash - rawDt * 3.2);
    state.damageFlash = Math.max(0, state.damageFlash - rawDt * 3.0);
    if (state.announce) {
      state.announce.time -= rawDt;
      if (state.announce.time <= 0) state.announce = null;
    }
    if (state.comboTimer > 0) {
      state.comboTimer -= rawDt;
      if (state.comboTimer <= 0) state.combo = 0;
    }
    if (state.lowHealth !== (player.hp <= 30 && player.hp > 0)) {
      state.lowHealth = player.hp <= 30 && player.hp > 0;
      CR.dom.damage.classList.toggle('low', state.lowHealth);
    }

    if (state.mode !== 'paused') {
      state.gameTime += dt;
      updatePlayer(dt);
      if (state.mode === 'playing') {
        updateZombies(dt);
        updateWaves(dt);
        updatePickups(dt);
      } else if (state.mode === 'menu') {
        updateMenuZombies(dt);
      } else if (state.mode === 'dead') {
        updateZombies(dt);
      }
      updateParticles(dt);
      updateCamera(dt);
      CR.updateFog(dt);
      updateRain(dt);
    }

    state.shakeX = state.shake ? rand(-state.shake, state.shake) : 0;
    state.shakeY = state.shake ? rand(-state.shake, state.shake) : 0;

    // lightning
    state.lightning -= rawDt;
    if (state.lightning <= 0) {
      state.lightning = rand(7, 19);
      state.whiteFlash = 0.65;
      if (CR.sound) {
        CR.sound.thunder();
        setTimeout(() => CR.sound.thunder(), 420);
      }
    }
    input.pressed.clear();
  };

  function updateMenuZombies(dt) {
    // The title screen is a living diorama: distant ghouls shuffle through the mist.
    for (const z of CR.zombies) {
      z.phase += dt * 1.7;
      z.x += Math.cos(z.angle + Math.PI / 2) * z.speed * 0.2 * dt;
      z.y += Math.sin(z.angle + Math.PI / 2) * z.speed * 0.2 * dt;
      z.angle += Math.sin(state.time + z.seed) * 0.002;
      if (z.x < 120 || z.x > world.w - 120) z.angle += Math.PI;
      if (z.y < 120 || z.y > world.h - 120) z.angle += Math.PI;
    }
  }

  function updateRain(dt) {
    for (const r of CR.rain) {
      r.y += r.speed * dt;
      r.x -= r.speed * 0.16 * dt;
      if (r.y > view.h + 8) {
        r.y = rand(-20, -2);
        r.x = rand(0, view.w + 30);
      }
      if (r.x < -8) r.x = view.w + 8;
    }
  }

  CR.addFloater = function (text, x, y, color = '#e9e2cf', scale = 1) {
    // Stack simultaneous popups above each other instead of drawing them on top.
    let top = y;
    for (const f of CR.floaters) {
      if (Math.abs(f.x - x) < 80 && Math.abs(f.y - y) < 64) {
        top = Math.min(top, f.y - 9);
      }
    }
    top = Math.max(top, y - 36);
    CR.floaters.push({ text, x, y: top, color, scale, life: 1.1, max: 1.1, seed: rand(0, 10) });
  };

  CR.spawnMenu = function () {
    CR.zombies.length = 0;
    CR.particles.length = 0;
    CR.corpses.length = 0;
    CR.gibs.length = 0;
    CR.floaters.length = 0;
    CR.pickups.length = 0;
    CR.screenDrops.length = 0;
    const p = player;
    p.x = 800; p.y = 520; p.hp = 100; p.dead = false; p.rev = 0.12;
    p.aim = -0.35; p.walkPhase = 0;
    cam.x = clamp(p.x - view.w / 2, 0, world.w - view.w);
    cam.y = clamp(p.y - view.h / 2, 0, world.h - view.h);
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * TAU + rand(-0.4, 0.4);
      const d = rand(150, 260);
      const z = CR.spawnZombie(i % 3 === 0 ? 'runner' : 'walker', false);
      z.x = clamp(p.x + Math.cos(a) * d, 60, world.w - 60);
      z.y = clamp(p.y + Math.sin(a) * d, 60, world.h - 60);
      z.angle = a + Math.PI;
      z.attackCd = 99;
    }
    state.mode = 'menu';
  };
})();
