import * as THREE from 'three';
import { EVENTS, FREE_EVENT, eventById } from './events.js';

const GRAVITY = 20.5;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const angleLerp = (a, b, t) => {
  let d = ((b - a + Math.PI) % (Math.PI * 2)) - Math.PI;
  if (d < -Math.PI) d += Math.PI * 2;
  return a + d * t;
};

export class Game {
  constructor({ world, skater, sound, ui, camera, renderer, mobile = false }) {
    this.world = world;
    this.skater = skater;
    this.sound = sound;
    this.ui = ui;
    this.camera = camera;
    this.renderer = renderer;
    this.mobile = mobile;
    this.phase = 'menu';

    this.x = world.spawn.x;
    this.y = 0.02;
    this.z = world.spawn.z;
    this.yaw = Math.PI;
    this.speed = 0;
    this.vy = 0;
    this.grounded = true;
    this.airTime = 0;
    this.spinAngle = 0;
    this.steer = 0;
    this.lean = 0;
    this.pitch = 0;
    this.crouch = 0;
    this.grindRail = null;
    this.grindT = 0;
    this.grindSign = 1;
    this.grindSpeed = 0;
    this.grindBalance = 0.5;
    this.grindSparks = 0;
    this.grindCooldown = 0;
    this.autoSpin = null;
    this.activeTricks = [];
    this.bail = false;
    this.bailTimer = 0;
    this.shake = 0;
    this.time = 0;
    this.elapsed = 0;
    this.menuAngle = 2.0;

    this.safe = { x: this.x, y: this.y, z: this.z, yaw: this.yaw };
    this.safeTimer = 0;
    this.score = 0;
    this.stats = this.emptyStats();
    this.event = FREE_EVENT;
    this.timeLeft = 0;
    this.comboCount = 0;
    this.multiplier = 1;
    this.comboTimer = 0;
    this.comboTimerMax = 3.2;
    this.goalComplete = false;
    this.endDelay = 0;
    this.countdownT = 0;
    this.countdownLast = -1;
    this.lastGoalPct = -1;
    this.contextShown = '';
    this.toastFlags = {};
    this.boardAnim = null;

    this.progress = this.loadProgress();
    this.baseFov = camera.fov;

    this.camera.position.set(14, 8, 30);
    this.camera.lookAt(0, 2.5, -6);

    this.resetIdle();
    this.ui.updateMenu(this.progress);
  }

  emptyStats() {
    return {
      score: 0,
      tricks: 0,
      grind: 0,
      airTime: 0,
      bestCombo: 1,
      letters: 0,
      distance: 0,
      bails: 0,
    };
  }

  loadProgress() {
    const def = { completed: [], best: {}, bestFree: 0, bestCombo: 1 };
    try {
      const raw = localStorage.getItem('grindcity.progress');
      if (!raw) return def;
      const p = JSON.parse(raw);
      return { ...def, ...p, completed: Array.isArray(p.completed) ? p.completed : [], best: p.best || {} };
    } catch {
      return def;
    }
  }

  saveProgress() {
    try {
      localStorage.setItem('grindcity.progress', JSON.stringify(this.progress));
    } catch { /* ignore */ }
    this.ui.updateMenu(this.progress);
  }

  isUnlocked(id) {
    if (id === 'free') return true;
    const n = Number(id);
    if (n === 0) return true;
    return this.progress.completed.includes(n - 1);
  }

  resetIdle() {
    this.x = this.world.spawn.x;
    this.y = 0.02;
    this.z = this.world.spawn.z;
    this.yaw = Math.PI;
    this.speed = 0;
    this.vy = 0;
    this.grounded = true;
    this.airTime = 0;
    this.spinAngle = 0;
    this.grindRail = null;
    this.bail = false;
    this.activeTricks = [];
    this.autoSpin = null;
  }

  start(id = 'free') {
    this.event = eventById(id);
    this.phase = 'countdown';
    this.countdownT = 3.0;
    this.countdownLast = -1;
    this.timeLeft = this.event.duration;
    this.elapsed = 0;
    this.score = 0;
    this.stats = this.emptyStats();
    this.comboCount = 0;
    this.multiplier = 1;
    this.comboTimer = 0;
    this.goalComplete = false;
    this.endDelay = 0;
    this.lastGoalPct = -1;
    this.bail = false;
    this.bailTimer = 0;
    this.shake = 0;
    this.activeTricks = [];
    this.airTricks = [];
    this.autoSpin = null;
    this.grindRail = null;
    this.boardAnim = null;
    this.toastFlags = {};
    this.contextShown = '';

    this.x = this.world.spawn.x;
    this.y = 0.02;
    this.z = this.world.spawn.z;
    this.yaw = Math.PI;
    this.speed = 2;
    this.vy = 0;
    this.grounded = true;
    this.airTime = 0;
    this.spinAngle = 0;
    this.crouch = 0.4;
    this.steer = 0;
    this.lean = 0;
    this.pitch = 0;
    this.safe = { x: this.x, y: this.y, z: this.z, yaw: this.yaw };
    this.safeTimer = 0;

    this.world.resetCollectibles();
    this.input?.clearPresses();
    this.ui.hideMenu();
    this.ui.hidePanel();
    this.ui.hideResults();
    this.ui.hidePause();
    this.ui.showHUD();
    this.ui.setLettersVisible(this.event.type === 'letters');
    this.ui.updateLetters(new Set());
    this.ui.setCountdown('3');
    this.ui.hideContext();
    this.ui.hideBalance();
    this.ui.hideBail();
    this.ui.hideGoal();
    this.ui.setEvent(this.event);
    this.sound.init();
    this.sound.ui();

    this.skater.update(0.016, this.visualState());
    this.updateCamera(0.016, true);
  }

