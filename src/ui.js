import { EVENTS, formatProgress } from './events.js';

const $ = (id) => document.getElementById(id);
const fmt = (n) => Math.floor(n).toLocaleString('en-US');

export class UI {
  constructor() {
    this.el = {
      loading: $('loading'),
      menu: $('menu'),
      hud: $('hud'),
      events: $('events'),
      results: $('results'),
      pause: $('pause'),
      score: $('hud-score'),
      best: $('hud-best'),
      event: $('hud-event'),
      objective: $('hud-objective'),
      objectiveProgress: $('hud-objective-progress'),
      objectiveBar: $('hud-objective-bar'),
      time: $('hud-time'),
      speed: $('hud-speed'),
      speedBar: $('speed-bar'),
      comboWrap: $('combo-wrap'),
      comboMult: $('combo-mult'),
      comboBar: $('combo-bar'),
      airMeter: $('air-meter'),
      airBar: $('air-bar'),
      balance: $('balance'),
      balanceMarker: $('balance-marker'),
      letters: $('letters'),
      letterSpans: [...document.querySelectorAll('#letters span')],
      context: $('context-prompt'),
      contextKey: document.querySelector('#context-prompt .key'),
      contextText: $('context-text'),
      trickFeed: $('trick-feed'),
      toast: $('toast'),
      bailFlash: $('bail-flash'),
      goalFlash: $('goal-flash'),
      countdown: $('countdown'),
      countdownSpan: document.querySelector('#countdown span'),
      eventGrid: $('event-grid'),
      resultEyebrow: $('result-eyebrow'),
      resultTitle: $('result-title'),
      resultScore: $('result-score'),
      resultBest: $('result-best'),
      resultTricks: $('result-tricks'),
      resultGrind: $('result-grind'),
      resultAir: $('result-air'),
      resultCombo: $('result-combo'),
      resultObjective: $('result-objective'),
      resultObjectiveText: $('result-objective-text'),
      resultNext: $('result-next'),
      resultRetry: $('result-retry'),
      resultMenu: $('result-menu'),
      menuBest: $('menu-best'),
      menuProgress: $('menu-progress'),
      menuCombo: $('menu-combo'),
      soundLabel: $('sound-label'),
      touchControls: $('touch-controls'),
    };
    this.lastScore = -1;
    this.lastTime = '';
    this.lastSpeed = -1;
    this.lastMult = -1;
    this.lastLetters = '';
    this.lastContext = '';
    this.scorePulse = 0;
    this.bailTimer = null;
    this.goalTimer = null;
    this.toastTimer = null;
    this.countTimer = null;
    this.buildEventGrid();
    this.setSound(false);
  }

  loadingDone() {
    this.el.loading.classList.add('done');
    setTimeout(() => { this.el.loading.style.display = 'none'; }, 800);
  }

  /* ---------------------------------------------------------------- Screens */
  showMenu() {
    this.hideHUD();
    this.hideResults();
    this.hidePause();
    this.hidePanel();
    this.el.menu.classList.remove('is-hidden');
  }

  hideMenu() {
    this.el.menu.classList.add('is-hidden');
  }

  showHUD() {
    this.el.hud.classList.remove('is-hidden');
    if (this.el.touchControls) {
      this.el.touchControls.classList.toggle('is-hidden', !document.body.classList.contains('touch'));
    }
  }

  hideHUD() {
    this.el.hud.classList.add('is-hidden');
    this.el.touchControls?.classList.add('is-hidden');
    this.hideContext();
    this.hideBalance();
  }

  showEvents(progress) {
    this.buildEventGrid(progress);
    this.hideMenu();
    this.hideResults();
    this.hidePause();
    this.el.events.classList.remove('is-hidden');
  }

  hidePanel() {
    this.el.events.classList.add('is-hidden');
  }

  showResults(data) {
    this.hideHUD();
    this.hidePanel();
    this.hidePause();
    this.hideBail();
    this.hideGoal();
    this.setCountdown(null);

    const success = data.success;
    this.el.resultEyebrow.innerHTML = `<i></i> ${data.event.id === 'free' ? 'FREE SKATE SESSION' : success ? 'CAREER EVENT CLEARED' : 'SESSION OVER'}`;
    this.el.resultTitle.innerHTML = success
      ? (data.event.id === 'free' ? 'SESSION <span>BANKED</span>' : 'OBJECTIVE <span>CLEAR</span>')
      : 'TIME\'S <span>UP</span>';
    this.el.resultScore.textContent = fmt(data.score);
    this.el.resultBest.textContent = data.isNewBest ? 'NEW PERSONAL BEST' : `BEST ${fmt(data.best)}`;
    this.el.resultBest.style.color = data.isNewBest ? 'var(--yellow)' : '';
    this.el.resultTricks.textContent = fmt(data.stats.tricks);
    this.el.resultGrind.textContent = `${Math.round(data.stats.grind)} m`;
    this.el.resultAir.textContent = `${data.stats.airTime.toFixed(1)} s`;
    this.el.resultCombo.textContent = `x${Math.max(1, data.stats.bestCombo)}`;
    this.el.resultObjective.classList.toggle('fail', !success);
    this.el.resultObjective.querySelector('.tick').textContent = success ? '✓' : '×';
    this.el.resultObjectiveText.textContent = success
      ? (data.event.id === 'free' ? 'Open session complete' : data.event.goal)
      : `Goal missed — ${data.event.goal}`;
    if (data.next !== null && data.next !== undefined) {
      this.el.resultNext.classList.remove('is-hidden');
      this.el.resultNext.innerHTML = `<span class="btn-label">NEXT EVENT</span><span class="btn-arrow">→</span>`;
    } else {
      this.el.resultNext.classList.add('is-hidden');
    }
    this.el.results.classList.remove('is-hidden');
  }

