import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import {
  concreteTexture, asphaltTexture, graffitiTexture, buildingTexture, signTexture,
  letterTexture, sparkleTexture, skyTexture,
} from './textures.js';

const clamp = THREE.MathUtils.clamp;
const smooth = (t) => { t = clamp(t, 0, 1); return t * t * (3 - 2 * t); };

/* ---------------------------------------------------------------- Surfaces */
class Surface {
  constructor(kind, opts) {
    this.kind = kind;
    this.x = opts.x;
    this.z = opts.z;
    this.rot = opts.rot || 0;
    this.W = opts.w;
    this.L = opts.l;
    this.H = opts.h || 1;
    this.power = opts.power || 1;
    this.bank = opts.bank || 1;
    this.halfX = opts.w / 2;
    this.halfZ = opts.l / 2;
    this.cos = Math.cos(this.rot);
    this.sin = Math.sin(this.rot);
  }

  toLocal(x, z) {
    const dx = x - this.x;
    const dz = z - this.z;
    return { u: dx * this.cos - dz * this.sin, v: dx * this.sin + dz * this.cos };
  }

  localHeight(u, v) {
    if (this.kind === 'funbox') {
      if (Math.abs(u) > this.halfX || Math.abs(v) > this.halfZ) return -Infinity;
      const sx = (this.halfX - Math.abs(u)) / this.bank;
      const sz = (this.halfZ - Math.abs(v)) / this.bank;
      return this.H * smooth(Math.min(sx, sz));
    }
    if (Math.abs(u) > this.halfX || Math.abs(v) > this.halfZ) return -Infinity;
    const t = (v + this.halfZ) / this.L;
    if (t < 0 || t > 1) return -Infinity;
    if (this.kind === 'quarter') {
      return this.H * (1 - Math.sqrt(Math.max(0, 1 - t * t)));
    }
    if (this.kind === 'bank') {
      return this.H * smooth(t);
    }
    return this.H * Math.pow(t, this.power);
  }

  heightAt(x, z) {
    const { u, v } = this.toLocal(x, z);
    return this.localHeight(u, v);
  }
}

/* ---------------------------------------------------------------- Heightfield mesh */
function heightfieldGeometry(surface, segW = 26, segL = 26) {
  const W = surface.W;
  const L = surface.L;
  const pos = [];
  const uv = [];
  const idx = [];

  for (let j = 0; j <= segL; j++) {
    const v = -L / 2 + (j / segL) * L;
    for (let i = 0; i <= segW; i++) {
      const u = -W / 2 + (i / segW) * W;
      const h = Math.max(0.001, surface.localHeight(u, v));
      pos.push(u, h, v);
      uv.push(i / segW, j / segL);
    }
  }
  for (let j = 0; j < segL; j++) {
    for (let i = 0; i < segW; i++) {
      const a = j * (segW + 1) + i;
      const b = a + 1;
      const c = a + segW + 1;
      const d = c + 1;
      idx.push(a, c, b, b, c, d);
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return geo;
}

function skirtGeometry(surface, segW = 26, segL = 26) {
  const W = surface.W;
  const L = surface.L;
  const pos = [];
  const uv = [];
  const idx = [];
  let cursor = 0;

  const edge = (sampler, count) => {
    let prev = -1;
    for (let i = 0; i <= count; i++) {
      const { u, v } = sampler(i / count);
      const h = Math.max(0, surface.localHeight(u, v));
      const topIndex = cursor;
      pos.push(u, h, v, u, -0.15, v);
      uv.push(i / count, 0, i / count, 1);
      cursor += 2;
      if (prev >= 0) {
        const a = prev; // top previous
        const b = prev + 1; // bottom previous
        const c = topIndex;
        const d = topIndex + 1;
        idx.push(a, b, c, c, b, d);
      }
      prev = topIndex;
    }
  };

  edge((t) => ({ u: -W / 2 + t * W, v: L / 2 }), segW);
  edge((t) => ({ u: -W / 2 + t * W, v: -L / 2 }), segW);
  edge((t) => ({ u: W / 2, v: -L / 2 + t * L }), segL);
  edge((t) => ({ u: -W / 2, v: -L / 2 + t * L }), segL);

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return geo;
}

function addCoping(group, surface, mat) {
  const W = surface.W;
  const L = surface.L;
  const H = surface.H;
  const coping = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, W, 12, 1), mat);
  coping.rotation.z = Math.PI / 2;
  coping.position.set(0, H + 0.02, L / 2);
  coping.castShadow = true;
  coping.receiveShadow = true;
  group.add(coping);

  // End plates.
  for (const side of [-1, 1]) {
    const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.045, 12), mat);
    plate.rotation.z = Math.PI / 2;
    plate.position.set(side * W / 2, H + 0.02, L / 2);
    group.add(plate);
  }
}