  startCareer() {
    const next = EVENTS.find((e) => !this.progress.completed.includes(e.id));
    this.start(next ? next.id : 0);
  }

  startNext() {
    if (typeof this.event.id !== 'number') {
      this.toMenu();
      return;
    }
    const next = this.event.id + 1;
    if (next < EVENTS.length && this.isUnlocked(next)) this.start(next);
    else this.toMenu();
  }

  retry() {
    this.start(this.event.id);
  }

  toMenu() {
    this.phase = 'menu';
    this.resetIdle();
    this.ui.hideHUD();
    this.ui.hideResults();
    this.ui.hidePause();
    this.ui.hideContext();
    this.ui.hideBalance();
    this.ui.hideBail();
    this.ui.hideGoal();
    this.ui.setCountdown(null);
    this.ui.showMenu();
    this.ui.updateMenu(this.progress);
    this.sound.update({ speed: 0, grounded: true, grinding: false, air: false });
  }

  pause() {
    if (this.phase !== 'playing' && this.phase !== 'goal' && this.phase !== 'countdown') return;
    this.pausedFrom = this.phase;
    this.phase = 'paused';
    this.ui.showPause();
    this.sound.ui();
  }

  resume() {
    if (this.phase !== 'paused') return;
    this.phase = this.pausedFrom || 'playing';
    this.ui.hidePause();
    this.sound.ui();
  }

  finish(success, reason = '') {
    if (this.phase === 'results') return;
    this.phase = 'results';
    this.ui.setCountdown(null);
    this.ui.hideContext();
    this.ui.hideBalance();

    const prevBest = this.event.id === 'free'
      ? (this.progress.bestFree || 0)
      : (this.progress.best[this.event.id] || 0);
    const isNewBest = this.score > prevBest;
    if (isNewBest) {
      if (this.event.id === 'free') this.progress.bestFree = Math.round(this.score);
      else this.progress.best[this.event.id] = Math.round(this.score);
    }
    this.progress.bestCombo = Math.max(this.progress.bestCombo || 1, this.stats.bestCombo);
    let unlocked = null;
    if (typeof this.event.id === 'number' && success) {
      if (!this.progress.completed.includes(this.event.id)) {
        this.progress.completed.push(this.event.id);
        this.progress.completed.sort((a, b) => a - b);
      }
      const next = this.event.id + 1;
      if (next < EVENTS.length) unlocked = next;
    }
    this.saveProgress();

    if (success) this.sound.goal();
    this.ui.showResults({
      event: this.event,
      success,
      reason,
      score: Math.round(this.score),
      best: Math.round(isNewBest ? this.score : prevBest),
      isNewBest,
      stats: this.stats,
      unlocked,
      next: typeof this.event.id === 'number' && success && this.event.id + 1 < EVENTS.length ? this.event.id + 1 : null,
    });
  }

  /* ------------------------------------------------------------ Loop */
  update(dt) {
    dt = Math.min(dt, 0.05);
    this.elapsed += dt;
    this.time += dt;
    this.grindCooldown = Math.max(0, (this.grindCooldown || 0) - dt);

    if (this.phase === 'menu') {
      this.updateMenu(dt);
      this.world.update(dt, this.elapsed, this.camera);
      return;
    }
    if (this.phase === 'paused' || this.phase === 'results') {
      this.world.update(dt, this.elapsed, this.camera);
      return;
    }

    if (this.phase === 'countdown') {
      this.countdownT -= dt;
      const n = Math.ceil(this.countdownT);
      if (n !== this.countdownLast) {
        this.countdownLast = n;
        if (n > 0) {
          this.ui.setCountdown(String(n));
          this.sound.countdown(false);
        } else {
          this.ui.setCountdown('GO');
          this.phase = 'playing';
          this.sound.countdown(true);
          setTimeout(() => {
            if (this.phase === 'playing') this.ui.setCountdown(null);
          }, 500);
        }
      }
      this.speed *= 1 - dt * 2;
      this.skater.update(dt, this.visualState());
      this.world.update(dt, this.elapsed, this.camera);
      this.updateCamera(dt);
      this.ui.updateHUD(this.hudData());
      return;
    }

    if (this.phase === 'goal') {
      this.endDelay -= dt;
      if (this.endDelay <= 0) {
        this.finish(true);
        this.world.update(dt, this.elapsed, this.camera);
        return;
      }
    }

    if (this.phase === 'playing') {
      this.timeLeft -= dt;
      if (this.timeLeft <= 0) {
        this.timeLeft = 0;
        this.finish(this.event.id === 'free');
        this.world.update(dt, this.elapsed, this.camera);
        return;
      }
    }

    this.sound.update({
      speed: this.speed,
      grounded: this.grounded,
      grinding: !!this.grindRail,
      air: !this.grounded && !this.grindRail,
    });

    if (this.bail) {
      this.updateBail(dt);
    } else {
      this.handleInput(dt);
      this.physics(dt);
      this.updateTricks(dt);
      this.updateCollectibles(dt);
    }

    this.updateCombo(dt);
    this.updateObjective();
    this.updateTutorial();

    this.skater.update(dt, this.visualState());
    this.world.update(dt, this.elapsed, this.camera);
    this.updateCamera(dt);
    this.updateContext();
    this.ui.updateHUD(this.hudData());
    this.shake = Math.max(0, this.shake - dt * 2.4);
  }

