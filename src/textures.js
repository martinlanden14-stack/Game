import * as THREE from 'three';

const PALETTE = ['#ff6a2b', '#ffd23f', '#37f0cf', '#ff4f9a', '#4f8cff', '#f6f1e5'];

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return c;
}

function tex(c, { repeat = [1, 1], srgb = true, aniso = 8 } = {}) {
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat[0], repeat[1]);
  t.anisotropy = aniso;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.needsUpdate = true;
  return t;
}

function rand(a, b) { return a + Math.random() * (b - a); }

function speckle(ctx, w, h, count, alpha = 0.08, size = 2) {
  for (let i = 0; i < count; i++) {
    const v = Math.random() > 0.5 ? 255 : 0;
    ctx.fillStyle = `rgba(${v},${v},${v},${Math.random() * alpha})`;
    const s = Math.random() * size + 0.5;
    ctx.fillRect(Math.random() * w, Math.random() * h, s, s);
  }
}

export function concreteTexture(size = 1024, ground = true) {
  const c = canvas(size, size);
  const x = c.getContext('2d');
  const s = size;

  const g = x.createLinearGradient(0, 0, s, s);
  g.addColorStop(0, '#98938a');
  g.addColorStop(0.45, '#ada69b');
  g.addColorStop(1, '#8a857c');
  x.fillStyle = g;
  x.fillRect(0, 0, s, s);

  // Large soft stains.
  for (let i = 0; i < 26; i++) {
    const r = rand(s * 0.03, s * 0.2);
    const rg = x.createRadialGradient(rand(0, s), rand(0, s), 0, rand(0, s), rand(0, s), r);
    rg.addColorStop(0, `rgba(74,68,62,${rand(0.025, 0.075)})`);
    rg.addColorStop(1, 'rgba(74,68,62,0)');
    x.fillStyle = rg;
    x.fillRect(0, 0, s, s);
  }

  speckle(x, s, s, 14000, 0.11, 2.5);
  speckle(x, s, s, 5000, 0.16, 5);

  // Aggregate flecks.
  for (let i = 0; i < 900; i++) {
    x.fillStyle = `rgba(72,68,62,${rand(0.08, 0.24)})`;
    const r = rand(0.6, 2.2);
    x.beginPath();
    x.arc(Math.random() * s, Math.random() * s, r, 0, 7);
    x.fill();
  }

  if (ground) {
    // Concrete expansion joints.
    x.strokeStyle = 'rgba(63,60,54,0.34)';
    x.lineWidth = Math.max(1, s / 520);
    const cells = 4;
    for (let i = 1; i < cells; i++) {
      x.beginPath();
      x.moveTo((s / cells) * i, 0);
      x.lineTo((s / cells) * i, s);
      x.stroke();
      x.beginPath();
      x.moveTo(0, (s / cells) * i);
      x.lineTo(s, (s / cells) * i);
      x.stroke();
    }

    // Big faded centre circle.
    x.save();
    x.translate(s / 2, s / 2);
    x.strokeStyle = 'rgba(246,241,229,0.28)';
    x.lineWidth = s * 0.007;
    x.beginPath();
    x.arc(0, 0, s * 0.205, 0, Math.PI * 2);
    x.stroke();
    x.strokeStyle = 'rgba(255,210,63,0.19)';
    x.lineWidth = s * 0.003;
    x.beginPath();
    x.arc(0, 0, s * 0.23, 0, Math.PI * 2);
    x.stroke();
    x.restore();

    // Directional painted arrows and lines.
    x.save();
    x.translate(s * 0.5, s * 0.77);
    x.rotate(-0.12);
    x.fillStyle = 'rgba(255,210,63,0.36)';
    for (let i = 0; i < 3; i++) {
      x.beginPath();
      x.moveTo(i * 26 - 26, 0);
      x.lineTo(i * 26 - 12, -18);
      x.lineTo(i * 26 - 12, -7);
      x.lineTo(i * 26 + 2, -7);
      x.lineTo(i * 26 + 2, 7);
      x.lineTo(i * 26 - 12, 7);
      x.lineTo(i * 26 - 12, 18);
      x.closePath();
      x.fill();
    }
    x.restore();

    // Stencilled park name.
    x.save();
    x.translate(s * 0.5, s * 0.14);
    x.rotate(-0.02);
    x.font = `900 ${s * 0.032}px Arial`;
    x.textAlign = 'center';
    x.fillStyle = 'rgba(244,239,228,0.34)';
    x.letterSpacing = `${s * 0.008}px`;
    x.fillText('GRIND CITY', 0, 0);
    x.font = `700 ${s * 0.0085}px Arial`;
    x.fillStyle = 'rgba(244,239,228,0.24)';
    x.fillText('SKATE PARK  ·  EST. 2026', 0, s * 0.026);
    x.restore();

    // Scuffs / skate lines.
    x.save();
    x.globalAlpha = 0.16;
    x.strokeStyle = '#3f3b35';
    for (let i = 0; i < 34; i++) {
      x.lineWidth = rand(0.4, 2);
      x.beginPath();
      const sx = rand(0, s);
      const sy = rand(0, s);
      x.moveTo(sx, sy);
      x.bezierCurveTo(sx + rand(-40, 40), sy + rand(-40, 40), sx + rand(-80, 80), sy + rand(-80, 80), sx + rand(-160, 160), sy + rand(-160, 160));
      x.stroke();
    }
    x.restore();

    // Cracks.
    x.strokeStyle = 'rgba(43,40,35,0.4)';
    for (let i = 0; i < 18; i++) {
      let px = rand(0, s);
      let py = rand(0, s);
      x.lineWidth = rand(0.4, 1.5);
      x.beginPath();
      x.moveTo(px, py);
      const seg = 4 + (Math.random() * 6) | 0;
      for (let j = 0; j < seg; j++) {
        px += rand(-24, 24);
        py += rand(-24, 24);
        x.lineTo(px, py);
      }
      x.stroke();
    }

    // Big painted logo at the heart of the park.
    x.save();
    x.translate(s * 0.5, s * 0.52);
    x.rotate(-0.02);
    x.font = `900 ${s * 0.15}px Arial`;
    x.textAlign = 'center';
    x.lineJoin = 'round';
    x.lineWidth = s * 0.012;
    x.strokeStyle = 'rgba(20,17,14,0.22)';
    x.strokeText('GC', 0, 0);
    x.fillStyle = 'rgba(255,210,63,0.13)';
    x.fillText('GC', 0, 0);
    x.restore();

    // Painted flow lanes.
    x.save();
    x.globalAlpha = 0.32;
    x.fillStyle = '#37b7a2';
    x.fillRect(s * 0.43, s * 0.04, s * 0.012, s * 0.2);
    x.fillStyle = '#ff6a2b';
    x.fillRect(s * 0.555, s * 0.04, s * 0.012, s * 0.2);
    x.restore();

    // Hazard chevrons near the front lip.
    x.save();
    x.globalAlpha = 0.26;
    x.translate(s * 0.5, s * 0.84);
    for (let i = -2; i <= 2; i++) {
      x.save();
      x.translate(i * s * 0.05, 0);
      x.rotate(0.5);
      x.fillStyle = i % 2 ? '#ffd23f' : '#1b1a17';
      x.fillRect(-s * 0.012, -s * 0.045, s * 0.024, s * 0.09);
      x.restore();
    }
    x.restore();

    // A few faded paint splats.
    for (let i = 0; i < 8; i++) {
      x.fillStyle = PALETTE[(Math.random() * PALETTE.length) | 0] + '1a';
      x.beginPath();
      x.arc(rand(0, s), rand(0, s), rand(2, 11), 0, 7);
      x.fill();
    }
  }

  return tex(c, { repeat: [1, 1] });
}

