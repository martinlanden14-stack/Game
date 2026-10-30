import * as THREE from 'three';
import './style.css';
import { createWorld } from './world.js';
import { Skater } from './skater.js';
import { Game } from './game.js';
import { UI } from './ui.js';
import { Input } from './input.js';
import { Sound } from './audio.js';
import { EVENTS } from './events.js';

const canvas = document.getElementById('scene');
const mobile = matchMedia('(pointer: coarse)').matches || innerWidth <= 900;

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: false,
  stencil: false,
  powerPreference: 'high-performance',
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.6 : 2));
renderer.setSize(window.innerWidth, window.innerHeight, false);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.08;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(window.innerWidth / window.innerHeight < 0.85 ? 68 : 60, window.innerWidth / window.innerHeight, 0.1, 320);
camera.position.set(-12, 8, 16);

const world = createWorld(scene, renderer, { mobile });
const skater = new Skater();
scene.add(skater.root);

const ui = new UI();
const sound = new Sound();
const input = new Input();

const game = new Game({ world, skater, sound, ui, camera, renderer, mobile });
game.input = input;
game.baseFov = camera.fov;
ui.setSound(sound.muted);

// Debug handle for tooling and curious players.
window.__GRIND_CITY__ = { game, world, skater, scene, camera, renderer, ui, sound };

/* ---------------------------------------------------------------- Menu actions */
const bind = (id, fn) => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('click', (e) => {
    e.preventDefault();
    sound.init();
    fn();
  });
};

bind('btn-career', () => {
  sound.ui();
  game.startCareer();
});
bind('btn-free', () => {
  sound.ui();
  game.start('free');
});
bind('btn-events', () => {
  sound.ui();
  ui.showEvents(game.progress);
});
bind('events-back', () => {
  sound.ui();
  ui.hidePanel();
  ui.showMenu();
});
bind('pause-btn', () => game.pause());
bind('pause-resume', () => game.resume());
bind('pause-restart', () => {
  sound.ui();
  game.retry();
});
bind('pause-quit', () => {
  sound.ui();
  game.toMenu();
});
bind('result-next', () => {
  sound.ui();
  game.startNext();
});
bind('result-retry', () => {
  sound.ui();
  game.retry();
});
bind('result-menu', () => {
  sound.ui();
  game.toMenu();
});
bind('sound-toggle', () => {
  sound.init();
  const muted = sound.toggle();
  ui.setSound(muted);
  if (!muted) sound.ui();
});

document.getElementById('event-grid')?.addEventListener('click', (e) => {
  const card = e.target.closest('.event-card');
  if (!card) return;
  if (card.dataset.locked === 'true') {
    sound.ui();
    ui.toast('CLEAR THE PREVIOUS EVENT TO UNLOCK', 1800);
    return;
  }
  sound.init();
  sound.ui();
  ui.hidePanel();
  game.start(Number(card.dataset.id));
});

// Any first interaction unlocks audio.
const unlockAudio = () => {
  sound.init();
  window.removeEventListener('pointerdown', unlockAudio);
  window.removeEventListener('keydown', unlockAudio);
};
window.addEventListener('pointerdown', unlockAudio, { once: true });
window.addEventListener('keydown', unlockAudio, { once: true });

/* ---------------------------------------------------------------- Keyboard */
window.addEventListener('keydown', (e) => {
  if (e.repeat) return;
  const typing = /^(INPUT|TEXTAREA)$/.test(document.activeElement?.tagName || '');

  if (e.code === 'Escape' || e.code === 'KeyP') {
    if (game.phase === 'paused') game.resume();
    else if (game.phase === 'playing' || game.phase === 'goal' || game.phase === 'countdown') game.pause();
    else if (!document.getElementById('events').classList.contains('is-hidden')) {
      ui.hidePanel();
      ui.showMenu();
    }
  }

  if (e.code === 'Enter' && !typing) {
    if (game.phase === 'menu') {
      const eventsOpen = !document.getElementById('events').classList.contains('is-hidden');
      if (!eventsOpen) {
        sound.init();
        game.startCareer();
      }
    } else if (game.phase === 'results') {
      sound.ui();
      if (!ui.el.resultNext.classList.contains('is-hidden')) game.startNext();
      else game.retry();
    }
  }

  if (e.code === 'KeyM' && !typing) {
    sound.init();
    ui.setSound(sound.toggle());
  }
});

/* ---------------------------------------------------------------- Resize */
function resize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const portrait = w / h < 0.85;
  camera.aspect = w / h;
  camera.fov = portrait ? 68 : 60;
  camera.updateProjectionMatrix();
  game.baseFov = camera.fov;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.6 : 2));
  renderer.setSize(w, h, false);
}
window.addEventListener('resize', resize);
window.visualViewport?.addEventListener('resize', resize);

/* ---------------------------------------------------------------- Visibility */
document.addEventListener('visibilitychange', () => {
  if (document.hidden && ['playing', 'goal', 'countdown'].includes(game.phase)) game.pause();
});

/* ---------------------------------------------------------------- Boot */
const clock = new THREE.Clock();
let booted = false;

function frame() {
  const dt = Math.min(clock.getDelta(), 0.05);
  input.update();
  game.update(dt);
  renderer.render(scene, camera);
  if (!booted) {
    booted = true;
    requestAnimationFrame(() => {
      document.fonts.ready.then(() => ui.loadingDone());
      if (!document.fonts || document.fonts.status === 'loaded') ui.loadingDone();
    });
  }
  requestAnimationFrame(frame);
}

// Initial render and menu composition.
game.update(0.016);
renderer.render(scene, camera);
requestAnimationFrame(frame);

// Optional deep link for capture / testing: ?play=free or ?play=3 or ?play=career
const params = new URLSearchParams(location.search);
const play = params.get('play');
if (play) {
  setTimeout(() => {
    if (play === 'free') game.start('free');
    else if (play === 'career') game.startCareer();
    else if (!Number.isNaN(Number(play))) game.start(Number(play));
  }, 300);
}

// Expose helpful event list for tools.
window.__GRIND_CITY__.events = EVENTS;