  updateMenu(dt) {
    this.menuAngle += dt * 0.045;
    const portrait = this.camera.aspect < 0.9;
    const camX = (portrait ? -2.6 : -4.15) + Math.sin(this.menuAngle) * 0.35;
    const camZ = (portrait ? 18.4 : 15.9) + Math.cos(this.menuAngle * 0.8) * 0.24;
    const camY = 2.32 + Math.sin(this.menuAngle * 1.5) * 0.14;
    this.camera.position.lerp(new THREE.Vector3(camX, camY, camZ), 1 - Math.exp(-dt * 2.2));
    this.camera.lookAt(-1.2, 1.32, -8.5);
    this.camera.fov += (this.baseFov - this.camera.fov) * Math.min(1, dt * 3);
    this.camera.updateProjectionMatrix();

    // Idle skater life. Placed in the open centre of the menu layout.
    this.speed = 0;
    this.grounded = true;
    this.steer = Math.sin(this.elapsed * 0.7) * 0.12;
    this.skater.update(dt, {
      ...this.visualState(),
      x: this.world.spawn.x + (portrait ? -1.5 : -1.2) + Math.sin(this.elapsed * 0.34) * 0.05,
      y: 0.02,
      z: this.world.spawn.z,
      yaw: 0.52 + Math.sin(this.elapsed * 0.27) * 0.1,
      speed: 0,
      steer: 0.12,
      grounded: true,
      crouch: 0.06,
      pushing: false,
    });
  }

  /* ------------------------------------------------------------ Input / tricks */
  handleInput(dt) {
    this.steer = this.input ? this.input.steer : 0;
    const steer = this.steer;

    if (this.input) {
      if (this.input.consume('ollie')) this.ollie();
      if (this.input.consume('flip')) this.doFlip();
      if (this.input.consume('spin')) this.doSpin();
      if (this.input.consume('grab')) this.doGrab();
      if (this.input.consume('reset')) this.respawn();
    }

    if (!this.grindRail) {
      const speedFactor = clamp(Math.abs(this.speed) / 3.5, 0.25, 1);
      if (this.grounded) {
        const rate = (2.15 - Math.min(0.85, Math.abs(this.speed) * 0.034)) * speedFactor;
        this.yaw += steer * rate * dt * (this.speed < 0 ? -1 : 1);
      } else {
        this.yaw += steer * 0.22 * dt;
      }
    }
  }

  ollie() {
    if (this.bail) return;
    if (this.grindRail) {
      this.exitGrind(true);
      return;
    }
    if (!this.grounded) return;
    this.grounded = false;
    this.vy = 6.6 + Math.abs(this.speed) * 0.16;
    this.airTime = 0;
    this.spinAngle = 0;
    this.airTricks = [];
    this.autoSpin = null;
    this.crouch = 1;
    this.sound.ollie();
    this.wheelie = 0.3;
  }

  doFlip() {
    if (this.bail || this.grounded || this.grindRail) {
      if (this.grounded && !this.grindRail) this.hintAir();
      return;
    }
    if (this.activeTricks.some((t) => t.type === 'kickflip' || t.type === 'heelflip')) return;
    const heelflip = this.lastFlip !== 'kickflip';
    this.lastFlip = heelflip ? 'heelflip' : 'kickflip';
    const trick = {
      type: heelflip ? 'heelflip' : 'kickflip',
      name: heelflip ? 'HEELFLIP' : 'KICKFLIP',
      points: 520,
      t: 0,
      duration: 0.36,
      done: false,
    };
    this.activeTricks.push(trick);
    this.skater.triggerTrick(trick.type);
    this.sound.trick();
  }

  doSpin() {
    if (this.bail || this.grounded || this.grindRail) {
      if (this.grounded && !this.grindRail) this.hintAir();
      return;
    }
    if (this.autoSpin) return;
    this.autoSpin = {
      t: 0, duration: 0.48, dir: this.steer < -0.1 ? -1 : 1,
    };
    this.sound.trick();
  }

  doGrab() {
    if (this.bail || this.grounded || this.grindRail) {
      if (this.grounded && !this.grindRail) this.hintAir();
      return;
    }
    if (this.activeTricks.some((t) => t.type === 'grab')) return;
    const trick = {
      type: 'grab', name: 'INDY GRAB', points: 480, t: 0, duration: 0.34, done: false,
    };
    this.activeTricks.push(trick);
    this.skater.triggerTrick('grab');
    this.sound.trick();
  }

