import {
  game, ui, stage, canvas, camera, VIEW, WORLD, TAU, keyState, pointer, touchMove,
  clamp
} from './core.js';
import { audio, initAudio, setMuted } from './audio.js';
import {
  setupAttract, startGame, updateCamera, updateAmbient, updateWaves, torches
} from './world.js';
import {
  updatePlayer, updateEnemy, updateProjectiles, tryDash
} from './entities.js';
import { updateParticles, updateGibs } from './fx.js';
import { buildBackground, render, resizeCanvas } from './render.js';
import { updateUI } from './ui.js';

let canvasDrag = false;

function resize() {
  const width = Math.max(1, window.innerWidth);
  const height = Math.max(1, window.innerHeight);
  let scale = clamp(width / 640, 1.2, 3);
  if (height / scale > WORLD.h - 40) scale = height / (WORLD.h - 40);
  const vw = Math.max(280, Math.round(width / scale));
  const vh = Math.max(220, Math.round(height / scale));
  resizeCanvas(vw, vh);
  updateCamera(0, true);
}

function moveInput() {
  let mx = 0;
  let my = 0;
  if (keyState['a'] || keyState['arrowleft']) mx -= 1;
  if (keyState['d'] || keyState['arrowright']) mx += 1;
  if (keyState['w'] || keyState['arrowup']) my -= 1;
  if (keyState['s'] || keyState['arrowdown']) my += 1;
  if (touchMove.active) {
    mx += touchMove.x;
    my += touchMove.y;
  }
  return { x: clamp(mx, -1, 1), y: clamp(my, -1, 1) };
}

function buildInput() {
  const move = moveInput();
  return {
    moveX: move.x,
    moveY: move.y,
    attack: pointer.down || !!keyState[' '] || !!keyState['j'] || !!keyState['attacktouch'],
    devour: !!keyState['e'] || !!keyState['eattouch']
  };
}

function update(dt) {
  game.time += dt;
  game.loopTime += dt;
  game.shake = Math.max(0, game.shake - dt * 20);
  game.damageVignette = Math.max(0, game.damageVignette - dt * 2.2);
  game.flash = Math.max(0, game.flash - dt * 3.4);
  game.promptPulse += dt;

  if (game.bannerTimer > 0) {
    game.bannerTimer -= dt;
    if (game.bannerTimer <= 0) ui.banner.classList.remove('show');
  }
  if (game.comboTimer > 0) {
    game.comboTimer -= dt;
    if (game.comboTimer <= 0) game.comboHits = 0;
  }

  updateAmbient(dt);
  updateParticles(dt);

  if (game.state === 'playing') {
    if (game.hitstop > 0) {
      game.hitstop = Math.max(0, game.hitstop - dt);
    } else {
      updatePlayer(dt, buildInput());
      for (let i = 0; i < game.enemies.length; i += 1) updateEnemy(game.enemies[i], dt);
      updateProjectiles(dt);
      updateGibs(dt);
      updateWaves(dt);
    }
    game.enemies = game.enemies.filter(function (enemy) { return !enemy.dead; });
    updateCamera(dt, false);
  } else if (game.state === 'dead') {
    updateGibs(dt);
    game.enemies = game.enemies.filter(function (enemy) { return !enemy.dead; });
    updateCamera(dt, false);
  } else {
    updateGibs(dt);
    updateCamera(dt, false);
  }

  updateUI();
}

let lastFrame = 0;
function frame(now) {
  if (!lastFrame) lastFrame = now;
  let dt = (now - lastFrame) / 1000;
  lastFrame = now;
  dt = Math.min(dt, 0.045);
  if (!document.hidden) update(dt);
  render();
  window.requestAnimationFrame(frame);
}

function pointerWorld(event) {
  const rect = canvas.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * VIEW.w;
  const y = ((event.clientY - rect.top) / rect.height) * VIEW.h;
  pointer.x = x;
  pointer.y = y;
  pointer.wx = x + camera.x;
  pointer.wy = y + camera.y;
}

function onPointerMove(event) {
  if (event.pointerType && event.pointerType !== 'mouse') return;
  pointer.active = true;
  pointerWorld(event);
}

function onPointerDown(event) {
  if (event.button !== undefined && event.button !== 0) return;
  if (event.pointerType && event.pointerType !== 'mouse') return;
  if (game.state !== 'playing') return;
  canvasDrag = true;
  pointer.active = true;
  pointer.down = true;
  pointerWorld(event);
  initAudio();
}

