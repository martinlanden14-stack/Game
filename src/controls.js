import * as THREE from '../vendor/three.module.js';

export class Controls {
  constructor(canvas, elements) {
    this.canvas = canvas;
    this.elements = elements;
    this.move = new THREE.Vector2();
    this.look = new THREE.Vector2();
    this.firing = false;
    this.sprint = false;
    this.reloadQueued = false;
    this.enabled = false;
    this.mobile = false;
    this.pointerLocked = false;
    this.keys = new Set();
    this.pointers = new Map();
    this.joystick = { active: false, id: null, ox: 0, oy: 0 };
    this.lookPointer = { active: false, id: null, x: 0, y: 0 };
    this.lookSensitivity = 0.0022;
    this.touchSensitivity = 0.0034;
    this.bind();
  }

  bind() {
    const { joystick, joystickKnob, fireBtn, reloadBtn } = this.elements;
    this.mobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 760 || navigator.maxTouchPoints > 0;
    document.body.classList.toggle('is-mobile', this.mobile);

    window.addEventListener('keydown', (e) => {
      if (!this.enabled) return;
      const k = e.key.toLowerCase();
      if (['w', 'a', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' ', 'shift', 'r'].includes(k)) e.preventDefault();
      this.keys.add(k);
      if (k === 'r') this.reloadQueued = true;
    });
    window.addEventListener('keyup', (e) => {
      const k = e.key.toLowerCase();
      this.keys.delete(k);
      if (k === ' ') this.firing = false;
    });
    window.addEventListener('blur', () => {
      this.keys.clear();
      this.firing = false;
      this.move.set(0, 0);
      this.sprint = false;
      this.resetJoystick();
    });

    this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());

    this.canvas.addEventListener('pointerdown', (e) => {
      if (!this.enabled) return;
      if (e.pointerType === 'mouse') {
        if (e.button !== 0) return;
        this.firing = true;
        if (!this.pointerLocked && this.canvas.requestPointerLock) {
          try {
            const request = this.canvas.requestPointerLock();
            if (request && request.catch) request.catch(() => {});
          } catch {}
        }
        this.lookPointer.active = false;
        return;
      }
      this.handleTouchDown(e);
    });

    window.addEventListener('pointerup', (e) => {
      if (e.pointerType === 'mouse') {
        if (e.button === 0) this.firing = false;
        return;
      }
      this.handleTouchUp(e);
    });
    window.addEventListener('pointercancel', (e) => {
      if (e.pointerType === 'mouse') {
        this.firing = false;
        return;
      }
      this.handleTouchUp(e);
    });

    document.addEventListener('pointerlockchange', () => {
      this.pointerLocked = document.pointerLockElement === this.canvas;
      document.body.classList.toggle('pointer-locked', this.pointerLocked);
      if (!this.pointerLocked) this.firing = false;
    });

    document.addEventListener('mousemove', (e) => {
      if (!this.enabled) return;
      if (!this.pointerLocked) return;
      this.look.x += e.movementX * this.lookSensitivity;
      this.look.y += e.movementY * this.lookSensitivity;
    });

    this.canvas.addEventListener('pointermove', (e) => {
      if (!this.enabled || e.pointerType === 'mouse') return;
      const p = this.pointers.get(e.pointerId);
      if (!p) return;
      if (p.type === 'look') {
        const dx = e.clientX - this.lookPointer.x;
        const dy = e.clientY - this.lookPointer.y;
        this.look.x += dx * this.touchSensitivity;
        this.look.y += dy * this.touchSensitivity;
        this.lookPointer.x = e.clientX;
        this.lookPointer.y = e.clientY;
      } else if (p.type === 'move') {
        this.updateJoystick(e.clientX, e.clientY);
      }
    });