  hintAir() {
    if (this.toastFlags.airHint) return;
    this.toastFlags.airHint = true;
    this.ui.toast('OLLIE FIRST, THEN FLIP · SPIN · GRAB');
  }

  updateTricks(dt) {
    if (this.autoSpin) {
      this.autoSpin.t += dt;
      const k = Math.min(1, this.autoSpin.t / this.autoSpin.duration);
      const target = this.autoSpin.dir * Math.PI * 2;
      this.spinAngle = target * k;
      if (k >= 1) {
        this.autoSpin = null;
        this.spinAngle = target;
      }
    } else if (!this.grounded && !this.grindRail) {
      this.spinAngle += this.steer * 5.4 * dt;
    }

    for (const trick of this.activeTricks) {
      trick.t += dt;
      if (trick.t >= trick.duration) trick.done = true;
    }
    this.boardAnim = this.activeTricks.find((t) => !t.done) || null;
    if (this.boardAnim) {
      // Keep the animation object shaped for the skater.
    }
  }

  /* ------------------------------------------------------------ Physics */
  physics(dt) {
    if (this.grindRail) {
      this.updateGrind(dt);
      return;
    }

    const f = { x: Math.sin(this.yaw), z: Math.cos(this.yaw) };

    if (this.grounded) {
      const grad = this.world.gradient(this.x, this.z, 0.15);
      const slopeF = grad.x * f.x + grad.z * f.z;
      const denom = 1 + grad.x * grad.x + grad.z * grad.z;
      this.speed += (-GRAVITY * slopeF / denom) * dt;

      const throttle = this.input ? this.input.throttle : 0;
      const brake = this.input ? this.input.brake : 0;
      if (throttle > 0.03) {
        this.speed += (2.6 + 4.8 * throttle) * dt;
      } else if (Math.abs(this.speed) < 5.1 && brake < 0.05) {
        this.speed += 1.45 * dt;
      }
      if (brake > 0.03) this.speed -= (7 + 8 * brake) * dt;

      // Rolling resistance.
      const resistance = (0.34 + Math.abs(this.speed) * 0.024) * dt;
      if (Math.abs(this.speed) > resistance) this.speed -= Math.sign(this.speed) * resistance;
      else this.speed = 0;
      this.speed = clamp(this.speed, -7.5, 15.5);

      // Small carve scrub.
      this.speed *= 1 - Math.abs(this.steer) * 0.055 * dt;

      this.pitch = -Math.atan(slopeF) * 0.5;
      this.lean = this.steer;

      const prevX = this.x;
      const prevZ = this.z;
      const stepX = f.x * this.speed * dt;
      const stepZ = f.z * this.speed * dt;

      let nx = this.x + stepX;
      let nz = this.z + stepZ;
      let blocked = false;
      if (Math.abs(nx) > this.world.bounds || Math.abs(nz) > this.world.bounds) {
        nx = clamp(nx, -this.world.bounds, this.world.bounds);
        nz = clamp(nz, -this.world.bounds, this.world.bounds);
        blocked = true;
      }
      if (this.world.blocked(nx, nz, this.y + 0.12)) blocked = true;

      if (!blocked) {
        this.x = nx;
        this.z = nz;
      } else {
        this.speed *= 0.18;
      }

      const h = this.world.groundHeight(this.x, this.z, this.y);
      const upStep = h - this.y;
      if (upStep > 0.78) {
        // Side wall: refuse the climb, restore position.
        this.x = prevX;
        this.z = prevZ;
        this.speed *= -0.08;
      } else if (h < this.y - 0.22 && slopeF > 0.26 && Math.abs(this.speed) > 2.4 && this.speed * slopeF > 0.15) {
        // Launch off a lip while travelling uphill.
        const theta = Math.atan(Math.max(0, slopeF));
        const vy = Math.min(12.5, Math.max(1.5, Math.abs(this.speed) * Math.sin(theta) * 1.03));
        this.speed *= Math.cos(theta) * 0.9 + 0.04;
        this.y += 0.025;
        this.vy = vy;
        this.grounded = false;
        this.airTime = 0;
        this.spinAngle = 0;
        this.airTricks = [];
        this.activeTricks = [];
        this.autoSpin = null;
        this.shake = Math.max(this.shake, 0.12);
      } else if (h < this.y - 0.42 && slopeF <= 0.08) {
        // Rolled off a true edge / drop.
        this.grounded = false;
        this.vy = 0;
        this.y += 0.01;
        this.airTime = 0;
        this.spinAngle = 0;
        this.airTricks = [];
        this.activeTricks = [];
        this.autoSpin = null;
      } else {
        this.y = h;
        this.vy = 0;
        this.distance += Math.abs(this.speed) * dt;
        this.stats.distance += Math.abs(this.speed) * dt;
      }

      this.crouch = Math.max(0, this.crouch - dt * 2.7);
      this.safeTimer -= dt;
      if (this.safeTimer <= 0 && this.grounded && Math.abs(this.speed) > 1.4 && this.y < 4.5) {
        this.safeTimer = 0.45;
        this.safe = { x: this.x, y: this.y, z: this.z, yaw: this.yaw };
      }
    } else {
      // Airborne.
      this.airTime += dt;
      this.stats.airTime += dt;
      this.crouch = Math.max(0.15, this.crouch - dt * 1.8);
      this.speed *= 1 - 0.008 * dt;
      this.speed = clamp(this.speed, -9, 15.5);

      const prevX = this.x;
      const prevZ = this.z;
      this.x += f.x * this.speed * dt;
      this.z += f.z * this.speed * dt;
      if (Math.abs(this.x) > this.world.bounds) {
        this.x = clamp(this.x, -this.world.bounds, this.world.bounds);
        this.speed *= 0.65;
      }
      if (Math.abs(this.z) > this.world.bounds) {
        this.z = clamp(this.z, -this.world.bounds, this.world.bounds);
        this.speed *= 0.65;
      }

      this.y += this.vy * dt;
      this.vy -= GRAVITY * dt;
      this.pitch = 0;
      this.lean = this.steer * 0.8;

      if (this.tryGrind()) {
        return;
      }

      const h = this.world.groundHeight(this.x, this.z, this.y);
      if (h > this.y + 0.9) {
        this.x = prevX;
        this.z = prevZ;
        this.speed *= 0.2;
      } else if (this.y <= h + 0.015) {
        const impact = Math.max(0, -this.vy);
        this.y = h;
        this.vy = 0;
        this.grounded = true;
        this.onLand(impact);
      }
      if (this.y < -4) this.respawn();
    }
  }