export function asphaltTexture(size = 512) {
  const c = canvas(size, size);
  const x = c.getContext('2d');
  x.fillStyle = '#34343a';
  x.fillRect(0, 0, size, size);
  for (let i = 0; i < 8000; i++) {
    const v = 25 + Math.random() * 70;
    x.fillStyle = `rgba(${v},${v},${v + 4},${Math.random() * 0.35})`;
    x.fillRect(Math.random() * size, Math.random() * size, rand(0.5, 2.4), rand(0.5, 2.4));
  }
  for (let i = 0; i < 18; i++) {
    x.strokeStyle = `rgba(12,12,15,${rand(0.2, 0.55)})`;
    x.lineWidth = rand(0.5, 2);
    x.beginPath();
    let px = rand(0, size);
    let py = rand(0, size);
    x.moveTo(px, py);
    for (let j = 0; j < 6; j++) {
      px += rand(-20, 20); py += rand(-20, 20); x.lineTo(px, py);
    }
    x.stroke();
  }
  return tex(c, { repeat: [18, 18] });
}

export function graffitiTexture(w = 1024, h = 512, seed = 1) {
  const c = canvas(w, h);
  const x = c.getContext('2d');
  const g = x.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, '#6a625b');
  g.addColorStop(1, '#4b4743');
  x.fillStyle = g;
  x.fillRect(0, 0, w, h);

  // Brick / panel texture.
  for (let y = 0; y < h; y += 22) {
    for (let bx = 0; bx < w; bx += 58) {
      x.fillStyle = `rgba(255,255,255,${Math.random() * 0.025})`;
      x.fillRect(bx + ((y / 22) % 2 ? 29 : 0), y, 56, 20);
      x.strokeStyle = 'rgba(28,26,24,0.18)';
      x.lineWidth = 1;
      x.strokeRect(bx + ((y / 22) % 2 ? 29 : 0), y, 56, 20);
    }
  }
  speckle(x, w, h, 8000, 0.14, 4);

  // Big backdrop colour blocks.
  for (let i = 0; i < 5; i++) {
    x.save();
    x.translate(rand(0, w), rand(0, h));
    x.rotate(rand(-0.25, 0.25));
    x.fillStyle = PALETTE[(Math.random() * PALETTE.length) | 0] + '22';
    x.fillRect(-w * 0.2, -h * 0.2, w * 0.4, h * 0.4);
    x.restore();
  }

  const words = seed % 2 ? ['GRIND', 'CITY', 'SK8', 'NO RULES', 'RIDE', 'CONCRETE', 'FLIP', 'GC'] : ['SEND IT', 'STREET', 'OLLIE', 'FULL SEND', 'BOWL', 'GC', 'SHRED', 'PARK'];
  words.forEach((word, i) => {
    x.save();
    x.translate(rand(w * 0.08, w * 0.92), rand(h * 0.2, h * 0.85));
    x.rotate(rand(-0.18, 0.18));
    x.font = `900 ${rand(h * 0.09, h * 0.24)}px Arial`;
    x.textAlign = 'center';
    const col = PALETTE[(Math.random() * PALETTE.length) | 0];
    x.lineJoin = 'round';
    x.lineWidth = rand(7, 14);
    x.strokeStyle = 'rgba(15,13,12,0.55)';
    x.strokeText(word, 0, 0);
    x.fillStyle = col;
    x.fillText(word, 0, 0);
    x.globalAlpha = 0.35;
    x.fillStyle = '#ffffff';
    x.fillText(word, -rand(1, 3), -rand(1, 3));
    x.globalAlpha = 1;
    x.restore();
  });

  // Arcs, drips and stars.
  for (let i = 0; i < 14; i++) {
    x.strokeStyle = PALETTE[(Math.random() * PALETTE.length) | 0] + 'aa';
    x.lineWidth = rand(2, 7);
    x.beginPath();
    const cx = rand(0, w);
    const cy = rand(0, h);
    x.arc(cx, cy, rand(8, 44), rand(0, 3), rand(3.4, 6.6));
    x.stroke();
  }
  for (let i = 0; i < 28; i++) {
    x.fillStyle = `rgba(14,12,11,${rand(0.2, 0.55)})`;
    x.fillRect(rand(0, w), rand(0, h), rand(1, 2.5), rand(10, 60));
  }
  return tex(c);
}

