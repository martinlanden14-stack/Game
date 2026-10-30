import * as THREE from '../vendor/three.module.js';
import {
  makeGlowTexture,
  makeBloodTexture
} from './textures.js';

const TAU = Math.PI * 2;
const MAG_SIZE = 30;
const DAMAGE = 34;
const FIRE_RATE = 0.098;
const RELOAD_TIME = 1.45;
const PLAYER_HEIGHT = 1.68;

const groundHeight = (x, z) => {
  const flat = Math.max(0, Math.min(1, (Math.hypot(x, z) - 6) / 16));
  return (Math.sin(x * 0.17) * Math.cos(z * 0.13) * 0.32
    + Math.sin(x * 0.43 + z * 0.27) * 0.12
    + Math.cos(x * 0.09 - z * 0.21) * 0.22) * flat;
};

function damp(current, target, lambda, dt) {
  return THREE.MathUtils.lerp(current, target, 1 - Math.exp(-lambda * dt));
}

export class Player {
  constructor(camera, scene, world, sound, hud, controls, zombieManager, callbacks) {
    this.camera = camera;
    this.scene = scene;
    this.world = world;
    this.sound = sound;
    this.hud = hud;
    this.controls = controls;
    this.zombies = zombieManager;
    this.callbacks = callbacks;
    this.position = new THREE.Vector3(0, 0, 8);
    this.yaw = 0;
    this.pitch = -0.03;
    this.health = 100;
    this.ammo = MAG_SIZE;
    this.reserve = Infinity;
    this.score = 0;
    this.kills = 0;
    this.reloading = false;
    this.reloadTimer = 0;
    this.fireTimer = 0;
    this.timeSinceDamage = 99;
    this.recoil = 0;
    this.recoilYaw = 0;
    this.recoilPitch = 0;
    this.shake = 0;
    this.bobTime = 0;
    this.dead = false;
    this.deathTime = 0;
    this.lastHealthShown = 100;
    this.firingHeld = false;
    this.raycaster = new THREE.Raycaster();
    this.raycaster.far = 120;
    this.origin = new THREE.Vector3();
    this.direction = new THREE.Vector3();
    this.right = new THREE.Vector3();
    this.up = new THREE.Vector3();
    this.target = new THREE.Vector3();
    this.bursts = [];
    this.tracers = [];
    this.casings = [];
    this.decals = [];
    this.glow = makeGlowTexture('255,255,255', 2.0);
    this.emberGlow = makeGlowTexture('255,164,74', 1.7);
    this.bloodTexture = makeBloodTexture();
    this.casingGeo = new THREE.CylinderGeometry(0.011, 0.011, 0.045, 5);
    this.casingMat = new THREE.MeshStandardMaterial({ color: 0xc7973d, metalness: 0.9, roughness: 0.3 });
    this.tmpMuzzle = new THREE.Vector3();
    this.buildWeapon();
    this.buildFlashlight();
    this.camera.rotation.order = 'YXZ';
  }

  buildFlashlight() {
    const light = new THREE.SpotLight(0xdbe5ff, 48, 52, 0.56, 0.82, 1.3);
    light.layers.set(1);
    light.position.set(0.1, -0.04, 0.06);
    light.castShadow = false;
    const target = new THREE.Object3D();
    target.position.set(0.02, -0.15, -1);
    this.camera.add(light);
    this.camera.add(target);
    light.target = target;
    this.flashlight = light;
    const fill = new THREE.PointLight(0xdce7ff, 1.2, 3.4, 1.4);
    fill.position.set(0.5, 0.55, 0.35);
    fill.layers.set(2);
    this.camera.add(fill);
    this.weaponFill = fill;
    const key = new THREE.DirectionalLight(0xe9f1ff, 1.1);
    key.position.set(0.8, 1.2, 0.7);
    key.target.position.set(0.2, -0.2, -0.55);
    key.layers.set(2);
    this.camera.add(key);
    this.camera.add(key.target);
    this.weaponKey = key;
    const weaponAmbient = new THREE.AmbientLight(0xaebfe0, 0.66);
    weaponAmbient.layers.set(2);
    this.scene.add(weaponAmbient);
    this.weaponAmbient = weaponAmbient;
  }

