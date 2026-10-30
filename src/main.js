import * as THREE from '../vendor/three.module.js';
import { World } from './world.js';
import { ZombieManager } from './zombie.js';
import { Player } from './player.js';
import { Hud } from './hud.js';
import { Sound } from './audio.js';
import { Controls } from './controls.js';

const canvas = document.getElementById('game');
const isMobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 760 || navigator.maxTouchPoints > 0;

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: !isMobile,
  powerPreference: 'high-performance',
  stencil: false
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.34;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x090b11, 0.0165);
scene.background = null;
renderer.setClearColor(0x07080b, 1);

const camera = new THREE.PerspectiveCamera(isMobile ? 80 : 74, window.innerWidth / window.innerHeight, 0.05, 320);
camera.rotation.order = 'YXZ';
scene.add(camera);
camera.position.set(0.5, 1.75, 11.5);

const hud = new Hud();
hud.setMobile(isMobile);
const sound = new Sound();
const controls = new Controls(canvas, {
  joystick: document.getElementById('joystick'),
  joystickKnob: document.getElementById('joystick-knob'),
  fireBtn: document.getElementById('fire-btn'),
  reloadBtn: document.getElementById('reload-btn')
});
hud.setMobile(controls.mobile);

const world = new World(renderer, scene, isMobile ? 'low' : 'high');
camera.layers.enable(1);
scene.traverse((o) => {
  if (o.isMesh || o.isPoints || o.isSprite) o.layers.enable(1);
});

let state = 'menu';
let dyingTimer = 0;
let menuTime = 0;
let player = null;

const callbacks = {
  onWave: (wave, count) => player?.onWave(wave, count),
  onWaveClear: (wave) => player?.onWaveClear(wave),
  onKill: (zombie, headshot) => player?.onKill(zombie, headshot),
  onAttack: (zombie) => player?.onAttack(zombie)
};

const zombies = new ZombieManager(scene, world, sound, callbacks);

player = new Player(camera, scene, world, sound, hud, controls, zombies, {
  onDeath: () => {
    if (state !== 'playing') return;
    state = 'dying';
    dyingTimer = 0;
    controls.setEnabled(false);
  }
});

player.weaponRoot.visible = false;
hud.showMenu();
document.getElementById('controls-hint').style.opacity = '';

const startButton = document.getElementById('start-btn');
const restartButton = document.getElementById('restart-btn');
const muteButton = document.getElementById('mute-btn');
const boot = document.getElementById('boot');

function startGame() {
  sound.init();
  hud.startGame();
  player.reset();
  player.weaponRoot.visible = true;
  controls.setEnabled(true);
  state = 'playing';
  zombies.start(player.position, camera.getWorldDirection(new THREE.Vector3()));
  hud.setWave(1);
  hud.setScore(0);
  hud.setKills(0);
  hud.setAmmo(player.ammo, player.reserve, false);
  hud.setHealth(100);
  hud.setCrosshair(0);
  menuTime = 0;
}

function restartGame() {
  sound.init();
  hud.hideGameOver();
  hud.startGame();
  player.reset();
  player.weaponRoot.visible = true;
  controls.setEnabled(true);
  state = 'playing';
  zombies.start(player.position, camera.getWorldDirection(new THREE.Vector3()));
  hud.setWave(1);
  hud.setScore(0);
  hud.setKills(0);
  hud.setAmmo(player.ammo, player.reserve, false);
  hud.setHealth(100);
  hud.setCrosshair(0);
}

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);

muteButton.addEventListener('click', () => {
  sound.init();
  const muted = sound.toggleMute();
  muteButton.classList.toggle('muted', muted);
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && state === 'menu') startGame();
  if (e.key.toLowerCase() === 'm' && e.target.tagName !== 'INPUT') {
    sound.init();
    const muted = sound.toggleMute();
    muteButton.classList.toggle('muted', muted);
  }
});

window.addEventListener('resize', () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
});

window.addEventListener('orientationchange', () => {
  setTimeout(() => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }, 150);
});

function updateMenu(dt, elapsed) {
  menuTime += dt;
  const t = menuTime;
  camera.position.x = Math.sin(t * 0.11) * 1.4;
  camera.position.y = 1.74 + Math.sin(t * 0.37) * 0.028;
  camera.position.z = 11.6 + Math.cos(t * 0.08) * 0.9;
  camera.rotation.y = Math.sin(t * 0.09) * 0.1;
  camera.rotation.x = -0.025 + Math.sin(t * 0.21) * 0.008;
  camera.rotation.z = 0;
  player.weaponRoot.visible = false;
  world.update(dt, elapsed, camera, player.position);
}

function animate() {
  requestAnimationFrame(animate);
  timer.update();
  const dt = Math.min(timer.getDelta(), 0.05);
  const elapsed = timer.getElapsed();

  if (state === 'menu') {
    updateMenu(dt, elapsed);
  } else if (state === 'playing') {
    controls.update();
    player.update(dt, elapsed, 'playing');
    zombies.update(dt, elapsed, player.position, camera, true);
    world.update(dt, elapsed, camera, player.position);
    hud.update(dt);
  } else if (state === 'dying') {
    dyingTimer += dt;
    player.update(dt, elapsed, 'dead');
    zombies.update(dt, elapsed, player.position, camera, false);
    world.update(dt, elapsed, camera, player.position);
    hud.update(dt);
    if (dyingTimer > 1.65) {
      state = 'gameover';
      player.weaponRoot.visible = false;
      if (document.pointerLockElement) document.exitPointerLock?.();
      hud.showGameOver({
        wave: zombies.wave,
        kills: player.kills,
        score: player.score
      });
    }
  } else if (state === 'gameover') {
    player.update(dt, elapsed, 'dead');
    world.update(dt, elapsed, camera, player.position);
    hud.update(dt);
  }

  renderWorld();
}

renderer.autoClear = false;
function renderWorld() {
  renderer.clear();
  camera.layers.set(0);
  camera.layers.enable(1);
  renderer.render(scene, camera);
  renderer.clearDepth();
  camera.layers.set(2);
  renderer.render(scene, camera);
}

const timer = new THREE.Timer();
animate();

renderer.compile(scene, camera);
requestAnimationFrame(() => {
  boot.classList.add('ready');
  boot.style.pointerEvents = 'none';
});

window.__deadSignal = {
  get state() { return state; },
  get player() { return player; },
  get zombies() { return zombies; },
  get world() { return world; },
  get renderer() { return renderer; },
  get camera() { return camera; },
  startGame,
  restartGame
};

window.addEventListener('error', (event) => {
  console.error('Dead Signal error:', event.message);
});