export function buildingTexture(variant = 0) {
  const w = 512, h = 1024;
  const c = canvas(w, h);
  const x = c.getContext('2d');
  const bases = ['#59606b', '#4e525c', '#6a635e', '#454a55'];
  x.fillStyle = bases[variant % bases.length];
  x.fillRect(0, 0, w, h);
  speckle(x, w, h, 5000, 0.1, 3);

  const cols = 7;
  const rows = 16;
  const mx = 22, my = 22;
  const cw = (w - mx * 2) / cols;
  const ch = (h - my * 2) / rows;

  for (let r = 0; r < rows; r++) {
    for (let col = 0; col < cols; col++) {
      const lit = Math.random();
      const px = mx + col * cw + 5;
      const py = my + r * ch + 7;
      const ww = cw - 10;
      const wh = ch - 15;
      if (lit > 0.86) {
        const warm = Math.random() > 0.35;
        x.fillStyle = warm ? `rgba(255,196,112,${rand(0.5, 0.95)})` : `rgba(148,214,255,${rand(0.3, 0.75)})`;
      } else {
        x.fillStyle = `rgba(16,20,28,${rand(0.55, 0.92)})`;
      }
      x.fillRect(px, py, ww, wh);
      x.strokeStyle = 'rgba(12,14,18,0.5)';
      x.lineWidth = 2;
      x.strokeRect(px, py, ww, wh);
      x.fillStyle = 'rgba(255,255,255,0.08)';
      x.fillRect(px, py, ww, 2);
      if (Math.random() > 0.55) {
        x.fillStyle = 'rgba(8,10,14,0.5)';
        x.fillRect(px, py + wh * 0.52, ww, 2);
      }
    }
    x.fillStyle = 'rgba(18,20,25,0.2)';
    x.fillRect(0, my + r * ch + ch - 7, w, 3);
  }
  // Vertical grime.
  for (let i = 0; i < 24; i++) {
    const gx = rand(0, w);
    const gr = x.createLinearGradient(gx, 0, gx, h);
    gr.addColorStop(0, 'rgba(10,12,16,0)');
    gr.addColorStop(1, `rgba(10,12,16,${rand(0.08, 0.28)})`);
    x.fillStyle = gr;
    x.fillRect(gx, rand(0, h * 0.4), rand(3, 20), h);
  }
  return tex(c, { repeat: [1, 1] });
}