function onPointerUp() {
  canvasDrag = false;
  pointer.down = false;
}

function keyName(event) {
  if (event.key === ' ') return ' ';
  return event.key.toLowerCase();
}

function onKeyDown(event) {
  const key = keyName(event);
  if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '].indexOf(key) !== -1) event.preventDefault();
  keyState[key] = true;
  initAudio();

  if (key === 'shift' && game.state === 'playing') {
    tryDash();
    return;
  }
  if ((key === 'r' || key === 'enter') && game.state === 'dead') {
    startGame();
    return;
  }
  if (key === 'enter' && game.state === 'title') {
    startGame();
    return;
  }
  if (key === 'm') {
    setMuted(!audio.muted);
    updateUI();
    return;
  }
  if (key === 'e' && game.state === 'playing') {
    event.preventDefault();
  }
}

function onKeyUp(event) {
  keyState[keyName(event)] = false;
}

function clearInputs() {
  for (const key in keyState) keyState[key] = false;
  pointer.down = false;
  canvasDrag = false;
  touchMove.active = false;
  touchMove.x = 0;
  touchMove.y = 0;
  ui.stickKnob.style.transform = 'translate(0px, 0px)';
}

function setupTouch() {
  const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window || window.innerWidth <= 760;
  if (!isTouch) return;
  stage.classList.add('touch');

  let stickId = null;
  let originX = 0;
  let originY = 0;
  let radius = 34;

  function stickCenter() {
    const rect = ui.stickZone.getBoundingClientRect();
    radius = rect.width * 0.29;
    return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  }

  function moveStick(event) {
    let dx = event.clientX - originX;
    let dy = event.clientY - originY;
    const len = Math.hypot(dx, dy);
    if (len > radius) {
      dx = (dx / len) * radius;
      dy = (dy / len) * radius;
    }
    touchMove.x = dx / radius;
    touchMove.y = dy / radius;
    ui.stickKnob.style.transform = 'translate(' + dx + 'px, ' + dy + 'px)';
  }

  ui.stickZone.addEventListener('pointerdown', function (event) {
    event.preventDefault();
    const center = stickCenter();
    originX = center.x;
    originY = center.y;
    stickId = event.pointerId;
    touchMove.active = true;
    ui.stickZone.setPointerCapture(event.pointerId);
    moveStick(event);
    initAudio();
  });

  ui.stickZone.addEventListener('pointermove', function (event) {
    if (event.pointerId !== stickId) return;
    event.preventDefault();
    moveStick(event);
  });

  function endStick(event) {
    if (event.pointerId !== stickId) return;
    stickId = null;
    touchMove.active = false;
    touchMove.x = 0;
    touchMove.y = 0;
    ui.stickKnob.style.transform = 'translate(0px, 0px)';
  }
  ui.stickZone.addEventListener('pointerup', endStick);
  ui.stickZone.addEventListener('pointercancel', endStick);

  function bindHold(button, key) {
    button.addEventListener('pointerdown', function (event) {
      event.preventDefault();
      keyState[key] = true;
      initAudio();
    });
    function release(event) {
      event.preventDefault();
      keyState[key] = false;
    }
    button.addEventListener('pointerup', release);
    button.addEventListener('pointercancel', release);
    button.addEventListener('pointerleave', release);
  }

  bindHold(ui.touchRip, 'attacktouch');
  bindHold(ui.touchEat, 'eattouch');
  ui.touchDash.addEventListener('pointerdown', function (event) {
    event.preventDefault();
    initAudio();
    tryDash();
  });
}

ui.play.addEventListener('click', function () {
  startGame();
});
ui.again.addEventListener('click', function () {
  startGame();
});
ui.sound.addEventListener('click', function (event) {
  event.preventDefault();
  initAudio();
  setMuted(!audio.muted);
  updateUI();
});

window.addEventListener('resize', resize);
window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);
window.addEventListener('blur', clearInputs);
window.addEventListener('pointerup', onPointerUp);
window.addEventListener('pointercancel', onPointerUp);
canvas.addEventListener('pointermove', onPointerMove);
canvas.addEventListener('pointerdown', onPointerDown);
canvas.addEventListener('contextmenu', function (event) { event.preventDefault(); });

buildBackground();
game.torches = torches;
resize();
setupTouch();
setupAttract();
render();
window.requestAnimationFrame(frame);
