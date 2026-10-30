import * as THREE from '../vendor/three.module.js';
import {
  makeSkinTexture,
  makeClothTexture,
  makeGlowTexture,
  makeSmokeTexture,
  makeBloodTexture
} from './textures.js';

const TAU = Math.PI * 2;
const skinTexture = makeSkinTexture();
const eyeGlowTexture = makeGlowTexture('255,40,24', 2.0);
const smokeTexture = makeSmokeTexture();
const bloodTexture = makeBloodTexture();

const shirtPalettes = [
  [74, 50, 42],
  [56, 61, 53],
  [83, 45, 42],
  [50, 55, 68],
  [82, 68, 46]
];
const pantPalettes = [
  [42, 45, 50],
  [58, 52, 42],
  [35, 39, 45],
  [49, 42, 40]
];
const shirtTextures = shirtPalettes.map((c) => makeClothTexture(c));
const pantTextures = pantPalettes.map((c) => makeClothTexture(c));

function randomOf(array, random) {
  return array[Math.floor(random() * array.length)];
}

function angleLerp(a, b, t) {
  let d = ((b - a + Math.PI) % TAU) - Math.PI;
  if (d < -Math.PI) d += TAU;
  return a + d * t;
}

let idCounter = 1;

class Zombie {
  constructor(manager, position, type = 'walker', wave = 1) {
    this.manager = manager;
    this.id = idCounter++;
    this.type = type;
    this.wave = wave;
    this.state = 'spawning';
    this.spawnProgress = 0;
    this.phase = Math.random() * TAU;
    this.attackTimer = 0;
    this.attackAnim = 0;
    this.flash = 0;
    this.deathTime = 0;
    this.dead = false;
    this.growlTimer = 2 + Math.random() * 6;
    this.random = Math.random;
    this.wander = Math.random() * TAU;

    const cfg = type === 'runner'
      ? { speed: 2.55, health: 64, damage: 9, score: 160, scale: 0.9, radius: 0.42 }
      : type === 'brute'
        ? { speed: 0.92, health: 280, damage: 24, score: 450, scale: 1.33, radius: 0.62 }
        : { speed: 1.18, health: 100, damage: 13, score: 100, scale: 1, radius: 0.48 };
    this.cfg = cfg;
    this.speed = cfg.speed * (1 + (wave - 1) * 0.035);
    this.maxHealth = cfg.health + Math.max(0, wave - 1) * (type === 'brute' ? 26 : 7);
    this.health = this.maxHealth;
    this.damage = cfg.damage + Math.floor((wave - 1) * 0.8);
    this.radius = cfg.radius;
    this.scale = cfg.scale * (0.94 + Math.random() * 0.14);
    this.eyeColor = type === 'brute' ? 0xff1e0a : type === 'runner' ? 0xff3d1b : 0xff2a12;

    this.root = new THREE.Group();
    this.root.position.copy(position);
    this.root.position.y = manager.groundHeight(position.x, position.z);
    this.root.rotation.y = Math.random() * TAU;
    this.body = new THREE.Group();
    this.root.add(this.body);
    this.materials = [];
    this.eyeSprites = [];
    this.build();
    this.root.scale.setScalar(this.scale);
    this.root.traverse((o) => {
      if (o.isMesh || o.isSprite) o.layers.enable(1);
    });
    this.spawnPos = this.root.position.clone();
    this.root.position.y = this.spawnPos.y - 1.8;
    this.manager.scene.add(this.root);
    this.manager.hitMeshes.push(...this.hitMeshes);
  }

  makeMaterial(texture, color, roughness = 0.92, metalness = 0.02) {
    const mat = new THREE.MeshStandardMaterial({
      map: texture,
      color,
      roughness,
      metalness,
      emissive: 0x000000
    });
    this.materials.push(mat);
    return mat;
  }

