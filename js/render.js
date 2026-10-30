import {
  canvas, ctx, lightCanvas, lightCtx, bgCanvas, decalCanvas, decalCtx,
  game, camera, VIEW, WORLD, ARENA, TAU, PALETTE,
  clamp, mulberry32, chance, rand
} from './core.js';
import { torches } from './world.js';

function fill(c, x, y, w, h, color) {
  c.fillStyle = color;
  c.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h));
}

function ellipse(c, x, y, rx, ry, color) {
  c.fillStyle = color;
  c.beginPath();
  c.ellipse(x, y, rx, ry, 0, 0, TAU);
  c.fill();
}

function drawHouse(c, x, y, w, h, style) {
  const wall = style.wall || '#332a3b';
  const wallDark = style.wallDark || '#241d2b';
  const roof = style.roof || '#2f1c2d';
  const roofDark = style.roofDark || '#1a0f1b';
  const roofLight = style.roofLight || '#432c3b';
  const baseY = y + h;
  c.globalAlpha = 0.4;
  ellipse(c, x + w / 2, baseY + 4, w * 0.55, 7, '#050309');
  c.globalAlpha = 1;
  fill(c, x - 3, y - 3, w + 6, h + 6, '#0a0710');
  fill(c, x, y, w, h, wallDark);
  fill(c, x + 2, y + 2, w - 4, h - 4, wall);
  for (let by = y + 12; by < y + h - 6; by += 16) {
    fill(c, x + 2, by, w - 4, 2, wallDark);
  }
  fill(c, x + Math.round(w * 0.2), y + 2, 3, h - 4, wallDark);
  fill(c, x + Math.round(w * 0.74), y + 2, 3, h - 4, wallDark);
  fill(c, x - 7, y - 1, w + 14, 5, roofDark);
  c.beginPath();
  c.moveTo(x - 8, y + 1);
  c.lineTo(x + w + 8, y + 1);
  c.lineTo(x + w - 4, y - 24);
  c.lineTo(x + 4, y - 24);
  c.closePath();
  c.fillStyle = roof;
  c.fill();
  fill(c, x + 2, y - 26, w - 4, 4, roofDark);
  fill(c, x + 5, y - 23, w - 10, 3, roofLight);
  for (let rx = x + 9; rx < x + w - 8; rx += 13) {
    fill(c, rx, y - 19, 2, 18, roofDark);
  }
  const doorW = Math.max(12, Math.round(w * 0.16));
  const doorX = x + Math.round(w * 0.5) - Math.round(doorW / 2);
  fill(c, doorX - 2, baseY - 25, doorW + 4, 25, '#140b12');
  fill(c, doorX, baseY - 23, doorW, 23, '#35202a');
  fill(c, doorX + 2, baseY - 21, doorW - 4, 19, '#24131c');
  fill(c, doorX + doorW - 5, baseY - 13, 2, 2, '#b88a51');
  const windowCount = w > 150 ? 3 : 2;
  for (let i = 0; i < windowCount; i += 1) {
    const wx = x + 14 + i * Math.floor((w - 38) / Math.max(1, windowCount - 1));
    const wy = y + Math.round(h * 0.38);
    const lit = (i + Math.round(x)) % 3 !== 1;
    if (lit) {
      c.globalAlpha = 0.22;
      ellipse(c, wx + 6, wy + 6, 13, 12, '#ffb15a');
      c.globalAlpha = 1;
      fill(c, wx, wy, 11, 12, '#2b1820');
      fill(c, wx + 2, wy + 2, 7, 8, '#e4a24e');
      fill(c, wx + 2, wy + 6, 7, 1, '#8f552c');
      fill(c, wx + 5, wy + 2, 1, 8, '#8f552c');
    } else {
      fill(c, wx, wy, 11, 12, '#201820');
      fill(c, wx + 2, wy + 2, 7, 8, '#0e0a10');
      fill(c, wx + 5, wy + 2, 1, 8, '#2b2028');
    }
  }
  if (style.chimney) {
    fill(c, x + w - 30, y - 39, 13, 23, '#21141b');
    fill(c, x + w - 33, y - 42, 19, 4, '#120b10');
    c.globalAlpha = 0.15;
    ellipse(c, x + w - 22, y - 51, 16, 10, '#aba0ad');
    c.globalAlpha = 1;
  }
  if (style.sign) {
    fill(c, x + w - 28, baseY - 31, 18, 10, '#4a3035');
    fill(c, x + w - 26, baseY - 29, 14, 1, '#a98263');
    fill(c, x + w - 26, baseY - 26, 10, 1, '#a98263');
  }
}

function drawChapel(c, x, y, w, h) {
  drawHouse(c, x, y, w, h, {
    wall: '#37313e', wallDark: '#25212c', roof: '#241c2c', roofDark: '#130c17', roofLight: '#3d3044'
  });
  const cx = x + Math.round(w * 0.5);
  fill(c, cx - 18, y - 72, 36, 62, '#19131e');
  fill(c, cx - 15, y - 69, 30, 56, '#332c3b');
  fill(c, cx - 3, y - 89, 6, 23, '#0c0810');
  fill(c, cx - 9, y - 82, 18, 5, '#0c0810');
  fill(c, cx - 4, y - 87, 8, 18, '#4e3f4c');
  fill(c, cx - 8, y - 80, 16, 3, '#4e3f4c');
  fill(c, cx - 11, y - 124, 22, 30, '#1c1521');
  fill(c, cx - 8, y - 121, 16, 24, '#3b3341');
  fill(c, cx - 1, y - 133, 2, 14, '#a28c70');
  fill(c, cx - 5, y - 129, 10, 2, '#a28c70');
  fill(c, cx - 5, y - 52, 10, 14, '#d08b42');
  c.globalAlpha = 0.18;
  ellipse(c, cx, y - 44, 22, 25, '#ffb15a');
  c.globalAlpha = 1;
}

function drawTree(c, x, y, size) {
  c.globalAlpha = 0.35;
  ellipse(c, x, y + 2, 20 * size, 6 * size, '#040307');
  c.globalAlpha = 1;
  fill(c, x - 3 * size, y - 44 * size, 6 * size, 45 * size, '#24171c');
  fill(c, x - 2 * size, y - 44 * size, 2 * size, 45 * size, '#38252a');
  c.strokeStyle = '#2b1b21';
  c.lineWidth = Math.max(1, 2 * size);
  c.beginPath();
  c.moveTo(x, y - 24 * size);
  c.lineTo(x - 16 * size, y - 45 * size);
  c.lineTo(x - 23 * size, y - 65 * size);
  c.moveTo(x - 9 * size, y - 36 * size);
  c.lineTo(x - 30 * size, y - 45 * size);
  c.lineTo(x - 41 * size, y - 59 * size);
  c.moveTo(x + 1, y - 29 * size);
  c.lineTo(x + 21 * size, y - 45 * size);
  c.lineTo(x + 28 * size, y - 68 * size);
  c.moveTo(x + 15 * size, y - 41 * size);
  c.lineTo(x + 36 * size, y - 48 * size);
  c.stroke();
  for (let i = 0; i < 6; i += 1) {
    const a = -0.4 - i * 0.23;
    fill(c, x + Math.cos(a) * (24 + i * 3) * size, y - 48 * size + Math.sin(a) * 26 * size, 2, 2, '#4a2d31');
  }
}

function drawTomb(c, x, y, small) {
  const s = small ? 0.7 : 1;
  fill(c, x - 7 * s, y - 10 * s, 14 * s, 10 * s, '#282530');
  fill(c, x - 5 * s, y - 9 * s, 10 * s, 9 * s, '#3d3947');
  fill(c, x - 1, y - 16 * s, 2 * s, 9 * s, '#4e4958');
  fill(c, x - 4 * s, y - 13 * s, 8 * s, 2 * s, '#4e4958');
  fill(c, x - 8 * s, y, 17 * s, 2, '#15121b');
}