  hideResults() {
    this.el.results.classList.add('is-hidden');
  }

  showPause() {
    this.el.pause.classList.remove('is-hidden');
  }

  hidePause() {
    this.el.pause.classList.add('is-hidden');
  }

  setSound(muted) {
    document.body.classList.toggle('muted', muted);
    if (this.el.soundLabel) this.el.soundLabel.textContent = muted ? 'MUTED' : 'SOUND';
  }

  /* ---------------------------------------------------------------- Menu */
  updateMenu(progress) {
    const bests = Object.values(progress.best || {});
    const best = Math.max(progress.bestFree || 0, ...bests, 0);
    this.el.menuBest.textContent = fmt(best);
    this.el.menuProgress.textContent = `${progress.completed?.length || 0} / ${EVENTS.length}`;
    this.el.menuCombo.textContent = `x${Math.max(1, progress.bestCombo || 1)}`;
  }

  buildEventGrid(progress = { completed: [] }) {
    const completed = progress.completed || [];
    const isUnlocked = (id) => id === 0 || completed.includes(id - 1);
    this.el.eventGrid.innerHTML = EVENTS.map((ev) => {
      const done = completed.includes(ev.id);
      const unlocked = isUnlocked(ev.id);
      const best = progress.best?.[ev.id];
      return `
        <button class="event-card ${done ? 'complete' : ''} ${unlocked ? '' : 'locked'}" data-id="${ev.id}" data-locked="${unlocked ? 'false' : 'true'}" ${unlocked ? '' : 'aria-disabled="true"'}>
          <span class="event-strip"></span>
          ${done ? '<span class="event-badge done">CLEARED</span>' : unlocked ? '<span class="event-badge">OPEN</span>' : '<span class="event-badge lock">LOCKED</span>'}
          <span class="event-no">EVENT ${ev.no}</span>
          <span class="event-name">${ev.name}</span>
          <span class="event-goal">${ev.goal}</span>
          <span class="event-meta"><span>${ev.duration}s · ${'◆'.repeat(ev.difficulty)}${'◇'.repeat(4 - ev.difficulty)}</span><b>${best ? fmt(best) : unlocked ? '—' : '—'}</b></span>
        </button>
      `;
    }).join('');
  }

  /* ---------------------------------------------------------------- HUD */
  setEvent(ev) {
    this.el.event.textContent = ev.name;
    if (ev.id === 'free') {
      this.el.objective.textContent = 'Ride free. Bank the best score you can.';
      this.el.objectiveProgress.textContent = '∞';
      this.el.objectiveBar.style.width = '0%';
    } else {
      this.el.objective.textContent = ev.goal;
      this.el.objectiveProgress.textContent = `0 / ${ev.target}`;
    }
  }

  updateObjectiveProgress(value, ev) {
    if (ev.id === 'free') return;
    const pct = Math.min(1, value / ev.target);
    this.el.objectiveBar.style.width = `${Math.round(pct * 100)}%`;
    this.el.objectiveProgress.textContent = `${formatProgress(ev, value)} / ${ev.target}`;
  }

  updateHUD(d) {
    const score = fmt(d.score);
    if (score !== this.el.score.textContent) this.el.score.textContent = score;
    this.el.best.textContent = `BEST ${fmt(d.best)}`;

    const t = Math.max(0, d.timeLeft);
    const timeStr = d.free
      ? `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')} LEFT`
      : `${Math.floor(t / 60)}:${String(Math.ceil(t % 60)).padStart(2, '0')}`;
    if (timeStr !== this.lastTime) {
      this.lastTime = timeStr;
      this.el.time.textContent = d.free ? timeStr.replace(' LEFT', '') : timeStr;
      this.el.time.style.color = !d.free && t < 15 ? 'var(--pink)' : '';
    }

    const spd = Math.round(d.speed);
    if (spd !== this.lastSpeed) {
      this.lastSpeed = spd;
      this.el.speed.textContent = spd;
      this.el.speedBar.style.width = `${Math.min(100, (spd / 56) * 100)}%`;
    }

    const mult = d.multiplier;
    if (mult !== this.lastMult) {
      this.lastMult = mult;
      this.el.comboMult.textContent = `x${mult}`;
      this.el.comboWrap.classList.toggle('active', mult > 1 && d.comboCount > 0);
    }
    const pct = d.comboCount > 0 ? Math.max(0, d.comboTimer / d.comboTimerMax) : 0;
    this.el.comboBar.style.width = `${pct * 100}%`;

    if (d.airTime > 0.08 && !d.grinding) {
      this.el.airMeter.classList.remove('is-hidden');
      this.el.airBar.style.width = `${Math.min(100, d.airTime * 55)}%`;
    } else {
      this.el.airMeter.classList.add('is-hidden');
    }

    if (d.free) {
      this.el.objectiveProgress.textContent = '∞';
    }
  }