  capsule(radius, length, material, segments = 7) {
    const geo = new THREE.CapsuleGeometry(radius, length, 4, segments);
    const mesh = new THREE.Mesh(geo, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
  }

  partMesh(mesh, part) {
    mesh.userData.zombie = this;
    mesh.userData.part = part;
    this.hitMeshes.push(mesh);
    return mesh;
  }

  build() {
    const random = this.random;
    const skinTint = this.type === 'brute' ? 0xb7c0a1 : 0xc9d1b1;
    const skin = this.makeMaterial(skinTexture, skinTint, 0.78, 0.01);
    const shirt = this.makeMaterial(randomOf(shirtTextures, random), 0xd8d2c8, 0.96, 0.0);
    const pants = this.makeMaterial(randomOf(pantTextures, random), 0xcfcac2, 0.97, 0.0);
    const dark = new THREE.MeshStandardMaterial({ color: 0x181716, roughness: 0.85 });
    const belt = new THREE.MeshStandardMaterial({ color: 0x2b241e, roughness: 0.8 });
    this.materials.push(dark, belt);
    this.skin = skin;
    this.shirt = shirt;
    this.pants = pants;
    this.darkMat = dark;
    this.hitMeshes = [];

    const body = this.body;
    const hipGroup = new THREE.Group();
    hipGroup.position.y = 0.9;
    body.add(hipGroup);

    const pelvis = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.26, 0.26), pants);
    pelvis.position.y = -0.03;
    pelvis.castShadow = true;
    this.partMesh(pelvis, 'body');
    hipGroup.add(pelvis);

    const beltMesh = new THREE.Mesh(new THREE.BoxGeometry(0.39, 0.075, 0.29), belt);
    beltMesh.position.y = 0.11;
    hipGroup.add(beltMesh);

    const torso = this.capsule(this.type === 'brute' ? 0.32 : 0.255, this.type === 'brute' ? 0.44 : 0.4, shirt, 8);
    torso.position.y = 0.4;
    torso.scale.set(this.type === 'brute' ? 1.28 : 1.02, 1, 0.7);
    torso.rotation.x = 0.12;
    this.partMesh(torso, 'body');
    hipGroup.add(torso);
    this.torso = torso;

    const stain = new THREE.MeshBasicMaterial({
      map: bloodTexture,
      transparent: true,
      opacity: 0.55,
      depthWrite: false
    });
    this.materials.push(stain);
    for (let i = 0; i < 2; i++) {
      const smear = new THREE.Mesh(new THREE.PlaneGeometry(0.26 + Math.random() * 0.16, 0.2 + Math.random() * 0.18), stain);
      smear.position.set((Math.random() - 0.5) * 0.22, 0.35 + Math.random() * 0.25, -0.19);
      smear.rotation.y = Math.PI;
      smear.rotation.z = Math.random() * Math.PI;
      hipGroup.add(smear);
    }

