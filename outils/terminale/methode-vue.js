
  // ---------- La méthode du bac : fiches méthode et ateliers (composition, analyse de document, figurés du croquis) ----------
  // Les contenus sont dans methode.js (METHODE) ; les meilleurs scores restent sur le téléphone.
  var MET = typeof METHODE !== "undefined" ? METHODE : { fiches: [], compos: [], docs: [], figures: null };
  var CLE_METHODE = "terminale-methode-v1";
  var scoresMethode = lire(CLE_METHODE, {});
  function noterMethode(cle, pc) {
    if (!(cle in scoresMethode) || pc > scoresMethode[cle]) { scoresMethode[cle] = pc; ecrire(CLE_METHODE, scoresMethode); }
  }
  function trouverMet(liste, id) { return (liste || []).filter(function (x) { return x.id === id; })[0] || null; }
  function nbAteliers() { return MET.compos.length + MET.docs.length + (MET.figures ? 1 : 0); }

  var SVG_METHODE = '<svg viewBox="0 0 64 56"><rect x="12" y="4" width="36" height="46" rx="5" fill="#fff"/><path d="M19 15h22M19 22h22M19 29h16M19 36h12" stroke="#1F4E5F" stroke-width="3" stroke-linecap="round"/><path d="M50 18l6 6-17 17-8 2 2-8z" fill="#F2C94C" stroke="#3A2A00" stroke-width="2" stroke-linejoin="round"/></svg>';

  function entreeMethode() {
    var nb = nbAteliers(), faits = Object.keys(scoresMethode).length;
    var a = el("a", { class: "entree-methode", href: "#/methode" });
    var fig = el("span", { class: "em-fig", "aria-hidden": "true" });
    fig.innerHTML = SVG_METHODE;
    a.appendChild(fig);
    a.appendChild(el("span", { class: "em-txt" }, [
      el("strong", { text: "La méthode du bac" }),
      el("span", { text: "Composition, analyse de document, croquis : " + pluriel(MET.fiches.length, "fiche") + " et " + pluriel(nb, "atelier") + (faits ? " · " + faits + " / " + nb + " faits" : "") })
    ]));
    return a;
  }

  function vueMethode(sous, x) {
    var f;
    if (sous === "fiche" && (f = trouverMet(MET.fiches, x))) return vueFicheMethode(f);
    if (sous === "compo" && (f = trouverMet(MET.compos, x))) return vueAtelierCompo(f);
    if (sous === "doc" && (f = trouverMet(MET.docs, x))) return vueAtelierDoc(f);
    if (sous === "figures" && MET.figures) return vueAtelierFigures(MET.figures);
    vueAccueilMethode();
  }

  function etiquetteChapitre(id) {
    var ch = chapitre(id);
    return ch ? (ch.d === "geo" ? "Géographie" : "Histoire") + " · " + ch.titre : "";
  }
  function badgeScore(cle) {
    return cle in scoresMethode ? el("span", { class: "met-badge" + (scoresMethode[cle] >= 80 ? " bien" : ""), text: scoresMethode[cle] + " %" }) : el("span", { class: "met-badge vide", text: "à faire" });
  }
  function ligneAtelier(href, cle, titre, sous, d) {
    return el("a", { class: "met-ligne " + (d || "histoire"), href: href }, [
      el("span", { class: "met-ligne-txt" }, [el("strong", { text: titre }), sous ? el("span", { text: sous }) : null]),
      badgeScore(cle)
    ]);
  }

  function vueAccueilMethode() {
    document.title = "La méthode du bac — Réviser la Terminale";
    app.appendChild(lienRetour("#/", "Accueil"));
    app.appendChild(el("div", { class: "chap-entete" }, [
      el("h1", { text: "La méthode du bac" }),
      el("p", { class: "petit", text: "Les fiches pour savoir quoi faire, les ateliers pour s'entraîner pas à pas." })
    ]));
    app.appendChild(el("div", { class: "etiq", text: "Les fiches méthode" }));
    var g = el("div", { class: "outils" });
    MET.fiches.forEach(function (f) {
      var a = el("a", { class: "outil" + (f.d === "geo" ? " geo" : ""), href: "#/methode/fiche/" + f.id });
      a.appendChild(el("span", { class: "pastille", icone: f.icone || "essentiel" }));
      a.appendChild(el("strong", { text: f.titre }));
      a.appendChild(el("span", { class: "info", text: f.resume }));
      g.appendChild(a);
    });
    app.appendChild(g);
    if (MET.compos.length) {
      app.appendChild(el("div", { class: "etiq", text: "Ateliers · la composition" }));
      MET.compos.forEach(function (c) {
        var ch = chapitre(c.chapitre);
        app.appendChild(ligneAtelier("#/methode/compo/" + c.id, "compo:" + c.id, c.sujet, etiquetteChapitre(c.chapitre), ch ? ch.d : c.d));
      });
    }
    if (MET.docs.length) {
      app.appendChild(el("div", { class: "etiq", text: "Ateliers · l'analyse de document" }));
      MET.docs.forEach(function (x) {
        var ch = chapitre(x.chapitre);
        app.appendChild(ligneAtelier("#/methode/doc/" + x.id, "doc:" + x.id, x.doc.titre, etiquetteChapitre(x.chapitre), ch ? ch.d : x.d));
      });
    }
    if (MET.figures) {
      app.appendChild(el("div", { class: "etiq", text: "Atelier · le croquis" }));
      app.appendChild(ligneAtelier("#/methode/figures", "figures", MET.figures.titre, MET.figures.sous, "geo"));
    }
  }

  // ----- les fiches -----
  var FIGURES_SVG = {
    cercle: '<circle cx="20" cy="14" r="8" fill="#C0392B"/>',
    carre: '<rect x="12" y="6" width="16" height="16" fill="#1F4E5F"/>',
    triangle: '<path d="M20 4l10 18H10z" fill="#8A5F0E"/>',
    etoile: '<path d="M20 3l3 8h8l-6.5 5 2.5 8-7-5-7 5 2.5-8L9 11h8z" fill="#C93F75"/>',
    trait: '<path d="M2 14h36" stroke="#1F4E5F" stroke-width="5"/>',
    fleche: '<path d="M3 20c10-12 22-12 30-6" stroke="#C0392B" stroke-width="4" fill="none"/><path d="M38 17l-9 4 3-9z" fill="#C0392B"/>',
    pointilles: '<path d="M2 14h36" stroke="#55605F" stroke-width="3" stroke-dasharray="5 4"/>',
    aplat: '<rect x="3" y="4" width="34" height="20" rx="3" fill="#E9A23B"/>',
    hachures: '<defs><pattern id="hach" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0v6" stroke="#3B6E44" stroke-width="2.4"/></pattern></defs><rect x="3" y="4" width="34" height="20" rx="3" fill="url(#hach)" stroke="#3B6E44"/>'
  };
  function figureSvg(nom) {
    var s = el("span", { class: "met-fig", "aria-hidden": "true" });
    s.innerHTML = '<svg viewBox="0 0 40 28">' + (FIGURES_SVG[nom] || "") + "</svg>";
    return s;
  }
  var TYPES_FIGURES = [
    { id: "ponctuel", nom: "Ponctuel", txt: "Un lieu précis : une ville, un port, un site.", figs: ["cercle", "carre", "triangle", "etoile"] },
    { id: "lineaire", nom: "Linéaire", txt: "Un flux, une route, une limite, un axe.", figs: ["trait", "fleche", "pointilles"] },
    { id: "surfacique", nom: "Surfacique", txt: "Un espace : une région, une zone, un territoire.", figs: ["aplat", "hachures"] }
  ];
  function blocFigures() {
    var g = el("div", { class: "met-figures" });
    TYPES_FIGURES.forEach(function (t) {
      g.appendChild(el("div", { class: "met-figtype" }, [
        el("div", { class: "met-figrangee" }, t.figs.map(figureSvg)),
        el("strong", { text: t.nom }), el("span", { text: t.txt })
      ]));
    });
    return g;
  }
  function blocStructure(parts) {
    var g = el("div", { class: "met-structure" });
    parts.forEach(function (p, i) {
      g.appendChild(el("div", { class: "met-struct c" + (p.c != null ? p.c : i % 4) }, [
        el("div", { class: "met-struct-tete" }, [el("strong", { text: p.nom }), p.part ? el("span", { text: p.part }) : null]),
        el("div", { class: "met-struct-barre" }, el("span", { style: "width:" + Math.max(8, Math.min(100, p.taille || 30)) + "%" })),
        p.txt ? el("p", { text: p.txt }) : null
      ]));
    });
    return g;
  }

  function vueFicheMethode(f) {
    document.title = f.titre + " — La méthode du bac";
    app.appendChild(lienRetour("#/methode", "La méthode du bac"));
    app.appendChild(el("div", { class: "chap-entete" }, [el("h1", { text: f.titre })]));
    if (f.cle) app.appendChild(el("p", { class: "cle", text: f.cle }));
    if (f.structure) {
      app.appendChild(el("div", { class: "etiq", text: f.titreStructure || "La structure" }));
      app.appendChild(blocStructure(f.structure));
    }
    if (f.figures) {
      app.appendChild(el("div", { class: "etiq", text: "Les trois familles de figurés" }));
      app.appendChild(blocFigures());
    }
    if (f.etapes) {
      app.appendChild(el("div", { class: "etiq", text: "Étape par étape" }));
      var ol = el("ol", { class: "met-etapes-liste" });
      f.etapes.forEach(function (e, i) {
        ol.appendChild(el("li", { class: "met-etape" }, [
          el("span", { class: "met-num", text: String(i + 1) }),
          el("div", null, [
            el("strong", { text: e.titre }),
            el("ul", null, e.points.map(function (p) { return el("li", { text: p }); })),
            e.exemple ? el("p", { class: "met-exemple" }, [el("small", { text: "Exemple" }), e.exemple]) : null
          ])
        ]));
      });
      app.appendChild(ol);
    }
    if (f.faire || f.eviter) {
      app.appendChild(el("div", { class: "met-duo" }, [
        f.faire ? el("div", { class: "met-col oui" }, [el("strong", { text: "À faire" }), el("ul", null, f.faire.map(function (p) { return el("li", { text: p }); }))]) : null,
        f.eviter ? el("div", { class: "met-col non" }, [el("strong", { text: "À éviter" }), el("ul", null, f.eviter.map(function (p) { return el("li", { text: p }); }))]) : null
      ]));
    }
    var liens = [];
    if (f.atelier === "compo") MET.compos.forEach(function (c) { liens.push(ligneAtelier("#/methode/compo/" + c.id, "compo:" + c.id, c.sujet, etiquetteChapitre(c.chapitre), (chapitre(c.chapitre) || {}).d)); });
    if (f.atelier === "doc") MET.docs.forEach(function (x) { liens.push(ligneAtelier("#/methode/doc/" + x.id, "doc:" + x.id, x.doc.titre, etiquetteChapitre(x.chapitre), (chapitre(x.chapitre) || {}).d)); });
    if (f.atelier === "figures" && MET.figures) liens.push(ligneAtelier("#/methode/figures", "figures", MET.figures.titre, MET.figures.sous, "geo"));
    if (liens.length) {
      app.appendChild(el("div", { class: "etiq", text: "S'entraîner" }));
      liens.forEach(function (l) { app.appendChild(l); });
    }
  }

  // ----- le moteur des ateliers : des étapes, chacune une suite d'exercices -----
  function atelier(cfg) {
    // cfg : { titre, retour, entete (nœud), etapes: [{ nom, faire(zone, fini(justes, total)) }], cle, fin(zone) }
    app.appendChild(lienRetour("#/methode", "La méthode du bac"));
    app.appendChild(el("div", { class: "chap-entete" }, [el("p", { class: "q-consigne", text: cfg.genre }), el("h1", { text: cfg.titre })]));
    var puces = el("ol", { class: "met-progres", "aria-label": "Étapes" });
    cfg.etapes.forEach(function (e) { puces.appendChild(el("li", { text: e.nom })); });
    app.appendChild(puces);
    var zone = el("div", { class: "met-zone" });
    app.appendChild(zone);
    var justes = 0, total = 0, k = 0;
    function etape() {
      Array.prototype.forEach.call(puces.children, function (li, i) { li.className = i < k ? "fait" : i === k ? "actuel" : ""; });
      zone.innerHTML = "";
      if (k >= cfg.etapes.length) return bilanAtelier();
      var e = cfg.etapes[k];
      zone.appendChild(el("h2", { class: "met-titre-etape", text: (k + 1) + ". " + e.nom }));
      if (e.aide) zone.appendChild(el("p", { class: "petit", text: e.aide }));
      e.faire(zone, function (j, t) {
        justes += j || 0; total += t || 0; k++;
        etape();
        window.scrollTo(0, 0);
      });
    }
    function bilanAtelier() {
      var pc = total ? Math.round(100 * justes / total) : 100;
      noterMethode(cfg.cle, pc);
      zone.appendChild(el("div", { class: "bilan" }, [
        el("div", { class: "gros", text: justes + " / " + total }),
        el("p", { text: pc >= 80 ? "Très bien : la méthode est en place." : pc >= 50 ? "C'est en bonne voie : refais l'atelier dans quelques jours." : "Relis la fiche méthode, puis recommence l'atelier." }),
        el("div", { class: "btns" }, [
          el("button", { class: "btn plein", type: "button", text: "Recommencer", onclick: function () { rendre(); window.scrollTo(0, 0); } }),
          cfg.fiche ? el("a", { class: "btn", href: "#/methode/fiche/" + cfg.fiche, text: "La fiche méthode" }) : null,
          cfg.chapitre && chapitre(cfg.chapitre) ? el("a", { class: "btn", href: lienChapitre(chapitre(cfg.chapitre)), text: "Réviser le chapitre" }) : null
        ])
      ]));
      if (cfg.conseil) zone.appendChild(el("p", { class: "alerte ok" }, [el("strong", { text: "À toi : " }), cfg.conseil]));
    }
    etape();
  }
  function boutonSuite(texte, f) { return el("button", { class: "btn plein met-suite", type: "button", text: texte || "Continuer", onclick: f }); }

  // une suite de QCM : { q, r, faux, expl }
  function suiteQcm(zone, liste, fini) {
    var i = 0, justes = 0;
    var cadre = el("div");
    zone.appendChild(cadre);
    function poser() {
      cadre.innerHTML = "";
      if (i >= liste.length) return fini(justes, liste.length);
      var q = liste[i];
      cadre.appendChild(el("p", { class: "petit", text: "Question " + (i + 1) + " / " + liste.length }));
      cadre.appendChild(el("p", { class: "q-enonce", text: q.q }));
      var opts = el("div", { class: "options" });
      var choix = melanger([q.r].concat(q.faux));
      var boutons = choix.map(function (o, n) {
        var b = el("button", { class: "option", type: "button" }, [el("span", { class: "lettre", text: "ABCDE"[n] }), el("span", { text: o })]);
        b.addEventListener("click", function () {
          boutons.forEach(function (x, m) { x.disabled = true; if (choix[m] === q.r) x.classList.add("juste"); });
          if (o === q.r) justes++; else b.classList.add("faux");
          if (q.expl) cadre.appendChild(el("p", { class: "met-expl " + (o === q.r ? "ok" : "ko") }, [el("strong", { text: o === q.r ? "Oui. " : "Non. " }), q.expl]));
          cadre.appendChild(boutonSuite(i + 1 < liste.length ? "Question suivante" : "Étape suivante", function () { i++; poser(); }));
        });
        return b;
      });
      boutons.forEach(function (b) { opts.appendChild(b); });
      cadre.appendChild(opts);
    }
    poser();
  }

  // vrai ou faux : { a (affirmation), vrai, expl }
  function suiteVraiFaux(zone, liste, fini) {
    var i = 0, justes = 0;
    var cadre = el("div");
    zone.appendChild(cadre);
    function poser() {
      cadre.innerHTML = "";
      if (i >= liste.length) return fini(justes, liste.length);
      var q = liste[i];
      cadre.appendChild(el("p", { class: "petit", text: "Affirmation " + (i + 1) + " / " + liste.length }));
      cadre.appendChild(el("p", { class: "q-enonce", text: q.a }));
      var opts = el("div", { class: "met-vf" });
      var bv = el("button", { class: "option", type: "button", text: "Vrai" }), bf = el("button", { class: "option", type: "button", text: "Faux" });
      [[bv, true], [bf, false]].forEach(function (x) {
        x[0].addEventListener("click", function () {
          bv.disabled = bf.disabled = true;
          (q.vrai ? bv : bf).classList.add("juste");
          var ok = x[1] === q.vrai;
          if (ok) justes++; else x[0].classList.add("faux");
          cadre.appendChild(el("p", { class: "met-expl " + (ok ? "ok" : "ko") }, [el("strong", { text: (q.vrai ? "Vrai. " : "Faux. ") }), q.expl]));
          cadre.appendChild(boutonSuite(i + 1 < liste.length ? "Affirmation suivante" : "Étape suivante", function () { i++; poser(); }));
        });
        opts.appendChild(x[0]);
      });
      cadre.appendChild(opts);
    }
    poser();
  }

  // ----- atelier composition -----
  var ROLES_TEXTE = {
    accroche: "Accroche", definitions: "Définir les termes", contexte: "Contexte et bornes", problematique: "Problématique", annonce: "Annonce du plan",
    bilan: "Bilan des parties", reponse: "Réponse à la problématique", ouverture: "Ouverture"
  };
  var ORDRE_ROLES = ["accroche", "definitions", "contexte", "problematique", "annonce", "bilan", "reponse", "ouverture"];
  function texteAnnote(morceaux) {
    var b = el("div", { class: "met-annote" });
    morceaux.forEach(function (m) {
      b.appendChild(el("p", { class: "met-morceau r" + ORDRE_ROLES.indexOf(m.role) }, [el("small", { text: ROLES_TEXTE[m.role] || m.role }), m.txt]));
    });
    return b;
  }

  function vueAtelierCompo(c) {
    document.title = "Atelier composition — Réviser la Terminale";
    var parties = c.plan.parties;
    atelier({
      genre: "Atelier · la composition", titre: c.sujet, cle: "compo:" + c.id, fiche: "composition", chapitre: c.chapitre,
      conseil: "rédige maintenant l'introduction et la première partie au propre, en 30 minutes, sans regarder le modèle.",
      etapes: [
        { nom: "Analyser le sujet", aide: "Les mots du sujet, les bornes, l'espace : c'est ce qui délimite ton devoir.", faire: function (zone, fini) {
          zone.appendChild(el("p", { class: "met-sujet", text: c.sujet }));
          suiteQcm(zone, c.analyse, fini);
        } },
        { nom: "La problématique", aide: "Une vraie question, qui oblige à expliquer, pas à raconter.", faire: function (zone, fini) {
          suiteQcm(zone, [{ q: "Quelle problématique convient le mieux à ce sujet ?", r: c.problematique.r, faux: c.problematique.faux, expl: c.problematique.expl }], fini);
        } },
        { nom: "Le plan", aide: "Touche les parties dans l'ordre : la première, puis la deuxième, puis la troisième.", faire: function (zone, fini) {
          var ordre = 0, erreurs = 0;
          var liste = el("ol", { class: "met-plan-fait" });
          var tuiles = el("div", { class: "met-tuiles" });
          melanger(parties.map(function (p, i) { return { p: p, i: i }; })).forEach(function (x) {
            var t = el("button", { class: "tuile", type: "button", text: x.p.titre });
            t.addEventListener("click", function () {
              if (x.i !== ordre) {
                erreurs++; t.classList.remove("erreur"); void t.offsetWidth; t.classList.add("erreur");
                return;
              }
              ordre++;
              t.remove();
              liste.appendChild(el("li", { text: x.p.titre }));
              if (ordre === parties.length) {
                zone.appendChild(el("p", { class: "met-expl " + (erreurs ? "ko" : "ok") }, [el("strong", { text: "Plan " + c.plan.type + ". " }), c.plan.expl]));
                zone.appendChild(boutonSuite("Étape suivante", function () { fini(erreurs ? 0 : 1, 1); }));
              }
            });
            tuiles.appendChild(t);
          });
          zone.appendChild(liste);
          zone.appendChild(tuiles);
        } },
        { nom: "Ranger les arguments", aide: "Chaque argument va dans une partie : à toi de le placer.", faire: function (zone, fini) {
          var args = [];
          parties.forEach(function (p, i) { p.args.forEach(function (a) { args.push({ a: a, i: i }); }); });
          args = melanger(args);
          var n = 0, justes = 0;
          var cadre = el("div");
          zone.appendChild(cadre);
          function poser() {
            cadre.innerHTML = "";
            if (n >= args.length) return fini(justes, args.length);
            var x = args[n];
            cadre.appendChild(el("p", { class: "petit", text: "Argument " + (n + 1) + " / " + args.length }));
            cadre.appendChild(el("p", { class: "met-argument", text: x.a }));
            var opts = el("div", { class: "options" });
            var boutons = parties.map(function (p, i) {
              var b = el("button", { class: "option", type: "button" }, [el("span", { class: "lettre", text: ["I", "II", "III", "IV"][i] }), el("span", { text: p.titre })]);
              b.addEventListener("click", function () {
                boutons.forEach(function (y) { y.disabled = true; });
                boutons[x.i].classList.add("juste");
                if (i === x.i) justes++; else b.classList.add("faux");
                cadre.appendChild(boutonSuite(n + 1 < args.length ? "Argument suivant" : "Étape suivante", function () { n++; poser(); }));
              });
              opts.appendChild(b);
              return b;
            });
            cadre.appendChild(opts);
          }
          poser();
        } },
        { nom: "Introduction et conclusion", aide: "Le modèle, passage par passage : repère le rôle de chacun.", faire: function (zone, fini) {
          zone.appendChild(el("div", { class: "etiq", text: "Introduction" }));
          zone.appendChild(texteAnnote(c.intro));
          zone.appendChild(el("div", { class: "etiq", text: "Le plan détaillé" }));
          zone.appendChild(el("ol", { class: "met-plan-detail" }, parties.map(function (p) {
            return el("li", null, [el("strong", { text: p.titre }), el("ul", null, p.args.map(function (a) { return el("li", { text: a }); }))]);
          })));
          zone.appendChild(el("div", { class: "etiq", text: "Conclusion" }));
          zone.appendChild(texteAnnote(c.conclusion));
          zone.appendChild(boutonSuite("Voir mon score", function () { fini(0, 0); }));
        } }
      ]
    });
  }

  // ----- atelier analyse de document -----
  function blocDocument(d, replie) {
    var corps = el("div", { class: "met-doc" }, [
      el("p", { class: "met-doc-titre", text: d.titre }),
      el("div", { class: "met-doc-texte" }, d.extrait.map(function (p) { return el("p", { text: p }); })),
      el("p", { class: "met-doc-source", text: d.source })
    ]);
    if (!replie) return corps;
    return el("details", { class: "met-relire" }, [el("summary", { text: "Relire le document" }), corps]);
  }
  function vueAtelierDoc(x) {
    document.title = "Atelier analyse de document — Réviser la Terminale";
    atelier({
      genre: "Atelier · l'analyse de document", titre: x.doc.titre, cle: "doc:" + x.id, fiche: "analyse-document", chapitre: x.chapitre,
      conseil: "rédige toi-même la réponse à la consigne, puis compare-la au modèle : as-tu cité le texte ? as-tu ajouté tes connaissances ?",
      etapes: [
        { nom: "Lire", aide: "Lis la consigne, puis le document, crayon en main.", faire: function (zone, fini) {
          zone.appendChild(el("p", { class: "question" }, [el("small", { text: "Consigne" }), x.consigne]));
          var d = blocDocument(x.doc);
          zone.appendChild(d);
          var lirebtn = boutonLire(function () { return d.querySelector(".met-doc-texte"); }, "Écouter le document");
          lirebtn.classList.add("met-lire");
          zone.appendChild(lirebtn);
          zone.appendChild(boutonSuite("J'ai lu le document", function () { fini(0, 0); }));
        } },
        { nom: "Présenter", aide: "Nature, auteur, date, contexte, destinataire.", faire: function (zone, fini) {
          zone.appendChild(blocDocument(x.doc, true));
          suiteQcm(zone, x.presentation, fini);
        } },
        { nom: "Comprendre", aide: "Que dit vraiment le texte ? Vérifie chaque affirmation dans le document.", faire: function (zone, fini) {
          zone.appendChild(blocDocument(x.doc, true));
          suiteVraiFaux(zone, x.comprendre, fini);
        } },
        { nom: "Prendre du recul", aide: "L'intérêt du document, son point de vue, ses limites.", faire: function (zone, fini) {
          zone.appendChild(blocDocument(x.doc, true));
          suiteQcm(zone, x.portee, fini);
        } },
        { nom: "Le modèle", aide: "Une réponse organisée : introduction, deux ou trois parties, conclusion.", faire: function (zone, fini) {
          zone.appendChild(el("p", { class: "question" }, [el("small", { text: "Consigne" }), x.consigne]));
          var m = x.modele;
          zone.appendChild(el("div", { class: "met-modele" }, [
            el("p", { class: "met-morceau r1" }, [el("small", { text: "Introduction" }), m.intro]),
            el("div", null, m.parties.map(function (p, i) {
              return el("div", { class: "met-modele-partie" }, [el("strong", { text: ["I", "II", "III"][i] + ". " + p.titre }), el("p", { text: p.txt })]);
            })),
            el("p", { class: "met-morceau r6" }, [el("small", { text: "Conclusion" }), m.conclusion])
          ]));
          zone.appendChild(boutonSuite("Voir mon score", function () { fini(0, 0); }));
        } }
      ]
    });
  }

  // ----- atelier figurés : quel figuré pour quel phénomène ? -----
  function vueAtelierFigures(f) {
    document.title = "Atelier croquis — Réviser la Terminale";
    atelier({
      genre: "Atelier · le croquis", titre: f.titre, cle: "figures", fiche: "croquis",
      conseil: "reprends un croquis de ton cahier et vérifie que chaque figuré correspond au phénomène qu'il représente.",
      etapes: [
        { nom: "Choisir le figuré", aide: "Un lieu, un flux ou un espace ? Choisis la famille de figurés.", faire: function (zone, fini) {
          var items = melanger(f.items).slice(0, f.nb || 10);
          var n = 0, justes = 0;
          var cadre = el("div");
          zone.appendChild(cadre);
          function poser() {
            cadre.innerHTML = "";
            if (n >= items.length) return fini(justes, items.length);
            var it = items[n];
            cadre.appendChild(el("p", { class: "petit", text: "Phénomène " + (n + 1) + " / " + items.length }));
            cadre.appendChild(el("p", { class: "q-enonce", text: it.txt }));
            var opts = el("div", { class: "met-figchoix" });
            var boutons = TYPES_FIGURES.map(function (t) {
              var b = el("button", { class: "option", type: "button" }, [figureSvg(t.figs[0]), el("span", { text: t.nom })]);
              b.addEventListener("click", function () {
                boutons.forEach(function (y) { y.disabled = true; });
                var bon = TYPES_FIGURES.map(function (z) { return z.id; }).indexOf(it.type);
                boutons[bon].classList.add("juste");
                var ok = t.id === it.type;
                if (ok) justes++; else b.classList.add("faux");
                cadre.appendChild(el("div", { class: "met-expl " + (ok ? "ok" : "ko") }, [
                  it.fig ? figureSvg(it.fig) : null,
                  el("span", null, [el("strong", { text: "Figuré " + TYPES_FIGURES[bon].nom.toLowerCase() + ". " }), it.expl || ""])
                ]));
                cadre.appendChild(boutonSuite(n + 1 < items.length ? "Phénomène suivant" : "Étape suivante", function () { n++; poser(); }));
              });
              opts.appendChild(b);
              return b;
            });
            cadre.appendChild(opts);
          }
          poser();
        } },
        { nom: "Organiser la légende", aide: "Une légende se range en parties, du général au particulier.", faire: function (zone, fini) {
          var lg = f.legende;
          zone.appendChild(el("p", { class: "met-sujet", text: lg.sujet }));
          var items = [];
          lg.parties.forEach(function (p, i) { p.items.forEach(function (t) { items.push({ t: t, i: i }); }); });
          items = melanger(items);
          var n = 0, justes = 0;
          var cadre = el("div");
          zone.appendChild(cadre);
          function poser() {
            cadre.innerHTML = "";
            if (n >= items.length) {
              cadre.appendChild(el("div", { class: "etiq", text: "La légende complète" }));
              cadre.appendChild(el("ol", { class: "met-plan-detail" }, lg.parties.map(function (p) {
                return el("li", null, [el("strong", { text: p.titre }), el("ul", null, p.items.map(function (t) { return el("li", { text: t }); }))]);
              })));
              cadre.appendChild(boutonSuite("Voir mon score", function () { fini(justes, items.length); }));
              return;
            }
            var x = items[n];
            cadre.appendChild(el("p", { class: "petit", text: "Élément " + (n + 1) + " / " + items.length }));
            cadre.appendChild(el("p", { class: "met-argument", text: x.t }));
            var opts = el("div", { class: "options" });
            var boutons = lg.parties.map(function (p, i) {
              var b = el("button", { class: "option", type: "button" }, [el("span", { class: "lettre", text: ["I", "II", "III", "IV"][i] }), el("span", { text: p.titre })]);
              b.addEventListener("click", function () {
                boutons.forEach(function (y) { y.disabled = true; });
                boutons[x.i].classList.add("juste");
                if (i === x.i) justes++; else b.classList.add("faux");
                cadre.appendChild(boutonSuite("Suivant", function () { n++; poser(); }));
              });
              opts.appendChild(b);
              return b;
            });
            cadre.appendChild(opts);
          }
          poser();
        } }
      ]
    });
  }