export function deckTexture() {
  const w = 256, h = 768;
  const c = canvas(w, h);
  const x = c.getContext('2d');
  const g = x.createLinearGradient(0, 0, w, h);
  g.addColorStop(0, '#11141b');
  g.addColorStop(0.5, '#1b202b');
  g.addColorStop(1, '#0b0e14');
  x.fillStyle = g;
  x.fillRect(0, 0, w, h);

  // Warm sunset stripes.
  const cols = ['#ff6a2b', '#ff9d3b', '#ffd23f', '#ff4f9a'];
  for (let i = 0; i < 5; i++) {
    x.save();
    x.translate(0, h * 0.22 + i * h * 0.11);
    x.fillStyle = cols[i % cols.length];
    x.beginPath();
    x.moveTo(0, 0);
    x.lineTo(w, -h * 0.055);
    x.lineTo(w, h * 0.04);
    x.lineTo(0, h * 0.095);
    x.closePath();
    x.fill();
    x.restore();
  }

  // Big GC mark.
  x.save();
  x.translate(w / 2, h * 0.55);
  x.font = '900 132px Arial';
  x.textAlign = 'center';
  x.fillStyle = 'rgba(8,10,14,0.9)';
  x.fillText('GC', 2, 2);
  x.fillStyle = '#f6f1e5';
  x.fillText('GC', 0, 0);
  x.font = '700 21px Arial';
  x.fillStyle = '#ffd23f';
  x.letterSpacing = '6px';
  x.fillText('GRIND CITY', 0, 44);
  x.restore();

  x.fillStyle = '#ffd23f';
  x.fillRect(w * 0.14, h * 0.08, w * 0.72, 4);
  x.fillRect(w * 0.14, h * 0.9, w * 0.72, 4);

  speckle(x, w, h, 2400, 0.12, 2);
  return tex(c);
}

export function gripTexture() {
  const s = 256;
  const c = canvas(s, s);
  const x = c.getContext('2d');
  x.fillStyle = '#17181a';
  x.fillRect(0, 0, s, s);
  speckle(x, s, s, 12000, 0.32, 1.5);
  x.fillStyle = 'rgba(255,255,255,0.08)';
  x.font = '700 13px Arial';
  x.textAlign = 'center';
  x.fillText('GRIP', s / 2, s / 2);
  return tex(c);
}