    const collar = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.035, 5, 10), shirt);
    collar.position.set(0, 0.71, 0);
    collar.rotation.x = Math.PI / 2;
    hipGroup.add(collar);

    const neck = this.capsule(0.07, 0.08, skin, 6);
    neck.position.y = 0.76;
    hipGroup.add(neck);

    const headPivot = new THREE.Group();
    headPivot.position.set(0, 0.84, 0);
    headPivot.rotation.x = -0.1;
    hipGroup.add(headPivot);
    this.headPivot = headPivot;

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.205, 12, 10), skin);
    head.position.y = 0.08;
    head.scale.set(1, 1.12, 0.94);
    head.castShadow = true;
    this.partMesh(head, 'head');
    headPivot.add(head);
    this.head = head;

    const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.075, 0.12), skin);
    jaw.position.set(0, -0.105, -0.12);
    jaw.rotation.x = 0.18;
    jaw.castShadow = true;
    headPivot.add(jaw);
    const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.035, 0.03), dark);
    mouth.position.set(0, -0.085, -0.175);
    headPivot.add(mouth);

    const brow = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.035, 0.06), skin);
    brow.position.set(0, 0.115, -0.15);
    brow.rotation.x = -0.2;
    headPivot.add(brow);

    const eyeGeo = new THREE.SphereGeometry(0.034, 6, 5);
    const eyeMat = new THREE.MeshBasicMaterial({ color: this.eyeColor });
    this.materials.push(eyeMat);
    for (const side of [-1, 1]) {
      const eye = new THREE.Mesh(eyeGeo, eyeMat);
      eye.position.set(side * 0.07, 0.055, -0.178);
      eye.scale.z = 0.5;
      headPivot.add(eye);
      const glow = new THREE.Sprite(new THREE.SpriteMaterial({
        map: eyeGlowTexture,
        color: this.eyeColor,
        transparent: true,
        opacity: 0.62,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      }));
      glow.position.copy(eye.position);
      glow.position.z -= 0.03;
      glow.scale.set(0.24, 0.24, 1);
      headPivot.add(glow);
      this.eyeSprites.push(glow);
    }

    if (random() > 0.55) {
      const hair = new THREE.Mesh(new THREE.SphereGeometry(0.205, 10, 6, 0, TAU, 0, Math.PI * 0.5), dark);
      hair.position.y = 0.26;
      hair.scale.set(1.01, 0.62, 0.95);
      headPivot.add(hair);
    }

    const armRadius = this.type === 'brute' ? 0.115 : this.type === 'runner' ? 0.07 : 0.083;
    const armLen = this.type === 'brute' ? 0.34 : 0.32;
    for (const side of [-1, 1]) {
      const shoulder = new THREE.Group();
      shoulder.position.set(side * (this.type === 'brute' ? 0.39 : 0.31), 0.61, 0);
      shoulder.rotation.x = -1.22;
      shoulder.rotation.z = side * -0.12;
      hipGroup.add(shoulder);
      const upper = this.capsule(armRadius, armLen, shirt, 6);
      upper.position.y = -armLen * 0.5 - armRadius * 0.35;
      this.partMesh(upper, 'limb');
      shoulder.add(upper);
      const elbow = new THREE.Group();
      elbow.position.y = -armLen - armRadius * 0.4;
      elbow.rotation.x = 0.35;
      shoulder.add(elbow);
      const lower = this.capsule(armRadius * 0.86, armLen * 0.9, skin, 6);
      lower.position.y = -armLen * 0.45 - armRadius * 0.3;
      this.partMesh(lower, 'limb');
      elbow.add(lower);
      const hand = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.16, 0.09), skin);
      hand.position.y = -armLen * 0.95 - armRadius * 0.55;
      hand.rotation.x = 0.2;
      hand.castShadow = true;
      this.partMesh(hand, 'limb');
      elbow.add(hand);
      for (let f = 0; f < 3; f++) {
        const finger = new THREE.Mesh(new THREE.BoxGeometry(0.026, 0.1, 0.028), skin);
        finger.position.set((f - 1) * 0.033, -0.11, -0.012);
        finger.rotation.x = 0.35;
        elbow.add(finger);
        hand.userData.fingers = (hand.userData.fingers || 0) + 1;
      }
      if (side < 0) {
        this.leftShoulder = shoulder;
        this.leftElbow = elbow;
      } else {
        this.rightShoulder = shoulder;
        this.rightElbow = elbow;
      }
    }

    const legRadius = this.type === 'brute' ? 0.145 : this.type === 'runner' ? 0.09 : 0.107;
    const legLen = this.type === 'brute' ? 0.46 : 0.44;
    for (const side of [-1, 1]) {
      const hip = new THREE.Group();
      hip.position.set(side * (this.type === 'brute' ? 0.18 : 0.145), -0.05, 0);
      hipGroup.add(hip);
      const upper = this.capsule(legRadius, legLen, pants, 6);
      upper.position.y = -legLen * 0.5 - legRadius * 0.35;
      this.partMesh(upper, 'limb');
      hip.add(upper);
      const knee = new THREE.Group();
      knee.position.y = -legLen - legRadius * 0.35;
      hip.add(knee);
      const lower = this.capsule(legRadius * 0.82, legLen * 0.92, pants, 6);
      lower.position.y = -legLen * 0.46 - legRadius * 0.3;
      this.partMesh(lower, 'limb');
      knee.add(lower);
      const foot = new THREE.Mesh(new THREE.BoxGeometry(legRadius * 2.1, 0.11, legRadius * 3.0), dark);
      foot.position.set(0, -legLen * 0.96 - legRadius * 0.26, -0.06);
      foot.castShadow = true;
      this.partMesh(foot, 'limb');
      knee.add(foot);
      if (side < 0) {
        this.leftHip = hip;
        this.leftKnee = knee;
      } else {
        this.rightHip = hip;
        this.rightKnee = knee;
      }
    }

    if (this.type === 'brute') {
      const plate = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.42, 0.1), dark);
      plate.position.set(0, 0.42, -0.23);
      hipGroup.add(plate);
    }

    this.body.rotation.x = this.type === 'runner' ? 0.17 : 0.06;
    this.walkPhase = 0;
  }

  faceTowards(x, z, dt) {
    const dx = x - this.root.position.x;
    const dz = z - this.root.position.z;
    const target = Math.atan2(-dx, -dz);
    this.root.rotation.y = angleLerp(this.root.rotation.y, target, Math.min(1, dt * 6));
  }

  hit(part, damage) {
    if (this.dead || this.state === 'spawning') return { killed: false, damage: 0, headshot: false };
    const headshot = part === 'head';
    const limb = part === 'limb';
    const mult = headshot ? 2.85 : limb ? 0.72 : 1;
    const dealt = Math.round(damage * mult);
    this.health -= dealt;
    this.flash = 0.11;
    if (this.health <= 0) {
      this.die(headshot);
      return { killed: true, damage: dealt, headshot };
    }
    return { killed: false, damage: dealt, headshot };
  }

  die(headshot) {
    this.dead = true;
    this.state = 'dying';
    this.deathTime = 0;
    this.manager.hitMeshes = this.manager.hitMeshes.filter((m) => !this.hitMeshes.includes(m));
    this.manager.onKill(this, headshot);
  }

  update(dt, elapsed, playerPos, active) {
    if (this.state === 'dying') {
      this.deathTime += dt;
      const t = Math.min(1, this.deathTime / 0.7);
      this.body.rotation.x = -t * Math.PI * 0.5;
      this.body.position.y = -t * 0.72;
      this.body.rotation.z = Math.sin(t * Math.PI) * 0.18;
      if (this.deathTime > 2.4) {
        const fade = Math.max(0, 1 - (this.deathTime - 2.4) / 2.2);
        for (const mat of this.materials) {
          mat.transparent = true;
          mat.opacity = fade;
        }
        for (const sprite of this.eyeSprites) sprite.material.opacity = fade * 0.62;
      }
      return;
    }

    if (this.state === 'spawning') {
      this.spawnProgress = Math.min(1, this.spawnProgress + dt * 2.1);
      const p = this.spawnProgress;
      this.root.position.y = this.spawnPos.y - (1 - p) * 1.55;
      if (p >= 1) this.state = 'walking';
      this.animate(dt, elapsed, 0, false);
      return;
    }

    const dx = playerPos.x - this.root.position.x;
    const dz = playerPos.z - this.root.position.z;
    const dist = Math.hypot(dx, dz);
    this.faceTowards(playerPos.x, playerPos.z, dt);

    if (active) {
      if (dist > 1.55 + this.radius * 0.4) {
        const speed = this.speed * (this.type === 'runner' ? (0.85 + Math.sin(elapsed * 2.2 + this.phase) * 0.15) : 1);
        const wobble = Math.sin(elapsed * 1.7 + this.phase) * (this.type === 'runner' ? 0.1 : 0.22);
        const nx = dx / (dist || 1);
        const nz = dz / (dist || 1);
        this.root.position.x += (nx - nz * wobble) * speed * dt;
        this.root.position.z += (nz + nx * wobble) * speed * dt;
        this.root.position.y = this.manager.groundHeight(this.root.position.x, this.root.position.z);
      } else {
        this.attackTimer -= dt;
        this.attackAnim = Math.min(1, this.attackAnim + dt * 4);
        if (this.attackTimer <= 0) {
          this.attackTimer = this.type === 'brute' ? 1.7 : this.type === 'runner' ? 1.05 : 1.35;
          this.attackAnim = 0;
          this.manager.onAttack(this);
        }
      }
      if (this.attackAnim > 0 && dist > 1.9) this.attackAnim = Math.max(0, this.attackAnim - dt * 3);
    }

    const r = Math.hypot(this.root.position.x, this.root.position.z - 8);
    if (r > 33) {
      const a = Math.atan2(this.root.position.z - 8, this.root.position.x);
      this.root.position.x = Math.cos(a) * 33;
      this.root.position.z = 8 + Math.sin(a) * 33;
    }

    this.growlTimer -= dt;
    if (this.growlTimer <= 0 && dist < 28) {
      this.growlTimer = 3 + Math.random() * 7;
      this.manager.queueGrowl(this);
    }

    this.animate(dt, elapsed, this.speed, active && dist <= 1.9);
  }

  animate(dt, elapsed, speed, attacking) {
    const gait = this.state === 'spawning' ? 0.25 : Math.min(1, speed / 1.6);
    this.walkPhase += dt * (2.1 + speed * 2.3);
    const swing = Math.sin(this.walkPhase);
    const bob = Math.abs(Math.sin(this.walkPhase * 2)) * 0.045 * gait;

    this.leftHip.rotation.x = swing * 0.58 * gait + 0.04;
    this.rightHip.rotation.x = -swing * 0.58 * gait + 0.04;
    this.leftKnee.rotation.x = Math.max(0, -swing) * 0.7 * gait + 0.06;
    this.rightKnee.rotation.x = Math.max(0, swing) * 0.7 * gait + 0.06;

    const attackWave = attacking ? Math.sin(elapsed * 8.2) * 0.5 + 0.5 : 0;
    const armSwing = Math.sin(this.walkPhase + Math.PI) * 0.11 * gait;
    if (this.type === 'runner') {
      this.leftShoulder.rotation.x = -0.9 + armSwing + attackWave * 0.55;
      this.rightShoulder.rotation.x = -0.9 - armSwing + attackWave * 0.55;
      this.leftShoulder.rotation.z = 0.12;
      this.rightShoulder.rotation.z = -0.12;
      this.leftElbow.rotation.x = 0.45;
      this.rightElbow.rotation.x = 0.45;
    } else {
      this.leftShoulder.rotation.x = -1.2 + armSwing - attackWave * 0.55;
      this.rightShoulder.rotation.x = -1.2 - armSwing - attackWave * 0.55;
      this.leftShoulder.rotation.z = -0.15 - (this.type === 'brute' ? 0.15 : 0);
      this.rightShoulder.rotation.z = 0.15 + (this.type === 'brute' ? 0.15 : 0);
      this.leftElbow.rotation.x = 0.3 + attackWave * 0.25;
      this.rightElbow.rotation.x = 0.3 + attackWave * 0.25;
    }

    this.body.position.y = bob;
    this.body.rotation.z = Math.sin(this.walkPhase) * 0.045 * gait;
    this.body.rotation.x = (this.type === 'runner' ? 0.17 : 0.06) + Math.sin(this.walkPhase * 2) * 0.025 * gait;
    this.headPivot.rotation.x = -0.1 + Math.sin(elapsed * 1.6 + this.phase) * 0.06 + (attacking ? 0.15 : 0);
    this.headPivot.rotation.y = Math.sin(elapsed * 0.9 + this.phase) * 0.12;
    this.headPivot.rotation.z = Math.sin(elapsed * 0.73 + this.phase) * 0.05;

    if (this.flash > 0) {
      this.flash = Math.max(0, this.flash - dt);
      const f = this.flash / 0.11;
      this.skin.emissive.setRGB(0.55 * f, 0.05 * f, 0.03 * f);
      this.shirt.emissive.setRGB(0.3 * f, 0.02 * f, 0.01 * f);
      this.pants.emissive.setRGB(0.24 * f, 0.02 * f, 0.01 * f);
    } else {
      this.skin.emissive.setRGB(0, 0, 0);
      this.shirt.emissive.setRGB(0, 0, 0);
      this.pants.emissive.setRGB(0, 0, 0);
    }
  }

  canRemove() {
    return this.state === 'dying' && this.deathTime > 4.7;
  }

  dispose() {
    this.manager.scene.remove(this.root);
    this.root.traverse((o) => {
      if (o.isMesh) o.geometry.dispose();
      if (o.isSprite) o.material.dispose();
    });
    for (const m of this.materials) m.dispose();
    this.manager.hitMeshes = this.manager.hitMeshes.filter((m) => !this.hitMeshes.includes(m));
  }
}