  pulseScore() {
    const now = performance.now();
    if (now - this.scorePulse < 90) return;
    this.scorePulse = now;
    this.el.score.animate(
      [{ transform: 'scale(1)' }, { transform: 'scale(1.08)' }, { transform: 'scale(1)' }],
      { duration: 180, easing: 'ease-out' },
    );
  }

  resetCombo() {
    this.el.comboWrap.classList.remove('active');
    this.el.comboMult.textContent = 'x1';
    this.el.comboBar.style.width = '0%';
    this.lastMult = 1;
  }

  /* ---------------------------------------------------------------- Feed */
  trickLine(name, points, tone = '') {
    const line = document.createElement('div');
    line.className = `trick-line ${tone}`;
    line.innerHTML = `${name}${points > 0 ? ` <b>+${fmt(points)}</b>` : ''}`;
    this.el.trickFeed.appendChild(line);
    while (this.el.trickFeed.children.length > 6) this.el.trickFeed.firstElementChild.remove();
    setTimeout(() => {
      line.classList.add('fade');
      setTimeout(() => line.remove(), 450);
    }, 1900);
  }

  comboPop(mult) {
    const pop = document.createElement('div');
    pop.className = 'trick-pop';
    pop.innerHTML = `<em>x${mult}</em> COMBO`;
    this.el.trickFeed.appendChild(pop);
    while (this.el.trickFeed.children.length > 6) this.el.trickFeed.firstElementChild.remove();
    setTimeout(() => {
      pop.style.transition = 'opacity .3s, transform .3s';
      pop.style.opacity = '0';
      pop.style.transform = 'translateY(-8px)';
      setTimeout(() => pop.remove(), 350);
    }, 850);
  }

  trickPop(text) {
    const pop = document.createElement('div');
    pop.className = 'trick-pop';
    pop.textContent = text;
    this.el.trickFeed.appendChild(pop);
    setTimeout(() => pop.remove(), 1000);
  }

  /* ---------------------------------------------------------------- Feedback */
  bail(reason = '') {
    this.el.bailFlash.querySelector('small').textContent = reason ? reason.toUpperCase() : 'COMBO LOST';
    this.el.bailFlash.classList.remove('is-hidden');
    clearTimeout(this.bailTimer);
    this.bailTimer = setTimeout(() => this.el.bailFlash.classList.add('is-hidden'), 1250);
  }

  hideBail() {
    clearTimeout(this.bailTimer);
    this.el.bailFlash.classList.add('is-hidden');
  }

  goal() {
    this.el.goalFlash.classList.remove('is-hidden');
    this.el.goalFlash.querySelector('span').textContent = 'GOAL COMPLETE';
    clearTimeout(this.goalTimer);
    this.goalTimer = setTimeout(() => this.el.goalFlash.classList.add('is-hidden'), 2100);
  }

  hideGoal() {
    clearTimeout(this.goalTimer);
    this.el.goalFlash.classList.add('is-hidden');
  }

  setCountdown(text) {
    clearTimeout(this.countTimer);
    if (!text) {
      this.el.countdown.classList.add('is-hidden');
      return;
    }
    this.el.countdown.classList.remove('is-hidden');
    const span = this.el.countdownSpan;
    span.textContent = text;
    span.style.animation = 'none';
    void span.offsetWidth;
    span.style.animation = '';
  }

  toast(text, ms = 2000) {
    const el = this.el.toast;
    el.textContent = text;
    el.classList.remove('show');
    void el.offsetWidth;
    el.classList.add('show');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => el.classList.remove('show'), ms);
  }

  context(key, text) {
    const sig = `${key}|${text}`;
    if (sig === this.lastContext) return;
    this.lastContext = sig;
    this.el.contextKey.textContent = key;
    this.el.contextText.textContent = text;
    this.el.context.classList.remove('is-hidden');
  }

  hideContext() {
    this.lastContext = '';
    this.el.context.classList.add('is-hidden');
  }

  showBalance(show) {
    this.el.balance.classList.toggle('is-hidden', !show);
    if (show) this.updateBalance(0.5);
  }

  updateBalance(v) {
    this.el.balanceMarker.style.left = `${Math.max(0, Math.min(1, v)) * 100}%`;
  }

  hideBalance() {
    this.el.balance.classList.add('is-hidden');
  }

  setLettersVisible(show) {
    this.el.letters.classList.toggle('is-hidden', !show);
  }

  updateLetters(gotSet) {
    const sig = [...gotSet].sort().join('');
    if (sig === this.lastLetters) return;
    this.lastLetters = sig;
    for (const span of this.el.letterSpans) {
      span.classList.toggle('got', gotSet.has(span.dataset.letter));
    }
  }
}
