export const audio = {
  ctx: null,
  master: null,
  noise: null,
  muted: false,
  started: false
};

export function initAudio() {
  if (audio.ctx) {
    if (audio.ctx.state === 'suspended') audio.ctx.resume();
    return;
  }
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    audio.ctx = new AC();
    audio.master = audio.ctx.createGain();
    audio.master.gain.value = 0.28;
    audio.master.connect(audio.ctx.destination);
    const length = Math.floor(audio.ctx.sampleRate * 0.7);
    audio.noise = audio.ctx.createBuffer(1, length, audio.ctx.sampleRate);
    const data = audio.noise.getChannelData(0);
    for (let i = 0; i < length; i += 1) data[i] = Math.random() * 2 - 1;
    audio.started = true;
    if (audio.ctx.state === 'suspended') audio.ctx.resume();
  } catch (error) {
    audio.ctx = null;
  }
}

function tone(freq, duration, type, volume, slide) {
  if (!audio.ctx || audio.muted || audio.ctx.state !== 'running') return;
  const now = audio.ctx.currentTime;
  const osc = audio.ctx.createOscillator();
  const gain = audio.ctx.createGain();
  osc.type = type || 'square';
  osc.frequency.setValueAtTime(Math.max(20, freq), now);
  if (slide) osc.frequency.exponentialRampToValueAtTime(Math.max(20, freq + slide), now + duration);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(volume || 0.08, now + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  osc.connect(gain);
  gain.connect(audio.master);
  osc.start(now);
  osc.stop(now + duration + 0.02);
}

function noiseBurst(duration, volume, frequency, q, slide) {
  if (!audio.ctx || audio.muted || !audio.noise || audio.ctx.state !== 'running') return;
  const now = audio.ctx.currentTime;
  const source = audio.ctx.createBufferSource();
  const filter = audio.ctx.createBiquadFilter();
  const gain = audio.ctx.createGain();
  source.buffer = audio.noise;
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(frequency, now);
  if (slide) filter.frequency.exponentialRampToValueAtTime(Math.max(80, frequency + slide), now + duration);
  filter.Q.value = q || 1;
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(volume || 0.08, now + 0.008);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  source.connect(filter);
  filter.connect(gain);
  gain.connect(audio.master);
  source.start(now);
  source.stop(now + duration + 0.03);
}

export function sfx(name) {
  if (!audio.ctx || audio.muted || audio.ctx.state !== 'running') return;
  if (name === 'slash') {
    noiseBurst(0.09, 0.09, 1900, 1.3, -1100);
    tone(210, 0.07, 'sawtooth', 0.025, -90);
  } else if (name === 'hit') {
    noiseBurst(0.1, 0.1, 420, 0.8, -230);
    tone(92, 0.1, 'square', 0.07, -34);
  } else if (name === 'rip') {
    noiseBurst(0.16, 0.12, 880, 0.7, -640);
    tone(140, 0.1, 'sawtooth', 0.05, -80);
  } else if (name === 'kill') {
    noiseBurst(0.22, 0.13, 300, 0.6, -170);
    tone(70, 0.2, 'sawtooth', 0.08, -36);
    tone(118, 0.12, 'square', 0.03, -60);
  } else if (name === 'eat') {
    noiseBurst(0.075, 0.13, 350, 1.8, 260);
    tone(58, 0.06, 'square', 0.045, -18);
  } else if (name === 'hurt') {
    tone(82, 0.2, 'square', 0.1, -45);
    noiseBurst(0.15, 0.08, 260, 0.5, -120);
  } else if (name === 'dash') {
    noiseBurst(0.14, 0.08, 950, 0.9, 800);
  } else if (name === 'level') {
    [196, 261, 329, 392, 523].forEach(function (f, i) {
      window.setTimeout(function () { tone(f, 0.18, 'square', 0.045, 0); }, i * 70);
    });
    noiseBurst(0.35, 0.05, 1200, 0.6, 400);
  } else if (name === 'roar') {
    tone(74, 0.55, 'sawtooth', 0.11, -36);
    tone(51, 0.6, 'square', 0.07, -18);
    noiseBurst(0.5, 0.08, 190, 0.45, -100);
  } else if (name === 'frenzy') {
    tone(110, 0.5, 'sawtooth', 0.1, 150);
    noiseBurst(0.4, 0.1, 500, 0.5, 700);
  } else if (name === 'arrow') {
    noiseBurst(0.1, 0.04, 1700, 2, -800);
    tone(680, 0.05, 'triangle', 0.025, -400);
  } else if (name === 'wave') {
    tone(98, 0.35, 'triangle', 0.05, 20);
    tone(147, 0.45, 'sine', 0.035, -30);
  } else if (name === 'bless') {
    noiseBurst(0.2, 0.035, 900, 2, 300);
    tone(440, 0.16, 'sine', 0.025, 180);
  }
}

export function setMuted(value) {
  audio.muted = value;
  if (audio.master) {
    audio.master.gain.setTargetAtTime(value ? 0 : 0.28, audio.ctx.currentTime, 0.02);
  }
}