  buildWeapon() {
    const gunMetal = new THREE.MeshStandardMaterial({
      color: 0x848d99,
      metalness: 0.26,
      roughness: 0.36
    });
    const gunDark = new THREE.MeshStandardMaterial({
      color: 0x474e58,
      metalness: 0.32,
      roughness: 0.42
    });
    const polymer = new THREE.MeshStandardMaterial({
      color: 0x282c33,
      metalness: 0.14,
      roughness: 0.64
    });
    const accent = new THREE.MeshStandardMaterial({
      color: 0xb7372a,
      metalness: 0.35,
      roughness: 0.48,
      emissive: 0x1b0302
    });
    const skin = new THREE.MeshStandardMaterial({ color: 0xae8165, roughness: 0.72, metalness: 0.02 });
    const glove = new THREE.MeshStandardMaterial({ color: 0x3a3b40, roughness: 0.85, metalness: 0.05 });
    const sleeve = new THREE.MeshStandardMaterial({ color: 0x3d4539, roughness: 0.94, metalness: 0.02 });
    this.gunMaterials = [gunMetal, gunDark, polymer, accent, skin, glove, sleeve];

    const root = new THREE.Group();
    root.position.set(this.controls.mobile ? 0.11 : 0.285, this.controls.mobile ? -0.2 : -0.235, -0.55);
    if (this.controls.mobile) root.scale.setScalar(0.86);
    root.rotation.set(0.015, -0.035, -0.015);
    root.renderOrder = 2;
    this.camera.add(root);
    this.weaponRoot = root;
    this.weaponBase = root.position.clone();
    this.weaponBaseRot = root.rotation.clone();

    const add = (geo, mat, x, y, z, rx = 0, ry = 0, rz = 0) => {
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      mesh.rotation.set(rx, ry, rz);
      mesh.renderOrder = 2;
      mesh.frustumCulled = false;
      root.add(mesh);
      return mesh;
    };

    add(new THREE.BoxGeometry(0.11, 0.115, 0.43), gunDark, 0, 0, -0.02);
    add(new THREE.BoxGeometry(0.083, 0.075, 0.27), polymer, 0, 0.004, -0.31);
    add(new THREE.BoxGeometry(0.06, 0.02, 0.35), gunDark, 0, 0.074, -0.03);
    for (let i = 0; i < 9; i++) {
      add(new THREE.BoxGeometry(0.064, 0.006, 0.017), gunMetal, 0, 0.084, -0.175 + i * 0.038);
    }
    add(new THREE.BoxGeometry(0.066, 0.024, 0.06), gunMetal, 0, 0.09, -0.19);
    add(new THREE.BoxGeometry(0.045, 0.075, 0.06), gunMetal, 0, 0.105, -0.03);
    add(new THREE.BoxGeometry(0.07, 0.03, 0.04), gunMetal, 0, 0.03, -0.5);
    add(new THREE.CylinderGeometry(0.024, 0.024, 0.36, 10), gunMetal, 0, 0.012, -0.5, Math.PI / 2, 0, 0);
    add(new THREE.CylinderGeometry(0.038, 0.033, 0.1, 8), gunDark, 0, 0.012, -0.71, Math.PI / 2, 0, 0);
    add(new THREE.CylinderGeometry(0.027, 0.027, 0.045, 8), accent, 0, 0.012, -0.77, Math.PI / 2, 0, 0);
    add(new THREE.BoxGeometry(0.06, 0.1, 0.26), polymer, 0, -0.01, 0.3);
    add(new THREE.BoxGeometry(0.075, 0.14, 0.045), gunDark, 0, -0.012, 0.44);
    add(new THREE.BoxGeometry(0.052, 0.13, 0.07), polymer, 0, -0.108, 0.09, 0.26, 0, 0);
    add(new THREE.BoxGeometry(0.058, 0.052, 0.03), gunDark, 0, -0.165, 0.125);
    const mag = add(new THREE.BoxGeometry(0.056, 0.18, 0.085), gunMetal, 0, -0.115, -0.02, 0.14, 0, 0);
    this.mag = mag;
    this.magBase = mag.position.clone();
    add(new THREE.BoxGeometry(0.07, 0.018, 0.1), accent, 0, -0.02, -0.46);

    add(new THREE.TorusGeometry(0.038, 0.007, 5, 10), gunDark, 0, -0.065, 0.055, Math.PI / 2, 0, 0);

    const opticBase = add(new THREE.BoxGeometry(0.05, 0.026, 0.09), gunDark, 0.0, 0.092, -0.1);
    opticBase.rotation.x = 0;
    add(new THREE.CylinderGeometry(0.029, 0.029, 0.075, 10), gunDark, 0, 0.118, -0.1, Math.PI / 2, 0, 0);
    const dot = add(new THREE.SphereGeometry(0.012, 6, 5), new THREE.MeshBasicMaterial({ color: 0xff1e14 }), 0, 0.118, -0.137);
    dot.renderOrder = 3;
    const dotGlow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: makeGlowTexture('255,40,24', 1.5),
      color: 0xff2a18,
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    }));
    dotGlow.position.set(0, 0.118, -0.14);
    dotGlow.scale.set(0.08, 0.08, 1);
    root.add(dotGlow);

    add(new THREE.BoxGeometry(0.012, 0.05, 0.03), gunDark, 0, 0.09, -0.36);
    add(new THREE.BoxGeometry(0.012, 0.035, 0.03), gunMetal, 0, 0.068, -0.36);

    for (let i = 0; i < 4; i++) {
      add(new THREE.BoxGeometry(0.086, 0.012, 0.045), gunDark, 0, 0.016, -0.2 - i * 0.055);
    }

    const rightHand = add(new THREE.BoxGeometry(0.075, 0.115, 0.1), glove, 0.005, -0.108, 0.095, 0.22, 0, 0);
    rightHand.renderOrder = 3;
    const rightFinger = add(new THREE.BoxGeometry(0.07, 0.035, 0.095), skin, 0.0, -0.055, 0.055, 0.28, 0, 0);
    rightFinger.renderOrder = 3;

    const leftHand = add(new THREE.BoxGeometry(0.082, 0.075, 0.13), glove, -0.005, -0.03, -0.32, 0.05, 0, 0);
    leftHand.renderOrder = 3;
    for (let i = 0; i < 3; i++) {
      const finger = add(new THREE.BoxGeometry(0.022, 0.07, 0.035), glove, -0.028 + i * 0.024, -0.062, -0.33, 0.55, 0, 0);
      finger.renderOrder = 3;
    }

    const muzzle = new THREE.Object3D();
    muzzle.position.set(0, 0.012, -0.8);
    root.add(muzzle);
    this.muzzle = muzzle;

    const flash = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this.emberGlow,
      color: 0xffd27a,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    }));
    flash.position.copy(muzzle.position);
    flash.scale.set(0.7, 0.7, 1);
    flash.visible = false;
    flash.renderOrder = 4;
    root.add(flash);
    this.muzzleFlash = flash;

    const flashLight = new THREE.PointLight(0xffb45c, 0, 13, 2);
    flashLight.position.copy(muzzle.position);
    flashLight.layers.set(2);
    root.add(flashLight);
    this.muzzleLight = flashLight;

    root.traverse((o) => {
      if (o.isMesh || o.isSprite) o.layers.set(2);
    });
    this.flashTimer = 0;
  }

  reset() {
    this.position.set(0, 0, 8);
    this.yaw = 0;
    this.pitch = -0.03;
    this.health = 100;
    this.ammo = MAG_SIZE;
    this.reserve = Infinity;
    this.score = 0;
    this.kills = 0;
    this.reloading = false;
    this.reloadTimer = 0;
    this.fireTimer = 0;
    this.timeSinceDamage = 99;
    this.recoil = 0;
    this.recoilYaw = 0;
    this.recoilPitch = 0;
    this.shake = 0;
    this.bobTime = 0;
    this.dead = false;
    this.deathTime = 0;
    this.firingHeld = false;
    this.hud.comboReset();
    this.hud.setHealth(this.health);
    this.hud.setAmmo(this.ammo, this.reserve, false);
    this.hud.setScore(0);
    this.hud.setKills(0);
    this.camera.position.set(0, PLAYER_HEIGHT, 8);
    this.camera.rotation.set(this.pitch, this.yaw, 0);
    this.weaponRoot.position.copy(this.weaponBase);
    this.weaponRoot.rotation.copy(this.weaponBaseRot);
    if (this.mag) {
      this.mag.position.copy(this.magBase);
      this.mag.rotation.set(0.14, 0, 0);
    }
    for (const b of this.bursts) this.scene.remove(b.points);
    for (const t of this.tracers) this.scene.remove(t.line);
    for (const c of this.casings) this.scene.remove(c.mesh);
    for (const d of this.decals) this.scene.remove(d.mesh);
    this.bursts = [];
    this.tracers = [];
    this.casings = [];
    this.decals = [];
  }

  onWave(wave, count) {
    this.hud.setWave(wave);
    this.hud.setThreat(count, count);
    this.hud.banner(`WAVE ${String(wave).padStart(2, '0')}`, wave === 1 ? 'THE DEAD ARE COMING' : `${count} HOSTILES INBOUND`, 3.4);
    if (wave > 1) {
      this.score += 200 + wave * 100;
      this.hud.setScore(this.score);
    }
  }

  onWaveClear(wave) {
    this.score += 250 * wave;
    this.hud.setScore(this.score);
    this.hud.banner('WAVE CLEARED', 'REGROUP // NEXT WAVE INBOUND', 3.2);
  }

  onKill(zombie, headshot) {
    this.kills++;
    this.hud.comboUp();
    const mult = Math.min(6, Math.max(1, this.hud.combo));
    const base = zombie.cfg.score;
    this.score += Math.round(base * (headshot ? 1.6 : 1) * mult);
    this.hud.setScore(this.score);
    this.hud.setKills(this.kills);
    const names = { walker: 'WALKER', runner: 'RUNNER', brute: 'BRUTE' };
    this.hud.killFeed(names[zombie.type] || 'WALKER', headshot);
    this.sound.kill();
    this.addBloodDecal(zombie.root.position);
    if (this.health < 100) {
      this.health = Math.min(100, this.health + 3);
      this.hud.setHealth(this.health);
    }
  }

  onAttack(zombie) {
    if (this.dead) return;
    this.health -= zombie.damage;
    this.timeSinceDamage = 0;
    this.shake = Math.max(this.shake, 0.07);
    this.hud.setHealth(this.health);
    this.hud.damage();
    this.sound.hurt();
    if (this.health <= 0) {
      this.health = 0;
      this.die();
    }
  }

  die() {
    if (this.dead) return;
    this.dead = true;
    this.deathTime = 0;
    this.reloading = false;
    this.sound.death();
    this.hud.setHealth(0);
    if (this.callbacks.onDeath) this.callbacks.onDeath();
  }

  update(dt, elapsed, state) {
    const playing = state === 'playing';
    const look = this.controls.consumeLook();
    if (playing || state === 'dead') {
      this.yaw -= look.x;
      this.pitch -= look.y;
      this.pitch = Math.max(-1.05, Math.min(1.05, this.pitch));
    }
    if (playing) this.updateMovement(dt, elapsed);
    this.updateWeapon(dt, elapsed, playing);
    this.updateCamera(dt, elapsed, state);
    if (playing) {
      this.updateCombat(dt, elapsed);
      this.updateHealth(dt, elapsed);
    }
    this.updateEffects(dt);
    if (this.flashTimer > 0) {
      this.flashTimer -= dt;
      if (this.flashTimer <= 0) {
        this.muzzleFlash.visible = false;
        this.muzzleLight.intensity = 0;
      } else {
        this.muzzleFlash.material.opacity = Math.max(0, this.flashTimer / 0.05);
        this.muzzleLight.intensity = 18 * (this.flashTimer / 0.05);
      }
    }
    if (this.dead) this.deathTime += dt;
  }

  updateMovement(dt, elapsed) {
    const move = this.controls.move;
    const speed = this.controls.sprint ? 5.15 : 3.45;
    const forward = this.tmpForward || (this.tmpForward = new THREE.Vector3());
    const right = this.tmpRight || (this.tmpRight = new THREE.Vector3());
    forward.set(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    right.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
    const dirX = forward.x * move.y + right.x * move.x;
    const dirZ = forward.z * move.y + right.z * move.x;
    const len = Math.hypot(dirX, dirZ);
    let moving = false;
    if (len > 0.05) {
      const nx = dirX / len;
      const nz = dirZ / len;
      this.position.x += nx * speed * dt;
      this.position.z += nz * speed * dt;
      moving = true;
    }
    this.world.collide(this.position, 0.34);
    this.position.y = groundHeight(this.position.x, this.position.z);

    const targetBob = moving ? (this.controls.sprint ? 11.5 : 8.2) : 1.3;
    this.bobTime += dt * targetBob;
    this.moving = moving;
    this.currentSpeed = moving ? speed : 0;
    this.moveAmount = damp(this.moveAmount || 0, moving ? (this.controls.sprint ? 1 : 0.7) : 0, 8, dt);
  }

  updateHealth(dt, elapsed) {
    this.timeSinceDamage += dt;
    if (this.health > 0 && this.health < 100 && this.timeSinceDamage > 5.5) {
      this.health = Math.min(100, this.health + 9 * dt);
      if (Math.floor(this.health) !== this.lastHealthShown) {
        this.lastHealthShown = Math.floor(this.health);
        this.hud.setHealth(this.health);
      }
    }
    if (this.shake > 0) this.shake = Math.max(0, this.shake - dt * 0.38);
  }

  updateCombat(dt, elapsed) {
    this.fireTimer = Math.max(0, this.fireTimer - dt);
    if (this.controls.consumeReload()) this.reload();
    if (this.reloading) {
      this.reloadTimer += dt;
      if (this.reloadTimer >= RELOAD_TIME) {
        this.reloading = false;
        this.ammo = MAG_SIZE;
        this.hud.setAmmo(this.ammo, this.reserve, false);
      }
    }
    const wantsFire = this.controls.firing;
    if (wantsFire && !this.reloading) {
      if (this.ammo <= 0) {
        if (!this.firingHeld) this.sound.dryFire();
        this.reload();
      } else if (this.fireTimer <= 0) {
        this.shoot(elapsed);
      }
    }
    this.firingHeld = wantsFire;
    if (this.controls.reloadQueued) this.controls.reloadQueued = false;
    this.hud.setThreat(this.zombies.alive() + this.zombies.spawnQueue.length, Math.max(1, this.zombies.waveTotal || 1));
  }

  reload() {
    if (this.reloading || this.ammo >= MAG_SIZE) return;
    this.reloading = true;
    this.reloadTimer = 0;
    this.sound.reload();
    this.hud.setAmmo(this.ammo, this.reserve, true);
  }

  shoot(elapsed) {
    this.ammo--;
    this.fireTimer = FIRE_RATE;
    this.sound.gunshot();
    this.hud.setAmmo(this.ammo, this.reserve, false);
    this.hud.setCrosshair(0.42);
    this.recoil = Math.min(1.6, this.recoil + 0.55);
    this.recoilPitch = Math.min(0.12, (this.recoilPitch || 0) + 0.018);
    this.recoilYaw += (Math.random() - 0.5) * 0.022;
    this.shake = Math.max(this.shake, 0.018);
    this.flashTimer = 0.05;
    this.muzzleFlash.visible = true;
    this.muzzleFlash.material.opacity = 1;
    this.muzzleFlash.material.rotation = Math.random() * TAU;
    const s = 0.62 + Math.random() * 0.42;
    this.muzzleFlash.scale.set(s, s, 1);
    this.muzzleLight.intensity = 18;
    this.ejectCasing();

    this.camera.updateMatrixWorld(true);
    this.weaponRoot.updateMatrixWorld(true);
    const origin = this.camera.getWorldPosition(this.origin);
    const baseDir = this.direction.set(0, 0, -1).applyQuaternion(this.camera.quaternion).normalize();

    const assist = this.findAimAssist(origin, baseDir);
    let dir = baseDir;
    if (assist) {
      dir = baseDir.clone().lerp(assist.dir, this.controls.mobile ? 0.82 : 0.7).normalize();
    }

    const spread = 0.004 + this.recoil * 0.013;
    this.right.set(1, 0, 0).applyQuaternion(this.camera.quaternion);
    this.up.set(0, 1, 0).applyQuaternion(this.camera.quaternion);
    dir.addScaledVector(this.right, (Math.random() - 0.5) * spread * 2);
    dir.addScaledVector(this.up, (Math.random() - 0.5) * spread * 2);
    dir.normalize();

    this.raycaster.set(origin, dir);
    const targets = this.zombies.getHitMeshes().concat(this.world.hitMeshes);
    const intersections = this.raycaster.intersectObjects(targets, false);
    let end = origin.clone().addScaledVector(dir, 70);
    let hitZombie = null;
    for (const hit of intersections) {
      const z = hit.object.userData.zombie;
      if (z && z.dead) continue;
      end = hit.point.clone();
      if (z) hitZombie = { zombie: z, part: hit.object.userData.part, point: hit.point.clone(), normal: hit.face?.normal };
      else this.spawnImpact(hit.point, hit.face ? hit.face.normal : null);
      break;
    }

    this.muzzle.updateMatrixWorld(true);
    const muzzlePos = this.muzzle.getWorldPosition(this.tmpMuzzle);
    this.spawnTracer(muzzlePos, end);

    if (hitZombie) {
      const result = hitZombie.zombie.hit(hitZombie.part, DAMAGE);
      this.spawnBlood(hitZombie.point, result.headshot ? 22 : 14);
      this.hud.hitmarker(result.killed, result.headshot);
      this.hud.damageNumber(hitZombie.point, this.camera, result.damage, result.headshot, result.killed);
      this.sound.hit(result.headshot);
      if (result.killed && this.ammo > 0) this.ammo = Math.min(MAG_SIZE, this.ammo + 1);
    }
  }

  findAimAssist(origin, baseDir) {
    let best = null;
    let bestScore = -Infinity;
    const threshold = this.controls.mobile ? 0.14 : 0.075;
    for (const z of this.zombies.list) {
      if (z.dead || z.state === 'spawning') continue;
      this.target.copy(z.root.position);
      this.target.y += 1.25 * z.scale;
      const dx = this.target.x - origin.x;
      const dy = this.target.y - origin.y;
      const dz = this.target.z - origin.z;
      const dist = Math.hypot(dx, dy, dz);
      if (dist > 42 || dist < 0.01) continue;
      const to = new THREE.Vector3(dx / dist, dy / dist, dz / dist);
      const angle = baseDir.angleTo(to);
      if (angle > threshold) continue;
      const score = 1 - angle / threshold + (1 - dist / 42) * 0.25;
      if (score > bestScore) {
        bestScore = score;
        best = { dir: to, zombie: z, dist };
      }
    }
    return best;
  }

  spawnTracer(start, end) {
    const geo = new THREE.BufferGeometry().setFromPoints([start, end]);
    const mat = new THREE.LineBasicMaterial({
      color: 0xffd69a,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const line = new THREE.Line(geo, mat);
    line.frustumCulled = false;
    this.scene.add(line);
    this.tracers.push({ line, life: 0.075, max: 0.075 });
  }

  spawnImpact(point, normal) {
    this.spawnBurst(point, 0xffb25a, 8, 2.6, 0.12, 8, 'spark');
    this.spawnBurst(point, 0x8b8274, 7, 1.2, 0.24, 2.4, 'dust');
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this.emberGlow,
      color: 0xffc070,
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    }));
    glow.position.copy(point);
    glow.scale.set(0.5, 0.5, 1);
    this.scene.add(glow);
    this.tracers.push({ line: null, sprite: glow, life: 0.12, max: 0.12 });
    if (normal) {
      point.addScaledVector(normal, 0.02);
    }
  }

  spawnBlood(point, count = 14) {
    this.spawnBurst(point, 0x6d0a10, count, 3.2, 0.15, 15, 'blood');
    this.spawnBurst(point, 0xa31418, Math.round(count * 0.5), 1.8, 0.23, 8, 'blood');
  }

  spawnBurst(point, color, count, speed, size, gravity, kind) {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = point.x;
      positions[i * 3 + 1] = point.y;
      positions[i * 3 + 2] = point.z;
      const a = Math.random() * TAU;
      const up = Math.random();
      const s = speed * (0.3 + Math.random() * 0.9);
      velocities[i * 3] = Math.cos(a) * s * (1 - up * 0.4);
      velocities[i * 3 + 1] = (0.25 + up) * s * 0.8;
      velocities[i * 3 + 2] = Math.sin(a) * s * (1 - up * 0.4);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const additive = kind === 'spark';
    const mat = new THREE.PointsMaterial({
      map: additive ? this.emberGlow : this.glow,
      color,
      size,
      transparent: true,
      opacity: additive ? 0.95 : 0.85,
      depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      sizeAttenuation: true
    });
    const points = new THREE.Points(geo, mat);
    points.frustumCulled = false;
    this.scene.add(points);
    this.bursts.push({ points, positions, velocities, life: 0, max: 0.65 + Math.random() * 0.35, gravity, kind });
  }

  spawnMuzzleSmoke() {
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this.glow,
      color: 0x8b8f96,
      transparent: true,
      opacity: 0.18,
      depthWrite: false
    }));
    const pos = this.muzzle.getWorldPosition(new THREE.Vector3());
    sprite.position.copy(pos);
    sprite.scale.set(0.4, 0.4, 1);
    this.scene.add(sprite);
    this.tracers.push({ line: null, sprite, life: 0.28, max: 0.28, expand: true });
  }

  ejectCasing() {
    const mesh = new THREE.Mesh(this.casingGeo, this.casingMat);
    this.muzzle.updateMatrixWorld(true);
    const pos = this.weaponRoot.localToWorld(new THREE.Vector3(0.07, 0.05, 0.02));
    mesh.position.copy(pos);
    mesh.rotation.set(Math.random() * TAU, Math.random() * TAU, Math.random() * TAU);
    this.scene.add(mesh);
    this.camera.getWorldDirection(this.direction);
    this.right.set(1, 0, 0).applyQuaternion(this.camera.quaternion);
    const vel = new THREE.Vector3()
      .addScaledVector(this.right, 1.6 + Math.random() * 1.2)
      .addScaledVector(this.direction, -0.5)
      .add(new THREE.Vector3(0, 1.5 + Math.random() * 1.2, 0));
    this.casings.push({ mesh, vel, spin: new THREE.Vector3((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20), life: 0, max: 1.4 });
    if (this.casings.length > 22) {
      const old = this.casings.shift();
      this.scene.remove(old.mesh);
    }
  }

  addBloodDecal(position) {
    const mat = new THREE.MeshBasicMaterial({
      map: this.bloodTexture,
      transparent: true,
      opacity: 0.72,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -1
    });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 1.4), mat);
    mesh.rotation.x = -Math.PI / 2;
    mesh.rotation.z = Math.random() * TAU;
    mesh.position.set(position.x, groundHeight(position.x, position.z) + 0.045, position.z);
    const s = 0.7 + Math.random() * 1.1;
    mesh.scale.set(s, s, 1);
    mesh.renderOrder = 1;
    this.scene.add(mesh);
    this.decals.push({ mesh, life: 0, max: 30 });
    if (this.decals.length > 34) {
      const old = this.decals.shift();
      this.scene.remove(old.mesh);
      old.mesh.geometry.dispose();
      old.mesh.material.dispose();
    }
  }

  updateWeapon(dt, elapsed, playing) {
    if (this.recoil > 0) this.recoil = Math.max(0, this.recoil - dt * 5.2);
    if (Math.abs(this.recoilYaw) > 0.0001) this.recoilYaw *= Math.exp(-dt * 7);
    const moveAmt = this.moveAmount || 0;
    const swayX = Math.sin(elapsed * 1.25) * 0.0035 + Math.sin(elapsed * 7.4) * 0.0022 * moveAmt;
    const swayY = Math.cos(elapsed * 1.6) * 0.003 + Math.abs(Math.sin(elapsed * 9.3)) * 0.005 * moveAmt;
    const reloadProgress = this.reloading ? Math.min(1, this.reloadTimer / RELOAD_TIME) : 0;
    const lower = this.reloading ? Math.sin(Math.min(1, reloadProgress) * Math.PI) : 0;
    const kick = this.recoil;
    const base = this.weaponBase;
    const rot = this.weaponBaseRot;
    this.weaponRoot.position.x = damp(this.weaponRoot.position.x, base.x + swayX - moveAmt * 0.012, 12, dt);
    this.weaponRoot.position.y = damp(this.weaponRoot.position.y, base.y + swayY - kick * 0.012 - lower * 0.13, 12, dt);
    this.weaponRoot.position.z = damp(this.weaponRoot.position.z, base.z + kick * 0.055 - lower * 0.03, 16, dt);
    this.weaponRoot.rotation.x = damp(this.weaponRoot.rotation.x, rot.x + kick * 0.11 + lower * 0.75, 14, dt);
    this.weaponRoot.rotation.y = damp(this.weaponRoot.rotation.y, rot.y + this.recoilYaw - moveAmt * Math.sin(elapsed * 4.1) * 0.01, 12, dt);
    this.weaponRoot.rotation.z = damp(this.weaponRoot.rotation.z, rot.z + lower * 0.42 + moveAmt * 0.015, 12, dt);
    if (this.mag) {
      this.mag.position.y = this.magBase.y - lower * 0.19;
      this.mag.rotation.z = lower * 0.55;
    }
    if (this.flashlight) {
      this.flashlight.intensity = 48 - kick * 3;
    }
    if (this.controls.mobile && playing) {
      const m = this.controls.move;
      if (m.lengthSq() > 0.01) this.weaponRoot.rotation.z += m.x * 0.012;
    }
  }

  updateCamera(dt, elapsed, state) {
    if (this.dead) {
      const t = Math.min(1, this.deathTime / 1.2);
      const fall = t * t;
      this.camera.position.y = damp(this.camera.position.y, PLAYER_HEIGHT - fall * 1.25, 5, dt);
      this.camera.rotation.z = damp(this.camera.rotation.z, fall * 0.55, 5, dt);
      this.camera.rotation.x = damp(this.camera.rotation.x, this.pitch - fall * 0.2, 5, dt);
      this.camera.rotation.y = this.yaw;
      return;
    }
    const moveAmt = this.moveAmount || 0;
    const bob = Math.sin(this.bobTime) * 0.028 * moveAmt;
    const sideBob = Math.cos(this.bobTime * 0.5) * 0.024 * moveAmt;
    this.recoilPitch = (this.recoilPitch || 0) * Math.exp(-dt * 8);
    const shakeX = (Math.random() - 0.5) * this.shake * 0.09;
    const shakeY = (Math.random() - 0.5) * this.shake * 0.09;
    this.camera.position.x = this.position.x + Math.cos(this.yaw) * sideBob + shakeX;
    this.camera.position.y = PLAYER_HEIGHT + bob + shakeY + this.position.y;
    this.camera.position.z = this.position.z - Math.sin(this.yaw) * sideBob;
    this.camera.rotation.y = this.yaw + (Math.random() - 0.5) * this.shake * 0.04;
    this.camera.rotation.x = this.pitch + this.recoilPitch + (Math.random() - 0.5) * this.shake * 0.04;
    this.camera.rotation.z = this.controls.mobile ? 0 : Math.sin(this.bobTime * 0.5) * 0.004 * moveAmt;
    const baseFov = this.controls.mobile ? 80 : 74;
    const targetFov = this.controls.sprint && moveAmt > 0.5 ? baseFov + 5 : baseFov;
    if (Math.abs(this.camera.fov - targetFov) > 0.05) {
      this.camera.fov = damp(this.camera.fov, targetFov, 5, dt);
      this.camera.updateProjectionMatrix();
    }
  }

  updateEffects(dt) {
    for (let i = this.bursts.length - 1; i >= 0; i--) {
      const b = this.bursts[i];
      b.life += dt;
      const t = b.life / b.max;
      if (t >= 1) {
        this.scene.remove(b.points);
        b.points.geometry.dispose();
        b.points.material.dispose();
        this.bursts.splice(i, 1);
        continue;
      }
      for (let j = 0; j < b.velocities.length / 3; j++) {
        const j3 = j * 3;
        b.positions[j3] += b.velocities[j3] * dt;
        b.positions[j3 + 1] += b.velocities[j3 + 1] * dt;
        b.positions[j3 + 2] += b.velocities[j3 + 2] * dt;
        b.velocities[j3 + 1] -= b.gravity * dt;
        if (b.positions[j3 + 1] < 0.03) {
          b.positions[j3 + 1] = 0.03;
          b.velocities[j3 + 1] *= -0.18;
          b.velocities[j3] *= 0.7;
          b.velocities[j3 + 2] *= 0.7;
        }
      }
      b.points.geometry.attributes.position.needsUpdate = true;
      b.points.material.opacity = (1 - t) * (b.kind === 'spark' ? 0.95 : 0.85);
    }

    for (let i = this.tracers.length - 1; i >= 0; i--) {
      const t = this.tracers[i];
      t.life -= dt;
      const p = Math.max(0, t.life / t.max);
      if (t.line) t.line.material.opacity = p * 0.85;
      if (t.sprite) {
        t.sprite.material.opacity = p * 0.8;
        if (t.expand) t.sprite.scale.setScalar(0.4 + (1 - p) * 0.9);
      }
      if (t.life <= 0) {
        if (t.line) {
          this.scene.remove(t.line);
          t.line.geometry.dispose();
          t.line.material.dispose();
        }
        if (t.sprite) {
          this.scene.remove(t.sprite);
          t.sprite.material.dispose();
        }
        this.tracers.splice(i, 1);
      }
    }

    for (let i = this.casings.length - 1; i >= 0; i--) {
      const c = this.casings[i];
      c.life += dt;
      c.vel.y -= 16 * dt;
      c.mesh.position.addScaledVector(c.vel, dt);
      c.mesh.rotation.x += c.spin.x * dt;
      c.mesh.rotation.y += c.spin.y * dt;
      c.mesh.rotation.z += c.spin.z * dt;
      if (c.mesh.position.y < 0.04) {
        c.mesh.position.y = 0.04;
        c.vel.y = Math.abs(c.vel.y) * 0.35;
        c.vel.x *= 0.6;
        c.vel.z *= 0.6;
        c.spin.multiplyScalar(0.6);
      }
      if (c.life > c.max) {
        this.scene.remove(c.mesh);
        this.casings.splice(i, 1);
      }
    }

    for (let i = this.decals.length - 1; i >= 0; i--) {
      const d = this.decals[i];
      d.life += dt;
      if (d.life > d.max - 5) d.mesh.material.opacity = Math.max(0, 0.72 * ((d.max - d.life) / 5));
      if (d.life > d.max) {
        this.scene.remove(d.mesh);
        d.mesh.geometry.dispose();
        d.mesh.material.dispose();
        this.decals.splice(i, 1);
      }
    }
  }

  addScore(points) {
    this.score += points;
    this.hud.setScore(this.score);
  }
}