function drawWell(c, x, y) {
  c.globalAlpha = 0.4;
  ellipse(c, x, y + 3, 23, 8, '#050308');
  c.globalAlpha = 1;
  fill(c, x - 18, y - 10, 36, 12, '#282532');
  fill(c, x - 15, y - 15, 30, 12, '#3a3545');
  ellipse(c, x, y - 14, 13, 6, '#0b0810');
  ellipse(c, x, y - 16, 11, 4, '#060409');
  fill(c, x - 21, y - 42, 3, 32, '#3a282c');
  fill(c, x + 18, y - 42, 3, 32, '#3a282c');
  fill(c, x - 24, y - 44, 48, 4, '#2a1c21');
  fill(c, x - 1, y - 40, 2, 24, '#6d5540');
  fill(c, x - 4, y - 18, 8, 5, '#4d3a2b');
}

function drawAltar(c, x, y) {
  c.globalAlpha = 0.4;
  ellipse(c, x, y + 3, 34, 9, '#030205');
  c.globalAlpha = 1;
  fill(c, x - 28, y - 8, 56, 10, '#17131c');
  fill(c, x - 24, y - 14, 48, 10, '#36313e');
  fill(c, x - 20, y - 18, 40, 8, '#4a4353');
  fill(c, x - 17, y - 20, 34, 4, '#635b6b');
  fill(c, x - 25, y - 22, 8, 5, '#2a202c');
  fill(c, x + 17, y - 22, 8, 5, '#2a202c');
  fill(c, x - 3, y - 20, 6, 6, '#4f0b18');
  fill(c, x - 10, y - 17, 4, 2, '#6f1222');
  fill(c, x + 3, y - 15, 2, 7, '#6f1222');
  fill(c, x - 30, y - 30, 2, 9, '#5b4a37');
  fill(c, x - 31, y - 33, 4, 4, '#ffb45a');
  fill(c, x - 30, y - 35, 2, 3, '#ffe8a0');
  fill(c, x + 28, y - 30, 2, 9, '#5b4a37');
  fill(c, x + 27, y - 33, 4, 4, '#ffb45a');
  fill(c, x + 28, y - 35, 2, 3, '#ffe8a0');
  c.globalAlpha = 0.2;
  ellipse(c, x - 29, y - 31, 13, 12, '#ffb15a');
  ellipse(c, x + 30, y - 31, 13, 12, '#ffb15a');
  c.globalAlpha = 1;
  fill(c, x + 6, y - 15, 7, 6, '#cbb797');
  fill(c, x + 7, y - 12, 2, 2, '#2b2026');
  fill(c, x + 10, y - 12, 2, 2, '#2b2026');
  fill(c, x + 8, y - 9, 3, 2, '#7c5e4e');
}

function drawStall(c, x, y, flip) {
  const d = flip ? -1 : 1;
  c.globalAlpha = 0.36;
  ellipse(c, x, y + 2, 46, 8, '#030205');
  c.globalAlpha = 1;
  fill(c, x - 40, y - 58, 4, 58, '#2f1e23');
  fill(c, x + 36, y - 58, 4, 58, '#2f1e23');
  c.beginPath();
  c.moveTo(x - 48, y - 56);
  c.lineTo(x + 48, y - 56);
  c.lineTo(x + 40, y - 68);
  c.lineTo(x - 40, y - 68);
  c.closePath();
  c.fillStyle = '#4a1721';
  c.fill();
  fill(c, x - 42, y - 58, 84, 3, '#7c2834');
  for (let i = -30; i <= 30; i += 20) fill(c, x + i, y - 65, 3, 9, '#3d131c');
  fill(c, x - 36, y - 33, 72, 5, '#4a3028');
  fill(c, x - 33, y - 30, 66, 5, '#684236');
  for (let i = 0; i < 4; i += 1) {
    const mx = x - 27 + i * 17;
    fill(c, mx, y - 31, 11, 4, '#8b2730');
    fill(c, mx + 2, y - 32, 7, 2, '#b54a4b');
    fill(c, mx + 5, y - 29, 2, 2, '#e8d0b1');
  }
  fill(c, x + 28 * d, y - 54, 1, 14, '#6d5b46');
  fill(c, x + 24 * d, y - 45, 8, 4, '#a7a2aa');
  fill(c, x + 22 * d, y - 43, 2, 8, '#5b3f29');
  fill(c, x - 20, y - 50, 2, 10, '#9f875c');
  fill(c, x - 24, y - 42, 9, 2, '#c9ad78');
  fill(c, x - 18, y - 40, 5, 2, '#8f2730');
}

function drawCart(c, x, y, flip) {
  const d = flip ? -1 : 1;
  c.globalAlpha = 0.34;
  ellipse(c, x, y + 2, 34, 7, '#030205');
  c.globalAlpha = 1;
  fill(c, x - 28, y - 24, 56, 20, '#33231f');
  fill(c, x - 25, y - 21, 50, 15, '#4a3328');
  for (let i = -22; i <= 20; i += 12) fill(c, x + i, y - 22, 2, 18, '#2a1b1a');
  fill(c, x - 32, y - 8, 62, 4, '#2a1b1a');
  ellipse(c, x - 20, y - 2, 9, 9, '#1a1114');
  ellipse(c, x - 20, y - 2, 5, 5, '#46332c');
  ellipse(c, x + 19, y - 2, 9, 9, '#1a1114');
  ellipse(c, x + 19, y - 2, 5, 5, '#46332c');
  fill(c, x + 24 * d, y - 25, 16, 3, '#5d4130');
  fill(c, x + 36 * d, y - 30, 3, 8, '#3c2a23');
  fill(c, x - 20, y - 32, 12, 9, '#6a3d2c');
  fill(c, x - 7, y - 31, 10, 8, '#754530');
  fill(c, x + 5, y - 34, 11, 11, '#5b3428');
  fill(c, x - 3, y - 36, 14, 3, '#8a6143');
}

function drawBarrels(c, x, y) {
  c.globalAlpha = 0.35;
  ellipse(c, x, y + 1, 14, 4, '#030205');
  c.globalAlpha = 1;
  fill(c, x - 8, y - 18, 16, 18, '#3e2a22');
  fill(c, x - 6, y - 16, 12, 14, '#5a3d2d');
  fill(c, x - 8, y - 12, 16, 2, '#24171a');
  fill(c, x - 8, y - 5, 16, 2, '#24171a');
  fill(c, x - 6, y - 18, 2, 18, '#714c36');
  fill(c, x - 8, y - 19, 16, 2, '#2b1b1c');
  fill(c, x + 12, y - 13, 12, 13, '#38251f');
  fill(c, x + 13, y - 12, 10, 10, '#593c2d');
  fill(c, x + 12, y - 9, 12, 2, '#24171a');
  fill(c, x + 12, y - 4, 12, 2, '#24171a');
}

function drawPillar(c, x, y) {
  c.globalAlpha = 0.36;
  ellipse(c, x, y + 2, 16, 5, '#030205');
  c.globalAlpha = 1;
  fill(c, x - 13, y - 5, 26, 5, '#292532');
  fill(c, x - 9, y - 45, 18, 41, '#36313f');
  fill(c, x - 6, y - 45, 7, 40, '#4a4353');
  fill(c, x + 3, y - 45, 4, 41, '#2a2530');
  fill(c, x - 11, y - 49, 22, 5, '#27222d');
  fill(c, x - 6, y - 53, 10, 5, '#3d3744');
  fill(c, x - 9, y - 21, 5, 2, '#1e1a22');
  fill(c, x + 4, y - 33, 3, 7, '#1e1a22');
  fill(c, x - 8, y - 8, 16, 2, '#4a1720');
}

