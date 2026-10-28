# Construit index.html à partir du moteur de la boîte à outils du lycée (rituels/reviser.html du dépôt Cahier-de-progression),
# sans espace professeur ni défi de classe, avec la méthode du bac (outils/terminale/methode-vue.js et methode-css.txt).
# Usage : python3 outils/terminale/fork-terminale.py ../Cahier-de-progression/rituels/reviser.html
import os, re, sys
ICI = os.path.dirname(os.path.abspath(__file__))
SRC = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ICI, "..", "..", "..", "Cahier-de-progression", "rituels", "reviser.html")
DST = os.path.join(ICI, "..", "..", "index.html")
s = open(SRC, encoding="utf-8").read()
def rep(a, b, n=1):
    global s
    c = s.count(a)
    assert c == n, (a[:100], c)
    s = s.replace(a, b)

# en-tête de page
s = re.sub(r"<title>.*?</title>", "<title>Réviser la Terminale — Histoire-Géographie</title>", s, count=1)
s = re.sub(r'<meta name="description" content="[^"]*" />', '<meta name="description" content="Réviser l\'histoire-géographie de Terminale générale : fiches, cartes mémoire, quiz, mode aventure et méthode du bac." />', s, count=1)
rep('href="../icon-192.png"', 'href="icon-192.png"', 2)
rep('<script src="questions.js"></script>\n', '')
rep('<script src="../vendor/qrcode-generator-1.4.4.js"></script>', '<script src="methode.js"></script>\n<script src="vendor/qrcode-generator-1.4.4.js"></script>')
rep('<a class="marque" href="#/">Réviser <small>Histoire-Géo</small></a>', '<a class="marque" href="#/">Réviser <small>Terminale</small></a>')
rep('"Périodes, siècles, dates, cartes"', '"Dates, présidents, organisations, cartes"')
# des clés de stockage propres à ce site (même domaine que la boîte à outils du lycée)
s = s.replace('"reviser-', '"terminale-')
rep('var CLE_THEME = "rituels-theme-v1";  // même réglage que l\'écran des rituels', 'var CLE_THEME = "terminale-theme-v1";')
# tous les chapitres ouverts, le mode aventure aussi ; pas d'espace professeur ni de défi de classe
rep('  var visibles = lire(CLE_VISIBLES, null);\n  var classesAventure = lire(CLE_AV_CLASSES, []);',
    '  var visibles = null; // site personnel : tous les chapitres sont ouverts\n  var classesAventure = NIVEAUX.map(function (n) { return n.id; });')
rep('  function estProf() { return !!jeton(); }', '  function estProf() { return false; }')
rep('  function defiDispo() { return estProf() || DEMO; }', '  function defiDispo() { return false; }')
rep('    if (r.vue === "prof") vueProf();', '    if (r.vue === "prof") vueAccueil();')
a = s.index('  if (Array.isArray(visibles)) {\n    rendre();')
b = s.index('})();\n</script>', a)
s = s[:a] + '  rendre();\n' + s[b:]
# accueil : une seule classe, pas de choix de classe
rep('    var niveau = prog.niveau && NIVEAUX.some(function (n) { return n.id === prog.niveau; }) ? prog.niveau : null;\n\n    app.appendChild(el("div", { class: "intro" }, [\n      el("h1", { text: "La boîte à outils de la classe" }),\n      el("p", { text: "Choisis ta classe, puis un chapitre : l\'essentiel du cours, des cartes mémoire, des quiz et des jeux pour retenir." })\n    ]));',
    '    var niveau = prog.niveau && NIVEAUX.some(function (n) { return n.id === prog.niveau; }) ? prog.niveau : NIVEAUX.length === 1 ? NIVEAUX[0].id : null;\n\n    app.appendChild(el("div", { class: "intro" }, [\n      el("h1", { text: "Réviser la Terminale" }),\n      el("p", { text: "Histoire-géographie, voie générale. Choisis un chapitre : l\'essentiel du cours, des cartes mémoire, des quiz, le mode aventure, et la méthode du bac pour t\'entraîner aux devoirs." })\n    ]));')