export function letterTexture(letter) {
  const s = 256;
  const c = canvas(s, s);
  const x = c.getContext('2d');
  x.translate(s / 2, s / 2);
  const rg = x.createRadialGradient(0, 0, 20, 0, 0, 122);
  rg.addColorStop(0, 'rgba(255,210,63,0.32)');
  rg.addColorStop(1, 'rgba(255,210,63,0)');
  x.fillStyle = rg;
  x.beginPath();
  x.arc(0, 0, 122, 0, Math.PI * 2);
  x.fill();

  x.beginPath();
  x.arc(0, 0, 86, 0, Math.PI * 2);
  x.fillStyle = 'rgba(9,14,21,0.84)';
  x.fill();
  x.lineWidth = 5;
  x.strokeStyle = '#ffd23f';
  x.stroke();

  x.beginPath();
  x.arc(0, 0, 76, 0, Math.PI * 2);
  x.lineWidth = 1.5;
  x.strokeStyle = 'rgba(255,240,190,0.55)';
  x.stroke();

  x.font = '900 112px Arial';
  x.textAlign = 'center';
  x.textBaseline = 'middle';
  x.fillStyle = '#fff4cf';
  x.shadowColor = '#ffb02e';
  x.shadowBlur = 22;
  x.fillText(letter, 0, 6);
  return tex(c, { aniso: 4 });
}

export function skyTexture() {
  const w = 1024, h = 512;
  const c = canvas(w, h);
  const x = c.getContext('2d');
  const g = x.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, '#0a1430');
  g.addColorStop(0.32, '#23345a');
  g.addColorStop(0.5, '#6b5570');
  g.addColorStop(0.63, '#d27b60');
  g.addColorStop(0.72, '#ffc27f');
  g.addColorStop(0.78, '#ffd9a3');
  g.addColorStop(0.84, '#b48678');
  g.addColorStop(1, '#343442');
  x.fillStyle = g;
  x.fillRect(0, 0, w, h);

  // Soft bands of cloud.
  for (let i = 0; i < 40; i++) {
    const y = rand(h * 0.36, h * 0.78);
    const gr = x.createRadialGradient(rand(0, w), y, 0, rand(0, w), y, rand(40, 190));
    gr.addColorStop(0, `rgba(255,228,206,${rand(0.03, 0.12)})`);
    gr.addColorStop(1, 'rgba(255,228,206,0)');
    x.fillStyle = gr;
    x.fillRect(0, 0, w, h);
  }
  return tex(c);
}

export function signTexture() {
  const w = 1024, h = 512;
  const c = canvas(w, h);
  const x = c.getContext('2d');
  x.fillStyle = '#0a0d12';
  x.fillRect(0, 0, w, h);
  const rg = x.createLinearGradient(0, 0, w, h);
  rg.addColorStop(0, '#ff6a2b');
  rg.addColorStop(0.5, '#ffd23f');
  rg.addColorStop(1, '#ff4f9a');
  x.fillStyle = rg;
  x.fillRect(20, 20, w - 40, h - 40);
  x.fillStyle = '#0a0d12';
  x.fillRect(34, 34, w - 68, h - 68);
  x.font = '900 152px Arial';
  x.textAlign = 'center';
  x.fillStyle = '#ffd23f';
  x.shadowColor = '#ff6a2b';
  x.shadowBlur = 35;
  x.fillText('GRIND', w / 2, 230);
  x.fillStyle = '#37f0cf';
  x.shadowColor = '#37f0cf';
  x.fillText('CITY', w / 2, 390);
  x.shadowBlur = 0;
  x.font = '700 28px Arial';
  x.fillStyle = '#f6f1e5';
  x.letterSpacing = '18px';
  x.fillText('SKATE · CREATE · REPEAT', w / 2, 466);
  return tex(c);
}

export function sparkleTexture() {
  const s = 128;
  const c = canvas(s, s);
  const x = c.getContext('2d');
  const g = x.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  g.addColorStop(0, 'rgba(255,245,210,1)');
  g.addColorStop(0.18, 'rgba(255,210,63,0.9)');
  g.addColorStop(0.55, 'rgba(255,106,43,0.24)');
  g.addColorStop(1, 'rgba(255,106,43,0)');
  x.fillStyle = g;
  x.fillRect(0, 0, s, s);
  return tex(c);
}