function drawBones(c, x, y) {
  c.globalAlpha = 0.22;
  ellipse(c, x, y + 1, 12, 3, '#030205');
  c.globalAlpha = 1;
  fill(c, x - 9, y - 2, 18, 2, '#89785f');
  fill(c, x - 11, y - 3, 3, 4, '#b4a284');
  fill(c, x + 8, y - 3, 3, 4, '#b4a284');
  fill(c, x - 2, y - 6, 6, 5, '#c9b797');
  fill(c, x - 1, y - 5, 1, 1, '#2a2026');
  fill(c, x + 2, y - 5, 1, 1, '#2a2026');
  fill(c, x, y - 2, 3, 1, '#6e5f50');
  fill(c, x + 5, y - 7, 2, 8, '#9c8a70');
  fill(c, x - 8, y - 6, 2, 7, '#8c7b64');
}

function drawFenceH(c, x1, x2, y, rng) {
  fill(c, x1, y - 1, x2 - x1, 2, '#2c1c22');
  fill(c, x1, y - 7, x2 - x1, 2, '#3b262b');
  for (let x = x1; x <= x2; x += 32) {
    const h = rand(10, 17);
    fill(c, x, y - h, 3, h, '#28191f');
    fill(c, x + 1, y - h, 1, h, '#4a3033');
    if (rng() > 0.8) {
      fill(c, x - 2, y - h - 2, 8, 2, '#5d4547');
    }
  }
}

function drawFenceV(c, x, y1, y2, rng) {
  fill(c, x - 1, y1, 2, y2 - y1, '#2c1c22');
  fill(c, x - 7, y1, 2, y2 - y1, '#3b262b');
  for (let y = y1; y <= y2; y += 32) {
    const h = rand(10, 17);
    fill(c, x - h, y, h, 3, '#28191f');
    fill(c, x - h, y + 1, h, 1, '#4a3033');
    if (rng() > 0.8) fill(c, x - h - 2, y - 2, 2, 8, '#5d4547');
  }
}

export function buildBackground() {
  bgCanvas.width = WORLD.w;
  bgCanvas.height = WORLD.h;
  decalCanvas.width = WORLD.w;
  decalCanvas.height = WORLD.h;
  const c = bgCanvas.getContext('2d');
  c.imageSmoothingEnabled = false;
  const rng = mulberry32(0x51ab1e);

  fill(c, 0, 0, WORLD.w, WORLD.h, '#0d0b14');
  for (let i = 0; i < 6200; i += 1) {
    const x = rng() * WORLD.w;
    const y = rng() * WORLD.h;
    const w = 1 + rng() * 5;
    const h = 1 + rng() * 3;
    fill(c, x, y, w, h, PALETTE.grass[Math.floor(rng() * PALETTE.grass.length)]);
  }
  fill(c, ARENA.x - 8, ARENA.y - 8, ARENA.w + 16, ARENA.h + 16, '#14121c');
  fill(c, ARENA.x, ARENA.y, ARENA.w, ARENA.h, '#1b1822');
  for (let y = ARENA.y + 2; y < ARENA.y + ARENA.h; y += 18) {
    const row = Math.floor((y - ARENA.y) / 18);
    for (let x = ARENA.x + (row % 2 ? 14 : 0); x < ARENA.x + ARENA.w; x += 28) {
      const w = 24 + rng() * 2;
      const h = 14 + rng() * 2;
      const color = PALETTE.stone[Math.floor(rng() * PALETTE.stone.length)];
      fill(c, x + 1, y + 1, w, h, color);
      if (rng() > 0.7) fill(c, x + 4, y + 3, w - 8, 1, '#37313f');
      if (rng() > 0.86) fill(c, x + 2, y + h - 2, w - 4, 1, '#17141d');
    }
  }
  for (let i = 0; i < 90; i += 1) {
    const x = ARENA.x + rng() * ARENA.w;
    const y = ARENA.y + rng() * ARENA.h;
    fill(c, x, y, 1 + rng() * 2, 1 + rng() * 2, rng() > 0.5 ? '#0f0d15' : '#37313e');
  }
  for (let i = 0; i < 34; i += 1) {
    const x = ARENA.x + rng() * ARENA.w;
    const y = ARENA.y + rng() * ARENA.h;
    c.strokeStyle = 'rgba(10,8,14,.65)';
    c.lineWidth = 1;
    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(x + rand(-7, 7), y + rand(3, 8));
    c.lineTo(x + rand(-9, 9), y + rand(8, 14));
    c.stroke();
  }

  const cenX = ARENA.x + ARENA.w * 0.5;
  const cenY = ARENA.y + ARENA.h * 0.49;
  c.save();
  c.translate(cenX, cenY);
  c.strokeStyle = 'rgba(113,27,43,.24)';
  c.lineWidth = 2;
  c.beginPath();
  c.arc(0, 0, 94, 0, TAU);
  c.stroke();
  c.lineWidth = 1;
  c.beginPath();
  c.arc(0, 0, 72, 0, TAU);
  c.stroke();
  for (let i = 0; i < 16; i += 1) {
    const a = (i / 16) * TAU;
    c.save();
    c.rotate(a);
    c.translate(83, 0);
    c.rotate(Math.PI / 4);
    fill(c, -3, -3, 6, 2, 'rgba(126,28,49,.34)');
    fill(c, -1, 1, 2, 3, 'rgba(126,28,49,.28)');
    c.restore();
  }
  c.strokeStyle = 'rgba(94,20,38,.2)';
  c.lineWidth = 1;
  c.beginPath();
  c.moveTo(0, -72);
  c.lineTo(63, 23);
  c.lineTo(-63, 23);
  c.closePath();
  c.stroke();
  c.restore();

  for (let i = 0; i < 55; i += 1) {
    const x = ARENA.x + rng() * ARENA.w;
    const y = ARENA.y + rng() * ARENA.h;
    if (Math.hypot(x - cenX, y - cenY) < 100) continue;
    fill(c, x, y, 2 + rng() * 3, 1 + rng() * 2, rng() > 0.6 ? '#34272c' : '#232029');
  }

  fill(c, 0, 0, WORLD.w, ARENA.y, 'rgba(6,4,10,.22)');
  fill(c, 0, ARENA.y + ARENA.h, WORLD.w, WORLD.h - ARENA.y - ARENA.h, 'rgba(6,4,10,.22)');

  drawFenceH(c, ARENA.x, 714, ARENA.y, rng);
  drawFenceH(c, 886, ARENA.x + ARENA.w, ARENA.y, rng);
  drawFenceH(c, ARENA.x, 704, ARENA.y + ARENA.h, rng);
  drawFenceH(c, 896, ARENA.x + ARENA.w, ARENA.y + ARENA.h, rng);
  drawFenceV(c, ARENA.x, ARENA.y, 410, rng);
  drawFenceV(c, ARENA.x, 500, ARENA.y + ARENA.h, rng);
  drawFenceV(c, ARENA.x + ARENA.w, ARENA.y, 390, rng);
  drawFenceV(c, ARENA.x + ARENA.w, 480, ARENA.y + ARENA.h, rng);

  drawAltar(c, 800, 356);
  drawStall(c, 572, 630, false);
  drawStall(c, 1028, 630, true);
  drawCart(c, 1042, 744, true);
  drawBarrels(c, 618, 700);
  drawBarrels(c, 986, 700);
  drawPillar(c, 526, 566);
  drawPillar(c, 1074, 566);
  drawBones(c, 716, 646);
  drawBones(c, 892, 674);
  drawBones(c, 744, 460);
  drawBones(c, 862, 446);
  drawBones(c, 654, 558);
  drawBones(c, 944, 560);

  fill(c, 740, 96, 120, ARENA.y - 94, '#1b1720');
  fill(c, 756, 100, 88, ARENA.y - 98, '#24202b');
  fill(c, 740, ARENA.y + ARENA.h, 150, WORLD.h - ARENA.y - ARENA.h, '#19151e');
  fill(c, 756, ARENA.y + ARENA.h, 118, WORLD.h - ARENA.y - ARENA.h, '#24202b');

  drawHouse(c, 88, 26, 196, 122, { chimney: true, sign: true });
  drawHouse(c, 342, 44, 150, 104, {});
  drawChapel(c, 548, 27, 190, 112);
  drawHouse(c, 816, 35, 168, 106, { sign: true });
  drawHouse(c, 1042, 27, 154, 112, { chimney: true });
  drawHouse(c, 1246, 22, 204, 120, { sign: true });
  drawHouse(c, 252, 884, 192, 93, {});
  drawHouse(c, 512, 899, 172, 82, { chimney: true });
  drawHouse(c, 760, 875, 194, 101, { sign: true });
  drawHouse(c, 1030, 889, 176, 88, {});
  drawHouse(c, 1266, 873, 192, 104, { chimney: true });
  drawHouse(c, 15, 274, 156, 128, {});
  drawHouse(c, 22, 544, 138, 147, { sign: true });
  drawHouse(c, 12, 748, 150, 113, {});
  drawHouse(c, 1442, 276, 148, 128, {});
  drawHouse(c, 1434, 530, 154, 146, { chimney: true });
  drawHouse(c, 1448, 754, 142, 120, {});

  drawTree(c, 330, 214, 0.85);
  drawTree(c, 1552, 200, 1.1);
  drawTree(c, 1534, 960, 1.25);
  drawTree(c, 178, 962, 1.25);
  drawTree(c, 171, 226, 0.7);
  drawTree(c, 60, 502, 0.9);
  drawTree(c, 1530, 480, 0.9);

  drawWell(c, 120, 454);
  drawTomb(c, 78, 712, false);
  drawTomb(c, 120, 735, true);
  drawTomb(c, 44, 758, true);
  drawTomb(c, 94, 786, false);
  drawTomb(c, 148, 770, true);

  c.globalAlpha = 0.24;
  ellipse(c, 466, 760, 29, 8, '#101a24');
  ellipse(c, 486, 760, 17, 5, '#20313e');
  ellipse(c, 1038, 310, 22, 6, '#101a24');
  ellipse(c, 300, 530, 17, 5, '#101a24');
  c.globalAlpha = 1;

  for (let i = 0; i < 25; i += 1) {
    const x = rand(ARENA.x + 30, ARENA.x + ARENA.w - 30);
    const y = rand(ARENA.y + 30, ARENA.y + ARENA.h - 20);
    if (rng() > 0.62) {
      c.strokeStyle = '#39422d';
      c.lineWidth = 1;
      c.beginPath();
      c.moveTo(x, y);
      c.lineTo(x - 2, y - 4);
      c.moveTo(x, y);
      c.lineTo(x + 2, y - 5);
      c.stroke();
    }
  }
  c.imageSmoothingEnabled = false;
}

