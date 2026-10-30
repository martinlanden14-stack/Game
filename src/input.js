const ACTIONS = ['ollie', 'flip', 'spin', 'grab', 'reset'];

export class Input {
  constructor() {
    this.keys = new Set();
    this.pressed = Object.fromEntries(ACTIONS.map((a) => [a, false]));
    this.steer = 0;
    this.throttle = 0;
    this.brake = 0;
    this.joyX = 0;
    this.joyY = 0;
    this.hasTouch = matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0;
    this.touchUsed = false;
    this.enabled = true;
    this.joyPointer = null;
    this.padPrev = [];

    if (this.hasTouch || window.innerWidth <= 900) {
      document.body.classList.add('touch');
      this.touchUsed = true;
    }

    this.bindKeyboard();
    this.bindTouch();
  }

  bindKeyboard() {
    const block = new Set([
      'Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
      'KeyW', 'KeyA', 'KeyS', 'KeyD', 'KeyJ', 'KeyK', 'KeyL', 'KeyR', 'KeyP', 'Escape',
    ]);
    window.addEventListener('keydown', (e) => {
      if (block.has(e.code)) e.preventDefault();
      if (e.repeat) return;
      this.keys.add(e.code);
      if (e.code === 'Space') this.pressed.ollie = true;
      if (e.code === 'KeyJ') this.pressed.flip = true;
      if (e.code === 'KeyK') this.pressed.spin = true;
      if (e.code === 'KeyL') this.pressed.grab = true;
      if (e.code === 'KeyR') this.pressed.reset = true;
    }, { passive: false });
    window.addEventListener('keyup', (e) => {
      this.keys.delete(e.code);
    });
    window.addEventListener('blur', () => {
      this.keys.clear();
      this.resetJoystick();
    });
  }

  bindTouch() {
    const joy = document.getElementById('joystick');
    const knob = document.getElementById('joystick-knob');
    if (!joy || !knob) return;

    const radius = 48;
    const apply = (dx, dy) => {
      const len = Math.hypot(dx, dy);
      const k = len > radius ? radius / len : 1;
      const x = dx * k;
      const y = dy * k;
      this.joyX = x / radius;
      this.joyY = -y / radius;
      knob.style.transform = `translate(${x}px, ${y}px)`;
    };

    const down = (e) => {
      e.preventDefault();
      this.touchUsed = true;
      this.joyPointer = e.pointerId;
      const r = joy.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      this.joyCenter = { cx, cy };
      apply(e.clientX - cx, e.clientY - cy);
      try { joy.setPointerCapture?.(e.pointerId); } catch { /* synthetic pointers */ }
    };
    const move = (e) => {
      if (this.joyPointer !== e.pointerId) return;
      e.preventDefault();
      const { cx, cy } = this.joyCenter;
      apply(e.clientX - cx, e.clientY - cy);
    };
    const up = (e) => {
      if (this.joyPointer !== e.pointerId) return;
      this.resetJoystick();
    };
    joy.addEventListener('pointerdown', down, { passive: false });
    joy.addEventListener('pointermove', move, { passive: false });
    joy.addEventListener('pointerup', up);
    joy.addEventListener('pointercancel', up);

    document.querySelectorAll('[data-action]').forEach((btn) => {
      const action = btn.dataset.action;
      const press = (e) => {
        e.preventDefault();
        this.touchUsed = true;
        this.pressed[action] = true;
        btn.classList.add('pressed');
        try { btn.setPointerCapture?.(e.pointerId); } catch { /* synthetic pointers */ }
      };
      const release = (e) => {
        btn.classList.remove('pressed');
      };
      btn.addEventListener('pointerdown', press, { passive: false });
      btn.addEventListener('pointerup', release);
      btn.addEventListener('pointercancel', release);
      btn.addEventListener('pointerleave', release);
    });
  }

  resetJoystick() {
    this.joyPointer = null;
    this.joyX = 0;
    this.joyY = 0;
    const knob = document.getElementById('joystick-knob');
    if (knob) knob.style.transform = 'translate(0px, 0px)';
  }

  update() {
    let steer = 0;
    let throttle = 0;
    let brake = 0;

    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) steer -= 1;
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) steer += 1;
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) throttle = 1;
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) brake = 1;

    if (Math.abs(this.joyX) > 0.08) steer = this.joyX;
    if (this.joyY > 0.08) throttle = Math.max(throttle, this.joyY);
    if (this.joyY < -0.08) brake = Math.max(brake, -this.joyY);

    // Gamepad support.
    const pads = navigator.getGamepads?.() || [];
    for (const pad of pads) {
      if (!pad) continue;
      const ax = pad.axes[0] || 0;
      const ay = pad.axes[1] || 0;
      if (Math.abs(ax) > 0.12) steer = Math.max(-1, Math.min(1, steer + ax));
      if (ay < -0.12) throttle = Math.max(throttle, -ay);
      if (ay > 0.12) brake = Math.max(brake, ay);
      const btn = (i) => pad.buttons[i]?.pressed;
      if (btn(0) && !this.padPrev[0]) this.pressed.ollie = true;
      if (btn(2) && !this.padPrev[2]) this.pressed.flip = true;
      if (btn(3) && !this.padPrev[3]) this.pressed.spin = true;
      if (btn(1) && !this.padPrev[1]) this.pressed.grab = true;
      this.padPrev[0] = btn(0);
      this.padPrev[1] = btn(1);
      this.padPrev[2] = btn(2);
      this.padPrev[3] = btn(3);
      break;
    }

    this.steer = Math.max(-1, Math.min(1, steer));
    this.throttle = Math.max(0, Math.min(1, throttle));
    this.brake = Math.max(0, Math.min(1, brake));
  }

  consume(action) {
    if (!this.pressed[action]) return false;
    this.pressed[action] = false;
    return true;
  }

  clearPresses() {
    for (const a of ACTIONS) this.pressed[a] = false;
  }
}
