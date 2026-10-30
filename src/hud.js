import * as THREE from '../vendor/three.module.js';

const $ = (id) => document.getElementById(id);

export class Hud {
  constructor() {
    this.root = $('hud');
    this.menu = $('menu');
    this.gameover = $('gameover');
    this.waveValue = $('wave-value');
    this.scoreValue = $('score-value');
    this.killsValue = $('kills-value');
    this.healthValue = $('health-value');
    this.healthFill = $('health-fill');
    this.ammoValue = $('ammo-value');
    this.ammoBlock = $('ammo-block');
    this.reloadHint = $('reload-hint');
    this.threatFill = $('threat-fill');
    this.waveBanner = $('wave-banner');
    this.waveBannerTitle = $('wave-banner-title');
    this.waveBannerSub = $('wave-banner-sub');
    this.killfeed = $('killfeed');
    this.crosshair = $('crosshair');
    this.hitmarkerEl = $('hitmarker');
    this.comboEl = $('combo');
    this.damageFlash = $('damage-flash');
    this.damageNumbers = $('damage-numbers');
    this.menuStats = $('menu-stats');
    this.gameoverStats = $('gameover-stats');
    this.bannerTimer = 0;
    this.crosshairSpread = 0;
    this.combo = 0;
    this.comboTimer = 0;
    this.damageNumbersList = [];
    this.mobile = document.body.classList.contains('is-mobile');
    this.projected = new THREE.Vector3();
  }

  setMobile(mobile) {
    this.mobile = mobile;
  }

  showMenu() {
    this.menu.classList.remove('hidden');
    this.gameover.classList.add('hidden');
    this.root.classList.add('hidden');
    document.body.classList.remove('playing');
  }

  startGame() {
    this.menu.classList.add('hidden');
    this.gameover.classList.add('hidden');
    this.root.classList.remove('hidden');
    document.body.classList.add('playing');
    this.combo = 0;
    this.comboEl.classList.remove('show');
  }

  setWave(wave) {
    this.waveValue.textContent = String(wave).padStart(2, '0');
  }

  setScore(score) {
    this.scoreValue.textContent = score.toLocaleString();
  }

  setKills(kills) {
    if (this.killsValue) this.killsValue.textContent = String(kills);
  }

  setHealth(health) {
    const h = Math.max(0, Math.min(100, health));
    this.healthValue.textContent = String(Math.round(h));
    this.healthFill.style.width = `${h}%`;
    this.healthFill.classList.toggle('mid', h <= 55 && h > 28);
    this.healthFill.classList.toggle('low', h <= 28);
    document.body.classList.toggle('critical-health', h <= 28);
  }

  setAmmo(current, reserve = Infinity, reloading = false) {
    this.ammoValue.textContent = String(current).padStart(2, '0');
    this.ammoBlock.classList.toggle('low', current <= 6);
    this.ammoBlock.classList.toggle('reloading', reloading);
    this.reloadHint.textContent = reloading ? 'RELOADING' : current <= 6 ? 'RELOAD // R' : 'R RELOAD';
    const reserveEl = this.ammoBlock.querySelector('.ammo-reserve');
    if (reserveEl) reserveEl.textContent = reserve === Infinity ? '/ ∞' : `/ ${reserve}`;
  }

  setThreat(alive, total) {
    const pct = total > 0 ? Math.max(0, Math.min(1, alive / total)) : 0;
    this.threatFill.style.width = `${pct * 100}%`;
    this.threatFill.classList.toggle('hot', pct > 0.6);
  }

  banner(title, sub = '', duration = 3.2) {
    this.waveBannerTitle.textContent = title;
    this.waveBannerSub.textContent = sub;
    this.waveBanner.classList.remove('show');
    void this.waveBanner.offsetWidth;
    this.waveBanner.classList.add('show');
    this.bannerTimer = duration;
  }

  hideBanner() {
    this.waveBanner.classList.remove('show');
    this.bannerTimer = 0;
  }

  killFeed(name, headshot, kill = true) {
    if (!kill) return;
    const item = document.createElement('div');
    item.className = `killfeed-item${headshot ? ' headshot' : ''}`;
    item.innerHTML = `<span class="kf-tag">${headshot ? 'HEADSHOT' : 'KILL'}</span><span class="kf-name">${name}</span>`;
    this.killfeed.prepend(item);
    while (this.killfeed.children.length > 5) this.killfeed.lastElementChild.remove();
    setTimeout(() => {
      item.classList.add('out');
      setTimeout(() => item.remove(), 380);
    }, 2600);
  }

  hitmarker(kill = false, headshot = false) {
    const el = this.hitmarkerEl;
    el.classList.remove('show', 'kill', 'headshot');
    void el.offsetWidth;
    el.classList.add('show');
    if (kill) el.classList.add('kill');
    if (headshot) el.classList.add('headshot');
  }

  damage() {
    this.damageFlash.classList.remove('hit');
    void this.damageFlash.offsetWidth;
    this.damageFlash.classList.add('hit');
  }

  setCrosshair(spread = 0) {
    const v = 8 + spread * 20;
    this.crosshair.style.setProperty('--gap', `${v}px`);
    this.crosshair.classList.toggle('wide', spread > 0.55);
  }

  comboUp() {
    this.combo++;
    this.comboTimer = 4.2;
    if (this.combo > 1) {
      this.comboEl.textContent = `×${this.combo}`;
      this.comboEl.classList.remove('show');
      void this.comboEl.offsetWidth;
      this.comboEl.classList.add('show');
    }
  }

  comboReset() {
    this.combo = 0;
    this.comboEl.classList.remove('show');
  }

  damageNumber(worldPosition, camera, amount, crit = false, kill = false) {
    const p = this.projected.copy(worldPosition).project(camera);
    if (p.z > 1) return;
    const el = document.createElement('div');
    el.className = `dmg-number${crit ? ' crit' : ''}${kill ? ' kill' : ''}`;
    el.textContent = crit ? `${amount} CRIT` : `${amount}`;
    const x = (p.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-p.y * 0.5 + 0.5) * window.innerHeight;
    el.style.left = `${x + (Math.random() - 0.5) * 26}px`;
    el.style.top = `${y - 20}px`;
    this.damageNumbers.appendChild(el);
    setTimeout(() => el.remove(), 950);
  }

  showGameOver(stats) {
    this.gameoverStats.innerHTML = `
      <div><span>WAVE REACHED</span><strong>${String(stats.wave).padStart(2, '0')}</strong></div>
      <div><span>ZOMBIES ELIMINATED</span><strong>${stats.kills}</strong></div>
      <div><span>FINAL SCORE</span><strong>${stats.score.toLocaleString()}</strong></div>
    `;
    this.gameover.classList.remove('hidden');
    this.root.classList.add('hidden');
    document.body.classList.remove('playing', 'critical-health');
  }

  hideGameOver() {
    this.gameover.classList.add('hidden');
  }

  update(dt) {
    if (this.bannerTimer > 0) {
      this.bannerTimer -= dt;
      if (this.bannerTimer <= 0) this.waveBanner.classList.remove('show');
    }
    if (this.combo > 0) {
      this.comboTimer -= dt;
      if (this.comboTimer <= 0) this.comboReset();
    }
    this.crosshairSpread = Math.max(0, this.crosshairSpread - dt * 1.9);
    this.setCrosshair(this.crosshairSpread);
  }
}