function drawTorch(c, t) {
  const flick = Math.sin(game.time * 11 + t.phase) * 1.4 + Math.sin(game.time * 19 + t.phase * 1.7) * 0.8;
  if (t.big) {
    c.globalAlpha = 0.35;
    ellipse(c, t.x, t.y + 2, 11, 4, '#030205');
    c.globalAlpha = 1;
    fill(c, t.x - 7, t.y - 3, 14, 4, '#22151c');
    fill(c, t.x - 3, t.y - 15, 6, 14, '#33202a');
    fill(c, t.x - 5, t.y - 18, 10, 4, '#4a2e32');
    fill(c, t.x - 10, t.y - 30, 20, 13, '#1c1119');
    fill(c, t.x - 9, t.y - 29, 18, 9, '#4b3139');
    fill(c, t.x - 7, t.y - 30, 14, 3, '#8a5c43');
    fill(c, t.x - 8, t.y - 31, 16, 2, '#c0814d');
    fill(c, t.x - 7, t.y - 27, 2, 2, '#2a0d14');
    fill(c, t.x - 2, t.y - 26, 4, 2, '#ff7a2f');
    fill(c, t.x + 5, t.y - 27, 2, 2, '#2a0d14');
    fill(c, t.x - 5 + flick * 0.4, t.y - 43, 10, 15, '#8f2518');
    fill(c, t.x - 6, t.y - 40 + flick * 0.3, 12, 12, '#e4601f');
    fill(c, t.x - 4, t.y - 45 + flick, 8, 12, '#ffa23a');
    fill(c, t.x - 2, t.y - 48 + flick, 4, 9, '#ffdd7c');
    fill(c, t.x - 1, t.y - 50 + flick, 2, 5, '#fff4c6');
    if (chance(0.4)) fill(c, t.x + rand(-5, 5), t.y - 55 - Math.abs(flick) * 2, 1, 2, '#ffb74d');
    return;
  }
  fill(c, t.x - 1, t.y - 20, 3, 20, '#23161c');
  fill(c, t.x, t.y - 19, 1, 18, '#523239');
  fill(c, t.x - 3, t.y - 22, 7, 3, '#341d24');
  fill(c, t.x - 2 + flick * 0.3, t.y - 29, 4, 7, '#a4451f');
  fill(c, t.x - 3, t.y - 27 + flick * 0.4, 5, 6, '#ff8e37');
  fill(c, t.x - 1, t.y - 29 + flick, 3, 5, '#ffd46a');
  fill(c, t.x, t.y - 30 + flick, 1, 3, '#fff3ba');
  if (chance(0.35)) fill(c, t.x + 3, t.y - 34 - Math.abs(flick), 1, 2, '#ffb74d');
}

function drawGib(c, g) {
  const blink = g.life < 5 ? (Math.sin(g.blink * 5) > 0 ? 0.45 : 1) : 1;
  c.save();
  c.globalAlpha = blink;
  c.translate(Math.round(g.x), Math.round(g.y));
  c.rotate(g.rot);
  c.scale(g.scale || 1, g.scale || 1);
  c.globalAlpha *= 0.35;
  ellipse(c, 0, 2, 5, 2, '#030205');
  c.globalAlpha = blink;
  if (g.kind === 'head') {
    fill(c, -4, -6, 8, 7, '#9c6b4e');
    fill(c, -4, -7, 8, 2, '#3b2523');
    fill(c, -5, -5, 2, 4, '#34201f');
    fill(c, -3, -1, 6, 2, '#6b4035');
    fill(c, -2, -4, 2, 1, '#d5b18a');
    fill(c, 1, -4, 2, 1, '#d5b18a');
    if (chance(0.5)) fill(c, -1, 2, 2, 2, '#5a0f1e');
  } else if (g.kind === 'torso') {
    fill(c, -5, -6, 10, 11, '#5c4030');
    fill(c, -4, -5, 8, 9, '#76533a');
    fill(c, -4, -3, 8, 1, '#39261f');
    fill(c, -1, -4, 2, 7, '#8f1c2e');
    fill(c, 2, 1, 4, 2, '#5a0f1e');
  } else if (g.kind === 'arm') {
    fill(c, -2, -5, 4, 9, '#9c6b4e');
    fill(c, -2, 1, 4, 3, '#5e3f2d');
    fill(c, -1, -5, 2, 2, '#c59265');
    fill(c, -1, -1, 2, 1, '#5a0f1e');
  } else {
    fill(c, -2, -5, 4, 10, '#9c6b4e');
    fill(c, -2, 2, 5, 3, '#3b2523');
    fill(c, -1, -5, 2, 5, '#7c5138');
    fill(c, 1, -2, 2, 1, '#5a0f1e');
  }
  c.restore();
}

function drawArrow(c, arrow) {
  c.save();
  c.translate(Math.round(arrow.x), Math.round(arrow.y));
  c.rotate(arrow.angle);
  fill(c, -7, -1, 10, 2, '#a08365');
  fill(c, 3, -1, 4, 2, '#d5c2a0');
  fill(c, -7, -2, 3, 1, '#7e3d43');
  fill(c, -7, 1, 3, 1, '#7e3d47');
  c.restore();
}

