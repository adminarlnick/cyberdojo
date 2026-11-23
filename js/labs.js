/* CyberDojo – interaktive Übungen. Alles läuft lokal im Browser, nichts wird gesendet. */
(function () {
  const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // ── Passwort-Stärke-Analyzer ───────────────────────────────────────────
  const COMMON = ["123456", "password", "passwort", "123456789", "qwertz", "qwerty", "111111",
    "12345678", "abc123", "sommer2026", "iloveyou", "admin", "letmein", "welcome", "monkey",
    "1234567890", "hallo123", "schalke04", "bayern", "master"];

  function analyzePassword(pw) {
    if (!pw) return null;
    let pool = 0;
    if (/[a-z]/.test(pw)) pool += 26;
    if (/[A-Z]/.test(pw)) pool += 26;
    if (/[0-9]/.test(pw)) pool += 10;
    if (/[^A-Za-z0-9]/.test(pw)) pool += 33;
    const entropy = pw.length * (Math.log2(pool || 1));
    const guesses = Math.pow(2, entropy);
    const perSec = 1e10; // 10 Mrd/s offline-Annahme
    const seconds = guesses / 2 / perSec;
    const isCommon = COMMON.includes(pw.toLowerCase());
    let score = Math.min(100, Math.round(entropy / 0.9));
    if (isCommon) score = 3;
    if (pw.length < 8) score = Math.min(score, 25);
    const label = score < 25 ? "Sehr schwach" : score < 45 ? "Schwach" : score < 65 ? "Mittel" : score < 85 ? "Stark" : "Sehr stark";
    const color = score < 25 ? "#ff6b6b" : score < 45 ? "#ffbe4d" : score < 65 ? "#ffe14d" : score < 85 ? "#8ee06a" : "#36e2a4";
    const tips = [];
    if (pw.length < 16) tips.push("Mach es länger – eine Passphrase aus 4+ zufälligen Wörtern ist stark und merkbar.");
    if (!/[^A-Za-z0-9]/.test(pw)) tips.push("Ein Sonderzeichen erhöht den Zeichenvorrat.");
    if (isCommon) tips.push("Dieses Passwort steht in jeder Angreifer-Liste – niemals verwenden!");
    if (/^(.)\1+$/.test(pw) || /^(..)\1+$/.test(pw)) tips.push("Wiederholungen sind leicht zu raten.");
    if (!tips.length) tips.push("Solide! Verwende es trotzdem nur für einen einzigen Dienst.");
    return { entropy, seconds, isCommon, score, label, color, tips };
  }

  function humanTime(s) {
    if (s < 1) return "weniger als 1 Sekunde";
    const u = [["Jahrhunderte", 3.15e9], ["Jahre", 3.15e7], ["Tage", 86400], ["Stunden", 3600], ["Minuten", 60], ["Sekunden", 1]];
    for (const [n, v] of u) { if (s >= v) { const x = s / v; return (x > 1000 ? Math.round(x).toLocaleString("de-DE") : x.toFixed(1)) + " " + n; } }
    return "Sekundenbruchteile";
  }

  const passwordLab = {
    id: "password", title: "Passwort-Stärke-Analyzer", icon: "🔑",
    desc: "Tippe ein Passwort und sieh sofort Länge, Entropie und geschätzte Knackzeit. Alles bleibt im Browser.",
    mount(el) {
      el.innerHTML = `
        <div class="lab-tool">
          <label for="pwIn">Passwort testen (wird nicht gespeichert/gesendet)</label>
          <input type="text" id="pwIn" autocomplete="off" spellcheck="false" placeholder="z. B. richtiges-pferd-batterie">
          <div class="strength-meter"><i id="pwBar"></i></div>
          <div id="pwLabel" class="muted">—</div>
          <div class="result-box" id="pwOut">Warte auf Eingabe …</div>
          <p class="muted" style="font-size:.82rem;margin-top:.8rem">Knackzeit = grobe Schätzung bei 10 Mrd. Versuchen/Sekunde (schneller Offline-Angriff gegen gestohlene Hashes).</p>
        </div>`;
      const inp = el.querySelector("#pwIn"), bar = el.querySelector("#pwBar"),
        lab = el.querySelector("#pwLabel"), out = el.querySelector("#pwOut");
      inp.addEventListener("input", () => {
        const r = analyzePassword(inp.value);
        if (!r) { bar.style.width = "0"; lab.textContent = "—"; out.textContent = "Warte auf Eingabe …"; return; }
        bar.style.width = r.score + "%"; bar.style.background = r.color;
        lab.innerHTML = `<strong style="color:${r.color}">${r.label}</strong> · ${r.score}/100`;
        out.textContent =
          `Länge:        ${inp.value.length} Zeichen\n` +
          `Entropie:     ${r.entropy.toFixed(1)} Bit\n` +
          `Knackzeit:    ${humanTime(r.seconds)}\n` +
          `Bekannt/Leak: ${r.isCommon ? "JA – in Standardlisten!" : "nicht in der Beispielliste"}\n\n` +
          "Tipps:\n- " + r.tips.join("\n- ");
      });
      inp.focus();
    }
  };

  // ── Phishing-Erkennungs-Training ───────────────────────────────────────
  const PHISH = [
    { kind: "email", from: "service@paypaI-sicherheit.com", subject: "Ihr Konto wurde eingeschränkt – jetzt handeln!",
      body: "Sehr geehrter Kunde, wir haben ungewöhnliche Aktivitäten festgestellt. Bestätigen Sie innerhalb von 24 Stunden Ihre Daten, sonst wird Ihr Konto gesperrt. Jetzt verifizieren: http://paypal.konto-check.ru/login",
      phish: true, why: "Großschreib-'I' statt 'l' in der Domain, fremde Domain (.ru / konto-check), Zeitdruck und Drohung – klassisches Phishing." },
    { kind: "url", url: "https://www.amazon.de/gp/css/order-history", phish: false,
      why: "Echte amazon.de-Domain, HTTPS, plausibler Pfad. Kein Warnsignal." },
    { kind: "email", from: "noreply@dhl.de", subject: "Ihre Sendung ist angekommen",
      body: "Hallo, Ihr Paket mit der Nr. 00340... wartet in der Packstation. Details in Ihrem DHL-Konto. Sie erhalten diese Nachricht, weil Sie eine Lieferung erwarten.",
      phish: false, why: "Plausible Absenderdomain, kein Link-Zwang, kein Druck, keine Datenabfrage. Wirkt legitim (im Zweifel trotzdem über die App prüfen)." },
    { kind: "sms", url: "Ihr Paket konnte nicht zugestellt werden. Zollgebühr 2,99€ zahlen: https://dhl-paket.de-verfolgung.info/pay",
      phish: true, why: "Smishing: Mini-Betrag, Druck, und die echte Domain ist 'de-verfolgung.info' – nicht dhl.de." },
    { kind: "url", url: "http://sparkasse.de.secure-login-portal.com/konto", phish: true,
      why: "Die echte Domain ist 'secure-login-portal.com' (direkt vor dem ersten /). 'sparkasse.de.' ist nur eine Sub-Domain-Täuschung. Außerdem http statt https." },
    { kind: "email", from: "it-support@firma-intern.de", subject: "Passwort läuft heute ab",
      body: "Ihr Passwort läuft in 2 Stunden ab. Setzen Sie es sofort zurück, sonst verlieren Sie den Zugang. Klicken Sie hier und geben Sie Ihr aktuelles Passwort ein: http://192.168.44.9/reset",
      phish: true, why: "Starker Zeitdruck, Abfrage des AKTUELLEN Passworts (das würde eine echte IT nie verlangen), roher IP-Link statt Firmenportal." },
  ];

  const phishingLab = {
    id: "phishing", title: "Phishing-Erkennungs-Training", icon: "🎣",
    desc: "Echt oder Betrug? Beurteile jede Nachricht und lerne aus der Auflösung.",
    mount(el) {
      let i = 0, score = 0, answered = false;
      function render() {
        if (i >= PHISH.length) {
          el.innerHTML = `<div class="quiz-result"><div class="score" style="color:var(--accent)">${score}/${PHISH.length}</div>
            <p>richtig erkannt.</p>
            <p class="muted">${score === PHISH.length ? "Perfekt – dein Phishing-Radar sitzt!" : score >= PHISH.length - 1 ? "Sehr gut! Fast alles erkannt." : "Schau dir die Erklärungen oben nochmal an und wiederhole die Übung."}</p>
            <button class="btn btn-ghost" id="again">Nochmal</button></div>`;
          el.querySelector("#again").onclick = () => { i = 0; score = 0; render(); };
          return;
        }
        const c = PHISH[i];
        let content = "";
        if (c.kind === "email") content = `<div><span class="pill" style="background:var(--panel-2);color:var(--muted)">E-Mail</span><br><br><strong>Von:</strong> ${esc(c.from)}<br><strong>Betreff:</strong> ${esc(c.subject)}<br><br>${esc(c.body)}</div>`;
        else if (c.kind === "sms") content = `<div><span class="pill" style="background:var(--panel-2);color:var(--muted)">SMS</span><br><br>${esc(c.url)}</div>`;
        else content = `<div><span class="pill" style="background:var(--panel-2);color:var(--muted)">Link</span><br><br>Du sollst diesen Link öffnen:<br><strong>${esc(c.url)}</strong></div>`;
        el.innerHTML = `
          <div class="progress-label"><span>Nachricht ${i + 1} von ${PHISH.length}</span><span>Punkte: ${score}</span></div>
          <div class="progress"><i style="width:${(i / PHISH.length) * 100}%"></i></div>
          <div class="phish-card">${content}</div>
          <div class="phish-actions">
            <button class="btn btn-primary" data-a="legit">✔ Sieht echt aus</button>
            <button class="btn btn-ghost" data-a="phish">⚠ Phishing / Betrug</button>
          </div>
          <div id="verdict"></div>`;
        answered = false;
        el.querySelectorAll("[data-a]").forEach(b => b.onclick = () => {
          if (answered) return; answered = true;
          const saysPhish = b.dataset.a === "phish";
          const correct = saysPhish === c.phish;
          if (correct) score++;
          const v = el.querySelector("#verdict");
          v.innerHTML = `<div class="callout ${correct ? "" : "danger"}" style="margin-top:1rem">
            <span class="tag">${correct ? "Richtig!" : "Leider falsch"}</span>
            <p>Das ist <strong>${c.phish ? "Phishing" : "legitim"}</strong>. ${esc(c.why)}</p>
            <button class="btn btn-ghost btn-sm" id="next">${i + 1 < PHISH.length ? "Nächste →" : "Ergebnis anzeigen"}</button></div>`;
          v.querySelector("#next").onclick = () => { i++; render(); };
        });
      }
      render();
    }
  };

  // ── Krypto-Labor ───────────────────────────────────────────────────────
  function caesar(text, shift) {
    return text.replace(/[a-zA-ZäöüÄÖÜ]/g, ch => {
      const base = ch <= "Z" ? 65 : 97;
      if (ch < "A" || (ch > "Z" && ch < "a") || ch > "z") return ch; // Umlaute unverändert
      return String.fromCharCode((ch.charCodeAt(0) - base + ((shift % 26) + 26)) % 26 + base);
    });
  }
  function xorHex(text, key) {
    if (!key) return "";
    let out = "";
    for (let i = 0; i < text.length; i++) {
      const c = text.charCodeAt(i) ^ key.charCodeAt(i % key.length);
      out += c.toString(16).padStart(2, "0");
    }
    return out;
  }
  async function sha256(text) {
    if (!(window.crypto && crypto.subtle)) return "(Web-Crypto nicht verfügbar – bitte über https/Pages öffnen)";
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
    return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, "0")).join("");
  }

  const cryptoLab = {
    id: "crypto", title: "Krypto-Labor", icon: "🔐",
    desc: "Spiele mit Caesar-Verschiebung, XOR und berechne live SHA-256. Zum Verstehen, nicht für echten Schutz.",
    mount(el) {
      el.innerHTML = `
        <div class="lab-tool">
          <h3 style="margin-top:0">Caesar-Chiffre</h3>
          <label>Text</label><input type="text" id="cIn" value="Angriff bei Morgengrauen">
          <label>Verschiebung: <span id="cShiftVal">3</span></label>
          <input type="range" id="cShift" min="0" max="25" value="3" style="width:100%">
          <div class="result-box" id="cOut"></div>
          <p class="muted" style="font-size:.82rem">Caesar ist in Sekunden knackbar (nur 25 Möglichkeiten) – ein historisches Lehrbeispiel, keine echte Verschlüsselung.</p>
        </div>
        <div class="lab-tool">
          <h3 style="margin-top:0">XOR-Verschlüsselung (Hex)</h3>
          <label>Klartext</label><input type="text" id="xIn" value="geheim">
          <label>Schlüssel</label><input type="text" id="xKey" value="key">
          <div class="result-box" id="xOut"></div>
        </div>
        <div class="lab-tool">
          <h3 style="margin-top:0">SHA-256 Hash</h3>
          <label>Eingabe</label><textarea id="hIn">Passwort123</textarea>
          <div class="result-box" id="hOut"></div>
          <p class="muted" style="font-size:.82rem">Ändere ein einziges Zeichen – der komplette Hash ändert sich (Lawineneffekt).</p>
        </div>`;
      const cIn = el.querySelector("#cIn"), cShift = el.querySelector("#cShift"),
        cShiftVal = el.querySelector("#cShiftVal"), cOut = el.querySelector("#cOut");
      const upC = () => { cShiftVal.textContent = cShift.value; cOut.textContent = caesar(cIn.value, +cShift.value); };
      cIn.oninput = upC; cShift.oninput = upC; upC();

      const xIn = el.querySelector("#xIn"), xKey = el.querySelector("#xKey"), xOut = el.querySelector("#xOut");
      const upX = () => { xOut.textContent = xorHex(xIn.value, xKey.value) || "(Schlüssel eingeben)"; };
      xIn.oninput = upX; xKey.oninput = upX; upX();

      const hIn = el.querySelector("#hIn"), hOut = el.querySelector("#hOut");
      const upH = async () => { hOut.textContent = await sha256(hIn.value); };
      hIn.oninput = upH; upH();
    }
  };

  window.LABS = [passwordLab, phishingLab, cryptoLab];
  window.LABS_BY_ID = Object.fromEntries(window.LABS.map(l => [l.id, l]));
})();