  onLand(impact) {
    const unfinished = this.activeTricks.some((t) => !t.done);
    if (unfinished) {
      this.doBail('Sketchy landing');
      return;
    }

    const tricks = this.activeTricks.filter((t) => t.done);
    for (const t of tricks) this.registerTrick(t.name, t.points);

    const spinRounds = Math.floor((Math.abs(this.spinAngle) + Math.PI * 0.35) / Math.PI);
    if (spinRounds >= 1) {
      const deg = spinRounds * 180;
      const points = 260 + spinRounds * 150;
      this.registerTrick(`${deg} SPIN`, points);
    }

    if (this.airTime > 1.05) {
      const bonus = Math.round(this.airTime * 160);
      this.score += bonus;
      this.ui.trickLine(`AIR TIME ${this.airTime.toFixed(1)}s`, bonus, 'gold');
    }

    this.activeTricks = [];
    this.airTricks = [];
    this.spinAngle = 0;
    this.autoSpin = null;
    this.airTime = 0;
    this.crouch = 0.7;
    this.shake = Math.max(this.shake, Math.min(1, impact * 0.055));
    this.sound.land(impact);
    this.stats.score = this.score;

    this.comboTimer = this.comboTimerMax;
    if (this.multiplier > 1) this.ui.comboPop(this.multiplier);
    this.safe = { x: this.x, y: this.y, z: this.z, yaw: this.yaw };
  }

  registerTrick(name, base) {
    this.multiplier = Math.min(10, this.comboCount + 1);
    const pts = Math.round(base * this.multiplier);
    this.score += pts;
    this.stats.score = this.score;
    this.stats.tricks++;
    this.comboCount++;
    this.stats.bestCombo = Math.max(this.stats.bestCombo, this.multiplier);
    this.comboTimer = this.comboTimerMax;
    this.ui.trickLine(name, pts, this.multiplier >= 4 ? 'gold' : '');
    this.ui.pulseScore();
  }

  doBail(reason = '') {
    if (this.bail) return;
    this.bail = true;
    this.bailTimer = 1.35;
    this.speed = 0;
    this.vy = 0;
    this.grindRail = null;
    this.autoSpin = null;
    this.activeTricks = [];
    this.airTricks = [];
    this.spinAngle = 0;
    this.comboCount = 0;
    this.multiplier = 1;
    this.comboTimer = 0;
    this.stats.bails++;
    this.shake = 1.4;
    this.ui.hideBalance();
    this.ui.hideContext();
    this.ui.bail(reason);
    this.sound.bail();
    this.skater.setBail();
  }

  updateBail(dt) {
    this.bailTimer -= dt;
    this.speed *= 1 - dt * 4;
    this.y += Math.max(-0.01, this.vy) * dt;
    this.vy -= GRAVITY * 0.4 * dt;
    const h = this.world.groundHeight(this.x, this.z, this.y);
    if (this.y < h) {
      this.y = h;
      this.vy = 0;
    }
    if (this.bailTimer <= 0) {
      this.bail = false;
      this.ui.hideBail();
      this.respawn();
    }
  }

  respawn() {
    const safe = this.safe || { x: this.world.spawn.x, y: 0, z: this.world.spawn.z, yaw: Math.PI };
    let { x, z } = safe;
    if (this.world.blocked(x, z, 0.1)) {
      x = this.world.spawn.x;
      z = this.world.spawn.z;
    }
    this.x = x;
    this.z = z;
    this.y = this.world.groundHeight(x, z, safe.y ?? 0) + 0.02;
    this.yaw = safe.yaw ?? Math.PI;
    this.speed = 2.4;
    this.vy = 0;
    this.grounded = true;
    this.bail = false;
    this.grindRail = null;
    this.airTime = 0;
    this.spinAngle = 0;
    this.activeTricks = [];
    this.autoSpin = null;
    this.shake = 0;
    this.ui.hideBail();
    this.ui.hideBalance();
    this.ui.hideContext();
  }