function drawExclamation(c, x, y, alpha) {
  c.globalAlpha = alpha;
  fill(c, x - 1, y - 9, 2, 5, '#ff5b6e');
  fill(c, x - 1, y - 3, 2, 2, '#ffd7b0');
  c.globalAlpha = 1;
}

function drawEnemy(c, e) {
  const def = e.def;
  const bossScale = e.boss ? 1.7 : def.ranged || e.type === 'priest' ? 0.96 : e.type === 'knight' ? 1.15 : 1;
  const flash = e.hitFlash > 0;
  const moving = e.state === 'chase' || e.flee;
  const tremble = e.dormant ? Math.sin(e.tremble * 9) * 0.9 : 0;
  const bob = e.dormant ? Math.sin(e.tremble * 3) * 0.5 : moving ? Math.sin(e.walk * 2) * 0.8 : Math.sin(game.time * 2 + e.walk) * 0.35;
  const x = Math.round(e.x + tremble);
  const y = Math.round(e.y + bob);

  if (e.state === 'windup') {
    const p = e.timer / (e.special ? 0.95 : e.windup);
    c.globalAlpha = 0.16 + Math.sin(game.time * 18) * 0.08;
    ellipse(c, e.x, e.y + 1, e.special ? 62 : e.reach + 4, e.special ? 23 : 10, '#b4213e');
    c.globalAlpha = 0.45 + Math.sin(game.time * 18) * 0.2;
    c.strokeStyle = '#e73b59';
    c.lineWidth = 1;
    c.beginPath();
    c.ellipse(e.x, e.y + 1, (e.special ? 62 : e.reach + 4) * (1 - p * 0.12), (e.special ? 23 : 10) * (1 - p * 0.12), 0, 0, TAU);
    c.stroke();
    c.globalAlpha = 1;
  }

  c.globalAlpha = 0.34;
  ellipse(c, x, e.y + 1, (e.boss ? 14 : 7) * (e.boss ? 1.4 : 1), e.boss ? 4 : 2.5, '#030205');
  c.globalAlpha = 1;

  c.save();
  c.translate(x, y);
  c.scale(bossScale * (e.facing || 1), bossScale);
  if (e.dormant) c.rotate(Math.sin(e.tremble * 5) * 0.03);

  let skin = '#c59265';
  let skinDark = '#9c6b4e';
  let tunic = '#55422b';
  let tunic2 = '#715839';
  let trim = '#2c2320';
  let metal = '#8a8794';
  let plume = '#8f263b';

  if (e.type === 'guard') {
    tunic = '#344458';
    tunic2 = '#4a6079';
    trim = '#1e2735';
    metal = '#8a8794';
  } else if (e.type === 'archer') {
    tunic = '#32452d';
    tunic2 = '#4a603f';
    trim = '#1c281b';
  } else if (e.type === 'priest') {
    tunic = '#c0b8a8';
    tunic2 = '#e0d7c3';
    trim = '#6d635b';
  } else if (e.type === 'knight') {
    tunic = '#57545f';
    tunic2 = '#7d7a86';
    trim = '#26232c';
    skin = '#aca6a0';
    metal = '#b4b1bc';
  } else if (e.type === 'warden') {
    tunic = '#29242f';
    tunic2 = '#403a48';
    trim = '#151118';
    metal = '#6f6a74';
    plume = '#a51e38';
    skin = '#202029';
  }

  if (flash) {
    skin = '#fff1d6';
    skinDark = '#e4c7a3';
    tunic = '#ffd9c4';
    tunic2 = '#fff0d8';
    metal = '#fff7e8';
    trim = '#c68b7a';
  }

  const step = moving ? Math.sin(e.walk * 2) * 1.6 : 0;
  fill(c, -4, -7 + step, 3, 8, trim);
  fill(c, 1, -7 - step, 3, 8, trim);
  fill(c, -4, -2 + step, 4, 3, '#241820');
  fill(c, 1, -2 - step, 4, 3, '#241820');
  fill(c, -4, -15, 8, 9, tunic);
  fill(c, -3, -14, 6, 7, tunic2);
  fill(c, -4, -10, 8, 2, trim);
  fill(c, -6, -14, 2, 7, tunic);
  fill(c, 4, -14, 2, 7, tunic);
  fill(c, -5, -14, 2, 2, skin);
  fill(c, 3, -14, 2, 2, skin);

  let headY = -22;
  if (e.type === 'knight' || e.type === 'warden') {
    fill(c, -5, -23, 10, 9, metal);
    fill(c, -4, -22, 8, 6, flash ? '#fff7e8' : '#6d6975');
    fill(c, -5, -24, 10, 2, flash ? '#ffffff' : '#c4c0c8');
    fill(c, -2, -20, 4, 1, '#1b151d');
    fill(c, -1, -19, 2, 1, e.boss ? '#ff445f' : '#281c22');
    if (e.boss) {
      fill(c, -6, -29, 3, 8, metal);
      fill(c, 3, -29, 3, 8, metal);
      fill(c, -7, -30, 5, 2, '#d5cec0');
      fill(c, 2, -30, 5, 2, '#d5cec0');
    } else {
      fill(c, -1, -27, 2, 4, plume);
      fill(c, 2, -26, 4, 2, plume);
    }
  } else if (e.type === 'priest') {
    fill(c, -4, -23, 8, 9, '#b9b09f');
    fill(c, -4, -24, 8, 2, '#4d423c');
    fill(c, -3, -21, 6, 6, skinDark);
    fill(c, -2, -19, 1, 1, '#2a1a20');
    fill(c, 1, -19, 1, 1, '#2a1a20');
    fill(c, -1, -16, 2, 2, '#5f3b35');
  } else {
    fill(c, -4, -22, 8, 8, skin);
    fill(c, -4, -23, 8, 3, e.type === 'archer' ? '#34482e' : '#4b3427');
    fill(c, -5, -22, 2, 3, e.type === 'archer' ? '#34482e' : '#4b3427');
    if (e.type === 'archer') {
      fill(c, -5, -20, 10, 2, '#3f5536');
      fill(c, -3, -20, 3, 1, '#111014');
    } else {
      fill(c, -5, -25, 10, 4, '#b18b50');
      fill(c, -3, -25, 6, 1, '#8d6b3e');
    }
    fill(c, -2, -19, 1, 1, '#24151b');
    fill(c, 1, -19, 1, 1, '#24151b');
    fill(c, -1, -16, 2, 1, '#6a4038');
  }

  const weaponSide = e.facing || 1;
  c.save();
  c.scale(weaponSide, 1);
  if (e.state === 'windup') {
    c.translate(0, Math.sin(game.time * 24) * 0.7 - 3);
  }
  if (e.type === 'villager') {
    fill(c, 6, -13, 1, 16, '#5a3b29');
    fill(c, 5, -14, 1, 3, '#9b774b');
    fill(c, 7, -14, 1, 3, '#9b774b');
    fill(c, 9, -14, 1, 3, '#9b774b');
    fill(c, 4, -6, 5, 1, '#7b5839');
  } else if (e.type === 'guard' || e.type === 'knight') {
    fill(c, 6, -15, 2, 18, '#5b4130');
    c.save();
    c.translate(7, -16);
    if (e.state === 'windup') c.rotate(-0.6);
    fill(c, -1, -13, 2, 15, metal);
    fill(c, -4, -14, 8, 2, metal);
    fill(c, -1, -15, 2, 2, flash ? '#ffffff' : '#e4dfd1');
    c.restore();
  } else if (e.type === 'archer') {
    c.strokeStyle = '#8b6a42';
    c.lineWidth = 1;
    c.beginPath();
    c.arc(6, -10, 7, -Math.PI / 2, Math.PI / 2);
    c.stroke();
    fill(c, 5, -17, 1, 14, '#c0b28f');
    fill(c, 6, -10, 10, 1, '#7a5a36');
    fill(c, 13, -11, 2, 2, '#b1b6b4');
  } else if (e.type === 'priest') {
    fill(c, 6, -18, 1, 20, '#6a4f34');
    fill(c, 5, -20, 3, 3, '#8f7245');
    fill(c, 4, -26, 5, 2, '#d1b777');
    fill(c, 5, -28, 2, 6, '#d1b777');
  } else if (e.type === 'warden') {
    fill(c, 5, -18, 2, 22, '#3a2b28');
    c.save();
    c.translate(7, -19);
    if (e.state === 'windup') c.rotate(-0.7);
    fill(c, -1, -16, 2, 19, '#54494d');
    fill(c, -5, -17, 10, 5, '#7f7378');
    fill(c, -7, -18, 4, 4, '#b0a7aa');
    fill(c, 2, -18, 4, 4, '#b0a7aa');
    c.restore();
  }
  c.restore();

  if (e.hp < e.maxHp) {
    fill(c, -8, -31, 16, 2, '#09060c');
    fill(c, -8, -31, Math.max(0, Math.round(16 * (e.hp / e.maxHp))), 2, e.boss ? '#e04b62' : '#b4213e');
  }
  if (e.state === 'windup') drawExclamation(c, 0, -34, 0.7 + Math.sin(game.time * 18) * 0.3);
  c.restore();
}