export class ZombieManager {
  constructor(scene, world, sound, callbacks) {
    this.scene = scene;
    this.world = world;
    this.sound = sound;
    this.callbacks = callbacks;
    this.list = [];
    this.hitMeshes = [];
    this.wave = 0;
    this.waveActive = false;
    this.waveTimer = 0;
    this.spawnQueue = [];
    this.spawnTimer = 0;
    this.betweenTimer = 0;
    this.growlCooldown = 0;
    this.growlQueue = [];
    this.effects = [];
    this.running = false;
    this.kills = 0;
    this.total = 0;
    this.random = Math.random;
  }

  groundHeight(x, z) {
    const flat = Math.max(0, Math.min(1, (Math.hypot(x, z) - 6) / 16));
    const h = (Math.sin(x * 0.17) * Math.cos(z * 0.13) * 0.32
      + Math.sin(x * 0.43 + z * 0.27) * 0.12
      + Math.cos(x * 0.09 - z * 0.21) * 0.22) * flat;
    return h;
  }

  reset() {
    for (const z of this.list) z.dispose();
    for (const e of this.effects) {
      this.scene.remove(e.sprite);
      e.sprite.material.dispose();
    }
    this.list = [];
    this.hitMeshes = [];
    this.effects = [];
    this.wave = 0;
    this.waveActive = false;
    this.spawnQueue = [];
    this.betweenTimer = 0;
    this.kills = 0;
    this.total = 0;
    this.running = false;
  }