    if (fireBtn) {
      fireBtn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!this.enabled) return;
        this.firing = true;
        fireBtn.classList.add('pressed');
      });
      const release = (e) => {
        e.preventDefault();
        this.firing = false;
        fireBtn.classList.remove('pressed');
      };
      fireBtn.addEventListener('pointerup', release);
      fireBtn.addEventListener('pointercancel', release);
      fireBtn.addEventListener('pointerleave', (e) => {
        if (e.buttons === 0) {
          this.firing = false;
          fireBtn.classList.remove('pressed');
        }
      });
    }
    if (reloadBtn) {
      reloadBtn.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!this.enabled) return;
        this.reloadQueued = true;
        reloadBtn.classList.add('pressed');
      });
      const release = (e) => {
        e.preventDefault();
        reloadBtn.classList.remove('pressed');
      };
      reloadBtn.addEventListener('pointerup', release);
      reloadBtn.addEventListener('pointercancel', release);
    }
    for (const el of [joystick, joystickKnob]) {
      if (el) el.addEventListener('pointerdown', (e) => e.stopPropagation());
    }
  }

  handleTouchDown(e) {
    if (e.target.closest('.touch-control')) return;
    const x = e.clientX;
    const y = e.clientY;
    const leftZone = x < window.innerWidth * 0.47;
    const lowerZone = y > window.innerHeight * 0.32;
    if (leftZone && lowerZone && !this.joystick.active) {
      this.joystick.active = true;
      this.joystick.id = e.pointerId;
      this.joystick.ox = x;
      this.joystick.oy = y;
      this.pointers.set(e.pointerId, { type: 'move' });
      this.showJoystick(x, y);
      this.updateJoystick(x, y);
      this.canvas.setPointerCapture?.(e.pointerId);
    } else if (!this.lookPointer.active) {
      this.lookPointer.active = true;
      this.lookPointer.id = e.pointerId;
      this.lookPointer.x = x;
      this.lookPointer.y = y;
      this.pointers.set(e.pointerId, { type: 'look' });
      this.canvas.setPointerCapture?.(e.pointerId);
    }
  }

  handleTouchUp(e) {
    const p = this.pointers.get(e.pointerId);
    if (!p) return;
    if (p.type === 'move') {
      this.resetJoystick();
      this.move.set(0, 0);
    } else if (p.type === 'look') {
      this.lookPointer.active = false;
      this.lookPointer.id = null;
    }
    this.pointers.delete(e.pointerId);
  }

  showJoystick(x, y) {
    const { joystick } = this.elements;
    if (!joystick) return;
    joystick.classList.add('active');
    joystick.style.left = `${x}px`;
    joystick.style.top = `${y}px`;
  }

  resetJoystick() {
    this.joystick.active = false;
    this.joystick.id = null;
    const { joystick, joystickKnob } = this.elements;
    if (joystick) joystick.classList.remove('active');
    if (joystickKnob) joystickKnob.style.transform = 'translate(-50%, -50%)';
  }

  updateJoystick(x, y) {
    const max = 54;
    let dx = x - this.joystick.ox;
    let dy = y - this.joystick.oy;
    const len = Math.hypot(dx, dy);
    if (len > max) {
      dx = (dx / len) * max;
      dy = (dy / len) * max;
    }
    this.move.set(dx / max, -dy / max);
    const { joystickKnob } = this.elements;
    if (joystickKnob) joystickKnob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
  }

  update() {
    if (!this.mobile) {
      const k = this.keys;
      let x = 0;
      let y = 0;
      if (k.has('w') || k.has('arrowup')) y += 1;
      if (k.has('s') || k.has('arrowdown')) y -= 1;
      if (k.has('a') || k.has('arrowleft')) x -= 1;
      if (k.has('d') || k.has('arrowright')) x += 1;
      if (x !== 0 || y !== 0) {
        const l = Math.hypot(x, y);
        this.move.set(x / l, y / l);
      } else if (!this.joystick.active) {
        this.move.set(0, 0);
      }
      this.sprint = k.has('shift');
      if (k.has(' ') && this.enabled) this.firing = true;
    } else {
      this.sprint = false;
    }
    if (this.move.lengthSq() > 1) this.move.normalize();
  }

  consumeLook() {
    const x = this.look.x;
    const y = this.look.y;
    this.look.set(0, 0);
    return { x, y };
  }

  consumeReload() {
    const r = this.reloadQueued;
    this.reloadQueued = false;
    return r;
  }

  setEnabled(value) {
    this.enabled = value;
    if (!value) {
      this.keys.clear();
      this.firing = false;
      this.move.set(0, 0);
      this.resetJoystick();
      if (document.pointerLockElement === this.canvas) document.exitPointerLock?.();
    }
  }
}