function drawPlayer(c, p) {
  const frenzy = p.frenzy > 0;
  const flash = p.hitFlash > 0;
  const flicker = p.invuln > 0 && Math.floor(game.time * 28) % 2 === 0;
  const moving = p.moving || p.dashTime > 0;
  const bob = moving ? Math.sin(p.walk * 2) * 1.3 : Math.sin(game.time * 2.1) * 0.7;
  const size = p.size;
  const x = p.x;
  const y = p.y + bob;

  c.globalAlpha = 0.44;
  ellipse(c, x, p.y + 1, 17 * size, 5.5 * size, '#030205');
  c.globalAlpha = flicker ? 0.58 : 1;

  c.save();
  c.translate(Math.round(x), Math.round(y));
  c.scale(size, size);
  if (p.roar > 0) c.translate(Math.sin(game.time * 50) * 0.9, 0);

  let body = frenzy ? '#76182b' : '#4a1123';
  let mid = frenzy ? '#a82a3e' : '#681a30';
  let dark = frenzy ? '#3e0a17' : '#280a16';
  let outline = '#13050b';
  let hi = frenzy ? '#e8534e' : '#9b2e48';
  let bone = '#d9c5a1';
  if (flash) {
    body = '#b9947a';
    mid = '#e2c3a5';
    dark = '#8f6d5c';
    outline = '#4d302b';
    hi = '#fff0d8';
    bone = '#fff5dd';
  }

  const step = moving ? Math.sin(p.walk * 2) * 2 : 0;
  fill(c, -10, -8 + step, 8, 9, outline);
  fill(c, 2, -8 - step, 8, 9, outline);
  fill(c, -9, -7 + step, 6, 7, dark);
  fill(c, 3, -7 - step, 6, 7, dark);
  fill(c, -11, -2 + step, 9, 3, '#1a0710');
  fill(c, 2, -2 - step, 9, 3, '#1a0710');

  const wing = Math.sin(game.time * 3.1) * 1.6;
  const wingFill = frenzy ? '#581525' : '#31101e';
  c.save();
  c.strokeStyle = outline;
  c.lineWidth = 2;
  c.fillStyle = wingFill;
  c.beginPath();
  c.moveTo(-10, -36);
  c.lineTo(-21, -51 - wing);
  c.lineTo(-28, -45);
  c.lineTo(-26, -36);
  c.lineTo(-35, -38);
  c.lineTo(-30, -29);
  c.lineTo(-37, -26);
  c.lineTo(-26, -23);
  c.lineTo(-28, -17);
  c.lineTo(-16, -22);
  c.closePath();
  c.fill();
  c.stroke();
  c.beginPath();
  c.moveTo(10, -36);
  c.lineTo(22, -50 + wing);
  c.lineTo(29, -44);
  c.lineTo(26, -35);
  c.lineTo(35, -37);
  c.lineTo(30, -28);
  c.lineTo(37, -25);
  c.lineTo(26, -22);
  c.lineTo(28, -16);
  c.lineTo(16, -21);
  c.closePath();
  c.fill();
  c.stroke();
  c.strokeStyle = frenzy ? '#b54a4b' : '#7e3a43';
  c.lineWidth = 1;
  c.beginPath();
  c.moveTo(-12, -35);
  c.lineTo(-23, -46 - wing);
  c.moveTo(-14, -33);
  c.lineTo(-31, -38);
  c.moveTo(-15, -31);
  c.lineTo(-31, -27);
  c.moveTo(12, -35);
  c.lineTo(24, -45 + wing);
  c.moveTo(14, -33);
  c.lineTo(31, -37);
  c.moveTo(15, -31);
  c.lineTo(31, -26);
  c.stroke();
  c.restore();

  const torsoRows = [
    [-40, 20], [-37, 27], [-34, 31], [-31, 32], [-28, 31],
    [-25, 28], [-22, 26], [-19, 23], [-16, 20], [-13, 17], [-10, 14]
  ];
  for (let i = 0; i < torsoRows.length; i += 1) {
    const row = torsoRows[i];
    fill(c, -row[1] / 2 - 2, row[0] - 1, row[1] + 4, 5, outline);
  }
  for (let i = 0; i < torsoRows.length; i += 1) {
    const row = torsoRows[i];
    fill(c, -row[1] / 2, row[0], row[1], 4, body);
  }
  fill(c, -11, -37, 22, 6, mid);
  fill(c, -9, -31, 18, 8, mid);
  fill(c, -7, -23, 14, 7, mid);
  fill(c, -8, -10, 16, 3, dark);
  fill(c, -5, -34, 10, 2, hi);
  fill(c, -7, -31, 14, 2, dark);
  fill(c, -7, -28, 14, 2, mid);
  fill(c, -6, -26, 12, 1, bone);
  fill(c, -6, -23, 12, 1, '#8a6f58');
  fill(c, -5, -20, 10, 1, bone);
  fill(c, -3, -17, 6, 2, '#240912');
  c.beginPath();
  c.moveTo(-13, -40);
  c.lineTo(-20, -45);
  c.lineTo(-15, -34);
  c.closePath();
  c.fillStyle = bone;
  c.fill();
  c.beginPath();
  c.moveTo(13, -40);
  c.lineTo(20, -45);
  c.lineTo(15, -34);
  c.closePath();
  c.fill();
  fill(c, -20, -45, 3, 3, '#a89474');
  fill(c, 17, -45, 3, 3, '#a89474');

  fill(c, -18, -35, 6, 13, outline);
  fill(c, -19, -23, 7, 10, outline);
  fill(c, -17, -34, 4, 12, dark);
  fill(c, -18, -24, 5, 9, body);
  fill(c, -20, -17, 3, 3, bone);
  fill(c, -22, -15, 2, 5, '#e7d6b4');
  fill(c, -19, -14, 2, 6, '#e7d6b4');
  fill(c, -16, -14, 2, 5, '#c8b292');

  fill(c, 12, -35, 6, 13, outline);
  fill(c, 12, -23, 7, 10, outline);
  fill(c, 13, -34, 4, 12, dark);
  fill(c, 13, -24, 5, 9, body);
  fill(c, 17, -17, 3, 3, bone);
  fill(c, 20, -15, 2, 5, '#e7d6b4');
  fill(c, 17, -14, 2, 6, '#e7d6b4');
  fill(c, 14, -14, 2, 5, '#c8b292');

  c.beginPath();
  c.moveTo(-14, -38);
  c.lineTo(-22, -42);
  c.lineTo(-15, -32);
  c.closePath();
  c.fillStyle = bone;
  c.fill();
  c.beginPath();
  c.moveTo(14, -38);
  c.lineTo(22, -42);
  c.lineTo(15, -32);
  c.closePath();
  c.fill();
  fill(c, -22, -42, 3, 3, '#a89474');
  fill(c, 19, -42, 3, 3, '#a89474');

  fill(c, -9, -50, 18, 13, outline);
  fill(c, -8, -49, 16, 11, body);
  fill(c, -7, -47, 14, 7, mid);
  fill(c, -7, -46, 14, 2, dark);
  fill(c, -5, -43, 3, 2, frenzy ? '#fff1a8' : '#ffcf62');
  fill(c, 2, -43, 3, 2, frenzy ? '#fff1a8' : '#ffcf62');
  fill(c, -6, -44, 5, 1, frenzy ? '#ff8a52' : '#9b2e48');
  fill(c, 1, -44, 5, 1, frenzy ? '#ff8a52' : '#9b2e48');
  if (p.roar > 0) {
    fill(c, -6, -39, 12, 4, '#18040b');
    fill(c, -5, -38, 2, 2, '#efe2c4');
    fill(c, -1, -38, 2, 2, '#efe2c4');
    fill(c, 4, -38, 2, 2, '#efe2c4');
    fill(c, -2, -36, 4, 2, '#8f1930');
  } else {
    fill(c, -5, -39, 10, 2, '#18040b');
    fill(c, -4, -39, 1, 1, '#efe2c4');
    fill(c, 0, -39, 1, 1, '#efe2c4');
    fill(c, 4, -39, 1, 1, '#efe2c4');
    fill(c, 1, -37, 1, 2, '#8f1930');
  }
  fill(c, -7, -41, 2, 1, '#2b0b16');
  fill(c, 5, -41, 2, 1, '#2b0b16');

  c.beginPath();
  c.moveTo(-8, -50);
  c.lineTo(-15, -61);
  c.lineTo(-11, -48);
  c.closePath();
  c.fillStyle = bone;
  c.fill();
  c.beginPath();
  c.moveTo(8, -50);
  c.lineTo(15, -61);
  c.lineTo(11, -48);
  c.closePath();
  c.fill();
  fill(c, -14, -58, 3, 3, '#a89474');
  fill(c, 11, -58, 3, 3, '#a89474');
  fill(c, -2, -51, 4, 4, '#3a0c18');
  fill(c, -1, -52, 2, 2, '#b79c78');

  c.beginPath();
  c.moveTo(-5, -50);
  c.lineTo(-9, -56);
  c.lineTo(-3, -49);
  c.closePath();
  c.fillStyle = '#2a0a15';
  c.fill();
  c.beginPath();
  c.moveTo(5, -50);
  c.lineTo(9, -56);
  c.lineTo(3, -49);
  c.closePath();
  c.fill();

  if (p.attackTime > 0) {
    c.save();
    c.translate(0, -31);
    c.rotate(p.attackAngle);
    fill(c, 3, -4, 13, 8, outline);
    fill(c, 5, -3, 14, 6, dark);
    fill(c, 9, -2, 11, 4, body);
    fill(c, 19, -4, 2, 7, bone);
    fill(c, 21, -5, 2, 6, '#e7d6b4');
    fill(c, 23, -4, 2, 4, '#e7d6b4');
    fill(c, 20, 2, 2, 4, '#c8b292');
    c.restore();
  } else if (frenzy) {
    fill(c, -20, -18, 2, 4, '#ff8a52');
    fill(c, 18, -18, 2, 4, '#ff8a52');
  }

  if (p.level >= 3) {
    fill(c, -12, -47, 1, 4, '#b39e78');
    fill(c, 11, -47, 1, 4, '#b39e78');
  }
  if (p.level >= 5) {
    fill(c, -12, -38, 4, 2, bone);
    fill(c, 8, -38, 4, 2, bone);
    fill(c, -11, -43, 2, 2, '#e7d6b4');
    fill(c, 9, -43, 2, 2, '#e7d6b4');
  }
  if (frenzy) {
    fill(c, -9, -30, 2, 3, '#ffb74d');
    fill(c, 7, -30, 2, 3, '#ffb74d');
    fill(c, -6, -12, 12, 1, '#ff5a3c');
  }
  c.restore();
  c.globalAlpha = 1;
}