  /* ------------------------------------------------------------ Grind */
  tryGrind() {
    if (this.grindRail || this.bail || this.grindCooldown > 0) return false;
    if (this.vy > 3.2) return false;

    const near = this.world.railsNear(this.x, this.z, 1.05);
    for (const n of near) {
      if (Math.abs(this.y - n.y) > 0.72 && !(this.y >= n.y - 0.1 && this.y <= n.y + 1.0)) continue;
      if (this.y < n.y - 0.42) continue;

      const allDone = this.activeTricks.every((t) => t.done);
      if (!allDone) return false;

      // Land the completed air tricks before locking into the grind.
      for (const t of this.activeTricks) this.registerTrick(t.name, t.points);
      if (this.airTime > 1.0) {
        const bonus = Math.round(this.airTime * 160);
        this.score += bonus;
        this.ui.trickLine(`AIR TIME ${this.airTime.toFixed(1)}s`, bonus, 'gold');
      }
      const spinRounds = Math.floor((Math.abs(this.spinAngle) + Math.PI * 0.35) / Math.PI);
      if (spinRounds >= 1) this.registerTrick(`${spinRounds * 180} SPIN`, 260 + spinRounds * 150);

      this.enterGrind(n.rail, n.t);
      return true;
    }
    return false;
  }

  enterGrind(rail, t) {
    const fx = Math.sin(this.yaw);
    const fz = Math.cos(this.yaw);
    const dot = fx * rail.dir.x + fz * rail.dir.z;
    this.grindSign = dot >= 0 ? 1 : -1;
    this.grindRail = rail;
    this.grindT = clamp(t, 0, 1);
    this.grindSpeed = Math.max(3.4, Math.min(14, Math.abs(this.speed)));
    this.grindBalance = 0.5;
    this.grindSparks = 0;
    this.grindStart = this.time;
    this.grounded = false;
    this.vy = 0;
    this.airTime = 0;
    this.activeTricks = [];
    this.airTricks = [];
    this.spinAngle = 0;
    this.autoSpin = null;
    this.y = rail.yA + (rail.yB - rail.yA) * this.grindT + 0.045;
    this.yaw = Math.atan2(rail.dir.x * this.grindSign, rail.dir.z * this.grindSign);
    this.crouch = 0.8;
    this.comboTimer = this.comboTimerMax;
    this.registerTrick(`50-50 ${rail.kind === 'handrail' ? 'HANDRAIL' : 'GRIND'}`, 340);
    this.ui.showBalance(true);
    this.ui.hideContext();
    this.sound.grindStart();
    this.shake = Math.max(this.shake, 0.16);
    this.lastBalanceWarn = 0;
  }

  updateGrind(dt) {
    const rail = this.grindRail;
    if (!rail) return;
    this.grindT += this.grindSign * (this.grindSpeed * dt) / rail.length;
    if (this.grindT < 0 || this.grindT > 1) {
      this.exitGrind(false);
      return;
    }

    const t = this.grindT;
    this.x = lerp(rail.a.x, rail.b.x, t);
    this.z = lerp(rail.a.z, rail.b.z, t);
    this.y = lerp(rail.yA, rail.yB, t) + 0.045;
    this.yaw = Math.atan2(rail.dir.x * this.grindSign, rail.dir.z * this.grindSign);

    const drop = (rail.yB - rail.yA) * this.grindSign;
    this.grindSpeed += drop * 2.6 * dt;
    this.grindSpeed = clamp(this.grindSpeed - 0.25 * dt, 2.4, 16);
    this.stats.grind += this.grindSpeed * dt;
    this.stats.distance += this.grindSpeed * dt;
    this.score += 95 * this.multiplier * dt;
    this.stats.score = this.score;

    const steer = this.input ? this.input.steer : 0;
    const gt = this.time - (this.grindStart ?? this.time);
    const ramp = Math.min(1, gt / 0.4);
    const drift = (Math.sin(gt * 1.35 + rail.a.x * 0.7) * 0.5 + Math.sin(gt * 0.51 + rail.a.z) * 0.22) * ramp;
    this.grindBalance += (drift + steer * 1.35 + (0.5 - this.grindBalance) * 0.55) * dt;
    this.grindBalance = clamp(this.grindBalance, -0.1, 1.1);
    this.crouch = 0.9;
    this.lean = -steer * 0.8;
    this.pitch = 0;

    this.grindSparks -= dt;
    if (this.grindSparks <= 0) {
      this.grindSparks = 0.09;
      const spark = {
        x: lerp(rail.a.x, rail.b.x, t) + (Math.random() - 0.5) * 0.12,
        y: lerp(rail.yA, rail.yB, t) + 0.02,
        z: lerp(rail.a.z, rail.b.z, t) + (Math.random() - 0.5) * 0.12,
      };
      this.world.burst(spark, 0xffa53a, 3, 1.7);
    }

    if (this.grindBalance < 0.03 || this.grindBalance > 0.97) {
      this.doBail('Lost balance');
      return;
    }
    if (this.input && this.input.consume('ollie')) {
      this.exitGrind(true);
      return;
    }
    if (this.grindBalance < 0.13 || this.grindBalance > 0.87) {
      this.lastBalanceWarn -= dt;
      if (this.lastBalanceWarn <= 0) {
        this.lastBalanceWarn = 0.9;
        this.ui.toast('STEADY YOUR BALANCE', 900);
      }
    }

    this.shake = Math.max(this.shake, 0.03);
    this.comboTimer = this.comboTimerMax;
    this.ui.updateBalance(this.grindBalance);
    this.speed = this.grindSpeed;
    this.grounded = false;
    this.airTime = 0;
  }

