import { game, ui, clamp, roman, setText } from './core.js';
import { audio } from './audio.js';

export function showBanner(kicker, title, sub, seconds) {
  ui.bannerKicker.textContent = kicker;
  ui.bannerTitle.textContent = title;
  ui.bannerSub.textContent = sub;
  ui.banner.classList.add('show');
  game.bannerTimer = seconds || 2.6;
}

export function hideBanner() {
  game.bannerTimer = 0;
  ui.banner.classList.remove('show');
}

export function updateUI() {
  const p = game.player;
  if (!p) return;
  setText(ui.level, p.level);
  ui.hpFill.style.width = clamp((p.hp / p.maxHp) * 100, 0, 100) + '%';
  setText(ui.hpText, Math.max(0, Math.ceil(p.hp)) + '/' + p.maxHp);
  ui.xpFill.style.width = clamp((p.xp / p.xpNext) * 100, 0, 100) + '%';
  setText(ui.xpText, Math.floor(p.xp) + '/' + p.xpNext);
  ui.lustFill.style.width = clamp(p.bloodlust, 0, 100) + '%';
  setText(ui.lustText, Math.floor(p.bloodlust));
  ui.lustFill.closest('.bar').classList.toggle('is-full', p.frenzy > 0);
  setText(ui.night, roman(game.night));
  const alive = game.enemies.filter(function (enemy) { return !enemy.dead; }).length;
  const prey = game.state === 'playing' && game.waveActive ? game.spawnQueue.length + alive : 0;
  setText(ui.prey, prey);
  setText(ui.souls, game.souls);

  if (game.state === 'playing' && game.comboHits >= 2 && game.comboTimer > 0) {
    ui.combo.classList.add('show');
    setText(ui.comboNum, game.comboHits);
  } else {
    ui.combo.classList.remove('show');
  }

  if (game.boss && !game.boss.dead) {
    ui.bossFill.style.width = clamp((game.boss.hp / game.boss.maxHp) * 100, 0, 100) + '%';
    ui.bossBar.classList.add('show');
  } else {
    ui.bossBar.classList.remove('show');
  }

  let nearestCount = 0;
  if (game.state === 'playing' && p.frenzy <= 0) {
    for (let i = 0; i < game.gibs.length; i += 1) {
      const g = game.gibs[i];
      const d = Math.hypot(g.x - p.x, (g.y - p.y) * 1.1);
      if (d < 40) nearestCount += 1;
    }
  }
  ui.prompt.classList.toggle('show', nearestCount > 0);
  if (nearestCount > 1) ui.promptText.textContent = 'DEVOUR THE REMAINS  ×' + nearestCount;
  else ui.promptText.textContent = 'DEVOUR THE REMAINS';
  ui.damageFlash.style.opacity = String(game.damageVignette * 0.5);
  ui.sound.textContent = audio.muted ? 'SOUND OFF' : 'SOUND ON';
}

export function clearPrompt() {
  ui.prompt.classList.remove('show');
  ui.combo.classList.remove('show');
}

export function setBoss(name) {
  ui.bossName.textContent = name;
  ui.bossBar.classList.add('show');
}

export function clearBoss() {
  ui.bossBar.classList.remove('show');
  ui.bossFill.style.width = '0%';
}
