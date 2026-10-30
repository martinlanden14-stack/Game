import * as THREE from '../vendor/three.module.js';
import {
  makeDirtTexture,
  makeAsphaltTexture,
  makeStoneTexture,
  makeWoodTexture,
  makeMetalTexture,
  makeRustTexture,
  makeBarkTexture,
  makeChainlinkTexture,
  makeClothTexture,
  makeGlowTexture,
  makeSmokeTexture,
  makeMoonTexture
} from './textures.js';

const TAU = Math.PI * 2;
const MOON_DIR = new THREE.Vector3(-0.48, 0.42, -0.77).normalize();

function mulberry32(seed) {
  let a = seed >>> 0;
  return function random() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const smoothstep = (a, b, x) => {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

function mergeableBox(w, h, d, material, x = 0, y = 0, z = 0) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  mesh.position.set(x, y, z);
  return mesh;
}

export class World {
  constructor(renderer, scene, quality = 'high') {
    this.renderer = renderer;
    this.scene = scene;
    this.quality = quality;
    this.random = mulberry32(20261030);
    this.hitMeshes = [];
    this.colliders = [];
    this.fires = [];
    this.fireLights = [];
    this.fogSprites = [];
    this.time = 0;
    this.tmp = new THREE.Vector3();
    this.glow = makeGlowTexture('255,255,255', 2.4);
    this.emberGlow = makeGlowTexture('255,140,44', 1.8);
    this.smoke = makeSmokeTexture();
    this.build();
  }

  build() {
    this.buildSky();
    this.buildLights();
    this.buildGround();
    this.buildBarn();
    this.buildFence();
    this.buildGraveyard();
    this.buildTrees();
    this.buildProps();
    this.buildAtmosphere();
  }

  buildSky() {
    const uniforms = {
      uTime: { value: 0 },
      uMoonDir: { value: MOON_DIR.clone() }
    };
    const sky = new THREE.Mesh(
      new THREE.SphereGeometry(230, 40, 24),
      new THREE.ShaderMaterial({
        side: THREE.BackSide,
        depthWrite: false,
        fog: false,
        uniforms,
        vertexShader: `
          varying vec3 vDir;
          void main() {
            vDir = normalize(position);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec3 vDir;
          uniform float uTime;
          uniform vec3 uMoonDir;
          float hash(vec2 p) {
            return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
          }
          float noise(vec2 p) {
            vec2 i = floor(p);
            vec2 f = fract(p);
            f = f * f * (3.0 - 2.0 * f);
            return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
                       mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
          }
          float fbm(vec2 p) {
            float v = 0.0;
            float a = 0.5;
            for (int i = 0; i < 5; i++) {
              v += a * noise(p);
              p = p * 2.03 + 13.7;
              a *= 0.5;
            }
            return v;
          }
          void main() {
            vec3 d = normalize(vDir);
            float up = max(d.y, 0.0);
            vec3 zenith = vec3(0.012, 0.021, 0.055);
            vec3 horizon = vec3(0.085, 0.066, 0.095);
            vec3 col = mix(horizon, zenith, pow(up, 0.55));
            col += vec3(0.34, 0.09, 0.035) * pow(1.0 - up, 8.0) * 0.55;

            vec2 cloudUV = d.xz / (0.28 + up) * 1.55 + vec2(uTime * 0.004, uTime * 0.0015);
            float clouds = fbm(cloudUV);
            clouds = smoothstep(0.42, 0.86, clouds);
            float cloudMask = clouds * smoothstep(0.0, 0.22, up) * 0.55;
            col = mix(col, vec3(0.052, 0.058, 0.085), cloudMask);

            float moon = max(dot(d, uMoonDir), 0.0);
            col += vec3(0.56, 0.66, 0.92) * pow(moon, 420.0) * 1.4;
            col += vec3(0.16, 0.23, 0.42) * pow(moon, 9.0) * 0.38;

            vec2 sp = vec2(atan(d.z, d.x), asin(clamp(d.y, -1.0, 1.0)));
            vec2 cell = floor(sp * vec2(230.0, 150.0));
            float starHash = hash(cell);
            float star = smoothstep(0.996, 1.0, starHash);
            star *= smoothstep(0.02, 0.24, up);
            float twinkle = 0.72 + 0.28 * sin(uTime * 1.5 + starHash * 31.0);
            col += vec3(0.82, 0.9, 1.0) * star * twinkle * 0.9;

            gl_FragColor = vec4(col, 1.0);
          }
        `
      })
    );
    sky.renderOrder = -10;
    this.sky = sky;
    this.skyUniforms = uniforms;
    this.scene.add(sky);

    const moonTex = makeMoonTexture();
    const moon = new THREE.Sprite(new THREE.SpriteMaterial({
      map: moonTex,
      color: 0xdfe8ff,
      transparent: true,
      depthWrite: false,
      fog: false,
      blending: THREE.AdditiveBlending
    }));
    moon.position.copy(MOON_DIR).multiplyScalar(195);
    moon.scale.set(28, 28, 1);
    moon.renderOrder = -9;
    this.scene.add(moon);

    const halo = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this.glow,
      color: 0x627fc4,
      transparent: true,
      opacity: 0.3,
      depthWrite: false,
      fog: false,
      blending: THREE.AdditiveBlending
    }));
    halo.position.copy(MOON_DIR).multiplyScalar(192);
    halo.scale.set(88, 88, 1);
    halo.renderOrder = -9;
    this.scene.add(halo);
    this.moon = moon;
  }

  buildLights() {
    const hemi = new THREE.HemisphereLight(0x6b83b5, 0x261f16, 1.35);
    const ambient = new THREE.AmbientLight(0x36425e, 0.62);
    this.scene.add(ambient);
    this.scene.add(hemi);

    const moonLight = new THREE.DirectionalLight(0xb4c7ff, 2.55);
    moonLight.position.copy(MOON_DIR).multiplyScalar(65);
    moonLight.castShadow = true;
    moonLight.shadow.mapSize.set(this.quality === 'high' ? 2048 : 1024, this.quality === 'high' ? 2048 : 1024);
    moonLight.shadow.camera.left = -38;
    moonLight.shadow.camera.right = 38;
    moonLight.shadow.camera.top = 38;
    moonLight.shadow.camera.bottom = -38;
    moonLight.shadow.camera.near = 1;
    moonLight.shadow.camera.far = 140;
    moonLight.shadow.bias = -0.0008;
    moonLight.shadow.normalBias = 0.035;
    this.scene.add(moonLight);
    this.scene.add(moonLight.target);
    this.moonLight = moonLight;

    const fill = new THREE.PointLight(0xff6a2c, 12, 18, 2);
    fill.position.set(-6.4, 2.2, 0.6);
    this.scene.add(fill);
    this.fireLights.push({ light: fill, base: 12, phase: 0.4 });

    const fill2 = new THREE.PointLight(0xff7a32, 9, 16, 2);
    fill2.position.set(6.1, 1.8, -3.0);
    this.scene.add(fill2);
    this.fireLights.push({ light: fill2, base: 9, phase: 2.1 });

    const utility = new THREE.SpotLight(0xffd8a0, 22, 22, 0.62, 0.8, 1.7);
    utility.position.set(9.5, 5.4, -4);
    utility.target.position.set(8, 0, -5);
    utility.castShadow = false;
    this.scene.add(utility, utility.target);
    this.utility = utility;
  }

  buildGround() {
    const random = this.random;
    const dirt = makeDirtTexture();
    const asphalt = makeAsphaltTexture();
    const geo = new THREE.PlaneGeometry(170, 170, 96, 96);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const r = Math.sqrt(x * x + y * y);
      const flat = smoothstep(6, 22, r);
      const h = (Math.sin(x * 0.17) * Math.cos(y * 0.13) * 0.32
        + Math.sin(x * 0.43 + y * 0.27) * 0.12
        + Math.cos(x * 0.09 - y * 0.21) * 0.22) * flat;
      pos.setZ(i, h);
    }
    geo.computeVertexNormals();
    geo.rotateX(-Math.PI / 2);
    const mat = new THREE.MeshStandardMaterial({
      map: dirt,
      bumpMap: dirt,
      bumpScale: 0.07,
      roughness: 0.97,
      metalness: 0.02,
      color: 0xb2ada2
    });
    const ground = new THREE.Mesh(geo, mat);
    ground.receiveShadow = true;
    this.scene.add(ground);
    this.hitMeshes.push(ground);
    this.ground = ground;

    const pathMat = new THREE.MeshStandardMaterial({
      map: asphalt,
      bumpMap: asphalt,
      bumpScale: 0.04,
      roughness: 0.88,
      metalness: 0.03,
      color: 0x5c6067
    });
    const path = new THREE.Mesh(new THREE.PlaneGeometry(7.4, 78), pathMat);
    path.rotation.x = -Math.PI / 2;
    path.position.set(0, 0.035, -28);
    path.receiveShadow = true;
    this.scene.add(path);
    this.hitMeshes.push(path);

    const patchMat = new THREE.MeshStandardMaterial({
      color: 0x15171c,
      roughness: 0.18,
      metalness: 0.55,
      transparent: true,
      opacity: 0.88
    });
    for (let i = 0; i < 9; i++) {
      const r = 0.7 + random() * 2.2;
      const puddle = new THREE.Mesh(new THREE.CircleGeometry(r, 14), patchMat);
      puddle.rotation.x = -Math.PI / 2;
      puddle.position.set((random() - 0.5) * 26, 0.05, 4 - random() * 42);
      puddle.scale.y = 0.35 + random() * 0.5;
      this.scene.add(puddle);
    }

    const dashMat = new THREE.MeshBasicMaterial({ color: 0xb8a67d, transparent: true, opacity: 0.2, depthWrite: false });
    for (let z = 4; z > -62; z -= 7.5) {
      const dash = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 2.8), dashMat);
      dash.rotation.x = -Math.PI / 2;
      dash.position.set(0, 0.06, z);
      this.scene.add(dash);
    }

    const rockMat = new THREE.MeshStandardMaterial({
      map: makeStoneTexture(),
      color: 0x676a6a,
      roughness: 0.95,
      metalness: 0.02
    });
    const rockGeo = new THREE.DodecahedronGeometry(1, 0);
    for (let i = 0; i < 36; i++) {
      const rock = new THREE.Mesh(rockGeo, rockMat);
      const a = random() * TAU;
      const r = 7 + random() * 44;
      rock.position.set(Math.cos(a) * r, 0.1 + random() * 0.25, Math.sin(a) * r);
      const s = 0.18 + random() * 0.85;
      rock.scale.set(s * (0.7 + random() * 0.9), s * (0.4 + random() * 0.6), s);
      rock.rotation.set(random() * TAU, random() * TAU, random() * TAU);
      rock.castShadow = true;
      rock.receiveShadow = true;
      this.scene.add(rock);
      this.hitMeshes.push(rock);
      if (s > 0.55) this.colliders.push({ x: rock.position.x, z: rock.position.z, r: s * 0.85 });
    }
  }

  buildBarn() {
    const group = new THREE.Group();
    group.position.set(-15, 0, -33);
    group.rotation.y = 0.22;
    const wood = makeWoodTexture();
    const wallMat = new THREE.MeshStandardMaterial({
      map: wood,
      color: 0xb29a80,
      roughness: 0.92,
      metalness: 0.02
    });
    const darkMat = new THREE.MeshStandardMaterial({
      map: wood,
      color: 0x302a25,
      roughness: 0.9,
      metalness: 0.02
    });
    const stoneMat = new THREE.MeshStandardMaterial({
      map: makeStoneTexture(),
      color: 0x5b5d59,
      roughness: 0.95
    });
    const W = 15;
    const H = 7;
    const D = 11;
    const base = new THREE.Mesh(new THREE.BoxGeometry(W, 1.1, D), stoneMat);
    base.position.y = 0.55;
    base.castShadow = true;
    base.receiveShadow = true;
    group.add(base);

    const back = mergeableBox(W, H, 0.35, wallMat, 0, H / 2 + 1, -D / 2);
    const left = mergeableBox(0.35, H, D, wallMat, -W / 2, H / 2 + 1, 0);
    const right = mergeableBox(0.35, H, D, wallMat, W / 2, H / 2 + 1, 0);
    for (const m of [back, left, right]) {
      m.castShadow = true;
      m.receiveShadow = true;
      group.add(m);
    }

    const frontLeft = mergeableBox(4.2, H, 0.35, wallMat, -W / 2 + 2.1, H / 2 + 1, D / 2);
    const frontRight = mergeableBox(4.2, H, 0.35, wallMat, W / 2 - 2.1, H / 2 + 1, D / 2);
    const frontTop = mergeableBox(6.6, 2.1, 0.35, wallMat, 0, H - 0.05, D / 2);
    for (const m of [frontLeft, frontRight, frontTop]) {
      m.castShadow = true;
      m.receiveShadow = true;
      group.add(m);
    }

    const roofMat = new THREE.MeshStandardMaterial({
      map: wood,
      color: 0x3b342e,
      roughness: 0.95,
      metalness: 0.03
    });
    for (const side of [-1, 1]) {
      const roof = new THREE.Mesh(new THREE.BoxGeometry(W * 0.66, 0.3, D + 1.5), roofMat);
      roof.position.set(side * W * 0.245, H + 2.0, 0);
      roof.rotation.z = side * 0.72;
      roof.castShadow = true;
      roof.receiveShadow = true;
      group.add(roof);
    }
    const ridge = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.45, D + 1.6), darkMat);
    ridge.position.y = H + 3.8;
    ridge.castShadow = true;
    group.add(ridge);

    const door = new THREE.Mesh(new THREE.BoxGeometry(4.1, 5.5, 0.2), darkMat);
    door.position.set(0.65, 3.6, D / 2 + 0.04);
    door.rotation.z = -0.035;
    door.castShadow = true;
    group.add(door);

    const plank = new THREE.Mesh(new THREE.BoxGeometry(5.6, 0.22, 0.14), darkMat);
    plank.position.set(0.8, 2.7, D / 2 + 0.18);
    plank.rotation.z = 0.09;
    group.add(plank);

    const windowMat = new THREE.MeshBasicMaterial({ color: 0xffb45c, transparent: true, opacity: 0.52 });
    for (const [x, y, z] of [[-4.5, 5.4, D / 2 + 0.1], [4.6, 5.4, D / 2 + 0.1], [-W / 2 - 0.19, 5.1, -1.2], [W / 2 + 0.19, 5.1, 2.2]]) {
      const win = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 1.8), windowMat);
      win.position.set(x, y, z);
      if (Math.abs(x) > W / 2) win.rotation.y = Math.PI / 2;
      group.add(win);
    }

    const lanternGlow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this.glow,
      color: 0xffa352,
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    }));
    lanternGlow.position.set(4.8, 3.5, D / 2 + 0.4);
    lanternGlow.scale.set(2.6, 2.6, 1);
    group.add(lanternGlow);
    const lantern = new THREE.PointLight(0xff9a4a, 85, 26, 1.55);
    lantern.position.set(4.8, 3.4, D / 2 + 0.35);
    group.add(lantern);
    this.barnLantern = lantern;

    group.traverse((o) => {
      if (o.isMesh) this.hitMeshes.push(o);
    });
    this.scene.add(group);
    this.barn = group;
    this.colliders.push({ x: -15, z: -33, r: 9.5 });
  }

  buildFence() {
    const posts = 26;
    const radius = 34;
    const postMat = new THREE.MeshStandardMaterial({
      map: makeMetalTexture(),
      color: 0x6d7278,
      roughness: 0.72,
      metalness: 0.65
    });
    const meshTex = makeChainlinkTexture();
    const meshMat = new THREE.MeshBasicMaterial({
      map: meshTex,
      transparent: true,
      opacity: 0.42,
      side: THREE.DoubleSide,
      depthWrite: false,
      color: 0x8e9aa4
    });
    const postGeo = new THREE.CylinderGeometry(0.075, 0.09, 3.0, 6);
    const railGeo = new THREE.CylinderGeometry(0.035, 0.035, 1, 5);
    const group = new THREE.Group();
    let prev = null;
    for (let i = 0; i <= posts; i++) {
      const a = (i / posts) * TAU + 0.14;
      const broken = (i > 5 && i < 9) || (i > 17 && i < 20);
      if (broken) {
        prev = null;
        continue;
      }
      const x = Math.cos(a) * radius;
      const z = Math.sin(a) * radius;
      const post = new THREE.Mesh(postGeo, postMat);
      post.position.set(x, 1.5, z);
      post.rotation.z = (this.random() - 0.5) * 0.08;
      post.castShadow = true;
      group.add(post);
      this.hitMeshes.push(post);
      if (prev) {
        const dx = x - prev.x;
        const dz = z - prev.z;
        const len = Math.hypot(dx, dz);
        const cx = (x + prev.x) / 2;
        const cz = (z + prev.z) / 2;
        const yaw = Math.atan2(dx, dz);
        const panel = new THREE.Mesh(new THREE.PlaneGeometry(len, 2.5), meshMat);
        panel.position.set(cx, 1.42, cz);
        panel.rotation.y = yaw + Math.PI / 2;
        group.add(panel);
        this.hitMeshes.push(panel);
        for (const yy of [0.25, 2.72]) {
          const rail = new THREE.Mesh(railGeo, postMat);
          rail.position.set(cx, yy, cz);
          rail.scale.y = len;
          rail.rotation.z = Math.PI / 2;
          rail.rotation.y = yaw;
          group.add(rail);
        }
      }
      prev = { x, z };
    }
    this.scene.add(group);
  }

  buildGraveyard() {
    const stoneTex = makeStoneTexture();
    const mat = new THREE.MeshStandardMaterial({
      map: stoneTex,
      color: 0x8b8d88,
      roughness: 0.93,
      metalness: 0.02
    });
    const shape = new THREE.Shape();
    shape.moveTo(-0.43, -0.6);
    shape.lineTo(0.43, -0.6);
    shape.lineTo(0.43, 0.22);
    shape.quadraticCurveTo(0.43, 0.62, 0, 0.62);
    shape.quadraticCurveTo(-0.43, 0.62, -0.43, 0.22);
    shape.lineTo(-0.43, -0.6);
    const slabGeo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.16,
      bevelEnabled: true,
      bevelThickness: 0.035,
      bevelSize: 0.03,
      bevelSegments: 2,
      curveSegments: 8
    });
    slabGeo.center();
    slabGeo.rotateY(Math.PI / 2);
    const crossGeo = new THREE.BoxGeometry(0.09, 0.92, 0.09);
    const armGeo = new THREE.BoxGeometry(0.52, 0.09, 0.09);
    const random = this.random;

    for (let i = 0; i < 34; i++) {
      const a = -0.2 + random() * (Math.PI + 0.4);
      const r = 8 + random() * 24;
      const x = Math.cos(a) * r * (0.55 + random() * 0.55);
      const z = -4 - Math.sin(a) * r * 0.95;
      if (Math.abs(x) < 2.2 && z > -24) continue;
      const group = new THREE.Group();
      group.position.set(x, 0, z);
      group.rotation.y = (random() - 0.5) * 0.8;
      group.rotation.z = (random() - 0.5) * 0.22;
      if (random() > 0.74) {
        const a1 = new THREE.Mesh(crossGeo, mat);
        a1.position.y = 0.47;
        const a2 = new THREE.Mesh(armGeo, mat);
        a2.position.set(0, 0.62, 0);
        a1.castShadow = a2.castShadow = true;
        group.add(a1, a2);
      } else {
        const slab = new THREE.Mesh(slabGeo, mat);
        slab.position.y = 0.52;
        slab.castShadow = true;
        slab.receiveShadow = true;
        group.add(slab);
      }
      group.traverse((o) => {
        if (o.isMesh) this.hitMeshes.push(o);
      });
      this.scene.add(group);
      this.colliders.push({ x, z, r: 0.4 });
    }
  }

  makeTree(x, z, scale) {
    const random = this.random;
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    group.scale.setScalar(scale);
    const bark = new THREE.MeshStandardMaterial({
      map: makeBarkTexture(),
      color: 0x57493b,
      roughness: 0.98,
      metalness: 0.01
    });
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.42, 5.3, 7), bark);
    trunk.position.y = 2.55;
    trunk.rotation.z = (random() - 0.5) * 0.12;
    trunk.castShadow = true;
    trunk.receiveShadow = true;
    group.add(trunk);

    const branchGeo = new THREE.CylinderGeometry(0.045, 0.16, 1, 6);
    for (let i = 0; i < 7; i++) {
      const length = 1.1 + random() * 1.7;
      const branch = new THREE.Mesh(branchGeo, bark);
      branch.scale.y = length;
      branch.position.set((random() - 0.5) * 0.5, 3.0 + random() * 2.1, (random() - 0.5) * 0.5);
      branch.rotation.z = (random() > 0.5 ? 1 : -1) * (0.55 + random() * 0.75);
      branch.rotation.y = random() * TAU;
      branch.castShadow = true;
      group.add(branch);
      for (let j = 0; j < 2; j++) {
        const twig = new THREE.Mesh(branchGeo, bark);
        twig.scale.set(0.45, length * 0.55, 0.45);
        twig.position.copy(branch.position);
        twig.rotation.copy(branch.rotation);
        twig.rotation.z += (random() - 0.5) * 1.5;
        twig.rotation.y += (random() - 0.5) * 1.3;
        twig.translateY(length * 0.35);
        twig.castShadow = true;
        group.add(twig);
      }
    }
    group.traverse((o) => {
      if (o.isMesh) this.hitMeshes.push(o);
    });
    this.scene.add(group);
    this.colliders.push({ x, z, r: 0.55 * scale });
    return group;
  }

  buildTrees() {
    const points = [
      [-24, -14, 1.15], [-10, -22, 1.0], [14, -20, 1.2], [26, -8, 0.9],
      [-30, 8, 1.3], [22, 19, 1.05], [-18, 24, 0.95], [9, 27, 1.25],
      [-35, -5, 1.4], [31, 2, 1.1], [-7, -38, 1.35], [30, -26, 1.2]
    ];
    for (const [x, z, s] of points) this.makeTree(x, z, s);
  }

  makeBarrel(x, z, withFire = true) {
    const rust = new THREE.MeshStandardMaterial({
      map: makeRustTexture(),
      color: 0x8a6a4e,
      roughness: 0.88,
      metalness: 0.42
    });
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.47, 0.47, 1.12, 14, 1, true), rust);
    body.position.y = 0.56;
    body.castShadow = true;
    body.receiveShadow = true;
    group.add(body);
    for (const y of [0.14, 0.56, 0.98]) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.475, 0.025, 5, 16), rust);
      ring.position.y = y;
      ring.rotation.x = Math.PI / 2;
      group.add(ring);
    }
    this.scene.add(group);
    this.hitMeshes.push(body);
    this.colliders.push({ x, z, r: 0.62 });

    if (withFire) {
      const flame = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.emberGlow,
        color: 0xff7a25,
        transparent: true,
        opacity: 0.95,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      }));
      flame.position.set(x, 1.35, z);
      flame.scale.set(1.5, 2.4, 1);
      this.scene.add(flame);
      const flame2 = flame.clone();
      flame2.material = flame.material.clone();
      flame2.material.color.setHex(0xffd36a);
      flame2.position.y = 1.8;
      flame2.scale.set(0.8, 1.3, 1);
      this.scene.add(flame2);
      this.fires.push({ a: flame, b: flame2, x, z, phase: this.random() * TAU });
    }
    return group;
  }

  buildProps() {
    const random = this.random;
    this.makeBarrel(-6.5, 0.5);
    this.makeBarrel(6.1, -3.0);
    this.makeBarrel(-14, -9, false);
    this.makeBarrel(16, -13, false);

    const wood = makeWoodTexture();
    const crateMat = new THREE.MeshStandardMaterial({
      map: wood,
      color: 0x7b6149,
      roughness: 0.9,
      metalness: 0.02
    });
    const plankMat = new THREE.MeshStandardMaterial({
      map: wood,
      color: 0x453426,
      roughness: 0.92
    });
    const cratePositions = [[-4.6, 6.4, 0.7], [-3.6, 6.2, 0.55], [5.2, 5.6, 0.8], [5.9, 6.5, 0.55]];
    for (const [x, z, s] of cratePositions) {
      const crate = new THREE.Mesh(new THREE.BoxGeometry(1.25, 1.25, 1.25), crateMat);
      crate.position.set(x, s, z);
      crate.scale.setScalar(s * 1.5);
      crate.rotation.y = random() * 0.5;
      crate.castShadow = true;
      crate.receiveShadow = true;
      this.scene.add(crate);
      this.hitMeshes.push(crate);
      this.colliders.push({ x, z, r: s * 0.95 });
      for (const yy of [-0.42, 0.42]) {
        const band = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.12, 1.35), plankMat);
        band.position.set(x, s + (yy * s * 1.5), z);
        band.rotation.y = crate.rotation.y;
        band.scale.setScalar(s * 1.5);
        this.scene.add(band);
      }
    }

    const bagMat = new THREE.MeshStandardMaterial({
      map: makeClothTextureSafe(),
      color: 0x6b5a42,
      roughness: 0.98,
      metalness: 0.01
    });
    const bagGeo = new THREE.SphereGeometry(0.44, 8, 6);
    for (let row = 0; row < 2; row++) {
      for (let i = 0; i < 5; i++) {
        const x = -3.2 + i * 1.25 + (row % 2) * 0.55;
        const z = -3.8 - row * 0.52;
        const bag = new THREE.Mesh(bagGeo, bagMat);
        bag.position.set(x, 0.28 + row * 0.34, z);
        bag.scale.set(1.25, 0.52, 0.72);
        bag.rotation.y = (random() - 0.5) * 0.3;
        bag.castShadow = true;
        bag.receiveShadow = true;
        this.scene.add(bag);
        this.hitMeshes.push(bag);
      }
    }
    this.colliders.push({ x: -1.9, z: -4.05, r: 3.3 });

    const lampMat = new THREE.MeshStandardMaterial({
      map: makeMetalTexture(),
      color: 0x3c4147,
      roughness: 0.7,
      metalness: 0.7
    });
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.13, 5.3, 7), lampMat);
    pole.position.set(9.5, 2.65, -4);
    pole.castShadow = true;
    this.scene.add(pole);
    this.hitMeshes.push(pole);
    const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 1.2, 6), lampMat);
    arm.position.set(8.98, 5.2, -4);
    arm.rotation.z = Math.PI / 2;
    this.scene.add(arm);
    const shade = new THREE.Mesh(new THREE.ConeGeometry(0.36, 0.32, 8, 1, true), lampMat);
    shade.position.set(8.45, 5.08, -4);
    shade.rotation.x = Math.PI;
    this.scene.add(shade);
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffd7a0 }));
    bulb.position.set(8.45, 4.9, -4);
    this.scene.add(bulb);
    const bulbGlow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this.glow,
      color: 0xffb968,
      transparent: true,
      opacity: 0.75,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    }));
    bulbGlow.position.copy(bulb.position);
    bulbGlow.scale.set(2.6, 2.6, 1);
    this.scene.add(bulbGlow);
    this.colliders.push({ x: 9.5, z: -4, r: 0.35 });
  }

  buildAtmosphere() {
    const random = this.random;
    const count = 520;
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count * 2);
    for (let i = 0; i < count; i++) {
      const a = random() * TAU;
      const r = 2 + random() * 38;
      positions[i * 3] = Math.cos(a) * r;
      positions[i * 3 + 1] = 0.2 + random() * 7;
      positions[i * 3 + 2] = Math.sin(a) * r + 6;
      speeds[i * 2] = 0.06 + random() * 0.18;
      speeds[i * 2 + 1] = random() * TAU;
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const dustMat = new THREE.PointsMaterial({
      map: this.glow,
      color: 0xaebbd0,
      size: 0.085,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });
    const dust = new THREE.Points(dustGeo, dustMat);
    dust.frustumCulled = false;
    this.scene.add(dust);
    this.dust = { points: dust, positions, speeds, count };

    for (let i = 0; i < 16; i++) {
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.smoke,
        color: 0x697383,
        transparent: true,
        opacity: 0.075 + random() * 0.05,
        depthWrite: false
      }));
      const a = random() * TAU;
      const r = 7 + random() * 26;
      sprite.position.set(Math.cos(a) * r, 0.7 + random() * 1.2, Math.sin(a) * r - 2);
      const s = 9 + random() * 10;
      sprite.scale.set(s, s * 0.46, 1);
      this.scene.add(sprite);
      this.fogSprites.push({ sprite, baseX: sprite.position.x, baseZ: sprite.position.z, phase: random() * TAU });
    }

    const emberCount = 90;
    const emberPos = new Float32Array(emberCount * 3);
    const emberData = [];
    for (let i = 0; i < emberCount; i++) {
      const source = i % 2 === 0 ? [-6.5, 0.5] : [6.1, -3.0];
      emberPos[i * 3] = source[0] + (random() - 0.5) * 0.5;
      emberPos[i * 3 + 1] = 1.1 + random() * 2.4;
      emberPos[i * 3 + 2] = source[1] + (random() - 0.5) * 0.5;
      emberData.push({
        source,
        vy: 0.5 + random() * 1.4,
        vx: (random() - 0.5) * 0.22,
        vz: (random() - 0.5) * 0.22,
        life: random() * 2.4,
        max: 1.8 + random() * 1.8
      });
    }
    const emberGeo = new THREE.BufferGeometry();
    emberGeo.setAttribute('position', new THREE.BufferAttribute(emberPos, 3));
    const embers = new THREE.Points(emberGeo, new THREE.PointsMaterial({
      map: this.emberGlow,
      color: 0xff9a42,
      size: 0.14,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    }));
    embers.frustumCulled = false;
    this.scene.add(embers);
    this.embers = { points: embers, positions: emberPos, data: emberData };
  }

  update(dt, elapsed, camera, playerPos) {
    this.time = elapsed;
    this.sky.position.copy(camera.position);
    this.skyUniforms.uTime.value = elapsed;
    this.moon.position.copy(camera.position).addScaledVector(MOON_DIR, 195);
    this.moonLight.position.copy(playerPos).addScaledVector(MOON_DIR, 60);
    this.moonLight.target.position.set(playerPos.x, 0, playerPos.z);

    for (const fire of this.fireLights) {
      const flicker = Math.sin(elapsed * 13 + fire.phase) * 0.16
        + Math.sin(elapsed * 27.7 + fire.phase * 3) * 0.09
        + Math.sin(elapsed * 6.1 + fire.phase) * 0.08;
      fire.light.intensity = fire.base * (1 + flicker);
    }
    if (this.utility) this.utility.intensity = 22 + Math.sin(elapsed * 19.3) * 2 + Math.sin(elapsed * 3.7) * 3;

    for (const f of this.fires) {
      const t = elapsed * 11 + f.phase;
      const s = 1 + Math.sin(t) * 0.13 + Math.sin(t * 2.7) * 0.08;
      f.a.scale.set(1.5 * s, 2.4 * (1 + Math.sin(t * 0.7) * 0.1), 1);
      f.a.material.opacity = 0.78 + Math.sin(t * 1.3) * 0.12;
      f.b.scale.set(0.8 * s, 1.35 * s, 1);
      f.b.material.opacity = 0.6 + Math.sin(t * 1.8 + 1) * 0.15;
    }

    for (const { sprite, baseX, baseZ, phase } of this.fogSprites) {
      sprite.position.x = baseX + Math.sin(elapsed * 0.06 + phase) * 4;
      sprite.position.z = baseZ + Math.cos(elapsed * 0.045 + phase) * 3;
      sprite.material.opacity = 0.07 + Math.sin(elapsed * 0.3 + phase) * 0.025;
    }

    const dust = this.dust;
    for (let i = 0; i < dust.count; i++) {
      const i3 = i * 3;
      dust.positions[i3] += Math.sin(elapsed * 0.3 + dust.speeds[i * 2 + 1]) * dt * 0.12;
      dust.positions[i3 + 1] += dt * dust.speeds[i * 2];
      dust.positions[i3 + 2] += Math.cos(elapsed * 0.23 + dust.speeds[i * 2 + 1]) * dt * 0.1;
      if (dust.positions[i3 + 1] > 8) {
        dust.positions[i3 + 1] = 0.2;
        dust.positions[i3] = playerPos.x + (this.random() - 0.5) * 44;
        dust.positions[i3 + 2] = playerPos.z + (this.random() - 0.5) * 44;
      }
    }
    dust.points.geometry.attributes.position.needsUpdate = true;

    const embers = this.embers;
    for (let i = 0; i < embers.data.length; i++) {
      const d = embers.data[i];
      const i3 = i * 3;
      d.life += dt;
      if (d.life > d.max) {
        d.life = 0;
        embers.positions[i3] = d.source[0] + (this.random() - 0.5) * 0.5;
        embers.positions[i3 + 1] = 1.05;
        embers.positions[i3 + 2] = d.source[1] + (this.random() - 0.5) * 0.5;
      }
      embers.positions[i3] += d.vx * dt + Math.sin(elapsed * 2 + i) * dt * 0.12;
      embers.positions[i3 + 1] += d.vy * dt;
      embers.positions[i3 + 2] += d.vz * dt;
    }
    embers.points.geometry.attributes.position.needsUpdate = true;
  }

  collide(position, radius) {
    for (const c of this.colliders) {
      const dx = position.x - c.x;
      const dz = position.z - c.z;
      const dist = Math.hypot(dx, dz);
      const min = radius + c.r;
      if (dist > 0.0001 && dist < min) {
        position.x = c.x + (dx / dist) * min;
        position.z = c.z + (dz / dist) * min;
      }
    }
    const r = Math.hypot(position.x, position.z - 8);
    if (r > 31) {
      const a = Math.atan2(position.z - 8, position.x);
      position.x = Math.cos(a) * 31;
      position.z = 8 + Math.sin(a) * 31;
    }
  }
}

function makeClothTextureSafe() {
  return makeClothTexture([110, 92, 68]);
}