  exitGrind(pop) {
    if (!this.grindRail) return;
    const rail = this.grindRail;
    const f = { x: rail.dir.x * this.grindSign, z: rail.dir.z * this.grindSign };
    this.x = lerp(rail.a.x, rail.b.x, this.grindT);
    this.z = lerp(rail.a.z, rail.b.z, this.grindT);
    this.y = lerp(rail.yA, rail.yB, this.grindT) + 0.12;
    this.grindRail = null;
    this.grounded = false;
    this.vy = pop ? 4.3 : 2.3;
    this.speed = Math.max(3.5, this.grindSpeed);
    this.airTime = 0;
    this.activeTricks = [];
    this.spinAngle = 0;
    this.autoSpin = null;
    this.airTricks = [];
    this.yaw = Math.atan2(f.x, f.z);
    this.ui.hideBalance();
    this.crouch = 0.5;
    this.grindCooldown = 0.6;
    if (pop) this.sound.ollie();
    this.safe = { x: this.x, y: this.y, z: this.z, yaw: this.yaw };
  }

  /* ------------------------------------------------------------ Collect / combo */
  updateCollectibles(dt) {
    const px = this.x;
    const py = this.y + 0.72;
    const pz = this.z;
    for (let i = 0; i < this.world.coins.length; i++) {
      const c = this.world.coins[i];
      if (c.taken) continue;
      const dx = c.pos.x - px;
      const dy = c.pos.y - py;
      const dz = c.pos.z - pz;
      if (dx * dx + dy * dy + dz * dz < 1.55 * 1.55) {
        this.world.collectCoin(i, this.time);
        this.score += Math.round(80 * this.multiplier);
        this.stats.score = this.score;
        this.comboTimer = this.comboTimerMax;
        this.sound.coin();
        this.ui.pulseScore();
      }
    }
    for (const letter of this.world.letters) {
      if (letter.taken) continue;
      const dx = letter.pos.x - px;
      const dy = letter.pos.y - py;
      const dz = letter.pos.z - pz;
      if (dx * dx + dy * dy + dz * dz < 2.15 * 2.15) {
        this.world.collectLetter(letter, this.time);
        this.stats.letters++;
        this.score += Math.round(450 * this.multiplier);
        this.stats.score = this.score;
        this.comboTimer = this.comboTimerMax;
        this.ui.updateLetters(new Set(this.world.letters.filter((l) => l.taken).map((l) => l.letter)));
        this.ui.trickLine(`${letter.letter} LETTER`, Math.round(450 * this.multiplier), 'gold');
        this.ui.pulseScore();
        this.sound.letter();
        this.shake = Math.max(this.shake, 0.15);
      }
    }
  }

  updateCombo(dt) {
    if (this.grindRail || !this.grounded) {
      this.comboTimer = Math.max(this.comboTimer, 0.8);
      return;
    }
    if (this.comboCount <= 0) return;
    this.comboTimer -= dt;
    if (this.comboTimer <= 0) {
      if (this.multiplier > 2) this.ui.trickLine(`COMBO x${this.multiplier} BANKED`, 0, 'gold');
      this.comboCount = 0;
      this.multiplier = 1;
      this.comboTimer = 0;
      this.ui.resetCombo();
    }
  }

  updateObjective() {
    if (this.event.id === 'free' || !this.event.target) return;
    const value = this.objectiveValue();
    const pct = Math.min(1, value / this.event.target);
    if (pct !== this.lastGoalPct) {
      this.lastGoalPct = pct;
      this.ui.updateObjectiveProgress(value, this.event);
    }
    if (!this.goalComplete && value >= this.event.target) {
      this.goalComplete = true;
      this.phase = 'goal';
      this.endDelay = 2.2;
      this.ui.hideContext();
      this.ui.hideBalance();
      this.ui.goal();
      this.sound.goal();
      this.shake = Math.max(this.shake, 0.2);
    }
  }

  objectiveValue() {
    const t = this.event.type;
    if (t === 'score') return this.score;
    if (t === 'grind') return this.stats.grind;
    if (t === 'air') return this.stats.airTime;
    if (t === 'combo') return this.stats.bestCombo;
    if (t === 'letters') return this.stats.letters;
    if (t === 'tricks') return this.stats.tricks;
    if (t === 'distance') return this.stats.distance;
    return 0;
  }

  updateTutorial() {
    if (!this.toastFlags.start) {
      this.toastFlags.start = true;
      this.ui.toast(this.mobile ? 'PUSH WITH THE STICK ↑ · OLLIE WITH THE BIG BUTTON' : 'HOLD W TO PUSH · SPACE TO OLLIE', 2600);
    }
    if (!this.toastFlags.speed && Math.abs(this.speed) > 8.5) {
      this.toastFlags.speed = true;
      this.ui.toast('SEND IT · HIT THE QUARTER PIPE FOR BIG AIR', 2300);
    }
    if (!this.toastFlags.air && this.airTime > 0.3 && this.airTricks.length === 0 && !this.grindRail) {
      this.toastFlags.air = true;
      this.ui.toast(this.mobile ? 'TAP FLIP · SPIN · GRAB IN THE AIR' : 'J FLIP · K SPIN · L GRAB', 2300);
    }
  }

