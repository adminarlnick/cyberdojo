/* CyberDojo – SPA-Router, Rendering und Fortschritt (localStorage). */
(function () {
  "use strict";
  const COURSES = window.COURSES || [];
  const byId = Object.fromEntries(COURSES.map(c => [c.id, c]));
  const app = document.getElementById("app");
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // ── Fortschritt ──────────────────────────────────────────────────────
  const KEY = "cyberdojo.progress.v1";
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; } }
  function save(p) { try { localStorage.setItem(KEY, JSON.stringify(p)); } catch {} }
  const progress = Object.assign({ lessons: {}, quiz: {} }, load());
  function markLesson(cid, lid) { progress.lessons[cid + "/" + lid] = true; save(progress); }
  function lessonDone(cid, lid) { return !!progress.lessons[cid + "/" + lid]; }
  function setQuiz(cid, score, total) {
    const prev = progress.quiz[cid];
    if (!prev || score > prev.score) progress.quiz[cid] = { score, total };
    save(progress);
  }
  function courseUnits(c) { return c.lessons.length + (c.quiz ? 1 : 0); }
  function courseDone(c) {
    let d = c.lessons.filter(l => lessonDone(c.id, l.id)).length;
    if (c.quiz && progress.quiz[c.id] && progress.quiz[c.id].score >= Math.ceil(progress.quiz[c.id].total * 0.6)) d++;
    return d;
  }
  function coursePct(c) { return Math.round(courseDone(c) / courseUnits(c) * 100); }

  // ── Views ────────────────────────────────────────────────────────────
  function courseCard(c) {
    const pct = coursePct(c);
    return `<a class="card course-card" href="#/kurs/${c.id}">
      <div class="ico">${c.icon}</div>
      <h3>${esc(c.title)}</h3>
      <p>${esc(c.summary)}</p>
      <div class="progress-label"><span>${c.lessons.length} Lektionen${c.lab ? " · Übung" : ""}</span><span>${pct}%</span></div>
      <div class="progress"><i style="width:${pct}%"></i></div>
      <div class="meta-row" style="margin-top:.8rem">
        <span class="badge lvl-${c.level}">${c.level}</span>
        <span>⏱ ${esc(c.duration)}</span>
      </div>
    </a>`;
  }

  function viewHome() {
    const total = COURSES.length, lessons = COURSES.reduce((a, c) => a + c.lessons.length, 0);
    return `
    <section class="hero">
      <div>
        <span class="kicker">// Cybersicherheit von Grund auf</span>
        <h1>Lerne, dich und andere im Netz zu schützen.</h1>
        <p class="lead">CyberDojo ist eine kostenlose, interaktive Lernplattform: verständliche Kurse, Quizze und praktische Übungen – vom ersten Passwort bis zu Web-Sicherheit und Kryptographie.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#/kurse">Kurse ansehen →</a>
          <a class="btn btn-ghost" href="#/lab/phishing">Übung starten</a>
        </div>
        <div class="hero-stats">
          <div><div class="num">${total}</div><div class="lbl">Kurse</div></div>
          <div><div class="num">${lessons}+</div><div class="lbl">Lektionen</div></div>
          <div><div class="num">3</div><div class="lbl">interaktive Labore</div></div>
          <div><div class="num">0 €</div><div class="lbl">für immer kostenlos</div></div>
        </div>
      </div>
      <div class="terminal" aria-hidden="true">
        <div class="bar"><span></span><span></span><span></span></div>
<pre><span class="c-m"># Willkommen im CyberDojo</span>
<span class="c-g">$</span> whoami
<span class="c-b">angehende_sicherheitsexpertin</span>
<span class="c-g">$</span> ziele --liste
  [<span class="c-g">x</span>] Phishing erkennen
  [<span class="c-g">x</span>] starke Passwörter &amp; MFA
  [ ] Netzwerke absichern
  [ ] Web-Apps verstehen
  [ ] Krypto-Grundlagen
<span class="c-g">$</span> start --kurs grundlagen
<span class="c-y">Viel Erfolg. Bleib neugierig.</span> ▋</pre>
      </div>
    </section>

    <div class="section-title"><h2>Kurse</h2><a class="link" href="#/kurse">Alle anzeigen →</a></div>
    <div class="grid grid-3">${COURSES.slice(0, 6).map(courseCard).join("")}</div>

    <div class="section-title"><h2>Praktische Übungen</h2><a class="link" href="#/labs">Alle Labore →</a></div>
    <div class="grid grid-3">${window.LABS.map(labCard).join("")}</div>

    <div class="callout" style="margin-top:2.5rem">
      <span class="tag">Hinweis</span>
      <p>CyberDojo dient ausschließlich dem Lernen und der Verteidigung. Wende Techniken nur auf eigenen Systemen oder mit ausdrücklicher Erlaubnis an. In Deutschland ist unbefugtes Hacken strafbar (§§ 202a&nbsp;ff. StGB).</p>
    </div>`;
  }

  function viewCatalog() {
    return `<div class="breadcrumb"><a href="#/">Start</a> / Kurse</div>
      <h1>Alle Kurse</h1>
      <p class="muted">Von Einsteiger bis Fortgeschritten. Dein Fortschritt wird lokal im Browser gespeichert.</p>
      <div class="grid grid-3" style="margin-top:1.5rem">${COURSES.map(courseCard).join("")}</div>`;
  }

  function viewCourse(cid) {
    const c = byId[cid];
    if (!c) return notFound();
    const pct = coursePct(c);
    const rows = c.lessons.map((l, i) => {
      const done = lessonDone(c.id, l.id);
      return `<a class="lesson-row" href="#/kurs/${c.id}/${l.id}">
        <span class="idx ${done ? "done" : ""}">${done ? "✓" : i + 1}</span>
        <span class="t">${esc(l.title)}<small>${esc(l.subtitle || "")}</small></span>
        <span class="chev">→</span></a>`;
    }).join("");
    const qz = progress.quiz[c.id];
    const quizRow = c.quiz ? `<a class="lesson-row" href="#/kurs/${c.id}/quiz">
        <span class="idx quiz">★</span>
        <span class="t">Abschluss-Quiz<small>${qz ? "Bestes Ergebnis: " + qz.score + "/" + qz.total : c.quiz.length + " Fragen"}</small></span>
        <span class="chev">→</span></a>` : "";
    return `<div class="breadcrumb"><a href="#/">Start</a> / <a href="#/kurse">Kurse</a> / ${esc(c.title)}</div>
      <div class="course-head">
        <div class="ico">${c.icon}</div>
        <div style="flex:1;min-width:240px">
          <h1 style="margin-bottom:.3rem">${esc(c.title)}</h1>
          <div class="tag-row"><span class="badge lvl-${c.level}">${c.level}</span><span class="badge">⏱ ${esc(c.duration)}</span>${c.tags.map(t => `<span class="badge">${esc(t)}</span>`).join("")}</div>
          <p class="muted" style="margin:.7rem 0 0">${esc(c.summary)}</p>
        </div>
      </div>
      <div class="progress-label"><span>Fortschritt</span><span>${courseDone(c)}/${courseUnits(c)} · ${pct}%</span></div>
      <div class="progress"><i style="width:${pct}%"></i></div>
      <div class="lesson-list">${rows}${quizRow}</div>
      ${c.lab ? `<p style="margin-top:1.2rem">🧪 Passende Übung: <a href="#/lab/${c.lab}">${esc(window.LABS_BY_ID[c.lab].title)}</a></p>` : ""}`;
  }

  function viewLesson(cid, lid) {
    const c = byId[cid]; if (!c) return notFound();
    if (lid === "quiz") return viewQuiz(c);
    const idx = c.lessons.findIndex(l => l.id === lid);
    const l = c.lessons[idx]; if (!l) return notFound();
    markLesson(c.id, l.id);
    const prev = idx > 0 ? c.lessons[idx - 1] : null;
    const next = idx < c.lessons.length - 1 ? c.lessons[idx + 1] : null;
    const nextHref = next ? `#/kurs/${c.id}/${next.id}` : (c.quiz ? `#/kurs/${c.id}/quiz` : `#/kurs/${c.id}`);
    const nextLbl = next ? "Nächste Lektion →" : (c.quiz ? "Zum Abschluss-Quiz →" : "Zur Kursübersicht →");
    return `<div class="breadcrumb"><a href="#/kurse">Kurse</a> / <a href="#/kurs/${c.id}">${esc(c.title)}</a> / Lektion ${idx + 1}</div>
      <div class="lesson">
        <div>
          <p class="muted" style="margin:0">${c.icon} ${esc(c.title)} · Lektion ${idx + 1}/${c.lessons.length}</p>
          <h1 style="margin:.2rem 0 .1rem">${esc(l.title)}</h1>
          <p class="muted" style="margin:0 0 1.2rem">${esc(l.subtitle || "")}</p>
          <div class="lesson-body">${l.html}</div>
          <div class="lesson-nav">
            ${prev ? `<a class="btn btn-ghost" href="#/kurs/${c.id}/${prev.id}">← Zurück</a>` : `<a class="btn btn-ghost" href="#/kurs/${c.id}">← Übersicht</a>`}
            <a class="btn btn-primary" href="${nextHref}">${nextLbl}</a>
          </div>
        </div>
      </div>`;
  }

  function viewQuiz(c) {
    if (!c.quiz) return notFound();
    setTimeout(() => wireQuiz(c), 0);
    return `<div class="breadcrumb"><a href="#/kurse">Kurse</a> / <a href="#/kurs/${c.id}">${esc(c.title)}</a> / Quiz</div>
      <h1>Abschluss-Quiz: ${esc(c.title)}</h1>
      <p class="muted">Beantworte alle Fragen. Ab 60 % gilt der Kurs als abgeschlossen.</p>
      <form class="quiz" id="quizForm">
        ${c.quiz.map((q, qi) => `<div class="q" data-qi="${qi}">
          <div class="qt">${qi + 1}. ${esc(q.q)}</div>
          ${q.options.map((o, oi) => `<label class="opt"><input type="radio" name="q${qi}" value="${oi}"><span>${esc(o)}</span></label>`).join("")}
          <div class="explain">${esc(q.explain)}</div>
        </div>`).join("")}
        <button type="submit" class="btn btn-primary">Auswerten</button>
      </form>
      <div id="quizResult"></div>`;
  }

  function wireQuiz(c) {
    const form = document.getElementById("quizForm"); if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let score = 0;
      c.quiz.forEach((q, qi) => {
        const qEl = form.querySelector(`.q[data-qi="${qi}"]`);
        const chosen = form.querySelector(`input[name="q${qi}"]:checked`);
        qEl.classList.add("answered");
        qEl.querySelectorAll(".opt").forEach((opt, oi) => {
          opt.classList.remove("correct", "wrong");
          if (oi === q.answer) opt.classList.add("correct");
          else if (chosen && +chosen.value === oi) opt.classList.add("wrong");
        });
        if (chosen && +chosen.value === q.answer) score++;
      });
      setQuiz(c.id, score, c.quiz.length);
      const pct = Math.round(score / c.quiz.length * 100);
      const pass = pct >= 60;
      const res = document.getElementById("quizResult");
      res.innerHTML = `<div class="quiz-result">
        <div class="score" style="color:${pass ? "var(--accent)" : "var(--warn)"}">${score}/${c.quiz.length}</div>
        <p>${pct}% richtig — ${pass ? "bestanden! 🎉 Kurs abgeschlossen." : "noch nicht bestanden (60 % nötig). Schau dir die Erklärungen an und versuch es erneut."}</p>
        <div style="display:flex;gap:.6rem;justify-content:center;flex-wrap:wrap;margin-top:.6rem">
          <a class="btn btn-ghost" href="#/kurs/${c.id}">Zur Kursübersicht</a>
          <a class="btn btn-primary" href="#/dashboard">Mein Fortschritt</a></div></div>`;
      res.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  function labCard(l) {
    return `<a class="card course-card" href="#/lab/${l.id}">
      <div class="ico">${l.icon}</div><h3>${esc(l.title)}</h3><p>${esc(l.desc)}</p>
      <div class="meta-row"><span class="badge">interaktiv</span><span>läuft lokal</span></div></a>`;
  }
  function viewLabs() {
    return `<div class="breadcrumb"><a href="#/">Start</a> / Übungen</div>
      <h1>Praktische Übungen</h1>
      <p class="muted">Lernen durch Ausprobieren. Alle Labore laufen komplett in deinem Browser – es werden keine Eingaben gesendet oder gespeichert.</p>
      <div class="grid grid-3" style="margin-top:1.5rem">${window.LABS.map(labCard).join("")}</div>`;
  }
  function viewLab(id) {
    const lab = window.LABS_BY_ID[id]; if (!lab) return notFound();
    setTimeout(() => { const el = document.getElementById("labMount"); if (el) lab.mount(el); }, 0);
    return `<div class="breadcrumb"><a href="#/labs">Übungen</a> / ${esc(lab.title)}</div>
      <h1>${lab.icon} ${esc(lab.title)}</h1>
      <p class="muted">${esc(lab.desc)}</p>
      <div id="labMount"></div>`;
  }

  function viewDashboard() {
    const totalLessons = COURSES.reduce((a, c) => a + c.lessons.length, 0);
    const doneLessons = COURSES.reduce((a, c) => a + c.lessons.filter(l => lessonDone(c.id, l.id)).length, 0);
    const doneCourses = COURSES.filter(c => coursePct(c) === 100).length;
    const quizzes = Object.keys(progress.quiz).length;
    const certs = COURSES.filter(c => coursePct(c) === 100);
    const rows = COURSES.map(c => {
      const pct = coursePct(c);
      return `<a class="lesson-row" href="#/kurs/${c.id}">
        <span class="idx ${pct === 100 ? "done" : ""}">${pct === 100 ? "✓" : c.icon}</span>
        <span class="t">${esc(c.title)}<small>${courseDone(c)}/${courseUnits(c)} erledigt</small></span>
        <span style="width:120px"><span class="progress"><i style="width:${pct}%"></i></span></span>
        <span class="chev" style="width:42px;text-align:right">${pct}%</span></a>`;
    }).join("");
    const certHtml = certs.length ? certs.map(c => `
      <div class="cert">
        <div class="seal">🏅</div>
        <p class="muted" style="margin:.2rem 0">CyberDojo bescheinigt den Abschluss des Kurses</p>
        <h2 style="margin:.2rem 0">${esc(c.title)}</h2>
        <p class="muted">Quiz bestanden mit ${progress.quiz[c.id] ? progress.quiz[c.id].score + "/" + progress.quiz[c.id].total : "—"} · Alle Lektionen durchgearbeitet.</p>
        <button class="btn btn-ghost btn-sm" onclick="window.print()">Zertifikat drucken / als PDF speichern</button>
      </div>`).join("") : `<p class="muted">Noch kein Kurs vollständig abgeschlossen. Schließe alle Lektionen ab und bestehe das Quiz, um ein Zertifikat zu erhalten.</p>`;
    return `<div class="breadcrumb"><a href="#/">Start</a> / Mein Fortschritt</div>
      <h1>Mein Fortschritt</h1>
      <div class="stat-grid">
        <div class="stat"><div class="n">${doneLessons}/${totalLessons}</div><div class="l">Lektionen</div></div>
        <div class="stat"><div class="n">${doneCourses}</div><div class="l">Kurse fertig</div></div>
        <div class="stat"><div class="n">${quizzes}</div><div class="l">Quizze versucht</div></div>
        <div class="stat"><div class="n">${certs.length}</div><div class="l">Zertifikate</div></div>
      </div>
      <div class="section-title"><h2>Kurse</h2></div>
      <div class="lesson-list">${rows}</div>
      <div class="section-title"><h2>Zertifikate</h2></div>
      ${certHtml}
      <p style="margin-top:2rem"><button class="btn btn-ghost btn-sm" id="resetBtn">Fortschritt zurücksetzen</button></p>`;
  }

  function viewGlossar() {
    const G = [
      ["Authentifizierung", "Nachweis, dass jemand wirklich der/die ist, als die er/sie sich ausgibt (z. B. per Passwort, Code, Fingerabdruck)."],
      ["Brute Force", "Angriff, der systematisch alle Möglichkeiten (z. B. Passwörter) durchprobiert."],
      ["CIA-Triade", "Die drei Schutzziele Vertraulichkeit, Integrität und Verfügbarkeit."],
      ["Exploit", "Code/Technik, die eine konkrete Schwachstelle ausnutzt."],
      ["Firewall", "Filtert Netzwerkverkehr nach Regeln und blockiert Unerwünschtes."],
      ["Hash", "Einweg-Fingerabdruck von Daten fester Länge (z. B. SHA-256)."],
      ["MFA", "Multi-Faktor-Authentifizierung: mehrere unabhängige Nachweise (Wissen, Besitz, Inhärenz)."],
      ["Malware", "Oberbegriff für Schadsoftware: Viren, Würmer, Trojaner, Ransomware, Spyware."],
      ["Patch", "Software-Update, das u. a. Sicherheitslücken schließt."],
      ["Phishing", "Täuschende Nachrichten, die Zugangsdaten oder Geld erbeuten wollen."],
      ["Ransomware", "Schadsoftware, die Daten verschlüsselt und Lösegeld fordert."],
      ["Social Engineering", "Manipulation von Menschen, um an Informationen/Zugänge zu kommen."],
      ["VPN", "Verschlüsselter Tunnel, der Verkehr auch in fremden Netzen schützt."],
      ["XSS", "Cross-Site Scripting: eingeschleuster Code läuft im Browser anderer Nutzer."],
      ["Zero-Day", "Schwachstelle, für die es noch keinen Patch gibt."],
    ];
    return `<div class="breadcrumb"><a href="#/">Start</a> / Glossar</div>
      <h1>Glossar</h1><p class="muted">Die wichtigsten Begriffe auf einen Blick.</p>
      <dl class="gloss">${G.map(([t, d]) => `<dt>${esc(t)}</dt><dd>${esc(d)}</dd>`).join("")}</dl>`;
  }

  function viewUeber() {
    return `<div class="breadcrumb"><a href="#/">Start</a> / Über</div>
      <h1>Über CyberDojo</h1>
      <p class="muted">CyberDojo ist eine freie, quelloffene Lernplattform für Cybersicherheit – gebaut, damit jeder die Grundlagen sicheren Verhaltens im Netz verstehen und üben kann.</p>
      <div class="key-points"><h4>Prinzipien</h4><ul>
        <li>Verständlich statt abschreckend – Sicherheit geht alle an.</li>
        <li>Üben statt nur lesen – interaktive Labore im Browser.</li>
        <li>Datensparsam – kein Konto, kein Tracking; Fortschritt bleibt lokal.</li>
        <li>Nur zur Verteidigung – legale, ethische Nutzung.</li>
      </ul></div>
      <p class="muted">Die Inhalte orientieren sich an etablierten Rahmenwerken (BSI-Empfehlungen, OWASP, NIST) und sind bewusst praxisnah gehalten. Sie ersetzen keine Rechts- oder Sicherheitsberatung.</p>`;
  }

  function notFound() {
    return `<div class="center" style="padding:3rem 0"><h1>404</h1><p class="muted">Diese Seite gibt es nicht.</p>
      <a class="btn btn-primary" href="#/">Zur Startseite</a></div>`;
  }

  // ── Router ───────────────────────────────────────────────────────────
  function render() {
    const hash = location.hash.replace(/^#/, "") || "/";
    const parts = hash.split("/").filter(Boolean); // ["kurs","grundlagen",...]
    let html;
    if (parts.length === 0) html = viewHome();
    else if (parts[0] === "kurse") html = viewCatalog();
    else if (parts[0] === "kurs" && parts.length === 2) html = viewCourse(parts[1]);
    else if (parts[0] === "kurs" && parts.length === 3) html = viewLesson(parts[1], parts[2]);
    else if (parts[0] === "labs") html = viewLabs();
    else if (parts[0] === "lab" && parts[1]) html = viewLab(parts[1]);
    else if (parts[0] === "dashboard") html = viewDashboard();
    else if (parts[0] === "glossar") html = viewGlossar();
    else if (parts[0] === "ueber") html = viewUeber();
    else html = notFound();

    app.innerHTML = html;
    window.scrollTo(0, 0);
    app.focus({ preventScroll: true });

    // Nav active
    document.querySelectorAll("#mainNav a").forEach(a => {
      const h = a.getAttribute("href").replace(/^#/, "");
      a.classList.toggle("active", hash === h || (h !== "/" && hash.startsWith(h)));
    });
    document.getElementById("mainNav").classList.remove("open");

    // Dashboard reset button
    const rb = document.getElementById("resetBtn");
    if (rb) rb.onclick = () => {
      if (confirm("Wirklich den gesamten lokalen Fortschritt löschen?")) {
        localStorage.removeItem(KEY);
        progress.lessons = {}; progress.quiz = {};
        render();
      }
    };
  }

  // Mobile nav
  const navToggle = document.getElementById("navToggle");
  if (navToggle) navToggle.onclick = () => {
    const nav = document.getElementById("mainNav");
    const open = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  };

  window.addEventListener("hashchange", render);
  render();
})();
