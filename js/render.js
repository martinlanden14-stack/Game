(() => {
  'use strict';
  const CR = window.CR;
  const {
    TAU, clamp, lerp, rand, pick, dist, angleDiff, drawText, textWidth, rr,
    ctx, view, world, cam, state, player, input
  } = CR;

  const lightCanvas = document.createElement('canvas');
  const lightCtx = lightCanvas.getContext('2d');
  lightCanvas.width = view.w;
  lightCanvas.height = view.h;

  CR.onResize = function () {
    lightCanvas.width = view.w;
    lightCanvas.height = view.h;
    CR.buildRain();
  };

  // ------------------------------------------------------------
  //  small helpers
  // ------------------------------------------------------------
  function shadow(x, y, rx, ry, a = 0.38) {
    ctx.globalAlpha = a;
    ctx.fillStyle = '#040605';
    ctx.beginPath();
    ctx.ellipse(x, y, rx, ry, 0, 0, TAU);
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  function visible(x, y, margin = 90) {
    return x > cam.x - margin && x < cam.x + view.w + margin &&
      y > cam.y - margin && y < cam.y + view.h + margin;
  }

  function panel(x, y, w, h, a = 0.52) {
    ctx.fillStyle = `rgba(5,8,9,${a})`;
    ctx.fillRect(x, y, w, h);
    ctx.fillStyle = 'rgba(233,226,207,0.08)';
    ctx.fillRect(x, y, w, 1);
  }

  function bar(x, y, w, h, pct, color, bg = '#1b1d1a') {
    ctx.fillStyle = '#050706';
    ctx.fillRect(x - 1, y - 1, w + 2, h + 2);
    ctx.fillStyle = bg;
    ctx.fillRect(x, y, w, h);
    const fw = Math.round(w * clamp(pct, 0, 1));
    ctx.fillStyle = color;
    ctx.fillRect(x, y, fw, h);
    ctx.fillStyle = 'rgba(255,255,255,0.22)';
    ctx.fillRect(x, y, fw, 1);
  }

  // ------------------------------------------------------------
  //  props
  // ------------------------------------------------------------
  function drawProp(p, t) {
    const spr = p.sprite;
    if (!spr) return;
    const sw = spr.width, sh = spr.height;
    const ox = Math.round(p.x - sw / 2);
    let oy;
    if (p.oy === 1) oy = Math.round(p.y - sh + 4);
    else if (p.oy === 0.5) oy = Math.round(p.y - sh / 2);
    else oy = Math.round(p.y - sh);

    if (p.type === 'pine' || p.type === 'deadTree') {
      shadow(p.x + 10, p.y + 3, 26, 8, 0.32);
    } else if (p.type === 'truck') {
      shadow(p.x + 3, p.y + 10, 61, 15, 0.38);
    } else if (p.type === 'dumpster') {
      shadow(p.x + 2, p.y + 8, 43, 12, 0.38);
    } else if (p.type === 'lamp') {
      shadow(p.x + 2, p.y + 2, 9, 3, 0.34);
    } else if (p.type === 'meatframe') {
      shadow(p.x + 3, p.y + 1, 22, 6, 0.3);
    } else {
      shadow(p.x + 2, p.y + 4, sw * 0.3, sh * 0.14, 0.3);
    }

    ctx.drawImage(spr, ox, oy);

    if (p.type === 'firebarrel') drawFireBarrel(p, t);
    if (p.type === 'lamp') drawLampGlow(p, t);
    if (p.type === 'truck') {
      // weak headlight bloom, kept subtle
      ctx.globalAlpha = 0.16;
      ctx.fillStyle = '#e7cf86';
      ctx.fillRect(p.x + 62, p.y - 8, 6, 2);
      ctx.fillRect(p.x + 62, p.y + 5, 6, 2);
      ctx.globalAlpha = 1;
    }
  }

  function drawFireBarrel(p, t) {
    const x = Math.round(p.x), y = Math.round(p.y - 20);
    const flick = Math.sin(t * 13 + p.x) * 0.5 + 0.5;
    for (let i = 0; i < 5; i++) {
      const h = 4 + Math.sin(t * (9 + i) + i * 2.1) * 3 + flick * 3;
      const ox = Math.sin(t * 7 + i * 1.7) * 3;
      ctx.globalAlpha = 0.85 - i * 0.12;
      ctx.fillStyle = i < 2 ? '#ffd166' : i < 4 ? '#ff8a2b' : '#c33b17';
      ctx.fillRect(x - 4 + i * 2 + ox, y - h, 2, h + 2);
    }
    ctx.globalAlpha = 0.35 + flick * 0.25;
    ctx.fillStyle = '#ffb347';
    ctx.fillRect(x - 5, y - 2, 10, 2);
    ctx.globalAlpha = 1;
    // embers
    for (let i = 0; i < 3; i++) {
      const yy = (t * (12 + i * 5) + i * 31) % 38;
      ctx.globalAlpha = (1 - yy / 38) * 0.7;
      ctx.fillStyle = i % 2 ? '#ffd166' : '#ff6b1a';
      ctx.fillRect(x + Math.sin(t * 2 + i * 4) * 7, y - yy, 1, 1);
    }
    ctx.globalAlpha = 1;
  }

  function drawLampGlow(p, t) {
    const x = p.x - 8, y = p.y - 76;
    const flick = 0.86 + Math.sin(t * 17 + p.x) * 0.04 + Math.sin(t * 2.7) * 0.03;
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    const g = ctx.createRadialGradient(x, y, 1, x, y, 26);
    g.addColorStop(0, `rgba(255,224,157,${0.36 * flick})`);
    g.addColorStop(0.4, `rgba(255,186,94,${0.12 * flick})`);
    g.addColorStop(1, 'rgba(255,170,70,0)');
    ctx.fillStyle = g;
    ctx.fillRect(x - 30, y - 30, 60, 60);
    ctx.restore();
  }

  // ------------------------------------------------------------
  //  player
  // ------------------------------------------------------------
  function drawPlayer(p, t) {
    if (p.dead) {
      drawPlayerCorpse(p);
      return;
    }
    const px = Math.round(p.x), py = Math.round(p.y);
    shadow(px + 1, py + 4, 15, 5.5, 0.5);

    // frenzy aura
    if (p.frenzyTime > 0) {
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      const g = ctx.createRadialGradient(px, py, 3, px, py, 30);
      g.addColorStop(0, 'rgba(255,40,40,0.16)');
      g.addColorStop(0.55, 'rgba(190,10,20,0.09)');
      g.addColorStop(1, 'rgba(120,0,10,0)');
      ctx.fillStyle = g;
      ctx.fillRect(px - 32, py - 32, 64, 64);
      ctx.restore();
    }

    // attack arc, world-space
    if (p.attack && p.rev > 0.2) {
      const frenzy = p.frenzyTime > 0;
      const range = 36 + p.rev * 6 + (frenzy ? 8 : 0);
      const sweep = 0.9 + (frenzy ? 0.22 : 0);
      const pulse = 0.18 + Math.abs(Math.sin(t * 24)) * 0.18;
      ctx.save();
      ctx.translate(px, py);
      ctx.rotate(p.aim);
      ctx.globalCompositeOperation = 'lighter';
      ctx.strokeStyle = `rgba(255,138,43,${pulse})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, range, -sweep, sweep);
      ctx.stroke();
      ctx.strokeStyle = `rgba(255,232,168,${pulse * 0.65})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(0, 0, range - 3, -sweep * 0.8, sweep * 0.8);
      ctx.stroke();
      // slash flick
      const a = -sweep + ((t * 7) % 1) * sweep * 2;
      ctx.fillStyle = `rgba(255,210,120,${0.2 + pulse})`;
      ctx.fillRect(Math.cos(a) * (range - 1), Math.sin(a) * (range - 1) - 1, 3, 2);
      ctx.restore();
    }

    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(p.aim);
    ctx.scale(1.22, 1.22);
    const walking = p.moving || p.dashTime > 0;
    const walk = walking ? Math.sin(p.walkPhase) : Math.sin(t * 2) * 0.2;
    const bob = walking ? Math.abs(Math.sin(p.walkPhase)) * 0.9 : Math.sin(t * 2) * 0.35;
    ctx.translate(0, -bob);

    // trailing legs
    drawBoot(-7 + walk * 2.4, -4, '#161b17', '#2a342c');
    drawBoot(-7 - walk * 2.4, 4, '#121713', '#232d26');

    // backpack
    ctx.fillStyle = '#0b100e';
    rr(ctx, -11, -5, 6, 10, 2); ctx.fill();
    ctx.fillStyle = '#393326';
    rr(ctx, -10, -4, 4, 8, 1); ctx.fill();
    ctx.fillStyle = '#17130e';
    ctx.fillRect(-10, -2, 4, 1);
    ctx.fillRect(-10, 2, 4, 1);

    // torso outline and jacket
    ctx.fillStyle = '#0a0f0d';
    rr(ctx, -8, -7, 14, 14, 4); ctx.fill();
    ctx.fillStyle = '#2c4a40';
    rr(ctx, -7, -6, 12, 12, 3); ctx.fill();
    ctx.fillStyle = '#477260';
    ctx.fillRect(-6, -6, 7, 1);
    ctx.fillRect(-6, -5, 3, 1);
    ctx.fillStyle = '#203a32';
    ctx.fillRect(-5, 4, 8, 2);
    // belt
    ctx.fillStyle = '#151712';
    ctx.fillRect(-3, -7, 2, 14);
    ctx.fillStyle = '#a58c4d';
    ctx.fillRect(-3, -1, 2, 2);
    // blood on jacket
    ctx.globalAlpha = 0.55;
    ctx.fillStyle = '#6c0710';
    ctx.fillRect(-4, 2, 4, 2);
    ctx.fillRect(2, -5, 2, 3);
    ctx.globalAlpha = 1;

    // shoulder pads
    ctx.fillStyle = '#0d1512';
    rr(ctx, -3, -8, 6, 3, 1); ctx.fill();
    rr(ctx, -3, 5, 6, 3, 1); ctx.fill();
    ctx.fillStyle = '#4d7160';
    ctx.fillRect(-2, -8, 4, 1);
    ctx.fillRect(-2, 7, 4, 1);

    // arms
    const armBend = p.attack ? 1 : 0;
    ctx.strokeStyle = '#213a33';
    ctx.lineWidth = 4;
    ctx.lineCap = 'butt';
    ctx.beginPath();
    ctx.moveTo(2, -5);
    ctx.lineTo(8 + armBend, -2.5);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(2, 5);
    ctx.lineTo(8 + armBend, 2.5);
    ctx.stroke();
    ctx.strokeStyle = '#5d8571';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(2, -6); ctx.lineTo(8, -3); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(2, 4); ctx.lineTo(8, 1); ctx.stroke();
    // hands
    ctx.fillStyle = '#5f4b36';
    ctx.fillRect(8 + armBend, -4, 3, 3);
    ctx.fillRect(8 + armBend, 1, 3, 3);

    // chainsaw
    drawChainsaw(p, t, armBend);

    // head / gas mask
    ctx.fillStyle = '#0b110e';
    ctx.beginPath(); ctx.arc(4, 0, 5.5, 0, TAU); ctx.fill();
    ctx.fillStyle = '#233830';
    ctx.beginPath(); ctx.arc(4, 0, 4.6, 0, TAU); ctx.fill();
    ctx.fillStyle = '#6a7a63';
    ctx.beginPath(); ctx.arc(5.4, 0, 3.8, 0, TAU); ctx.fill();
    // lenses
    ctx.fillStyle = '#0a0d0a';
    ctx.fillRect(6, -2, 3, 2);
    ctx.fillRect(6, 1, 3, 2);
    ctx.fillStyle = '#e8f5a0';
    ctx.fillRect(7, -2, 1, 1);
    ctx.fillRect(7, 2, 1, 1);
    // filter
    ctx.fillStyle = '#37453b';
    ctx.fillRect(8, -1, 3, 2);
    ctx.fillStyle = '#0b100d';
    ctx.fillRect(9, -1, 1, 2);
    // hood highlights
    ctx.fillStyle = '#3d574a';
    ctx.fillRect(1, -4, 2, 1);
    ctx.fillRect(1, 3, 2, 1);

    // hit flash
    if (p.hurtFlash > 0) {
      ctx.globalAlpha = p.hurtFlash * 0.4;
      ctx.fillStyle = '#ff202b';
      ctx.beginPath(); ctx.arc(0, 0, 14, 0, TAU); ctx.fill();
      ctx.globalAlpha = 1;
    }

    // dash afterimage streaks
    if (p.dashTime > 0) {
      ctx.globalAlpha = 0.4;
      ctx.strokeStyle = '#b8d2c2';
      ctx.lineWidth = 1;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(-14 - i * 5, -4 + i * 4);
        ctx.lineTo(-25 - i * 5, -4 + i * 4);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }

    ctx.restore();
  }

  function drawBoot(x, y, c1, c2) {
    ctx.fillStyle = c1;
    rr(ctx, x - 3, y - 2, 7, 4, 1); ctx.fill();
    ctx.fillStyle = c2;
    ctx.fillRect(x - 2, y - 2, 4, 1);
    ctx.fillStyle = '#070908';
    ctx.fillRect(x + 2, y + 1, 2, 1);
  }

  function drawChainsaw(p, t, armBend) {
    const sx = 9 + armBend + p.swing * 1.2;
    const rev = p.rev;
    const phase = p.bladePhase;

    // glow / heat
    if (rev > 0.15) {
      ctx.globalAlpha = 0.12 + rev * 0.13;
      ctx.fillStyle = p.frenzyTime > 0 ? '#ff3038' : '#ff8a2b';
      ctx.fillRect(sx - 2, -6, 8, 12);
      ctx.globalAlpha = 1;
    }

    // rear handle
    ctx.fillStyle = '#0b0d0b';
    rr(ctx, sx - 2, -7, 6, 3, 1); ctx.fill();
    ctx.fillRect(sx - 1, -5, 2, 2);

    // engine body
    ctx.fillStyle = '#1a0c08';
    rr(ctx, sx, -4, 7, 8, 1); ctx.fill();
    ctx.fillStyle = '#b03e16';
    rr(ctx, sx + 1, -3, 5, 6, 1); ctx.fill();
    ctx.fillStyle = '#f0782a';
    ctx.fillRect(sx + 1, -3, 5, 2);
    ctx.fillStyle = '#ffb063';
    ctx.fillRect(sx + 2, -3, 2, 1);
    ctx.fillStyle = '#3a140c';
    ctx.fillRect(sx + 2, 1, 3, 2);
    // pull start
    ctx.fillStyle = '#15110c';
    ctx.fillRect(sx + 1, 4, 3, 2);
    // tiny brand slash
    ctx.fillStyle = '#ffcf7a';
    ctx.fillRect(sx + 4, 0, 1, 2);

    // blade
    const bx = sx + 7;
    const blen = 18;
    ctx.fillStyle = '#151817';
    ctx.fillRect(bx, -2, blen, 4);
    ctx.fillStyle = '#9aa39b';
    ctx.fillRect(bx, -1.5, blen, 3);
    ctx.fillStyle = '#d5dccf';
    ctx.fillRect(bx, -1, blen - 2, 1);
    ctx.fillStyle = '#474e49';
    ctx.fillRect(bx, 1, blen, 1);

    // chain teeth
    const off = Math.floor(phase) % 4;
    ctx.fillStyle = '#dce0d2';
    for (let i = 0; i < blen; i += 2) {
      if ((i + off) % 4 === 0) {
        ctx.fillRect(bx + i, -3, 1, 1);
        ctx.fillRect(bx + i + 1, 2, 1, 1);
      }
    }
    // cutting glint
    if (rev > 0.5) {
      ctx.globalAlpha = 0.3 + Math.sin(t * 30) * 0.2;
      ctx.fillStyle = '#fff2c4';
      ctx.fillRect(bx + 1, -2, blen - 4, 1);
      ctx.globalAlpha = 1;
    }

    // guard
    ctx.fillStyle = '#242822';
    ctx.fillRect(bx - 1, -4, 2, 8);
    ctx.fillStyle = '#5a6159';
    ctx.fillRect(bx - 1, -4, 1, 8);

    // motion streaks
    if (rev > 0.3) {
      ctx.globalAlpha = 0.18 + rev * 0.14;
      ctx.fillStyle = '#ffd166';
      ctx.fillRect(bx + 2, -5, blen - 3, 1);
      ctx.fillRect(bx + 1, 4, blen - 2, 1);
      ctx.globalAlpha = 1;
    }
  }

  function drawPlayerCorpse(p) {
    ctx.save();
    ctx.translate(Math.round(p.x), Math.round(p.y));
    ctx.rotate(p.aim);
    ctx.scale(1.16, 1.16);
    shadow(0, 4, 13, 5, 0.4);
    ctx.fillStyle = '#213b33';
    rr(ctx, -9, -5, 15, 10, 3); ctx.fill();
    ctx.fillStyle = '#0d1411';
    rr(ctx, -12, -3, 6, 7, 2); ctx.fill();
    ctx.fillStyle = '#5e6e5b';
    ctx.beginPath(); ctx.arc(5, 0, 4, 0, TAU); ctx.fill();
    ctx.fillStyle = '#0b100d';
    ctx.fillRect(5, -2, 3, 2);
    ctx.fillStyle = '#6b0710';
    ctx.globalAlpha = 0.6;
    ctx.fillRect(-6, -2, 9, 4);
    ctx.restore();
  }

  // ------------------------------------------------------------
  //  zombies
  // ------------------------------------------------------------
  function drawZombie(z, t) {
    const px = Math.round(z.x), py = Math.round(z.y);
    const s = z.scale;
    shadow(px + 1, py + 3, 10.5 * s, 4.5 * s, 0.42);

    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(z.angle);
    const walk = Math.sin(t * (z.type === 'runner' ? 11 : 5.5) + z.seed);
    const bob = Math.abs(walk) * 0.7;
    ctx.translate(0, -bob);
    ctx.scale(s * 1.16, s * 1.16);

    const skin = z.boss ? '#8c8660' : z.type === 'runner' ? '#8b9673' : '#7f9068';
    const skinDark = z.boss ? '#5d583d' : '#5a6a4a';
    const shirt = z.type === 'runner' ? '#4a3733' : z.boss ? '#382e27' : '#3d4c34';
    const shirtDark = z.type === 'runner' ? '#2c211f' : z.boss ? '#241d18' : '#283423';

    // legs
    drawZLeg(-5 + walk * 2.2, -3, skinDark, skin);
    drawZLeg(-5 - walk * 2.2, 3, skinDark, skin);
    if (z.boss) {
      // heavy feet
      ctx.fillStyle = '#17140f';
      ctx.fillRect(-9, -6, 5, 3);
      ctx.fillRect(-9, 3, 5, 3);
    }

    // torso
    ctx.fillStyle = '#0c100c';
    rr(ctx, -7, -6, 13, 12, 3); ctx.fill();
    ctx.fillStyle = shirt;
    rr(ctx, -6, -5, 11, 10, 2); ctx.fill();
    ctx.fillStyle = shirtDark;
    ctx.fillRect(-5, 2, 9, 2);
    // exposed chest / ribs
    ctx.fillStyle = skinDark;
    rr(ctx, 0, -3, 4, 5, 1); ctx.fill();
    ctx.fillStyle = '#a49b7d';
    for (let i = 0; i < 3; i++) ctx.fillRect(1, -2 + i * 2, 3, 1);
    // blood
    ctx.globalAlpha = 0.6;
    ctx.fillStyle = '#690710';
    ctx.fillRect(-4, -4, 3, 2);
    ctx.fillRect(-1, 2, 4, 1);
    ctx.globalAlpha = 1;

    // arms
    if (z.limbs.armL) {
      drawZArm(1, -5, walk, skin, skinDark, false);
    } else {
      drawStump(1, -5, skinDark);
    }
    if (z.limbs.armR) {
      drawZArm(1, 5, -walk, skin, skinDark, true);
    } else {
      drawStump(1, 5, skinDark);
    }

    // neck + head
    if (z.limbs.head) {
      ctx.fillStyle = '#11150f';
      ctx.beginPath(); ctx.arc(5, 0, 5.2, 0, TAU); ctx.fill();
      ctx.fillStyle = skin;
      ctx.beginPath(); ctx.arc(5.2, 0, 4.4, 0, TAU); ctx.fill();
      ctx.fillStyle = skinDark;
      ctx.fillRect(3, -4, 3, 2);
      // hair / scalp
      ctx.fillStyle = z.boss ? '#17130e' : '#23251b';
      ctx.fillRect(2, -4, 4, 3);
      ctx.fillRect(1, -2, 2, 2);
      // jaw / mouth
      ctx.fillStyle = '#24120f';
      ctx.fillRect(7, 1, 3, 2);
      ctx.fillStyle = '#b9ae8d';
      ctx.fillRect(8, 1, 1, 1);
      // eyes
      const eye = z.type === 'runner' ? '#ff3b43' : z.boss ? '#ff9a2b' : '#d6cf74';
      ctx.fillStyle = eye;
      ctx.fillRect(6, -2, 2, 1);
      ctx.fillRect(6, 2, 2, 1);
      ctx.fillStyle = 'rgba(255,80,60,0.35)';
      ctx.fillRect(6, -2, 3, 1);
      // wounds
      ctx.globalAlpha = 0.55;
      ctx.fillStyle = '#5b070d';
      ctx.fillRect(4, 3, 2, 2);
      ctx.globalAlpha = 1;
      if (z.type === 'brute' || z.boss) {
        // bone spikes / butcher apron
        ctx.fillStyle = '#d1c5a1';
        ctx.fillRect(-1, -7, 2, 2);
        ctx.fillRect(-3, 5, 2, 2);
        if (z.boss) {
          ctx.fillStyle = '#7a0b12';
          rr(ctx, -4, -4, 6, 8, 1); ctx.fill();
          ctx.fillStyle = '#c8b896';
          ctx.fillRect(-2, 0, 1, 5);
        }
      }
    } else {
      // neck stump
      ctx.fillStyle = skinDark;
      ctx.fillRect(3, -2, 4, 4);
      ctx.fillStyle = '#7d0a12';
      ctx.fillRect(5, -1, 2, 2);
    }

    // attack swipe
    if (z.swipe > 0) {
      ctx.globalAlpha = z.swipe * 2.2;
      ctx.strokeStyle = '#ff4d55';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(0, 0, 16, -0.7, 0.7);
      ctx.stroke();
      ctx.globalAlpha = 1;
    }

    // flash
    if (z.flash > 0) {
      ctx.globalAlpha = z.flash * 2.0;
      ctx.fillStyle = '#ff4b52';
      ctx.beginPath(); ctx.arc(1, 0, 9, 0, TAU); ctx.fill();
      ctx.globalAlpha = 1;
    }
    ctx.restore();

    // health bar
    if (!z.boss && z.hp < z.maxHp) {
      const w = Math.max(14, 18 * s);
      const x = px - w / 2, y = py - 16 * s - 5;
      ctx.fillStyle = '#050706';
      ctx.fillRect(x - 1, y - 1, w + 2, 3);
      ctx.fillStyle = '#391017';
      ctx.fillRect(x, y, w, 1);
      ctx.fillStyle = '#b91622';
      ctx.fillRect(x, y, w * clamp(z.hp / z.maxHp, 0, 1), 1);
    }
    if (z.boss) {
      // marker
      ctx.globalAlpha = 0.6;
      ctx.fillStyle = '#ffb15c';
      ctx.fillRect(px - 1, py - 46, 2, 2);
      ctx.globalAlpha = 1;
    }
  }

  function drawZLeg(x, y, c1, c2) {
    ctx.fillStyle = c1;
    rr(ctx, x - 3, y - 2, 8, 4, 1); ctx.fill();
    ctx.fillStyle = c2;
    ctx.fillRect(x - 1, y - 1, 4, 1);
  }

  function drawZArm(x, y, swing, skin, dark, right) {
    const ex = x + 9 + Math.sin(swing) * 1.5;
    const ey = y + (right ? 2.4 : -2.4) + Math.cos(swing) * 1.2;
    ctx.strokeStyle = dark;
    ctx.lineWidth = 3.6;
    ctx.lineCap = 'butt';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(ex, ey);
    ctx.stroke();
    ctx.strokeStyle = skin;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(x, y - 0.5);
    ctx.lineTo(ex, ey - 0.5);
    ctx.stroke();
    // claw hand
    ctx.fillStyle = dark;
    ctx.fillRect(ex - 1, ey - 1.5, 3, 3);
    ctx.fillStyle = '#b7ad8b';
    ctx.fillRect(ex + 2, ey - 2, 1, 1);
    ctx.fillRect(ex + 2, ey + 1, 1, 1);
    ctx.fillRect(ex + 3, ey, 1, 1);
  }

  function drawStump(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y - 1, 3, 3);
    ctx.fillStyle = '#7d0a12';
    ctx.fillRect(x + 2, y - 1, 1, 3);
  }

  // ------------------------------------------------------------
  //  corpses, pickups, gibs, particles
  // ------------------------------------------------------------
  function drawCorpse(c) {
    const alpha = c.static ? 1 : clamp(c.life / 5, 0, 1);
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.translate(Math.round(c.x), Math.round(c.y));
    ctx.rotate(c.angle);
    const s = c.scale || 1;
    ctx.scale(s, s);
    if (c.kind === 'player') {
      ctx.fillStyle = '#243c35';
      rr(ctx, -10, -5, 16, 10, 3); ctx.fill();
      ctx.fillStyle = '#0b100e';
      rr(ctx, -13, -3, 5, 6, 2); ctx.fill();
      ctx.fillStyle = '#4e5d4d';
      ctx.beginPath(); ctx.arc(5, 0, 4, 0, TAU); ctx.fill();
      ctx.fillStyle = '#0b100d';
      ctx.fillRect(5, -2, 3, 2);
      ctx.fillStyle = '#6b0710';
      ctx.globalAlpha = alpha * 0.55;
      ctx.fillRect(-7, -2, 12, 4);
    } else if (c.kind === 'crawler') {
      ctx.fillStyle = '#2a3426';
      rr(ctx, -8, -4, 11, 8, 3); ctx.fill();
      ctx.fillStyle = '#6d7c5b';
      ctx.beginPath(); ctx.arc(4, 0, 3.8, 0, TAU); ctx.fill();
      ctx.fillStyle = '#171a12';
      ctx.fillRect(3, -3, 3, 2);
      ctx.fillStyle = '#5d0710';
      ctx.globalAlpha = alpha * 0.6;
      ctx.fillRect(-6, -1, 8, 2);
      // trailing guts
      ctx.strokeStyle = '#7d0a12';
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(-7, 0); ctx.lineTo(-16, 2); ctx.lineTo(-20, -1); ctx.stroke();
    } else {
      // torso and splayed limbs
      ctx.fillStyle = '#1a2017';
      rr(ctx, -7, -5, 12, 10, 3); ctx.fill();
      ctx.fillStyle = c.kind === 'gutted' ? '#4a5738' : '#33412e';
      rr(ctx, -6, -4, 10, 8, 2); ctx.fill();
      ctx.fillStyle = '#6d7c5b';
      ctx.beginPath(); ctx.arc(5, 0, 3.6, 0, TAU); ctx.fill();
      ctx.fillStyle = '#171a12';
      ctx.fillRect(4, -3, 3, 2);
      // arms/legs splayed
      ctx.strokeStyle = '#4d5b42';
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(-1, -4); ctx.lineTo(7, -10); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-2, 4); ctx.lineTo(-10, 9); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-5, -3); ctx.lineTo(-13, -6); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(-6, 3); ctx.lineTo(-14, 6); ctx.stroke();
      // open belly / ribs
      if (c.kind !== 'ripped') {
        ctx.fillStyle = '#3c0a0e';
        rr(ctx, -5, -2, 6, 4, 1); ctx.fill();
        ctx.fillStyle = '#b3a98a';
        for (let i = 0; i < 3; i++) ctx.fillRect(-4 + i * 2, -1, 1, 2);
        ctx.fillStyle = '#7d0a12';
        ctx.fillRect(-7, 1, 3, 2);
      } else {
        ctx.fillStyle = '#3c0a0e';
        rr(ctx, -4, -2, 5, 4, 1); ctx.fill();
        ctx.strokeStyle = '#8e0d16';
        ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(-4, 2); ctx.lineTo(-10, 6); ctx.stroke();
      }
      ctx.fillStyle = '#6d7c5b';
      ctx.fillRect(1, -5, 3, 2);
    }
    // flies
    ctx.globalAlpha = alpha * 0.6;
    ctx.fillStyle = '#0a0a08';
    const t = state.time;
    for (let i = 0; i < 3; i++) {
      ctx.fillRect(Math.sin(t * 4 + i * 2) * 9, Math.cos(t * 3 + i) * 5 - 6, 1, 1);
    }
    ctx.restore();
  }

  function drawPickup(item) {
    const bob = Math.sin(item.bob) * 2;
    shadow(item.x, item.y + 3, 6, 2.5, 0.35);
    ctx.save();
    ctx.translate(Math.round(item.x), Math.round(item.y - 6 + bob));
    if (item.type === 'medkit') {
      ctx.fillStyle = '#0b0d0b';
      rr(ctx, -7, -5, 14, 10, 2); ctx.fill();
      ctx.fillStyle = '#d7d2bd';
      rr(ctx, -6, -4, 12, 8, 1); ctx.fill();
      ctx.fillStyle = '#b31422';
      ctx.fillRect(-1, -3, 3, 6);
      ctx.fillRect(-4, 0, 9, 2);
      ctx.fillStyle = '#7c0a12';
      ctx.fillRect(-6, 3, 12, 1);
    } else {
      ctx.fillStyle = '#1a1a11';
      rr(ctx, -6, -5, 12, 10, 2); ctx.fill();
      ctx.fillStyle = '#c5a43c';
      ctx.fillRect(-5, -4, 10, 8);
      ctx.fillStyle = '#ffe07a';
      ctx.fillRect(-4, -2, 8, 1);
      ctx.fillStyle = '#e9e2cf';
      ctx.fillRect(-1, -6, 2, 2);
      ctx.fillStyle = '#7d0a12';
      ctx.fillRect(-2, 3, 4, 1);
    }
    ctx.restore();
    // glow ring
    ctx.globalAlpha = 0.18 + Math.sin(item.bob * 2) * 0.06;
    ctx.strokeStyle = item.type === 'medkit' ? '#d7ff4a' : '#ffb15c';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(item.x, item.y, 11, 0, TAU); ctx.stroke();
    ctx.globalAlpha = 1;
  }

  function drawGib(g) {
    shadow(g.x, g.y + 2, 3 * g.size, 1.5 * g.size, 0.28);
    ctx.save();
    ctx.translate(Math.round(g.x), Math.round(g.y - g.z));
    ctx.rotate(g.rot);
    const a = clamp(g.life / 2, 0, 1);
    ctx.globalAlpha = a;
    const s = g.size;
    if (g.type === 'meat') {
      ctx.fillStyle = g.color || '#7d0a12';
      ctx.beginPath();
      ctx.moveTo(-3 * s, -1 * s);
      ctx.lineTo(2 * s, -2 * s);
      ctx.lineTo(4 * s, 1 * s);
      ctx.lineTo(0, 3 * s);
      ctx.lineTo(-3 * s, 2 * s);
      ctx.closePath(); ctx.fill();
      ctx.fillStyle = 'rgba(255,120,110,0.4)';
      ctx.fillRect(-1, -1, 2, 1);
    } else if (g.type === 'bone') {
      ctx.fillStyle = '#c5b998';
      ctx.fillRect(-4 * s, -1, 8 * s, 2);
      ctx.fillRect(-5 * s, -2, 2, 4);
      ctx.fillRect(3 * s, -2, 2, 4);
    } else if (g.type === 'cloth') {
      ctx.fillStyle = '#2f3d2b';
      ctx.fillRect(-3 * s, -2 * s, 6 * s, 4 * s);
      ctx.fillStyle = '#1b251a';
      ctx.fillRect(-2 * s, 0, 4 * s, 1);
    } else if (g.type === 'tooth') {
      ctx.fillStyle = '#d8d0b3';
      ctx.fillRect(-1, -2, 2, 3);
    } else if (g.type === 'eye') {
      ctx.fillStyle = '#d9d1b2';
      ctx.beginPath(); ctx.arc(0, 0, 2, 0, TAU); ctx.fill();
      ctx.fillStyle = '#a30f1c';
      ctx.fillRect(-1, -1, 2, 2);
    } else if (g.type === 'arm' || g.type === 'leg') {
      const len = (g.type === 'arm' ? 11 : 13) * s;
      ctx.fillStyle = '#5f6e4f';
      rr(ctx, -len / 2, -1.5 * s, len, 3 * s, 1.5); ctx.fill();
      ctx.fillStyle = '#3f4c36';
      ctx.fillRect(-len / 2, s, len, 1);
      ctx.fillStyle = '#6b0710';
      ctx.fillRect(len / 2 - 2, -1, 2, 2);
    } else if (g.type === 'head') {
      ctx.fillStyle = '#0f130e';
      ctx.beginPath(); ctx.arc(0, 0, 4 * s, 0, TAU); ctx.fill();
      ctx.fillStyle = '#6d7c5b';
      ctx.beginPath(); ctx.arc(0, 0, 3.2 * s, 0, TAU); ctx.fill();
      ctx.fillStyle = '#ff3b43';
      ctx.fillRect(1, -1, 1, 1);
      ctx.fillStyle = '#7d0a12';
      ctx.fillRect(-1, 2, 3, 1);
    }
    ctx.globalAlpha = 1;
    ctx.restore();
  }

  function drawParticle(pt) {
    const a = clamp(pt.life / Math.max(0.01, pt.max), 0, 1);
    ctx.globalAlpha = a;
    ctx.fillStyle = pt.color;
    const s = Math.max(1, pt.size || 1);
    if (pt.type === 'smoke' || pt.type === 'mist') {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y - pt.z, s, 0, TAU);
      ctx.fill();
    } else {
      ctx.fillRect((pt.x - s / 2) | 0, (pt.y - pt.z - s / 2) | 0, s, s);
    }
    ctx.globalAlpha = 1;
  }

  // ------------------------------------------------------------
  //  lighting / weather / overlays
  // ------------------------------------------------------------
  function drawLighting(camX, camY) {
    const lc = lightCtx;
    lc.setTransform(1, 0, 0, 1, 0, 0);
    lc.clearRect(0, 0, view.w, view.h);
    lc.fillStyle = 'rgba(6,9,12,0.40)';
    lc.fillRect(0, 0, view.w, view.h);
    lc.globalCompositeOperation = 'destination-out';

    // moon / ambient wash
    const ag = lc.createRadialGradient(view.w * 0.5, view.h * 0.28, 10, view.w * 0.5, view.h * 0.28, Math.max(view.w, view.h) * 0.7);
    ag.addColorStop(0, 'rgba(0,0,0,0.34)');
    ag.addColorStop(0.6, 'rgba(0,0,0,0.12)');
    ag.addColorStop(1, 'rgba(0,0,0,0)');
    lc.fillStyle = ag;
    lc.fillRect(0, 0, view.w, view.h);

    for (const l of CR.lights) {
      const x = l.x - camX, y = l.y - camY;
      if (x < -l.r || y < -l.r || x > view.w + l.r || y > view.h + l.r) continue;
      const flick = l.flicker ? 1 + Math.sin(state.time * 17 + l.seed) * l.flicker + Math.sin(state.time * 6.3 + l.seed) * l.flicker * 0.5 : 1;
      const r = l.r * (0.94 + flick * 0.06);
      const g = lc.createRadialGradient(x, y, 2, x, y, r);
      g.addColorStop(0, `rgba(0,0,0,${0.92 * l.intensity * flick})`);
      g.addColorStop(0.45, `rgba(0,0,0,${0.4 * l.intensity * flick})`);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      lc.fillStyle = g;
      lc.fillRect(x - r, y - r, r * 2, r * 2);
    }

    // player's own light
    const px = player.x - camX, py = player.y - camY;
    const pr = 76 + player.rev * 14;
    const pg = lc.createRadialGradient(px, py, 2, px, py, pr);
    pg.addColorStop(0, 'rgba(0,0,0,0.78)');
    pg.addColorStop(0.5, 'rgba(0,0,0,0.38)');
    pg.addColorStop(1, 'rgba(0,0,0,0)');
    lc.fillStyle = pg;
    lc.fillRect(px - pr, py - pr, pr * 2, pr * 2);

    // chainsaw glow
    if (player.rev > 0.1 && !player.dead) {
      const cx = px + Math.cos(player.aim) * 20;
      const cy = py + Math.sin(player.aim) * 20;
      const cr = 22 + player.rev * 18;
      const cg = lc.createRadialGradient(cx, cy, 1, cx, cy, cr);
      cg.addColorStop(0, 'rgba(0,0,0,0.6)');
      cg.addColorStop(1, 'rgba(0,0,0,0)');
      lc.fillStyle = cg;
      lc.fillRect(cx - cr, cy - cr, cr * 2, cr * 2);
    }

    lc.globalCompositeOperation = 'source-over';
    ctx.drawImage(lightCanvas, 0, 0);

    // additive color pass
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    for (const l of CR.lights) {
      const x = l.x - camX, y = l.y - camY;
      if (x < -l.r || y < -l.r || x > view.w + l.r || y > view.h + l.r) continue;
      const flick = l.flicker ? 0.85 + Math.sin(state.time * 13 + l.seed) * l.flicker : 1;
      const r = l.r * 0.72;
      const [cr, cg, cb] = l.color;
      const g = ctx.createRadialGradient(x, y, 1, x, y, r);
      g.addColorStop(0, `rgba(${cr},${cg},${cb},${0.1 * l.intensity * flick})`);
      g.addColorStop(0.5, `rgba(${cr},${cg},${cb},${0.035 * l.intensity * flick})`);
      g.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);
      ctx.fillStyle = g;
      ctx.fillRect(x - r, y - r, r * 2, r * 2);
    }
    // saw heat
    if (player.rev > 0.1 && !player.dead) {
      const cx = px + Math.cos(player.aim) * 19;
      const cy = py + Math.sin(player.aim) * 19;
      const cr = 18 + player.rev * 15;
      const g = ctx.createRadialGradient(cx, cy, 1, cx, cy, cr);
      const col = player.frenzyTime > 0 ? '255,45,50' : '255,130,45';
      g.addColorStop(0, `rgba(${col},${0.18 + player.rev * 0.14})`);
      g.addColorStop(1, `rgba(${col},0)`);
      ctx.fillStyle = g;
      ctx.fillRect(cx - cr, cy - cr, cr * 2, cr * 2);
    }
    ctx.restore();
  }

  function drawFog(camX, camY) {
    ctx.save();
    for (const f of CR.fog) {
      const x = f.x - camX - 110 * f.s;
      const y = f.y - camY - 55 * f.s;
      if (x < -240 || y < -140 || x > view.w + 240 || y > view.h + 140) continue;
      ctx.globalAlpha = f.a * (0.7 + Math.sin(state.time * 0.2 + f.x) * 0.2);
      ctx.drawImage(CR.fogSprite, x, y, 220 * f.s, 110 * f.s);
    }
    ctx.globalAlpha = 1;
    ctx.restore();
  }

  function drawRain() {
    ctx.save();
    ctx.strokeStyle = '#b8cfc8';
    ctx.lineWidth = 1;
    for (const r of CR.rain) {
      ctx.globalAlpha = r.a;
      ctx.beginPath();
      ctx.moveTo(r.x, r.y);
      ctx.lineTo(r.x - r.len * 0.16, r.y + r.len);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    ctx.restore();
  }

  function drawScreenDrops() {
    ctx.save();
    for (const d of CR.screenDrops) {
      ctx.globalAlpha = clamp(d.life / d.max, 0, 1) * 0.7;
      ctx.fillStyle = '#8b0b14';
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, TAU);
      ctx.fill();
      ctx.fillRect(d.x - d.r * 0.4, d.y, d.r * 0.8, d.r * 3);
    }
    ctx.globalAlpha = 1;
    ctx.restore();
  }

  function drawVignette() {
    const g = ctx.createRadialGradient(view.w / 2, view.h / 2, Math.min(view.w, view.h) * 0.25, view.w / 2, view.h / 2, Math.max(view.w, view.h) * 0.72);
    g.addColorStop(0, 'rgba(0,0,0,0)');
    g.addColorStop(0.62, 'rgba(0,0,0,0.08)');
    g.addColorStop(1, 'rgba(0,0,0,0.48)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, view.w, view.h);
    if (player.hp <= 30 && player.hp > 0 && state.mode !== 'menu') {
      const pulse = 0.1 + Math.sin(state.time * 7) * 0.05;
      const rg = ctx.createRadialGradient(view.w / 2, view.h / 2, Math.min(view.w, view.h) * 0.25, view.w / 2, view.h / 2, Math.max(view.w, view.h) * 0.68);
      rg.addColorStop(0, 'rgba(120,0,8,0)');
      rg.addColorStop(1, `rgba(150,0,10,${pulse})`);
      ctx.fillStyle = rg;
      ctx.fillRect(0, 0, view.w, view.h);
    }
  }

  // ------------------------------------------------------------
  //  HUD
  // ------------------------------------------------------------
  function drawHUD() {
    if (state.mode === 'menu') return;
    const t = state.time;
    const narrow = view.w < 360;
    const leftW = narrow ? 110 : 118;
    const leftRight = 8 + leftW - 8;

    // left vitals
    panel(8, 8, leftW, 48, 0.55);
    drawText(ctx, 'VITALS', 13, 12, { scale: 1, color: '#8f8a7c' });
    const hpPct = clamp(player.hp / player.maxHp, 0, 1);
    const hpColor = hpPct > 0.6 ? '#b31522' : hpPct > 0.3 ? '#d78a22' : '#ff2f39';
    bar(13, 23, leftW - 12, 7, hpPct, hpColor);
    // segments
    ctx.fillStyle = 'rgba(6,8,7,0.7)';
    for (let i = 1; i < 14; i++) ctx.fillRect(13 + Math.round(i * (leftW - 12) / 14), 23, 1, 7);
    drawText(ctx, `${Math.ceil(player.hp)}`, leftRight, 12, { scale: 1, color: hpPct > 0.3 ? '#e9e2cf' : '#ff5a5f', align: 'right' });

    drawText(ctx, 'DASH', 13, 35, { scale: 1, color: '#716d62' });
    const dashPct = 1 - clamp(player.dashCd / 0.82, 0, 1);
    bar(39, 37, narrow ? 34 : 42, 3, dashPct, dashPct >= 1 ? '#b8d2c2' : '#5e6c62');
    drawText(ctx, 'FRENZY', 13, 43, { scale: 1, color: player.frenzy >= 100 ? '#d7ff4a' : '#716d62' });
    const frPct = player.frenzyTime > 0 ? clamp(player.frenzyTime / 8, 0, 1) : clamp(player.frenzy / 100, 0, 1);
    bar(54, 45, narrow ? 50 : 66, 3, frPct, player.frenzyTime > 0 ? '#ff3b43' : frPct >= 1 ? (Math.sin(t * 10) > 0 ? '#d7ff4a' : '#f5ffae') : '#a98c2d');
    if (player.frenzy >= 100 && player.frenzyTime <= 0) {
      drawText(ctx, 'Q', leftRight - 8, 43, { scale: 1, color: '#d7ff4a', align: 'right' });
    }

    // center wave
    const cx = view.w / 2;
    const remain = Math.max(0, state.remaining);
    if (narrow) {
      panel(cx - 72, 58, 144, 15, 0.42);
      drawText(ctx, `WAVE ${String(state.wave).padStart(2, '0')} // ${remain} LEFT`, cx, 62, {
        scale: 1, color: state.waveState === 'clear' ? '#d7ff4a' : '#cfc9b8', align: 'center'
      });
    } else {
      panel(cx - 65, 8, 130, 36, 0.55);
      drawText(ctx, 'WAVE', cx, 11, { scale: 1, color: '#8f8a7c', align: 'center' });
      drawText(ctx, String(state.wave).padStart(2, '0'), cx, 18, { scale: 2, color: '#e9e2cf', align: 'center' });
      drawText(ctx, state.waveState === 'clear' ? 'CLEARED' : `REMAINING ${String(remain).padStart(2, '0')}`, cx, 34, {
        scale: 1, color: state.waveState === 'clear' ? '#d7ff4a' : '#8f8a7c', align: 'center'
      });
    }

    // right score
    const rightW = narrow ? 110 : 118;
    const rightX = view.w - rightW - 8;
    panel(rightX, 8, rightW, 42, 0.55);
    drawText(ctx, 'SCORE', rightX + 6, 12, { scale: 1, color: '#8f8a7c' });
    drawText(ctx, String(state.score).padStart(6, '0'), view.w - 13, 12, { scale: 1, color: '#e9e2cf', align: 'right' });
    drawText(ctx, 'KILLS', rightX + 6, 22, { scale: 1, color: '#716d62' });
    drawText(ctx, String(state.kills).padStart(3, '0'), view.w - 13, 22, { scale: 1, color: '#d9b35a', align: 'right' });
    drawText(ctx, 'CHAIN', rightX + 6, 34, { scale: 1, color: '#716d62' });
    drawText(ctx, 'x' + state.combo, view.w - 13, 32, {
      scale: state.combo > 9 ? 2 : 1,
      color: state.combo > 5 ? '#ff5a5f' : state.combo > 1 ? '#ffb15c' : '#716d62',
      align: 'right'
    });
    if (state.combo > 1) {
      const cw = 52;
      const cp = clamp(state.comboTimer / 3.4, 0, 1);
      bar(rightX + 6, 44, cw, 2, cp, state.combo > 5 ? '#ff3b43' : '#c88a2a');
    }

    // boss bar
    if (state.boss && !state.boss.dead) {
      const bw = Math.min(260, view.w - 80);
      const bx = (view.w - bw) / 2;
      const by = narrow ? 82 : 48;
      drawText(ctx, 'ABATTOIR // THE BIG ONE', view.w / 2, by, { scale: 1, color: '#ff5a5f', align: 'center' });
      bar(bx, by + 9, bw, 5, state.boss.hp / state.boss.maxHp, '#b31522', '#2a080b');
    }

    // announcement
    if (state.announce) {
      const a = state.announce;
      const elapsed = a.max - a.time;
      const fadeIn = clamp(elapsed * 5, 0, 1);
      const fadeOut = clamp(a.time * 3, 0, 1);
      const alpha = Math.min(fadeIn, fadeOut);
      const y = view.h * 0.235 - (1 - fadeIn) * 8;
      ctx.globalAlpha = alpha;
      ctx.fillStyle = 'rgba(4,6,7,0.42)';
      ctx.fillRect(0, y - 7, view.w, 30);
      ctx.fillStyle = 'rgba(193,18,31,0.42)';
      ctx.fillRect(0, y - 7, view.w, 1);
      ctx.fillRect(0, y + 22, view.w, 1);
      const scale = Math.min(2, Math.floor((view.w - 30) / Math.max(1, textWidth(a.title, 1))));
      drawText(ctx, a.title, view.w / 2 + 2, y, { scale, color: '#8a0b14', align: 'center', shadow: false });
      drawText(ctx, a.title, view.w / 2, y - 1, { scale, color: '#e9e2cf', align: 'center' });
      drawText(ctx, a.sub, view.w / 2, y + 15, { scale: 1, color: '#d7b45a', align: 'center' });
      ctx.globalAlpha = 1;
    }

    // controls hint
    if (state.mode === 'playing' && state.gameTime < 11) {
      const a = clamp((11 - state.gameTime) / 3, 0, 1);
      ctx.globalAlpha = a * 0.8;
      if (narrow) {
        drawText(ctx, 'WASD MOVE  //  MOUSE AIM', view.w / 2, view.h - 36, {
          scale: 1, color: '#c4bead', align: 'center'
        });
        drawText(ctx, 'HOLD LMB TO RIP  //  SHIFT DASH', view.w / 2, view.h - 24, {
          scale: 1, color: '#c4bead', align: 'center'
        });
        drawText(ctx, 'Q FRENZY  //  ESC PAUSE', view.w / 2, view.h - 13, {
          scale: 1, color: '#9a9486', align: 'center'
        });
      } else {
        drawText(ctx, 'WASD MOVE   //   MOUSE AIM   //   HOLD LMB TO RIP', view.w / 2, view.h - 24, {
          scale: 1, color: '#c4bead', align: 'center'
        });
        drawText(ctx, 'SHIFT DASH   //   Q FRENZY   //   ESC PAUSE', view.w / 2, view.h - 13, {
          scale: 1, color: '#9a9486', align: 'center'
        });
      }
      ctx.globalAlpha = 1;
    }

    // status tags
    if (player.frenzyTime > 0) {
      const a = 0.65 + Math.sin(t * 12) * 0.25;
      ctx.globalAlpha = a;
      drawText(ctx, 'BLOOD FRENZY', view.w / 2, view.h - 42, { scale: 2, color: '#ff3b43', align: 'center' });
      ctx.globalAlpha = 1;
    }
  }

  function drawCrosshair() {
    if (state.mode === 'menu' || input.touch.active) return;
    const x = Math.round(input.mouse.x), y = Math.round(input.mouse.y);
    const hot = player.attack || player.rev > 0.25;
    const col = player.frenzyTime > 0 ? '#ff6b6b' : hot ? '#ffb15c' : '#d8d2bf';
    ctx.save();
    ctx.globalAlpha = 0.9;
    ctx.fillStyle = col;
    // four brackets
    const r = 5;
    ctx.fillRect(x - r - 2, y - r, 4, 1);
    ctx.fillRect(x + r - 1, y - r, 4, 1);
    ctx.fillRect(x - r - 2, y + r, 4, 1);
    ctx.fillRect(x + r - 1, y + r, 4, 1);
    ctx.fillRect(x - r, y - r - 2, 1, 4);
    ctx.fillRect(x - r, y + r - 1, 1, 4);
    ctx.fillRect(x + r, y - r - 2, 1, 4);
    ctx.fillRect(x + r, y + r - 1, 1, 4);
    ctx.fillRect(x, y, 1, 1);
    if (hot) {
      ctx.globalAlpha = 0.55;
      ctx.strokeStyle = col;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(x, y, 8, state.time * 9, state.time * 9 + 2.2);
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawLowHealthEdges() {
    if (state.mode === 'menu' || player.hp > 30 || player.dead) return;
    const p = 0.16 + Math.sin(state.time * 6.5) * 0.06;
    const g = ctx.createRadialGradient(view.w / 2, view.h / 2, Math.min(view.w, view.h) * 0.28, view.w / 2, view.h / 2, Math.max(view.w, view.h) * 0.66);
    g.addColorStop(0, 'rgba(100,0,5,0)');
    g.addColorStop(1, `rgba(130,0,8,${p})`);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, view.w, view.h);
  }

  // ------------------------------------------------------------
  //  master render
  // ------------------------------------------------------------
  CR.render = function () {
    const t = state.time;
    const camX = Math.floor(cam.x - state.shakeX);
    const camY = Math.floor(cam.y - state.shakeY);

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = '#070a0b';
    ctx.fillRect(0, 0, view.w, view.h);

    const sx = clamp(camX, 0, Math.max(0, world.w - view.w));
    const sy = clamp(camY, 0, Math.max(0, world.h - view.h));
    ctx.drawImage(CR.ground, sx, sy, view.w, view.h, 0, 0, view.w, view.h);
    ctx.drawImage(CR.decals, sx, sy, view.w, view.h, 0, 0, view.w, view.h);

    ctx.save();
    ctx.translate(-camX, -camY);

    // afterimages under everything
    for (const a of CR.afterimages) {
      ctx.save();
      ctx.globalAlpha = (a.life / a.max) * 0.28;
      ctx.translate(a.x, a.y);
      ctx.rotate(a.angle);
      ctx.fillStyle = '#9fd0bc';
      rr(ctx, -8, -7, 14, 14, 4); ctx.fill();
      rr(ctx, 9, -3, 7, 6, 1); ctx.fill();
      ctx.restore();
    }

    // y-sorted scene
    const items = [];
    for (const p of CR.props) {
      if (visible(p.x, p.y, 150)) items.push({ y: p.y, kind: 'prop', v: p });
    }
    for (const c of CR.corpses) {
      if (visible(c.x, c.y, 60)) items.push({ y: c.y, kind: 'corpse', v: c });
    }
    for (const c of CR.decorCorpses) {
      if (visible(c.x, c.y, 60)) items.push({ y: c.y, kind: 'corpse', v: c });
    }
    for (const z of CR.zombies) {
      if (!z.dead && visible(z.x, z.y, 60)) items.push({ y: z.y, kind: 'zombie', v: z });
    }
    for (const item of CR.pickups) {
      if (visible(item.x, item.y, 40)) items.push({ y: item.y, kind: 'pickup', v: item });
    }
    items.push({ y: player.y, kind: 'player', v: player });
    items.sort((a, b) => a.y - b.y);

    for (const item of items) {
      if (item.kind === 'prop') drawProp(item.v, t);
      else if (item.kind === 'zombie') drawZombie(item.v, t);
      else if (item.kind === 'corpse') drawCorpse(item.v);
      else if (item.kind === 'pickup') drawPickup(item.v);
      else if (item.kind === 'player') drawPlayer(item.v, t);
    }

    // gibs and particles sit above the sorted scene
    for (const g of CR.gibs) drawGib(g);
    for (const pt of CR.particles) drawParticle(pt);

    // floating combat text
    for (const f of CR.floaters) {
      const a = clamp(f.life / 0.35, 0, 1);
      ctx.globalAlpha = a;
      drawText(ctx, f.text, f.x, f.y, { scale: f.scale, color: f.color, align: 'center', outline: '#1a0305' });
      ctx.globalAlpha = 1;
    }

    ctx.restore();

    drawLighting(camX, camY);
    drawFog(camX, camY);
    drawRain();
    drawScreenDrops();
    drawLowHealthEdges();

    // white flash
    if (state.whiteFlash > 0.01) {
      ctx.globalAlpha = Math.min(0.55, state.whiteFlash * 0.5);
      ctx.fillStyle = '#d9e6e0';
      ctx.fillRect(0, 0, view.w, view.h);
      ctx.globalAlpha = 1;
    }
    if (state.flash > 0.01) {
      ctx.globalAlpha = Math.min(0.24, state.flash * 0.22);
      ctx.fillStyle = '#ff3b43';
      ctx.fillRect(0, 0, view.w, view.h);
      ctx.globalAlpha = 1;
    }

    drawVignette();
    drawHUD();
    drawCrosshair();
  };
})();