  updateContext() {
    if (this.bail) return this.ui.hideContext();
    if (this.grindRail) return this.ui.hideContext();
    if (!this.grounded) {
      const near = this.world.railsNear(this.x, this.z, 1.7);
      if (near.length) {
        this.ui.context(this.mobile ? 'STICK' : 'SPACE', 'LAND ON THE RAIL');
      } else {
        this.ui.hideContext();
      }
      return;
    }
    const near = this.world.railsNear(this.x, this.z, 2.3);
    if (near.length) {
      this.ui.context(this.mobile ? 'OLLIE' : 'SPACE', `OLLIE TO GRIND · ${near[0].rail.name}`);
    } else if (Math.abs(this.speed) > 1.5) {
      this.ui.hideContext();
    } else {
      this.ui.context(this.mobile ? 'STICK ↑' : 'W', 'PUSH TO BUILD SPEED');
    }
  }

  /* ------------------------------------------------------------ Camera */
  updateCamera(dt, snap = false) {
    const f = { x: Math.sin(this.yaw), z: Math.cos(this.yaw) };
    const air = !this.grounded && !this.grindRail;
    const speed = Math.abs(this.speed);
    let dist = (this.mobile ? 5.9 : 4.95) + speed * 0.085 + (air ? 0.6 : 0);
    let height = (this.mobile ? 2.45 : 2.08) + Math.min(0.65, speed * 0.02) + (air ? 0.38 : 0);
    if (this.grindRail) {
      dist = this.mobile ? 4.9 : 4.35;
      height = 1.9;
    }
    const side = (this.grindRail ? 0 : -this.steer * 0.55) * (this.grounded ? 1 : 0.3);
    const target = new THREE.Vector3(
      this.x - f.x * dist + f.z * side,
      this.y + height,
      this.z - f.z * dist - f.x * side,
    );

    const camGround = this.world.groundHeight(target.x, target.z, target.y);
    if (target.y < camGround + 0.85) target.y = camGround + 0.85;

    if (snap) this.camera.position.copy(target);
    else {
      const k = 1 - Math.exp(-dt * 4.6);
      this.camera.position.x = lerp(this.camera.position.x, target.x, k);
      this.camera.position.y = lerp(this.camera.position.y, target.y, k);
      this.camera.position.z = lerp(this.camera.position.z, target.z, k);
    }

    const look = new THREE.Vector3(
      this.x + f.x * (this.grindRail ? 1.8 : 2.5),
      this.y + (this.grindRail ? 0.95 : 1.02),
      this.z + f.z * (this.grindRail ? 1.8 : 2.5),
    );
    this.camera.lookAt(look);
    if (this.shake > 0.001) {
      const s = this.shake * 0.085;
      this.camera.position.x += (Math.random() - 0.5) * s;
      this.camera.position.y += (Math.random() - 0.5) * s;
      this.camera.position.z += (Math.random() - 0.5) * s;
    }
    const targetFov = this.baseFov + Math.min(12, speed * 0.62) + (air ? 1.5 : 0);
    this.camera.fov += (targetFov - this.camera.fov) * Math.min(1, dt * 5);
    this.camera.updateProjectionMatrix();
  }

  /* ------------------------------------------------------------ HUD */
  visualState() {
    const anim = this.boardAnim || this.activeTricks.find((t) => !t.done);
    return {
      x: this.x,
      y: this.y,
      z: this.z,
      yaw: this.yaw,
      speed: this.speed,
      steer: this.steer,
      lean: this.lean,
      pitch: this.pitch,
      grounded: this.grounded,
      airTime: this.airTime,
      spinAngle: this.spinAngle,
      crouch: this.crouch,
      pushing: this.grounded && !this.grindRail && (this.input ? this.input.throttle > 0.08 : false) && Math.abs(this.speed) < 13,
      grind: !!this.grindRail,
      trick: anim ? { type: anim.type, t: anim.t, duration: anim.duration } : null,
      bail: this.bail,
    };
  }

  hudData() {
    const letters = new Set(this.world.letters.filter((l) => l.taken).map((l) => l.letter));
    const progress = this.objectiveValue();
    const target = this.event.target || 0;
    return {
      score: this.score,
      timeLeft: this.timeLeft,
      event: this.event,
      progress,
      target,
      multiplier: this.multiplier,
      comboTimer: this.comboTimer,
      comboTimerMax: this.comboTimerMax,
      comboCount: this.comboCount,
      speed: Math.abs(this.speed) * 3.6,
      airTime: this.airTime,
      balance: this.grindBalance,
      grinding: !!this.grindRail,
      letters,
      best: this.event.id === 'free' ? this.progress.bestFree : (this.progress.best[this.event.id] || 0),
      goalComplete: this.goalComplete,
      free: this.event.id === 'free',
    };
  }
}