  start(playerPos, cameraDir) {
    this.reset();
    this.running = true;
    this.beginWave(1, playerPos, cameraDir);
  }

  beginWave(waveNumber, playerPos, cameraDir) {
    this.wave = waveNumber;
    this.waveActive = true;
    const baseCount = Math.min(20, 4 + waveNumber * 2);
    this.spawnQueue = [];
    for (let i = 0; i < baseCount; i++) {
      let type = 'walker';
      const roll = Math.random();
      if (waveNumber >= 3 && roll < 0.13) type = 'brute';
      else if (waveNumber >= 2 && roll < 0.38) type = 'runner';
      this.spawnQueue.push({ type, delay: i === 0 ? 0 : 0.45 + i * 0.28 + Math.random() * 0.4 });
    }
    this.spawnTimer = 0;
    this.waveTotal = baseCount + (waveNumber === 1 ? 5 : 0);
    this.callbacks.onWave(waveNumber, baseCount);
    this.sound.wave();
    if (waveNumber === 1) {
      const offsets = [
        [-1.8, -5.6], [2.0, -8.4], [-2.6, -12.0], [2.6, -14.6], [0.6, -18.5]
      ];
      offsets.forEach(([x, z], i) => {
        this.spawnAt(playerPos.x + x, playerPos.z + z, i === 0 ? 'walker' : (i === 3 ? 'runner' : 'walker'));
      });
    }
  }

