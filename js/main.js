(() => {
  'use strict';
  const CR = window.CR;
  const { state, input, player } = CR;

  let last = performance.now();
  let stickId = null;
  let stickCenter = { x: 0, y: 0 };
  let muted = false;

  function startGame() {
    CR.sound.unlock();
    CR.dom.title.classList.add('hidden');
    CR.dom.gameover.classList.add('hidden');
    CR.dom.pause.classList.add('hidden');
    CR.resetGame();
    if (CR.sound) CR.sound.click();
    document.body.classList.remove('menu-open');
    last = performance.now();
  }

  function pauseGame() {
    if (state.mode !== 'playing') return;
    state.mode = 'paused';
    CR.dom.pause.classList.remove('hidden');
    document.body.classList.add('menu-open');
    if (CR.sound) CR.sound.saw(0, false);
  }

  function resumeGame() {
    if (state.mode !== 'paused') return;
    state.mode = 'playing';
    CR.dom.pause.classList.add('hidden');
    document.body.classList.remove('menu-open');
    if (CR.sound) CR.sound.unlock();
  }

  function togglePause() {
    if (state.mode === 'playing') pauseGame();
    else if (state.mode === 'paused') resumeGame();
  }

  function toggleMute() {
    muted = !muted;
    CR.sound.setMuted(muted);
    CR.dom.mute.textContent = muted ? 'SOUND OFF' : 'SOUND ON';
    CR.dom.mute.setAttribute('aria-label', muted ? 'Unmute audio' : 'Mute audio');
  }

  function setupTouch() {
    const zone = document.getElementById('stick-zone');
    const base = document.getElementById('stick-base');
    const knob = document.getElementById('stick-knob');
    const attack = document.getElementById('touch-attack');
    const dash = document.getElementById('touch-dash');
    if (!zone || !base || !knob) return;

    function setStick(e) {
      const r = base.getBoundingClientRect();
      stickCenter.x = r.left + r.width / 2;
      stickCenter.y = r.top + r.height / 2;
      const dx = e.clientX - stickCenter.x;
      const dy = e.clientY - stickCenter.y;
      const max = r.width * 0.42;
      const d = Math.hypot(dx, dy) || 1;
      const clamped = Math.min(d, max);
      const nx = dx / d * clamped / max;
      const ny = dy / d * clamped / max;
      input.touch.dx = nx;
      input.touch.dy = ny;
      knob.style.transform = `translate(${nx * max}px, ${ny * max}px)`;
    }

    function resetStick() {
      stickId = null;
      input.touch.dx = 0;
      input.touch.dy = 0;
      knob.style.transform = 'translate(0, 0)';
    }

    zone.addEventListener('pointerdown', e => {
      e.preventDefault();
      stickId = e.pointerId;
      zone.setPointerCapture?.(e.pointerId);
      input.touch.active = true;
      setStick(e);
    });
    zone.addEventListener('pointermove', e => {
      if (stickId !== e.pointerId) return;
      e.preventDefault();
      setStick(e);
    });
    zone.addEventListener('pointerup', resetStick);
    zone.addEventListener('pointercancel', resetStick);

    attack.addEventListener('pointerdown', e => {
      e.preventDefault();
      e.stopPropagation();
      input.touch.active = true;
      input.touch.attack = true;
      CR.sound.unlock();
    });
    const stopAttack = e => {
      e.preventDefault();
      input.touch.attack = false;
    };
    attack.addEventListener('pointerup', stopAttack);
    attack.addEventListener('pointercancel', stopAttack);
    attack.addEventListener('pointerleave', stopAttack);

    dash.addEventListener('pointerdown', e => {
      e.preventDefault();
      e.stopPropagation();
      input.touch.active = true;
      input.touch.dash = true;
    });
    dash.addEventListener('pointerup', e => e.preventDefault());
  }

  function setupUI() {
    CR.dom.start.addEventListener('click', startGame);
    CR.dom.restart.addEventListener('click', startGame);
    CR.dom.resume.addEventListener('click', resumeGame);
    CR.dom.mute.addEventListener('click', toggleMute);
    CR.dom.fullscreen.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen?.().catch(() => {});
      } else {
        document.exitFullscreen?.().catch(() => {});
      }
    });

    window.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        if (state.mode === 'menu' || state.mode === 'dead') {
          e.preventDefault();
          startGame();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        togglePause();
      } else if (e.key === 'm' || e.key === 'M') {
        toggleMute();
      }
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden && state.mode === 'playing') pauseGame();
      last = performance.now();
    });

    window.addEventListener('resize', () => {
      CR.resize();
      CR.cam.x = CR.clamp(CR.cam.x, 0, Math.max(0, CR.world.w - CR.view.w));
      CR.cam.y = CR.clamp(CR.cam.y, 0, Math.max(0, CR.world.h - CR.view.h));
    });

    setupTouch();
  }

  function boot() {
    CR.buildWorld();
    CR.buildProps();
    CR.buildDecor();
    CR.resize();
    CR.buildRain();
    CR.spawnMenu();
    CR.setupInput();
    setupUI();
    document.body.classList.add('menu-open');
    // Expose a tiny debug handle for automated smoke checks.
    CR.startGame = startGame;
    CR.pauseGame = pauseGame;
    CR.resumeGame = resumeGame;
    requestAnimationFrame(loop);
  }

  function loop(now) {
    const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
    last = now;
    CR.update(dt);
    CR.render();
    requestAnimationFrame(loop);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