function drawProjectile(c, arrow) {
  drawArrow(c, arrow);
}

function drawSlash(c, s) {
  const t = clamp(s.time / s.life, 0, 1);
  const alpha = 1 - t;
  const segments = s.chain === 3 ? 18 : 13;
  const span = s.arc * 2;
  c.save();
  c.globalAlpha = alpha * 0.34;
  c.strokeStyle = s.hostile ? '#ff5b6e' : '#f5d6c1';
  c.lineWidth = s.chain === 3 ? 5 : 3;
  c.beginPath();
  const rr = s.radius * (0.55 + t * 0.5);
  c.arc(s.x, s.y, rr, s.angle - s.arc, s.angle + s.arc);
  c.stroke();
  c.globalAlpha = alpha;
  for (let i = 0; i < segments; i += 1) {
    const ratio = i / (segments - 1);
    const a = s.angle - s.arc + span * ratio;
    const rad = s.radius * (0.55 + t * 0.5) + Math.sin(ratio * Math.PI) * 3;
    const px = s.x + Math.cos(a) * rad;
    const py = s.y + Math.sin(a) * rad;
    const sz = (i % 3 === 0 ? 2 : 1) + (s.chain === 3 ? 1 : 0);
    fill(c, px, py, sz, sz, s.hostile ? '#ff7384' : '#fff1d2');
    if (i % 4 === 0) {
      fill(c, px - Math.cos(a) * 2, py - Math.sin(a) * 2, 1, 1, s.hostile ? '#a51e38' : '#f1a6b4');
    }
  }
  c.globalAlpha = 1;
  c.restore();
}

function drawParticle(c, part) {
  c.globalAlpha = clamp(part.life / part.maxLife, 0, 1);
  fill(c, part.x, part.y, part.size, part.size, part.color);
  c.globalAlpha = 1;
}

function drawAfterimages(c) {
  for (let i = 0; i < game.afterimages.length; i += 1) {
    const img = game.afterimages[i];
    c.globalAlpha = (img.life / img.maxLife) * 0.22;
    c.fillStyle = '#6d4c91';
    c.fillRect(Math.round(img.x - 12 * img.scale), Math.round(img.y - 38 * img.scale), Math.round(24 * img.scale), Math.round(38 * img.scale));
    c.globalAlpha = 1;
  }
}

function worldToScreen(x, y, viewX, viewY) {
  return { x: x - viewX, y: y - viewY };
}

function addLight(x, y, radius, viewX, viewY, strength) {
  const sx = x - viewX;
  const sy = y - viewY;
  if (sx < -radius || sy < -radius || sx > VIEW.w + radius || sy > VIEW.h + radius) return;
  const gradient = lightCtx.createRadialGradient(sx, sy, 0, sx, sy, radius);
  gradient.addColorStop(0, 'rgba(0,0,0,' + strength + ')');
  gradient.addColorStop(0.45, 'rgba(0,0,0,' + strength * 0.58 + ')');
  gradient.addColorStop(1, 'rgba(0,0,0,0)');
  lightCtx.fillStyle = gradient;
  lightCtx.beginPath();
  lightCtx.arc(sx, sy, radius, 0, TAU);
  lightCtx.fill();
}