  spawnAt(x, z, type) {
    const pos = new THREE.Vector3(x, 0, z);
    for (const c of this.world.colliders) {
      if (Math.hypot(x - c.x, z - c.z) < c.r + 0.7) return null;
    }
    const zombie = new Zombie(this, pos, type, this.wave);
    this.list.push(zombie);
    this.total++;
    this.spawnEffect(x, z);
    return zombie;
  }

  spawnEffect(x, z) {
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: smokeTexture,
      color: 0x6b5b48,
      transparent: true,
      opacity: 0.65,
      depthWrite: false
    }));
    sprite.position.set(x, 0.4, z);
    sprite.scale.set(2.4, 1.2, 1);
    this.scene.add(sprite);
    this.effects.push({ sprite, life: 0, max: 1.1 });
  }

  pickSpawnPosition(playerPos) {
    for (let attempt = 0; attempt < 20; attempt++) {
      const a = Math.random() * TAU;
      const r = 20 + Math.random() * 9;
      const x = playerPos.x + Math.cos(a) * r;
      const z = playerPos.z + Math.sin(a) * r;
      const arena = Math.hypot(x, z - 8);
      if (arena > 31) continue;
      let blocked = false;
      for (const c of this.world.colliders) {
        if (Math.hypot(x - c.x, z - c.z) < c.r + 0.9) {
          blocked = true;
          break;
        }
      }
      if (!blocked) return { x, z };
    }
    return { x: playerPos.x + (Math.random() - 0.5) * 28, z: playerPos.z - 20 - Math.random() * 6 };
  }

  queueGrowl(zombie) {
    this.growlQueue.push(zombie);
  }

  onKill(zombie, headshot) {
    this.kills++;
    this.callbacks.onKill(zombie, headshot);
  }

  onAttack(zombie) {
    this.callbacks.onAttack(zombie);
  }

  raycastHit(intersections) {
    for (const hit of intersections) {
      const z = hit.object.userData.zombie;
      if (z && !z.dead) return { zombie: z, part: hit.object.userData.part, point: hit.point };
    }
    return null;
  }

  update(dt, elapsed, playerPos, camera, active) {
    if (!this.running) return;

    if (this.spawnQueue.length > 0) {
      this.spawnTimer -= dt;
      if (this.spawnTimer <= 0) {
        const next = this.spawnQueue[0];
        next.delay -= dt;
        if (next.delay <= 0) {
          this.spawnQueue.shift();
          const p = this.pickSpawnPosition(playerPos);
          this.spawnAt(p.x, p.z, next.type);
          this.spawnTimer = 0.18 + Math.random() * 0.45;
        } else {
          this.spawnTimer = 0;
        }
      }
    }

    for (const z of this.list) z.update(dt, elapsed, playerPos, active);

    const alive = this.list.filter((z) => !z.dead);
    for (let i = 0; i < alive.length; i++) {
      for (let j = i + 1; j < alive.length; j++) {
        const a = alive[i];
        const b = alive[j];
        const dx = b.root.position.x - a.root.position.x;
        const dz = b.root.position.z - a.root.position.z;
        const dist = Math.hypot(dx, dz);
        const min = (a.radius + b.radius) * 1.05;
        if (dist > 0.001 && dist < min) {
          const push = (min - dist) * 0.5;
          const nx = dx / dist;
          const nz = dz / dist;
          a.root.position.x -= nx * push;
          a.root.position.z -= nz * push;
          b.root.position.x += nx * push;
          b.root.position.z += nz * push;
        }
      }
      const pdx = alive[i].root.position.x - playerPos.x;
      const pdz = alive[i].root.position.z - playerPos.z;
      const pd = Math.hypot(pdx, pdz);
      if (pd < 1.15 && pd > 0.001) {
        alive[i].root.position.x = playerPos.x + (pdx / pd) * 1.15;
        alive[i].root.position.z = playerPos.z + (pdz / pd) * 1.15;
      }
    }

    for (let i = this.list.length - 1; i >= 0; i--) {
      if (this.list[i].canRemove()) {
        this.list[i].dispose();
        this.list.splice(i, 1);
      }
    }

    for (let i = this.effects.length - 1; i >= 0; i--) {
      const e = this.effects[i];
      e.life += dt;
      const t = e.life / e.max;
      e.sprite.scale.set(2.4 + t * 2.8, 1.2 + t * 1.8, 1);
      e.sprite.position.y = 0.4 + t * 0.7;
      e.sprite.material.opacity = 0.65 * (1 - t);
      if (t >= 1) {
        this.scene.remove(e.sprite);
        e.sprite.material.dispose();
        this.effects.splice(i, 1);
      }
    }

    this.growlCooldown -= dt;
    if (this.growlQueue.length > 0 && this.growlCooldown <= 0) {
      const z = this.growlQueue.shift();
      if (z && !z.dead && z.root.position.distanceTo(playerPos) < 32) {
        const dir = new THREE.Vector3().subVectors(z.root.position, playerPos);
        const right = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion);
        const pan = Math.max(-1, Math.min(1, dir.dot(right) / 12));
        this.sound.growl(pan, z.type === 'brute' ? 0.7 : z.type === 'runner' ? 1.28 : 1);
        this.growlCooldown = 1.4 + Math.random() * 2.2;
      }
    }

    const aliveNow = this.list.filter((z) => !z.dead).length;
    if (aliveNow === 0 && this.spawnQueue.length === 0 && this.waveActive) {
      this.waveActive = false;
      this.betweenTimer = 4.2;
      this.callbacks.onWaveClear(this.wave);
    }
    if (!this.waveActive && this.betweenTimer > 0) {
      this.betweenTimer -= dt;
      if (this.betweenTimer <= 0) {
        this.beginWave(this.wave + 1, playerPos, camera);
      }
    }
  }

  alive() {
    return this.list.filter((z) => !z.dead).length;
  }

  getHitMeshes() {
    return this.hitMeshes;
  }
}