rep('    app.appendChild(el("div", { class: "etiq", text: "Ma classe" }));\n    var choix = el("div", { class: "choix", role: "group", "aria-label": "Ma classe" });',
    '    if (NIVEAUX.length > 1) app.appendChild(el("div", { class: "etiq", text: "Ma classe" }));\n    var choix = el("div", { class: "choix", role: "group", "aria-label": "Ma classe" });')
rep('      }));\n    });\n    app.appendChild(choix);\n\n    if (!niveau) {', '      }));\n    });\n    if (NIVEAUX.length > 1) app.appendChild(choix);\n\n    if (!niveau) {')
rep('    if (total) {\n      app.appendChild(el("p", { class: "avancement"', '    if (total && chaps.length < total) {\n      app.appendChild(el("p", { class: "avancement"')
# la méthode du bac, sur l'accueil et dans les adresses
rep('    var parcours = aventureDispo(niveau) ? entreesParcours(niveau) : null;\n    if (parcours) app.appendChild(parcours);',
    '    app.appendChild(entreeMethode());\n    var parcours = aventureDispo(niveau) ? entreesParcours(niveau) : null;\n    if (parcours) app.appendChild(parcours);')
rep('    if (p[0] === "carte") return { vue: "carte", niveau: p[1] };', '    if (p[0] === "carte") return { vue: "carte", niveau: p[1] };\n    if (p[0] === "methode") return { vue: "methode", sous: p[1], x: p[2] };')
rep('    if (r.vue === "verifier") { vueVerifierCarte(r.code); return; }', '    if (r.vue === "verifier") { vueVerifierCarte(r.code); return; }\n    if (r.vue === "methode") { vueMethode(r.sous, r.x); return; }')
# titres d'onglet
rep('document.title = "Réviser — Histoire-Géographie";', 'document.title = "Réviser la Terminale — Histoire-Géographie";')
s = s.replace('" — Réviser";', '" — Réviser la Terminale";')
# textes : pas de professeur ici
rep('" · à montrer au professeur" : "Ton bilan, à montrer au professeur"', '" · ton bilan à montrer" : "Ton bilan, à montrer"')
rep('"Ton professeur scanne le QR code avec son téléphone pour vérifier ta carte. Touche-le pour l\'agrandir."', '"On scanne ce QR code avec un autre téléphone pour vérifier ta carte. Touche-le pour l\'agrandir."')
rep('pour que ton professeur sache que c\'est la tienne.', 'pour qu\'on sache que c\'est la tienne.')
# difficulté de la Terminale
rep('    "1ere": { nom: "Lycée +", nb: 8, defi: 12, options: 4, dates: 5, ordre: 5, points: 6, carte: 2, experte: 1, saisie: 2, indices: 1, proches: true, aide: 1, legende: 4 }',
    '    "1ere": { nom: "Lycée +", nb: 8, defi: 12, options: 4, dates: 5, ordre: 5, points: 6, carte: 2, experte: 1, saisie: 2, indices: 1, proches: true, aide: 1, legende: 4 },\n    "Tle":  { nom: "Terminale", nb: 8, defi: 12, options: 4, dates: 5, ordre: 5, points: 6, carte: 2, experte: 1, saisie: 2, indices: 1, proches: true, aide: 1, legende: 4 }')
# le module « Méthode du bac » (défini dans methode-vue.js, inséré ici)
vue = open(os.path.join(ICI, "methode-vue.js"), encoding="utf-8").read()
rep('\n  // ---------- Je prépare mon contrôle : une petite séance par jour jusqu\'au jour J ----------', vue + '\n  // ---------- Je prépare mon contrôle : une petite séance par jour jusqu\'au jour J ----------')
css = open(os.path.join(ICI, "methode-css.txt"), encoding="utf-8").read()
rep('  /* carte d\'aventurier */', css + '  /* carte d\'aventurier */')
open(DST, "w", encoding="utf-8").write(s)
print("index.html :", len(s), "caractères")