function drawLighting(viewX, viewY) {
  lightCtx.clearRect(0, 0, VIEW.w, VIEW.h);
  lightCtx.fillStyle = 'rgba(5,5,15,0.34)';
  lightCtx.fillRect(0, 0, VIEW.w, VIEW.h);
  lightCtx.globalCompositeOperation = 'destination-out';
  for (let i = 0; i < torches.length; i += 1) {
    const t = torches[i];
    addLight(t.x, t.y - (t.big ? 30 : 16), t.big ? 148 : 112, viewX, viewY, 0.97);
  }
  if (game.player) {
    addLight(game.player.x, game.player.y - 18, game.player.frenzy > 0 ? 148 : 120, viewX, viewY, 0.96);
  }
  for (let i = 0; i < game.slashes.length; i += 1) {
    const s = game.slashes[i];
    addLight(s.x + Math.cos(s.angle) * s.radius * 0.7, s.y + Math.sin(s.angle) * s.radius * 0.7, 44, viewX, viewY, 0.7);
  }
  lightCtx.globalCompositeOperation = 'source-over';
  ctx.drawImage(lightCanvas, 0, 0);

  ctx.save();
  ctx.globalCompositeOperation = 'screen';
  for (let i = 0; i < torches.length; i += 1) {
    const t = torches[i];
    const sx = t.x - viewX;
    const sy = t.y - (t.big ? 34 : 20) - viewY;
    const radius = t.big ? 92 : 62;
    if (sx < -radius || sy < -radius || sx > VIEW.w + radius || sy > VIEW.h + radius) continue;
    const g = ctx.createRadialGradient(sx, sy, 0, sx, sy, radius);
    g.addColorStop(0, t.big ? 'rgba(255,162,64,.28)' : 'rgba(255,150,58,.2)');
    g.addColorStop(0.5, 'rgba(255,100,30,.1)');
    g.addColorStop(1, 'rgba(255,80,20,0)');
    ctx.fillStyle = g;
    ctx.fillRect(sx - radius, sy - radius, radius * 2, radius * 2);
  }
  if (game.player) {
    const p = game.player;
    const sx = p.x - viewX;
    const sy = p.y - 20 - viewY;
    const radius = p.frenzy > 0 ? 66 : 47;
    const g = ctx.createRadialGradient(sx, sy, 0, sx, sy, radius);
    if (p.frenzy > 0) {
      g.addColorStop(0, 'rgba(255,100,70,.24)');
      g.addColorStop(1, 'rgba(180,30,50,0)');
    } else {
      g.addColorStop(0, 'rgba(155,109,255,.16)');
      g.addColorStop(1, 'rgba(95,50,150,0)');
    }
    ctx.fillStyle = g;
    ctx.fillRect(sx - radius, sy - radius, radius * 2, radius * 2);
  }
  ctx.restore();
}

function drawFireflies(viewX, viewY) {
  ctx.save();
  ctx.globalCompositeOperation = 'screen';
  for (let i = 0; i < game.fireflies.length; i += 1) {
    const fly = game.fireflies[i];
    const sx = fly.x - viewX;
    const sy = fly.y - viewY;
    if (sx < -8 || sy < -8 || sx > VIEW.w + 8 || sy > VIEW.h + 8) continue;
    const pulse = 0.4 + Math.sin(game.time * 2.2 + fly.phase) * 0.3;
    ctx.globalAlpha = clamp(pulse, 0.15, 0.8);
    ctx.fillStyle = '#b7e27b';
    ctx.fillRect(Math.round(sx), Math.round(sy), 2, 2);
    ctx.globalAlpha = pulse * 0.2;
    ctx.fillStyle = '#9fce6e';
    ctx.fillRect(Math.round(sx) - 2, Math.round(sy) - 2, 6, 6);
  }
  ctx.globalAlpha = 1;
  ctx.restore();
}

function drawTexts(viewX, viewY) {
  ctx.save();
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  for (let i = 0; i < game.texts.length; i += 1) {
    const text = game.texts[i];
    const sx = text.x - viewX;
    const sy = text.y - viewY;
    if (sx < -60 || sy < -30 || sx > VIEW.w + 60 || sy > VIEW.h + 30) continue;
    const alpha = clamp(text.life / text.maxLife, 0, 1);
    ctx.globalAlpha = alpha;
    ctx.font = text.size + 'px "PressStart", monospace';
    ctx.fillStyle = 'rgba(0,0,0,.85)';
    ctx.fillText(text.text, sx + 1, sy + 1);
    ctx.fillStyle = text.color;
    ctx.fillText(text.text, sx, sy);
  }
  ctx.globalAlpha = 1;
  ctx.restore();
}

export function render() {
  const shake = game.shake;
  game.shakeX = shake > 0 ? (Math.random() * 2 - 1) * shake : 0;
  game.shakeY = shake > 0 ? (Math.random() * 2 - 1) * shake : 0;
  let viewX = Math.round(camera.x - game.shakeX);
  let viewY = Math.round(camera.y - game.shakeY);
  viewX = clamp(viewX, 0, Math.max(0, WORLD.w - VIEW.w));
  viewY = clamp(viewY, 0, Math.max(0, WORLD.h - VIEW.h));

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.fillStyle = '#07050c';
  ctx.fillRect(0, 0, VIEW.w, VIEW.h);
  ctx.imageSmoothingEnabled = false;

  ctx.drawImage(bgCanvas, viewX, viewY, VIEW.w, VIEW.h, 0, 0, VIEW.w, VIEW.h);
  ctx.drawImage(decalCanvas, viewX, viewY, VIEW.w, VIEW.h, 0, 0, VIEW.w, VIEW.h);

  ctx.save();
  ctx.translate(-viewX, -viewY);

  drawAfterimages(ctx);

  const drawables = [];
  for (let i = 0; i < game.enemies.length; i += 1) {
    const enemy = game.enemies[i];
    if (!enemy.dead) drawables.push({ kind: 'enemy', y: enemy.y, ref: enemy });
  }
  for (let i = 0; i < game.gibs.length; i += 1) {
    drawables.push({ kind: 'gib', y: game.gibs[i].y, ref: game.gibs[i] });
  }
  for (let i = 0; i < torches.length; i += 1) {
    drawables.push({ kind: 'torch', y: torches[i].y, ref: torches[i] });
  }
  if (game.player) drawables.push({ kind: 'player', y: game.player.y, ref: game.player });
  drawables.sort(function (a, b) { return a.y - b.y; });

  for (let i = 0; i < drawables.length; i += 1) {
    const item = drawables[i];
    if (item.kind === 'enemy') drawEnemy(ctx, item.ref);
    else if (item.kind === 'gib') drawGib(ctx, item.ref);
    else if (item.kind === 'torch') drawTorch(ctx, item.ref);
    else drawPlayer(ctx, item.ref);
  }

  for (let i = 0; i < game.projectiles.length; i += 1) drawProjectile(ctx, game.projectiles[i]);
  for (let i = 0; i < game.slashes.length; i += 1) drawSlash(ctx, game.slashes[i]);
  for (let i = 0; i < game.particles.length; i += 1) drawParticle(ctx, game.particles[i]);

  ctx.restore();

  drawLighting(viewX, viewY);
  drawFireflies(viewX, viewY);
  drawTexts(viewX, viewY);

  if (game.flash > 0) {
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    ctx.fillStyle = 'rgba(' + game.flashColor + ',' + (game.flash * 0.34) + ')';
    ctx.fillRect(0, 0, VIEW.w, VIEW.h);
    ctx.restore();
  }

  if (game.damageVignette > 0) {
    ctx.save();
    const g = ctx.createRadialGradient(VIEW.w / 2, VIEW.h / 2, Math.min(VIEW.w, VIEW.h) * 0.26, VIEW.w / 2, VIEW.h / 2, Math.max(VIEW.w, VIEW.h) * 0.7);
    g.addColorStop(0, 'rgba(120,10,28,0)');
    g.addColorStop(1, 'rgba(180,20,48,' + game.damageVignette * 0.18 + ')');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, VIEW.w, VIEW.h);
    ctx.restore();
  }
}

export function resizeCanvas(vw, vh) {
  VIEW.w = vw;
  VIEW.h = vh;
  canvas.width = vw;
  canvas.height = vh;
  lightCanvas.width = vw;
  lightCanvas.height = vh;
  ctx.imageSmoothingEnabled = false;
  lightCtx.imageSmoothingEnabled = false;
}
