import * as THREE from '../vendor/three.module.js';

const TAU = Math.PI * 2;

function mulberry32(seed) {
  let a = seed >>> 0;
  return function random() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function canvas2d(size) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  return { canvas, ctx: canvas.getContext('2d') };
}

function finish(canvas, repeat = 1, srgb = true) {
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(repeat, repeat);
  texture.anisotropy = 8;
  if (srgb) texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function grain(ctx, size, random, alpha = 10, sizeMin = 1, sizeMax = 2) {
  const image = ctx.getImageData(0, 0, size, size);
  const data = image.data;
  for (let i = 0; i < data.length; i += 4) {
    const n = (random() - 0.5) * alpha * 2;
    data[i] = Math.max(0, Math.min(255, data[i] + n));
    data[i + 1] = Math.max(0, Math.min(255, data[i + 1] + n));
    data[i + 2] = Math.max(0, Math.min(255, data[i + 2] + n));
  }
  ctx.putImageData(image, 0, 0);
  for (let i = 0; i < size * 2; i++) {
    const shade = random() > 0.5 ? 255 : 0;
    ctx.fillStyle = `rgba(${shade},${shade},${shade},${0.02 + random() * 0.05})`;
    const s = sizeMin + random() * (sizeMax - sizeMin);
    ctx.fillRect(random() * size, random() * size, s, s);
  }
}

export function makeDirtTexture() {
  const size = 512;
  const { canvas, ctx } = canvas2d(size);
  const random = mulberry32(1264);
  const image = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;
      const broad = Math.sin(x * 0.024 + Math.sin(y * 0.017) * 2) * 7;
      const n = (random() - 0.5) * 26 + broad;
      image.data[i] = 44 + n;
      image.data[i + 1] = 40 + n * 0.9;
      image.data[i + 2] = 33 + n * 0.7;
      image.data[i + 3] = 255;
    }
  }
  ctx.putImageData(image, 0, 0);

  for (let i = 0; i < 500; i++) {
    const x = random() * size;
    const y = random() * size;
    const r = 2 + random() * 22;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    const light = random() > 0.55;
    g.addColorStop(0, light ? 'rgba(96,85,64,0.10)' : 'rgba(12,11,9,0.16)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }

  for (let i = 0; i < 900; i++) {
    const x = random() * size;
    const y = random() * size;
    const r = 0.5 + random() * 2.2;
    ctx.fillStyle = random() > 0.4 ? 'rgba(118,108,88,0.35)' : 'rgba(20,18,15,0.45)';
    ctx.beginPath();
    ctx.ellipse(x, y, r, r * (0.5 + random()), random() * TAU, 0, TAU);
    ctx.fill();
  }

  ctx.lineCap = 'round';
  for (let i = 0; i < 26; i++) {
    let x = random() * size;
    let y = random() * size;
    ctx.strokeStyle = `rgba(10,9,8,${0.25 + random() * 0.3})`;
    ctx.lineWidth = 1 + random() * 2;
    ctx.beginPath();
    ctx.moveTo(x, y);
    for (let s = 0; s < 8; s++) {
      x += (random() - 0.5) * 40;
      y += 10 + random() * 26;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  grain(ctx, size, random, 8);
  return finish(canvas, 7);
}

export function makeAsphaltTexture() {
  const size = 512;
  const { canvas, ctx } = canvas2d(size);
  const random = mulberry32(8871);
  ctx.fillStyle = '#22242a';
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 2200; i++) {
    const v = 30 + Math.floor(random() * 55);
    ctx.fillStyle = `rgba(${v},${v + 2},${v + 6},${0.25 + random() * 0.5})`;
    const r = 0.6 + random() * 2.4;
    ctx.beginPath();
    ctx.arc(random() * size, random() * size, r, 0, TAU);
    ctx.fill();
  }
  ctx.strokeStyle = 'rgba(8,8,10,0.7)';
  for (let i = 0; i < 14; i++) {
    let x = random() * size;
    let y = random() * size;
    ctx.lineWidth = 1 + random() * 3;
    ctx.beginPath();
    ctx.moveTo(x, y);
    for (let s = 0; s < 10; s++) {
      x += (random() - 0.5) * 62;
      y += (random() - 0.5) * 62;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  grain(ctx, size, random, 9);
  return finish(canvas, 4);
}

export function makeStoneTexture() {
  const size = 256;
  const { canvas, ctx } = canvas2d(size);
  const random = mulberry32(441);
  ctx.fillStyle = '#5b5d5c';
  ctx.fillRect(0, 0, size, size);
  const image = ctx.getImageData(0, 0, size, size);
  for (let i = 0; i < image.data.length; i += 4) {
    const n = (random() - 0.5) * 38;
    image.data[i] = 91 + n;
    image.data[i + 1] = 93 + n;
    image.data[i + 2] = 90 + n;
  }
  ctx.putImageData(image, 0, 0);
  for (let i = 0; i < 120; i++) {
    ctx.fillStyle = random() > 0.5 ? 'rgba(20,22,20,0.18)' : 'rgba(160,162,155,0.12)';
    ctx.beginPath();
    ctx.ellipse(random() * size, random() * size, 2 + random() * 12, 1 + random() * 4, random() * TAU, 0, TAU);
    ctx.fill();
  }
  for (let i = 0; i < 30; i++) {
    ctx.strokeStyle = 'rgba(22,24,22,0.25)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    const x = random() * size;
    const y = random() * size;
    ctx.moveTo(x, y);
    ctx.lineTo(x + (random() - 0.5) * 50, y + (random() - 0.5) * 50);
    ctx.stroke();
  }
  return finish(canvas, 2);
}

export function makeWoodTexture() {
  const size = 512;
  const { canvas, ctx } = canvas2d(size);
  const random = mulberry32(5531);
  ctx.fillStyle = '#4a3524';
  ctx.fillRect(0, 0, size, size);
  const planks = 7;
  const pw = size / planks;
  for (let i = 0; i < planks; i++) {
    const tone = -14 + random() * 26;
    ctx.fillStyle = `rgb(${70 + tone},${51 + tone * 0.7},${34 + tone * 0.5})`;
    ctx.fillRect(i * pw + 2, 0, pw - 4, size);
    for (let g = 0; g < 30; g++) {
      ctx.strokeStyle = `rgba(20,13,8,${0.08 + random() * 0.16})`;
      ctx.lineWidth = 0.5 + random() * 1.5;
      const x = i * pw + random() * pw;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      for (let y = 0; y <= size; y += 22) {
        ctx.lineTo(x + Math.sin(y * 0.03 + g) * 3, y);
      }
      ctx.stroke();
    }
    ctx.fillStyle = 'rgba(12,9,6,0.65)';
    ctx.fillRect(i * pw, 0, 3, size);
    for (let n = 0; n < 3; n++) {
      ctx.fillStyle = 'rgba(28,26,24,0.9)';
      ctx.beginPath();
      ctx.arc(i * pw + pw * 0.5, 14 + random() * (size - 28), 2.3, 0, TAU);
      ctx.fill();
    }
  }
  grain(ctx, size, random, 9);
  return finish(canvas, 2);
}

export function makeMetalTexture() {
  const size = 256;
  const { canvas, ctx } = canvas2d(size);
  const random = mulberry32(7719);
  ctx.fillStyle = '#34383c';
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 900; i++) {
    const v = 35 + Math.floor(random() * 60);
    ctx.strokeStyle = `rgba(${v},${v + 3},${v + 5},${0.15 + random() * 0.35})`;
    ctx.lineWidth = 0.5 + random();
    const x = random() * size;
    const y = random() * size;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + (random() - 0.5) * 30, y + (random() - 0.5) * 4);
    ctx.stroke();
  }
  for (let i = 0; i < 26; i++) {
    const x = random() * size;
    const y = random() * size;
    const r = 3 + random() * 18;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, 'rgba(112,61,28,0.5)');
    g.addColorStop(0.65, 'rgba(86,44,20,0.25)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
  grain(ctx, size, random, 8);
  return finish(canvas, 1);
}

export function makeRustTexture() {
  const size = 256;
  const { canvas, ctx } = canvas2d(size);
  const random = mulberry32(993);
  ctx.fillStyle = '#4a2d1b';
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 420; i++) {
    const x = random() * size;
    const y = random() * size;
    const r = 2 + random() * 18;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    const tone = random() > 0.5 ? '138,74,33' : '40,32,28';
    g.addColorStop(0, `rgba(${tone},0.5)`);
    g.addColorStop(1, `rgba(${tone},0)`);
    ctx.fillStyle = g;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
  grain(ctx, size, random, 13);
  return finish(canvas, 1);
}

export function makeSkinTexture() {
  const size = 256;
  const { canvas, ctx } = canvas2d(size);
  const random = mulberry32(6712);
  ctx.fillStyle = '#6b7358';
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 260; i++) {
    const x = random() * size;
    const y = random() * size;
    const r = 2 + random() * 18;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    const tone = random() > 0.45 ? '90,79,57' : '48,58,40';
    g.addColorStop(0, `rgba(${tone},${0.16 + random() * 0.28})`);
    g.addColorStop(1, `rgba(${tone},0)`);
    ctx.fillStyle = g;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
  ctx.strokeStyle = 'rgba(46,38,55,0.35)';
  for (let i = 0; i < 22; i++) {
    let x = random() * size;
    let y = random() * size;
    ctx.lineWidth = 0.7 + random() * 1.4;
    ctx.beginPath();
    ctx.moveTo(x, y);
    for (let s = 0; s < 5; s++) {
      x += (random() - 0.5) * 26;
      y += (random() - 0.3) * 20;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  grain(ctx, size, random, 12);
  return finish(canvas, 1);
}

export function makeClothTexture(base = [92, 41, 34]) {
  const size = 256;
  const { canvas, ctx } = canvas2d(size);
  const random = mulberry32(base[0] * 31 + base[1] * 7 + base[2]);
  ctx.fillStyle = `rgb(${base[0]},${base[1]},${base[2]})`;
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 1200; i++) {
    const a = 0.04 + random() * 0.14;
    ctx.fillStyle = random() > 0.5 ? `rgba(10,8,8,${a})` : `rgba(200,190,170,${a * 0.5})`;
    ctx.fillRect(random() * size, random() * size, 1 + random() * 8, 1 + random() * 2);
  }
  ctx.strokeStyle = 'rgba(10,8,8,0.3)';
  ctx.lineWidth = 1;
  for (let i = 0; i < 20; i++) {
    let x = random() * size;
    let y = random() * size;
    ctx.beginPath();
    ctx.moveTo(x, y);
    for (let s = 0; s < 6; s++) {
      x += (random() - 0.5) * 26;
      y += (random() - 0.5) * 26;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  grain(ctx, size, random, 11);
  return finish(canvas, 1);
}

export function makeBarkTexture() {
  const size = 256;
  const { canvas, ctx } = canvas2d(size);
  const random = mulberry32(3357);
  ctx.fillStyle = '#2f2720';
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 160; i++) {
    const x = random() * size;
    ctx.strokeStyle = random() > 0.4 ? 'rgba(12,10,8,0.5)' : 'rgba(91,74,55,0.18)';
    ctx.lineWidth = 1 + random() * 4;
    ctx.beginPath();
    ctx.moveTo(x, -10);
    for (let y = 0; y < size + 10; y += 20) {
      ctx.lineTo(x + Math.sin(y * 0.05 + i) * 6, y);
    }
    ctx.stroke();
  }
  grain(ctx, size, random, 15);
  return finish(canvas, 2);
}

export function makeChainlinkTexture() {
  const size = 128;
  const { canvas, ctx } = canvas2d(size);
  ctx.clearRect(0, 0, size, size);
  ctx.strokeStyle = 'rgba(150,158,166,0.9)';
  ctx.lineWidth = 2;
  const step = 16;
  for (let i = -size; i < size * 2; i += step) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i + size, size);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(i, size);
    ctx.lineTo(i + size, 0);
    ctx.stroke();
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(5, 2);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

export function makeGlowTexture(color = '255,255,255', power = 2.2) {
  const size = 128;
  const { canvas, ctx } = canvas2d(size);
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  for (let i = 0; i <= 10; i++) {
    const t = i / 10;
    g.addColorStop(t, `rgba(${color},${Math.pow(1 - t, power)})`);
  }
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

export function makeSmokeTexture() {
  const size = 128;
  const { canvas, ctx } = canvas2d(size);
  const random = mulberry32(78);
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(170,175,180,0.55)');
  g.addColorStop(0.5, 'rgba(120,126,135,0.2)');
  g.addColorStop(1, 'rgba(80,86,95,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  ctx.globalCompositeOperation = 'destination-out';
  for (let i = 0; i < 24; i++) {
    ctx.fillStyle = `rgba(0,0,0,${0.05 + random() * 0.12})`;
    ctx.beginPath();
    ctx.arc(random() * size, random() * size, 4 + random() * 19, 0, TAU);
    ctx.fill();
  }
  return new THREE.CanvasTexture(canvas);
}

export function makeBloodTexture() {
  const size = 128;
  const { canvas, ctx } = canvas2d(size);
  const random = mulberry32(6109);
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(92,8,12,0.9)');
  g.addColorStop(0.55, 'rgba(65,5,10,0.5)');
  g.addColorStop(1, 'rgba(30,2,5,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 18; i++) {
    ctx.fillStyle = `rgba(${50 + random() * 60},0,6,${0.25 + random() * 0.4})`;
    ctx.beginPath();
    ctx.arc(size / 2 + (random() - 0.5) * 90, size / 2 + (random() - 0.5) * 90, 1 + random() * 6, 0, TAU);
    ctx.fill();
  }
  return new THREE.CanvasTexture(canvas);
}

export function makeMoonTexture() {
  const size = 256;
  const { canvas, ctx } = canvas2d(size);
  const random = mulberry32(1818);
  const g = ctx.createRadialGradient(size / 2, size / 2, 10, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,248,224,1)');
  g.addColorStop(0.36, 'rgba(238,236,213,1)');
  g.addColorStop(0.4, 'rgba(190,205,230,0.22)');
  g.addColorStop(1, 'rgba(120,150,210,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  ctx.globalCompositeOperation = 'source-atop';
  for (let i = 0; i < 40; i++) {
    ctx.fillStyle = `rgba(120,126,120,${0.05 + random() * 0.12})`;
    ctx.beginPath();
    ctx.arc(size * 0.28 + random() * size * 0.32, size * 0.28 + random() * size * 0.32, 2 + random() * 14, 0, TAU);
    ctx.fill();
  }
  return new THREE.CanvasTexture(canvas);
}
