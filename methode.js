/* La méthode du bac — fiches méthode et ateliers d'entraînement (index.html#/methode).
   fiches   { id, titre, d?, icone, resume, cle, structure?: [{ nom, part, taille, txt }], figures?, etapes: [{ titre, points, exemple? }],
              faire, eviter, atelier: "compo" | "doc" | "figures" }
   compos   { id, chapitre (identifiant de cours.js), sujet, analyse: [{ q, r, faux, expl }], problematique: { r, faux, expl },
              plan: { type, expl, parties: [{ titre, args }] }, intro / conclusion: [{ role, txt }] }
              rôles : accroche, definitions, contexte, problematique, annonce ; bilan, reponse, ouverture
   docs     { id, chapitre, consigne, doc: { titre, extrait: [paragraphes], source }, presentation: [QCM], comprendre: [{ a, vrai, expl }],
              portee: [QCM], modele: { intro, parties: [{ titre, txt }], conclusion } }
   figures  { titre, sous, nb, items: [{ txt, type: "ponctuel" | "lineaire" | "surfacique", fig, expl }], legende: { sujet, parties: [{ titre, items }] } }
   Les extraits de textes sont courts et fidèles ; les traductions sont indiquées comme telles. */
const METHODE = {
  titre: "La méthode du bac",
  fiches: [
    {
      id: "composition", titre: "La composition", icone: "essentiel",
      resume: "Répondre à un sujet par un texte organisé : introduction, deux ou trois parties, conclusion.",
      cle: "Une composition n'est pas une récitation : c'est une démonstration organisée qui répond à une problématique, avec des exemples précis.",
      titreStructure: "La structure d'une composition (part du devoir)",
      structure: [
        { nom: "Introduction", part: "≈ 10 %", taille: 12, txt: "Accroche, définition des termes, contexte et bornes, problématique, annonce du plan." },
        { nom: "Partie I", part: "≈ 25 %", taille: 28, txt: "Une idée directrice, deux ou trois arguments, chacun avec un exemple précis." },
        { nom: "Partie II", part: "≈ 25 %", taille: 28, txt: "Même construction ; une phrase de transition entre les parties." },
        { nom: "Partie III", part: "≈ 25 %", taille: 28, txt: "Facultative si deux parties solides suffisent." },
        { nom: "Conclusion", part: "≈ 10 %", taille: 12, txt: "Bilan des parties, réponse claire à la problématique, ouverture." }
      ],
      etapes: [
        { titre: "Analyser le sujet (au brouillon)", points: [
          "Souligner chaque mot et le définir.",
          "Repérer les bornes chronologiques et l'espace : pourquoi commencer et finir à ces dates ?",
          "Identifier les acteurs et le type de sujet (une évolution, un tableau, une comparaison…)."
        ], exemple: "« La Seconde Guerre mondiale, une guerre d'anéantissement (1939-1945) » : anéantissement = détruire l'ennemi, y compris les civils ; 1939 = invasion de la Pologne ; 1945 = capitulations allemande et japonaise." },
        { titre: "Trouver la problématique", points: [
          "Une question qui oblige à expliquer : comment ? pourquoi ? dans quelle mesure ?",
          "Elle reprend les mots du sujet, sans le recopier."
        ], exemple: "Pourquoi la Seconde Guerre mondiale est-elle une guerre qui vise à détruire l'adversaire, et pas seulement à le vaincre ?" },
        { titre: "Mobiliser ses connaissances", points: [
          "Lister au brouillon dates, lieux, acteurs, chiffres, notions.",
          "Ne garder que ce qui répond à la problématique."
        ] },
        { titre: "Construire le plan", points: [
          "Chronologique (pour une évolution), thématique (pour un tableau) ou mixte.",
          "Deux ou trois parties, chacune résumée par une phrase qui répond en partie à la problématique."
        ] },
        { titre: "Rédiger", points: [
          "Introduction et conclusion entièrement rédigées (au brouillon d'abord si possible).",
          "Un paragraphe par argument : idée, explication, exemple précis.",
          "Sauter une ligne entre les parties, aller à la ligne entre les paragraphes.",
          "Garder 5 minutes pour relire (orthographe, dates, noms propres)."
        ] }
      ],
      faire: [
        "Définir les mots du sujet dans l'introduction.",
        "Donner des exemples précis : dates, chiffres, lieux, acteurs.",
        "Écrire des transitions entre les parties.",
        "Respecter les bornes du sujet."
      ],
      eviter: [
        "Réciter tout le cours sans répondre au sujet.",
        "Les titres apparents (I., II.) dans la copie rédigée.",
        "Une conclusion qui répète l'introduction.",
        "Sortir des bornes chronologiques."
      ],
      atelier: "compo"
    },
    {
      id: "analyse-document", titre: "L'analyse de document", icone: "document",
      resume: "Présenter, comprendre et critiquer un ou deux documents pour répondre à une consigne.",
      cle: "On analyse un document pour répondre à la consigne : on le présente, on en extrait les informations utiles, on les explique avec ses connaissances, et on en mesure la portée et les limites.",
      etapes: [
        { titre: "Lire la consigne", points: [
          "Elle donne le fil de la réponse : souligner ses mots-clés.",
          "Elle annonce souvent les parties attendues."
        ] },
        { titre: "Présenter le document", points: [
          "Nature : discours, article, affiche, carte, graphique…",
          "Auteur : qui est-il ? quelle est sa fonction, son point de vue ?",
          "Date et contexte : que se passe-t-il à ce moment-là ?",
          "Destinataire : à qui s'adresse-t-il ? dans quel but ?"
        ], exemple: "Ce document est un discours radiodiffusé du général de Gaulle, prononcé depuis Londres sur la BBC le 18 juin 1940, au lendemain de la demande d'armistice de Pétain." },
        { titre: "Comprendre et expliquer", points: [
          "Prélever les informations utiles en citant le texte entre guillemets.",
          "Expliquer chaque citation avec ses connaissances : c'est ce qui fait la note.",
          "Organiser la réponse en deux ou trois parties qui suivent la consigne."
        ] },
        { titre: "Prendre du recul", points: [
          "Quel est l'intérêt du document pour comprendre la période ?",
          "Quelles sont ses limites : point de vue de l'auteur, ce qu'il ne dit pas, propagande ?"
        ] },
        { titre: "Rédiger", points: [
          "Introduction : présentation du document, contexte, problématique tirée de la consigne, annonce du plan.",
          "Développement : citation → explication → connaissance.",
          "Conclusion : réponse à la consigne, portée du document."
        ] }
      ],
      faire: [
        "Citer le document entre guillemets, avec mesure.",
        "Ajouter des connaissances qui ne sont pas dans le document.",
        "Identifier le point de vue de l'auteur.",
        "Suivre l'ordre de la consigne."
      ],
      eviter: [
        "Paraphraser : répéter le texte avec d'autres mots.",
        "Réciter le cours en oubliant le document.",
        "Prendre le document pour une vérité objective.",
        "Oublier la présentation du document."
      ],
      atelier: "doc"
    },
    {
      id: "croquis", titre: "Le croquis de géographie", d: "geo", icone: "croquis",
      resume: "Représenter une organisation de l'espace sur un fond de carte, avec un titre et une légende organisée.",
      cle: "Un croquis montre une organisation de l'espace pour répondre à un sujet : chaque figuré a un sens, et la légende est organisée en parties, comme un plan.",
      figures: true,
      etapes: [
        { titre: "Analyser le sujet", points: [
          "Le titre du croquis est le sujet, ou une reformulation de celui-ci.",
          "Repérer l'espace et l'échelle : un pays, une région, le monde ?"
        ] },
        { titre: "Construire la légende", points: [
          "Deux ou trois parties titrées, comme le plan d'une composition.",
          "Du général au particulier : les espaces, puis les lieux, puis les flux.",
          "Chaque élément de légende = un figuré + un texte explicatif."
        ] },
        { titre: "Choisir les figurés", points: [
          "Ponctuel pour un lieu, linéaire pour un flux ou une limite, surfacique pour un espace.",
          "Les couleurs ont un sens : chaudes pour le dynamisme, froides pour les espaces en retrait.",
          "Une taille de figuré qui augmente avec l'importance du phénomène."
        ] },
        { titre: "Réaliser et nommer", points: [
          "Les aplats d'abord, puis les hachures, puis les figurés linéaires et ponctuels.",
          "La nomenclature : noms des lieux écrits à l'horizontale, au crayon puis au feutre fin.",
          "Le titre en haut, la légende à côté ou en dessous."
        ] }
      ],
      faire: [
        "Un titre précis.",
        "Une légende organisée en parties.",
        "Des couleurs cohérentes.",
        "Écrire les noms (mers, villes, pays) lisiblement."
      ],
      eviter: [
        "Une légende en simple liste.",
        "Trop de figurés : le croquis devient illisible.",
        "Oublier la nomenclature.",
        "Utiliser la même couleur pour deux phénomènes différents."
      ],
      atelier: "figures"
    },
    {
      id: "reviser", titre: "Bien réviser", icone: "cartes",
      resume: "Retenir durablement : se tester, espacer les révisions, alterner.",
      cle: "On retient mieux en essayant de se souvenir qu'en relisant : se tester, plusieurs fois, en espaçant les séances.",
      etapes: [
        { titre: "Se tester plutôt que relire", points: [
          "Relire donne l'impression de savoir ; se tester montre ce qu'on sait vraiment.",
          "Avec les cartes mémoire et les quiz de chaque chapitre : répondre avant de regarder."
        ] },
        { titre: "Espacer les séances", points: [
          "Revoir un chapitre le lendemain, puis 3 jours après, puis une semaine après.",
          "« Je prépare mon contrôle » organise ces séances jusqu'au jour J."
        ] },
        { titre: "Alterner les chapitres", points: [
          "Mélanger histoire et géographie, et plusieurs chapitres dans une même séance.",
          "Le parcours de l'année et le mode aventure le font pour toi."
        ] },
        { titre: "Expliquer à voix haute", points: [
          "Raconter un chapitre à quelqu'un, sans ses notes, en 3 minutes.",
          "Faire au brouillon la carte mentale d'un point de passage, puis vérifier."
        ] },
        { titre: "S'entraîner aux exercices", points: [
          "Un sujet de composition par semaine : au moins l'introduction et le plan détaillé.",
          "Les ateliers de cette page : pas à pas, avec la correction."
        ] }
      ],
      faire: [
        "Des séances courtes (20 à 30 minutes) et régulières.",
        "Commencer par ce qu'on sait le moins.",
        "Dormir : le sommeil fixe les souvenirs."
      ],
      eviter: [
        "Tout réviser la veille.",
        "Relire et surligner sans se tester.",
        "Réviser avec le téléphone qui sonne à côté (sauf pour ce site !)."
      ]
    }
  ],

  compos: [
    {
      id: "guerre-aneantissement", chapitre: "tle-h1-c3",
      sujet: "La Seconde Guerre mondiale, une guerre d'anéantissement (1939-1945)",
      analyse: [
        { q: "Que signifie « guerre d'anéantissement » ?", r: "Une guerre qui vise à détruire l'ennemi, y compris sa population civile", faux: ["Une guerre très courte", "Une guerre sans armes nouvelles", "Une guerre qui ne touche que les soldats"], expl: "Il ne s'agit plus seulement de vaincre l'armée adverse, mais de détruire l'ennemi, civils compris." },
        { q: "Pourquoi le sujet commence-t-il en 1939 ?", r: "L'Allemagne envahit la Pologne le 1er septembre 1939", faux: ["Hitler arrive au pouvoir", "Le Japon attaque Pearl Harbor", "La crise de 1929 éclate"], expl: "Le 1er septembre 1939, l'invasion de la Pologne déclenche la guerre en Europe." },
        { q: "Pourquoi le sujet s'arrête-t-il en 1945 ?", r: "L'Allemagne capitule le 8 mai, le Japon le 2 septembre 1945", faux: ["L'ONU est dissoute", "Le mur de Berlin est construit", "La guerre froide se termine"], expl: "La guerre s'achève en Europe le 8 mai 1945 et en Asie le 2 septembre 1945." },
        { q: "Quel est l'espace du sujet ?", r: "Le monde entier, surtout l'Europe et l'Asie-Pacifique", faux: ["La France seulement", "L'Europe de l'Ouest seulement", "Les États-Unis"], expl: "C'est une guerre mondiale : il faut des exemples en Europe, en Asie et dans le Pacifique." }
      ],
      problematique: {
        r: "Pourquoi la Seconde Guerre mondiale est-elle une guerre qui cherche à détruire l'adversaire, combattants comme civils ?",
        faux: ["Quelles sont les grandes batailles de la Seconde Guerre mondiale ?", "Qui a gagné la Seconde Guerre mondiale ?", "Quand la Seconde Guerre mondiale a-t-elle commencé ?"],
        expl: "Les autres questions appellent un récit ou une réponse courte ; celle-ci oblige à expliquer le sens du mot « anéantissement »."
      },
      plan: { type: "thématique", expl: "Le sujet demande d'expliquer un caractère de la guerre : un plan thématique (moyens, cibles, aboutissement) est plus efficace qu'un récit des batailles.", parties: [
        { titre: "Une guerre totale qui mobilise tous les moyens", args: [
          "Les économies tournées vers la production d'armes (l'Arsenal de la démocratie aux États-Unis).",
          "Des armes de plus en plus destructrices, jusqu'à la bombe atomique d'Hiroshima (6 août 1945).",
          "Des idéologies qui font de l'ennemi un adversaire à détruire."
        ] },
        { titre: "Des civils pris pour cibles", args: [
          "Les bombardements de villes : le Blitz sur Londres, Dresde, Tokyo.",
          "Le siège de Leningrad : environ un million d'habitants morts.",
          "Les massacres de civils par les occupants, comme à Oradour-sur-Glane (juin 1944)."
        ] },
        { titre: "Le génocide des Juifs et des Tsiganes", args: [
          "La Shoah par balles des Einsatzgruppen : Babi Yar, septembre 1941.",
          "La conférence de Wannsee (janvier 1942) organise la « solution finale ».",
          "Les centres de mise à mort comme Auschwitz-Birkenau : environ 6 millions de Juifs assassinés."
        ] }
      ] },
      intro: [
        { role: "accroche", txt: "Plus de 60 millions de morts, dont une majorité de civils : jamais une guerre n'avait été aussi meurtrière." },
        { role: "definitions", txt: "Une guerre d'anéantissement ne cherche pas seulement à vaincre l'armée adverse : elle vise à détruire l'ennemi, y compris sa population." },
        { role: "contexte", txt: "Commencée avec l'invasion de la Pologne par l'Allemagne le 1er septembre 1939, la guerre devient mondiale en 1941 et s'achève avec les capitulations de l'Allemagne (8 mai 1945) et du Japon (2 septembre 1945)." },
        { role: "problematique", txt: "Pourquoi la Seconde Guerre mondiale est-elle une guerre qui cherche à détruire l'adversaire, combattants comme civils ?" },
        { role: "annonce", txt: "Nous verrons d'abord qu'elle mobilise tous les moyens des États, puis que les civils deviennent des cibles, enfin qu'elle aboutit au génocide des Juifs et des Tsiganes." }
      ],
      conclusion: [
        { role: "bilan", txt: "Guerre totale par ses moyens, la Seconde Guerre mondiale frappe massivement les civils et aboutit, avec la Shoah, à un crime sans précédent." },
        { role: "reponse", txt: "C'est une guerre d'anéantissement parce que les idéologies, surtout le nazisme, font de l'ennemi un peuple à détruire, et que les États y engagent toutes leurs forces." },
        { role: "ouverture", txt: "Pour juger ces crimes, les Alliés créent le tribunal de Nuremberg (1945-1946), qui définit le crime contre l'humanité." }
      ]
    },
    {
      id: "totalitarismes", chapitre: "tle-h1-c2",
      sujet: "Les régimes totalitaires dans les années 1930 : points communs et différences",
      analyse: [
        { q: "Quels régimes faut-il étudier ?", r: "L'URSS de Staline, l'Italie de Mussolini et l'Allemagne d'Hitler", faux: ["La France et le Royaume-Uni", "Les États-Unis de Roosevelt", "L'Espagne républicaine"], expl: "Ce sont les trois régimes totalitaires étudiés en Terminale." },
        { q: "Quel type de plan le sujet suggère-t-il ?", r: "Une comparaison : ce qui rapproche, puis ce qui distingue", faux: ["Un récit chronologique de 1930 à 1939", "Un plan pays par pays sans comparaison", "Un plan en un seul bloc"], expl: "« Points communs et différences » : le sujet demande de comparer. Un plan pays par pays empêche la comparaison." },
        { q: "Quelle définition donner d'un régime totalitaire ?", r: "Un régime qui veut contrôler toute la société au service d'une idéologie", faux: ["Un régime où le roi gouverne seul", "Un régime où l'armée gouverne", "Un régime qui organise des élections libres"], expl: "Le totalitarisme vise un contrôle total : parti unique, chef, propagande, terreur." }
      ],
      problematique: {
        r: "En quoi ces régimes partagent-ils une même volonté de contrôle total, malgré des idéologies différentes ?",
        faux: ["Quand Hitler est-il arrivé au pouvoir ?", "Pourquoi Mussolini s'appelle-t-il le Duce ?", "Combien de personnes vivent en URSS en 1930 ?"],
        expl: "La bonne problématique reprend les deux mots du sujet : ce qui rapproche (le contrôle total) et ce qui distingue (les idéologies)."
      },
      plan: { type: "thématique", expl: "Pour comparer, on regroupe par thèmes : les méthodes communes, puis les différences.", parties: [
        { titre: "Un même projet : contrôler la société", args: [
          "Un parti unique et un chef tout-puissant, entouré d'un culte de la personnalité.",
          "La propagande et l'embrigadement de la jeunesse (Jeunesses hitlériennes, Komsomol, Balilla).",
          "La terreur : police politique (NKVD, Gestapo) et camps (Goulag, Dachau)."
        ] },
        { titre: "Des idéologies opposées", args: [
          "Le communisme stalinien veut une société sans classes et collectivise l'économie.",
          "Le fascisme exalte la nation et l'État, sous l'autorité du Duce.",
          "Le nazisme repose sur le racisme et l'antisémitisme : lois de Nuremberg (1935), nuit de Cristal (1938)."
        ] },
        { titre: "Des régimes qui menacent la paix", args: [
          "L'Italie envahit l'Éthiopie en 1935.",
          "Hitler remilitarise la Rhénanie (1936), annexe l'Autriche (1938) et obtient les Sudètes à Munich.",
          "Les dictatures interviennent dans la guerre d'Espagne (1936-1939), puis l'Allemagne et l'URSS signent un pacte en août 1939."
        ] }
      ] },
      intro: [
        { role: "accroche", txt: "« Tout dans l'État, rien hors de l'État, rien contre l'État » : cette formule de Mussolini résume l'ambition des régimes totalitaires." },
        { role: "definitions", txt: "Un régime totalitaire veut contrôler tous les aspects de la vie des individus au service d'une idéologie." },
        { role: "contexte", txt: "Dans les années 1930, trois régimes de ce type dominent une partie de l'Europe : l'URSS de Staline, l'Italie fasciste de Mussolini et l'Allemagne nazie d'Hitler, au pouvoir depuis 1933." },
        { role: "problematique", txt: "En quoi ces régimes partagent-ils une même volonté de contrôle total, malgré des idéologies différentes ?" },
        { role: "annonce", txt: "Nous verrons leur projet commun de contrôle de la société, puis leurs idéologies opposées, enfin la menace qu'ils font peser sur la paix." }
      ],
      conclusion: [
        { role: "bilan", txt: "Les trois régimes utilisent les mêmes outils — parti unique, culte du chef, propagande, terreur — au service d'idéologies différentes, et deviennent une menace pour l'Europe." },
        { role: "reponse", txt: "Leur point commun est la volonté de façonner un « homme nouveau » en contrôlant toute la société ; leurs différences tiennent au but poursuivi : la société sans classes, la grandeur de la nation ou la domination d'une « race »." },
        { role: "ouverture", txt: "Ces ambitions conduisent à la Seconde Guerre mondiale, que l'Allemagne déclenche en envahissant la Pologne le 1er septembre 1939." }
      ]
    },
    {
      id: "monde-bipolaire", chapitre: "tle-h2-c2",
      sujet: "Un monde bipolaire : affrontement des deux blocs et émergence du tiers-monde (1947-début des années 1970)",
      analyse: [
        { q: "Que signifie « bipolaire » ?", r: "Un monde organisé autour de deux superpuissances rivales", faux: ["Un monde divisé entre le Nord et le Sud", "Un monde sans conflits", "Un monde dominé par l'Europe"], expl: "Les États-Unis et l'URSS organisent chacun un bloc autour d'eux." },
        { q: "Pourquoi commencer en 1947 ?", r: "La doctrine Truman et la doctrine Jdanov officialisent la guerre froide", faux: ["Fin de la Seconde Guerre mondiale", "Création de l'OTAN", "Construction du mur de Berlin"], expl: "En 1947, les deux superpuissances affirment publiquement leur opposition : c'est le début de la guerre froide." },
        { q: "Que désigne le « tiers-monde » ?", r: "Les pays pauvres, souvent nouvellement indépendants, qui refusent de choisir un bloc", faux: ["Les pays d'Europe de l'Est", "Les trois plus grandes puissances", "Les pays du bloc occidental"], expl: "L'expression, inventée par Alfred Sauvy en 1952, désigne les pays qui ne veulent appartenir ni à l'Ouest ni à l'Est." }
      ],
      problematique: {
        r: "Comment l'affrontement des deux superpuissances structure-t-il le monde, alors que de nouveaux acteurs cherchent à s'en affranchir ?",
        faux: ["Qui a construit le mur de Berlin ?", "Combien de pays sont devenus indépendants ?", "Quelle est la capitale de l'URSS ?"],
        expl: "Elle tient ensemble les deux mots du sujet : la bipolarisation et l'émergence du tiers-monde."
      },
      plan: { type: "thématique", expl: "Trois idées : la bipolarisation, ses crises, puis l'émergence de nouveaux acteurs qui la contestent.", parties: [
        { titre: "Deux blocs face à face", args: [
          "Deux modèles opposés : démocratie libérale et capitalisme contre communisme et économie planifiée.",
          "Deux systèmes d'alliances : l'OTAN (1949) et le pacte de Varsovie (1955).",
          "Berlin, symbole de la division : blocus (1948-1949), puis construction du mur (1961)."
        ] },
        { titre: "Des crises qui menacent la paix", args: [
          "La guerre de Corée (1950-1953), premier conflit chaud de la guerre froide.",
          "La crise des missiles de Cuba (octobre 1962), au bord de la guerre nucléaire.",
          "La guerre du Vietnam, où les États-Unis s'engagent massivement à partir de 1965."
        ] },
        { titre: "L'émergence du tiers-monde", args: [
          "La décolonisation : indépendance de l'Inde (1947), de l'Algérie (1962).",
          "La conférence de Bandung (1955) affirme la solidarité des pays d'Asie et d'Afrique.",
          "La Chine de Mao s'affirme comme une puissance qui rompt avec l'URSS dans les années 1960."
        ] }
      ] },
      intro: [
        { role: "accroche", txt: "« De Stettin dans la Baltique à Trieste dans l'Adriatique, un rideau de fer est descendu à travers le continent », déclare Churchill en 1946." },
        { role: "definitions", txt: "Un monde bipolaire est organisé autour de deux superpuissances, les États-Unis et l'URSS ; le tiers-monde désigne les pays, souvent nouvellement indépendants, qui refusent de choisir un camp." },
        { role: "contexte", txt: "En 1947, la doctrine Truman et la doctrine Jdanov ouvrent la guerre froide ; au début des années 1970, la détente s'installe et la décolonisation est presque achevée." },
        { role: "problematique", txt: "Comment l'affrontement des deux superpuissances structure-t-il le monde, alors que de nouveaux acteurs cherchent à s'en affranchir ?" },
        { role: "annonce", txt: "Nous étudierons la formation des deux blocs, les crises qui les opposent, puis l'émergence du tiers-monde." }
      ],
      conclusion: [
        { role: "bilan", txt: "Organisé en deux blocs rivaux, le monde traverse des crises graves, de Berlin à Cuba, tandis que les pays décolonisés cherchent une troisième voie." },
        { role: "reponse", txt: "La bipolarisation structure les relations internationales, mais elle est contestée par le tiers-monde et par de nouvelles puissances comme la Chine." },
        { role: "ouverture", txt: "Dans les années 1970, la détente puis les chocs pétroliers modifient à nouveau les équilibres mondiaux." }
      ]
    },
    {
      id: "annees-1970-1991", chapitre: "tle-h3-c1",
      sujet: "La modification des grands équilibres économiques et politiques mondiaux (1973-1991)",
      analyse: [
        { q: "Pourquoi commencer en 1973 ?", r: "Le premier choc pétrolier met fin à la forte croissance des Trente Glorieuses", faux: ["Le mur de Berlin tombe", "La guerre froide commence", "L'Union européenne est créée"], expl: "En octobre 1973, les pays arabes de l'OPEP font quadrupler le prix du pétrole : la croissance s'arrête en Occident." },
        { q: "Pourquoi finir en 1991 ?", r: "L'URSS disparaît en décembre 1991", faux: ["Le traité de Maastricht entre en vigueur", "Les attentats du 11 septembre", "La révolution iranienne"], expl: "La dissolution de l'URSS, le 26 décembre 1991, met fin au monde bipolaire." },
        { q: "Que recouvrent les « équilibres économiques et politiques » ?", r: "L'économie mondiale, les modèles politiques et le rapport de force entre puissances", faux: ["Seulement le prix du pétrole", "Seulement la politique française", "Seulement la guerre froide en Europe"], expl: "Le sujet est large : crise économique, nouveaux modèles (néolibéralisme), démocratisation, islamisme, fin de l'URSS." }
      ],
      problematique: {
        r: "Comment la crise économique et la fin du bloc soviétique bouleversent-elles l'organisation du monde entre 1973 et 1991 ?",
        faux: ["Combien coûte un baril de pétrole en 1973 ?", "Qui était Ronald Reagan ?", "Pourquoi le mur de Berlin a-t-il été construit ?"],
        expl: "Elle relie les deux aspects du sujet : l'économie et la politique."
      },
      plan: { type: "thématique", expl: "Trois bouleversements : économique, idéologique et géopolitique.", parties: [
        { titre: "La fin de la croissance et une nouvelle donne économique", args: [
          "Les chocs pétroliers de 1973 et 1979 : inflation et chômage de masse en Occident.",
          "Le néolibéralisme de Thatcher et Reagan : dérégulation, privatisations, moins d'État.",
          "La Chine de Deng Xiaoping adopte le « socialisme de marché » à partir de 1978."
        ] },
        { titre: "De nouveaux modèles politiques", args: [
          "La démocratisation de l'Europe du Sud : Grèce et Portugal (1974), Espagne (1975-1978).",
          "La révolution iranienne de 1979 installe une république islamique.",
          "La CEE s'élargit à la Grèce (1981), à l'Espagne et au Portugal (1986)."
        ] },
        { titre: "L'effondrement du bloc soviétique", args: [
          "L'URSS s'épuise : course aux armements, guerre en Afghanistan (1979-1989).",
          "Gorbatchev lance la perestroïka et la glasnost à partir de 1985.",
          "La chute du mur de Berlin (9 novembre 1989), puis la fin de l'URSS (décembre 1991)."
        ] }
      ] },
      intro: [
        { role: "accroche", txt: "En octobre 1973, le prix du baril de pétrole quadruple en quelques mois : une page de l'histoire économique se tourne." },
        { role: "definitions", txt: "Les grands équilibres mondiaux désignent l'organisation de l'économie mondiale et le rapport de force entre les puissances et leurs modèles politiques." },
        { role: "contexte", txt: "Du premier choc pétrolier de 1973 à la disparition de l'URSS en 1991, le monde sort des Trente Glorieuses et de la bipolarité." },
        { role: "problematique", txt: "Comment la crise économique et la fin du bloc soviétique bouleversent-elles l'organisation du monde entre 1973 et 1991 ?" },
        { role: "annonce", txt: "Nous verrons la fin de la croissance et la nouvelle donne économique, l'apparition de nouveaux modèles politiques, puis l'effondrement du bloc soviétique." }
      ],
      conclusion: [
        { role: "bilan", txt: "Crise économique, essor du néolibéralisme, démocratisation, islamisme et chute de l'URSS : en vingt ans, les équilibres du monde sont transformés." },
        { role: "reponse", txt: "Le modèle de l'État-providence est remis en cause à l'Ouest, le communisme s'effondre à l'Est, et le monde bipolaire disparaît." },
        { role: "ouverture", txt: "Les États-Unis deviennent la seule superpuissance, mais de nouvelles conflictualités apparaissent dès les années 1990." }
      ]
    },
    {
      id: "mers-oceans", chapitre: "tle-g1",
      sujet: "Mers et océans, au cœur de la mondialisation",
      analyse: [
        { q: "Que signifie « au cœur de la mondialisation » ?", r: "Les mers et les océans sont indispensables aux échanges mondiaux", faux: ["Les mers sont au centre de la carte du monde", "Les océans sont protégés de la mondialisation", "La mondialisation se limite aux océans"], expl: "Environ 80 % du commerce mondial en volume passe par la mer." },
        { q: "Quelle notion faut-il absolument définir ?", r: "La maritimisation", faux: ["La décolonisation", "La métropolisation", "Le totalitarisme"], expl: "La maritimisation est le rôle croissant des mers dans l'économie et les échanges mondiaux." },
        { q: "Quelle échelle faut-il privilégier ?", r: "L'échelle mondiale, avec des exemples régionaux", faux: ["L'échelle locale d'un port", "L'échelle de la France seulement", "L'échelle d'une ville"], expl: "Le sujet est mondial, mais des exemples précis (Malacca, Arctique, mer de Chine) le rendent concret." }
      ],
      problematique: {
        r: "Pourquoi les mers et les océans sont-ils devenus des espaces essentiels, mais aussi disputés, de la mondialisation ?",
        faux: ["Combien y a-t-il d'océans sur la Terre ?", "Quel est le plus grand port du monde ?", "Qu'est-ce qu'un porte-conteneurs ?"],
        expl: "Elle oblige à expliquer le rôle des mers et les rivalités qu'il entraîne."
      },
      plan: { type: "thématique", expl: "Du rôle des mers (flux, ressources) aux tensions qu'elles suscitent.", parties: [
        { titre: "Des espaces de circulation essentiels", args: [
          "Environ 80 % du commerce mondial en volume passe par la mer, grâce à la conteneurisation.",
          "Des routes maritimes concentrées autour de détroits et canaux : Malacca, Ormuz, Suez, Panama.",
          "Les câbles sous-marins transportent l'essentiel des données d'Internet."
        ] },
        { titre: "Des ressources convoitées", args: [
          "La pêche et l'aquaculture nourrissent des milliards de personnes.",
          "Les hydrocarbures offshore : golfe Arabo-Persique, mer du Nord, golfe de Guinée.",
          "Les ressources minérales des grands fonds, encore peu exploitées."
        ] },
        { titre: "Des espaces disputés et à protéger", args: [
          "Les ZEE, définies par la convention de Montego Bay (1982), attisent les rivalités (mer de Chine méridionale).",
          "La piraterie et la sécurisation des routes (golfe d'Aden, détroit de Malacca).",
          "La surpêche et la pollution : création d'aires marines protégées, traité sur la haute mer (2023)."
        ] }
      ] },
      intro: [
        { role: "accroche", txt: "Un porte-conteneurs géant peut transporter plus de 20 000 conteneurs : la mondialisation passe d'abord par la mer." },
        { role: "definitions", txt: "La mondialisation est la mise en relation des territoires par des flux ; la maritimisation désigne le rôle croissant des mers dans ces échanges." },
        { role: "contexte", txt: "Depuis les années 1960, la conteneurisation et l'ouverture des économies ont fait exploser le trafic maritime, tandis que les États se partagent les espaces marins depuis la convention de Montego Bay (1982)." },
        { role: "problematique", txt: "Pourquoi les mers et les océans sont-ils devenus des espaces essentiels, mais aussi disputés, de la mondialisation ?" },
        { role: "annonce", txt: "Nous verrons qu'ils sont des espaces de circulation essentiels, qu'ils recèlent des ressources convoitées, et qu'ils sont donc disputés et à protéger." }
      ],
      conclusion: [
        { role: "bilan", txt: "Routes du commerce, réservoirs de ressources, les mers sont au cœur de la mondialisation, et donc au cœur des rivalités." },
        { role: "reponse", txt: "Leur importance croissante pousse les États à se les approprier, ce qui provoque des tensions et rend nécessaire une gouvernance mondiale." },
        { role: "ouverture", txt: "La France, avec la deuxième ZEE du monde grâce à ses outre-mer, est directement concernée par ces enjeux." }
      ]
    },
    {
      id: "ue-mondialisation", chapitre: "tle-g3",
      sujet: "L'Union européenne dans la mondialisation : des dynamiques complexes",
      analyse: [
        { q: "Pourquoi le sujet parle-t-il de « dynamiques complexes » ?", r: "L'UE est à la fois intégrée, ouverte, inégale et fragile", faux: ["L'UE est un espace très simple à étudier", "L'UE n'a aucun lien avec la mondialisation", "L'UE est un seul État"], expl: "Le sujet invite à nuancer : réussites (intégration, puissance commerciale) et limites (inégalités, divisions)." },
        { q: "Combien d'États compte l'Union européenne aujourd'hui ?", r: "27", faux: ["12", "15", "28"], expl: "Depuis la sortie du Royaume-Uni (Brexit, 2020), l'UE compte 27 États membres." },
        { q: "Quelle politique vise à réduire les inégalités entre les régions de l'UE ?", r: "La politique de cohésion", faux: ["La politique agricole commune seulement", "La politique de défense", "La politique monétaire"], expl: "Les fonds de la politique de cohésion (dont le FEDER) aident surtout les régions les moins développées." }
      ],
      problematique: {
        r: "L'Union européenne parvient-elle à concilier son intégration, son ouverture au monde et la cohésion de ses territoires ?",
        faux: ["Quelle est la capitale de l'Union européenne ?", "Quand l'euro a-t-il été créé ?", "Combien de langues parle-t-on en Europe ?"],
        expl: "Elle met en tension les dynamiques du sujet : ouverture, compétitivité, cohésion."
      },
      plan: { type: "thématique", expl: "Une puissance ouverte, des territoires inégaux, des politiques pour les réduire — avec leurs limites.", parties: [
        { titre: "Une puissance ouverte sur le monde", args: [
          "L'UE est l'un des premiers pôles commerciaux du monde, avec un marché unique de près de 450 millions d'habitants.",
          "Des façades maritimes majeures : la Northern Range (Rotterdam, Anvers, Hambourg).",
          "Une monnaie commune, l'euro, utilisée par 21 États depuis l'entrée de la Bulgarie en 2026."
        ] },
        { titre: "Des territoires inégalement intégrés", args: [
          "Un cœur dynamique, la « dorsale européenne », de Londres à Milan.",
          "Des périphéries moins intégrées : régions rurales, Europe de l'Est et du Sud.",
          "Des métropoles très connectées : Paris, Francfort, Amsterdam."
        ] },
        { titre: "Des politiques entre compétitivité et cohésion", args: [
          "La politique de cohésion finance routes, réseaux et formation dans les régions en retard.",
          "Les corridors de transport européens (RTE-T) relient les territoires.",
          "Des limites : divisions sur l'immigration, la défense, la fiscalité ; le Brexit (2020)."
        ] }
      ] },
      intro: [
        { role: "accroche", txt: "Avec près de 450 millions d'habitants, l'Union européenne forme l'un des plus grands marchés du monde." },
        { role: "definitions", txt: "L'Union européenne est une organisation qui réunit 27 États ; la mondialisation est la mise en relation des territoires du monde par des flux." },
        { role: "contexte", txt: "Depuis le traité de Rome (1957) et le traité de Maastricht (1992), l'intégration européenne s'est approfondie et élargie, jusqu'au départ du Royaume-Uni en 2020." },
        { role: "problematique", txt: "L'Union européenne parvient-elle à concilier son intégration, son ouverture au monde et la cohésion de ses territoires ?" },
        { role: "annonce", txt: "Nous verrons qu'elle est une puissance ouverte sur le monde, que ses territoires sont inégalement intégrés, et que ses politiques cherchent à concilier compétitivité et cohésion." }
      ],
      conclusion: [
        { role: "bilan", txt: "Puissance commerciale ouverte, l'UE juxtapose un cœur très intégré et des périphéries en retard, que ses politiques s'efforcent de rapprocher." },
        { role: "reponse", txt: "Elle concilie partiellement ces objectifs : les inégalités entre États se réduisent, mais les écarts entre régions et les divisions politiques persistent." },
        { role: "ouverture", txt: "La guerre en Ukraine, depuis 2022, pose à l'UE la question de sa puissance militaire et énergétique." }
      ]
    }
  ],

  docs: [
    {
      id: "appel-18-juin", chapitre: "tle-h1-c3",
      consigne: "En analysant le document, montrez comment le général de Gaulle refuse la défaite et justifie la poursuite de la guerre.",
      doc: {
        titre: "L'appel du 18 juin 1940",
        extrait: [
          "Les chefs qui, depuis de nombreuses années, sont à la tête des armées françaises, ont formé un gouvernement. Ce gouvernement, alléguant la défaite de nos armées, s'est mis en rapport avec l'ennemi pour cesser le combat. […]",
          "Mais le dernier mot est-il dit ? L'espérance doit-elle disparaître ? La défaite est-elle définitive ? Non ! […]",
          "Car la France n'est pas seule ! Elle n'est pas seule ! Elle n'est pas seule ! Elle a un vaste Empire derrière elle. Elle peut faire bloc avec l'Empire britannique qui tient la mer et continue la lutte. […]",
          "Quoi qu'il arrive, la flamme de la résistance française ne doit pas s'éteindre et ne s'éteindra pas."
        ],
        source: "Charles de Gaulle, discours radiodiffusé sur la BBC depuis Londres, 18 juin 1940 (extraits)."
      },
      presentation: [
        { q: "Quelle est la nature de ce document ?", r: "Un discours radiodiffusé", faux: ["Une lettre privée", "Un article de journal", "Un traité international"], expl: "De Gaulle parle au micro de la BBC, la radio britannique." },
        { q: "Qui est l'auteur en juin 1940 ?", r: "Un général, ancien sous-secrétaire d'État à la Guerre, réfugié à Londres", faux: ["Le chef du gouvernement français", "Le Premier ministre britannique", "Le président de la République"], expl: "De Gaulle, général de brigade, a été sous-secrétaire d'État à la Guerre dans le gouvernement Reynaud ; il gagne Londres le 17 juin." },
        { q: "Quel est le contexte immédiat ?", r: "Pétain vient d'annoncer qu'il faut cesser le combat", faux: ["Paris vient d'être libéré", "Les États-Unis viennent d'entrer en guerre", "L'armistice est déjà appliqué depuis un an"], expl: "Le 17 juin 1940, Pétain, nouveau chef du gouvernement, demande l'armistice." },
        { q: "À qui s'adresse ce discours ?", r: "Aux Français, en particulier aux soldats et aux ingénieurs qui peuvent rejoindre Londres", faux: ["Au seul gouvernement britannique", "À Hitler", "Aux électeurs américains"], expl: "Dans la suite du texte, de Gaulle invite officiers, soldats, ingénieurs et ouvriers à le rejoindre." }
      ],
      comprendre: [
        { a: "De Gaulle reconnaît que la France a perdu une bataille.", vrai: true, expl: "Il évoque « la défaite de nos armées », mais refuse qu'elle soit « définitive »." },
        { a: "De Gaulle approuve la décision du gouvernement de cesser le combat.", vrai: false, expl: "Il la dénonce : le gouvernement « s'est mis en rapport avec l'ennemi pour cesser le combat »." },
        { a: "Pour de Gaulle, la France peut s'appuyer sur son Empire colonial.", vrai: true, expl: "« Elle a un vaste Empire derrière elle. »" },
        { a: "De Gaulle compte sur l'alliance avec le Royaume-Uni.", vrai: true, expl: "La France peut faire bloc avec « l'Empire britannique qui tient la mer et continue la lutte »." },
        { a: "De Gaulle pense que la guerre se limite à la France.", vrai: false, expl: "Dans la suite de l'appel, il affirme que « cette guerre est une guerre mondiale » ; ici déjà, il compte sur l'Empire et le Royaume-Uni." }
      ],
      portee: [
        { q: "Pourquoi l'appel est-il peu entendu sur le moment ?", r: "Peu de Français écoutent la BBC ce jour-là, et de Gaulle est presque inconnu", faux: ["Il est interdit par les Britanniques", "Il est prononcé en anglais", "Il est diffusé en 1944"], expl: "L'appel devient célèbre après coup ; sur le moment, de Gaulle rallie quelques milliers de volontaires." },
        { q: "Quelle est la principale portée de ce texte ?", r: "Il fonde la France libre et le refus de l'armistice", faux: ["Il met fin à la guerre", "Il crée le régime de Vichy", "Il annonce le débarquement en Normandie"], expl: "C'est l'acte de naissance de la France libre, qui continue la guerre aux côtés des Alliés." },
        { q: "Quelle limite faut-il souligner ?", r: "C'est un discours de mobilisation, qui exprime le point de vue de son auteur", faux: ["Le texte est un faux", "Le texte décrit précisément les batailles", "Le texte est neutre"], expl: "De Gaulle cherche à convaincre : il présente une vision optimiste de la situation." }
      ],
      modele: {
        intro: "Le 18 juin 1940, depuis Londres, le général de Gaulle s'adresse aux Français sur les ondes de la BBC. La veille, le maréchal Pétain, nouveau chef du gouvernement, a annoncé qu'il fallait cesser le combat. Comment de Gaulle refuse-t-il la défaite et justifie-t-il la poursuite de la guerre ? Nous verrons qu'il dénonce le choix de l'armistice, puis qu'il donne des raisons d'espérer.",
        parties: [
          { titre: "Le refus de l'armistice", txt: "De Gaulle reconnaît « la défaite de nos armées » : depuis mai 1940, l'armée allemande a percé à Sedan et occupe Paris. Mais il dénonce le gouvernement de Pétain, qui « s'est mis en rapport avec l'ennemi pour cesser le combat ». Par une série de questions (« La défaite est-elle définitive ? Non ! »), il refuse de considérer la guerre comme perdue." },
          { titre: "Des raisons d'espérer", txt: "Selon lui, « la France n'est pas seule » : elle peut s'appuyer sur « un vaste Empire » colonial et sur l'alliance avec « l'Empire britannique », qui continue la lutte. Il annonce que « la flamme de la résistance française ne doit pas s'éteindre ». Ce discours fonde la France libre, qui rallie peu à peu des territoires de l'Empire, comme l'Afrique-Équatoriale française dès l'été 1940." }
        ],
        conclusion: "Dans ce discours de mobilisation, de Gaulle refuse l'armistice et appelle à poursuivre le combat. Peu entendu sur le moment, l'appel du 18 juin devient l'acte fondateur de la France libre et de la Résistance."
      }
    },
    {
      id: "fulton", chapitre: "tle-h2-c1",
      consigne: "En analysant le document, montrez comment Churchill décrit la division de l'Europe et ce qu'il propose face à l'URSS.",
      doc: {
        titre: "Le discours de Fulton, 5 mars 1946",
        extrait: [
          "De Stettin dans la Baltique à Trieste dans l'Adriatique, un rideau de fer est descendu à travers le continent. Derrière cette ligne se trouvent toutes les capitales des anciens États d'Europe centrale et orientale : Varsovie, Berlin, Prague, Vienne, Budapest, Belgrade, Bucarest et Sofia. […]",
          "Toutes ces villes célèbres et les populations qui les entourent se trouvent dans ce que je dois appeler la sphère soviétique, et toutes sont soumises, sous une forme ou sous une autre, non seulement à l'influence soviétique, mais aussi à un degré très élevé et souvent croissant de contrôle de la part de Moscou. […]",
          "D'après ce que j'ai vu de nos amis et alliés russes pendant la guerre, je suis convaincu qu'il n'y a rien qu'ils admirent autant que la force, et rien qu'ils respectent moins que la faiblesse, en particulier la faiblesse militaire."
        ],
        source: "Winston Churchill, discours au Westminster College de Fulton (Missouri, États-Unis), 5 mars 1946 (extraits, traduction)."
      },
      presentation: [
        { q: "Qui est Churchill en mars 1946 ?", r: "L'ancien Premier ministre britannique, chef de l'opposition", faux: ["Le président des États-Unis", "Le Premier ministre britannique en exercice", "Le secrétaire général de l'ONU"], expl: "Battu aux élections de juillet 1945, Churchill n'est plus au pouvoir, mais garde un immense prestige." },
        { q: "Où le discours est-il prononcé ?", r: "Aux États-Unis, en présence du président Truman", faux: ["À Londres, devant le Parlement", "À Moscou", "À Berlin"], expl: "Truman, originaire du Missouri, assiste au discours : le message s'adresse aussi aux Américains." },
        { q: "Quel est le contexte ?", r: "Les Alliés de la guerre se divisent ; l'URSS étend son influence en Europe de l'Est", faux: ["La Seconde Guerre mondiale vient de commencer", "Le mur de Berlin vient d'être construit", "L'URSS vient de disparaître"], expl: "En 1945-1946, l'Armée rouge occupe l'Europe de l'Est, où les communistes s'emparent peu à peu du pouvoir." }
      ],
      comprendre: [
        { a: "Pour Churchill, l'Europe est coupée en deux par une frontière qui va de la Baltique à l'Adriatique.", vrai: true, expl: "« De Stettin dans la Baltique à Trieste dans l'Adriatique, un rideau de fer est descendu. »" },
        { a: "Les capitales d'Europe de l'Est sont, selon lui, libres de toute influence soviétique.", vrai: false, expl: "Elles sont soumises « à un degré très élevé et souvent croissant de contrôle de la part de Moscou »." },
        { a: "Berlin fait partie des villes que Churchill place derrière le rideau de fer.", vrai: true, expl: "Il cite Varsovie, Berlin, Prague, Vienne, Budapest, Belgrade, Bucarest et Sofia." },
        { a: "Churchill pense que la faiblesse militaire impressionne les Soviétiques.", vrai: false, expl: "C'est l'inverse : ils ne respectent rien moins que « la faiblesse, en particulier la faiblesse militaire »." }
      ],
      portee: [
        { q: "Que propose implicitement Churchill ?", r: "Que les démocraties occidentales, surtout les États-Unis, restent fortes et unies face à l'URSS", faux: ["De déclarer la guerre à l'URSS", "De dissoudre l'ONU", "De laisser l'Europe de l'Est à l'Allemagne"], expl: "Il appelle à une association étroite entre Britanniques et Américains : c'est une préfiguration de l'endiguement." },
        { q: "Quelle est la portée de l'expression « rideau de fer » ?", r: "Elle devient le symbole de la division de l'Europe pendant la guerre froide", faux: ["Elle désigne un mur construit en 1946", "Elle est oubliée aussitôt", "Elle désigne la frontière franco-allemande"], expl: "L'expression s'impose pour désigner la coupure de l'Europe ; le mur de Berlin n'est construit qu'en 1961." },
        { q: "Quelle limite faut-il souligner ?", r: "C'est le point de vue d'un dirigeant occidental très hostile au communisme", faux: ["Churchill ignore tout de l'URSS", "Le discours est favorable à Staline", "Le texte est un traité officiel"], expl: "Staline dénonce aussitôt un discours « belliciste » : le texte exprime le point de vue d'un camp." }
      ],
      modele: {
        intro: "Le 5 mars 1946, à Fulton, aux États-Unis, l'ancien Premier ministre britannique Winston Churchill prononce un discours en présence du président Truman. Les Alliés de la Seconde Guerre mondiale se divisent, alors que l'Armée rouge occupe l'Europe de l'Est. Comment Churchill décrit-il la division de l'Europe et que propose-t-il face à l'URSS ? Nous verrons qu'il dénonce la coupure du continent, puis qu'il appelle les démocraties à la fermeté.",
        parties: [
          { titre: "Une Europe coupée par un « rideau de fer »", txt: "Churchill décrit une ligne qui va « de Stettin dans la Baltique à Trieste dans l'Adriatique ». À l'est, les capitales comme « Varsovie, Berlin, Prague » sont dans la « sphère soviétique » et soumises au « contrôle de Moscou ». En effet, avec l'appui de l'Armée rouge, les communistes s'emparent du pouvoir dans ces pays, jusqu'au coup de Prague de février 1948." },
          { titre: "Un appel à la fermeté", txt: "Pour Churchill, les Soviétiques n'admirent « rien autant que la force » : il faut donc que les démocraties restent fortes et unies, autour des États-Unis. Ce discours annonce la doctrine Truman de 1947, qui veut endiguer le communisme, et la création de l'OTAN en 1949." }
        ],
        conclusion: "Le discours de Fulton dénonce la division de l'Europe et appelle à la fermeté face à l'URSS. Il exprime le point de vue d'un camp, mais il annonce la guerre froide, que les doctrines Truman et Jdanov rendent officielle en 1947."
      }
    },
    {
      id: "veil", chapitre: "tle-h3-c2",
      consigne: "En analysant le document, expliquez les arguments de Simone Veil en faveur de la légalisation de l'IVG.",
      doc: {
        titre: "Simone Veil devant l'Assemblée nationale, 26 novembre 1974",
        extrait: [
          "Je voudrais tout d'abord vous faire partager une conviction de femme — je m'excuse de le faire devant cette Assemblée presque exclusivement composée d'hommes : aucune femme ne recourt de gaieté de cœur à l'avortement. Il suffit d'écouter les femmes.",
          "C'est toujours un drame et cela restera toujours un drame.",
          "C'est pourquoi, si le projet qui vous est présenté tient compte de la situation de fait existante, s'il admet la possibilité d'une interruption de grossesse, c'est pour la contrôler et, autant que possible, en dissuader la femme."
        ],
        source: "Simone Veil, ministre de la Santé, discours à l'Assemblée nationale, 26 novembre 1974 (extraits)."
      },
      presentation: [
        { q: "Qui est Simone Veil en 1974 ?", r: "La ministre de la Santé du gouvernement de Jacques Chirac, sous la présidence de Valéry Giscard d'Estaing", faux: ["Une députée communiste", "La présidente de la République", "Une militante sans fonction officielle"], expl: "Magistrate, rescapée d'Auschwitz, elle est nommée ministre de la Santé en 1974." },
        { q: "Devant qui parle-t-elle ?", r: "Devant les députés, presque tous des hommes", faux: ["Devant un congrès de médecins", "Devant le Conseil constitutionnel", "À la télévision, devant les Français"], expl: "Elle le souligne elle-même : l'Assemblée est « presque exclusivement composée d'hommes »." },
        { q: "Quel est le contexte ?", r: "L'avortement est un délit, mais des centaines de milliers ont lieu clandestinement", faux: ["L'avortement est autorisé depuis 1920", "La contraception est interdite depuis 1967", "Les femmes ne votent pas encore"], expl: "La loi de 1920 interdit l'avortement ; des mouvements comme le manifeste des 343 (1971) ou le procès de Bobigny (1972) réclament sa légalisation." }
      ],
      comprendre: [
        { a: "Simone Veil présente l'avortement comme un acte banal.", vrai: false, expl: "Au contraire : « C'est toujours un drame et cela restera toujours un drame. »" },
        { a: "Elle s'appuie sur l'expérience des femmes.", vrai: true, expl: "« Il suffit d'écouter les femmes » ; elle parle avec une « conviction de femme »." },
        { a: "Le projet de loi part d'une situation qui existe déjà.", vrai: true, expl: "Il « tient compte de la situation de fait existante » : des centaines de milliers d'avortements clandestins chaque année." },
        { a: "Pour Simone Veil, la loi doit encourager l'avortement.", vrai: false, expl: "Au contraire : il s'agit de « la contrôler et, autant que possible, en dissuader la femme »." }
      ],
      portee: [
        { q: "Quelle est la portée de ce discours ?", r: "Il permet le vote de la loi Veil, promulguée en janvier 1975, qui dépénalise l'IVG", faux: ["Il interdit la contraception", "Il donne le droit de vote aux femmes", "Il crée la Sécurité sociale"], expl: "Après de très violents débats, la loi est adoptée grâce aux voix de la gauche et d'une partie de la droite." },
        { q: "Quelle stratégie Simone Veil adopte-t-elle ?", r: "Présenter la loi comme une solution à un drame de santé publique, pas comme un droit à revendiquer", faux: ["Insulter ses adversaires", "Refuser tout débat", "Parler uniquement d'économie"], expl: "Elle cherche à convaincre une Assemblée majoritairement conservatrice." },
        { q: "Quelle limite le document présente-t-il ?", r: "Il ne montre pas la violence des opposants, ni les luttes féministes qui ont préparé la loi", faux: ["Il est écrit après 2000", "Il est rédigé par un adversaire de la loi", "Il ne parle pas des femmes"], expl: "Le débat fut d'une grande violence ; et la loi doit beaucoup aux mobilisations féministes (MLF, manifeste des 343)." }
      ],
      modele: {
        intro: "Le 26 novembre 1974, Simone Veil, ministre de la Santé du gouvernement Chirac, présente devant l'Assemblée nationale un projet de loi sur l'interruption volontaire de grossesse. L'avortement est alors un délit, mais il est pratiqué clandestinement. Quels arguments Simone Veil avance-t-elle pour défendre la légalisation ? Nous verrons qu'elle décrit un drame vécu par les femmes, puis qu'elle présente la loi comme une nécessité.",
        parties: [
          { titre: "Un drame vécu par les femmes", txt: "Simone Veil parle avec une « conviction de femme » devant une Assemblée « presque exclusivement composée d'hommes ». Elle affirme qu'« aucune femme ne recourt de gaieté de cœur à l'avortement » et que « c'est toujours un drame ». Elle désamorce ainsi l'accusation de banaliser l'avortement." },
          { titre: "Une loi devenue nécessaire", txt: "Le projet « tient compte de la situation de fait existante » : on estime alors à environ 300 000 par an les avortements clandestins, qui mettent en danger la vie des femmes, et la loi de 1920 n'est plus appliquée. La loi doit permettre de « contrôler » l'IVG et, « autant que possible, en dissuader la femme ». Les mobilisations féministes, comme le manifeste des 343 (1971) et le procès de Bobigny (1972), ont rendu le débat incontournable. La loi Veil est promulguée le 17 janvier 1975." }
        ],
        conclusion: "Par un discours mesuré, Simone Veil présente la légalisation de l'IVG comme une réponse à un drame de santé publique. La loi de 1975 marque un tournant dans les droits des femmes ; le droit à l'IVG est inscrit dans la Constitution en 2024."
      }
    },
    {
      id: "badinter", chapitre: "tle-h3-c2",
      consigne: "En analysant le document, montrez comment Robert Badinter défend l'abolition de la peine de mort.",
      doc: {
        titre: "Robert Badinter devant l'Assemblée nationale, 17 septembre 1981",
        extrait: [
          "J'ai l'honneur, au nom du Gouvernement de la République, de demander à l'Assemblée nationale l'abolition de la peine de mort en France. […]",
          "Demain, grâce à vous, la justice française ne sera plus une justice qui tue. Demain, grâce à vous, il n'y aura plus, pour notre honte commune, d'exécutions furtives, à l'aube, sous le dais noir, dans les prisons françaises."
        ],
        source: "Robert Badinter, garde des Sceaux, ministre de la Justice, discours à l'Assemblée nationale, 17 septembre 1981 (extraits)."
      },
      presentation: [
        { q: "Qui est Robert Badinter en 1981 ?", r: "L'avocat devenu ministre de la Justice du gouvernement de Pierre Mauroy", faux: ["Le président de la République", "Un député de l'opposition", "Le Premier ministre"], expl: "Avocat engagé contre la peine de mort, il est nommé garde des Sceaux par François Mitterrand en juin 1981." },
        { q: "Quel est le contexte politique ?", r: "L'alternance : la gauche vient d'arriver au pouvoir avec l'élection de François Mitterrand", faux: ["De Gaulle vient de revenir au pouvoir", "La France est en guerre", "La IVe République est proclamée"], expl: "Élu le 10 mai 1981, Mitterrand avait promis l'abolition pendant sa campagne." },
        { q: "À qui s'adresse ce discours ?", r: "Aux députés, qui doivent voter la loi", faux: ["Aux juges", "Aux condamnés à mort", "Aux électeurs, par la radio"], expl: "« Grâce à vous » : il s'adresse aux députés, qui votent la loi le 18 septembre 1981." }
      ],
      comprendre: [
        { a: "Badinter parle au nom du gouvernement.", vrai: true, expl: "« J'ai l'honneur, au nom du Gouvernement de la République, de demander… »" },
        { a: "Badinter présente les exécutions comme une fierté nationale.", vrai: false, expl: "Il parle au contraire de « notre honte commune »." },
        { a: "Il dénonce le caractère caché des exécutions.", vrai: true, expl: "Il évoque des « exécutions furtives, à l'aube, sous le dais noir »." },
        { a: "Pour lui, une justice qui tue n'est pas digne de la République.", vrai: true, expl: "« La justice française ne sera plus une justice qui tue. »" }
      ],
      portee: [
        { q: "Quelle est la portée du discours ?", r: "La loi abolissant la peine de mort est promulguée le 9 octobre 1981", faux: ["La peine de mort est rétablie", "La loi est rejetée par les députés", "Il ne change rien"], expl: "L'abolition est votée alors qu'une majorité de Français y était encore favorable ; elle est inscrite dans la Constitution en 2007." },
        { q: "Pourquoi le vote est-il courageux ?", r: "Les sondages montrent alors qu'une majorité de Français est favorable à la peine de mort", faux: ["La peine de mort n'était plus appliquée depuis 1900", "Tous les Français étaient contre la peine de mort", "La loi était imposée par l'ONU"], expl: "Le gouvernement choisit d'aller contre l'opinion majoritaire du moment." },
        { q: "Dans quel mouvement plus large ce texte s'inscrit-il ?", r: "Les grandes réformes de société du début des années 1980", faux: ["La décolonisation", "La reconstruction d'après-guerre", "La guerre froide en Asie"], expl: "Abolition, dépénalisation de l'homosexualité (1982), radios libres : la France de 1981-1982 change." }
      ],
      modele: {
        intro: "Le 17 septembre 1981, le garde des Sceaux Robert Badinter présente aux députés le projet de loi abolissant la peine de mort. François Mitterrand, élu en mai 1981, l'avait promis pendant sa campagne. Comment Robert Badinter défend-il l'abolition ? Nous verrons qu'il engage solennellement la République, puis qu'il dénonce une justice qui tue.",
        parties: [
          { titre: "Un engagement solennel de la République", txt: "Badinter parle « au nom du Gouvernement de la République » : l'abolition est présentée comme un choix politique et moral, assumé par la gauche arrivée au pouvoir avec l'alternance de 1981, alors même qu'une majorité de Français reste favorable à la peine de mort." },
          { titre: "La condamnation d'une justice qui tue", txt: "Il dénonce une « justice qui tue » et des « exécutions furtives, à l'aube », qu'il qualifie de « honte commune ». La dernière exécution en France a eu lieu en 1977. La loi est votée le 18 septembre et promulguée le 9 octobre 1981." }
        ],
        conclusion: "Robert Badinter fait de l'abolition une question de dignité pour la République. La loi de 1981 fait partie des grandes réformes de société du début des années 1980 ; l'abolition est inscrite dans la Constitution en 2007."
      }
    },
    {
      id: "schuman", chapitre: "tle-h2-c3",
      consigne: "En analysant le document, montrez quel projet européen propose Robert Schuman et pourquoi.",
      doc: {
        titre: "La déclaration Schuman, 9 mai 1950",
        extrait: [
          "L'Europe ne se fera pas d'un coup, ni dans une construction d'ensemble : elle se fera par des réalisations concrètes créant d'abord une solidarité de fait. Le rassemblement des nations européennes exige que l'opposition séculaire de la France et de l'Allemagne soit éliminée. […]",
          "Le gouvernement français propose de placer l'ensemble de la production franco-allemande de charbon et d'acier sous une Haute Autorité commune, dans une organisation ouverte à la participation des autres pays d'Europe. […]",
          "La solidarité de production qui sera ainsi nouée manifestera que toute guerre entre la France et l'Allemagne devient non seulement impensable, mais matériellement impossible."
        ],
        source: "Robert Schuman, ministre français des Affaires étrangères, déclaration du 9 mai 1950 (extraits)."
      },
      presentation: [
        { q: "Qui est Robert Schuman en 1950 ?", r: "Le ministre français des Affaires étrangères", faux: ["Le président de la République", "Le chancelier allemand", "Le président des États-Unis"], expl: "Il présente ce projet, préparé par Jean Monnet, au nom du gouvernement français." },
        { q: "Quel est le contexte ?", r: "Cinq ans après la guerre, la guerre froide divise l'Europe et la RFA vient d'être créée", faux: ["La Seconde Guerre mondiale vient de commencer", "Le mur de Berlin vient de tomber", "L'euro vient d'être créé"], expl: "La RFA naît en 1949 ; les États-Unis veulent une Europe de l'Ouest forte et réconciliée face à l'URSS." }
      ],
      comprendre: [
        { a: "Schuman veut construire l'Europe d'un seul coup.", vrai: false, expl: "« L'Europe ne se fera pas d'un coup » : elle se fera par « des réalisations concrètes »." },
        { a: "La réconciliation franco-allemande est au cœur du projet.", vrai: true, expl: "Il faut que « l'opposition séculaire de la France et de l'Allemagne soit éliminée »." },
        { a: "Le projet est réservé à la France et à l'Allemagne.", vrai: false, expl: "L'organisation est « ouverte à la participation des autres pays d'Europe »." },
        { a: "Mettre en commun charbon et acier doit rendre la guerre impossible.", vrai: true, expl: "La guerre deviendrait « matériellement impossible » : charbon et acier sont les bases de l'industrie d'armement." }
      ],
      portee: [
        { q: "Quelle est la conséquence directe de cette déclaration ?", r: "La création de la CECA par six pays (traité de Paris, 1951)", faux: ["La création de l'OTAN", "La création de l'euro", "La réunification de l'Allemagne"], expl: "France, RFA, Italie, Belgique, Pays-Bas et Luxembourg fondent la CECA en 1951." },
        { q: "Quelle méthode européenne ce texte inaugure-t-il ?", r: "Une intégration progressive, secteur par secteur", faux: ["Une fédération immédiate", "Une alliance militaire", "Une union monétaire immédiate"], expl: "C'est la méthode des « petits pas », qui mène au traité de Rome (1957), puis à Maastricht (1992)." }
      ],
      modele: {
        intro: "Le 9 mai 1950, Robert Schuman, ministre français des Affaires étrangères, propose de mettre en commun la production de charbon et d'acier de la France et de la RFA. Cinq ans après la guerre, alors que la guerre froide divise le continent, quel projet européen propose-t-il, et pourquoi ? Nous verrons qu'il veut réconcilier la France et l'Allemagne, par une méthode concrète et progressive.",
        parties: [
          { titre: "Réconcilier la France et l'Allemagne", txt: "Schuman veut éliminer « l'opposition séculaire » des deux pays, qui se sont affrontés en 1870, 1914 et 1939. Mettre en commun le charbon et l'acier, bases de l'industrie d'armement, doit rendre la guerre « matériellement impossible »." },
          { titre: "Une méthode concrète et progressive", txt: "L'Europe se fera « par des réalisations concrètes », sous une « Haute Autorité commune » ouverte aux autres pays. Le traité de Paris crée en 1951 la CECA à six ; cette méthode des petits pas mène au traité de Rome (1957), qui fonde la CEE." }
        ],
        conclusion: "La déclaration Schuman propose une Europe fondée sur la paix et la solidarité économique. Le 9 mai est devenu la « Journée de l'Europe »."
      }
    }
  ],

  figures: {
    titre: "Les figurés et la légende du croquis", sous: "Choisir le bon figuré, puis organiser une légende", nb: 10,
    items: [
      { txt: "Un grand port de commerce", type: "ponctuel", fig: "cercle", expl: "Un cercle, de taille proportionnelle au trafic du port." },
      { txt: "Une route maritime majeure", type: "lineaire", fig: "trait", expl: "Un trait, plus épais quand le trafic est plus important." },
      { txt: "Une zone économique exclusive (ZEE)", type: "surfacique", fig: "hachures", expl: "Des hachures ou un aplat clair, pour un espace marin." },
      { txt: "Un détroit stratégique, comme Ormuz ou Malacca", type: "ponctuel", fig: "etoile", expl: "Un symbole (étoile, losange) sur le passage." },
      { txt: "Des flux de migrants vers l'Europe", type: "lineaire", fig: "fleche", expl: "Une flèche, dont l'épaisseur indique l'importance du flux." },
      { txt: "Une région industrielle dynamique", type: "surfacique", fig: "aplat", expl: "Un aplat de couleur chaude (rouge, orange)." },
      { txt: "Une métropole mondiale", type: "ponctuel", fig: "carre", expl: "Un carré ou un cercle, hiérarchisé par la taille." },
      { txt: "Une frontière disputée", type: "lineaire", fig: "pointilles", expl: "Un trait discontinu, souvent rouge pour une tension." },
      { txt: "Un espace rural en déprise", type: "surfacique", fig: "aplat", expl: "Un aplat de couleur froide ou pâle (vert pâle, gris)." },
      { txt: "Une plateforme pétrolière offshore", type: "ponctuel", fig: "triangle", expl: "Un petit symbole (triangle) au large." },
      { txt: "Un axe de transport (autoroute, ligne à grande vitesse)", type: "lineaire", fig: "trait", expl: "Un trait continu." },
      { txt: "Une façade maritime", type: "surfacique", fig: "hachures", expl: "Un aplat ou des hachures le long du littoral." },
      { txt: "Un câble sous-marin intercontinental", type: "lineaire", fig: "trait", expl: "Un trait fin, éventuellement en couleur." },
      { txt: "Une aire marine protégée", type: "surfacique", fig: "hachures", expl: "Des hachures vertes : un espace protégé." }
    ],
    legende: {
      sujet: "Croquis : mers et océans, au cœur de la mondialisation",
      parties: [
        { titre: "Des espaces de circulation essentiels", items: ["Grandes routes maritimes conteneurisées", "Principaux ports mondiaux (Shanghai, Singapour, Rotterdam)", "Canaux et détroits stratégiques (Suez, Panama, Malacca, Ormuz)"] },
        { titre: "Des espaces riches en ressources", items: ["Grandes zones de pêche", "Zones d'exploitation d'hydrocarbures offshore (golfe Arabo-Persique, mer du Nord)"] },
        { titre: "Des espaces disputés et à protéger", items: ["Zones de tensions sur les ZEE (mer de Chine méridionale)", "Zones de piraterie (golfe d'Aden, golfe de Guinée)", "Arctique : nouvelles routes et nouvelles convoitises"] }
      ]
    }
  }
};
