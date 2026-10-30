import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { deckTexture, gripTexture } from './textures.js';

const C = {
  skin: 0xd8a176,
  skinDark: 0xb97c55,
  hoodie: 0xe85a2a,
  hoodieDark: 0xbd3f18,
  pants: 0x26303f,
  pantsLight: 0x37455a,
  shoe: 0x1fd3b6,
  shoeSole: 0xf4eddf,
  cap: 0x11151d,
  capBrim: 0x2a303a,
  hair: 0x2b1b13,
  metal: 0xb6bcc4,
  wheel: 0xf3ead8,
  dark: 0x0b0d11,
  accent: 0xffd23f,
  griptape: 0x17181a,
};

function std(color, roughness = 0.72, metalness = 0.02, extra = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness, ...extra });
}

function shadow(mesh) {
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function mesh(geo, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  return shadow(m);
}

export class Skater {
  constructor() {
    this.root = new THREE.Group();
    this.root.name = 'skater';

    this.bodyYaw = new THREE.Group();
    this.root.add(this.bodyYaw);

    this.leanGroup = new THREE.Group();
    this.bodyYaw.add(this.leanGroup);

    this.boardGroup = new THREE.Group();
    this.boardGroup.position.y = 0.1;
    this.leanGroup.add(this.boardGroup);

    this.boardTrick = new THREE.Group();
    this.boardGroup.add(this.boardTrick);

    this.body = new THREE.Group();
    this.leanGroup.add(this.body);

    this.materials = {
      skin: std(C.skin, 0.82),
      skinDark: std(C.skinDark, 0.82),
      hoodie: std(C.hoodie, 0.9),
      hoodieDark: std(C.hoodieDark, 0.88),
      pants: std(C.pants, 0.86),
      pantsLight: std(C.pantsLight, 0.82),
      shoe: std(C.shoe, 0.66),
      shoeSole: std(C.shoeSole, 0.72),
      cap: std(C.cap, 0.78),
      capBrim: std(C.capBrim, 0.62),
      hair: std(C.hair, 0.9),
      metal: std(C.metal, 0.24, 0.9),
      wheel: std(C.wheel, 0.5, 0.02),
      dark: std(C.dark, 0.7),
      accent: std(C.accent, 0.5),
      grip: std(C.griptape, 0.95),
      deckWood: std(0x3a2418, 0.82),
    };

    this.buildBoard();
    this.buildBody();
    this.resetPose();

    this.time = 0;
    this.crouch = 0;
    this.tuck = 0;
    this.airPose = 0;
    this.pushPhase = 0;
    this.spin = 0;
    this.trickFlip = 0;
    this.trickYaw = 0;
    this.trickPitch = 0;
    this.bailTime = 0;
    this.landSquash = 0;
    this.lean = 0;
    this.currentTrick = null;
  }

  buildBoard() {
    const halfW = 0.105;
    const halfL = 0.4;

    // Deck silhouette: slightly tapered with rounded kicks.
    const shape = new THREE.Shape();
    shape.moveTo(-halfW * 0.82, -halfL);
    shape.quadraticCurveTo(-halfW, -halfL * 0.83, -halfW, -halfL * 0.55);
    shape.lineTo(-halfW, halfL * 0.55);
    shape.quadraticCurveTo(-halfW, halfL * 0.9, -halfW * 0.62, halfL);
    shape.quadraticCurveTo(0, halfL * 1.04, halfW * 0.62, halfL);
    shape.quadraticCurveTo(halfW, halfL * 0.9, halfW, halfL * 0.55);
    shape.lineTo(halfW, -halfL * 0.55);
    shape.quadraticCurveTo(halfW, -halfL * 0.83, halfW * 0.82, -halfL);
    shape.quadraticCurveTo(0, -halfL * 1.035, -halfW * 0.82, -halfL);

    const deckGeo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.035, bevelEnabled: true, bevelThickness: 0.004, bevelSize: 0.007, bevelSegments: 2, curveSegments: 6,
    });
    deckGeo.rotateX(-Math.PI / 2);
    deckGeo.translate(0, 0.02, 0);
    const deck = mesh(deckGeo, this.materials.deckWood);
    this.boardTrick.add(deck);

    // Grip tape and bottom graphic.
    const gripTex = gripTexture();
    const grip = new THREE.Mesh(new THREE.PlaneGeometry(0.195, 0.755), new THREE.MeshStandardMaterial({
      map: gripTex, roughness: 1, metalness: 0,
    }));
    grip.rotation.x = -Math.PI / 2;
    grip.position.y = 0.0405;
    this.boardTrick.add(grip);

    const deckTex = deckTexture();
    const bottom = new THREE.Mesh(new THREE.PlaneGeometry(0.195, 0.755), new THREE.MeshStandardMaterial({
      map: deckTex, roughness: 0.62, metalness: 0.05,
    }));
    bottom.rotation.x = Math.PI / 2;
    bottom.position.y = -0.0005;
    this.boardTrick.add(bottom);

    // Trucks.
    const truckMat = this.materials.metal;
    for (const z of [-0.28, 0.28]) {
      const base = mesh(new THREE.BoxGeometry(0.09, 0.012, 0.055), truckMat, 0, -0.003, z);
      this.boardTrick.add(base);
      const hanger = mesh(new RoundedBoxGeometry(0.15, 0.032, 0.04, 2, 0.01), truckMat, 0, -0.03, z);
      hanger.rotation.z = 0.02;
      this.boardTrick.add(hanger);
      const axle = mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.29, 8), truckMat, 0, -0.048, z);
      axle.rotation.z = Math.PI / 2;
      this.boardTrick.add(axle);

      for (const x of [-0.135, 0.135]) {
        const wheel = mesh(new THREE.CylinderGeometry(0.052, 0.052, 0.038, 18), this.materials.wheel, x, -0.048, z);
        wheel.rotation.z = Math.PI / 2;
        this.boardTrick.add(wheel);
        const hub = mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.041, 12), this.materials.wheel.clone(), x, -0.048, z);
        hub.material.color.setHex(0xd9c9aa);
        hub.rotation.z = Math.PI / 2;
        this.boardTrick.add(hub);
        const bearing = mesh(new THREE.CylinderGeometry(0.009, 0.009, 0.043, 8), this.materials.dark, x, -0.048, z);
        bearing.rotation.z = Math.PI / 2;
        this.boardTrick.add(bearing);
      }
    }

    // Warm underglow light strip for style at speed.
    const strip = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.55), new THREE.MeshBasicMaterial({
      color: 0xff6a2b, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    strip.rotation.x = Math.PI / 2;
    strip.position.y = -0.012;
    this.boardTrick.add(strip);
  }

  buildBody() {
    const p = this.materials;

    // Hips.
    const hips = new THREE.Group();
    hips.position.y = 0.91;
    this.body.add(hips);
    this.hips = hips;
    const pelvis = mesh(new RoundedBoxGeometry(0.28, 0.16, 0.19, 3, 0.05), p.pants, 0, -0.02, 0);
    hips.add(pelvis);

    // Torso / hoodie.
    const torso = new THREE.Group();
    torso.position.y = 0.26;
    hips.add(torso);
    this.torso = torso;
    const chest = mesh(new RoundedBoxGeometry(0.4, 0.46, 0.245, 4, 0.09), p.hoodie, 0, 0.23, 0);
    chest.scale.set(1, 1, 1);
    torso.add(chest);
    const chestLower = mesh(new RoundedBoxGeometry(0.34, 0.15, 0.22, 3, 0.06), p.hoodieDark, 0, 0.01, 0);
    torso.add(chestLower);

    // Hood behind neck.
    const hood = mesh(new THREE.SphereGeometry(0.15, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.82), p.hoodieDark, 0, 0.43, -0.075);
    hood.rotation.x = -0.58;
    hood.scale.set(1.05, 0.86, 0.82);
    torso.add(hood);

    // Kangaroo pocket + zip line + drawstrings.
    const pocket = mesh(new RoundedBoxGeometry(0.25, 0.11, 0.022, 2, 0.025), p.hoodieDark, 0, 0.07, 0.128);
    torso.add(pocket);
    const stringMat = std(0xf6f1e5, 0.9);
    for (const x of [-0.045, 0.045]) {
      const draw = mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.14, 5), stringMat, x, 0.36, 0.125);
      draw.rotation.x = 0.07;
      torso.add(draw);
      const tip = mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.018, 6), p.accent, x, 0.29, 0.129);
      torso.add(tip);
    }

    // Shoulders / arms.
    this.arms = [];
    for (const side of [-1, 1]) {
      const shoulder = new THREE.Group();
      shoulder.position.set(side * 0.225, 0.355, 0);
      torso.add(shoulder);

      const cap = mesh(new THREE.SphereGeometry(0.085, 12, 8), p.hoodie, 0, 0, 0);
      cap.scale.set(1, 1.15, 1);
      shoulder.add(cap);
      const upper = mesh(new THREE.CapsuleGeometry(0.052, 0.2, 4, 8), p.hoodie, 0, -0.14, 0);
      shoulder.add(upper);
      const elbow = new THREE.Group();
      elbow.position.y = -0.27;
      shoulder.add(elbow);
      const lower = mesh(new THREE.CapsuleGeometry(0.044, 0.18, 4, 8), p.hoodieDark, 0, -0.1, 0);
      elbow.add(lower);
      const hand = mesh(new THREE.SphereGeometry(0.056, 12, 8), p.skin, 0, -0.23, 0.008);
      hand.scale.set(0.9, 1.1, 0.78);
      elbow.add(hand);
      // Fingerless glove.
      const glove = mesh(new THREE.CylinderGeometry(0.052, 0.048, 0.055, 10), p.dark, 0, -0.2, 0.008);
      elbow.add(glove);
      this.arms.push({ shoulder, elbow, side });
    }

    // Neck and head.
    const neck = mesh(new THREE.CylinderGeometry(0.058, 0.062, 0.09, 10), p.skin, 0, 0.49, 0);
    torso.add(neck);
    const head = new THREE.Group();
    head.position.set(0, 0.585, 0);
    torso.add(head);
    this.head = head;
    const skull = mesh(new THREE.SphereGeometry(0.135, 20, 16), p.skin, 0, 0.03, 0);
    skull.scale.set(0.94, 1.04, 0.94);
    head.add(skull);
    const jaw = mesh(new THREE.SphereGeometry(0.096, 16, 12), p.skin, 0, -0.055, 0.045);
    jaw.scale.set(0.92, 0.82, 0.9);
    head.add(jaw);

    // Ears.
    for (const side of [-1, 1]) {
      const ear = mesh(new THREE.SphereGeometry(0.032, 8, 8), p.skinDark, side * 0.125, 0.015, 0.005);
      ear.scale.set(0.55, 1, 0.8);
      head.add(ear);
    }

    // Eyes behind shades.
    const shadeMat = new THREE.MeshStandardMaterial({ color: 0x090b0e, roughness: 0.2, metalness: 0.4 });
    const shades = mesh(new RoundedBoxGeometry(0.19, 0.055, 0.03, 2, 0.012), shadeMat, 0, 0.038, 0.123);
    head.add(shades);
    const glint = new THREE.Mesh(new THREE.PlaneGeometry(0.055, 0.012), new THREE.MeshBasicMaterial({ color: 0xbfe8ff, transparent: true, opacity: 0.7 }));
    glint.position.set(-0.045, 0.045, 0.141);
    glint.rotation.z = -0.1;
    head.add(glint);

    // Nose.
    const nose = mesh(new THREE.SphereGeometry(0.028, 8, 6), p.skinDark, 0, -0.005, 0.13);
    nose.scale.set(0.8, 1.2, 0.85);
    head.add(nose);

    // Backwards cap.
    const cap = mesh(new THREE.SphereGeometry(0.148, 18, 12, 0, Math.PI * 2, 0, Math.PI * 0.56), p.cap, 0, 0.06, -0.005);
    cap.scale.set(1.02, 0.9, 1.03);
    head.add(cap);
    const brim = mesh(new RoundedBoxGeometry(0.22, 0.022, 0.11, 2, 0.01), p.capBrim, 0, 0.05, -0.14);
    brim.rotation.x = 0.18;
    head.add(brim);
    const capButton = mesh(new THREE.SphereGeometry(0.02, 8, 6), p.accent, 0, 0.115, -0.005);
    head.add(capButton);
    const capLogo = new THREE.Mesh(new THREE.CircleGeometry(0.025, 16), new THREE.MeshBasicMaterial({ color: 0xff6a2b }));
    capLogo.position.set(0, 0.062, 0.143);
    head.add(capLogo);

    // Backpack.
    const pack = mesh(new RoundedBoxGeometry(0.28, 0.34, 0.13, 3, 0.045), std(0x1b2532, 0.88), 0, 0.18, -0.18);
    torso.add(pack);
    const flap = mesh(new RoundedBoxGeometry(0.25, 0.09, 0.02, 2, 0.015), std(0x2b3a4c, 0.86), 0, 0.29, -0.248);
    torso.add(flap);
    const strapMat = std(0x141b25, 0.9);
    for (const x of [-0.12, 0.12]) {
      const strap = mesh(new RoundedBoxGeometry(0.055, 0.32, 0.02, 2, 0.01), strapMat, x, 0.24, 0.128);
      strap.rotation.z = x > 0 ? -0.04 : 0.04;
      torso.add(strap);
    }
    const patch = new THREE.Mesh(new THREE.PlaneGeometry(0.09, 0.04), new THREE.MeshBasicMaterial({ color: 0x37f0cf }));
    patch.position.set(0, 0.2, -0.254);
    patch.rotation.y = Math.PI;
    torso.add(patch);

    // Legs. Feet at board height.
    this.legs = [];
    for (const side of [-1, 1]) {
      const hip = new THREE.Group();
      hip.position.set(side * 0.115, -0.04, side > 0 ? 0.06 : -0.06);
      hips.add(hip);
      const thigh = mesh(new THREE.CapsuleGeometry(0.075, 0.2, 4, 10), p.pants, 0, -0.14, 0);
      hip.add(thigh);
      const knee = new THREE.Group();
      knee.position.y = -0.29;
      hip.add(knee);
      const shin = mesh(new THREE.CapsuleGeometry(0.062, 0.19, 4, 10), p.pantsLight, 0, -0.12, 0);
      knee.add(shin);
      // Knee pad.
      const pad = mesh(new RoundedBoxGeometry(0.11, 0.12, 0.075, 2, 0.03), p.dark, 0, -0.01, 0.05);
      knee.add(pad);
      const padLogo = new THREE.Mesh(new THREE.PlaneGeometry(0.04, 0.02), new THREE.MeshBasicMaterial({ color: 0xffd23f }));
      padLogo.position.set(0, -0.01, 0.09);
      knee.add(padLogo);

      // Shoe: length points sideways with slight forward angle.
      const foot = new THREE.Group();
      foot.position.y = -0.27;
      knee.add(foot);
      const shoe = mesh(new RoundedBoxGeometry(0.2, 0.085, 0.105, 3, 0.035), p.shoe, side > 0 ? 0.04 : 0.035, -0.055, 0.01);
      shoe.rotation.y = side > 0 ? -0.18 : 0.25;
      foot.add(shoe);
      const toe = mesh(new THREE.SphereGeometry(0.06, 10, 8), p.shoe, side > 0 ? 0.13 : 0.125, -0.055, 0.018);
      toe.scale.set(1, 0.72, 0.9);
      foot.add(toe);
      const sole = mesh(new RoundedBoxGeometry(0.215, 0.022, 0.115, 2, 0.012), p.shoeSole, side > 0 ? 0.045 : 0.04, -0.098, 0.01);
      sole.rotation.y = side > 0 ? -0.18 : 0.25;
      foot.add(sole);
      const laces = mesh(new RoundedBoxGeometry(0.075, 0.008, 0.055, 2, 0.004), p.accent, side > 0 ? 0.07 : 0.065, -0.008, 0.015);
      foot.add(laces);
      const sock = mesh(new THREE.CylinderGeometry(0.063, 0.06, 0.08, 10), std(0xf3ecdf, 0.9), 0, 0.03, 0);
      foot.add(sock);

      this.legs.push({ hip, knee, foot, side, baseHip: hip.position.clone() });
    }

    this.root.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  }

  resetPose() {
    this.hips.position.y = 0.91;
    this.torso.rotation.set(0.05, 0, 0);
    for (const arm of this.arms) {
      arm.shoulder.rotation.set(-0.35, 0, arm.side * -0.22);
      arm.elbow.rotation.set(-0.7, 0, 0);
    }
    for (const leg of this.legs) {
      leg.hip.rotation.set(0.08, 0, leg.side * 0.09);
      leg.knee.rotation.set(-0.16, 0, 0);
      leg.hip.position.copy(leg.baseHip);
    }
  }

  triggerTrick(kind) {
    this.currentTrick = kind;
    this.trickStart = this.time;
    if (kind === 'kickflip') this.trickFlip = 1;
    else if (kind === 'heelflip') this.trickFlip = -1;
    else if (kind === 'shoveit') this.trickYaw = 1;
    else if (kind === 'grab') {
      this.trickPitch = 1;
      this.grabTime = 0.6;
    }
  }

  setBail() {
    this.bailTime = 1.45;
  }

  land(impact = 0) {
    this.landSquash = Math.min(1, 0.5 + impact * 0.06);
    this.crouch = Math.max(this.crouch, 0.5);
  }

  /**
   * @param {number} dt
   * @param {object} s state
   */
  update(dt, s) {
    this.time += dt;
    const speed = Math.abs(s.speed || 0);
    const t = this.time;

    // Visual spin offset (whole rider) and root position.
    this.spin = s.spinAngle || 0;
    this.bodyYaw.rotation.y = this.spin;

    // Lean from steering, plus a little speed wobble.
    const targetLean = THREE.MathUtils.clamp((s.steer || 0) * 0.34 + (s.lean || 0) * 0.22, -0.42, 0.42);
    this.lean += (targetLean - this.lean) * Math.min(1, dt * 8);
    this.leanGroup.rotation.z = -this.lean;
    this.leanGroup.rotation.x = THREE.MathUtils.clamp(s.pitch || 0, -0.2, 0.2);

    // Root follows ground/air position.
    this.root.position.set(s.x || 0, s.y || 0, s.z || 0);
    this.root.rotation.y = s.yaw || 0;

    if (s.bail) {
      this.bailTime = Math.max(0, this.bailTime - dt);
      const bt = 1 - this.bailTime / 1.45;
      this.leanGroup.rotation.z = Math.sin(bt * 9) * 0.8;
      this.leanGroup.rotation.x = -bt * 1.15;
      this.hips.position.y = 0.66;
      for (const arm of this.arms) {
        arm.shoulder.rotation.z = arm.side * 1.4;
        arm.elbow.rotation.x = -0.2;
      }
      for (const leg of this.legs) {
        leg.hip.rotation.x = 0.9;
        leg.knee.rotation.x = -0.8;
      }
      this.boardTrick.rotation.set(bt * 4, bt * 2, bt * 7);
      this.boardGroup.position.y = 0.1 + Math.sin(bt * Math.PI) * 0.5;
      return;
    }
    this.leanGroup.rotation.x *= 0.8;

    // Crouch and landing squash.
    const crouchTarget = s.crouch || 0;
    this.crouch += (crouchTarget - this.crouch) * Math.min(1, dt * 12);
    this.landSquash = Math.max(0, this.landSquash - dt * 4.5);
    const squash = Math.sin(this.landSquash * Math.PI) * 0.16;
    const crouch = THREE.MathUtils.clamp(this.crouch + squash + (s.grind ? 0.25 : 0) + (s.grounded ? 0 : 0.14), 0, 1);

    // Push cycle.
    if (s.pushing && s.grounded && speed > 0.5) {
      this.pushPhase += dt * (2.6 + speed * 0.18);
    } else {
      this.pushPhase += dt * 0.8;
    }
    const push = s.pushing && s.grounded ? Math.max(0, Math.sin(this.pushPhase)) : 0;

    // Idle bob + breathing.
    const bob = Math.sin(t * (2.2 + speed * 0.08)) * 0.008 + Math.sin(t * 5.3) * 0.0025 * (1 + speed * 0.05);

    this.hips.position.y = 0.91 - crouch * 0.2 + bob;
    this.hips.position.z = crouch * 0.02;

    // Arms counterbalance and air flail.
    const air = s.grounded ? 0 : 1;
    for (const arm of this.arms) {
      const side = arm.side;
      const swing = Math.sin(t * (3.1 + speed * 0.12) + (side > 0 ? 0 : Math.PI)) * (0.08 + speed * 0.006);
      let sx = -0.26 - crouch * 0.35 + swing - air * 0.36;
      let sz = side * (-0.24 - crouch * 0.2 - air * 0.95);
      let ex = -0.55 - crouch * 0.5 - air * 0.22 + Math.sin(t * 6 + side) * 0.04;
      if (s.grind) { sx = -0.55; sz = side * -1.15; ex = -0.25; }
      arm.shoulder.rotation.x += (sx - arm.shoulder.rotation.x) * Math.min(1, dt * 10);
      arm.shoulder.rotation.z += (sz - arm.shoulder.rotation.z) * Math.min(1, dt * 10);
      arm.elbow.rotation.x += (ex - arm.elbow.rotation.x) * Math.min(1, dt * 10);
    }

    // Legs: bend with crouch, step with push.
    for (const leg of this.legs) {
      const side = leg.side;
      const isPushLeg = side < 0;
      const kick = isPushLeg ? push : 0;
      const hipX = 0.08 + crouch * 0.72 + air * 0.38 + kick * 0.7;
      const kneeX = -0.16 - crouch * 1.0 - air * 0.72 - kick * 0.5;
      leg.hip.rotation.x += (hipX - leg.hip.rotation.x) * Math.min(1, dt * 12);
      leg.hip.rotation.z += ((side * 0.1 + (air ? side * 0.16 : 0)) - leg.hip.rotation.z) * Math.min(1, dt * 10);
      leg.knee.rotation.x += (kneeX - leg.knee.rotation.x) * Math.min(1, dt * 12);
      // Push leg slides out from the board.
      const slide = isPushLeg ? kick * 0.22 : 0;
      leg.hip.position.z = leg.baseHip.z + slide;
      leg.hip.position.x = leg.baseHip.x + (isPushLeg ? kick * 0.04 : 0);
      leg.foot.rotation.x = -0.04 + kick * 0.35;
    }

    // Torso counter-rotation and head look.
    this.torso.rotation.x = 0.07 + crouch * 0.42 + air * 0.18;
    this.torso.rotation.y = -this.lean * 0.35 + Math.sin(t * 1.7) * 0.012;
    this.head.rotation.y = this.lean * 0.28;
    this.head.rotation.x = -crouch * 0.16;

    // Board trick animation.
    const airT = s.airTime || 0;
    if (s.trick && s.trick.type) {
      const k = THREE.MathUtils.clamp((s.trick.t || 0) / s.trick.duration, 0, 1);
      const ease = 1 - Math.pow(1 - k, 3);
      if (s.trick.type === 'kickflip' || s.trick.type === 'heelflip') {
        this.boardTrick.rotation.z = (s.trick.type === 'kickflip' ? 1 : -1) * ease * Math.PI * 2;
        this.boardTrick.rotation.y = Math.sin(k * Math.PI) * 0.1;
      } else if (s.trick.type === 'shoveit') {
        this.boardTrick.rotation.y = ease * Math.PI * 2;
        this.boardTrick.rotation.z = Math.sin(k * Math.PI) * 0.16;
      } else if (s.trick.type === 'grab') {
        this.boardTrick.rotation.y = Math.sin(k * Math.PI) * 0.1;
        this.boardTrick.rotation.x = -Math.sin(k * Math.PI) * 0.55;
        this.hips.position.y -= Math.sin(k * Math.PI) * 0.1;
      }
    } else {
      this.boardTrick.rotation.x += (0 - this.boardTrick.rotation.x) * Math.min(1, dt * 10);
      this.boardTrick.rotation.y += (0 - this.boardTrick.rotation.y) * Math.min(1, dt * 10);
      this.boardTrick.rotation.z += (0 - this.boardTrick.rotation.z) * Math.min(1, dt * 10);
    }

    // Slight board pitch into carves.
    if (!s.grind) {
      this.boardGroup.rotation.x += ((s.grounded ? 0 : -0.08) - this.boardGroup.rotation.x) * Math.min(1, dt * 6);
      this.boardGroup.rotation.y += (this.lean * 0.18 - this.boardGroup.rotation.y) * Math.min(1, dt * 6);
    } else {
      this.boardGroup.rotation.x += (0.16 - this.boardGroup.rotation.x) * Math.min(1, dt * 8);
      this.boardGroup.rotation.y += (0 - this.boardGroup.rotation.y) * Math.min(1, dt * 8);
    }
    this.boardGroup.position.y = 0.1 + (s.grounded ? 0 : -0.15) + Math.sin(t * 9) * 0.002 * (speed * 0.1);
    this.boardGroup.position.z = 0;
  }
}
