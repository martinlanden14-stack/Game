(() => {
  'use strict';
  const CR = window.CR;
  const { TAU, clamp, rand, randInt, pick, rr, ellipse, drawText, mulberry32, world } = CR;

  function make(w, h, fn) {
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    const x = c.getContext('2d');
    x.imageSmoothingEnabled = false;
    fn(x, w, h);
    return c;
  }

  function noise(c, x, y, w, h, colors, n, a = 1) {
    for (let i = 0; i < n; i++) {
      c.globalAlpha = rand(0.15, 0.75) * a;
      c.fillStyle = pick(colors);
      c.fillRect((x + Math.random() * w) | 0, (y + Math.random() * h) | 0, randInt(1, 3), randInt(1, 3));
    }
    c.globalAlpha = 1;
  }

  // ------------------------------------------------------------
  //  static prop art
  // ------------------------------------------------------------
  const truckSprite = make(136, 70, (c, w, h) => {
    c.save();
    c.translate(4, 6);
    // wheels
    c.fillStyle = '#080a09';
    rr(c, 17, 2, 22, 10, 3); c.fill();
    rr(c, 96, 2, 22, 10, 3); c.fill();
    rr(c, 17, 50, 22, 10, 3); c.fill();
    rr(c, 96, 50, 22, 10, 3); c.fill();
    c.fillStyle = '#252724';
    rr(c, 22, 4, 13, 6, 2); c.fill();
    rr(c, 101, 4, 13, 6, 2); c.fill();
    rr(c, 22, 52, 13, 6, 2); c.fill();
    rr(c, 101, 52, 13, 6, 2); c.fill();

    // chassis / body
    c.fillStyle = '#241512';
    rr(c, 6, 12, 122, 44, 7); c.fill();
    c.fillStyle = '#56281f';
    rr(c, 8, 14, 118, 40, 6); c.fill();
    c.fillStyle = '#6a3327';
    rr(c, 10, 16, 114, 8, 4); c.fill();
    c.fillStyle = '#3d1b16';
    rr(c, 10, 44, 114, 8, 4); c.fill();

    // bed
    c.fillStyle = '#1a1210';
    rr(c, 10, 20, 48, 28, 3); c.fill();
    c.fillStyle = '#2c1b16';
    c.fillRect(12, 22, 44, 4);
    c.fillRect(12, 42, 44, 4);
    // cargo under tarp
    c.fillStyle = '#40382b';
    rr(c, 16, 26, 20, 15, 3); c.fill();
    c.fillStyle = '#5a503b';
    c.fillRect(18, 28, 16, 3);
    c.fillStyle = '#5e201b';
    rr(c, 39, 27, 15, 13, 2); c.fill();
    c.fillStyle = '#7c3b2b';
    c.fillRect(41, 29, 11, 2);
    // blood in bed
    c.fillStyle = 'rgba(92,7,12,0.65)';
    c.beginPath(); c.ellipse(34, 45, 11, 4, 0.1, 0, TAU); c.fill();

    // cab
    c.fillStyle = '#6e3628';
    rr(c, 60, 16, 46, 38, 5); c.fill();
    c.fillStyle = '#7e4030';
    rr(c, 63, 18, 40, 7, 3); c.fill();
    c.fillStyle = '#1c2423';
    rr(c, 82, 19, 20, 13, 2); c.fill(); // windshield
    rr(c, 82, 38, 20, 13, 2); c.fill();
    c.fillStyle = '#34413e';
    c.fillRect(84, 20, 3, 10);
    c.fillRect(84, 39, 3, 10);
    c.fillStyle = '#101614';
    c.fillRect(99, 21, 2, 9);
    c.fillRect(99, 40, 2, 9);

    // hood
    c.fillStyle = '#613023';
    rr(c, 106, 18, 19, 34, 4); c.fill();
    c.fillStyle = '#7b4030';
    c.fillRect(109, 21, 12, 3);
    c.fillStyle = '#2d1712';
    c.fillRect(108, 30, 14, 2);
    c.fillStyle = '#151716';
    c.fillRect(123, 22, 2, 26);
    c.fillStyle = '#c9b56f';
    c.fillRect(124, 24, 1, 4);
    c.fillRect(124, 42, 1, 4);

    // rust / damage
    c.globalAlpha = 0.6;
    c.fillStyle = '#8a4727';
    c.fillRect(13, 16, 9, 3);
    c.fillRect(69, 48, 14, 4);
    c.fillRect(96, 35, 7, 6);
    c.fillStyle = '#301611';
    c.fillRect(54, 23, 2, 2);
    c.fillRect(57, 26, 2, 2);
    c.fillRect(90, 33, 2, 2);
    c.globalAlpha = 1;

    // blood handprints
    c.globalAlpha = 0.5;
    c.fillStyle = '#8a0b14';
    for (let i = 0; i < 4; i++) c.fillRect(72 + i * 3, 46, 2, 5);
    c.fillRect(72, 44, 11, 3);
    c.restore();
  });

  const dumpsterSprite = make(96, 58, (c) => {
    c.save();
    c.translate(3, 4);
    c.fillStyle = '#0a0d0b';
    rr(c, 4, 8, 82, 42, 4); c.fill();
    c.fillStyle = '#1c3027';
    rr(c, 6, 6, 82, 42, 4); c.fill();
    c.fillStyle = '#294638';
    rr(c, 8, 4, 78, 40, 3); c.fill();
    c.fillStyle = '#345442';
    rr(c, 11, 7, 72, 7, 2); c.fill();
    c.fillStyle = '#203a2e';
    c.fillRect(13, 18, 68, 20);
    c.fillStyle = '#182b22';
    for (let x = 16; x < 80; x += 10) c.fillRect(x, 18, 2, 20);
    c.fillStyle = '#3c604b';
    c.fillRect(11, 15, 72, 2);
    // wheels
    c.fillStyle = '#080a09';
    c.fillRect(12, 47, 12, 5);
    c.fillRect(68, 47, 12, 5);
    // rust
    c.globalAlpha = 0.55;
    c.fillStyle = '#6e3c24';
    c.fillRect(18, 38, 8, 3);
    c.fillRect(70, 10, 6, 5);
    c.fillRect(44, 42, 11, 2);
    c.globalAlpha = 1;
    // graffiti
    c.save();
    c.translate(26, 24);
    c.rotate(-0.06);
    c.globalAlpha = 0.72;
    drawText(c, 'MEAT', 0, 0, { scale: 1, color: '#b9b38e', shadow: false });
    c.globalAlpha = 0.55;
    c.fillStyle = '#9e111b';
    c.fillRect(1, 9, 22, 2);
    c.restore();
    c.restore();
  });

  const crateSprite = make(36, 36, (c) => {
    c.fillStyle = '#24170f';
    rr(c, 2, 2, 31, 31, 2); c.fill();
    c.fillStyle = '#4c3520';
    rr(c, 4, 4, 27, 27, 1); c.fill();
    c.fillStyle = '#62482c';
    for (let y = 5; y < 30; y += 7) {
      c.fillRect(5, y, 25, 5);
      c.fillStyle = '#2b1d12';
      c.fillRect(5, y + 5, 25, 1);
      c.fillStyle = '#62482c';
    }
    c.strokeStyle = '#312113';
    c.lineWidth = 2;
    c.beginPath(); c.moveTo(6, 6); c.lineTo(29, 29); c.stroke();
    c.fillStyle = '#8c7350';
    c.fillRect(7, 8, 1, 1);
    c.fillRect(27, 8, 1, 1);
    c.fillRect(7, 27, 1, 1);
    c.fillRect(27, 27, 1, 1);
    c.globalAlpha = 0.55;
    c.fillStyle = '#7b0a12';
    c.fillRect(13, 19, 8, 4);
    c.fillRect(17, 23, 3, 4);
    c.restore?.();
  });

  const barrelSprite = make(34, 34, (c) => {
    const cx = 17, cy = 17;
    // ground rim / shadow
    c.fillStyle = '#0d0e0b';
    c.beginPath(); c.arc(cx, cy, 15, 0, TAU); c.fill();
    // drum wall seen from above
    c.fillStyle = '#4e241a';
    c.beginPath(); c.arc(cx, cy, 14, 0, TAU); c.fill();
    c.fillStyle = '#6b3223';
    c.beginPath(); c.arc(cx - 0.5, cy - 0.5, 12.6, 0, TAU); c.fill();
    // rolled rim
    c.strokeStyle = '#2c1510';
    c.lineWidth = 2;
    c.beginPath(); c.arc(cx, cy, 13.2, 0, TAU); c.stroke();
    c.strokeStyle = '#965033';
    c.lineWidth = 1;
    c.beginPath(); c.arc(cx, cy, 12, 0, TAU); c.stroke();
    // lid
    c.fillStyle = '#7e3b27';
    c.beginPath(); c.arc(cx, cy, 10.6, 0, TAU); c.fill();
    c.fillStyle = '#94502f';
    c.beginPath(); c.arc(cx - 1, cy - 1.4, 9, 0, TAU); c.fill();
    // top sheen crescent
    c.strokeStyle = '#c07a4d';
    c.lineWidth = 1;
    c.beginPath(); c.arc(cx - 1, cy - 1.4, 8.2, Math.PI * 1.02, Math.PI * 1.62); c.stroke();
    c.strokeStyle = '#5a2a1c';
    c.beginPath(); c.arc(cx, cy, 6.2, Math.PI * 0.08, Math.PI * 0.7); c.stroke();
    // bung caps
    c.fillStyle = '#341811';
    c.beginPath(); c.arc(cx - 4, cy - 3, 2.4, 0, TAU); c.fill();
    c.fillStyle = '#9c5a39';
    c.fillRect(cx - 5, cy - 4, 1, 1);
    c.fillStyle = '#341811';
    c.beginPath(); c.arc(cx + 4.5, cy + 2.5, 2, 0, TAU); c.fill();
    c.fillStyle = '#9c5a39';
    c.fillRect(cx + 4, cy + 1, 1, 1);
    // rust bloom and chipped paint
    c.globalAlpha = 0.5;
    c.fillStyle = '#a85c33';
    c.fillRect(cx - 9, cy + 4, 4, 2);
    c.fillRect(cx + 5, cy - 8, 2, 3);
    c.fillStyle = '#2b120e';
    c.fillRect(cx + 1, cy + 7, 3, 2);
    c.fillRect(cx - 8, cy - 6, 2, 2);
    c.globalAlpha = 1;
  });

  const coneSprite = make(18, 22, (c) => {
    // base
    c.fillStyle = '#0b0d0a';
    c.beginPath(); c.ellipse(9, 19, 8, 3, 0, 0, TAU); c.fill();
    c.fillStyle = '#3b2a1b';
    c.beginPath(); c.ellipse(9, 18, 7, 2.5, 0, 0, TAU); c.fill();
    // cone body
    c.fillStyle = '#b4491d';
    c.beginPath();
    c.moveTo(9, 2); c.lineTo(13, 17); c.lineTo(5, 17); c.closePath(); c.fill();
    c.fillStyle = '#d9631f';
    c.beginPath();
    c.moveTo(9, 2); c.lineTo(11.5, 17); c.lineTo(9, 17); c.closePath(); c.fill();
    c.fillStyle = '#7d2f14';
    c.beginPath();
    c.moveTo(9, 2); c.lineTo(5, 17); c.lineTo(7, 17); c.closePath(); c.fill();
    // reflective band
    c.fillStyle = '#d8d2bd';
    c.fillRect(6, 10, 6, 3);
    c.fillStyle = '#f3eeda';
    c.fillRect(7, 10, 4, 1);
    // scuffs
    c.globalAlpha = 0.5;
    c.fillStyle = '#4d1d0d';
    c.fillRect(8, 14, 2, 2);
    c.globalAlpha = 1;
  });

  const tireSprite = make(32, 32, (c) => {
    c.fillStyle = '#070908';
    c.beginPath(); c.arc(16, 16, 15, 0, TAU); c.fill();
    c.fillStyle = '#1b1f1d';
    c.beginPath(); c.arc(16, 16, 13.5, 0, TAU); c.fill();
    // tread blocks around the sidewall
    for (let i = 0; i < 18; i++) {
      const a = (i / 18) * TAU;
      c.fillStyle = i % 2 ? '#262b28' : '#121614';
      c.save();
      c.translate(16 + Math.cos(a) * 12.2, 16 + Math.sin(a) * 12.2);
      c.rotate(a);
      c.fillRect(-1, -1.6, 3, 3.2);
      c.restore();
    }
    // inner rim / hole
    c.fillStyle = '#0a0c0b';
    c.beginPath(); c.arc(16, 16, 7, 0, TAU); c.fill();
    c.fillStyle = '#2f3532';
    c.beginPath(); c.arc(16, 16, 5.4, 0, TAU); c.fill();
    c.fillStyle = '#0b0d0c';
    c.beginPath(); c.arc(16, 16, 4.2, 0, TAU); c.fill();
    // mud / wear highlight
    c.globalAlpha = 0.35;
    c.strokeStyle = '#5c625a';
    c.lineWidth = 1;
    c.beginPath(); c.arc(16, 16, 10.5, Math.PI * 1.05, Math.PI * 1.6); c.stroke();
    c.globalAlpha = 0.5;
    c.fillStyle = '#4a3a26';
    c.fillRect(8, 22, 5, 2);
    c.globalAlpha = 1;
  });

  const fireBarrelSprite = make(30, 34, (c) => {
    c.fillStyle = '#0c0e0b';
    rr(c, 3, 6, 24, 26, 4); c.fill();
    c.fillStyle = '#4a261c';
    rr(c, 4, 7, 22, 24, 3); c.fill();
    c.fillStyle = '#733526';
    rr(c, 5, 8, 20, 8, 2); c.fill();
    c.fillStyle = '#1a0c09';
    c.beginPath(); c.ellipse(15, 9, 10, 4, 0, 0, TAU); c.fill();
    c.strokeStyle = '#8b4b2f';
    c.lineWidth = 1;
    c.beginPath(); c.ellipse(15, 9, 10, 4, 0, 0, TAU); c.stroke();
    c.fillStyle = '#2d1711';
    c.fillRect(5, 22, 20, 2);
    c.fillRect(5, 29, 20, 2);
    // legs
    c.fillStyle = '#181a15';
    c.fillRect(6, 32, 4, 2);
    c.fillRect(20, 32, 4, 2);
    c.globalAlpha = 0.5;
    c.fillStyle = '#9a512b';
    c.fillRect(6, 12, 3, 8);
    c.fillRect(22, 17, 2, 5);
    c.globalAlpha = 1;
  });

  const palletSprite = make(52, 38, (c) => {
    c.fillStyle = '#21160e';
    c.fillRect(2, 4, 48, 30);
    c.fillStyle = '#5a4026';
    for (let y = 4; y < 32; y += 7) {
      c.fillRect(3, y, 46, 4);
      c.fillStyle = '#2a1b10';
      c.fillRect(3, y + 4, 46, 1);
      c.fillStyle = '#5a4026';
    }
    c.fillStyle = '#3b2918';
    c.fillRect(8, 2, 4, 34);
    c.fillRect(39, 2, 4, 34);
    c.globalAlpha = 0.55;
    c.fillStyle = '#6f0b12';
    c.fillRect(20, 20, 10, 3);
    c.globalAlpha = 1;
  });

  const generatorSprite = make(50, 38, (c) => {
    c.fillStyle = '#10120f';
    rr(c, 2, 3, 45, 31, 3); c.fill();
    c.fillStyle = '#414238';
    rr(c, 4, 5, 41, 27, 2); c.fill();
    c.fillStyle = '#57584a';
    c.fillRect(6, 7, 37, 4);
    c.fillStyle = '#262820';
    for (let x = 8; x < 40; x += 5) c.fillRect(x, 14, 3, 12);
    c.fillStyle = '#c5a43c';
    c.fillRect(5, 28, 39, 3);
    c.fillStyle = '#1b1d17';
    for (let x = 7; x < 42; x += 8) c.fillRect(x, 29, 4, 1);
    c.fillStyle = '#0b0d0a';
    c.fillRect(43, 19, 5, 3);
    c.strokeStyle = '#171a15';
    c.lineWidth = 2;
    c.beginPath(); c.moveTo(46, 21); c.quadraticCurveTo(54, 26, 49, 36); c.stroke();
    c.fillStyle = '#7b0a12';
    c.globalAlpha = 0.45;
    c.fillRect(12, 24, 9, 2);
    c.globalAlpha = 1;
  });

  const signSprite = make(46, 66, (c) => {
    c.fillStyle = '#22160f';
    c.fillRect(21, 24, 4, 42);
    c.fillStyle = '#3d2a1a';
    c.fillRect(22, 24, 1, 42);
    c.fillStyle = '#17130e';
    rr(c, 2, 2, 42, 29, 2); c.fill();
    c.fillStyle = '#9a8e6f';
    rr(c, 4, 4, 38, 25, 1); c.fill();
    c.fillStyle = '#b2a682';
    c.fillRect(4, 4, 38, 2);
    c.fillStyle = '#27241d';
    drawText(c, 'KEEP', 23, 8, { scale: 1, color: '#29261f', align: 'center', shadow: false });
    drawText(c, 'OUT', 23, 18, { scale: 1, color: '#29261f', align: 'center', shadow: false });
    c.fillStyle = '#7b0a12';
    c.fillRect(9, 27, 28, 2);
    c.fillRect(10, 5, 3, 8);
    c.globalAlpha = 0.55;
    c.fillStyle = '#681016';
    c.fillRect(27, 10, 5, 7);
    c.fillRect(29, 17, 2, 4);
    c.globalAlpha = 1;
    // biohazard mark
    c.fillStyle = '#9e1a17';
    c.beginPath(); c.arc(31, 24, 3, 0, TAU); c.fill();
    c.fillStyle = '#17130e';
    c.beginPath(); c.arc(31, 24, 1.2, 0, TAU); c.fill();
  });

  const lampSprite = make(32, 88, (c) => {
    c.fillStyle = '#11140f';
    c.fillRect(14, 20, 5, 66);
    c.fillStyle = '#343a30';
    c.fillRect(15, 21, 2, 64);
    c.fillStyle = '#1d211a';
    c.fillRect(10, 84, 13, 4);
    c.fillRect(12, 80, 9, 4);
    c.fillStyle = '#3b4136';
    c.fillRect(15, 20, 3, 4);
    // arm
    c.fillStyle = '#1a1e17';
    c.fillRect(5, 18, 18, 3);
    c.fillRect(5, 18, 3, 5);
    // shade
    c.fillStyle = '#262b23';
    c.beginPath();
    c.moveTo(2, 24); c.lineTo(14, 24); c.lineTo(11, 32); c.lineTo(5, 32); c.closePath(); c.fill();
    c.fillStyle = '#d8b86a';
    c.fillRect(5, 30, 6, 2);
    c.fillStyle = '#f6dd91';
    c.fillRect(6, 31, 4, 1);
    // rust
    c.globalAlpha = 0.45;
    c.fillStyle = '#6d3e25';
    c.fillRect(16, 47, 2, 7);
    c.fillRect(15, 68, 2, 3);
    c.globalAlpha = 1;
  });

  const meatFrameSprite = make(58, 108, (c) => {
    c.fillStyle = '#161a16';
    c.fillRect(5, 10, 4, 94);
    c.fillRect(49, 10, 4, 94);
    c.fillRect(5, 8, 48, 4);
    c.fillStyle = '#3d4439';
    c.fillRect(6, 9, 2, 94);
    c.fillRect(50, 9, 2, 94);
    c.fillRect(6, 9, 46, 1);
    // chains
    c.strokeStyle = '#5c6256';
    c.lineWidth = 1;
    for (let x of [18, 38]) {
      c.beginPath();
      for (let y = 12; y < 44; y += 3) c.rect(x, y, 2, 2);
      c.stroke();
    }
    // hooks
    c.strokeStyle = '#7f8677';
    c.lineWidth = 2;
    c.beginPath(); c.arc(19, 47, 5, 0.1, Math.PI * 1.2); c.stroke();
    c.beginPath(); c.arc(39, 47, 5, 0.1, Math.PI * 1.2); c.stroke();
    // hanging carcass
    c.fillStyle = '#4c1a18';
    rr(c, 26, 52, 13, 34, 6); c.fill();
    c.fillStyle = '#6e2822';
    rr(c, 27, 54, 10, 27, 4); c.fill();
    c.fillStyle = '#8c3b2d';
    c.fillRect(29, 56, 3, 12);
    c.fillStyle = '#c5b18c';
    c.fillRect(30, 51, 4, 2);
    c.fillStyle = '#701017';
    c.fillRect(29, 86, 2, 10);
    c.fillRect(35, 88, 1, 6);
    c.globalAlpha = 0.55;
    c.fillStyle = '#5b070d';
    c.fillRect(25, 95, 16, 2);
    c.globalAlpha = 1;
    // hanging hooks empty
    c.fillStyle = '#7d8475';
    c.fillRect(38, 44, 1, 6);
  });

  function makePine(seed) {
    const R = mulberry32(seed);
    return make(112, 146, (c) => {
      c.fillStyle = '#0a0d0a';
      c.fillRect(52, 92, 9, 50);
      c.fillStyle = '#2a2116';
      c.fillRect(54, 92, 5, 50);
      c.fillStyle = '#3a2c1c';
      c.fillRect(55, 93, 1, 44);
      const layers = [
        { y: 88, w: 54, h: 34, col: '#101b12' },
        { y: 68, w: 48, h: 38, col: '#142217' },
        { y: 45, w: 39, h: 36, col: '#18291b' },
        { y: 23, w: 28, h: 30, col: '#1d3120' },
        { y: 5, w: 16, h: 26, col: '#233a25' }
      ];
      for (const L of layers) {
        c.fillStyle = L.col;
        c.beginPath();
        c.moveTo(56, L.y);
        c.lineTo(56 - L.w, L.y + L.h);
        c.lineTo(56 - L.w * 0.58, L.y + L.h * 0.74);
        c.lineTo(56 - L.w * 0.38, L.y + L.h);
        c.lineTo(56, L.y + L.h * 0.8);
        c.lineTo(56 + L.w * 0.38, L.y + L.h);
        c.lineTo(56 + L.w * 0.58, L.y + L.h * 0.74);
        c.lineTo(56 + L.w, L.y + L.h);
        c.closePath();
        c.fill();
      }
      // needle clusters / moonlight rim
      for (let i = 0; i < 90; i++) {
        const y = R() * 100;
        const spread = (y / 100) * 46 + 6;
        const x = 56 + (R() * 2 - 1) * spread;
        c.globalAlpha = R() * 0.35 + 0.08;
        c.fillStyle = R() > 0.5 ? '#375438' : '#0a120c';
        c.fillRect(x | 0, y | 0, R() > 0.7 ? 2 : 1, 1);
      }
      c.globalAlpha = 1;
    });
  }

  function makeDeadTree(seed) {
    const R = mulberry32(seed);
    return make(94, 124, (c) => {
      c.strokeStyle = '#17140f';
      c.lineWidth = 7;
      c.lineCap = 'round';
      c.beginPath();
      c.moveTo(48, 121);
      c.lineTo(47, 88);
      c.lineTo(51, 56);
      c.lineTo(44, 33);
      c.stroke();
      c.strokeStyle = '#2c2518';
      c.lineWidth = 3;
      c.beginPath();
      c.moveTo(49, 120);
      c.lineTo(48, 88);
      c.lineTo(51, 56);
      c.lineTo(45, 34);
      c.stroke();
      const branches = [
        [48, 88, 26, 68], [48, 76, 70, 55], [50, 61, 24, 42],
        [46, 48, 68, 28], [44, 36, 25, 20], [52, 54, 82, 44]
      ];
      for (const b of branches) {
        c.strokeStyle = '#17140f';
        c.lineWidth = 4;
        c.beginPath(); c.moveTo(b[0], b[1]); c.quadraticCurveTo((b[0] + b[2]) / 2 + R() * 8 - 4, (b[1] + b[3]) / 2, b[2], b[3]); c.stroke();
        c.strokeStyle = '#332a1a';
        c.lineWidth = 1;
        c.beginPath(); c.moveTo(b[0], b[1]); c.quadraticCurveTo((b[0] + b[2]) / 2, (b[1] + b[3]) / 2, b[2], b[3]); c.stroke();
        for (let i = 0; i < 3; i++) {
          c.strokeStyle = '#211b12';
          c.lineWidth = 1;
          c.beginPath();
          c.moveTo(b[2], b[3]);
          c.lineTo(b[2] + (R() * 2 - 1) * 16, b[3] - R() * 14);
          c.stroke();
        }
      }
      // roots
      c.strokeStyle = '#211b12';
      c.lineWidth = 2;
      for (let i = 0; i < 5; i++) {
        c.beginPath();
        c.moveTo(48, 120);
        c.lineTo(48 + (R() * 2 - 1) * 22, 121 + R() * 2);
        c.stroke();
      }
      // crows / knots
      c.fillStyle = '#0b0a08';
      c.fillRect(44, 52, 3, 2);
      c.fillRect(29, 68, 2, 2);
    });
  }

  const pineSprites = [makePine(11), makePine(47), makePine(93), makePine(137)];
  const deadSprites = [makeDeadTree(7), makeDeadTree(39), makeDeadTree(81)];

  // ------------------------------------------------------------
  //  prop instances
  // ------------------------------------------------------------
  function prop(type, x, y, extra = {}) {
    return Object.assign({ type, x, y, oy: 1, solid: null, sprite: null }, extra);
  }

  CR.buildProps = function () {
    const p = [];
    const add = (v) => p.push(v);

    add(prop('dumpster', 586, 424, { oy: 0.5, sprite: dumpsterSprite, solid: { type: 'rect', x: -44, y: -22, w: 88, h: 44 } }));
    add(prop('truck', 1028, 424, { oy: 0.5, sprite: truckSprite, solid: { type: 'rect', x: -60, y: -25, w: 120, h: 50 } }));
    add(prop('lamp', 666, 432, {
      oy: 1, sprite: lampSprite, solid: { type: 'circle', r: 4 },
      light: { x: -8, y: -76, r: 124, color: [255, 192, 105], intensity: 0.95, flicker: 0.06 }
    }));
    add(prop('sign', 858, 394, { oy: 1, sprite: signSprite, solid: { type: 'circle', r: 4 } }));
    add(prop('meatframe', 774, 394, { oy: 1, sprite: meatFrameSprite, solid: { type: 'circle', r: 10 } }));
    add(prop('barrel', 948, 504, { oy: 0.5, sprite: barrelSprite, solid: { type: 'circle', r: 10 } }));
    add(prop('barrel', 966, 522, { oy: 0.5, sprite: barrelSprite, solid: { type: 'circle', r: 10 } }));
    add(prop('barrel', 930, 532, { oy: 0.5, sprite: barrelSprite, solid: { type: 'circle', r: 10 } }));
    add(prop('cone', 748, 566, { oy: 0.5, sprite: coneSprite, solid: { type: 'circle', r: 4 } }));
    add(prop('cone', 772, 584, { oy: 0.5, sprite: coneSprite, solid: { type: 'circle', r: 4 } }));
    add(prop('cone', 726, 588, { oy: 0.5, sprite: coneSprite, solid: { type: 'circle', r: 4 } }));
    add(prop('tire', 884, 552, { oy: 0.5, sprite: tireSprite, solid: { type: 'circle', r: 12 } }));
    add(prop('firebarrel', 1002, 618, {
      oy: 0.5, sprite: fireBarrelSprite, solid: { type: 'circle', r: 10 },
      light: { x: 0, y: -10, r: 104, color: [255, 116, 36], intensity: 0.8, flicker: 0.24 }
    }));
    add(prop('crate', 622, 612, { oy: 0.5, sprite: crateSprite, solid: { type: 'circle', r: 15 } }));
    add(prop('crate', 650, 594, { oy: 0.5, sprite: crateSprite, solid: { type: 'circle', r: 15 } }));
    add(prop('pallet', 708, 646, { oy: 0.5, sprite: palletSprite, solid: { type: 'circle', r: 15 } }));
    add(prop('generator', 522, 662, { oy: 0.5, sprite: generatorSprite, solid: { type: 'circle', r: 20 } }));
    add(prop('deadTree', 560, 534, { oy: 1, sprite: deadSprites[0], solid: { type: 'circle', r: 8 } }));
    add(prop('deadTree', 1084, 694, { oy: 1, sprite: deadSprites[1], solid: { type: 'circle', r: 8 } }));

    // outer scenery
    add(prop('pine', 294, 246, { oy: 1, sprite: pineSprites[0], solid: { type: 'circle', r: 11 } }));
    add(prop('pine', 1274, 238, { oy: 1, sprite: pineSprites[1], solid: { type: 'circle', r: 11 } }));
    add(prop('pine', 1408, 430, { oy: 1, sprite: pineSprites[2], solid: { type: 'circle', r: 11 } }));
    add(prop('pine', 198, 760, { oy: 1, sprite: pineSprites[3], solid: { type: 'circle', r: 11 } }));
    add(prop('deadTree', 1320, 830, { oy: 1, sprite: deadSprites[2], solid: { type: 'circle', r: 8 } }));
    add(prop('barrel', 364, 688, { oy: 0.5, sprite: barrelSprite, solid: { type: 'circle', r: 10 } }));
    add(prop('crate', 1188, 792, { oy: 0.5, sprite: crateSprite, solid: { type: 'circle', r: 15 } }));
    add(prop('crate', 1212, 774, { oy: 0.5, sprite: crateSprite, solid: { type: 'circle', r: 15 } }));
    add(prop('pallet', 470, 842, { oy: 0.5, sprite: palletSprite, solid: { type: 'circle', r: 15 } }));
    add(prop('generator', 1220, 600, { oy: 0.5, sprite: generatorSprite, solid: { type: 'circle', r: 20 } }));
    add(prop('dumpster', 1150, 850, { oy: 0.5, sprite: dumpsterSprite, solid: { type: 'rect', x: -44, y: -22, w: 88, h: 44 } }));

    CR.props = p;
    CR.lights = [];
    for (const item of p) {
      if (item.light) {
        CR.lights.push({
          x: item.x + item.light.x,
          y: item.y + item.light.y,
          r: item.light.r,
          color: item.light.color,
          intensity: item.light.intensity,
          flicker: item.light.flicker,
          seed: Math.random() * 100
        });
      }
    }
    // ambient practical light from the open sky / moon
    CR.lights.push({ x: 800, y: 250, r: 340, color: [92, 125, 125], intensity: 0.22, flicker: 0, ambient: true });
  };

  CR.propCollision = function (x, y, r) {
    for (const p of CR.props) {
      const s = p.solid;
      if (!s) continue;
      if (s.type === 'circle') {
        const d = Math.hypot(x - p.x, y - p.y);
        if (d < r + s.r) return true;
      } else {
        const left = p.x + s.x, top = p.y + s.y;
        const cx = clamp(x, left, left + s.w);
        const cy = clamp(y, top, top + s.h);
        if (Math.hypot(x - cx, y - cy) < r) return true;
      }
    }
    return false;
  };

  CR.resolveProps = function (e) {
    const R = e.radius || 7;
    for (const p of CR.props) {
      const s = p.solid;
      if (!s) continue;
      if (s.type === 'circle') {
        const dx = e.x - p.x, dy = e.y - p.y;
        const d = Math.hypot(dx, dy);
        const min = R + s.r;
        if (d < min && d > 0.001) {
          const push = (min - d) / d;
          e.x += dx * push;
          e.y += dy * push;
        }
      } else {
        const left = p.x + s.x, top = p.y + s.y;
        const right = left + s.w, bottom = top + s.h;
        const cx = clamp(e.x, left, right);
        const cy = clamp(e.y, top, bottom);
        const dx = e.x - cx, dy = e.y - cy;
        const d = Math.hypot(dx, dy);
        if (d < R && d > 0.001) {
          const push = (R - d) / d;
          e.x += dx * push;
          e.y += dy * push;
        } else if (d <= 0.001 && e.x > left && e.x < right && e.y > top && e.y < bottom) {
          const dl = e.x - left, dr = right - e.x, dt = e.y - top, db = bottom - e.y;
          const m = Math.min(dl, dr, dt, db);
          if (m === dl) e.x = left - R;
          else if (m === dr) e.x = right + R;
          else if (m === dt) e.y = top - R;
          else e.y = bottom + R;
        }
      }
    }
    e.x = clamp(e.x, 30, world.w - 30);
    e.y = clamp(e.y, 30, world.h - 30);
  };

  CR.isBlocked = function (x, y, r = 10) {
    if (x < 40 || y < 40 || x > world.w - 40 || y > world.h - 40) return true;
    return CR.propCollision(x, y, r);
  };

  CR.propSprites = {
    truck: truckSprite, dumpster: dumpsterSprite, crate: crateSprite, barrel: barrelSprite,
    firebarrel: fireBarrelSprite, pallet: palletSprite, generator: generatorSprite,
    sign: signSprite, lamp: lampSprite, meatframe: meatFrameSprite, cone: coneSprite, tire: tireSprite,
    pine: pineSprites, deadTree: deadSprites
  };
})();
