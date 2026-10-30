import { game, decalCtx, WORLD, PALETTE, TAU, rand, randInt, chance, pick } from './core.js';

export function spawnGib(x, y, kind, xp, heal, scale) {
  const angle = rand(0, TAU);
  const power = rand(55, 170);
  game.gibs.push({
    x: x,
    y: y,
    vx: Math.cos(angle) * power,
    vy: Math.sin(angle) * power - rand(20, 70),
    rot: rand(0, TAU),
    vrot: rand(-9, 9),
    kind: kind,
    xp: xp || 1,
    heal: heal || 3,
    scale: scale || 1,
    life: rand(36, 48),
    rest: false,
    blink: rand(0, TAU)
  });
  addBlood(x, y, 3, false);
}

export function spawnMist(x, y, count) {
  for (let i = 0; i < count; i += 1) {
    const a = rand(0, TAU);
    game.particles.push({
      x: x + Math.cos(a) * rand(2, 16),
      y: y - rand(0, 20),
      vx: Math.cos(a) * rand(5, 30),
      vy: Math.sin(a) * rand(5, 24) - 1,
      life: rand(0.25, 0.65),
      maxLife: 0.65,
      size: rand(1, 3),
      color: chance(0.5) ? '#5e3f72' : '#c92a45',
      drag: 3,
      gravity: -5
    });
  }
}

export function addBlood(x, y, amount, big) {
  decalCtx.save();
  if (big) {
    decalCtx.globalAlpha = 0.32;
    decalCtx.fillStyle = '#4a0a16';
    decalCtx.beginPath();
    decalCtx.ellipse(x, y + 2, rand(6, 14), rand(3, 7), rand(0, TAU), 0, TAU);
    decalCtx.fill();
  }
  for (let i = 0; i < amount; i += 1) {
    const a = rand(0, TAU);
    const r = rand(0, big ? 18 : 8);
    decalCtx.globalAlpha = rand(0.25, 0.75);
    decalCtx.fillStyle = pick(PALETTE.blood);
    decalCtx.fillRect(
      Math.round(x + Math.cos(a) * r + rand(-2, 2)),
      Math.round(y + Math.sin(a) * r * 0.55 + rand(-1, 4)),
      randInt(1, big ? 4 : 2),
      randInt(1, big ? 3 : 2)
    );
  }
  decalCtx.restore();
}

export function addFloat(text, x, y, color, size) {
  if (!text) return;
  game.texts.push({
    text: text,
    x: x,
    y: y,
    vy: rand(-25, -17),
    vx: rand(-4, 4),
    life: size > 6 ? 1.4 : 0.9,
    maxLife: size > 6 ? 1.4 : 0.9,
    color: color || '#f0e2c4',
    size: size || 5
  });
}

export function clearDecals() {
  decalCtx.clearRect(0, 0, WORLD.w, WORLD.h);
}

export function updateParticles(dt) {
  for (let i = game.particles.length - 1; i >= 0; i -= 1) {
    const part = game.particles[i];
    part.life -= dt;
    part.x += part.vx * dt;
    part.y += part.vy * dt;
    part.vy += (part.gravity || 0) * dt;
    if (part.drag) {
      const drag = Math.pow(0.08, dt * (part.drag / 4));
      part.vx *= drag;
      part.vy *= drag;
    }
    if (part.life <= 0) game.particles.splice(i, 1);
  }
  for (let i = game.texts.length - 1; i >= 0; i -= 1) {
    const text = game.texts[i];
    text.life -= dt;
    text.x += text.vx * dt;
    text.y += text.vy * dt;
    text.vy += 25 * dt;
    if (text.life <= 0) game.texts.splice(i, 1);
  }
  for (let i = game.slashes.length - 1; i >= 0; i -= 1) {
    const slash = game.slashes[i];
    slash.time += dt;
    if (slash.time >= slash.life) game.slashes.splice(i, 1);
  }
  for (let i = game.afterimages.length - 1; i >= 0; i -= 1) {
    const img = game.afterimages[i];
    img.life -= dt;
    if (img.life <= 0) game.afterimages.splice(i, 1);
  }
}

export function updateGibs(dt) {
  const p = game.player;
  for (let i = game.gibs.length - 1; i >= 0; i -= 1) {
    const gib = game.gibs[i];
    gib.life -= dt;
    gib.blink += dt * 3;
    if (!gib.rest) {
      gib.x += gib.vx * dt;
      gib.y += gib.vy * dt;
      gib.vx *= Math.pow(0.03, dt);
      gib.vy *= Math.pow(0.03, dt);
      gib.rot += gib.vrot * dt;
      gib.vrot *= Math.pow(0.08, dt);
      if (Math.abs(gib.vx) + Math.abs(gib.vy) < 12) gib.rest = true;
      if (chance(dt * 9)) addBlood(gib.x, gib.y, 1, false);
    }
    if (p && p.frenzy > 0) {
      const dx = p.x - gib.x;
      const dy = p.y - gib.y;
      const d = Math.hypot(dx, dy);
      if (d < 95 && d > 6) {
        gib.x += (dx / d) * 95 * dt;
        gib.y += (dy / d) * 95 * dt;
      }
    }
    if (gib.life <= 0) game.gibs.splice(i, 1);
  }
}
