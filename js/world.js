(() => {
  'use strict';
  const CR = window.CR;
  const {
    TAU, clamp, lerp, rand, randInt, pick, dist, mulberry32, rr, ellipse,
    drawText, world
  } = CR;

  const R = mulberry32(0xB10D5A7);

  const ground = CR.ground = document.createElement('canvas');
  ground.width = world.w;
  ground.height = world.h;
  const baseDecals = CR.baseDecals = document.createElement('canvas');
  baseDecals.width = world.w;
  baseDecals.height = world.h;
  const decals = CR.decals = document.createElement('canvas');
  decals.width = world.w;
  decals.height = world.h;
  CR.decalCtx = decals.getContext('2d');
  CR.baseDecalCtx = baseDecals.getContext('2d');
  CR.decalCtx.imageSmoothingEnabled = false;

  const PAL = {
    dirt: ['#121a11', '#192216', '#1e2719', '#212b1b', '#0f150f', '#27311f'],
    grass: ['#263a20', '#304726', '#3c532c', '#20301b', '#4a5f37'],
    concrete: ['#3e4038', '#45473e', '#383a33', '#4c4e44', '#33352e'],
    crack: '#181a16',
    blood: ['#5b070d', '#7d0a12', '#9d0e18', '#b9121f', '#3d0408']
  };

  function speckle(c, x, y, w, h, colors, count, alpha = 1) {
    for (let i = 0; i < count; i++) {
      c.globalAlpha = alpha * rand(0.25, 0.9);
      c.fillStyle = pick(colors);
      const s = randInt(1, 4);
      c.fillRect((x + R() * w) | 0, (y + R() * h) | 0, s, s);
    }
    c.globalAlpha = 1;
  }

  function tuft(c, x, y, scale = 1) {
    c.fillStyle = pick(PAL.grass);
    const n = randInt(2, 4);
    for (let i = 0; i < n; i++) {
      const dx = randInt(-3, 3);
      const h = randInt(2, 5) * scale;
      c.fillRect((x + dx) | 0, (y - h) | 0, 1, h);
      if (R() > 0.55) c.fillRect((x + dx + 1) | 0, (y - h + 1) | 0, 1, Math.max(1, h - 2));
    }
  }

  function bone(c, x, y, rot = 0) {
    c.save();
    c.translate(x | 0, y | 0);
    c.rotate(rot);
    c.fillStyle = '#9a9178';
    c.fillRect(-4, 0, 8, 1);
    c.fillStyle = '#c0b69b';
    c.fillRect(-5, -1, 2, 2);
    c.fillRect(3, -1, 2, 2);
    c.fillStyle = '#756d58';
    c.fillRect(-4, 1, 8, 1);
    c.restore();
  }

  function skull(c, x, y) {
    c.fillStyle = '#8e866f';
    c.fillRect(x - 2, y - 2, 5, 4);
    c.fillRect(x - 1, y + 2, 3, 1);
    c.fillStyle = '#2b2a23';
    c.fillRect(x - 1, y - 1, 1, 1);
    c.fillRect(x + 1, y - 1, 1, 1);
    c.fillStyle = '#c0b69b';
    c.fillRect(x - 1, y - 2, 1, 1);
  }

  function puddle(c, x, y, rx, ry) {
    c.save();
    c.globalAlpha = 0.62;
    c.fillStyle = '#152229';
    c.beginPath();
    c.ellipse(x, y, rx, ry, rand(-0.2, 0.2), 0, TAU);
    c.fill();
    c.globalAlpha = 0.5;
    c.fillStyle = '#294047';
    c.beginPath();
    c.ellipse(x - rx * 0.14, y - ry * 0.2, rx * 0.74, ry * 0.56, -0.1, 0, TAU);
    c.fill();
    // reflected sky sheen
    c.globalAlpha = 0.3;
    c.fillStyle = '#9ab5b0';
    c.fillRect((x - rx * 0.5) | 0, (y - ry * 0.38) | 0, Math.max(2, rx * 0.56) | 0, 1);
    c.fillRect((x + rx * 0.12) | 0, (y + ry * 0.22) | 0, Math.max(1, rx * 0.3) | 0, 1);
    c.globalAlpha = 0.16;
    c.strokeStyle = '#b9d0c9';
    c.lineWidth = 1;
    c.beginPath();
    c.ellipse(x, y, rx * 0.9, ry * 0.82, 0, 0.3, 2.5);
    c.stroke();
    // wet rim
    c.globalAlpha = 0.18;
    c.strokeStyle = '#0a1114';
    c.lineWidth = 2;
    c.beginPath();
    c.ellipse(x, y, rx, ry, 0, 0, TAU);
    c.stroke();
    c.restore();
  }

  function crack(c, x, y, length) {
    c.strokeStyle = PAL.crack;
    c.globalAlpha = 0.8;
    c.lineWidth = 1;
    c.beginPath();
    c.moveTo(x | 0, y | 0);
    let px = x, py = y;
    for (let i = 0; i < length; i++) {
      px += rand(-5, 5);
      py += rand(-5, 5);
      c.lineTo(px | 0, py | 0);
      if (R() > 0.8) {
        c.moveTo(px | 0, py | 0);
        c.lineTo((px + rand(-8, 8)) | 0, (py + rand(-8, 8)) | 0);
        c.moveTo(px | 0, py | 0);
      }
    }
    c.stroke();
    c.globalAlpha = 1;
  }

  function hazardStrip(c, x, y, w, h, vertical = false) {
    c.save();
    c.beginPath();
    c.rect(x, y, w, h);
    c.clip();
    c.globalAlpha = 0.2;
    c.fillStyle = '#d5b23f';
    c.fillRect(x, y, w, h);
    c.fillStyle = '#1b1b17';
    if (vertical) {
      for (let yy = y - w; yy < y + h + w; yy += 14) {
        c.beginPath();
        c.moveTo(x, yy);
        c.lineTo(x + w, yy + w);
        c.lineTo(x + w, yy + w + 7);
        c.lineTo(x, yy + 7);
        c.closePath();
        c.fill();
      }
    } else {
      for (let xx = x - h; xx < x + w + h; xx += 14) {
        c.beginPath();
        c.moveTo(xx, y);
        c.lineTo(xx + h, y + h);
        c.lineTo(xx + h + 7, y + h);
        c.lineTo(xx + 7, y);
        c.closePath();
        c.fill();
      }
    }
    c.restore();
  }

  function buildGround() {
    const c = ground.getContext('2d');
    c.imageSmoothingEnabled = false;

    c.fillStyle = '#0b0f0b';
    c.fillRect(0, 0, world.w, world.h);

    // rough earth
    speckle(c, 0, 0, world.w, world.h, PAL.dirt, 2600, 0.8);    for (let i = 0; i < 90; i++) {
      const x = R() * world.w, y = R() * world.h, s = rand(14, 70);
      c.globalAlpha = 0.22;
      c.fillStyle = pick(['#151b12', '#0e140e', '#1a2015', '#090d09']);
      c.beginPath();
      c.ellipse(x, y, s, s * rand(0.35, 0.7), rand(0, TAU), 0, TAU);
      c.fill();
    }
    c.globalAlpha = 1;

    // concrete processing slab
    const sx = 208, sy = 148, sw = 1184, sh = 704;
    c.fillStyle = '#262923';
    c.fillRect(sx - 7, sy - 7, sw + 14, sh + 14);
    c.fillStyle = '#464840';
    c.fillRect(sx, sy, sw, sh);
    c.fillStyle = '#54564b';
    c.fillRect(sx, sy, sw, 2);
    c.fillRect(sx, sy, 2, sh);
    c.fillStyle = '#32342d';
    c.fillRect(sx, sy + sh - 2, sw, 2);
    c.fillRect(sx + sw - 2, sy, 2, sh);

    // chipped, uneven slab edge
    for (let i = 0; i < 80; i++) {
      c.fillStyle = pick(PAL.dirt);
      c.fillRect((sx + R() * sw) | 0, (sy - 7 + R() * 12) | 0, randInt(2, 9), randInt(2, 6));
      c.fillRect((sx + R() * sw) | 0, (sy + sh - 5 + R() * 12) | 0, randInt(2, 9), randInt(2, 6));
      c.fillRect((sx - 7 + R() * 12) | 0, (sy + R() * sh) | 0, randInt(2, 6), randInt(2, 9));
      c.fillRect((sx + sw - 5 + R() * 12) | 0, (sy + R() * sh) | 0, randInt(2, 6), randInt(2, 9));
    }

    // slab mottling and stains
    for (let i = 0; i < 700; i++) {
      c.globalAlpha = rand(0.08, 0.32);
      c.fillStyle = pick(PAL.concrete);
      const s = rand(1, 9);
      c.fillRect((sx + R() * sw) | 0, (sy + R() * sh) | 0, s, randInt(1, 4));
    }
    c.globalAlpha = 1;

    // expansion seams
    c.strokeStyle = '#1c1e1a';
    c.globalAlpha = 0.8;
    c.lineWidth = 1;
    for (let x = sx + 112; x < sx + sw; x += 112) {
      c.beginPath();
      c.moveTo(x + 0.5, sy);
      c.lineTo(x + 0.5, sy + sh);
      c.stroke();
    }
    for (let y = sy + 112; y < sy + sh; y += 112) {
      c.beginPath();
      c.moveTo(sx, y + 0.5);
      c.lineTo(sx + sw, y + 0.5);
      c.stroke();
    }
    c.globalAlpha = 1;

    // cracks
    for (let i = 0; i < 34; i++) {
      crack(c, sx + R() * sw, sy + R() * sh, randInt(5, 18));
    }

    // old oil and rust
    for (let i = 0; i < 28; i++) {
      const x = sx + R() * sw, y = sy + R() * sh;
      c.globalAlpha = rand(0.12, 0.3);
      c.fillStyle = pick(['#0b0d0c', '#19120e', '#4b2415', '#2b2417']);
      c.beginPath();
      c.ellipse(x, y, rand(5, 26), rand(3, 13), rand(0, TAU), 0, TAU);
      c.fill();
    }
    c.globalAlpha = 1;

    // hazard edges, worn
    hazardStrip(c, sx + 2, sy + 4, sw - 4, 10);
    hazardStrip(c, sx + 2, sy + sh - 14, sw - 4, 10);
    hazardStrip(c, sx + 3, sy + 12, 10, sh - 24, true);
    hazardStrip(c, sx + sw - 13, sy + 12, 10, sh - 24, true);

    // painted floor markings
    c.save();
    c.translate(1030, 710);
    c.rotate(-0.09);
    c.globalAlpha = 0.12;
    drawText(c, '07', 0, 0, { scale: 15, color: '#d7c99c', shadow: false });
    c.globalAlpha = 0.08;
    drawText(c, 'MEAT', -8, 118, { scale: 6, color: '#c5b88e', shadow: false });
    c.restore();

    // faded loading-bay markings around the spawn floor
    c.save();
    c.globalAlpha = 0.12;
    c.strokeStyle = '#d9c47a';
    c.lineWidth = 3;
    c.setLineDash([22, 14]);
    c.strokeRect(664, 452, 274, 138);
    c.setLineDash([]);
    c.globalAlpha = 0.09;
    c.fillStyle = '#d9c47a';
    c.fillRect(668, 456, 120, 4);
    c.fillRect(816, 582, 118, 4);
    c.restore();

    // tire skid arcs near the truck
    c.save();
    c.globalAlpha = 0.2;
    c.strokeStyle = '#171915';
    c.lineWidth = 5;
    c.beginPath(); c.arc(1000, 520, 74, 1.9, 3.2); c.stroke();
    c.lineWidth = 3;
    c.beginPath(); c.arc(1000, 520, 82, 1.9, 3.2); c.stroke();
    c.globalAlpha = 0.12;
    c.strokeStyle = '#0b0d0a';
    c.lineWidth = 2;
    c.beginPath(); c.arc(1000, 520, 90, 1.95, 3.15); c.stroke();
    c.restore();

    // moss creeping in from the edges
    for (let i = 0; i < 420; i++) {
      const edge = R();
      let x, y;
      if (edge < 0.4) { x = sx + R() * sw; y = sy + rand(-8, 26); }
      else if (edge < 0.7) { x = sx + R() * sw; y = sy + sh + rand(-28, 8); }
      else if (edge < 0.85) { x = sx + rand(-10, 26); y = sy + R() * sh; }
      else { x = sx + sw + rand(-26, 10); y = sy + R() * sh; }
      c.globalAlpha = rand(0.15, 0.55);
      c.fillStyle = pick(PAL.grass);
      c.fillRect(x | 0, y | 0, randInt(1, 3), randInt(1, 3));
    }
    c.globalAlpha = 1;

    // puddles / wet patches
    puddle(c, 728, 604, 38, 12);
    puddle(c, 908, 530, 22, 8);
    puddle(c, 594, 466, 27, 9);
    puddle(c, 1044, 560, 18, 7);
    puddle(c, 422, 720, 33, 11);

    // drainage grate
    c.save();
    c.translate(824, 622);
    c.fillStyle = '#141713';
    c.fillRect(-13, -8, 26, 16);
    c.fillStyle = '#353a32';
    c.fillRect(-12, -7, 24, 14);
    c.fillStyle = '#0c0e0b';
    for (let i = -10; i <= 10; i += 4) c.fillRect(i, -6, 2, 12);
    c.fillStyle = '#4a5045';
    c.fillRect(-13, -8, 26, 1);
    c.fillRect(-13, 7, 26, 1);
    c.restore();

    // scattered debris
    for (let i = 0; i < 260; i++) {
      const x = R() * world.w, y = R() * world.h;
      if (x > sx && x < sx + sw && y > sy && y < sy + sh && R() < 0.7) continue;
      c.globalAlpha = rand(0.35, 0.9);
      c.fillStyle = pick(['#2a2118', '#3a2b1d', '#17140e', '#4a3a27', '#151a12']);
      c.fillRect(x | 0, y | 0, randInt(1, 3), randInt(1, 2));
    }
    c.globalAlpha = 1;

    // bones, shells, teeth
    for (let i = 0; i < 34; i++) {
      const x = rand(260, 1360), y = rand(190, 820);
      if (R() < 0.35) bone(c, x, y, rand(0, TAU));
      else if (R() < 0.5) skull(c, x, y);
      else {
        c.fillStyle = pick(['#8b6a2c', '#b08a36', '#5e4720']);
        c.fillRect(x | 0, y | 0, 2, 1);
      }
    }

    // grass tufts around the slab and in cracks
    for (let i = 0; i < 900; i++) {
      const x = R() * world.w, y = R() * world.h;
      if (x > sx + 8 && x < sx + sw - 8 && y > sy + 8 && y < sy + sh - 8) {
        if (R() < 0.85) continue;
      }
      tuft(c, x, y, rand(0.6, 1.4));
    }

    // outer fence shadow / chain-link hint
    c.globalAlpha = 0.22;
    c.strokeStyle = '#4b5149';
    c.lineWidth = 1;
    for (let x = 36; x < world.w - 36; x += 9) {
      c.beginPath();
      c.moveTo(x, 30);
      c.lineTo(x + 9, 58);
      c.stroke();
      c.beginPath();
      c.moveTo(x + 9, 30);
      c.lineTo(x, 58);
      c.stroke();
    }
    c.globalAlpha = 1;

    // border posts
    c.fillStyle = '#1a1e19';
    for (let x = 34; x < world.w; x += 128) {
      c.fillRect(x, 24, 5, 42);
      c.fillStyle = '#343a30';
      c.fillRect(x + 1, 24, 1, 42);
      c.fillStyle = '#1a1e19';
    }
  }

  function baseBlood() {
    const c = CR.baseDecalCtx;
    c.clearRect(0, 0, world.w, world.h);

    // old blood and drag marks near the spawn yard
    CR.paintSplat(c, 708, 556, -0.9, 30, 1.25, 0.8);
    CR.paintSplat(c, 862, 474, 2.2, 18, 0.8, 0.7);
    CR.paintSplat(c, 646, 468, 0.3, 16, 0.75, 0.6);
    CR.paintSplat(c, 944, 592, -2.4, 24, 1.0, 0.7);
    CR.paintSplat(c, 1090, 520, 1.7, 14, 0.7, 0.55);

    CR.paintPool(c, 708, 556, 18, 0.6);
    CR.paintPool(c, 862, 474, 11, 0.55);
    CR.paintPool(c, 646, 468, 9, 0.5);

    // drag trail
    c.save();
    c.globalAlpha = 0.34;
    c.strokeStyle = '#52070c';
    c.lineWidth = 8;
    c.lineCap = 'round';
    c.beginPath();
    c.moveTo(1110, 540);
    c.bezierCurveTo(1000, 545, 930, 585, 875, 566);
    c.stroke();
    c.lineWidth = 3;
    c.strokeStyle = '#8d0d16';
    c.stroke();
    c.restore();

    // handprints
    for (let i = 0; i < 8; i++) {
      const x = 1000 + rand(-80, 80), y = 540 + rand(-40, 40);
      c.globalAlpha = rand(0.2, 0.45);
      c.fillStyle = '#6e080f';
      c.fillRect(x | 0, y | 0, 3, 5);
      for (let f = 0; f < 4; f++) c.fillRect((x - 2 + f * 2) | 0, (y - 3) | 0, 1, 3);
    }
    c.globalAlpha = 1;
  }

  CR.paintSplat = function (c, x, y, dir, count = 14, scale = 1, alpha = 1) {
    c.save();
    c.translate(x | 0, y | 0);
    c.rotate(dir || 0);
    c.globalAlpha = alpha;
    const colors = PAL.blood;
    for (let i = 0; i < count; i++) {
      const along = rand(-8, 28) * scale;
      const side = rand(-12, 12) * scale * (0.4 + Math.abs(along) / 30);
      const s = rand(1, 5) * scale;
      c.fillStyle = pick(colors);
      c.globalAlpha = alpha * rand(0.35, 0.95);
      if (R() < 0.3) {
        c.beginPath();
        c.ellipse(along, side, s * rand(0.6, 1.5), s * rand(0.4, 1), rand(0, TAU), 0, TAU);
        c.fill();
      } else {
        c.fillRect(along | 0, side | 0, Math.max(1, s) | 0, Math.max(1, s * rand(0.5, 1.2)) | 0);
      }
    }
    // long directional droplets
    for (let i = 0; i < count * 0.45; i++) {
      const d = rand(8, 40) * scale;
      c.globalAlpha = alpha * rand(0.25, 0.7);
      c.fillStyle = pick(colors);
      c.fillRect((Math.cos(rand(-0.3, 0.3)) * d) | 0, (rand(-1, 1) + Math.sin(rand(-0.3, 0.3)) * d * 0.2) | 0, rand(1, 2) | 0, rand(1, 3) | 0);
    }
    c.restore();
  };

  CR.paintPool = function (c, x, y, r, alpha = 0.8) {
    c.save();
    c.globalAlpha = alpha;
    c.fillStyle = '#3c0408';
    c.beginPath();
    c.ellipse(x, y, r, r * rand(0.42, 0.62), rand(0, TAU), 0, TAU);
    c.fill();
    c.globalAlpha = alpha * 0.8;
    c.fillStyle = '#720912';
    c.beginPath();
    c.ellipse(x - r * 0.1, y - r * 0.06, r * 0.78, r * 0.38, rand(0, TAU), 0, TAU);
    c.fill();
    c.globalAlpha = alpha * 0.42;
    c.fillStyle = '#b51320';
    c.fillRect((x - r * 0.35) | 0, (y - r * 0.15) | 0, Math.max(2, r * 0.4) | 0, 1);
    c.restore();
  };

  CR.addSplat = function (x, y, dir, count, scale, alpha = 0.9) {
    CR.paintSplat(CR.decalCtx, x, y, dir, count, scale, alpha);
  };
  CR.addPool = function (x, y, r, alpha = 0.85) {
    CR.paintPool(CR.decalCtx, x, y, r, alpha);
  };

  CR.resetDecals = function () {
    const c = CR.decalCtx;
    c.clearRect(0, 0, world.w, world.h);
    c.drawImage(baseDecals, 0, 0);
  };

  CR.buildWorld = function () {
    buildGround();
    baseBlood();
    CR.resetDecals();
  };

  // weather / fog sprites
  function makeFog() {
    const c = document.createElement('canvas');
    c.width = 220; c.height = 110;
    const x = c.getContext('2d');
    const g = x.createRadialGradient(110, 55, 2, 110, 55, 100);
    g.addColorStop(0, 'rgba(168, 188, 178, 0.28)');
    g.addColorStop(0.5, 'rgba(140, 165, 158, 0.1)');
    g.addColorStop(1, 'rgba(120, 150, 145, 0)');
    x.fillStyle = g;
    x.fillRect(0, 0, 220, 110);
    return c;
  }
  CR.fogSprite = makeFog();

  CR.fog = [];
  for (let i = 0; i < 7; i++) {
    CR.fog.push({
      x: rand(0, world.w), y: rand(0, world.h),
      vx: rand(2, 8), vy: rand(-2, 2),
      s: rand(0.8, 2.0), a: rand(0.05, 0.13)
    });
  }

  // rain is screen-space, rebuilt on resize
  CR.buildRain = function () {
    CR.rain.length = 0;
    const n = Math.round(CR.view.w * CR.view.h / 1500);
    for (let i = 0; i < n; i++) {
      CR.rain.push({
        x: rand(0, CR.view.w), y: rand(0, CR.view.h),
        len: rand(3, 8), speed: rand(130, 230), a: rand(0.12, 0.35)
      });
    }
  };

  CR.updateFog = function (dt) {
    for (const f of CR.fog) {
      f.x += f.vx * dt;
      f.y += f.vy * dt;
      if (f.x > world.w + 120) f.x = -120;
      if (f.x < -120) f.x = world.w + 120;
      if (f.y > world.h + 80) f.y = -80;
      if (f.y < -80) f.y = world.h + 80;
    }
  };
})();