/* ---------------------------------------------------------------- World */
export function createWorld(scene, renderer, { mobile = false } = {}) {
  const w = {
    surfaces: [],
    solids: [],
    rails: [],
    coins: [],
    letters: [],
    particles: null,
    bounds: 27.4,
    spawn: new THREE.Vector3(0, 0, 10),
    time: 0,
  };

  const root = new THREE.Group();
  root.name = 'world';
  scene.add(root);
  w.root = root;

  /* ---- Renderer / atmosphere ---- */
  scene.fog = new THREE.FogExp2(0xa9715e, 0.0072);
  renderer.toneMappingExposure = 0.96;
  scene.environmentIntensity = 0.42;

  const env = new RoomEnvironment();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(env, 0.04).texture;
  env.dispose?.();
  pmrem.dispose();

  const skyGeo = new THREE.SphereGeometry(240, 32, 20);
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {
      top: { value: new THREE.Color(0x101c3b) },
      mid: { value: new THREE.Color(0xd07058) },
      horizon: { value: new THREE.Color(0xffcf91) },
      bottom: { value: new THREE.Color(0x2b2a34) },
      sunDir: { value: new THREE.Vector3(-0.35, 0.1, -0.93).normalize() },
    },
    vertexShader: `
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 top, mid, horizon, bottom, sunDir;
      varying vec3 vDir;
      void main() {
        float h = vDir.y;
        vec3 col = mix(horizon, mid, smoothstep(0.0, 0.24, h));
        col = mix(col, top, smoothstep(0.2, 0.72, h));
        col = mix(bottom, col, smoothstep(-0.2, 0.015, h));
        float sun = pow(max(dot(normalize(vDir), sunDir), 0.0), 180.0);
        float glow = pow(max(dot(normalize(vDir), sunDir), 0.0), 9.0);
        col += vec3(1.0, 0.63, 0.28) * glow * 0.24;
        col += vec3(1.0, 0.86, 0.58) * sun * 1.6;
        gl_FragColor = vec4(col, 1.0);
      }
    `,
  });
  const sky = new THREE.Mesh(skyGeo, skyMat);
  sky.frustumCulled = false;
  root.add(sky);

  const sunTex = sparkleTexture();

  // Light.
  const hemi = new THREE.HemisphereLight(0xffc9a3, 0x202635, 0.72);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffc790, 2.25);
  sun.position.set(-26, 38, -38);
  sun.castShadow = true;
  sun.shadow.mapSize.set(mobile ? 1024 : 2048, mobile ? 1024 : 2048);
  sun.shadow.camera.left = -34;
  sun.shadow.camera.right = 34;
  sun.shadow.camera.top = 34;
  sun.shadow.camera.bottom = -34;
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 110;
  sun.shadow.bias = -0.00035;
  sun.shadow.normalBias = 0.025;
  scene.add(sun);
  const fill = new THREE.DirectionalLight(0x6f9dff, 0.38);
  fill.position.set(28, 16, 34);
  scene.add(fill);
  const rim = new THREE.DirectionalLight(0xff7a3a, 0.4);
  rim.position.set(16, 12, -34);
  scene.add(rim);

  // Light shafts / warm bounce.
  const plazaGlow = new THREE.PointLight(0xff8a4c, 7, 24, 2);
  plazaGlow.position.set(-8, 6, -18);
  scene.add(plazaGlow);

  /* ---- Materials ---- */
  const concreteMap = concreteTexture(mobile ? 1024 : 1600);
  const concreteTop = new THREE.MeshStandardMaterial({
    map: concreteMap, color: 0xc2bbae, roughness: 0.97, metalness: 0.01,
  });
  const rampMap = concreteMap.clone();
  rampMap.repeat.set(2, 2);
  rampMap.needsUpdate = true;
  const rampMat = new THREE.MeshStandardMaterial({
    map: rampMap, color: 0xb8b1a5, roughness: 0.95, metalness: 0.015,
  });
  const rampSide = new THREE.MeshStandardMaterial({
    map: rampMap, color: 0x6d6861, roughness: 0.98, metalness: 0.01,
  });
  const metalMat = new THREE.MeshStandardMaterial({
    color: 0xc1c8cf, roughness: 0.24, metalness: 0.95,
  });
  const darkMetal = new THREE.MeshStandardMaterial({
    color: 0x4a505a, roughness: 0.4, metalness: 0.8,
  });
  const asphaltMap = asphaltTexture();
  const asphaltMat = new THREE.MeshStandardMaterial({
    map: asphaltMap, color: 0x8e8a84, roughness: 1, metalness: 0,
  });
  const wallMat = new THREE.MeshStandardMaterial({
    color: 0x8a8178, map: concreteMap, roughness: 0.98,
  });
  const stripeMat = new THREE.MeshStandardMaterial({ color: 0xf4e9d2, roughness: 0.7 });
  const yellowMat = new THREE.MeshStandardMaterial({ color: 0xf3b62e, roughness: 0.55, emissive: 0x3a2400, emissiveIntensity: 0.35 });
  const cyanMat = new THREE.MeshStandardMaterial({ color: 0x1fc9b1, roughness: 0.45, emissive: 0x0a4b40, emissiveIntensity: 0.45 });

  /* ---- Ground ---- */
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(64, 64, 1, 1), concreteTop);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  root.add(ground);

  const outer = new THREE.Mesh(new THREE.PlaneGeometry(360, 360), asphaltMat);
  outer.rotation.x = -Math.PI / 2;
  outer.position.y = -0.035;
  outer.receiveShadow = true;
  root.add(outer);

  // Sidewalk ring.
  const walk = new THREE.Mesh(new THREE.RingGeometry(44, 53, 64), new THREE.MeshStandardMaterial({
    color: 0xaaa39a, map: concreteMap, roughness: 0.98,
  }));
  walk.rotation.x = -Math.PI / 2;
  walk.position.y = -0.02;
  walk.receiveShadow = true;
  root.add(walk);

  // Curb.
  const curbGeo = new THREE.CylinderGeometry(48.5, 48.5, 0.24, 64, 1, true);
  const curb = new THREE.Mesh(curbGeo, wallMat);
  curb.position.y = 0.08;
  root.add(curb);

  /* ---- Terrain features ---- */
  const addSurface = (surface, opts = {}) => {
    w.surfaces.push(surface);
    const group = new THREE.Group();
    group.position.set(surface.x, 0, surface.z);
    group.rotation.y = surface.rot;

    const segW = opts.segW || Math.max(16, Math.round(surface.W * 3));
    const segL = opts.segL || Math.max(16, Math.round(surface.L * 3));
    const top = new THREE.Mesh(heightfieldGeometry(surface, segW, segL), rampMat);
    top.castShadow = true;
    top.receiveShadow = true;
    group.add(top);

    const skirt = new THREE.Mesh(skirtGeometry(surface, segW, segL), rampSide);
    skirt.castShadow = true;
    skirt.receiveShadow = true;
    group.add(skirt);

    if (opts.coping) addCoping(group, surface, metalMat);

    if (opts.edge) {
      const edge = new THREE.Mesh(new THREE.BoxGeometry(surface.W, 0.035, 0.08), metalMat);
      edge.position.set(0, surface.H + 0.02, -surface.L / 2);
      group.add(edge);
    }

    root.add(group);
    return group;
  };

  // A. Big quarter pipe, back left.
  const qpA = new Surface('quarter', { x: -10.5, z: -21.2, rot: Math.PI, w: 13, l: 4.8, h: 2.9 });
  addSurface(qpA, { coping: true, segW: 38, segL: 40 });

  // B. Right quarter pipe.
  const qpB = new Surface('quarter', { x: 11.5, z: -21.4, rot: Math.PI, w: 8, l: 4.4, h: 2.5 });
  addSurface(qpB, { coping: true, segW: 28, segL: 36 });

  // C. Kicker, right mid.
  const kick = new Surface('wedge', { x: 10.5, z: -4.2, rot: Math.PI, w: 4.8, l: 5.2, h: 1.65, power: 1.35 });
  addSurface(kick, { coping: true, segW: 20, segL: 26 });

  // D. Funbox, left mid.
  const funbox = new Surface('funbox', { x: -15, z: -1.4, w: 9.2, l: 9.2, h: 1.25, bank: 2.35 });
  addSurface(funbox, { segW: 40, segL: 40 });

  // E. Spine ramp, centre back.
  const spineNear = new Surface('wedge', { x: 0, z: -7.55, rot: Math.PI, w: 7.4, l: 2.8, h: 1.7, power: 1.18 });
  addSurface(spineNear, { segW: 26, segL: 14 });
  const spineFar = new Surface('wedge', { x: 0, z: -10.35, rot: 0, w: 7.4, l: 2.8, h: 1.7, power: 1.18 });
  addSurface(spineFar, { segW: 26, segL: 14 });

  // F. Low bank at front-left.
  const bank = new Surface('bank', { x: -20.5, z: 17.5, rot: 0, w: 8.5, l: 5, h: 1.05 });
  addSurface(bank, { segW: 26, segL: 20 });

  // G. Roll-over hump front-right for flow.
  const hump = new Surface('bank', { x: 19.5, z: 17.5, rot: 0, w: 6.4, l: 6.4, h: 0.85 });
  addSurface(hump, { segW: 24, segL: 24 });

  /* ---- Solid boxes / ledges ---- */
  const addSolid = (o) => {
    const geo = new THREE.BoxGeometry(o.w, o.h, o.d);
    const mesh = new THREE.Mesh(geo, o.mat || rampMat);
    mesh.position.set(o.x, o.h / 2, o.z);
    mesh.rotation.y = o.rot || 0;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    root.add(mesh);

    // Top trim strip for ledges.
    if (o.trim) {
      const trim = new THREE.Mesh(new THREE.BoxGeometry(o.w + 0.04, 0.04, o.d + 0.04), metalMat);
      trim.position.set(o.x, o.h + 0.015, o.z);
      trim.rotation.y = o.rot || 0;
      trim.castShadow = true;
      root.add(trim);
    }

    const solid = {
      x: o.x, z: o.z, rot: o.rot || 0, w: o.w, d: o.d, h: o.h,
      cos: Math.cos(o.rot || 0), sin: Math.sin(o.rot || 0),
      contains(x, z, pad = 0) {
        const dx = x - this.x;
        const dz = z - this.z;
        const u = dx * this.cos - dz * this.sin;
        const v = dx * this.sin + dz * this.cos;
        return Math.abs(u) <= this.w / 2 + pad && Math.abs(v) <= this.d / 2 + pad;
      },
    };
    w.solids.push(solid);
    return solid;
  };

  // Quarter-pipe decks.
  addSolid({ x: -10.5, z: -24.4, w: 13, d: 1.9, h: 2.9, mat: rampMat });
  addSolid({ x: 11.5, z: -24.4, w: 8, d: 1.6, h: 2.5, mat: rampMat });

  // Grind ledges.
  addSolid({ x: 19.5, z: 4.5, w: 8.4, d: 1.25, h: 0.62, rot: 0, trim: true });
  addSolid({ x: -24.2, z: 5.5, w: 1.35, d: 7.6, h: 0.55, trim: true });
  addSolid({ x: 5.4, z: 13.6, w: 5, d: 1.1, h: 0.44, trim: true });

  // Stair platform + steps.
  addSolid({ x: 21.3, z: 11.2, w: 6.4, d: 4.2, h: 1.15, mat: rampMat });
  for (let i = 0; i < 4; i++) {
    addSolid({
      x: 21.3, z: 13.75 + i * 0.68, w: 6.4, d: 0.72, h: 1.15 - (i + 1) * 0.27, mat: rampMat,
    });
  }

  /* ---- Rails ---- */
  function createRail(a, b, opts = {}) {
    const A = new THREE.Vector3(...a);
    const B = new THREE.Vector3(...b);
    const mid = A.clone().add(B).multiplyScalar(0.5);
    const delta = B.clone().sub(A);
    const len = delta.length();
    const dir = delta.clone().normalize();
    const rail = new THREE.Mesh(new THREE.CylinderGeometry(opts.radius || 0.045, opts.radius || 0.045, len, 10, 1), metalMat);
    rail.position.copy(mid);
    rail.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
    rail.castShadow = true;
    root.add(rail);

    // Caps.
    for (const p of [A, B]) {
      const cap = new THREE.Mesh(new THREE.SphereGeometry(opts.radius || 0.045, 8, 6), metalMat);
      cap.position.copy(p);
      root.add(cap);
    }

    // Posts.
    for (const p of [A, B]) {
      if (p.y > 0.22) {
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.04, p.y, 8), darkMetal);
        post.position.set(p.x, p.y / 2, p.z);
        post.castShadow = true;
        root.add(post);
        const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.03, 10), darkMetal);
        plate.position.set(p.x, 0.015, p.z);
        root.add(plate);
      }
    }

    const railObj = {
      a: A, b: B, dir: new THREE.Vector3(dir.x, 0, dir.z).normalize(),
      length: Math.hypot(delta.x, delta.z), yA: A.y, yB: B.y,
      fullLength: len, kind: opts.kind || 'bar', radius: opts.radius || 0.045,
      name: opts.name || 'RAIL',
      nearest(x, z) {
        const abx = B.x - A.x;
        const abz = B.z - A.z;
        const l2 = abx * abx + abz * abz;
        let t = ((x - A.x) * abx + (z - A.z) * abz) / l2;
        t = clamp(t, 0, 1);
        const px = A.x + abx * t;
        const pz = A.z + abz * t;
        const py = A.y + (B.y - A.y) * t;
        return { x: px, y: py, z: pz, t, dist: Math.hypot(x - px, z - pz) };
      },
    };
    w.rails.push(railObj);
    return railObj;
  }

  createRail([-9, 0.68, 3.2], [9, 0.68, 3.2], { name: 'PLAZA BAR', kind: 'bar' });
  createRail([-14.9, 1.95, -3.6], [-14.9, 1.95, 0.8], { name: 'FUNBOX RAIL', kind: 'bar' });
  createRail([-3.6, 1.82, -8.95], [3.6, 1.82, -8.95], { name: 'SPINE RAIL', kind: 'bar' });
  createRail([21.3, 1.2, 9.15], [21.3, 0.25, 17.6], { name: 'HANDRAIL', kind: 'handrail' });
  createRail([5.4, 0.52, 11.7], [5.4, 0.52, 16.1], { name: 'LOW RAIL', kind: 'bar' });
  createRail([-23.65, 0.65, 1.7], [-23.65, 0.65, 9.3], { name: 'LEDGE RAIL', kind: 'ledge' });
  createRail([15.4, 0.72, 4.5], [23.6, 0.72, 4.5], { name: 'LEDGE EDGE', kind: 'ledge' });

  // Ledge edge rails should sit exactly on top of ledge.
  w.rails[w.rails.length - 1].a.y = 0.66;
  w.rails[w.rails.length - 1].b.y = 0.66;
  w.rails[w.rails.length - 2].a.y = 0.59;
  w.rails[w.rails.length - 2].b.y = 0.59;

  /* ---- Perimeter walls, graffiti, fence ---- */
  const wallGeo = new THREE.BoxGeometry(60, 2.6, 0.5);
  const backWall = new THREE.Mesh(wallGeo, wallMat);
  backWall.position.set(0, 1.3, -28.4);
  backWall.castShadow = true;
  backWall.receiveShadow = true;
  root.add(backWall);

  const graffitiMapA = graffitiTexture(1024, 512, 1);
  const graffitiMapB = graffitiTexture(1024, 512, 2);
  const graffitiPlane = new THREE.Mesh(new THREE.PlaneGeometry(58, 2.45), new THREE.MeshStandardMaterial({
    map: graffitiMapA, roughness: 0.95, metalness: 0.02,
  }));
  graffitiPlane.position.set(0, 1.34, -28.12);
  root.add(graffitiPlane);

  // Side walls.
  for (const side of [-1, 1]) {
    const wall = new THREE.Mesh(new THREE.BoxGeometry(0.5, 2.5, 56), wallMat);
    wall.position.set(side * 28.4, 1.25, 0);
    wall.castShadow = true;
    wall.receiveShadow = true;
    root.add(wall);
    const gp = new THREE.Mesh(new THREE.PlaneGeometry(54, 2.35), new THREE.MeshStandardMaterial({
      map: side > 0 ? graffitiMapB : graffitiMapA, roughness: 0.95,
    }));
    gp.position.set(side * 28.12, 1.29, 0);
    gp.rotation.y = side > 0 ? -Math.PI / 2 : Math.PI / 2;
    root.add(gp);
  }

  // Wall caps with warm emissive strip on the back wall.
  const capGeo = new THREE.BoxGeometry(60.2, 0.13, 0.7);
  const cap = new THREE.Mesh(capGeo, darkMetal);
  cap.position.set(0, 2.61, -28.4);
  root.add(cap);
  const neon = new THREE.Mesh(new THREE.BoxGeometry(59.8, 0.035, 0.08), new THREE.MeshBasicMaterial({ color: 0x37f0cf }));
  neon.position.set(0, 2.66, -28.04);
  root.add(neon);

  // Front chain-link fence.
  const fenceCanvas = document.createElement('canvas');
  fenceCanvas.width = 256; fenceCanvas.height = 256;
  const fx = fenceCanvas.getContext('2d');
  fx.clearRect(0, 0, 256, 256);
  fx.strokeStyle = 'rgba(198,204,208,0.82)';
  fx.lineWidth = 2.4;
  for (let i = -256; i < 512; i += 24) {
    fx.beginPath(); fx.moveTo(i, 0); fx.lineTo(i + 256, 256); fx.stroke();
    fx.beginPath(); fx.moveTo(i, 256); fx.lineTo(i + 256, 0); fx.stroke();
  }
  fx.strokeStyle = 'rgba(198,204,208,0.95)';
  fx.lineWidth = 2.5;
  fx.strokeRect(1, 1, 254, 254);
  const fenceTex = new THREE.CanvasTexture(fenceCanvas);
  fenceTex.wrapS = fenceTex.wrapT = THREE.RepeatWrapping;
  fenceTex.repeat.set(14, 1.4);
  fenceTex.colorSpace = THREE.SRGBColorSpace;
  const fence = new THREE.Mesh(new THREE.PlaneGeometry(56, 2.2), new THREE.MeshBasicMaterial({
    map: fenceTex, transparent: true, alphaTest: 0.2, side: THREE.DoubleSide, opacity: 0.9,
  }));
  fence.position.set(0, 1.15, 28.2);
  root.add(fence);
  for (let x = -28; x <= 28; x += 4) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.06, 2.5, 8), darkMetal);
    post.position.set(x, 1.25, 28.2);
    post.castShadow = true;
    root.add(post);
  }

  // Billboard sign.
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(12, 6), new THREE.MeshStandardMaterial({
    map: signTexture(), emissive: 0xffffff, emissiveIntensity: 0.4, emissiveMap: signTexture(),
    roughness: 0.5, metalness: 0.1,
  }));
  sign.position.set(1, 10.2, -33.5);
  root.add(sign);
  const signBack = new THREE.Mesh(new THREE.BoxGeometry(12.4, 6.4, 0.35), darkMetal);
  signBack.position.set(1, 10.2, -33.72);
  root.add(signBack);
  for (const x of [-3.7, 5.7]) {
    const p = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.15, 10.1, 8), darkMetal);
    p.position.set(1 + x, 5.1, -33.75);
    p.castShadow = true;
    root.add(p);
  }

  /* ---- City ---- */
  const buildingTextures = [buildingTexture(0), buildingTexture(1), buildingTexture(2), buildingTexture(3)];
  const rng = (seed) => {
    let s = seed;
    return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
  };
  const rand = rng(31337);
  const buildMatCache = [];
  for (let i = 0; i < 22; i++) {
    const angle = (i / 22) * Math.PI * 2 + rand() * 0.16;
    const radius = 54 + rand() * 42;
    const bx = Math.cos(angle) * radius;
    const bz = Math.sin(angle) * radius;
    const h = 7 + rand() * 23;
    const bw = 6 + rand() * 7;
    const bd = 6 + rand() * 7;
    const tex = buildingTextures[i % buildingTextures.length].clone();
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(Math.max(1, bw / 9), Math.max(1, h / 16));
    tex.needsUpdate = true;
    const mat = new THREE.MeshStandardMaterial({
      map: tex, color: 0x9ea2a7, roughness: 0.92, metalness: 0.04,
      emissive: 0xffb56b, emissiveMap: tex, emissiveIntensity: 0.08,
    });
    buildMatCache.push(mat);
    const b = new THREE.Mesh(new THREE.BoxGeometry(bw, h, bd), mat);
    b.position.set(bx, h / 2 - 0.4, bz);
    b.rotation.y = angle + rand() * 0.4;
    b.castShadow = true;
    b.receiveShadow = true;
    root.add(b);

    if (rand() > 0.55) {
      const roof = new THREE.Mesh(new THREE.BoxGeometry(bw * 0.35, 1.8 + rand() * 2, bd * 0.35), darkMetal);
      roof.position.set(bx, h + 0.6, bz);
      root.add(roof);
    }
    if (rand() > 0.72) {
      const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.09, 4, 6), darkMetal);
      antenna.position.set(bx + rand() * 2 - 1, h + 2, bz + rand() * 2 - 1);
      root.add(antenna);
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 6), new THREE.MeshBasicMaterial({ color: 0xff4f4f }));
      bulb.position.copy(antenna.position);
      bulb.position.y += 2;
      root.add(bulb);
    }
  }

  // A nearby low building behind billboard to anchor the scene.
  const closeB = new THREE.Mesh(new THREE.BoxGeometry(24, 9, 8), new THREE.MeshStandardMaterial({
    map: buildingTextures[1].clone(), color: 0x8f8d8b, roughness: 0.95,
  }));
  closeB.material.map.repeat.set(3, 1);
  closeB.position.set(-16, 4.3, -37.5);
  closeB.castShadow = true;
  root.add(closeB);

  // Distant skyline: closes the gaps between ring towers so the sunset sky
  // reads as a backdrop instead of bright rectangular holes behind the sign.
  const backdrop = [
    [-46, -84, 26, 27, 15],
    [-27, -70, 17, 19, 11],
    [-11, -78, 18, 30, 13],
    [4, -64, 23, 18, 13],
    [22, -72, 16, 26, 12],
    [38, -86, 27, 33, 16],
    [58, -70, 20, 23, 13],
  ];
  for (let i = 0; i < backdrop.length; i++) {
    const [bx, bz, bw, bh, bd] = backdrop[i];
    const tex = buildingTextures[(i + 2) % buildingTextures.length].clone();
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(Math.max(1, bw / 10), Math.max(1, bh / 16));
    tex.needsUpdate = true;
    const mat = new THREE.MeshStandardMaterial({
      map: tex, color: 0x8b8492, roughness: 0.96, metalness: 0.02,
      emissive: 0xffa96b, emissiveMap: tex, emissiveIntensity: 0.07,
    });
    const block = new THREE.Mesh(new THREE.BoxGeometry(bw, bh, bd), mat);
    block.position.set(bx, bh / 2 - 0.5, bz);
    root.add(block);
  }

  /* ---- Palms ---- */
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x624839, roughness: 0.95 });
  const leafMat = new THREE.MeshStandardMaterial({ color: 0x2f6b47, roughness: 0.9, side: THREE.DoubleSide });
  const leafDarkMat = new THREE.MeshStandardMaterial({ color: 0x1e4a32, roughness: 0.9, side: THREE.DoubleSide });

  function palm(x, z, scale = 1) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    group.scale.setScalar(scale);
    group.rotation.y = rand() * Math.PI * 2;

    const trunkGeos = [];
    let px = 0, pz = 0;
    for (let i = 0; i < 6; i++) {
      const y = i * 1.2;
      const bend = i * 0.06;
      const geo = new THREE.CylinderGeometry(0.17 - i * 0.016, 0.22 - i * 0.016, 1.3, 7);
      geo.translate(0, y + 0.65, 0);
      geo.rotateZ(0.035 * i);
      geo.translate(bend, 0, 0);
      trunkGeos.push(geo);
      px += bend;
    }
    const trunk = new THREE.Mesh(mergeGeometries(trunkGeos), trunkMat);
    trunk.castShadow = true;
    trunk.receiveShadow = true;
    group.add(trunk);

    const leafGeos = [];
    for (let i = 0; i < 9; i++) {
      const ang = (i / 9) * Math.PI * 2;
      const len = 3.3 + rand() * 0.8;
      const leaf = new THREE.PlaneGeometry(0.72, len, 1, 5);
      const pos = leaf.attributes.position;
      for (let v = 0; v < pos.count; v++) {
        const y = pos.getY(v);
        const t = (y + len / 2) / len;
        pos.setX(v, pos.getX(v) * (1 - t * 0.82));
        pos.setZ(v, Math.sin(t * Math.PI * 0.8) * 0.45 - t * t * 1.1);
      }
      leaf.computeVertexNormals();
      leaf.rotateX(-Math.PI / 2);
      leaf.rotateY(ang);
      leaf.rotateZ(-0.16);
      leaf.translate(px, 7.2, 0);
      leafGeos.push(leaf);
    }
    const leaves = new THREE.Mesh(mergeGeometries(leafGeos), leafMat);
    leaves.castShadow = true;
    group.add(leaves);

    // Coconuts.
    for (let i = 0; i < 4; i++) {
      const nut = new THREE.Mesh(new THREE.SphereGeometry(0.16, 7, 5), leafDarkMat);
      nut.position.set(px + Math.cos(i * 2.2) * 0.3, 6.9, Math.sin(i * 2.2) * 0.3);
      group.add(nut);
    }
    root.add(group);
  }

  palm(-24, 24.5, 1);
  palm(-15, 26.5, 0.85);
  palm(23.5, 25, 1.1);
  palm(27, 14, 0.9);
  palm(-27, -3, 1.05);
  palm(26, -11, 0.8);
  palm(-33, 14, 1.2);
  palm(34, 8, 1.15);

  /* ---- Props ---- */
  const woodMat = new THREE.MeshStandardMaterial({ color: 0x8a5631, roughness: 0.88 });
  const woodDark = new THREE.MeshStandardMaterial({ color: 0x4f301c, roughness: 0.9 });

  function bench(x, z, rot = 0) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rot;
    for (let i = 0; i < 3; i++) {
      const slat = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.07, 0.16), woodMat);
      slat.position.set(0, 0.44, -0.2 + i * 0.19);
      slat.castShadow = true;
      g.add(slat);
    }
    for (let i = 0; i < 2; i++) {
      const slat = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.07, 0.16), woodMat);
      slat.position.set(0, 0.65 + i * 0.19, -0.38);
      slat.castShadow = true;
      g.add(slat);
    }
    for (const sx of [-0.96, 0.96]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.44, 0.48), darkMetal);
      leg.position.set(sx, 0.22, -0.08);
      leg.castShadow = true;
      g.add(leg);
      const back = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.5, 0.06), darkMetal);
      back.position.set(sx, 0.66, -0.4);
      back.rotation.x = -0.14;
      g.add(back);
    }
    root.add(g);
    addSolid({ x, z, w: 2.5, d: 0.8, h: 0.82, rot });
  }
  bench(7.5, 8.8, 0.04);
  bench(-20.5, 10.2, 1.52);
  bench(24.5, -4.4, -0.1);

  function bin(x, z) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    const can = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.29, 0.9, 14), darkMetal);
    can.position.y = 0.45;
    can.castShadow = true;
    g.add(can);
    const lid = new THREE.Mesh(new THREE.CylinderGeometry(0.37, 0.37, 0.1, 14), metalMat);
    lid.position.y = 0.94;
    g.add(lid);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.33, 0.03, 6, 16), yellowMat);
    rim.position.y = 0.85;
    rim.rotation.x = Math.PI / 2;
    g.add(rim);
    root.add(g);
  }
  bin(9.8, 9.8); bin(-22.6, 13.2); bin(24.7, 8.8);

  function cone(x, z) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    const base = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.05, 0.42), new THREE.MeshStandardMaterial({ color: 0xd8641f, roughness: 0.8 }));
    base.position.y = 0.025;
    g.add(base);
    const c = new THREE.Mesh(new THREE.ConeGeometry(0.17, 0.58, 12), new THREE.MeshStandardMaterial({ color: 0xff6a2b, roughness: 0.6 }));
    c.position.y = 0.33;
    c.castShadow = true;
    g.add(c);
    const stripe = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.155, 0.09, 12), stripeMat);
    stripe.position.y = 0.35;
    g.add(stripe);
    root.add(g);
  }
  cone(11.7, 12.6); cone(12.6, 11.9); cone(-7.8, 14.8); cone(15.6, -11.8); cone(2.7, -5.8);

  function planter(x, z) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    const box = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.55, 1.4), wallMat);
    box.position.y = 0.275;
    box.castShadow = true;
    box.receiveShadow = true;
    g.add(box);
    const soil = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.08, 1.15), new THREE.MeshStandardMaterial({ color: 0x3d2a1c, roughness: 1 }));
    soil.position.y = 0.58;
    g.add(soil);
    for (let i = 0; i < 4; i++) {
      const bush = new THREE.Mesh(new THREE.SphereGeometry(0.4 + rand() * 0.2, 8, 6), leafDarkMat);
      bush.position.set((rand() - 0.5) * 0.7, 0.75 + rand() * 0.25, (rand() - 0.5) * 0.7);
      bush.castShadow = true;
      g.add(bush);
    }
    root.add(g);
  }
  planter(-26.2, 20.8);
  planter(26.2, 20.8);
  planter(-26.2, -18.5);

  function lamp(x, z) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.1, 6.4, 8), darkMetal);
    pole.position.y = 3.2;
    pole.castShadow = true;
    g.add(pole);
    const arm = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.08, 0.08), darkMetal);
    arm.position.set(0.45, 6.3, 0);
    g.add(arm);
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.16, 0.3), darkMetal);
    head.position.set(1.0, 6.22, 0);
    g.add(head);
    const bulb = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.04, 0.22), new THREE.MeshBasicMaterial({ color: 0xffd9a0 }));
    bulb.position.set(1.0, 6.12, 0);
    g.add(bulb);
    root.add(g);
  }
  lamp(-25.5, 24); lamp(25.5, 24); lamp(-25.5, -24); lamp(25.5, -24);

  // Hydrant.
  const hyd = new THREE.Group();
  hyd.position.set(-6.5, 0, 12.6);
  const hydMat = new THREE.MeshStandardMaterial({ color: 0xc23a2c, roughness: 0.62, metalness: 0.1 });
  const hbody = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.2, 0.62, 10), hydMat);
  hbody.position.y = 0.31;
  hbody.castShadow = true;
  hyd.add(hbody);
  const htop = new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 8), hydMat);
  htop.position.y = 0.64;
  hyd.add(htop);
  for (const side of [-1, 1]) {
    const nub = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.22, 8), hydMat);
    nub.rotation.z = Math.PI / 2;
    nub.position.set(side * 0.24, 0.42, 0);
    hyd.add(nub);
  }
  root.add(hyd);

  /* ---- Collectibles ---- */
  const coinGeo = mergeGeometries([
    new THREE.CylinderGeometry(0.155, 0.155, 0.038, 18).rotateX(Math.PI / 2),
    new THREE.TorusGeometry(0.165, 0.027, 6, 18),
  ]);
  const coinMat = new THREE.MeshStandardMaterial({
    color: 0xffc42e, metalness: 0.92, roughness: 0.24, emissive: 0x5a3200, emissiveIntensity: 0.3,
  });
  const coinPositions = [];
  const addCoin = (x, y, z) => coinPositions.push(new THREE.Vector3(x, y, z));

  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    addCoin(Math.cos(a) * 7.2, 1.05, Math.sin(a) * 7.2 - 1.0);
  }
  for (let x = -8; x <= 8; x += 2) addCoin(x, 1.25, 3.2);
  for (let z = -2; z >= -6.5; z -= 1.1) addCoin(10.5, hAtWorld(kick, 10.5, z) + 1.0, z);
  for (let z = -20.2; z >= -23.2; z -= 0.9) addCoin(-10.5, hAtWorld(qpA, -10.5, z) + 1.1, z);
  for (let x = -17.5; x <= -12.5; x += 1.2) addCoin(x, 2.1, -1.4);
  for (let x = -2.6; x <= 2.6; x += 1.3) addCoin(x, 2.6, -8.95);
  for (const [x, y, z] of [[19.5, 1.25, 3.2], [20.9, 1.25, 4.5], [22.3, 1.25, 5.8]]) addCoin(x, y, z);
  for (const [x, y, z] of [[21.3, 1.9, 10.4], [21.3, 1.6, 12.4], [21.3, 1.3, 14.2]]) addCoin(x, y, z);
  addCoin(-20.5, 1.8, 19.2);
  addCoin(-20.5, 2.2, 17.5);
  addCoin(19.5, 1.7, 18.6);
  addCoin(19.5, 1.5, 16.4);

  const coinMesh = new THREE.InstancedMesh(coinGeo, coinMat, coinPositions.length);
  coinMesh.castShadow = true;
  coinMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  root.add(coinMesh);

  const dummy = new THREE.Object3D();
  coinPositions.forEach((p, i) => {
    dummy.position.copy(p);
    dummy.rotation.set(0, i * 0.7, 0);
    dummy.updateMatrix();
    coinMesh.setMatrixAt(i, dummy.matrix);
    w.coins.push({ pos: p.clone(), taken: false, respawn: 0, index: i, phase: i * 1.7 });
  });
  coinMesh.instanceMatrix.needsUpdate = true;
  w.coinMesh = coinMesh;

  // Letters.
  const letterDefs = [
    ['S', -10.5, 4.65, -21.8],
    ['K', 10.5, 3.3, -6.4],
    ['A', -14.9, 2.75, -2.9],
    ['T', 0, 3.55, -8.95],
    ['E', 21.3, 2.35, 12.3],
  ];
  for (const [letter, x, y, z] of letterDefs) {
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: letterTexture(letter), transparent: true, depthWrite: false,
      blending: THREE.AdditiveBlending, opacity: 0.95,
    }));
    sprite.scale.setScalar(1.05);
    sprite.position.set(x, y, z);
    root.add(sprite);

    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.46, 0.02, 6, 24), new THREE.MeshBasicMaterial({
      color: 0xffd23f, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    ring.position.copy(sprite.position);
    root.add(ring);

    w.letters.push({ letter, pos: new THREE.Vector3(x, y, z), sprite, ring, taken: false, phase: rand() * 6 });
  }

  /* ---- Particles ---- */
  const pCount = 220;
  const pPos = new Float32Array(pCount * 3);
  const pCol = new Float32Array(pCount * 3);
  const pVel = new Float32Array(pCount * 3);
  const pLife = new Float32Array(pCount);
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  pGeo.setAttribute('color', new THREE.BufferAttribute(pCol, 3));
  const pMat = new THREE.PointsMaterial({
    size: 0.16, map: sunTex, vertexColors: true, transparent: true, opacity: 1,
    depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true,
  });
  const particles = new THREE.Points(pGeo, pMat);
  particles.frustumCulled = false;
  root.add(particles);
  for (let i = 0; i < pCount; i++) pPos[i * 3 + 1] = -999;

  let pCursor = 0;
  w.burst = (position, color = 0xffc42e, count = 16, spread = 3.2) => {
    const c = new THREE.Color(color);
    for (let i = 0; i < count; i++) {
      const idx = pCursor = (pCursor + 1) % pCount;
      pPos[idx * 3] = position.x + (Math.random() - 0.5) * 0.25;
      pPos[idx * 3 + 1] = position.y + (Math.random() - 0.5) * 0.25;
      pPos[idx * 3 + 2] = position.z + (Math.random() - 0.5) * 0.25;
      pVel[idx * 3] = (Math.random() - 0.5) * spread;
      pVel[idx * 3 + 1] = Math.random() * spread * 0.9 + 0.8;
      pVel[idx * 3 + 2] = (Math.random() - 0.5) * spread;
      pLife[idx] = 0.7 + Math.random() * 0.6;
      pCol[idx * 3] = c.r;
      pCol[idx * 3 + 1] = c.g;
      pCol[idx * 3 + 2] = c.b;
    }
    pGeo.attributes.position.needsUpdate = true;
    pGeo.attributes.color.needsUpdate = true;
  };

  /* ---- Dust motes ---- */
  const dustCount = 130;
  const dustPos = new Float32Array(dustCount * 3);
  for (let i = 0; i < dustCount; i++) {
    dustPos[i * 3] = (Math.random() - 0.5) * 52;
    dustPos[i * 3 + 1] = 0.3 + Math.random() * 7;
    dustPos[i * 3 + 2] = (Math.random() - 0.5) * 52;
  }
  const dustGeo = new THREE.BufferGeometry();
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
  const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({
    color: 0xffd6a0, size: 0.075, transparent: true, opacity: 0.5, depthWrite: false,
    blending: THREE.AdditiveBlending, map: sunTex, sizeAttenuation: true,
  }));
  dust.frustumCulled = false;
  root.add(dust);

  /* ---- Clouds & birds ---- */
  const cloudMat = new THREE.MeshStandardMaterial({ color: 0xffddc4, roughness: 1, metalness: 0, transparent: true, opacity: 0.55 });
  const clouds = [];
  for (let i = 0; i < 12; i++) {
    const g = new THREE.Group();
    const n = 3 + (Math.random() * 3 | 0);
    for (let j = 0; j < n; j++) {
      const puff = new THREE.Mesh(new THREE.SphereGeometry(1.6 + Math.random() * 1.4, 8, 6), cloudMat);
      puff.position.set((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 1.6, (Math.random() - 0.5) * 5);
      puff.scale.y = 0.55;
      g.add(puff);
    }
    const ang = (i / 12) * Math.PI * 2 + rand() * 0.5;
    g.position.set(Math.cos(ang) * (65 + rand() * 50), 24 + rand() * 22, Math.sin(ang) * (65 + rand() * 50));
    g.userData.speed = 0.4 + rand() * 0.8;
    g.userData.ang = ang;
    g.userData.radius = Math.hypot(g.position.x, g.position.z);
    root.add(g);
    clouds.push(g);
  }

  const birdMat = new THREE.LineBasicMaterial({ color: 0x1e2029, transparent: true, opacity: 0.75 });
  const birds = [];
  for (let i = 0; i < 7; i++) {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute([-0.6, 0, 0, 0, 0.06, 0, 0.6, 0, 0], 3));
    const bird = new THREE.Line(geo, birdMat);
    bird.position.set(-30 + rand() * 60, 17 + rand() * 14, -40 + rand() * 30);
    bird.userData = { phase: rand() * 6, speed: 2 + rand() * 2, radius: 24 + rand() * 22, ang: rand() * 6 };
    root.add(bird);
    birds.push(bird);
  }

  /* ---- Helpers ---- */
  function hAtWorld(surface, x, z) {
    const h = surface.heightAt(x, z);
    return h === -Infinity ? 0 : Math.max(0, h);
  }

  w.heightAt = (x, z) => {
    let h = 0;
    for (let i = 0; i < w.surfaces.length; i++) {
      const sh = w.surfaces[i].heightAt(x, z);
      if (sh > h) h = sh;
    }
    return h;
  };

  w.groundHeight = (x, z, currentY = 0) => {
    let h = w.heightAt(x, z);
    for (let i = 0; i < w.solids.length; i++) {
      const s = w.solids[i];
      if (currentY >= s.h - 0.34 && s.contains(x, z, 0.02) && s.h > h) h = s.h;
    }
    return h;
  };

  w.blocked = (x, z, y) => {
    if (Math.abs(x) > w.bounds || Math.abs(z) > w.bounds) return true;
    for (let i = 0; i < w.solids.length; i++) {
      const s = w.solids[i];
      if (y < s.h - 0.2 && s.contains(x, z, 0.08)) return true;
    }
    return false;
  };

  w.gradient = (x, z, eps = 0.12) => {
    const hL = w.heightAt(x - eps, z);
    const hR = w.heightAt(x + eps, z);
    const hD = w.heightAt(x, z - eps);
    const hU = w.heightAt(x, z + eps);
    return { x: (hR - hL) / (2 * eps), z: (hU - hD) / (2 * eps) };
  };

  w.railsNear = (x, z, radius = 2.4) => {
    const out = [];
    for (const r of w.rails) {
      const n = r.nearest(x, z);
      if (n.dist < radius) out.push({ rail: r, ...n });
    }
    return out.sort((a, b) => a.dist - b.dist);
  };

  w.resetCollectibles = () => {
    for (const c of w.coins) { c.taken = false; c.respawn = 0; }
    for (const l of w.letters) l.taken = false;
    for (const l of w.letters) {
      l.sprite.visible = true;
      l.ring.visible = true;
    }
    for (const c of w.coins) {
      dummy.position.copy(c.pos);
      dummy.scale.setScalar(1);
      dummy.updateMatrix();
      coinMesh.setMatrixAt(c.index, dummy.matrix);
    }
    coinMesh.instanceMatrix.needsUpdate = true;
  };

  w.collectCoin = (index, time) => {
    const c = w.coins[index];
    c.taken = true;
    c.respawn = time + 24;
    w.burst(c.pos, 0xffc42e, 12, 3);
  };

  w.collectLetter = (letter, time) => {
    letter.taken = true;
    letter.sprite.visible = false;
    letter.ring.visible = false;
    w.burst(letter.pos, 0xffd23f, 26, 4.5);
  };

  /* ---- Update ---- */
  const tmpColor = new THREE.Color();
  w.update = (dt, time, camera) => {
    w.time = time;

    // Coins.
    for (const c of w.coins) {
      if (c.taken && time > c.respawn) {
        c.taken = false;
        dummy.position.copy(c.pos);
        dummy.scale.setScalar(1);
        dummy.updateMatrix();
        coinMesh.setMatrixAt(c.index, dummy.matrix);
      }
      const visible = !c.taken;
      dummy.position.copy(c.pos);
      dummy.position.y += Math.sin(time * 2.1 + c.phase) * 0.11;
      dummy.rotation.set(0, time * 1.8 + c.phase, 0);
      dummy.scale.setScalar(visible ? 1 : 0);
      dummy.updateMatrix();
      coinMesh.setMatrixAt(c.index, dummy.matrix);
    }
    coinMesh.instanceMatrix.needsUpdate = true;

    // Letters.
    for (const l of w.letters) {
      if (l.taken) continue;
      l.sprite.position.y = l.pos.y + Math.sin(time * 2 + l.phase) * 0.18;
      l.ring.position.copy(l.sprite.position);
      l.ring.rotation.x = Math.PI / 2 + Math.sin(time * 0.8 + l.phase) * 0.2;
      l.ring.rotation.y = time * 0.8 + l.phase;
      l.ring.scale.setScalar(1 + Math.sin(time * 2.4 + l.phase) * 0.05);
    }

    // Particles.
    const pp = pGeo.attributes.position.array;
    for (let i = 0; i < pCount; i++) {
      if (pLife[i] > 0) {
        pLife[i] -= dt;
        pVel[i * 3 + 1] -= 9.8 * dt;
        pp[i * 3] += pVel[i * 3] * dt;
        pp[i * 3 + 1] += pVel[i * 3 + 1] * dt;
        pp[i * 3 + 2] += pVel[i * 3 + 2] * dt;
        const k = Math.max(0, Math.min(1, pLife[i]));
        pCol[i * 3] *= 0.985;
        pCol[i * 3 + 1] *= 0.985;
        pCol[i * 3 + 2] *= 0.985;
        if (pLife[i] <= 0) pp[i * 3 + 1] = -999;
      }
    }
    pGeo.attributes.position.needsUpdate = true;
    pGeo.attributes.color.needsUpdate = true;

    // Dust drift.
    dust.rotation.y += dt * 0.006;
    dust.position.y = Math.sin(time * 0.24) * 0.16;

    // Clouds.
    for (const c of clouds) {
      c.userData.ang += dt * 0.0009 * c.userData.speed;
      c.position.x = Math.cos(c.userData.ang) * c.userData.radius;
      c.position.z = Math.sin(c.userData.ang) * c.userData.radius;
    }

    // Birds.
    for (const b of birds) {
      const d = b.userData;
      d.ang += dt * d.speed * 0.006;
      b.position.x += Math.cos(d.ang) * dt * d.speed * 0.6;
      b.position.z += Math.sin(d.ang) * dt * d.speed * 0.6;
      if (b.position.x > 48) b.position.x = -48;
      if (b.position.z > 36) b.position.z = -36;
      const flap = Math.sin(time * 6 + d.phase) * 0.45;
      b.scale.y = 1 + flap;
    }

    // Sky follows camera so the dome never clips.
    if (camera) sky.position.copy(camera.position);
  };

  return w;
}
