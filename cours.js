/* Fiches de révision — histoire-géographie de Terminale générale (programme du BO spécial n° 8 du 25 juillet 2019).
   Mêmes champs que la boîte à outils du lycée (voir le schéma dans son cours.js) :
   id, n, d, theme, num, titre, question, plan, cle, essentiel, periodes, reperes, notions, personnages, lieux, carte,
   graphiques, croquis, intrus, trous, capable, ppo (points de passage et d'ouverture ; en géographie : études de cas et question spécifique). */

const CLASSES = [
  { id: "Tle", nom: "Terminale", annee: [
    { d: "histoire", theme: "Thème 1 · Fragilités des démocraties, totalitarismes et Seconde Guerre mondiale (1929-1945)", chapitres: [
      { num: "Chapitre 1", titre: "L'impact de la crise de 1929 : déséquilibres économiques et sociaux", fiche: "tle-h1-c1" },
      { num: "Chapitre 2", titre: "Les régimes totalitaires", fiche: "tle-h1-c2" },
      { num: "Chapitre 3", titre: "La Seconde Guerre mondiale", fiche: "tle-h1-c3" }
    ] },
    { d: "histoire", theme: "Thème 2 · La multiplication des acteurs internationaux dans un monde bipolaire (de 1945 au début des années 1970)", chapitres: [
      { num: "Chapitre 4", titre: "La fin de la Seconde Guerre mondiale et les débuts d'un nouvel ordre mondial", fiche: "tle-h2-c1" },
      { num: "Chapitre 5", titre: "Une nouvelle donne géopolitique : bipolarisation et émergence du tiers-monde", fiche: "tle-h2-c2" },
      { num: "Chapitre 6", titre: "La France : une nouvelle place dans le monde", fiche: "tle-h2-c3" }
    ] },
    { d: "histoire", theme: "Thème 3 · Les remises en cause économiques, politiques et sociales des années 1970 à 1991", chapitres: [
      { num: "Chapitre 7", titre: "La modification des grands équilibres économiques et politiques mondiaux", fiche: "tle-h3-c1" },
      { num: "Chapitre 8", titre: "Un tournant social, politique et culturel, la France de 1974 à 1988", fiche: "tle-h3-c2" }
    ] },
    { d: "histoire", theme: "Thème 4 · Le monde, l'Europe et la France depuis les années 1990, entre coopérations et conflits", chapitres: [
      { num: "Chapitre 9", titre: "Nouveaux rapports de puissance et enjeux mondiaux", fiche: "tle-h4-c1" },
      { num: "Chapitre 10", titre: "La construction européenne entre élargissement, approfondissement et remises en question", fiche: "tle-h4-c2" },
      { num: "Chapitre 11", titre: "La République française", fiche: "tle-h4-c3" }
    ] },
    { d: "geo", theme: "Thème 1 · Mers et océans : au cœur de la mondialisation", chapitres: [
      { num: "Questions 1 et 2 · question spécifique", titre: "Mers et océans : vecteurs de la mondialisation, entre appropriation, protection et liberté de circulation ; la France, une puissance maritime ?", fiche: "tle-g1" }
    ] },
    { d: "geo", theme: "Thème 2 · Dynamiques territoriales, coopérations et tensions dans la mondialisation", chapitres: [
      { num: "Questions 1 et 2 · question spécifique", titre: "Des territoires inégalement intégrés ; coopérations, tensions et régulations ; la France, un rayonnement international différencié", fiche: "tle-g2" }
    ] },
    { d: "geo", theme: "Thème 3 · L'Union européenne dans la mondialisation : des dynamiques complexes", chapitres: [
      { num: "Questions 1 et 2 · question spécifique", titre: "Compétitivité et cohésion des territoires ; une UE plus ou moins ouverte sur le monde ; les territoires transfrontaliers français", fiche: "tle-g3" }
    ] },
    { d: "geo", theme: "Thème conclusif · La France et ses régions dans l'Union européenne et dans la mondialisation", chapitres: [
      { num: "Thème conclusif", titre: "Lignes de force et recompositions du territoire français", fiche: "tle-g4" }
    ] }
  ] }
];

const COURS = [
  {
    id: "tle-h1-c1", n: "Tle", d: "histoire", carte: "monde",
    theme: "Thème 1 · Fragilités des démocraties, totalitarismes et Seconde Guerre mondiale (1929-1945)",
    num: "Chapitre 1",
    titre: "L'impact de la crise de 1929 : déséquilibres économiques et sociaux",
    question: "Comment la crise de 1929, née aux États-Unis, devient-elle une crise mondiale qui bouleverse les sociétés et fragilise les démocraties ?",
    plan: [
      "Les causes de la crise et le krach de Wall Street",
      "D'une crise américaine à une crise mondiale",
      "Des sociétés frappées par le chômage de masse",
      "Des réponses nouvelles : le recul du libéralisme (New Deal, Front populaire)"
    ],
    cle: "La crise de 1929 transforme un krach boursier américain en dépression mondiale : le chômage de masse fragilise les démocraties et pousse les États à intervenir dans l'économie.",
    essentiel: [
      "Dans les années 1920, la croissance américaine repose sur le crédit et la spéculation. Le jeudi 24 octobre 1929 (« jeudi noir »), la Bourse de New York, à Wall Street, s'effondre : c'est le krach.",
      "Faillites bancaires, chute de la production et rapatriement des capitaux américains propagent la crise : l'Allemagne et l'Autriche, qui vivaient des prêts américains, puis l'Amérique latine, qui vend ses matières premières. Le protectionnisme (loi Hawley-Smoot, 1930) fait chuter le commerce mondial des deux tiers en valeur.",
      "La dépression provoque un chômage de masse : un quart des actifs américains en 1933, plus de 6 millions de chômeurs en Allemagne en 1932. La misère et la peur du déclassement nourrissent les extrémismes.",
      "Les États interviennent : New Deal de Roosevelt aux États-Unis (1933), accords Matignon du Front populaire en France (1936), grands travaux et réarmement en Allemagne nazie. Keynes justifie l'intervention de l'État (1936)."
    ],
    reperes: [
      { a: "1929-10-24", date: "24 octobre 1929", txt: "« Jeudi noir » : krach de la Bourse de New York, à Wall Street." },
      { a: "1930-06-17", date: "juin 1930", txt: "La loi Hawley-Smoot relève fortement les droits de douane américains." },
      { a: 1930, date: "1930", txt: "Coups d'État en Argentine et au Brésil, où Getúlio Vargas prend le pouvoir." },
      { a: "1931-05-11", date: "mai 1931", txt: "Faillite de la Creditanstalt de Vienne : la crise bancaire gagne l'Europe." },
      { a: "1931-09-21", date: "septembre 1931", txt: "Le Royaume-Uni abandonne l'étalon-or : la livre est dévaluée." },
      { a: "1933-01-30", date: "30 janvier 1933", txt: "Hitler devient chancelier en Allemagne." },
      { a: "1933-03-04", date: "4 mars 1933", txt: "Investiture de F. D. Roosevelt, qui lance le New Deal." },
      { a: "1935-08-14", date: "août 1935", txt: "Social Security Act : retraites et assurance chômage fédérales aux États-Unis." },
      { a: "1936-05-03", date: "mai 1936", txt: "Victoire du Front populaire aux élections législatives en France." },
      { a: "1936-06-07", date: "7-8 juin 1936", txt: "Accords Matignon : hausses de salaires, conventions collectives, délégués du personnel." },
      { a: 1936, date: "1936", txt: "Keynes publie la Théorie générale de l'emploi, de l'intérêt et de la monnaie." }
    ],
    notions: [
      { mot: "Krach", def: "Effondrement brutal des cours de la Bourse." },
      { mot: "Spéculation", def: "Achat d'actions ou de biens dans le seul but de les revendre plus cher, souvent avec de l'argent emprunté." },
      { mot: "Dépression", def: "Phase longue de recul de la production, des prix et de l'emploi." },
      { mot: "Déflation", def: "Baisse générale et durable des prix : elle décourage l'investissement et aggrave la crise." },
      { mot: "Protectionnisme", def: "Politique qui protège la production nationale de la concurrence étrangère par des droits de douane ou des quotas d'importation." },
      { mot: "Chômage de masse", def: "Chômage qui touche une très grande part de la population active : un quart des actifs américains en 1933." },
      { mot: "Libéralisme économique", def: "Doctrine selon laquelle l'État doit intervenir le moins possible dans l'économie, régulée par le marché." },
      { mot: "New Deal", def: "« Nouvelle donne » : la politique de Roosevelt à partir de 1933 ; l'État fédéral intervient pour relancer l'économie et protéger les plus fragiles." },
      { mot: "Keynésianisme", def: "Doctrine de l'économiste J. M. Keynes : en temps de crise, l'État doit relancer la demande par des dépenses publiques, quitte à créer un déficit." },
      { mot: "Front populaire", def: "Coalition des partis de gauche (radicaux, socialistes, communistes) qui gagne les élections de 1936 en France ; Léon Blum dirige le gouvernement." },
      { mot: "Accords Matignon", def: "Accords signés le 7 juin 1936 entre la CGT et le patronat, sous l'arbitrage de Blum : hausses de salaires de 7 à 15 %, conventions collectives, délégués du personnel." },
      { mot: "Étalon-or", def: "Système dans lequel la valeur d'une monnaie est fixée en or : l'abandonner permet de dévaluer pour relancer les exportations." }
    ],
    personnages: [
      { nom: "Franklin Delano Roosevelt", dates: "1882-1945", txt: [
        "Gouverneur de l'État de New York, il est élu président des États-Unis en 1932.",
        "« La seule chose dont nous devons avoir peur, c'est la peur elle-même », dit-il lors de son investiture.",
        "Il lance le New Deal en 1933 ; il sera réélu trois fois."
      ] },
      { nom: "Herbert Hoover", dates: "1874-1964", txt: [
        "Président républicain des États-Unis de 1929 à 1933.",
        "Fidèle au libéralisme, il pense que la crise se résorbera d'elle-même.",
        "Il signe la loi Hawley-Smoot en 1930."
      ] },
      { nom: "John Maynard Keynes", dates: "1883-1946", txt: [
        "Économiste britannique.",
        "En 1936, il publie la Théorie générale de l'emploi, de l'intérêt et de la monnaie.",
        "Il défend l'intervention de l'État pour relancer la demande et l'emploi."
      ] },
      { nom: "Léon Blum", dates: "1872-1950", txt: [
        "Dirigeant de la SFIO, le parti socialiste.",
        "Il devient président du Conseil du Front populaire en juin 1936.",
        "Son gouvernement fait voter les congés payés et la semaine de 40 heures."
      ] },
      { nom: "Getúlio Vargas", dates: "1882-1954", txt: [
        "Il prend le pouvoir au Brésil par la révolution de 1930, en pleine crise du café.",
        "En 1937, il instaure l'Estado Novo, un régime autoritaire et nationaliste.",
        "Il renforce le rôle de l'État dans l'économie et l'industrie."
      ] }
    ],
    lieux: [
      { nom: "Wall Street (New York)", lon: -74.01, lat: 40.71, txt: "La Bourse de New York, où le krach éclate le 24 octobre 1929." },
      { nom: "Detroit", lon: -83.05, lat: 42.33, txt: "Capitale de l'automobile américaine : la production s'effondre et le chômage explose." },
      { nom: "Berlin", lon: 13.4, lat: 52.52, txt: "Capitale d'une Allemagne frappée par le chômage de masse, où les nazis arrivent au pouvoir en 1933." },
      { nom: "Vienne", lon: 16.37, lat: 48.21, txt: "La faillite de la Creditanstalt, en 1931, y déclenche la crise bancaire européenne." },
      { nom: "Londres", lon: -0.13, lat: 51.51, txt: "Place financière mondiale : le Royaume-Uni abandonne l'étalon-or en 1931." },
      { nom: "Paris", lon: 2.35, lat: 48.86, txt: "Les accords Matignon y sont signés en juin 1936." },
      { nom: "São Paulo", lon: -46.63, lat: -23.55, txt: "Cœur de la production de café du Brésil : les cours s'effondrent et l'on détruit des stocks." },
      { nom: "Buenos Aires", lon: -58.38, lat: -34.6, txt: "Capitale de l'Argentine, où un coup d'État militaire renverse le président Yrigoyen en 1930." }
    ],
    graphiques: [
      { id: "chomage-usa", type: "courbes", titre: "Le taux de chômage aux États-Unis (1929-1938)", unite: "%",
        source: "S. Lebergott, Historical Statistics of the United States (part des chômeurs dans la population active)",
        x: [1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938],
        series: [{ nom: "Taux de chômage", valeurs: [3.2, 8.7, 15.9, 23.6, 24.9, 21.7, 20.1, 16.9, 14.3, 19] }],
        questions: [
          { q: "Que montre la hausse de 1937-1938 ?", r: "Une rechute : le New Deal n'a pas réglé la crise à lui seul", faux: ["La fin définitive de la crise", "L'effet de la Seconde Guerre mondiale", "Le krach de Wall Street"], expl: "En 1937-1938, la réduction des dépenses publiques provoque une nouvelle récession : le chômage remonte à 19 %." }
        ] },
      { id: "commerce-mondial", type: "barres", titre: "La contraction du commerce mondial (importations mensuelles de 75 pays, en millions de dollars-or)", unite: "millions de dollars-or",
        source: "C. P. Kindleberger, La Grande Crise mondiale 1929-1939 (valeurs arrondies, mois de janvier)",
        x: ["1929", "1930", "1931", "1932", "1933"], valeurs: [2998, 2739, 1839, 1206, 992], quoi: "le commerce mondial",
        questions: [
          { q: "Quelle politique aggrave cette contraction ?", r: "Le protectionnisme", faux: ["Le libre-échange", "La planification soviétique", "Le plan Marshall"], expl: "Chaque pays relève ses droits de douane (loi Hawley-Smoot en 1930) : les échanges s'effondrent des deux tiers." }
        ] }
    ],
    trous: [
      { titre: "La crise de 1929", texte: "Le 24 octobre 1929, le [krach] de Wall Street met fin à une croissance fondée sur le crédit et la [spéculation]. Les banques font faillite et les capitaux américains sont rapatriés : la crise devient [mondiale]. Les États se protègent par le [protectionnisme] et le commerce mondial s'effondre. Le [chômage] de masse touche un quart des actifs américains en 1933. Roosevelt lance le [New Deal] ; en France, le Front populaire signe les accords [Matignon]." }
    ],
    capable: [
      "Expliquer comment un krach boursier devient une crise mondiale.",
      "Décrire les conséquences sociales de la crise : chômage de masse, misère, peur du déclassement.",
      "Comparer les réponses à la crise : New Deal, Front populaire, régime nazi.",
      "Lire un graphique sur le chômage ou le commerce mondial."
    ],
    intrus: [
      { items: ["Krach", "Spéculation", "Déflation", "Congés payés"], intrus: "Congés payés", expl: "Les congés payés sont une conquête sociale du Front populaire (1936) ; les trois autres sont des mécanismes de la crise." },
      { items: ["Roosevelt", "Keynes", "Blum", "Hoover"], intrus: "Hoover", expl: "Hoover, fidèle au libéralisme, refuse une forte intervention de l'État ; Roosevelt, Keynes et Blum la défendent." },
      { items: ["Tennessee Valley Authority", "Social Security Act", "Wagner Act", "Loi Hawley-Smoot"], intrus: "Loi Hawley-Smoot", expl: "La loi Hawley-Smoot (1930), protectionniste, date de Hoover ; les trois autres sont des mesures du New Deal." },
      { items: ["Café", "Viande", "Cuivre", "Automobiles"], intrus: "Automobiles", expl: "L'Amérique latine exporte des produits primaires (café, viande, cuivre) ; elle importe les produits industriels comme les automobiles." }
    ],
    ppo: [
      {
        id: "amerique-latine", court: "PPO Amérique latine",
        titre: "Les conséquences de la crise de 1929 en Amérique latine",
        question: "Pourquoi la crise de 1929 frappe-t-elle si durement l'Amérique latine, et quelles transformations y provoque-t-elle ?",
        branches: [
          { titre: "Des économies tournées vers l'exportation", points: [
            "Les pays latino-américains exportent surtout des produits primaires : café (Brésil, Colombie), viande et blé (Argentine), cuivre et nitrates (Chili), étain (Bolivie).",
            "Ils dépendent des marchés et des capitaux des États-Unis et de l'Europe."
          ] },
          { titre: "Le choc de la crise", points: [
            "Les prix et les volumes exportés s'effondrent : le Chili est l'un des pays les plus touchés du monde.",
            "Au Brésil, l'État rachète et détruit des millions de sacs de café pour soutenir les cours.",
            "Le chômage et la misère gagnent les villes et les campagnes."
          ] },
          { titre: "Des régimes autoritaires", points: [
            "En 1930, des coups d'État renversent les gouvernements de l'Argentine (général Uriburu) et du Brésil (Getúlio Vargas).",
            "Vargas instaure en 1937 l'Estado Novo, un régime autoritaire et nationaliste."
          ] },
          { titre: "Une nouvelle politique économique", points: [
            "Les États interviennent : contrôle des changes, droits de douane.",
            "Ils développent l'industrie pour produire sur place ce qu'ils importaient : c'est l'industrialisation par substitution aux importations.",
            "Au Mexique, le président Lázaro Cárdenas nationalise le pétrole en 1938."
          ] }
        ],
        reperes: [
          { a: "1929-10-24", date: "octobre 1929", txt: "Krach de Wall Street : les achats et les prêts américains s'effondrent." },
          { a: "1930-09-06", date: "septembre 1930", txt: "Coup d'État du général Uriburu en Argentine." },
          { a: "1930-11-03", date: "novembre 1930", txt: "Getúlio Vargas prend le pouvoir au Brésil." },
          { a: "1937-11-10", date: "novembre 1937", txt: "Vargas instaure l'Estado Novo." },
          { a: "1938-03-18", date: "18 mars 1938", txt: "Le Mexique nationalise les compagnies pétrolières étrangères." }
        ],
        notions: [
          { mot: "Produits primaires", def: "Matières premières agricoles ou minières vendues sans transformation : café, viande, cuivre…" },
          { mot: "Industrialisation par substitution aux importations", def: "Politique qui développe l'industrie nationale pour produire sur place les biens jusque-là importés." },
          { mot: "Nationalisation", def: "Transfert de la propriété d'une entreprise privée à l'État." }
        ],
        personnages: [
          { nom: "Lázaro Cárdenas", dates: "1895-1970", txt: [
            "Président du Mexique de 1934 à 1940.",
            "Il mène une grande réforme agraire.",
            "En 1938, il nationalise les compagnies pétrolières étrangères."
          ] }
        ],
        pieges: [
          "Ne pas réduire la crise aux États-Unis et à l'Europe : l'Amérique latine, dépendante de ses exportations, est très touchée.",
          "La crise ne provoque pas seulement des coups d'État : elle pousse aussi les États à industrialiser leur pays."
        ],
        mots: ["produits primaires", "dépendance", "chute des cours", "coup d'État", "Vargas", "Estado Novo", "substitution aux importations", "nationalisation"],
        reponse: "La crise de 1929 frappe durement l'Amérique latine, car ses économies reposent sur l'exportation de produits primaires vers les États-Unis et l'Europe : café brésilien, viande argentine, cuivre chilien. Quand la demande et les prix s'effondrent, les recettes chutent, le chômage et la misère s'étendent ; le Brésil va jusqu'à détruire des stocks de café pour soutenir les cours. La crise a aussi des conséquences politiques : en 1930, des coups d'État renversent les gouvernements argentin et brésilien, et Getúlio Vargas installe au Brésil l'Estado Novo (1937). Enfin, elle transforme les politiques économiques : les États interviennent, se protègent et industrialisent leur pays pour moins dépendre des importations ; le Mexique nationalise son pétrole en 1938."
      },
      {
        id: "new-deal", court: "PPO New Deal",
        titre: "1933 : un nouveau président des États-Unis, F. D. Roosevelt, pour une nouvelle politique économique, le New Deal",
        question: "En quoi le New Deal de Roosevelt rompt-il avec le libéralisme économique ?",
        branches: [
          { titre: "Un pays en pleine dépression", points: [
            "En 1932, près d'un quart des actifs est au chômage ; des milliers de banques ont fait faillite depuis 1930.",
            "Le président Hoover, fidèle au libéralisme, refuse une intervention massive de l'État."
          ] },
          { titre: "Les « Cent Jours » de 1933", points: [
            "Investi le 4 mars 1933, Roosevelt ferme les banques quelques jours, puis les réorganise (Emergency Banking Act) ; il dévalue le dollar.",
            "Grands travaux et aides : Civilian Conservation Corps, Tennessee Valley Authority (barrages, électricité), aide aux agriculteurs (Agricultural Adjustment Act)."
          ] },
          { titre: "Le second New Deal (1935)", points: [
            "Social Security Act : retraites et assurance chômage.",
            "Wagner Act : droits syndicaux et négociation collective.",
            "La Works Progress Administration donne du travail à des millions de chômeurs."
          ] },
          { titre: "Un bilan contrasté", points: [
            "Le chômage recule mais reste élevé (encore 17 % en 1939) : la vraie reprise vient du réarmement.",
            "La Cour suprême annule certaines lois ; les conservateurs dénoncent une dérive « socialiste ».",
            "Mais l'État fédéral intervient désormais durablement dans l'économie et la protection sociale."
          ] }
        ],
        reperes: [
          { a: "1932-11-08", date: "novembre 1932", txt: "Roosevelt est élu président des États-Unis." },
          { a: "1933-03-04", date: "4 mars 1933", txt: "Investiture de Roosevelt et début des « Cent Jours »." },
          { a: "1933-05-18", date: "mai 1933", txt: "Création de la Tennessee Valley Authority." },
          { a: 1935, date: "1935", txt: "Second New Deal : Social Security Act et Wagner Act." },
          { a: "1936-11-03", date: "novembre 1936", txt: "Roosevelt est réélu triomphalement." }
        ],
        notions: [
          { mot: "Grands travaux", def: "Travaux publics financés par l'État pour donner du travail aux chômeurs et équiper le pays (routes, barrages, écoles)." },
          { mot: "Social Security", def: "Système fédéral de retraites et d'assurance chômage créé aux États-Unis en 1935." }
        ],
        pieges: [
          "Le New Deal ne met pas fin à la crise à lui seul : le chômage reste élevé jusqu'à l'entrée en guerre.",
          "Roosevelt n'est pas socialiste : il veut sauver le capitalisme en le régulant."
        ],
        mots: ["Roosevelt", "New Deal", "Cent Jours", "intervention de l'État", "grands travaux", "Social Security Act", "libéralisme", "Keynes"],
        reponse: "Élu en 1932 dans un pays où près d'un quart des actifs est au chômage, Franklin D. Roosevelt rompt avec le libéralisme de son prédécesseur Hoover. Dès les « Cent Jours » de 1933, l'État fédéral réorganise les banques, dévalue le dollar, soutient les agriculteurs et lance de grands travaux, comme la Tennessee Valley Authority. Le second New Deal (1935) crée une protection sociale fédérale (Social Security Act) et reconnaît les droits syndicaux (Wagner Act). Le bilan économique reste mitigé : le chômage recule sans disparaître, et la reprise vient surtout du réarmement. Mais le New Deal fait de l'État un acteur durable de l'économie et de la protection sociale, dans l'esprit de ce que théorise Keynes en 1936."
      },
      {
        id: "matignon", court: "PPO Accords Matignon",
        titre: "Juin 1936 : les accords Matignon",
        question: "Pourquoi les accords Matignon sont-ils une étape majeure de l'histoire sociale de la France ?",
        branches: [
          { titre: "Le Front populaire au pouvoir", points: [
            "La crise touche la France plus tard (à partir de 1931), mais durablement.",
            "Face aux ligues d'extrême droite (émeute du 6 février 1934), radicaux, socialistes et communistes s'unissent.",
            "Ils gagnent les élections du printemps 1936 ; Léon Blum forme le gouvernement le 4 juin."
          ] },
          { titre: "Les grèves de mai-juin 1936", points: [
            "Une immense vague de grèves avec occupation d'usines touche environ deux millions de salariés.",
            "Les ouvriers veulent obtenir tout de suite les réformes promises."
          ] },
          { titre: "Les accords du 7 juin 1936", points: [
            "Signés à l'hôtel Matignon par la CGT et le patronat, sous l'arbitrage de Léon Blum.",
            "Hausse des salaires de 7 à 15 %, conventions collectives, élection de délégués du personnel, liberté syndicale.",
            "Le Parlement vote ensuite deux semaines de congés payés et la semaine de 40 heures."
          ] },
          { titre: "Une portée durable", points: [
            "Les premiers congés payés font naître les loisirs populaires (billets de train à prix réduit, auberges de jeunesse).",
            "Mais l'inflation efface vite les hausses de salaires ; Blum annonce une « pause » en 1937 et démissionne en juin 1937."
          ] }
        ],
        reperes: [
          { a: "1934-02-06", date: "6 février 1934", txt: "Émeute des ligues d'extrême droite à Paris." },
          { a: "1936-05-03", date: "mai 1936", txt: "Victoire du Front populaire aux élections législatives." },
          { a: "1936-06-04", date: "4 juin 1936", txt: "Léon Blum forme le gouvernement." },
          { a: "1936-06-07", date: "7-8 juin 1936", txt: "Signature des accords Matignon." },
          { a: "1936-06-20", date: "juin 1936", txt: "Lois sur les congés payés et la semaine de 40 heures." },
          { a: "1937-06-22", date: "juin 1937", txt: "Démission du gouvernement Blum." }
        ],
        notions: [
          { mot: "Convention collective", def: "Accord négocié entre syndicats et patronat qui fixe les salaires et les conditions de travail d'une branche." },
          { mot: "Congés payés", def: "Jours de vacances pendant lesquels le salarié continue d'être payé : deux semaines par an en 1936." }
        ],
        personnages: [
          { nom: "Léon Jouhaux", dates: "1879-1954", txt: [
            "Secrétaire général de la CGT.",
            "Il signe les accords Matignon au nom des syndicats en 1936.",
            "Il reçoit le prix Nobel de la paix en 1951."
          ] }
        ],
        pieges: [
          "Ne pas confondre les accords Matignon (salaires, conventions collectives, délégués) et les lois sur les congés payés et les 40 heures, votées ensuite par le Parlement.",
          "Le Front populaire ne règle pas la crise : l'inflation et la fuite des capitaux affaiblissent ses réformes."
        ],
        mots: ["Front populaire", "Léon Blum", "grèves", "occupations d'usines", "accords Matignon", "conventions collectives", "congés payés", "40 heures"],
        reponse: "Au printemps 1936, le Front populaire, union des radicaux, des socialistes et des communistes, gagne les élections ; aussitôt, une vague de grèves avec occupations d'usines touche environ deux millions de salariés. Pour y mettre fin, Léon Blum réunit la CGT et le patronat à l'hôtel Matignon : les accords du 7 juin 1936 accordent des hausses de salaires de 7 à 15 %, des conventions collectives et des délégués du personnel. Le Parlement vote ensuite les congés payés et la semaine de 40 heures. C'est une étape majeure, car l'État arbitre désormais les relations sociales et les ouvriers accèdent aux loisirs. Mais l'inflation annule vite les hausses de salaires, et Blum doit annoncer une « pause » dès 1937."
      }
    ]
  },
  {
    id: "tle-h1-c2", n: "Tle", d: "histoire", carte: "europe-large",
    theme: "Thème 1 · Fragilités des démocraties, totalitarismes et Seconde Guerre mondiale (1929-1945)",
    num: "Chapitre 2",
    titre: "Les régimes totalitaires",
    question: "Quels sont les points communs et les différences entre les régimes totalitaires, et comment menacent-ils l'ordre européen ?",
    plan: [
      "Des idéologies qui veulent créer un homme nouveau (communisme, fascisme, nazisme)",
      "Encadrer, embrigader, faire adhérer",
      "Terroriser et exclure",
      "Des régimes qui déstabilisent l'Europe"
    ],
    cle: "Les régimes totalitaires — l'URSS de Staline, l'Italie de Mussolini, l'Allemagne d'Hitler — veulent contrôler toute la société au service d'une idéologie, par la propagande et la terreur, et menacent la paix en Europe.",
    essentiel: [
      "Un régime totalitaire veut contrôler tous les aspects de la vie, au service d'une idéologie : un parti unique, un chef tout-puissant, une propagande massive, la terreur et le rejet des libertés.",
      "En URSS, Staline impose la collectivisation des terres et l'industrialisation par des plans quinquennaux ; la Grande Terreur (1937-1938) et le Goulag frappent des millions de personnes.",
      "En Italie, Mussolini installe à partir de 1922 le premier régime fasciste ; en Allemagne, Hitler, chancelier en 1933, impose le nazisme : un État raciste et antisémite qui exclut et persécute les Juifs (lois de Nuremberg, 1935 ; nuit de Cristal, 1938).",
      "Ces régimes sont expansionnistes : invasion de l'Éthiopie par l'Italie (1935), remilitarisation de la Rhénanie et Anschluss (1936, 1938), intervention dans la guerre d'Espagne (1936-1939). Les démocraties cèdent (accords de Munich, 1938)."
    ],
    reperes: [
      { a: "1922-10-28", date: "octobre 1922", txt: "Marche sur Rome : Mussolini prend le pouvoir en Italie." },
      { a: 1929, date: "1929", txt: "Staline, seul maître de l'URSS, lance la collectivisation forcée des terres." },
      { a: "1933-01-30", date: "30 janvier 1933", txt: "Hitler devient chancelier ; le parti nazi devient parti unique en juillet 1933." },
      { a: "1935-09-15", date: "septembre 1935", txt: "Lois de Nuremberg : les Juifs allemands perdent la citoyenneté." },
      { a: "1935-10-03", date: "octobre 1935", txt: "L'Italie envahit l'Éthiopie." },
      { a: "1936-07-17", date: "juillet 1936", txt: "Début de la guerre civile en Espagne." },
      { a: "1937-04-26", date: "26 avril 1937", txt: "Bombardement de Guernica par la légion Condor allemande." },
      { a: "1937-08-01", b: "1938-11-17", date: "1937-1938", txt: "La Grande Terreur en URSS." },
      { a: "1938-03-12", date: "mars 1938", txt: "Anschluss : l'Allemagne annexe l'Autriche." },
      { a: "1938-09-30", date: "30 septembre 1938", txt: "Accords de Munich : la France et le Royaume-Uni cèdent les Sudètes à Hitler." },
      { a: "1938-11-09", date: "9-10 novembre 1938", txt: "La nuit de Cristal." },
      { a: "1939-08-23", date: "23 août 1939", txt: "Pacte germano-soviétique." }
    ],
    notions: [
      { mot: "Totalitarisme", def: "Régime qui veut contrôler tous les aspects de la vie des individus au service d'une idéologie : parti unique, chef tout-puissant, propagande, terreur." },
      { mot: "Fascisme", def: "Idéologie fondée par Mussolini en Italie : nationalisme, culte du chef, rejet de la démocratie et du communisme, exaltation de la violence et de la guerre." },
      { mot: "Nazisme", def: "Idéologie d'Hitler et du parti nazi (NSDAP) : nationalisme, racisme et antisémitisme, conquête d'un « espace vital » à l'est." },
      { mot: "Stalinisme", def: "Le régime de Staline en URSS : parti unique, économie planifiée et collectivisée, culte du chef, terreur de masse." },
      { mot: "Culte de la personnalité", def: "Glorification du chef présenté comme un guide infaillible (le Duce, le Führer, le « petit père des peuples »)." },
      { mot: "Propagande", def: "Ensemble des moyens utilisés pour diffuser une idéologie et embrigader la population (presse, radio, cinéma, affiches, défilés)." },
      { mot: "Collectivisation", def: "En URSS, suppression de la propriété privée des terres, regroupées en fermes collectives (kolkhozes) ou d'État (sovkhozes)." },
      { mot: "Goulag", def: "Administration soviétique des camps de travail forcé où sont envoyés des millions de détenus." },
      { mot: "Antisémitisme", def: "Hostilité envers les Juifs ; chez les nazis, il est racial et conduit à la persécution, puis à l'extermination." },
      { mot: "Espace vital", def: "Dans l'idéologie nazie, territoires à conquérir à l'est de l'Europe pour le « peuple allemand »." },
      { mot: "Politique d'apaisement", def: "Politique des démocraties qui cèdent aux exigences d'Hitler pour éviter la guerre (accords de Munich, 1938)." },
      { mot: "Homme nouveau", def: "Idéal des régimes totalitaires : un individu entièrement façonné par l'idéologie et dévoué à l'État." }
    ],
    personnages: [
      { nom: "Joseph Staline", dates: "1878-1953", txt: [
        "Secrétaire général du parti communiste à partir de 1922.",
        "Seul maître de l'URSS à la fin des années 1920, il lance la collectivisation et les plans quinquennaux.",
        "Il organise la Grande Terreur de 1937-1938."
      ] },
      { nom: "Benito Mussolini", dates: "1883-1945", txt: [
        "Ancien socialiste, il fonde les Faisceaux de combat en 1919.",
        "Il prend le pouvoir après la marche sur Rome (1922) et se fait appeler le Duce.",
        "Il envahit l'Éthiopie en 1935."
      ] },
      { nom: "Adolf Hitler", dates: "1889-1945", txt: [
        "Chef du parti nazi, il expose ses idées dans Mein Kampf.",
        "Il devient chancelier le 30 janvier 1933, puis Führer en 1934.",
        "Il veut conquérir un « espace vital » à l'est et persécute les Juifs."
      ] },
      { nom: "Francisco Franco", dates: "1892-1975", txt: [
        "Général espagnol, il prend la tête du soulèvement nationaliste de juillet 1936.",
        "Il reçoit l'aide de l'Allemagne nazie et de l'Italie fasciste.",
        "Vainqueur de la guerre civile en 1939, il gouverne l'Espagne en dictateur jusqu'à sa mort."
      ] },
      { nom: "Joseph Goebbels", dates: "1897-1945", txt: [
        "Dirigeant du parti nazi.",
        "Ministre de la Propagande à partir de 1933, il contrôle la presse, la radio et le cinéma.",
        "Il organise la nuit de Cristal en novembre 1938."
      ] }
    ],
    lieux: [
      { nom: "Moscou", lon: 37.62, lat: 55.75, txt: "Capitale de l'URSS ; les grands procès de la Terreur s'y tiennent de 1936 à 1938." },
      { nom: "Rome", lon: 12.5, lat: 41.9, txt: "Capitale de l'Italie fasciste ; Mussolini y prend le pouvoir après la marche sur Rome (1922)." },
      { nom: "Berlin", lon: 13.4, lat: 52.52, txt: "Capitale de l'Allemagne nazie." },
      { nom: "Nuremberg", lon: 11.08, lat: 49.45, txt: "Ville des grands congrès du parti nazi ; les lois antisémites de 1935 y sont proclamées." },
      { nom: "Dachau", lon: 11.47, lat: 48.27, txt: "Premier camp de concentration nazi, ouvert en mars 1933 près de Munich." },
      { nom: "Munich", lon: 11.58, lat: 48.14, txt: "Berceau du parti nazi ; les accords de 1938 y livrent les Sudètes à Hitler." },
      { nom: "Guernica", lon: -2.68, lat: 43.31, txt: "Ville basque bombardée le 26 avril 1937 par l'aviation allemande et italienne." },
      { nom: "Madrid", lon: -3.7, lat: 40.42, txt: "Capitale de la République espagnole, assiégée par les nationalistes de 1936 à 1939." }
    ],
    trous: [
      { titre: "Les régimes totalitaires", texte: "Un régime [totalitaire] veut contrôler toute la société au service d'une idéologie. Il repose sur un parti [unique], un chef tout-puissant entouré d'un culte de la [personnalité], une [propagande] massive et la terreur. En URSS, Staline impose la [collectivisation] des terres ; ses opposants sont envoyés au [Goulag]. En Allemagne, les nazis persécutent les Juifs : les lois de [Nuremberg] (1935) leur retirent la citoyenneté." }
    ],
    capable: [
      "Définir un régime totalitaire et en donner les caractéristiques.",
      "Comparer le stalinisme, le fascisme et le nazisme : points communs et différences.",
      "Expliquer comment ces régimes encadrent la société et utilisent la terreur.",
      "Montrer comment ils menacent la paix en Europe à la fin des années 1930."
    ],
    intrus: [
      { items: ["Parti unique", "Culte du chef", "Propagande", "Élections libres"], intrus: "Élections libres", expl: "Les élections libres sont propres aux démocraties ; les trois autres sont des traits des régimes totalitaires." },
      { items: ["Staline", "Mussolini", "Hitler", "Roosevelt"], intrus: "Roosevelt", expl: "Roosevelt est le président démocrate des États-Unis ; les trois autres dirigent des régimes totalitaires." },
      { items: ["Kolkhoze", "Plan quinquennal", "Goulag", "Lois de Nuremberg"], intrus: "Lois de Nuremberg", expl: "Les lois de Nuremberg (1935) sont des lois antisémites nazies ; les trois autres concernent l'URSS de Staline." },
      { items: ["Éthiopie", "Rhénanie", "Autriche", "Suisse"], intrus: "Suisse", expl: "L'Éthiopie (1935), la Rhénanie (1936) et l'Autriche (1938) sont des cibles de l'expansionnisme fasciste et nazi ; la Suisse reste neutre." }
    ],
    ppo: [
      {
        id: "grande-terreur", court: "PPO Grande Terreur",
        titre: "1937-1938 : la Grande Terreur en URSS",
        question: "Pourquoi et comment Staline organise-t-il la Grande Terreur de 1937-1938 ?",
        branches: [
          { titre: "Un régime déjà violent", points: [
            "La collectivisation forcée (à partir de 1929) s'accompagne de la « dékoulakisation » : des centaines de milliers de familles paysannes sont déportées.",
            "La famine de 1932-1933 fait des millions de morts, en particulier en Ukraine (l'Holodomor)."
          ] },
          { titre: "Une terreur de masse", points: [
            "Après l'assassinat de Kirov (décembre 1934), Staline traque de prétendus « ennemis du peuple ».",
            "En 1937-1938, la police politique (NKVD) arrête environ 1,5 million de personnes ; environ 750 000 sont exécutées, les autres envoyées au Goulag.",
            "Des quotas d'arrestations et d'exécutions sont fixés par région."
          ] },
          { titre: "Des victimes dans toute la société", points: [
            "Les procès de Moscou (1936-1938) éliminent les anciens compagnons de Lénine, qui « avouent » des crimes imaginaires.",
            "L'armée est décapitée : de nombreux officiers, dont le maréchal Toukhatchevski, sont exécutés.",
            "Paysans, ouvriers, minorités nationales et simples citoyens dénoncés sont frappés."
          ] },
          { titre: "Un instrument du pouvoir totalitaire", points: [
            "La terreur élimine toute opposition, réelle ou supposée, et soumet la société par la peur.",
            "Elle renforce le culte de Staline, présenté comme le guide infaillible du peuple."
          ] }
        ],
        reperes: [
          { a: "1934-12-01", date: "1er décembre 1934", txt: "Assassinat de Sergueï Kirov à Leningrad." },
          { a: "1936-08-19", date: "août 1936", txt: "Premier grand procès de Moscou." },
          { a: "1937-07-30", date: "30 juillet 1937", txt: "L'ordre 00447 du NKVD fixe des quotas d'arrestations et d'exécutions." },
          { a: "1937-06-11", date: "juin 1937", txt: "Condamnation et exécution du maréchal Toukhatchevski." },
          { a: "1938-11-17", date: "novembre 1938", txt: "Fin de la Grande Terreur." }
        ],
        notions: [
          { mot: "Ennemi du peuple", def: "Accusation portée par le régime stalinien contre toute personne suspectée, sans preuve, de s'opposer au pouvoir." },
          { mot: "NKVD", def: "La police politique soviétique, chargée des arrestations, des exécutions et des camps du Goulag." },
          { mot: "Procès de Moscou", def: "Procès truqués de 1936-1938 où d'anciens dirigeants bolcheviks avouent sous la contrainte des crimes imaginaires." }
        ],
        pieges: [
          "La Grande Terreur ne vise pas seulement les dirigeants : elle frappe surtout des citoyens ordinaires.",
          "Ne pas confondre la Grande Terreur (1937-1938) et la famine de 1932-1933, liée à la collectivisation."
        ],
        mots: ["Staline", "NKVD", "ennemis du peuple", "procès de Moscou", "quotas", "exécutions", "Goulag", "terreur de masse"],
        reponse: "En 1937-1938, Staline organise la Grande Terreur pour éliminer toute opposition, réelle ou supposée. Après l'assassinat de Kirov en 1934, le régime traque les « ennemis du peuple » : les procès de Moscou condamnent les anciens compagnons de Lénine, et l'armée est purgée de nombreux officiers. Mais la terreur frappe surtout la population : la police politique, le NKVD, applique des quotas fixés par région, arrête environ 1,5 million de personnes et en exécute environ la moitié ; les autres sont envoyées au Goulag. Cette violence de masse montre la nature totalitaire du régime stalinien : la peur soumet la société et renforce le culte d'un chef présenté comme infaillible."
      },
      {
        id: "nuit-cristal", court: "PPO Nuit de Cristal",
        titre: "9-10 novembre 1938 : la nuit de Cristal",
        question: "Que révèle la nuit de Cristal de la nature du régime nazi ?",
        branches: [
          { titre: "Une persécution qui s'aggrave", points: [
            "Dès 1933 : boycott des magasins juifs, exclusion des Juifs de la fonction publique.",
            "En 1935, les lois de Nuremberg leur retirent la citoyenneté et interdisent les mariages avec des « Aryens »."
          ] },
          { titre: "Un pogrom organisé", points: [
            "Prétexte : l'assassinat d'un diplomate allemand à Paris par un jeune Juif polonais, Herschel Grynszpan.",
            "Dans la nuit du 9 au 10 novembre, des SA et des membres du parti nazi, encouragés par Goebbels, incendient des synagogues et saccagent des magasins juifs dans toute l'Allemagne.",
            "Environ 90 Juifs sont tués et 30 000 hommes juifs envoyés dans des camps de concentration."
          ] },
          { titre: "Les victimes rendues coupables", points: [
            "Les Juifs doivent payer une amende collective d'un milliard de marks.",
            "Ils sont exclus de l'économie : leurs entreprises sont « aryanisées »."
          ] },
          { titre: "Un tournant", points: [
            "L'antisémitisme nazi passe de la discrimination légale à la violence ouverte.",
            "Beaucoup de Juifs cherchent à émigrer, mais les pays étrangers les accueillent peu."
          ] }
        ],
        reperes: [
          { a: "1933-04-01", date: "1er avril 1933", txt: "Boycott des magasins juifs." },
          { a: "1935-09-15", date: "15 septembre 1935", txt: "Lois de Nuremberg." },
          { a: "1938-11-07", date: "7 novembre 1938", txt: "Attentat de Herschel Grynszpan contre un diplomate allemand à Paris." },
          { a: "1938-11-09", date: "9-10 novembre 1938", txt: "La nuit de Cristal." },
          { a: "1938-11-12", date: "12 novembre 1938", txt: "Amende d'un milliard de marks imposée aux Juifs d'Allemagne." }
        ],
        notions: [
          { mot: "Pogrom", def: "Attaque violente et meurtrière contre une communauté juive, avec pillages et destructions." },
          { mot: "Aryanisation", def: "Spoliation des biens et des entreprises des Juifs, transférés à des non-Juifs." },
          { mot: "SA", def: "Sections d'assaut : milice du parti nazi, chargée de la violence de rue." }
        ],
        personnages: [
          { nom: "Herschel Grynszpan", dates: "né en 1921, mort à une date inconnue", txt: [
            "Jeune Juif polonais réfugié à Paris.",
            "Le 7 novembre 1938, il tire sur un diplomate allemand pour protester contre l'expulsion de sa famille d'Allemagne.",
            "Les nazis se servent de son geste comme prétexte à la nuit de Cristal."
          ] }
        ],
        pieges: [
          "La nuit de Cristal n'est pas spontanée : elle est organisée par les dirigeants nazis.",
          "Elle n'est pas encore le génocide : elle marque le passage de la discrimination légale à la violence de masse."
        ],
        mots: ["antisémitisme", "lois de Nuremberg", "pogrom", "Goebbels", "synagogues", "camps de concentration", "aryanisation", "émigration"],
        reponse: "La nuit de Cristal révèle un régime fondé sur un antisémitisme d'État. Depuis 1933, les Juifs allemands sont exclus de la société, et les lois de Nuremberg (1935) leur ont retiré la citoyenneté. Dans la nuit du 9 au 10 novembre 1938, prenant prétexte de l'assassinat d'un diplomate allemand à Paris, les SA et les militants nazis, encouragés par Goebbels, incendient les synagogues et saccagent les magasins juifs dans toute l'Allemagne. Environ 90 Juifs sont tués et 30 000 sont envoyés en camp de concentration ; les victimes doivent même payer une amende collective. Ce pogrom organisé marque le passage de la discrimination légale à la violence ouverte."
      },
      {
        id: "espagne", court: "PPO Guerre d'Espagne",
        titre: "1936-1938 : les interventions étrangères dans la guerre civile espagnole : géopolitique des totalitarismes",
        question: "Pourquoi la guerre civile espagnole devient-elle un affrontement international entre totalitarismes et démocraties ?",
        branches: [
          { titre: "Une guerre civile", points: [
            "En février 1936, le Frente Popular gagne les élections.",
            "En juillet 1936, des généraux nationalistes, dont Franco, se soulèvent contre la République."
          ] },
          { titre: "L'aide des régimes fascistes", points: [
            "L'Allemagne nazie envoie la légion Condor, qui bombarde Guernica le 26 avril 1937.",
            "L'Italie fasciste envoie des dizaines de milliers de soldats.",
            "Pour Hitler et Mussolini, l'Espagne est un terrain d'essai pour leurs armes et un moyen de gagner un allié."
          ] },
          { titre: "L'aide soviétique et les Brigades internationales", points: [
            "L'URSS livre des armes et des conseillers aux républicains, contre de l'or espagnol, et y étend l'influence des communistes.",
            "Environ 35 000 volontaires de nombreux pays s'engagent dans les Brigades internationales."
          ] },
          { titre: "Des démocraties qui ne s'engagent pas", points: [
            "La France de Léon Blum et le Royaume-Uni choisissent la non-intervention.",
            "La victoire de Franco en 1939 montre la faiblesse des démocraties face aux totalitarismes."
          ] }
        ],
        reperes: [
          { a: "1936-02-16", date: "février 1936", txt: "Victoire électorale du Frente Popular en Espagne." },
          { a: "1936-07-17", date: "17-18 juillet 1936", txt: "Soulèvement des généraux nationalistes." },
          { a: "1936-08-01", date: "août 1936", txt: "La France et le Royaume-Uni proposent la non-intervention." },
          { a: "1937-04-26", date: "26 avril 1937", txt: "Bombardement de Guernica." },
          { a: "1939-04-01", date: "1er avril 1939", txt: "Victoire de Franco." }
        ],
        notions: [
          { mot: "Non-intervention", def: "Politique de la France et du Royaume-Uni, qui refusent d'aider la République espagnole pour éviter une guerre européenne." },
          { mot: "Brigades internationales", def: "Unités de volontaires étrangers, souvent communistes, venus combattre pour la République espagnole." }
        ],
        lieux: [
          { nom: "Guernica", lon: -2.68, lat: 43.31, txt: "Ville basque bombardée par la légion Condor en 1937 ; Picasso en fait un tableau célèbre." }
        ],
        pieges: [
          "Ne pas oublier l'URSS : elle aussi intervient, du côté des républicains.",
          "La non-intervention des démocraties ne les empêche pas d'être menacées : elle encourage les dictatures."
        ],
        mots: ["Franco", "Frente Popular", "légion Condor", "Guernica", "Italie fasciste", "URSS", "Brigades internationales", "non-intervention"],
        reponse: "En juillet 1936, des généraux nationalistes menés par Franco se soulèvent contre la République espagnole, gouvernée par le Frente Popular. La guerre civile devient vite internationale. L'Allemagne nazie et l'Italie fasciste aident Franco : la légion Condor bombarde Guernica en 1937, et Mussolini envoie des dizaines de milliers de soldats ; c'est pour eux un terrain d'essai militaire. L'URSS soutient les républicains par des armes et des conseillers, et des volontaires du monde entier forment les Brigades internationales. Les démocraties, elles, choisissent la non-intervention. La victoire de Franco en 1939 montre l'alliance des régimes fascistes, l'ambition de l'URSS et la faiblesse des démocraties."
      }
    ]
  },
  {
    id: "tle-h1-c3", n: "Tle", d: "histoire", carte: ["europe-large", "monde"],
    theme: "Thème 1 · Fragilités des démocraties, totalitarismes et Seconde Guerre mondiale (1929-1945)",
    num: "Chapitre 3",
    titre: "La Seconde Guerre mondiale",
    question: "Pourquoi la Seconde Guerre mondiale est-elle une guerre d'anéantissement, et quelles en sont les conséquences pour la France ?",
    plan: [
      "Un conflit mondial : protagonistes, phases et théâtres d'opérations",
      "Crimes de guerre, violences de masse, Shoah et génocide des Tsiganes",
      "La France dans la guerre : occupation, collaboration, régime de Vichy, Résistance"
    ],
    cle: "La Seconde Guerre mondiale est une guerre totale et d'anéantissement : elle fait plus de 60 millions de morts, en majorité civils, dont 6 millions de Juifs assassinés dans la Shoah.",
    essentiel: [
      "L'Allemagne envahit la Pologne le 1er septembre 1939. Après la défaite de la France (juin 1940), elle domine l'Europe ; en juin 1941, elle attaque l'URSS. Le Japon attaque Pearl Harbor (7 décembre 1941) : la guerre devient mondiale.",
      "À partir de 1942-1943, les Alliés reprennent l'initiative : El-Alamein, Stalingrad (février 1943), débarquements en Italie puis en Normandie (6 juin 1944). L'Allemagne capitule le 8 mai 1945, le Japon le 2 septembre 1945, après les bombardements atomiques d'Hiroshima et de Nagasaki.",
      "C'est une guerre d'anéantissement : massacres de civils, bombardements, famine. Les nazis assassinent environ 6 millions de Juifs (Shoah) par les fusillades des Einsatzgruppen et dans les centres de mise à mort comme Auschwitz-Birkenau, ainsi que des centaines de milliers de Tsiganes.",
      "En France, l'armistice du 22 juin 1940 coupe le pays en deux. Le régime de Vichy du maréchal Pétain met fin à la République et collabore avec l'Allemagne, jusqu'à participer à la déportation des Juifs. De Gaulle, depuis Londres, et la Résistance intérieure continuent le combat jusqu'à la Libération (1944)."
    ],
    reperes: [
      { a: "1939-09-01", date: "1er septembre 1939", txt: "L'Allemagne envahit la Pologne ; le 3, la France et le Royaume-Uni lui déclarent la guerre." },
      { a: "1940-06-18", date: "18 juin 1940", txt: "Appel du général de Gaulle à la BBC." },
      { a: "1940-06-22", date: "22 juin 1940", txt: "Armistice franco-allemand à Rethondes." },
      { a: "1940-07-10", date: "10 juillet 1940", txt: "Les parlementaires votent les pleins pouvoirs à Pétain : fin de la IIIᵉ République." },
      { a: "1941-06-22", date: "22 juin 1941", txt: "Opération Barbarossa : l'Allemagne attaque l'URSS." },
      { a: "1941-12-07", date: "7 décembre 1941", txt: "Attaque japonaise contre Pearl Harbor ; les États-Unis entrent en guerre." },
      { a: "1942-01-20", date: "20 janvier 1942", txt: "Conférence de Wannsee : organisation de la « solution finale »." },
      { a: "1942-07-16", date: "16-17 juillet 1942", txt: "Rafle du Vél' d'Hiv à Paris." },
      { a: "1943-02-02", date: "2 février 1943", txt: "Capitulation allemande à Stalingrad." },
      { a: "1944-06-06", date: "6 juin 1944", txt: "Débarquement allié en Normandie." },
      { a: "1944-08-25", date: "25 août 1944", txt: "Libération de Paris." },
      { a: "1945-05-08", date: "8 mai 1945", txt: "Capitulation de l'Allemagne." },
      { a: "1945-08-06", date: "6 et 9 août 1945", txt: "Bombardements atomiques d'Hiroshima et de Nagasaki." },
      { a: "1945-09-02", date: "2 septembre 1945", txt: "Capitulation du Japon." }
    ],
    periodes: [
      { de: "1939-09-01", a: "1941-12-07", nom: "Les victoires de l'Axe", court: "L'Axe gagne", detail: "Guerre éclair en Pologne, en France ; l'Allemagne domine l'Europe et attaque l'URSS." },
      { de: "1941-12-07", a: "1943-02-02", nom: "La guerre devient mondiale", court: "Guerre mondiale", detail: "Entrée en guerre des États-Unis ; tournants de Midway, d'El-Alamein et de Stalingrad." },
      { de: "1943-02-02", a: "1945-09-02", nom: "Les victoires des Alliés", court: "Les Alliés gagnent", detail: "Reconquête à l'est, débarquements, capitulations de l'Allemagne et du Japon." }
    ],
    notions: [
      { mot: "Guerre totale", def: "Guerre qui mobilise toutes les ressources humaines, économiques et morales des pays en conflit, et qui touche les civils autant que les soldats." },
      { mot: "Guerre d'anéantissement", def: "Guerre qui vise à détruire l'ennemi, y compris sa population civile, au-delà de sa seule défaite militaire (front de l'Est)." },
      { mot: "Shoah", def: "Mot hébreu signifiant « catastrophe » : le génocide des Juifs d'Europe par les nazis, environ 6 millions de victimes." },
      { mot: "Génocide", def: "Crime qui vise à détruire tout ou partie d'un groupe national, ethnique, racial ou religieux en tant que tel." },
      { mot: "Centre de mise à mort", def: "Camp créé par les nazis pour assassiner les déportés dès leur arrivée, dans des chambres à gaz (Auschwitz-Birkenau, Treblinka, Sobibor…)." },
      { mot: "Einsatzgruppen", def: "Unités mobiles de tuerie nazies qui fusillent plus d'un million de Juifs à l'est, après l'invasion de l'URSS." },
      { mot: "Collaboration", def: "Politique de coopération avec l'occupant allemand, choisie par le régime de Vichy." },
      { mot: "Régime de Vichy", def: "Régime autoritaire du maréchal Pétain (1940-1944) : il remplace la République par l'« État français » et collabore avec l'Allemagne." },
      { mot: "Résistance", def: "Action de ceux qui refusent la défaite et l'occupation, en France (réseaux, mouvements, maquis) ou depuis Londres (France libre)." },
      { mot: "France libre", def: "Organisation fondée à Londres par le général de Gaulle en 1940 pour continuer la guerre aux côtés des Alliés." },
      { mot: "Crime contre l'humanité", def: "Crime commis contre des civils dans le cadre d'une attaque généralisée (assassinats, déportations, persécutions), défini au procès de Nuremberg en 1945." },
      { mot: "Dissuasion nucléaire", def: "Stratégie qui consiste à empêcher une attaque par la menace de représailles nucléaires ; elle naît après Hiroshima." }
    ],
    personnages: [
      { nom: "Winston Churchill", dates: "1874-1965", txt: [
        "Premier ministre du Royaume-Uni à partir de mai 1940.",
        "Il refuse de négocier avec Hitler : « Je n'ai à offrir que du sang, du labeur, des larmes et de la sueur. »",
        "Il incarne la résistance britannique pendant le Blitz."
      ] },
      { nom: "Charles de Gaulle", dates: "1890-1970", txt: [
        "Général de brigade et sous-secrétaire d'État à la Guerre en juin 1940.",
        "Le 18 juin 1940, il lance un appel à la BBC depuis Londres.",
        "Chef de la France libre, il dirige le Gouvernement provisoire à la Libération."
      ] },
      { nom: "Philippe Pétain", dates: "1856-1951", txt: [
        "Héros de Verdun en 1916.",
        "Chef du gouvernement en juin 1940, il demande l'armistice.",
        "Chef de l'« État français », il engage la collaboration avec l'Allemagne."
      ] },
      { nom: "Jean Moulin", dates: "1899-1943", txt: [
        "Préfet révoqué par Vichy, il rejoint de Gaulle à Londres.",
        "Il unifie les mouvements de la Résistance intérieure et fonde le Conseil national de la Résistance en mai 1943.",
        "Arrêté en juin 1943, il meurt sous la torture."
      ] },
      { nom: "Harry Truman", dates: "1884-1972", txt: [
        "Vice-président des États-Unis, il succède à Roosevelt en avril 1945.",
        "Il décide d'utiliser la bombe atomique contre le Japon en août 1945.",
        "Il engage ensuite son pays dans la guerre froide."
      ] }
    ],
    lieux: [
      { nom: "Stalingrad", lon: 44.51, lat: 48.71, txt: "Ville sur la Volga où l'armée allemande capitule le 2 février 1943 : le tournant de la guerre à l'est." },
      { nom: "Leningrad", lon: 30.32, lat: 59.94, txt: "Ville assiégée par les Allemands pendant près de 900 jours (1941-1944) ; environ un million d'habitants meurent." },
      { nom: "Moscou", lon: 37.62, lat: 55.75, txt: "Capitale de l'URSS ; l'offensive allemande y est arrêtée en décembre 1941." },
      { nom: "Auschwitz-Birkenau", lon: 19.18, lat: 50.03, txt: "Le plus grand centre de mise à mort nazi, en Pologne : environ 1,1 million de victimes, dont un million de Juifs." },
      { nom: "Plages de Normandie", lon: -0.87, lat: 49.37, txt: "Lieu du débarquement allié du 6 juin 1944 (opération Overlord)." },
      { nom: "Vichy", lon: 3.43, lat: 46.13, txt: "Ville d'eaux de l'Allier, siège du gouvernement de l'« État français » de 1940 à 1944." },
      { nom: "Londres", lon: -0.13, lat: 51.51, txt: "Capitale britannique bombardée pendant le Blitz ; siège de la France libre." },
      { nom: "Pearl Harbor", lon: -157.95, lat: 21.36, txt: "Base américaine d'Hawaï attaquée par le Japon le 7 décembre 1941." },
      { nom: "Hiroshima", lon: 132.46, lat: 34.39, txt: "Ville japonaise détruite par la première bombe atomique le 6 août 1945 ; Nagasaki est frappée le 9 août." },
      { nom: "Okinawa", lon: 127.8, lat: 26.3, txt: "Île japonaise conquise par les Américains d'avril à juin 1945, au prix de très lourdes pertes." },
      { nom: "Guadalcanal", lon: 160, lat: -9.6, txt: "Île des Salomon : la longue bataille de 1942-1943 marque le début de la reconquête américaine dans le Pacifique." }
    ],
    graphiques: [
      { id: "morts-guerre", type: "barres-h", titre: "Les morts de la Seconde Guerre mondiale (estimations, en millions)", unite: "millions",
        source: "Estimations courantes des historiens, militaires et civils réunis (arrondies)",
        x: ["URSS", "Chine", "Allemagne", "Pologne", "Japon", "Yougoslavie", "France", "Royaume-Uni", "États-Unis"], valeurs: [26, 15, 7, 6, 3, 1, 0.6, 0.45, 0.42],
        quoi: "le nombre de morts", ou: "le pays",
        questions: [
          { q: "Que montre ce graphique sur la nature de la guerre ?", r: "C'est une guerre d'anéantissement qui frappe surtout l'Europe de l'Est et l'Asie", faux: ["Les pays occidentaux ont eu le plus de morts", "Les morts sont presque tous des soldats", "Les pertes sont les mêmes partout"], expl: "L'URSS, la Chine et la Pologne, où l'occupation fut la plus violente, comptent le plus de victimes, en majorité civiles." }
        ] }
    ],
    trous: [
      { titre: "La Seconde Guerre mondiale", texte: "Le 1er septembre 1939, l'Allemagne envahit la [Pologne]. En juin 1941, elle attaque l'URSS : à l'est, c'est une guerre d'[anéantissement]. Le 7 décembre 1941, l'attaque japonaise contre [Pearl Harbor] fait entrer les États-Unis dans la guerre. Le tournant a lieu à [Stalingrad] en février 1943. Les nazis assassinent environ 6 millions de Juifs : c'est la [Shoah]. En France, le régime de [Vichy] collabore avec l'occupant, tandis que de Gaulle dirige la France [libre] depuis Londres." }
    ],
    capable: [
      "Raconter les grandes phases de la guerre et situer ses théâtres d'opérations.",
      "Expliquer pourquoi c'est une guerre d'anéantissement et décrire le processus de la Shoah.",
      "Définir collaboration, régime de Vichy et Résistance.",
      "Situer Stalingrad, la Normandie, Auschwitz-Birkenau, Pearl Harbor, Hiroshima."
    ],
    intrus: [
      { items: ["Stalingrad", "El-Alamein", "Midway", "Sedan"], intrus: "Sedan", expl: "Sedan (mai 1940) est une victoire allemande ; Stalingrad, El-Alamein et Midway sont des tournants en faveur des Alliés." },
      { items: ["Auschwitz-Birkenau", "Treblinka", "Sobibor", "Dachau"], intrus: "Dachau", expl: "Dachau est un camp de concentration ; Auschwitz-Birkenau, Treblinka et Sobibor sont des centres de mise à mort." },
      { items: ["Jean Moulin", "Charles de Gaulle", "Lucie Aubrac", "Pierre Laval"], intrus: "Pierre Laval", expl: "Pierre Laval, chef du gouvernement de Vichy, incarne la collaboration ; les trois autres sont des résistants." },
      { items: ["Révolution nationale", "Statut des Juifs", "Milice", "Conseil national de la Résistance"], intrus: "Conseil national de la Résistance", expl: "Le CNR unifie la Résistance (1943) ; les trois autres appartiennent au régime de Vichy." }
    ],
    ppo: [
      {
        id: "juin-1940", court: "PPO Juin 1940",
        titre: "Juin 1940 en France : continuer ou arrêter la guerre",
        question: "Pourquoi, en juin 1940, les dirigeants français se divisent-ils entre l'armistice et la poursuite de la guerre ?",
        branches: [
          { titre: "Une défaite foudroyante", points: [
            "Le 10 mai 1940, l'Allemagne attaque ; elle perce le front à Sedan et encercle les armées alliées à Dunkerque.",
            "Des millions de Français fuient sur les routes : c'est l'exode.",
            "Le gouvernement quitte Paris pour Tours puis Bordeaux ; les Allemands entrent dans Paris le 14 juin."
          ] },
          { titre: "Continuer la guerre", points: [
            "Le président du Conseil Paul Reynaud, de Gaulle et d'autres veulent continuer depuis l'Empire colonial, avec la flotte et le Royaume-Uni.",
            "Le 18 juin, depuis Londres, de Gaulle appelle à poursuivre le combat : « la flamme de la résistance française ne doit pas s'éteindre »."
          ] },
          { titre: "Arrêter la guerre", points: [
            "Pétain et le général Weygand jugent la guerre perdue et veulent un armistice pour garder une armée et un gouvernement en France.",
            "Le 16 juin, Reynaud démissionne ; Pétain devient chef du gouvernement et demande l'armistice le 17 juin."
          ] },
          { titre: "Les conséquences", points: [
            "L'armistice du 22 juin 1940 coupe la France en une zone occupée et une zone dite « libre » ; l'Alsace-Moselle est annexée de fait.",
            "Le 10 juillet 1940, les parlementaires votent les pleins pouvoirs à Pétain : la IIIᵉ République disparaît."
          ] }
        ],
        reperes: [
          { a: "1940-05-10", date: "10 mai 1940", txt: "Offensive allemande à l'ouest." },
          { a: "1940-06-14", date: "14 juin 1940", txt: "Les Allemands entrent dans Paris." },
          { a: "1940-06-17", date: "17 juin 1940", txt: "Pétain annonce qu'il faut « cesser le combat »." },
          { a: "1940-06-18", date: "18 juin 1940", txt: "Appel du général de Gaulle à la BBC." },
          { a: "1940-06-22", date: "22 juin 1940", txt: "Signature de l'armistice à Rethondes." },
          { a: "1940-07-10", date: "10 juillet 1940", txt: "Vote des pleins pouvoirs à Pétain." }
        ],
        notions: [
          { mot: "Armistice", def: "Accord qui met fin aux combats entre des armées, sans être un traité de paix." },
          { mot: "Exode", def: "Fuite de millions de Français sur les routes devant l'avancée allemande en mai-juin 1940." }
        ],
        personnages: [
          { nom: "Paul Reynaud", dates: "1878-1966", txt: [
            "Président du Conseil de mars à juin 1940.",
            "Il veut continuer la guerre depuis l'Empire colonial.",
            "Minoritaire dans son gouvernement, il démissionne le 16 juin 1940."
          ] }
        ],
        pieges: [
          "L'armistice n'est pas une paix : la France reste en guerre avec l'Allemagne, qui occupe une partie du pays.",
          "L'appel du 18 juin est peu entendu sur le moment : la France libre se construit lentement."
        ],
        mots: ["débâcle", "exode", "Reynaud", "Pétain", "armistice", "de Gaulle", "appel du 18 juin", "pleins pouvoirs"],
        reponse: "En juin 1940, la défaite est foudroyante : l'armée allemande perce à Sedan, encercle les Alliés à Dunkerque et entre dans Paris le 14 juin, tandis que des millions de Français fuient sur les routes. Les dirigeants se divisent. Paul Reynaud et le général de Gaulle veulent continuer la guerre depuis l'Empire colonial, avec la flotte et le Royaume-Uni. Pétain et Weygand, au contraire, jugent la guerre perdue et réclament un armistice. Reynaud démissionne le 16 juin ; Pétain demande l'armistice, signé le 22 juin, qui coupe la France en deux. Le 18 juin, depuis Londres, de Gaulle appelle à poursuivre le combat : deux choix opposés naissent, celui de Vichy et celui de la France libre."
      },
      {
        id: "de-gaulle", court: "PPO De Gaulle",
        titre: "De Gaulle et la France libre",
        question: "Comment le général de Gaulle parvient-il à faire de la France libre un acteur de la victoire ?",
        branches: [
          { titre: "Un homme seul à Londres", points: [
            "Le 18 juin 1940, il lance son appel sur la BBC, avec le soutien de Churchill.",
            "Condamné à mort par contumace par Vichy, il ne rassemble d'abord que quelques milliers de volontaires."
          ] },
          { titre: "Une armée et des territoires", points: [
            "Des territoires de l'Empire se rallient : l'Afrique-Équatoriale française dès l'été 1940.",
            "Les Forces françaises libres combattent : Bir Hakeim en 1942, puis la 2ᵉ division blindée de Leclerc."
          ] },
          { titre: "Unifier la Résistance", points: [
            "De Gaulle envoie Jean Moulin unifier les mouvements de la Résistance intérieure.",
            "En mai 1943, le Conseil national de la Résistance reconnaît de Gaulle comme chef."
          ] },
          { titre: "Un gouvernement reconnu", points: [
            "Installé à Alger, le Comité français de libération nationale devient le Gouvernement provisoire de la République française en juin 1944.",
            "Le 25 août 1944, Paris est libéré ; de Gaulle y descend les Champs-Élysées le 26 août.",
            "Il évite que la France soit administrée par les Alliés et obtient pour elle une place parmi les vainqueurs."
          ] }
        ],
        reperes: [
          { a: "1940-06-18", date: "18 juin 1940", txt: "Appel du 18 juin." },
          { a: "1942-06-11", date: "mai-juin 1942", txt: "Les Français libres de Koenig résistent à Bir Hakeim." },
          { a: "1943-05-27", date: "27 mai 1943", txt: "Première réunion du Conseil national de la Résistance." },
          { a: "1944-06-03", date: "3 juin 1944", txt: "Création du Gouvernement provisoire de la République française." },
          { a: "1944-08-25", date: "25 août 1944", txt: "Libération de Paris." }
        ],
        notions: [
          { mot: "Forces françaises libres", def: "L'armée de la France libre, formée à partir de 1940 autour du général de Gaulle." },
          { mot: "GPRF", def: "Gouvernement provisoire de la République française (1944-1946), présidé par de Gaulle jusqu'en janvier 1946." }
        ],
        personnages: [
          { nom: "Philippe Leclerc de Hauteclocque", dates: "1902-1947", txt: [
            "Officier rallié à la France libre dès 1940.",
            "Il prête serment à Koufra (1941) de ne déposer les armes qu'une fois Strasbourg libéré.",
            "Sa 2ᵉ division blindée libère Paris en août 1944, puis Strasbourg en novembre."
          ] }
        ],
        pieges: [
          "La France libre (à l'extérieur) et la Résistance intérieure sont d'abord distinctes : Jean Moulin les rapproche.",
          "De Gaulle n'est pas reconnu tout de suite par les Alliés : Roosevelt se méfie de lui."
        ],
        mots: ["appel du 18 juin", "Londres", "France libre", "Forces françaises libres", "Jean Moulin", "CNR", "GPRF", "Libération"],
        reponse: "Le 18 juin 1940, depuis Londres, le général de Gaulle refuse l'armistice et appelle à continuer le combat. D'abord presque seul, il construit peu à peu la France libre : des territoires de l'Empire se rallient, comme l'Afrique-Équatoriale française, et les Forces françaises libres combattent aux côtés des Alliés, à Bir Hakeim en 1942. De Gaulle charge Jean Moulin d'unifier la Résistance intérieure : en 1943, le Conseil national de la Résistance le reconnaît comme chef. En juin 1944, il forme le Gouvernement provisoire de la République française ; après la libération de Paris, il rétablit la République et évite que la France soit administrée par les Alliés, ce qui lui vaut une place parmi les vainqueurs."
      },
      {
        id: "front-est", court: "PPO Front de l'Est",
        titre: "Le front de l'Est et la guerre d'anéantissement",
        question: "Pourquoi la guerre à l'est est-elle une guerre d'anéantissement ?",
        branches: [
          { titre: "Une guerre idéologique", points: [
            "Le 22 juin 1941, l'opération Barbarossa lance trois millions de soldats allemands contre l'URSS.",
            "Pour Hitler, il s'agit de conquérir un « espace vital » et de détruire le « judéo-bolchevisme » : les Slaves sont considérés comme des « sous-hommes »."
          ] },
          { titre: "Des violences contre les civils", points: [
            "Les Einsatzgruppen fusillent les Juifs, comme à Babi Yar près de Kiev (plus de 33 000 victimes en deux jours, septembre 1941).",
            "Environ trois millions de prisonniers de guerre soviétiques meurent de faim et de mauvais traitements.",
            "Le siège de Leningrad fait environ un million de morts parmi les habitants."
          ] },
          { titre: "Des combats d'une violence extrême", points: [
            "L'offensive allemande est arrêtée devant Moscou en décembre 1941.",
            "La bataille de Stalingrad (été 1942 - février 1943) est le tournant de la guerre ; puis l'Armée rouge reconquiert le terrain jusqu'à Berlin (mai 1945)."
          ] },
          { titre: "Un bilan terrible", points: [
            "L'URSS perd environ 26 millions de personnes, militaires et civils.",
            "Le front de l'Est concentre l'essentiel des forces allemandes et de leurs pertes."
          ] }
        ],
        reperes: [
          { a: "1941-06-22", date: "22 juin 1941", txt: "Lancement de l'opération Barbarossa." },
          { a: "1941-09-29", date: "29-30 septembre 1941", txt: "Massacre de Babi Yar près de Kiev." },
          { a: "1941-12-05", date: "décembre 1941", txt: "Contre-offensive soviétique devant Moscou." },
          { a: "1943-02-02", date: "2 février 1943", txt: "Capitulation de la 6ᵉ armée allemande à Stalingrad." },
          { a: "1944-01-27", date: "27 janvier 1944", txt: "Fin du siège de Leningrad." },
          { a: "1945-05-02", date: "2 mai 1945", txt: "Prise de Berlin par l'Armée rouge." }
        ],
        notions: [
          { mot: "Opération Barbarossa", def: "Nom de code de l'invasion de l'URSS par l'Allemagne, le 22 juin 1941." },
          { mot: "Shoah par balles", def: "Assassinat par fusillade de plus d'un million de Juifs à l'est par les Einsatzgruppen et leurs auxiliaires." }
        ],
        lieux: [
          { nom: "Babi Yar", lon: 30.45, lat: 50.47, txt: "Ravin près de Kiev où plus de 33 000 Juifs sont fusillés en deux jours, en septembre 1941." }
        ],
        pieges: [
          "Le front de l'Est n'est pas un front secondaire : c'est là que la Wehrmacht subit l'essentiel de ses pertes.",
          "La violence n'y vise pas seulement les soldats : civils, Juifs et prisonniers sont victimes de massacres de masse."
        ],
        mots: ["Barbarossa", "espace vital", "sous-hommes", "Einsatzgruppen", "Babi Yar", "Leningrad", "Stalingrad", "guerre d'anéantissement"],
        reponse: "Le 22 juin 1941, l'Allemagne attaque l'URSS : l'opération Barbarossa ouvre une guerre d'anéantissement, car elle est d'abord idéologique. Hitler veut conquérir un « espace vital », détruire le « judéo-bolchevisme » et asservir des Slaves qu'il considère comme des « sous-hommes ». Les civils sont donc visés : les Einsatzgruppen fusillent plus d'un million de Juifs, comme à Babi Yar en 1941 ; trois millions de prisonniers soviétiques meurent de faim ; le siège de Leningrad fait environ un million de morts. Les combats sont d'une violence extrême, de Moscou à Stalingrad, tournant de la guerre en février 1943. Avec environ 26 millions de morts, l'URSS paie le plus lourd tribut du conflit."
      },
      {
        id: "juin-1944", court: "PPO Juin 1944",
        titre: "Juin 1944 : le débarquement en Normandie et l'opération Bagration",
        question: "Pourquoi juin 1944 marque-t-il une étape décisive vers la défaite de l'Allemagne ?",
        branches: [
          { titre: "Le débarquement en Normandie (6 juin 1944)", points: [
            "Préparée depuis des mois, l'opération Overlord est commandée par le général américain Eisenhower.",
            "Le 6 juin, environ 150 000 soldats alliés débarquent sur cinq plages (Utah, Omaha, Gold, Juno, Sword).",
            "Après de durs combats, les Alliés percent en août et libèrent Paris le 25 août."
          ] },
          { titre: "L'opération Bagration (22 juin 1944)", points: [
            "À l'est, l'Armée rouge lance une immense offensive en Biélorussie, trois ans jour pour jour après Barbarossa.",
            "Le groupe d'armées Centre allemand est détruit ; les Soviétiques avancent de plusieurs centaines de kilomètres jusqu'à la Vistule."
          ] },
          { titre: "Une stratégie concertée", points: [
            "Staline réclamait depuis longtemps l'ouverture d'un « second front » à l'ouest.",
            "Pris en tenaille, l'Allemagne doit se battre sur deux fronts à la fois."
          ] },
          { titre: "Vers la capitulation", points: [
            "L'Allemagne recule partout, mais résiste encore près d'un an.",
            "Elle capitule le 8 mai 1945, après la prise de Berlin par les Soviétiques."
          ] }
        ],
        reperes: [
          { a: "1943-11-28", date: "novembre 1943", txt: "Conférence de Téhéran : les Alliés décident d'un débarquement en France." },
          { a: "1944-06-06", date: "6 juin 1944", txt: "Débarquement en Normandie." },
          { a: "1944-06-22", date: "22 juin 1944", txt: "Lancement de l'opération Bagration." },
          { a: "1944-08-15", date: "15 août 1944", txt: "Débarquement en Provence." },
          { a: "1944-08-25", date: "25 août 1944", txt: "Libération de Paris." },
          { a: "1945-05-08", date: "8 mai 1945", txt: "Capitulation de l'Allemagne." }
        ],
        notions: [
          { mot: "Opération Overlord", def: "Nom de code du débarquement et de la bataille de Normandie (juin-août 1944)." },
          { mot: "Second front", def: "Front ouvert à l'ouest par les Anglo-Américains pour soulager l'URSS, qui se bat seule sur le continent depuis 1941." }
        ],
        personnages: [
          { nom: "Dwight Eisenhower", dates: "1890-1969", txt: [
            "Général américain, commandant suprême des forces alliées en Europe.",
            "Il dirige le débarquement en Normandie le 6 juin 1944.",
            "Il devient président des États-Unis en 1953."
          ] }
        ],
        pieges: [
          "Ne pas oublier l'opération Bagration : l'Allemagne est vaincue autant à l'est qu'à l'ouest.",
          "Le débarquement ne libère pas la France en un jour : la bataille de Normandie dure jusqu'en août."
        ],
        mots: ["Overlord", "6 juin 1944", "Eisenhower", "plages", "second front", "Bagration", "Armée rouge", "deux fronts"],
        reponse: "En juin 1944, l'Allemagne est prise en tenaille. À l'ouest, le 6 juin, les Alliés commandés par Eisenhower débarquent en Normandie : c'est l'opération Overlord, le « second front » que Staline réclamait depuis 1941. Après de durs combats, ils percent en août et libèrent Paris le 25. À l'est, le 22 juin, l'Armée rouge lance l'opération Bagration en Biélorussie : le groupe d'armées Centre allemand est détruit et les Soviétiques avancent jusqu'à la Vistule. Désormais contrainte de se battre sur deux fronts, l'Allemagne recule partout ; elle résiste encore près d'un an, mais capitule le 8 mai 1945, après la prise de Berlin."
      },
      {
        id: "hiroshima", court: "PPO Hiroshima",
        titre: "6 et 9 août 1945 : les bombardements nucléaires d'Hiroshima et de Nagasaki",
        question: "Pourquoi les États-Unis utilisent-ils la bombe atomique, et en quoi est-ce un tournant ?",
        branches: [
          { titre: "La guerre du Pacifique", points: [
            "Après Pearl Harbor (1941), les Américains reconquièrent le Pacifique île par île : Midway (1942), Guadalcanal, Iwo Jima, Okinawa (1945).",
            "Les combats sont très meurtriers ; les kamikazes japonais montrent la détermination de l'armée japonaise."
          ] },
          { titre: "La décision de Truman", points: [
            "Le projet Manhattan met au point la bombe atomique, testée le 16 juillet 1945.",
            "Truman veut obtenir une capitulation rapide et éviter un débarquement au Japon, que l'on prévoit très coûteux en vies américaines.",
            "La bombe est aussi une démonstration de force face à l'URSS."
          ] },
          { titre: "Deux villes anéanties", points: [
            "Le 6 août 1945, la bombe « Little Boy » détruit Hiroshima ; le 9 août, « Fat Man » frappe Nagasaki.",
            "Il y a plus de 100 000 morts sur le coup, et beaucoup d'autres dans les mois et les années qui suivent (brûlures, irradiation).",
            "Le 8 août, l'URSS déclare la guerre au Japon ; le Japon capitule le 2 septembre 1945."
          ] },
          { titre: "Un tournant", points: [
            "L'humanité dispose désormais d'une arme capable de la détruire : la peur nucléaire marque la guerre froide.",
            "Les hibakusha (survivants) témoignent ; Hiroshima devient un lieu de mémoire pour la paix."
          ] }
        ],
        reperes: [
          { a: "1942-06-04", date: "juin 1942", txt: "Victoire américaine à Midway." },
          { a: "1945-07-16", date: "16 juillet 1945", txt: "Premier essai nucléaire américain au Nouveau-Mexique." },
          { a: "1945-08-06", date: "6 août 1945", txt: "Bombardement atomique d'Hiroshima." },
          { a: "1945-08-09", date: "9 août 1945", txt: "Bombardement atomique de Nagasaki." },
          { a: "1945-09-02", date: "2 septembre 1945", txt: "Capitulation du Japon." }
        ],
        notions: [
          { mot: "Projet Manhattan", def: "Programme secret américain qui met au point la bombe atomique entre 1942 et 1945." },
          { mot: "Hibakusha", def: "Nom donné au Japon aux survivants des bombardements atomiques." }
        ],
        pieges: [
          "Il n'y a pas une seule raison à la décision de Truman : capitulation rapide, vies américaines, avertissement à l'URSS.",
          "Les victimes ne meurent pas toutes le jour même : les effets des radiations tuent pendant des années."
        ],
        mots: ["guerre du Pacifique", "kamikazes", "projet Manhattan", "Truman", "Hiroshima", "Nagasaki", "capitulation", "ère nucléaire"],
        reponse: "En 1945, la guerre du Pacifique est très meurtrière : les Américains reconquièrent les îles une à une, à Iwo Jima puis à Okinawa, face à une armée japonaise qui refuse de se rendre. Le président Truman décide d'utiliser la bombe atomique mise au point par le projet Manhattan : il veut obtenir une capitulation rapide, éviter un débarquement très coûteux en vies américaines, et montrer sa puissance à l'URSS. Le 6 août 1945, Hiroshima est anéantie ; le 9 août, c'est Nagasaki. Plus de 100 000 personnes meurent sur le coup, beaucoup d'autres ensuite à cause des radiations. Le Japon capitule le 2 septembre. Ce tournant ouvre l'ère nucléaire : la peur de la destruction totale marquera toute la guerre froide."
      }
    ]
  },
  {
    id: "tle-h2-c1", n: "Tle", d: "histoire", carte: ["europe-large", "monde"],
    theme: "Thème 2 · La multiplication des acteurs internationaux dans un monde bipolaire (de 1945 au début des années 1970)",
    num: "Chapitre 4",
    titre: "La fin de la Seconde Guerre mondiale et les débuts d'un nouvel ordre mondial",
    question: "Comment les vainqueurs de 1945 cherchent-ils à bâtir un nouvel ordre mondial, alors que les tensions entre les États-Unis et l'URSS apparaissent très vite ?",
    plan: [
      "Un bilan humain, matériel et moral sans précédent",
      "Les bases d'un nouvel ordre international : ONU, procès de Nuremberg et de Tokyo, Bretton Woods",
      "Reconstruire : les bases de l'État-providence",
      "Les débuts de la guerre froide et les conflits au Proche-Orient"
    ],
    cle: "En 1945, les vainqueurs veulent fonder un monde de paix, de justice et de prospérité (ONU, Nuremberg, Bretton Woods) ; mais dès 1947, la guerre froide oppose les États-Unis et l'URSS, deux superpuissances aux modèles opposés.",
    essentiel: [
      "La guerre a fait plus de 60 millions de morts, en majorité civils ; l'Europe et l'Asie sont en ruines et des millions de personnes sont déplacées. La découverte des camps et du génocide des Juifs provoque un choc moral.",
      "Les vainqueurs fondent un nouvel ordre : la Charte des Nations unies est signée à San Francisco le 26 juin 1945 ; les procès de Nuremberg (1945-1946) et de Tokyo (1946-1948) jugent les dirigeants pour crimes contre la paix, crimes de guerre et crimes contre l'humanité ; les accords de Bretton Woods (1944) organisent un système monétaire autour du dollar, avec le FMI et la Banque mondiale.",
      "En France comme dans d'autres pays d'Europe de l'Ouest, l'État-providence se met en place : nationalisations, Sécurité sociale (1945), droit de vote des femmes (1944), selon le programme du Conseil national de la Résistance.",
      "Mais l'alliance entre les États-Unis et l'URSS se défait : l'URSS impose des régimes communistes en Europe de l'Est (« rideau de fer », coup de Prague en 1948). En 1947, la doctrine Truman (endiguement) et la doctrine Jdanov ouvrent la guerre froide. Au Proche-Orient, la naissance d'Israël (1948) provoque une première guerre israélo-arabe."
    ],
    reperes: [
      { a: "1944-07-22", date: "juillet 1944", txt: "Accords de Bretton Woods : naissance du FMI et de la Banque mondiale." },
      { a: "1945-02-04", date: "février 1945", txt: "Conférence de Yalta entre Roosevelt, Churchill et Staline." },
      { a: "1945-06-26", date: "26 juin 1945", txt: "Signature de la Charte des Nations unies à San Francisco." },
      { a: "1945-10-04", date: "octobre 1945", txt: "Ordonnances créant la Sécurité sociale en France." },
      { a: "1945-11-20", b: "1946-10-01", date: "1945-1946", txt: "Le procès de Nuremberg juge les principaux dirigeants nazis." },
      { a: "1946-03-05", date: "5 mars 1946", txt: "Discours de Churchill à Fulton : le « rideau de fer »." },
      { a: "1947-03-12", date: "12 mars 1947", txt: "Doctrine Truman : les États-Unis veulent endiguer le communisme." },
      { a: "1947-06-05", date: "juin 1947", txt: "Annonce du plan Marshall d'aide à l'Europe." },
      { a: "1947-09-22", date: "septembre 1947", txt: "Doctrine Jdanov et création du Kominform." },
      { a: "1948-02-25", date: "25 février 1948", txt: "Coup de Prague : les communistes prennent le pouvoir en Tchécoslovaquie." },
      { a: "1948-05-14", date: "14 mai 1948", txt: "Proclamation de l'État d'Israël." },
      { a: "1948-06-24", b: "1949-05-12", date: "1948-1949", txt: "Blocus de Berlin-Ouest par les Soviétiques et pont aérien américain." },
      { a: "1948-12-10", date: "10 décembre 1948", txt: "Déclaration universelle des droits de l'homme." },
      { a: "1949-04-04", date: "4 avril 1949", txt: "Création de l'OTAN." }
    ],
    notions: [
      { mot: "ONU", def: "Organisation des Nations unies, créée en 1945 pour maintenir la paix et la sécurité internationales ; son siège est à New York." },
      { mot: "Conseil de sécurité", def: "Organe de l'ONU chargé de la paix ; ses cinq membres permanents (États-Unis, URSS, Royaume-Uni, France, Chine) disposent d'un droit de veto." },
      { mot: "Crime contre l'humanité", def: "Crime commis contre des civils (assassinat, extermination, déportation, persécution), défini au procès de Nuremberg ; il est imprescriptible en France depuis 1964." },
      { mot: "Génocide", def: "Destruction de tout ou partie d'un groupe national, ethnique, racial ou religieux ; mot créé par le juriste Raphael Lemkin, crime défini par l'ONU en 1948." },
      { mot: "Bretton Woods", def: "Accords de 1944 qui organisent le système monétaire international autour du dollar, convertible en or, et créent le FMI et la Banque mondiale." },
      { mot: "État-providence", def: "État qui intervient pour protéger les individus contre les risques sociaux (maladie, vieillesse, chômage) et réduire les inégalités." },
      { mot: "Sécurité sociale", def: "En France, système créé en 1945 qui protège les travailleurs et leur famille contre la maladie, les accidents du travail et la vieillesse." },
      { mot: "Superpuissance", def: "État dont la puissance est mondiale dans tous les domaines : économique, militaire, politique et culturel (les États-Unis et l'URSS après 1945)." },
      { mot: "Guerre froide", def: "Affrontement entre les États-Unis et l'URSS (1947-1991), sans combat direct entre eux, mais avec des crises et des guerres par alliés interposés." },
      { mot: "Endiguement", def: "Politique américaine définie par la doctrine Truman (1947) : contenir l'expansion du communisme dans le monde (containment)." },
      { mot: "Plan Marshall", def: "Aide économique américaine à la reconstruction de l'Europe (1948-1952) ; l'URSS la refuse et l'interdit aux pays de l'Est." },
      { mot: "Démocratie populaire", def: "Nom donné aux régimes communistes installés en Europe de l'Est sous le contrôle de l'URSS après 1945." }
    ],
    personnages: [
      { nom: "Raphael Lemkin", dates: "1900-1959", txt: [
        "Juriste juif polonais réfugié aux États-Unis.",
        "En 1944, il invente un mot nouveau pour désigner la destruction d'un peuple.",
        "Il obtient que l'ONU adopte en 1948 une convention contre le génocide."
      ] },
      { nom: "René Cassin", dates: "1887-1976", txt: [
        "Juriste, membre de la France libre à Londres dès 1940.",
        "Il participe à la rédaction de la Déclaration universelle des droits de l'homme de 1948.",
        "Il reçoit le prix Nobel de la paix en 1968."
      ] },
      { nom: "George Marshall", dates: "1880-1959", txt: [
        "Chef d'état-major de l'armée américaine pendant la guerre.",
        "Secrétaire d'État de Truman, il annonce en juin 1947 un grand programme d'aide à l'Europe.",
        "Il reçoit le prix Nobel de la paix en 1953."
      ] },
      { nom: "Andreï Jdanov", dates: "1896-1948", txt: [
        "Dirigeant soviétique proche de Staline.",
        "En septembre 1947, il décrit un monde divisé en deux camps : « impérialiste » et « anti-impérialiste ».",
        "Il participe à la création du Kominform, qui coordonne les partis communistes."
      ] },
      { nom: "Ambroise Croizat", dates: "1901-1951", txt: [
        "Syndicaliste de la CGT et député communiste.",
        "Ministre du Travail de 1945 à 1947.",
        "Il met en place la Sécurité sociale et les retraites."
      ] }
    ],
    lieux: [
      { nom: "Yalta", lon: 34.16, lat: 44.5, txt: "Ville de Crimée où Roosevelt, Churchill et Staline se réunissent en février 1945." },
      { nom: "Nuremberg", lon: 11.08, lat: 49.45, txt: "Ville allemande où se tient le procès des principaux dirigeants nazis (1945-1946)." },
      { nom: "Berlin", lon: 13.4, lat: 52.52, txt: "Ancienne capitale du Reich, divisée en quatre secteurs ; les Soviétiques bloquent sa partie ouest en 1948-1949." },
      { nom: "Prague", lon: 14.42, lat: 50.08, txt: "Capitale de la Tchécoslovaquie, où les communistes prennent le pouvoir en février 1948." },
      { nom: "San Francisco", lon: -122.42, lat: 37.77, txt: "Ville où est signée la Charte des Nations unies, le 26 juin 1945." },
      { nom: "New York", lon: -73.97, lat: 40.75, txt: "Ville où s'installe le siège de l'ONU." },
      { nom: "Fulton", lon: -91.95, lat: 38.85, txt: "Ville du Missouri où Churchill dénonce le « rideau de fer » en mars 1946." },
      { nom: "Tokyo", lon: 139.69, lat: 35.69, txt: "Capitale du Japon, où le tribunal militaire international juge les dirigeants japonais (1946-1948)." },
      { nom: "Tel-Aviv", lon: 34.78, lat: 32.08, txt: "Ville où David Ben Gourion proclame l'État d'Israël le 14 mai 1948." }
    ],
    graphiques: [
      { id: "plan-marshall", type: "barres-h", titre: "Les principaux bénéficiaires du plan Marshall (1948-1952, en millions de dollars)", unite: "millions de dollars",
        source: "Agence américaine de coopération économique (montants arrondis)",
        x: ["Royaume-Uni", "France", "Allemagne de l'Ouest", "Italie", "Pays-Bas", "Grèce", "Autriche"], valeurs: [3297, 2296, 1448, 1204, 1128, 694, 488],
        quoi: "l'aide reçue", ou: "le pays",
        questions: [
          { q: "Pourquoi aucun pays d'Europe de l'Est ne figure-t-il dans ce graphique ?", r: "L'URSS leur a interdit d'accepter l'aide américaine", faux: ["Ils n'avaient pas été touchés par la guerre", "Ils étaient déjà riches", "Les États-Unis ne connaissaient pas ces pays"], expl: "En 1947, Staline refuse le plan Marshall et l'interdit à ses alliés, comme la Tchécoslovaquie qui avait voulu l'accepter." }
        ] }
    ],
    trous: [
      { titre: "Un nouvel ordre mondial", texte: "En 1945, les vainqueurs créent l'[ONU] pour maintenir la paix. À [Nuremberg], les dirigeants nazis sont jugés pour crimes contre l'[humanité]. Les accords de [Bretton Woods] organisent l'économie mondiale autour du dollar. Mais dès 1947, la doctrine [Truman] ouvre la guerre [froide] entre les États-Unis et l'URSS. L'Europe est coupée par le [rideau de fer]." }
    ],
    capable: [
      "Dresser le bilan humain, matériel et moral de la Seconde Guerre mondiale.",
      "Présenter les bases du nouvel ordre international : ONU, Nuremberg et Tokyo, Bretton Woods.",
      "Expliquer comment naît l'État-providence en France.",
      "Expliquer les débuts de la guerre froide et la naissance de l'État d'Israël."
    ],
    intrus: [
      { items: ["ONU", "FMI", "Banque mondiale", "Kominform"], intrus: "Kominform", expl: "Le Kominform (1947) coordonne les partis communistes ; les trois autres sont des institutions internationales créées en 1944-1945." },
      { items: ["Crime contre l'humanité", "Crime de guerre", "Crime contre la paix", "Plan Marshall"], intrus: "Plan Marshall", expl: "Le plan Marshall est une aide économique ; les trois autres sont les chefs d'accusation de Nuremberg." },
      { items: ["Doctrine Truman", "Plan Marshall", "OTAN", "Coup de Prague"], intrus: "Coup de Prague", expl: "Le coup de Prague est l'œuvre des communistes ; les trois autres sont des initiatives du camp américain." },
      { items: ["Sécurité sociale", "Nationalisations", "Vote des femmes", "Rideau de fer"], intrus: "Rideau de fer", expl: "Le rideau de fer désigne la coupure de l'Europe ; les trois autres sont des réformes de la Libération en France." }
    ],
    ppo: [
      {
        id: "cnr", court: "PPO Programme du CNR",
        titre: "15 mars 1944 : le programme du CNR",
        question: "En quoi le programme du Conseil national de la Résistance prépare-t-il la refondation de la France à la Libération ?",
        branches: [
          { titre: "Une Résistance unifiée", points: [
            "Le Conseil national de la Résistance (CNR) se réunit pour la première fois le 27 mai 1943, sous la présidence de Jean Moulin.",
            "Il rassemble des mouvements de résistance, des partis politiques et des syndicats, et reconnaît de Gaulle comme chef."
          ] },
          { titre: "Le programme du 15 mars 1944", points: [
            "Un plan d'action immédiate : intensifier la lutte, préparer l'insurrection, punir les traîtres.",
            "Des mesures pour la Libération : rétablir la démocratie et le suffrage universel, la liberté de la presse.",
            "Des réformes économiques et sociales : nationaliser les grands moyens de production, créer un plan complet de sécurité sociale. Il est publié sous le titre « Les Jours heureux »."
          ] },
          { titre: "Un programme appliqué à la Libération", points: [
            "Les femmes obtiennent le droit de vote par l'ordonnance du 21 avril 1944 ; elles votent pour la première fois en 1945.",
            "Nationalisations : Renault (1945), houillères, électricité et gaz (EDF-GDF en 1946), grandes banques.",
            "Ordonnances d'octobre 1945 : création de la Sécurité sociale ; comités d'entreprise (1945)."
          ] },
          { titre: "La naissance d'un État-providence", points: [
            "L'État protège désormais les Français contre les risques de la vie et dirige la reconstruction (plan Monnet, 1946).",
            "Ce modèle social reste une référence dans les débats politiques actuels."
          ] }
        ],
        reperes: [
          { a: "1943-05-27", date: "27 mai 1943", txt: "Première réunion du CNR, présidée par Jean Moulin." },
          { a: "1944-03-15", date: "15 mars 1944", txt: "Adoption du programme du CNR." },
          { a: "1944-04-21", date: "21 avril 1944", txt: "Ordonnance accordant le droit de vote aux femmes." },
          { a: "1945-01-16", date: "janvier 1945", txt: "Nationalisation de Renault." },
          { a: "1945-10-04", date: "octobre 1945", txt: "Ordonnances créant la Sécurité sociale." },
          { a: "1946-04-08", date: "avril 1946", txt: "Nationalisation de l'électricité et du gaz : naissance d'EDF et de GDF." }
        ],
        notions: [
          { mot: "CNR", def: "Conseil national de la Résistance : organe créé en 1943 qui unifie les mouvements de résistance, les partis et les syndicats." },
          { mot: "Nationalisation", def: "Transfert de la propriété d'une entreprise privée à l'État." }
        ],
        pieges: [
          "Le programme du CNR n'est pas une loi : ce sont les ordonnances et les lois de 1944-1946 qui l'appliquent.",
          "Ne pas oublier sa première partie, militaire : préparer la libération du territoire."
        ],
        mots: ["CNR", "Jean Moulin", "Les Jours heureux", "suffrage universel", "nationalisations", "Sécurité sociale", "droit de vote des femmes", "État-providence"],
        reponse: "Adopté le 15 mars 1944 par le Conseil national de la Résistance, qui réunit mouvements, partis et syndicats depuis 1943, ce programme prévoit d'abord un plan d'action pour libérer le territoire, puis les réformes à mener après la Libération. Il veut rétablir la démocratie et le suffrage universel, garantir la liberté de la presse, nationaliser les grands moyens de production et créer un plan complet de sécurité sociale. À la Libération, ces mesures sont appliquées : droit de vote des femmes (1944), nationalisations de Renault, du charbon, de l'électricité et du gaz, création de la Sécurité sociale (1945). Le programme du CNR fonde ainsi l'État-providence français."
      },
      {
        id: "israel", court: "PPO Naissance d'Israël",
        titre: "1948 : naissance de l'État d'Israël",
        question: "Comment naît l'État d'Israël, et pourquoi sa création ouvre-t-elle un conflit durable au Proche-Orient ?",
        branches: [
          { titre: "La Palestine sous mandat britannique", points: [
            "À la fin du XIXᵉ siècle, le sionisme de Theodor Herzl veut un État pour le peuple juif.",
            "En 1917, la déclaration Balfour promet un « foyer national juif » en Palestine, que le Royaume-Uni administre par mandat à partir de 1920.",
            "L'immigration juive s'accroît, surtout après la Shoah ; les tensions avec les Arabes de Palestine s'aggravent."
          ] },
          { titre: "Le plan de partage de l'ONU", points: [
            "Le 29 novembre 1947, l'ONU vote un plan de partage : un État juif, un État arabe, Jérusalem sous régime international.",
            "Les dirigeants juifs l'acceptent, les États arabes le refusent."
          ] },
          { titre: "La proclamation et la guerre", points: [
            "Le 14 mai 1948, David Ben Gourion proclame l'État d'Israël, reconnu aussitôt par les États-Unis et l'URSS.",
            "Le lendemain, les armées arabes voisines attaquent : Israël l'emporte et agrandit son territoire (1949).",
            "Environ 700 000 Palestiniens fuient ou sont expulsés : c'est la Nakba (« catastrophe »)."
          ] },
          { titre: "Un conflit durable", points: [
            "L'État arabe prévu n'est pas créé : la Jordanie annexe la Cisjordanie, l'Égypte contrôle Gaza.",
            "La question des réfugiés palestiniens et les guerres israélo-arabes (1956, 1967, 1973) marquent la région."
          ] }
        ],
        reperes: [
          { a: "1917-11-02", date: "1917", txt: "Déclaration Balfour." },
          { a: "1947-11-29", date: "29 novembre 1947", txt: "Plan de partage de la Palestine voté par l'ONU." },
          { a: "1948-05-14", date: "14 mai 1948", txt: "Ben Gourion proclame l'État d'Israël." },
          { a: "1948-05-15", b: "1949-07-20", date: "1948-1949", txt: "Première guerre israélo-arabe." }
        ],
        notions: [
          { mot: "Sionisme", def: "Mouvement né à la fin du XIXᵉ siècle qui veut la création d'un État pour le peuple juif en Palestine." },
          { mot: "Mandat", def: "Administration d'un territoire confiée par la Société des Nations à une puissance (ici le Royaume-Uni en Palestine)." },
          { mot: "Nakba", def: "« Catastrophe » en arabe : l'exode d'environ 700 000 Palestiniens en 1947-1949." }
        ],
        personnages: [
          { nom: "David Ben Gourion", dates: "1886-1973", txt: [
            "Dirigeant sioniste né en Pologne, installé en Palestine en 1906.",
            "Le 14 mai 1948, il proclame la naissance d'un nouvel État à Tel-Aviv.",
            "Il en est le premier chef du gouvernement."
          ] }
        ],
        lieux: [
          { nom: "Jérusalem", lon: 35.21, lat: 31.77, txt: "Ville sainte pour les juifs, les chrétiens et les musulmans ; le plan de l'ONU prévoyait un régime international." }
        ],
        pieges: [
          "Israël n'est pas créé par l'ONU : l'ONU vote un plan de partage, l'État est proclamé par Ben Gourion.",
          "La guerre de 1948-1949 n'est pas le seul conflit : d'autres suivent (1956, 1967, 1973)."
        ],
        mots: ["sionisme", "mandat britannique", "plan de partage", "Ben Gourion", "14 mai 1948", "guerre israélo-arabe", "Nakba", "réfugiés"],
        reponse: "Depuis la déclaration Balfour (1917), le Royaume-Uni, qui administre la Palestine, a promis un « foyer national juif » ; l'immigration juive s'accroît, surtout après la Shoah, et les tensions avec les Arabes de Palestine s'aggravent. Le 29 novembre 1947, l'ONU vote un plan de partage en deux États, refusé par les États arabes. Le 14 mai 1948, David Ben Gourion proclame l'État d'Israël, reconnu par les États-Unis et l'URSS. Les armées arabes attaquent aussitôt, mais Israël l'emporte et agrandit son territoire, tandis qu'environ 700 000 Palestiniens fuient ou sont expulsés : c'est la Nakba. L'État arabe prévu n'est pas créé, ce qui ouvre un conflit durable."
      },
      {
        id: "coup-prague", court: "PPO Coup de Prague",
        titre: "25 février 1948 : le « coup de Prague »",
        question: "Comment les communistes prennent-ils le pouvoir en Tchécoslovaquie, et pourquoi cet événement accélère-t-il la guerre froide ?",
        branches: [
          { titre: "Une démocratie fragile (1945-1947)", points: [
            "Libérée en 1945, la Tchécoslovaquie rétablit la démocratie, avec le président Edvard Beneš.",
            "Aux élections de 1946, le parti communiste arrive en tête (38 %) ; son chef, Klement Gottwald, dirige le gouvernement.",
            "En juillet 1947, sous la pression de Staline, le pays renonce au plan Marshall."
          ] },
          { titre: "La crise de février 1948", points: [
            "Les communistes contrôlent la police ; le 20 février, douze ministres non communistes démissionnent pour protester.",
            "Les communistes mobilisent manifestations et milices ouvrières armées.",
            "Le 25 février, Beneš cède : il accepte un gouvernement dominé par les communistes."
          ] },
          { titre: "Une démocratie populaire", points: [
            "Le ministre Jan Masaryk, non communiste, est retrouvé mort le 10 mars 1948.",
            "En mai 1948, les élections se font sur une liste unique ; Beneš démissionne en juin.",
            "Le pays rejoint le bloc soviétique : toute l'Europe de l'Est est désormais communiste."
          ] },
          { titre: "Un choc pour l'Occident", points: [
            "Les pays d'Europe de l'Ouest signent le traité de Bruxelles (mars 1948), alliance défensive.",
            "Les États-Unis accélèrent le plan Marshall ; l'OTAN est créée en avril 1949."
          ] }
        ],
        reperes: [
          { a: "1946-05-26", date: "mai 1946", txt: "Les communistes arrivent en tête des élections en Tchécoslovaquie." },
          { a: "1947-07-10", date: "juillet 1947", txt: "La Tchécoslovaquie renonce au plan Marshall." },
          { a: "1948-02-25", date: "25 février 1948", txt: "Le président Beneš cède : coup de Prague." },
          { a: "1948-03-17", date: "mars 1948", txt: "Traité de Bruxelles entre pays d'Europe de l'Ouest." },
          { a: "1949-04-04", date: "avril 1949", txt: "Création de l'OTAN." }
        ],
        notions: [
          { mot: "Coup de Prague", def: "Prise du pouvoir par les communistes en Tchécoslovaquie en février 1948, par la pression de la rue et le contrôle de la police." }
        ],
        personnages: [
          { nom: "Klement Gottwald", dates: "1896-1953", txt: [
            "Dirigeant du parti communiste tchécoslovaque, réfugié à Moscou pendant la guerre.",
            "Chef du gouvernement en 1946, il obtient la capitulation du président Beneš en février 1948.",
            "Il devient président de la République et aligne le pays sur l'URSS."
          ] }
        ],
        pieges: [
          "Ce n'est pas une invasion : les communistes prennent le pouvoir de l'intérieur, sans l'Armée rouge, mais avec le soutien de Moscou.",
          "Le coup de Prague n'est pas le début de la guerre froide (1947), mais il la durcit."
        ],
        mots: ["Tchécoslovaquie", "Gottwald", "Beneš", "police", "milices", "démocratie populaire", "plan Marshall", "OTAN"],
        reponse: "En 1945, la Tchécoslovaquie rétablit la démocratie ; les communistes arrivent en tête des élections de 1946 et Klement Gottwald dirige le gouvernement. En 1947, Staline oblige le pays à renoncer au plan Marshall. En février 1948, les communistes, qui contrôlent la police, profitent de la démission de douze ministres non communistes pour mobiliser la rue et les milices ouvrières : le 25 février, le président Beneš cède et accepte un gouvernement dominé par les communistes. La Tchécoslovaquie devient une démocratie populaire. Ce coup de force choque l'Occident : il pousse les pays d'Europe de l'Ouest à s'allier (traité de Bruxelles) et prépare la création de l'OTAN en 1949."
      }
    ]
  },
  {
    id: "tle-h2-c2", n: "Tle", d: "histoire", carte: ["asie-est", "monde"],
    theme: "Thème 2 · La multiplication des acteurs internationaux dans un monde bipolaire (de 1945 au début des années 1970)",
    num: "Chapitre 5",
    titre: "Une nouvelle donne géopolitique : bipolarisation et émergence du tiers-monde",
    question: "Comment l'affrontement des deux superpuissances se combine-t-il avec la décolonisation pour faire émerger de nouveaux acteurs ?",
    plan: [
      "Deux modèles et deux blocs : la bipolarisation",
      "Les nouveaux États : des indépendances à leur affirmation sur la scène internationale",
      "La Chine de Mao : l'affirmation d'un nouvel acteur",
      "Les conflits du Proche et du Moyen-Orient"
    ],
    cle: "Entre 1947 et le début des années 1970, le monde est structuré par deux blocs rivaux, mais la décolonisation fait naître des dizaines de nouveaux États qui, avec la Chine de Mao, contestent cette bipolarité.",
    essentiel: [
      "Deux modèles s'opposent : aux États-Unis, la démocratie libérale et l'économie de marché ; en URSS, le parti unique et l'économie planifiée. Chaque superpuissance organise un bloc : OTAN (1949) contre pacte de Varsovie (1955). Berlin, coupée par un mur en 1961, en est le symbole.",
      "La guerre froide est faite de crises : guerre de Corée (1950-1953), crise des missiles de Cuba (1962), guerre du Vietnam. Après 1962, la peur nucléaire ouvre une période de détente.",
      "La décolonisation fait naître de nombreux États : l'Inde (1947), l'Indonésie (1949), la plupart des colonies d'Afrique (1960), l'Algérie (1962). À Bandung (1955), des pays d'Asie et d'Afrique affirment leur solidarité ; en 1961, le mouvement des non-alignés refuse de choisir un bloc. On parle de tiers-monde.",
      "La Chine de Mao, communiste depuis 1949, rompt avec l'URSS au début des années 1960 et s'affirme comme un acteur international (bombe atomique en 1964, siège à l'ONU en 1971). Au Proche-Orient, les guerres israélo-arabes (1956, 1967, 1973) s'inscrivent dans la rivalité des deux Grands."
    ],
    reperes: [
      { a: "1947-08-15", date: "15 août 1947", txt: "Indépendance de l'Inde et du Pakistan." },
      { a: "1949-10-01", date: "1er octobre 1949", txt: "Mao Zedong proclame la République populaire de Chine." },
      { a: "1950-06-25", b: "1953-07-27", date: "1950-1953", txt: "La guerre de Corée." },
      { a: "1954-05-07", date: "7 mai 1954", txt: "Défaite française de Diên Biên Phu." },
      { a: "1955-04-18", date: "avril 1955", txt: "Conférence de Bandung." },
      { a: "1955-05-14", date: "mai 1955", txt: "Création du pacte de Varsovie." },
      { a: "1956-10-29", date: "octobre-novembre 1956", txt: "Crise de Suez." },
      { a: 1960, date: "1960", txt: "« Année de l'Afrique » : 17 pays africains deviennent indépendants." },
      { a: "1961-08-13", date: "13 août 1961", txt: "Construction du mur de Berlin." },
      { a: "1961-09-01", date: "septembre 1961", txt: "Conférence de Belgrade : naissance du mouvement des non-alignés." },
      { a: "1962-10-16", date: "octobre 1962", txt: "Crise des missiles de Cuba." },
      { a: "1964-10-16", date: "1964", txt: "Premier essai nucléaire chinois." },
      { a: "1967-06-05", date: "juin 1967", txt: "Guerre des Six Jours." },
      { a: "1971-10-25", date: "1971", txt: "La Chine populaire obtient le siège de la Chine à l'ONU." }
    ],
    notions: [
      { mot: "Bipolarisation", def: "Organisation du monde autour de deux pôles, les États-Unis et l'URSS, qui rassemblent chacun un bloc d'alliés." },
      { mot: "OTAN", def: "Organisation du traité de l'Atlantique Nord, alliance militaire du bloc occidental créée en 1949." },
      { mot: "Pacte de Varsovie", def: "Alliance militaire du bloc soviétique créée en 1955." },
      { mot: "Équilibre de la terreur", def: "Situation où chaque superpuissance renonce à attaquer l'autre par peur de représailles nucléaires." },
      { mot: "Détente", def: "Période d'apaisement des relations entre les États-Unis et l'URSS après 1962 (téléphone rouge, accords de limitation des armements)." },
      { mot: "Décolonisation", def: "Processus par lequel les colonies accèdent à l'indépendance, par la négociation ou par la guerre." },
      { mot: "Tiers-monde", def: "Expression créée par Alfred Sauvy en 1952 pour désigner les pays pauvres, souvent nouvellement indépendants, qui ne sont ni dans le bloc occidental ni dans le bloc soviétique." },
      { mot: "Non-alignement", def: "Refus de s'aligner sur l'un des deux blocs, affirmé à la conférence de Belgrade en 1961." },
      { mot: "Néocolonialisme", def: "Domination économique ou politique maintenue par les anciennes puissances coloniales sur des pays devenus indépendants." },
      { mot: "Maoïsme", def: "Communisme adapté par Mao Zedong à la Chine, fondé sur la paysannerie ; il s'oppose au modèle soviétique à partir des années 1960." },
      { mot: "Guerre périphérique", def: "Conflit armé où les deux superpuissances s'affrontent indirectement, par alliés interposés (Corée, Vietnam)." }
    ],
    personnages: [
      { nom: "Mao Zedong", dates: "1893-1976", txt: [
        "Chef des communistes chinois pendant la guerre civile.",
        "Il proclame la République populaire de Chine le 1er octobre 1949.",
        "Il lance le Grand Bond en avant (1958) puis la Révolution culturelle (1966)."
      ] },
      { nom: "Jawaharlal Nehru", dates: "1889-1964", txt: [
        "Compagnon de Gandhi dans la lutte contre la domination britannique.",
        "Premier ministre de l'Inde indépendante de 1947 à 1964.",
        "Il est l'une des figures de Bandung et du non-alignement."
      ] },
      { nom: "Gamal Abdel Nasser", dates: "1918-1970", txt: [
        "Officier égyptien qui renverse la monarchie en 1952.",
        "En 1956, il nationalise le canal de Suez.",
        "Figure du nationalisme arabe et du tiers-monde."
      ] },
      { nom: "John F. Kennedy", dates: "1917-1963", txt: [
        "Élu président des États-Unis en 1960.",
        "À Berlin, en 1963, il déclare « Ich bin ein Berliner ».",
        "Il affronte l'URSS lors de la crise des missiles de Cuba ; il est assassiné à Dallas."
      ] },
      { nom: "Nikita Khrouchtchev", dates: "1894-1971", txt: [
        "Successeur de Staline à la tête de l'URSS.",
        "Il dénonce les crimes de Staline en 1956 et prône la « coexistence pacifique ».",
        "Il installe des missiles nucléaires à Cuba en 1962, puis les retire."
      ] },
      { nom: "Hô Chi Minh", dates: "1890-1969", txt: [
        "Fondateur du parti communiste indochinois.",
        "Il proclame l'indépendance du Vietnam le 2 septembre 1945.",
        "Il dirige le Nord-Vietnam contre la France, puis contre les États-Unis."
      ] }
    ],
    lieux: [
      { nom: "Pékin", lon: 116.4, lat: 39.9, txt: "Capitale de la Chine populaire, proclamée par Mao en 1949." },
      { nom: "Bandung", lon: 107.61, lat: -6.91, txt: "Ville d'Indonésie où se réunissent 29 pays d'Asie et d'Afrique en avril 1955." },
      { nom: "Séoul", lon: 126.98, lat: 37.57, txt: "Capitale de la Corée du Sud, prise et reprise pendant la guerre de Corée." },
      { nom: "Hanoï", lon: 105.85, lat: 21.03, txt: "Capitale du Nord-Vietnam communiste." },
      { nom: "Saïgon", lon: 106.7, lat: 10.78, txt: "Capitale du Sud-Vietnam, soutenu par les États-Unis ; prise par les communistes le 30 avril 1975." },
      { nom: "Diên Biên Phu", lon: 103.02, lat: 21.39, txt: "Cuvette du nord du Vietnam où l'armée française est vaincue en mai 1954." },
      { nom: "Washington", lon: -77.04, lat: 38.91, txt: "Capitale des États-Unis, centre du bloc occidental." },
      { nom: "Moscou", lon: 37.62, lat: 55.75, txt: "Capitale de l'URSS, centre du bloc soviétique." },
      { nom: "Berlin", lon: 13.4, lat: 52.52, txt: "Ville coupée en deux par un mur à partir de 1961 : symbole de la guerre froide." },
      { nom: "La Havane", lon: -82.37, lat: 23.11, txt: "Capitale de Cuba, où Fidel Castro prend le pouvoir en 1959." },
      { nom: "Canal de Suez", lon: 32.35, lat: 30.6, txt: "Canal nationalisé par Nasser en 1956, ce qui provoque une intervention franco-britannique et israélienne." },
      { nom: "New Delhi", lon: 77.21, lat: 28.61, txt: "Capitale de l'Inde, indépendante en 1947." }
    ],
    graphiques: [
      { id: "etats-onu", type: "barres", titre: "Le nombre d'États membres de l'ONU (1945-1970)", unite: "États",
        source: "Organisation des Nations unies",
        x: ["1945", "1955", "1960", "1965", "1970"], valeurs: [51, 76, 99, 117, 127], quoi: "le nombre d'États membres",
        questions: [
          { q: "Pourquoi le nombre d'États membres augmente-t-il autant entre 1955 et 1965 ?", r: "La décolonisation fait naître de nombreux États, surtout en Afrique", faux: ["Les pays européens se divisent", "L'URSS se décompose", "Les États-Unis créent de nouveaux États"], expl: "En 1960, « année de l'Afrique », 17 pays africains deviennent indépendants et rejoignent l'ONU." }
        ] }
    ],
    croquis: [
      { id: "monde-bipolaire", titre: "Un monde bipolaire au début des années 1960", fond: "monde",
        txt: "I. Deux blocs face à face ; II. Des crises et des guerres ; III. Le tiers-monde et la Chine contestent la bipolarité.",
        elements: [
          { nom: "Bloc occidental (États-Unis et alliés de l'OTAN)", couleur: "#3B78B5", opacite: ".55",
            zone: [[[-168, 66], [-140, 70], [-100, 75], [-60, 75], [-55, 52], [-66, 44], [-76, 35], [-80, 25], [-97, 26], [-106, 31.5], [-117, 32.5], [-125, 40], [-130, 55], [-150, 60]],
              [[-10, 36], [-10, 44], [-6, 58], [5, 62], [15, 70], [28, 71], [20, 69], [11.5, 59], [8, 57.5], [12.5, 56], [10.9, 54], [10.6, 52.5], [10, 50.6], [12.1, 50.3], [13.8, 48.8], [13, 47.5], [9.6, 47.5], [7.6, 47.6], [6, 46.2], [7, 45.9], [10.5, 46.5], [12.2, 47], [13.7, 46.5], [13.6, 45.6], [19.5, 40], [20, 39.6], [20.8, 40.9], [22.5, 41.3], [26.3, 41.7], [28, 42], [33, 42], [41.5, 41.5], [44.8, 39.7], [44.5, 37.2], [36.5, 36.2], [27, 36.8], [26, 36], [-6, 36]]] },
          { nom: "Bloc soviétique (URSS et démocraties populaires)", couleur: "#C0392B", opacite: ".5",
            zone: [[10.9, 54.2], [20, 56], [24, 60], [27.8, 60.5], [30, 61.5], [29.5, 64], [30, 67], [28.9, 69], [31, 70.2], [40, 70], [60, 72], [80, 74], [110, 76], [140, 73], [170, 70], [179.5, 66], [179, 64], [170, 60], [160, 55], [156, 51], [143, 46], [135, 43], [130.6, 42.4], [134.7, 48.3], [127.5, 50.2], [121.5, 53.3], [117.8, 49.5], [119.9, 47], [111.9, 43.7], [105, 41.6], [96, 42.7], [90.7, 45.5], [87.8, 49.2], [82.8, 47.2], [80.2, 42.2], [75, 40.5], [74.9, 37.2], [67.8, 37.2], [61, 36.5], [54, 37.4], [48.9, 38.4], [46.5, 38.9], [44.8, 39.7], [43.5, 41.1], [41.5, 41.5], [28, 43.8], [28, 42], [26.3, 41.7], [22.5, 41.3], [22.4, 42.3], [22.7, 44.2], [21.4, 45.2], [20.3, 46.1], [18.8, 45.9], [16.1, 46.9], [17.1, 48], [16.9, 48.6], [13.8, 48.8], [12.1, 50.3], [10, 50.6], [10.6, 52.5]] },
          { nom: "Chine populaire", couleur: "#E67E22", motif: "hachures",
            zone: [[75, 39], [80, 45], [87, 49], [97, 43], [111, 45], [120, 53], [134, 48], [131, 42], [125, 40], [122, 31], [120, 23], [108, 21], [98, 24], [92, 28], [80, 31]] },
          { nom: "Mur de Berlin (1961)", forme: "carre", couleur: "#1B1B1B", points: [[13.4, 52.52]] },
          { nom: "Guerre ou crise de la guerre froide (Corée, Vietnam, Cuba)", forme: "etoile", couleur: "#D62828", points: [[127.5, 37.5], [106, 16], [-79.5, 21.5]] },
          { nom: "Conférences du tiers-monde (Bandung 1955, Belgrade 1961)", forme: "triangle", couleur: "#1F8A5B", points: [[107.61, -6.91], [20.46, 44.82]] }
        ] }
    ],
    trous: [
      { titre: "Bipolarisation et tiers-monde", texte: "Après 1947, le monde est organisé en deux [blocs] : l'OTAN autour des États-Unis, le pacte de [Varsovie] autour de l'URSS. En 1961, le [mur] de Berlin coupe la ville en deux. En octobre 1962, la crise des missiles de [Cuba] fait craindre une guerre nucléaire. Les pays nouvellement indépendants se réunissent à [Bandung] en 1955 ; ils forment le [tiers-monde]. La Chine de [Mao] s'affirme face à l'URSS." }
    ],
    capable: [
      "Comparer les modèles des deux superpuissances.",
      "Raconter les grandes crises de la guerre froide (Berlin, Corée, Cuba, Vietnam).",
      "Expliquer comment la décolonisation fait émerger le tiers-monde.",
      "Situer Berlin, Cuba, la Corée, le Vietnam, Bandung, Suez."
    ],
    intrus: [
      { items: ["OTAN", "Plan Marshall", "Doctrine Truman", "Pacte de Varsovie"], intrus: "Pacte de Varsovie", expl: "Le pacte de Varsovie est l'alliance du bloc soviétique ; les trois autres appartiennent au camp américain." },
      { items: ["Nehru", "Nasser", "Sukarno", "Kennedy"], intrus: "Kennedy", expl: "Kennedy est président des États-Unis ; Nehru, Nasser et Sukarno sont des figures du tiers-monde présentes à Bandung." },
      { items: ["Corée", "Vietnam", "Cuba", "Suisse"], intrus: "Suisse", expl: "La Suisse est un pays neutre ; la Corée, le Vietnam et Cuba sont des terrains d'affrontement de la guerre froide." },
      { items: ["Grand Bond en avant", "Révolution culturelle", "Petit Livre rouge", "Perestroïka"], intrus: "Perestroïka", expl: "La perestroïka est la politique de Gorbatchev en URSS (1985) ; les trois autres concernent la Chine de Mao." }
    ],
    ppo: [
      {
        id: "cuba", court: "PPO Crise de Cuba",
        titre: "1962 : la crise des missiles de Cuba",
        question: "Pourquoi la crise de Cuba est-elle le moment où la guerre froide a failli devenir une guerre nucléaire, et comment s'est-elle dénouée ?",
        branches: [
          { titre: "Cuba bascule dans le camp soviétique", points: [
            "En 1959, Fidel Castro renverse le dictateur Batista, allié des États-Unis, et nationalise les entreprises américaines.",
            "En avril 1961, un débarquement d'exilés cubains soutenu par la CIA échoue dans la baie des Cochons.",
            "Castro se rapproche de l'URSS, qui décide d'installer des missiles nucléaires sur l'île, à moins de 200 km de la Floride."
          ] },
          { titre: "Treize jours au bord de la guerre", points: [
            "Le 14 octobre 1962, un avion espion U-2 photographie les rampes de lancement.",
            "Le 22 octobre, Kennedy annonce un blocus naval de Cuba (« quarantaine ») et exige le retrait des missiles.",
            "Les navires soviétiques font route vers Cuba ; le 27 octobre, un U-2 est abattu au-dessus de l'île."
          ] },
          { titre: "Le dénouement", points: [
            "Le 28 octobre, Khrouchtchev annonce le retrait des missiles.",
            "En échange, les États-Unis promettent de ne pas envahir Cuba et retirent secrètement leurs missiles de Turquie."
          ] },
          { titre: "Vers la détente", points: [
            "En 1963, un « téléphone rouge » relie Washington et Moscou ; un traité interdit les essais nucléaires dans l'atmosphère.",
            "En 1968, le traité de non-prolifération nucléaire limite la diffusion de l'arme atomique."
          ] }
        ],
        reperes: [
          { a: "1959-01-01", date: "janvier 1959", txt: "Fidel Castro prend le pouvoir à Cuba." },
          { a: "1961-04-17", date: "avril 1961", txt: "Échec du débarquement de la baie des Cochons." },
          { a: "1962-10-22", date: "22 octobre 1962", txt: "Kennedy annonce le blocus de Cuba." },
          { a: "1962-10-28", date: "28 octobre 1962", txt: "Khrouchtchev annonce le retrait des missiles." },
          { a: "1963-08-05", date: "1963", txt: "Téléphone rouge et traité de Moscou sur les essais nucléaires." }
        ],
        notions: [
          { mot: "Blocus", def: "Encerclement d'un territoire pour empêcher tout ravitaillement ; Kennedy parle de « quarantaine » autour de Cuba." },
          { mot: "Téléphone rouge", def: "Ligne directe installée en 1963 entre la Maison-Blanche et le Kremlin pour éviter une guerre par erreur." }
        ],
        personnages: [
          { nom: "Fidel Castro", dates: "1926-2016", txt: [
            "Avocat cubain qui mène une guérilla dans la Sierra Maestra.",
            "Il prend le pouvoir à Cuba en janvier 1959.",
            "Il s'allie à l'URSS et accepte l'installation de missiles soviétiques en 1962."
          ] }
        ],
        lieux: [
          { nom: "Cuba", lon: -79.5, lat: 21.8, txt: "Île des Caraïbes, à moins de 200 km de la Floride." }
        ],
        pieges: [
          "La crise ne se termine pas par une victoire totale des États-Unis : ils retirent aussi leurs missiles de Turquie.",
          "La crise de Cuba n'ouvre pas une guerre : elle ouvre la détente."
        ],
        mots: ["Castro", "baie des Cochons", "missiles", "U-2", "Kennedy", "blocus", "Khrouchtchev", "téléphone rouge"],
        reponse: "En 1959, Fidel Castro prend le pouvoir à Cuba et se rapproche de l'URSS, surtout après le débarquement manqué de la baie des Cochons, soutenu par la CIA (1961). Khrouchtchev décide d'installer des missiles nucléaires sur l'île, à moins de 200 km des États-Unis. Le 14 octobre 1962, un avion espion les photographie ; le 22, Kennedy impose un blocus naval et exige leur retrait. Pendant treize jours, le monde est au bord de la guerre nucléaire. Le 28 octobre, Khrouchtchev accepte de retirer les missiles, contre la promesse de ne pas envahir Cuba et le retrait secret des missiles américains de Turquie. La peur d'une catastrophe ouvre ensuite la détente (téléphone rouge, 1963)."
      },
      {
        id: "indochine-vietnam", court: "PPO Indochine et Vietnam",
        titre: "Les guerres d'Indochine et du Vietnam",
        question: "Comment une guerre de décolonisation devient-elle un conflit majeur de la guerre froide ?",
        branches: [
          { titre: "La guerre d'Indochine (1946-1954)", points: [
            "Le 2 septembre 1945, Hô Chi Minh proclame l'indépendance du Vietnam ; la France veut rétablir sa domination.",
            "La guerre oppose l'armée française au Viêt-minh, soutenu par la Chine de Mao à partir de 1949 ; les États-Unis financent l'effort français.",
            "Le 7 mai 1954, l'armée française est vaincue à Diên Biên Phu ; les accords de Genève (juillet 1954) coupent le Vietnam en deux au 17ᵉ parallèle."
          ] },
          { titre: "L'engagement américain", points: [
            "Au nom de l'endiguement, les États-Unis soutiennent le Sud-Vietnam contre le Nord communiste et la guérilla du Viêt-cong.",
            "Après l'incident du golfe du Tonkin (1964), ils envoient des troupes : plus de 500 000 soldats en 1968.",
            "Bombardements massifs, napalm : la guerre est très meurtrière pour les civils."
          ] },
          { titre: "Une guerre contestée", points: [
            "L'offensive du Têt (janvier 1968) montre que la guerre ne peut pas être gagnée rapidement.",
            "Aux États-Unis et dans le monde, un fort mouvement pacifiste s'oppose à la guerre."
          ] },
          { titre: "La victoire du Nord", points: [
            "Les accords de Paris (janvier 1973) permettent le retrait américain.",
            "Le 30 avril 1975, Saïgon tombe : le Vietnam est réunifié sous un régime communiste.",
            "Bilan : environ 58 000 soldats américains et entre un et trois millions de Vietnamiens tués selon les estimations."
          ] }
        ],
        reperes: [
          { a: "1945-09-02", date: "2 septembre 1945", txt: "Hô Chi Minh proclame l'indépendance du Vietnam." },
          { a: "1954-05-07", date: "7 mai 1954", txt: "Défaite française à Diên Biên Phu." },
          { a: "1954-07-21", date: "juillet 1954", txt: "Accords de Genève : partage du Vietnam au 17ᵉ parallèle." },
          { a: "1964-08-02", date: "août 1964", txt: "Incident du golfe du Tonkin." },
          { a: "1968-01-30", date: "janvier 1968", txt: "Offensive du Têt." },
          { a: "1973-01-27", date: "janvier 1973", txt: "Accords de Paris : retrait des troupes américaines." },
          { a: "1975-04-30", date: "30 avril 1975", txt: "Chute de Saïgon." }
        ],
        notions: [
          { mot: "Viêt-minh", def: "Mouvement nationaliste et communiste fondé par Hô Chi Minh pour l'indépendance du Vietnam." },
          { mot: "Viêt-cong", def: "Nom donné par ses adversaires à la guérilla communiste du Sud-Vietnam, soutenue par le Nord." },
          { mot: "Théorie des dominos", def: "Idée américaine selon laquelle si un pays devient communiste, ses voisins basculeront à leur tour." }
        ],
        pieges: [
          "Ne pas confondre la guerre d'Indochine (contre la France, 1946-1954) et la guerre du Vietnam (avec les États-Unis, jusqu'en 1975).",
          "Le Vietnam n'est pas un simple conflit local : c'est une guerre de décolonisation devenue une guerre de la guerre froide."
        ],
        mots: ["Hô Chi Minh", "Viêt-minh", "Diên Biên Phu", "accords de Genève", "17ᵉ parallèle", "endiguement", "offensive du Têt", "chute de Saïgon"],
        reponse: "En 1945, Hô Chi Minh proclame l'indépendance du Vietnam, mais la France veut rétablir sa domination : la guerre d'Indochine (1946-1954) oppose l'armée française au Viêt-minh, soutenu par la Chine communiste, tandis que les États-Unis financent la France. Après la défaite de Diên Biên Phu (1954), les accords de Genève coupent le Vietnam au 17ᵉ parallèle. Au nom de l'endiguement, les États-Unis soutiennent le Sud et engagent plus de 500 000 soldats en 1968 contre le Nord et le Viêt-cong. L'offensive du Têt et la contestation pacifiste les poussent à se retirer (accords de Paris, 1973). En 1975, la chute de Saïgon réunifie le pays sous un régime communiste."
      },
      {
        id: "1968", court: "PPO L'année 1968",
        titre: "L'année 1968 dans le monde",
        question: "Pourquoi 1968 est-elle une année de contestations dans le monde entier ?",
        branches: [
          { titre: "Une jeunesse nombreuse et contestataire", points: [
            "Les enfants du baby-boom ont 20 ans ; les étudiants sont de plus en plus nombreux.",
            "Ils contestent la société de consommation, l'autorité, et soutiennent souvent les luttes du tiers-monde."
          ] },
          { titre: "Aux États-Unis", points: [
            "La guerre du Vietnam provoque de grandes manifestations pacifistes sur les campus.",
            "Martin Luther King est assassiné le 4 avril 1968, Robert Kennedy le 6 juin.",
            "Aux Jeux olympiques de Mexico, deux athlètes noirs américains lèvent le poing ganté sur le podium."
          ] },
          { titre: "En France : Mai 68", points: [
            "La révolte étudiante part de Nanterre et de la Sorbonne ; nuit des barricades au Quartier latin (10-11 mai).",
            "Une grève générale paralyse le pays : entre 7 et 10 millions de grévistes selon les estimations ; les accords de Grenelle augmentent le SMIG de 35 %.",
            "De Gaulle dissout l'Assemblée : les gaullistes gagnent largement les élections de juin."
          ] },
          { titre: "Dans le bloc de l'Est et ailleurs", points: [
            "En Tchécoslovaquie, le « printemps de Prague » d'Alexander Dubček veut un « socialisme à visage humain ».",
            "Dans la nuit du 20 au 21 août, les chars du pacte de Varsovie l'écrasent.",
            "Au Mexique, l'armée tire sur des étudiants à Tlatelolco le 2 octobre."
          ] }
        ],
        reperes: [
          { a: "1968-01-05", date: "janvier 1968", txt: "Dubček arrive à la tête du parti communiste tchécoslovaque : début du printemps de Prague." },
          { a: "1968-04-04", date: "4 avril 1968", txt: "Assassinat de Martin Luther King." },
          { a: "1968-05-10", date: "10-11 mai 1968", txt: "Nuit des barricades à Paris." },
          { a: "1968-05-27", date: "27 mai 1968", txt: "Accords de Grenelle." },
          { a: "1968-08-21", date: "21 août 1968", txt: "Les chars du pacte de Varsovie entrent à Prague." },
          { a: "1968-10-02", date: "2 octobre 1968", txt: "Massacre d'étudiants à Tlatelolco, à Mexico." }
        ],
        notions: [
          { mot: "Baby-boom", def: "Forte hausse des naissances après 1945 dans les pays occidentaux." },
          { mot: "Contre-culture", def: "Ensemble de valeurs et de pratiques qui s'opposent à la culture dominante (mouvement hippie, rock, refus de la société de consommation)." },
          { mot: "Printemps de Prague", def: "Tentative de libéralisation du régime communiste tchécoslovaque en 1968, écrasée par les troupes du pacte de Varsovie." }
        ],
        personnages: [
          { nom: "Alexander Dubček", dates: "1921-1992", txt: [
            "Dirigeant communiste slovaque.",
            "En 1968, il veut un « socialisme à visage humain » : liberté de la presse, réformes.",
            "Il est écarté après l'intervention des chars du pacte de Varsovie."
          ] },
          { nom: "Martin Luther King", dates: "1929-1968", txt: [
            "Pasteur baptiste, figure de la lutte non violente pour les droits civiques des Noirs américains.",
            "En 1963, il prononce le discours « I have a dream » à Washington.",
            "Il est assassiné à Memphis le 4 avril 1968."
          ] }
        ],
        pieges: [
          "Mai 68 n'est pas qu'un mouvement étudiant : c'est aussi la plus grande grève ouvrière de l'histoire de France.",
          "1968 ne se limite pas à l'Occident : le bloc de l'Est et l'Amérique latine sont aussi concernés."
        ],
        mots: ["baby-boom", "étudiants", "Vietnam", "Martin Luther King", "Mai 68", "grève générale", "printemps de Prague", "contre-culture"],
        reponse: "En 1968, la jeunesse du baby-boom, de plus en plus scolarisée, conteste l'ordre établi dans de nombreux pays. Aux États-Unis, les étudiants manifestent contre la guerre du Vietnam, et l'assassinat de Martin Luther King en avril provoque des émeutes. En France, la révolte étudiante de mai entraîne une grève générale de 7 à 10 millions de salariés ; les accords de Grenelle augmentent les salaires, puis les gaullistes gagnent les élections de juin. À l'Est, le printemps de Prague veut un « socialisme à visage humain », mais il est écrasé par les chars du pacte de Varsovie en août. Au Mexique, l'armée tire sur les étudiants à Tlatelolco. Partout, 1968 marque une rupture culturelle."
      }
    ]
  },
  {
    id: "tle-h2-c3", n: "Tle", d: "histoire", carte: ["mediterranee", "monde"],
    theme: "Thème 2 · La multiplication des acteurs internationaux dans un monde bipolaire (de 1945 au début des années 1970)",
    num: "Chapitre 6",
    titre: "La France : une nouvelle place dans le monde",
    question: "Comment la France, affaiblie en 1945, redéfinit-elle sa place dans le monde entre construction européenne, décolonisation et nouvelle République ?",
    plan: [
      "La IVᵉ République entre décolonisation, guerre froide et construction européenne",
      "La crise algérienne et la naissance d'un nouveau régime",
      "Les débuts de la Vᵉ République : indépendance nationale et modernisation du pays"
    ],
    cle: "Entre 1946 et 1969, la France perd son empire colonial, s'engage dans la construction européenne et, avec la Vᵉ République du général de Gaulle, cherche à retrouver son rang par une politique d'indépendance nationale.",
    essentiel: [
      "La IVᵉ République (1946-1958) reconstruit le pays et s'ancre dans le camp occidental (OTAN, 1949). Elle lance la construction européenne avec la CECA (1951) et la CEE (traité de Rome, 1957). Mais elle est instable : plus de vingt gouvernements se succèdent en douze ans.",
      "Elle s'enlise dans les guerres coloniales : guerre d'Indochine (1946-1954), guerre d'Algérie à partir de 1954. Le 13 mai 1958, une émeute à Alger fait craindre un coup d'État : la IVᵉ République fait appel au général de Gaulle.",
      "La Constitution de 1958 renforce le pouvoir exécutif ; en 1962, le président est élu au suffrage universel direct. De Gaulle met fin à la guerre d'Algérie (accords d'Évian, 1962) ; l'Afrique subsaharienne devient indépendante en 1960.",
      "De Gaulle veut une France indépendante des deux Grands : bombe atomique (1960), reconnaissance de la Chine populaire (1964), retrait du commandement intégré de l'OTAN (1966). Pendant les Trente Glorieuses, le pays se modernise rapidement."
    ],
    reperes: [
      { a: "1946-10-27", date: "octobre 1946", txt: "Adoption de la Constitution de la IVᵉ République." },
      { a: "1951-04-18", date: "avril 1951", txt: "Traité de Paris : naissance de la CECA." },
      { a: "1954-05-07", date: "7 mai 1954", txt: "Défaite de Diên Biên Phu." },
      { a: "1954-08-30", date: "août 1954", txt: "L'Assemblée nationale rejette la Communauté européenne de défense (CED)." },
      { a: "1954-11-01", date: "1er novembre 1954", txt: "« Toussaint rouge » : début de la guerre d'Algérie." },
      { a: "1956-03-20", date: "1956", txt: "Indépendance du Maroc et de la Tunisie." },
      { a: "1957-03-25", date: "25 mars 1957", txt: "Traité de Rome : naissance de la CEE." },
      { a: "1958-05-13", date: "13 mai 1958", txt: "Émeute à Alger : crise de la IVᵉ République." },
      { a: "1958-10-04", date: "4 octobre 1958", txt: "Promulgation de la Constitution de la Vᵉ République." },
      { a: "1960-02-13", date: "13 février 1960", txt: "Premier essai nucléaire français, dans le Sahara algérien." },
      { a: 1960, date: "1960", txt: "Indépendance des colonies d'Afrique subsaharienne." },
      { a: "1962-03-18", date: "18 mars 1962", txt: "Accords d'Évian ; l'Algérie devient indépendante le 5 juillet." },
      { a: "1962-10-28", date: "octobre 1962", txt: "Référendum : le président sera élu au suffrage universel direct." },
      { a: "1966-03-07", date: "1966", txt: "La France quitte le commandement intégré de l'OTAN." }
    ],
    notions: [
      { mot: "IVᵉ République", def: "Régime parlementaire de la France de 1946 à 1958, marqué par l'instabilité gouvernementale." },
      { mot: "Vᵉ République", def: "Régime politique fondé par la Constitution du 4 octobre 1958, qui renforce le pouvoir exécutif." },
      { mot: "Trente Glorieuses", def: "Période de forte croissance économique des pays occidentaux, de la fin des années 1940 au milieu des années 1970 (expression de Jean Fourastié)." },
      { mot: "CECA", def: "Communauté européenne du charbon et de l'acier, créée en 1951 par six pays." },
      { mot: "CEE", def: "Communauté économique européenne, créée par le traité de Rome en 1957 : un marché commun entre six pays." },
      { mot: "Décolonisation", def: "Processus par lequel les colonies accèdent à l'indépendance." },
      { mot: "Pieds-noirs", def: "Nom donné aux Européens d'Algérie ; environ 800 000 d'entre eux gagnent la métropole en 1962." },
      { mot: "Harkis", def: "Algériens musulmans engagés comme supplétifs aux côtés de l'armée française ; beaucoup sont massacrés en 1962, d'autres gagnent la France." },
      { mot: "Suffrage universel direct", def: "Élection par tous les citoyens ; le président de la République est élu ainsi depuis la réforme de 1962." },
      { mot: "Référendum", def: "Vote par lequel les citoyens répondent par oui ou par non à une question posée par le pouvoir." },
      { mot: "Indépendance nationale", def: "Politique du général de Gaulle : refuser de dépendre des États-Unis ou de l'URSS, notamment grâce à l'arme nucléaire." }
    ],
    personnages: [
      { nom: "Pierre Mendès France", dates: "1907-1982", txt: [
        "Homme politique radical, résistant.",
        "Président du Conseil en 1954-1955, il met fin à la guerre d'Indochine par les accords de Genève.",
        "Il défend une République parlementaire et s'oppose aux institutions de 1958."
      ] },
      { nom: "Robert Schuman", dates: "1886-1963", txt: [
        "Ministre des Affaires étrangères de la IVᵉ République.",
        "Le 9 mai 1950, il propose de mettre en commun le charbon et l'acier de la France et de l'Allemagne.",
        "Il est considéré comme l'un des pères de l'Europe."
      ] },
      { nom: "Jean Monnet", dates: "1888-1979", txt: [
        "Commissaire général au Plan après la guerre.",
        "Il prépare la déclaration du 9 mai 1950.",
        "Il préside la Haute Autorité de la CECA."
      ] },
      { nom: "Michel Debré", dates: "1912-1996", txt: [
        "Résistant et fidèle du général de Gaulle.",
        "Il est le principal rédacteur de la Constitution de 1958.",
        "Il est le premier Premier ministre de la Vᵉ République."
      ] }
    ],
    lieux: [
      { nom: "Paris", lon: 2.35, lat: 48.86, txt: "Capitale ; le traité de Paris y crée la CECA en 1951." },
      { nom: "Rome", lon: 12.5, lat: 41.9, txt: "Ville où est signé le traité qui crée la CEE, le 25 mars 1957." },
      { nom: "Alger", lon: 3.06, lat: 36.75, txt: "Capitale de l'Algérie ; l'émeute du 13 mai 1958 y provoque la chute de la IVᵉ République." },
      { nom: "Sétif", lon: 5.41, lat: 36.19, txt: "Ville d'Algérie où une manifestation nationaliste du 8 mai 1945 est suivie d'une répression très meurtrière." },
      { nom: "Évian", lon: 6.59, lat: 46.4, txt: "Ville de Haute-Savoie où sont signés les accords qui mettent fin à la guerre d'Algérie, le 18 mars 1962." },
      { nom: "Reggane", lon: 0.17, lat: 26.72, txt: "Site du Sahara algérien où la France réalise son premier essai nucléaire en 1960." },
      { nom: "Colombey-les-Deux-Églises", lon: 4.88, lat: 48.22, txt: "Village de Haute-Marne où vit le général de Gaulle." },
      { nom: "Diên Biên Phu", lon: 103.02, lat: 21.39, txt: "Lieu de la défaite française de mai 1954, qui met fin à la guerre d'Indochine." },
      { nom: "Dakar", lon: -17.47, lat: 14.69, txt: "Capitale du Sénégal, indépendant en 1960 comme la plupart des colonies françaises d'Afrique." }
    ],
    trous: [
      { titre: "La France de 1946 à 1969", texte: "La [IVᵉ] République reconstruit le pays et fonde avec ses voisins la [CECA] en 1951, puis la CEE par le traité de [Rome] en 1957. Mais elle s'enlise dans la guerre d'[Algérie]. En 1958, de Gaulle revient au pouvoir et fait adopter une nouvelle [Constitution]. Les accords d'[Évian] mettent fin à la guerre en 1962. Cette même année, le président est élu au suffrage universel [direct]." }
    ],
    capable: [
      "Expliquer les difficultés de la IVᵉ République.",
      "Raconter la guerre d'Algérie et expliquer ses mémoires.",
      "Présenter les institutions de la Vᵉ République.",
      "Expliquer la politique d'indépendance nationale du général de Gaulle."
    ],
    intrus: [
      { items: ["CECA", "CEE", "Traité de Rome", "Pacte de Varsovie"], intrus: "Pacte de Varsovie", expl: "Le pacte de Varsovie est l'alliance militaire du bloc soviétique ; les trois autres sont des étapes de la construction européenne." },
      { items: ["Diên Biên Phu", "Évian", "Toussaint rouge", "Traité de Rome"], intrus: "Traité de Rome", expl: "Le traité de Rome fonde la CEE ; les trois autres sont liés aux guerres de décolonisation." },
      { items: ["Bombe atomique", "Retrait du commandement de l'OTAN", "Reconnaissance de la Chine populaire", "Plan Marshall"], intrus: "Plan Marshall", expl: "Le plan Marshall (1948) est une aide américaine ; les trois autres traduisent l'indépendance nationale voulue par de Gaulle." },
      { items: ["Article 16", "Article 49-3", "Référendum", "Contrat de législature"], intrus: "Contrat de législature", expl: "Le contrat de législature est une idée de Mendès France ; les trois autres sont des outils de la Constitution de 1958." }
    ],
    ppo: [
      {
        id: "algerie", court: "PPO Guerre d'Algérie",
        titre: "La guerre d'Algérie et ses mémoires",
        question: "Pourquoi la guerre d'Algérie a-t-elle laissé des mémoires si nombreuses et si conflictuelles ?",
        branches: [
          { titre: "Une colonie de peuplement", points: [
            "Conquise à partir de 1830, l'Algérie est divisée en départements français.",
            "En 1954, environ un million d'Européens côtoient près de 8,5 millions d'Algériens musulmans, qui n'ont pas les mêmes droits.",
            "La répression de Sétif (mai 1945) radicalise les nationalistes."
          ] },
          { titre: "Une guerre longue et violente (1954-1962)", points: [
            "Le 1er novembre 1954, le FLN lance une série d'attentats : c'est la « Toussaint rouge ».",
            "Le gouvernement envoie le contingent ; l'armée pratique la torture, notamment pendant la bataille d'Alger (1957).",
            "De Gaulle, revenu au pouvoir en 1958, se résout à l'autodétermination ; l'OAS multiplie les attentats pour empêcher l'indépendance."
          ] },
          { titre: "La fin de la guerre", points: [
            "Les accords d'Évian (18 mars 1962) prévoient un cessez-le-feu ; l'Algérie devient indépendante le 5 juillet 1962.",
            "Environ 800 000 pieds-noirs gagnent la métropole ; de nombreux harkis sont massacrés.",
            "Le bilan : environ 25 000 soldats français et plusieurs centaines de milliers d'Algériens tués."
          ] },
          { titre: "Des mémoires multiples", points: [
            "Chaque groupe a sa mémoire : pieds-noirs, harkis, anciens appelés, immigrés algériens ; en Algérie, une mémoire officielle glorifie le FLN.",
            "Longtemps, on parle d'« événements » ; en 1999, la loi reconnaît le terme de « guerre d'Algérie ».",
            "L'État reconnaît peu à peu certains crimes : massacre d'Algériens à Paris le 17 octobre 1961 (2012), mort de Maurice Audin (2018) ; le rapport de Benjamin Stora (2021) propose des gestes de réconciliation."
          ] }
        ],
        reperes: [
          { a: "1945-05-08", date: "8 mai 1945", txt: "Manifestation et répression à Sétif." },
          { a: "1954-11-01", date: "1er novembre 1954", txt: "Toussaint rouge." },
          { a: "1957-01-07", date: "1957", txt: "Bataille d'Alger." },
          { a: "1961-10-17", date: "17 octobre 1961", txt: "Répression sanglante d'une manifestation d'Algériens à Paris." },
          { a: "1962-03-18", date: "18 mars 1962", txt: "Accords d'Évian." },
          { a: "1962-07-05", date: "5 juillet 1962", txt: "Indépendance de l'Algérie." },
          { a: "1999-10-18", date: "1999", txt: "La loi reconnaît officiellement la « guerre d'Algérie »." }
        ],
        notions: [
          { mot: "FLN", def: "Front de libération nationale : mouvement indépendantiste algérien qui déclenche la guerre en 1954." },
          { mot: "OAS", def: "Organisation armée secrète : groupe d'extrême droite qui commet des attentats pour garder l'Algérie française (1961-1962)." },
          { mot: "Mémoire", def: "Souvenir qu'un groupe garde du passé, souvent sélectif et chargé d'émotion ; l'histoire, elle, cherche à établir les faits." }
        ],
        personnages: [
          { nom: "Benjamin Stora", dates: "né en 1950", txt: [
            "Historien né à Constantine, en Algérie.",
            "Spécialiste de la guerre d'Algérie et de ses mémoires.",
            "En 2021, il remet au président de la République un rapport sur la réconciliation des mémoires."
          ] }
        ],
        pieges: [
          "Ne pas confondre l'histoire (établir les faits) et les mémoires (souvenirs des groupes).",
          "Les mémoires de la guerre ne sont pas seulement françaises : en Algérie aussi, la guerre est au cœur de la mémoire nationale."
        ],
        mots: ["colonie de peuplement", "FLN", "Toussaint rouge", "torture", "accords d'Évian", "pieds-noirs", "harkis", "mémoires"],
        reponse: "L'Algérie, colonie de peuplement depuis 1830, compte en 1954 environ un million d'Européens et près de 8,5 millions d'Algériens musulmans privés de l'égalité des droits. Le 1er novembre 1954, le FLN déclenche la guerre. Le conflit est très violent : attentats, torture pratiquée par l'armée, envoi du contingent, puis attentats de l'OAS. Les accords d'Évian (1962) mènent à l'indépendance ; 800 000 pieds-noirs quittent l'Algérie et de nombreux harkis sont massacrés. Chaque groupe garde une mémoire différente, souvent douloureuse : pieds-noirs, harkis, anciens appelés, immigrés algériens. Longtemps tue, la guerre n'est officiellement nommée qu'en 1999, et l'État reconnaît peu à peu certains crimes."
      },
      {
        id: "de-gaulle-pmf", court: "PPO De Gaulle et Mendès France",
        titre: "Charles de Gaulle et Pierre Mendès France, deux conceptions de la République",
        question: "En quoi Charles de Gaulle et Pierre Mendès France incarnent-ils deux conceptions opposées de la République ?",
        branches: [
          { titre: "Deux résistants, deux hommes d'État", points: [
            "De Gaulle dirige la France libre puis le Gouvernement provisoire, qu'il quitte en janvier 1946.",
            "Mendès France, radical, rejoint la France libre ; président du Conseil en 1954-1955, il met fin à la guerre d'Indochine."
          ] },
          { titre: "De Gaulle : un exécutif fort", points: [
            "Dès le discours de Bayeux (16 juin 1946), il réclame un chef de l'État fort, au-dessus des partis.",
            "Il veut un lien direct avec le peuple : référendum, puis élection du président au suffrage universel direct (1962)."
          ] },
          { titre: "Mendès France : une République parlementaire", points: [
            "Il défend un gouvernement responsable devant l'Assemblée, avec un « contrat de législature ».",
            "« Gouverner, c'est choisir » : il veut dire la vérité aux citoyens, par exemple dans ses causeries radiodiffusées.",
            "En 1958, il refuse de voter l'investiture de De Gaulle ; il dénonce le pouvoir personnel dans La République moderne (1962)."
          ] },
          { titre: "Un héritage partagé", points: [
            "La Vᵉ République suit la conception gaullienne : un président au cœur des institutions.",
            "La pensée de Mendès France inspire une gauche réformatrice attachée au rôle du Parlement."
          ] }
        ],
        reperes: [
          { a: "1946-06-16", date: "16 juin 1946", txt: "Discours de Bayeux du général de Gaulle." },
          { a: "1954-06-18", b: "1955-02-05", date: "1954-1955", txt: "Pierre Mendès France président du Conseil." },
          { a: "1958-06-01", date: "1er juin 1958", txt: "De Gaulle est investi ; Mendès France vote contre." },
          { a: "1962-10-28", date: "octobre 1962", txt: "Référendum sur l'élection du président au suffrage universel direct." }
        ],
        notions: [
          { mot: "Régime parlementaire", def: "Régime où le gouvernement est responsable devant le Parlement, qui peut le renverser." },
          { mot: "Pouvoir personnel", def: "Critique adressée à de Gaulle par ses adversaires : un pouvoir trop concentré entre les mains d'un seul homme." }
        ],
        pieges: [
          "Ne pas présenter Mendès France comme un adversaire de la Résistance : il est lui aussi un résistant.",
          "Le désaccord porte sur les institutions, pas sur l'attachement à la République."
        ],
        mots: ["discours de Bayeux", "exécutif fort", "référendum", "suffrage universel direct", "régime parlementaire", "contrat de législature", "Gouverner c'est choisir", "pouvoir personnel"],
        reponse: "Tous deux résistants, de Gaulle et Mendès France défendent la République mais pas de la même manière. Pour de Gaulle, qui l'expose dès le discours de Bayeux (1946), la France a besoin d'un exécutif fort, d'un chef de l'État au-dessus des partis, en lien direct avec le peuple par le référendum et, à partir de 1962, par l'élection au suffrage universel direct. Mendès France, président du Conseil en 1954-1955, défend au contraire une République parlementaire, où le gouvernement est responsable devant l'Assemblée et s'engage sur un « contrat de législature ». En 1958, il vote contre l'investiture de De Gaulle et dénonce ensuite le pouvoir personnel. La Vᵉ République suit la conception gaullienne."
      },
      {
        id: "constitution-1958", court: "PPO Constitution de 1958",
        titre: "La Constitution de 1958",
        question: "Comment la Constitution de 1958 renforce-t-elle le pouvoir exécutif ?",
        branches: [
          { titre: "Une Constitution née d'une crise", points: [
            "Le 13 mai 1958, une émeute à Alger fait craindre un coup d'État militaire.",
            "Le 1er juin, de Gaulle est investi et obtient le droit de préparer une nouvelle Constitution, rédigée surtout par Michel Debré.",
            "Elle est approuvée par référendum le 28 septembre 1958 par près de 80 % des votants, et promulguée le 4 octobre."
          ] },
          { titre: "Un président au cœur des institutions", points: [
            "Élu pour sept ans, d'abord par un collège d'environ 80 000 grands électeurs, puis au suffrage universel direct après 1962.",
            "Il nomme le Premier ministre, peut dissoudre l'Assemblée, recourir au référendum et, en cas de crise grave, exercer les pleins pouvoirs (article 16)."
          ] },
          { titre: "Un Parlement encadré", points: [
            "Le domaine de la loi est limité (article 34).",
            "Le gouvernement peut faire adopter un texte sans vote, sauf motion de censure (article 49-3).",
            "Un Conseil constitutionnel vérifie que les lois respectent la Constitution."
          ] },
          { titre: "Une Constitution qui dure", points: [
            "La réforme de 1962 renforce encore le président : de Gaulle est réélu au suffrage universel en 1965.",
            "Elle a été révisée de nombreuses fois, par exemple pour le quinquennat (2000)."
          ] }
        ],
        reperes: [
          { a: "1958-05-13", date: "13 mai 1958", txt: "Émeute à Alger." },
          { a: "1958-09-28", date: "28 septembre 1958", txt: "Référendum : la Constitution est approuvée." },
          { a: "1958-10-04", date: "4 octobre 1958", txt: "Promulgation de la Constitution." },
          { a: "1962-10-28", date: "28 octobre 1962", txt: "Référendum sur l'élection du président au suffrage universel direct." },
          { a: "1965-12-19", date: "décembre 1965", txt: "Première élection présidentielle au suffrage universel direct de la Vᵉ République." }
        ],
        notions: [
          { mot: "Constitution", def: "Texte qui fixe l'organisation des pouvoirs et les droits des citoyens." },
          { mot: "Article 16", def: "Article qui permet au président d'exercer des pouvoirs exceptionnels en cas de menace grave." },
          { mot: "Conseil constitutionnel", def: "Institution qui vérifie que les lois respectent la Constitution." }
        ],
        pieges: [
          "En 1958, le président n'est pas encore élu au suffrage universel direct : cela date de la réforme de 1962.",
          "La Vᵉ République reste un régime parlementaire : le gouvernement est responsable devant l'Assemblée."
        ],
        mots: ["13 mai 1958", "Michel Debré", "référendum", "exécutif fort", "dissolution", "article 16", "49-3", "suffrage universel direct"],
        reponse: "Née de la crise du 13 mai 1958, la Constitution est rédigée sous l'autorité du général de Gaulle, surtout par Michel Debré, puis approuvée par référendum par près de 80 % des votants. Elle renforce le pouvoir exécutif : le président, élu pour sept ans, nomme le Premier ministre, peut dissoudre l'Assemblée, recourir au référendum et, en cas de crise grave, exercer des pouvoirs exceptionnels (article 16). Le Parlement est encadré : domaine de la loi limité, article 49-3, contrôle du Conseil constitutionnel. La réforme de 1962, qui fait élire le président au suffrage universel direct, accroît encore son autorité. Cette Constitution, plusieurs fois révisée, est toujours en vigueur."
      }
    ]
  },
  {
    id: "tle-h3-c1", n: "Tle", d: "histoire", carte: ["europe-large", "monde"],
    theme: "Thème 3 · Les remises en cause économiques, politiques et sociales des années 1970 à 1991",
    num: "Chapitre 7",
    titre: "La modification des grands équilibres économiques et politiques mondiaux",
    question: "Comment la crise économique, les nouveaux modèles politiques et l'effondrement du bloc soviétique transforment-ils le monde entre 1973 et 1991 ?",
    plan: [
      "Les chocs pétroliers : la crise économique occidentale et une nouvelle donne économique",
      "Libéralisation, dérégulation et socialisme de marché",
      "La révolution islamique d'Iran et la montée de l'islamisme",
      "La démocratisation de l'Europe méridionale et les élargissements de la CEE",
      "L'effondrement du bloc soviétique et de l'URSS"
    ],
    cle: "De 1973 à 1991, la fin de la croissance des Trente Glorieuses, le tournant néolibéral, la montée de l'islamisme politique et la chute du communisme en Europe bouleversent les grands équilibres du monde.",
    essentiel: [
      "En octobre 1973, pendant la guerre du Kippour, les pays arabes de l'OPEP font quadrupler le prix du pétrole ; en 1979, la révolution iranienne provoque un second choc. Les pays occidentaux connaissent la « stagflation » : faible croissance, forte inflation et chômage de masse.",
      "Face à la crise, Margaret Thatcher (1979) et Ronald Reagan (1981) rompent avec l'État-providence : privatisations, dérégulation, baisse des impôts. En Chine, Deng Xiaoping ouvre l'économie au marché à partir de 1978 tout en gardant le parti unique : c'est le « socialisme de marché ».",
      "En Iran, la révolution de 1979 renverse le shah et installe une république islamique dirigée par l'ayatollah Khomeyni : l'islamisme devient un acteur politique et international. La même année, l'URSS envahit l'Afghanistan.",
      "La démocratie progresse : chute des dictatures en Grèce et au Portugal (1974), transition en Espagne après la mort de Franco (1975) ; ces pays rejoignent la CEE (1981, 1986). À l'Est, Gorbatchev lance des réformes (1985), mais les démocraties populaires s'effondrent en 1989 et l'URSS disparaît en décembre 1991."
    ],
    reperes: [
      { a: "1971-08-15", date: "août 1971", txt: "Nixon met fin à la convertibilité du dollar en or : fin du système de Bretton Woods." },
      { a: "1973-10-16", date: "octobre 1973", txt: "Premier choc pétrolier, pendant la guerre du Kippour." },
      { a: "1974-04-25", date: "25 avril 1974", txt: "Révolution des Œillets au Portugal." },
      { a: "1974-07-24", date: "juillet 1974", txt: "Chute de la dictature des colonels en Grèce." },
      { a: "1975-11-20", date: "novembre 1975", txt: "Mort de Franco : début de la transition démocratique en Espagne." },
      { a: "1978-12-18", date: "décembre 1978", txt: "Deng Xiaoping lance la politique de réforme et d'ouverture en Chine." },
      { a: "1979-02-11", date: "février 1979", txt: "Révolution islamique en Iran." },
      { a: "1979-05-04", date: "mai 1979", txt: "Margaret Thatcher devient Première ministre du Royaume-Uni." },
      { a: "1979-12-27", date: "décembre 1979", txt: "L'URSS envahit l'Afghanistan." },
      { a: "1980-08-31", date: "août 1980", txt: "Accords de Gdańsk : naissance du syndicat libre Solidarność en Pologne." },
      { a: "1981-01-20", date: "janvier 1981", txt: "Ronald Reagan devient président des États-Unis." },
      { a: "1985-03-11", date: "mars 1985", txt: "Mikhaïl Gorbatchev arrive à la tête de l'URSS." },
      { a: "1986-02-17", date: "1986", txt: "Acte unique européen ; l'Espagne et le Portugal entrent dans la CEE." },
      { a: "1989-11-09", date: "9 novembre 1989", txt: "Chute du mur de Berlin." },
      { a: "1991-12-26", date: "26 décembre 1991", txt: "Dissolution de l'URSS." }
    ],
    notions: [
      { mot: "Choc pétrolier", def: "Hausse brutale du prix du pétrole (1973, 1979) qui déstabilise les économies des pays importateurs." },
      { mot: "OPEP", def: "Organisation des pays exportateurs de pétrole, créée en 1960 ; elle impose la hausse des prix en 1973." },
      { mot: "Stagflation", def: "Situation où une faible croissance (stagnation) s'accompagne d'une forte inflation." },
      { mot: "Néolibéralisme", def: "Doctrine qui veut réduire le rôle de l'État dans l'économie : privatisations, dérégulation, baisse des impôts et des dépenses sociales." },
      { mot: "Dérégulation", def: "Suppression des règles qui encadrent l'économie, en particulier la finance." },
      { mot: "Privatisation", def: "Vente par l'État d'une entreprise publique à des actionnaires privés." },
      { mot: "Socialisme de marché", def: "Modèle chinois lancé par Deng Xiaoping : ouverture à l'économie de marché sous le contrôle du parti communiste unique." },
      { mot: "Islamisme", def: "Idéologie politique qui veut organiser l'État et la société selon une lecture rigoriste de l'islam." },
      { mot: "Transition démocratique", def: "Passage d'une dictature à une démocratie (Portugal, Grèce, Espagne dans les années 1970)." },
      { mot: "Perestroïka", def: "« Restructuration » : réformes économiques lancées par Gorbatchev en URSS à partir de 1985." },
      { mot: "Glasnost", def: "« Transparence » : politique de Gorbatchev qui autorise la critique et une certaine liberté d'expression." },
      { mot: "Dissident", def: "Personne qui s'oppose ouvertement à un régime autoritaire, en particulier dans le bloc soviétique." }
    ],
    personnages: [
      { nom: "Margaret Thatcher", dates: "1925-2013", txt: [
        "Dirigeante du Parti conservateur britannique.",
        "Première ministre de 1979 à 1990, surnommée la « Dame de fer ».",
        "Elle privatise de nombreuses entreprises et affronte les mineurs en grève (1984-1985)."
      ] },
      { nom: "Mikhaïl Gorbatchev", dates: "1931-2022", txt: [
        "Secrétaire général du parti communiste de l'URSS à partir de 1985.",
        "Il lance la perestroïka et la glasnost, et retire l'Armée rouge d'Afghanistan.",
        "Il laisse tomber les régimes communistes d'Europe de l'Est en 1989 ; il reçoit le prix Nobel de la paix en 1990."
      ] },
      { nom: "Lech Wałęsa", dates: "né en 1943", txt: [
        "Électricien des chantiers navals de Gdańsk.",
        "En 1980, il fonde le premier syndicat libre du bloc soviétique, Solidarność.",
        "Prix Nobel de la paix en 1983, il devient président de la Pologne en 1990."
      ] },
      { nom: "Juan Carlos Iᵉʳ", dates: "né en 1938", txt: [
        "Désigné par Franco pour lui succéder.",
        "Devenu roi d'Espagne en 1975, il accompagne la transition vers la démocratie.",
        "En 1981, il fait échouer une tentative de coup d'État militaire."
      ] }
    ],
    lieux: [
      { nom: "Lisbonne", lon: -9.14, lat: 38.72, txt: "Capitale du Portugal, où la révolution des Œillets renverse la dictature en avril 1974." },
      { nom: "Athènes", lon: 23.73, lat: 37.98, txt: "Capitale de la Grèce, où la dictature des colonels tombe en 1974." },
      { nom: "Madrid", lon: -3.7, lat: 40.42, txt: "Capitale de l'Espagne, où la démocratie est rétablie après la mort de Franco (1975)." },
      { nom: "Londres", lon: -0.13, lat: 51.51, txt: "Capitale du Royaume-Uni de Margaret Thatcher ; la City est déréglementée en 1986." },
      { nom: "Gdańsk", lon: 18.65, lat: 54.35, txt: "Port polonais où naît le syndicat Solidarność en 1980." },
      { nom: "Berlin", lon: 13.4, lat: 52.52, txt: "Ville où le mur tombe le 9 novembre 1989." },
      { nom: "Moscou", lon: 37.62, lat: 55.75, txt: "Capitale de l'URSS, où échoue le putsch d'août 1991 contre Gorbatchev." },
      { nom: "Téhéran", lon: 51.39, lat: 35.69, fond: "monde", txt: "Capitale de l'Iran, où triomphe la révolution islamique en 1979." },
      { nom: "Kaboul", lon: 69.17, lat: 34.53, txt: "Capitale de l'Afghanistan, envahi par l'Armée rouge de 1979 à 1989." },
      { nom: "Washington", lon: -77.04, lat: 38.91, txt: "Capitale des États-Unis de Ronald Reagan." },
      { nom: "Shenzhen", lon: 114.06, lat: 22.54, txt: "Première zone économique spéciale chinoise (1980), ouverte aux capitaux étrangers." },
      { nom: "Riyad", lon: 46.72, lat: 24.71, txt: "Capitale de l'Arabie saoudite, premier exportateur de pétrole de l'OPEP." }
    ],
    graphiques: [
      { id: "prix-petrole", type: "courbes", titre: "Le prix du baril de pétrole (1970-1990, en dollars courants)", unite: "dollars",
        source: "BP Statistical Review of World Energy (moyennes annuelles arrondies)",
        x: [1970, 1972, 1974, 1976, 1978, 1980, 1982, 1984, 1986, 1988, 1990],
        series: [{ nom: "Prix du baril", valeurs: [1.8, 2.5, 11.6, 12.8, 14, 36.8, 33, 28.8, 14.4, 14.9, 23.7] }],
        questions: [
          { q: "Quels événements expliquent les deux hausses brutales ?", r: "Le premier choc pétrolier (1973) et la révolution iranienne (1979)", faux: ["La crise de 1929 et la Seconde Guerre mondiale", "La chute du mur de Berlin et la fin de l'URSS", "Le plan Marshall et la guerre de Corée"], expl: "En 1973, l'OPEP quadruple le prix du pétrole ; en 1979-1980, la révolution iranienne puis la guerre Iran-Irak le font tripler." }
        ] }
    ],
    trous: [
      { titre: "1973-1991 : un monde bouleversé", texte: "En 1973, le premier [choc pétrolier] met fin aux Trente Glorieuses. Pour sortir de la crise, Margaret [Thatcher] et Ronald [Reagan] mènent des politiques néolibérales. En Chine, [Deng Xiaoping] ouvre l'économie au marché. En 1979, la révolution [iranienne] installe une république islamique. En 1985, [Gorbatchev] lance la perestroïka ; le mur de [Berlin] tombe en 1989 et l'URSS disparaît en 1991." }
    ],
    capable: [
      "Expliquer les conséquences des chocs pétroliers.",
      "Définir le néolibéralisme et le socialisme de marché.",
      "Expliquer la révolution iranienne et la montée de l'islamisme.",
      "Raconter l'effondrement du bloc soviétique (1989-1991)."
    ],
    intrus: [
      { items: ["Thatcher", "Reagan", "Deng Xiaoping", "Keynes"], intrus: "Keynes", expl: "Keynes défend l'intervention de l'État ; les trois autres ouvrent davantage leur économie au marché à partir de la fin des années 1970." },
      { items: ["Portugal", "Grèce", "Espagne", "Suède"], intrus: "Suède", expl: "La Suède est une démocratie ancienne ; le Portugal, la Grèce et l'Espagne sortent de la dictature dans les années 1970." },
      { items: ["Perestroïka", "Glasnost", "Solidarność", "New Deal"], intrus: "New Deal", expl: "Le New Deal est la politique de Roosevelt dans les années 1930 ; les trois autres concernent le bloc soviétique des années 1980." },
      { items: ["Privatisation", "Dérégulation", "Baisse des impôts", "Nationalisation"], intrus: "Nationalisation", expl: "La nationalisation renforce l'État ; les trois autres sont des mesures néolibérales." }
    ],
    ppo: [
      {
        id: "iran", court: "Zoom · Révolution iranienne",
        titre: "Zoom (hors points de passage) : 1979, la révolution islamique d'Iran et le rejet du modèle occidental",
        question: "Pourquoi la révolution iranienne de 1979 est-elle un rejet du modèle occidental, et quelles en sont les conséquences internationales ?",
        branches: [
          { titre: "L'Iran du shah", points: [
            "Le shah Mohammad Reza Pahlavi, allié des États-Unis, modernise le pays de façon autoritaire (« révolution blanche », 1963).",
            "La richesse pétrolière profite surtout à une minorité ; la police politique (Savak) réprime les opposants.",
            "Le clergé chiite et une partie de la population rejettent cette occidentalisation."
          ] },
          { titre: "La révolution de 1978-1979", points: [
            "En 1978, d'immenses manifestations réunissent religieux, étudiants, bazaris et ouvriers.",
            "Le shah quitte l'Iran le 16 janvier 1979 ; l'ayatollah Khomeyni rentre d'exil le 1er février.",
            "Le régime tombe le 11 février ; un référendum proclame la République islamique en avril 1979."
          ] },
          { titre: "Le rejet de l'Occident", points: [
            "Le pouvoir suprême revient à un religieux, le Guide ; la charia s'applique, le voile devient obligatoire.",
            "Les États-Unis sont dénoncés comme le « Grand Satan » ; des étudiants prennent en otage le personnel de l'ambassade américaine pendant 444 jours (1979-1981)."
          ] },
          { titre: "Des conséquences mondiales", points: [
            "Second choc pétrolier ; guerre Iran-Irak (1980-1988), qui fait plusieurs centaines de milliers de morts.",
            "L'Iran veut exporter sa révolution (soutien au Hezbollah libanais) et rivalise avec l'Arabie saoudite.",
            "L'islamisme devient un acteur majeur des relations internationales."
          ] }
        ],
        reperes: [
          { a: "1963-01-26", date: "1963", txt: "« Révolution blanche » du shah." },
          { a: "1979-01-16", date: "16 janvier 1979", txt: "Le shah quitte l'Iran." },
          { a: "1979-02-01", date: "1er février 1979", txt: "Retour de l'ayatollah Khomeyni." },
          { a: "1979-04-01", date: "avril 1979", txt: "Proclamation de la République islamique." },
          { a: "1979-11-04", b: "1981-01-20", date: "1979-1981", txt: "Prise d'otages à l'ambassade des États-Unis à Téhéran." },
          { a: "1980-09-22", b: "1988-08-20", date: "1980-1988", txt: "Guerre Iran-Irak." }
        ],
        notions: [
          { mot: "Chiisme", def: "Branche minoritaire de l'islam, majoritaire en Iran ; son clergé est très hiérarchisé (ayatollahs)." },
          { mot: "République islamique", def: "Régime fondé en Iran en 1979 : les institutions sont soumises à l'autorité d'un Guide religieux." }
        ],
        personnages: [
          { nom: "Rouhollah Khomeyni", dates: "1902-1989", txt: [
            "Haut dignitaire religieux chiite, opposant au shah.",
            "Exilé pendant quinze ans, en Turquie, en Irak puis en France, à Neauphle-le-Château.",
            "Il rentre en Iran en février 1979 et devient le Guide de la République islamique."
          ] }
        ],
        pieges: [
          "La révolution n'est pas au départ seulement religieuse : elle réunit des opposants très divers, que les islamistes éliminent ensuite.",
          "Ne pas confondre islam (une religion) et islamisme (une idéologie politique)."
        ],
        mots: ["shah", "occidentalisation", "Khomeyni", "République islamique", "Grand Satan", "prise d'otages", "second choc pétrolier", "islamisme"],
        reponse: "Dans les années 1960-1970, le shah d'Iran, allié des États-Unis, modernise son pays de façon autoritaire, tandis que la rente pétrolière profite à une minorité. En 1978, une immense contestation réunit religieux, étudiants et commerçants ; le shah s'enfuit en janvier 1979 et l'ayatollah Khomeyni, rentré d'exil, fait proclamer une République islamique. Le nouveau régime rejette le modèle occidental : il impose la charia et le voile, dénonce les États-Unis comme le « Grand Satan » et soutient la prise d'otages de l'ambassade américaine (1979-1981). La révolution provoque le second choc pétrolier, la guerre Iran-Irak (1980-1988) et fait de l'islamisme un acteur international."
      },
      {
        id: "reagan-deng", court: "PPO Reagan et Deng Xiaoping",
        titre: "Ronald Reagan et Deng Xiaoping : deux acteurs majeurs d'un nouveau capitalisme",
        question: "Comment Ronald Reagan et Deng Xiaoping, que tout oppose, contribuent-ils à l'essor d'un nouveau capitalisme mondial ?",
        branches: [
          { titre: "La fin du modèle des Trente Glorieuses", points: [
            "Après les chocs pétroliers, les politiques keynésiennes ne parviennent plus à combattre à la fois l'inflation et le chômage.",
            "Des économistes, comme Milton Friedman, prônent le retour au marché."
          ] },
          { titre: "Reagan : le néolibéralisme américain", points: [
            "Président de 1981 à 1989 : « L'État n'est pas la solution à notre problème ; l'État est le problème » (discours d'investiture).",
            "Baisse des impôts, dérégulation, réduction des dépenses sociales ; mais hausse des dépenses militaires face à l'URSS.",
            "La croissance repart, mais les inégalités et le déficit public se creusent."
          ] },
          { titre: "Deng : le socialisme de marché chinois", points: [
            "Maître de la Chine à partir de 1978, il lance les « quatre modernisations » et la décollectivisation des terres.",
            "Des zones économiques spéciales, comme Shenzhen (1980), s'ouvrent aux capitaux étrangers.",
            "Mais le parti unique garde le pouvoir : en juin 1989, la contestation de la place Tian'anmen est écrasée."
          ] },
          { titre: "Un nouveau capitalisme mondialisé", points: [
            "Les capitaux circulent plus librement ; la finance se développe.",
            "La Chine devient peu à peu l'« atelier du monde » et s'intègre à la mondialisation."
          ] }
        ],
        reperes: [
          { a: "1978-12-18", date: "décembre 1978", txt: "Début de la politique de réforme et d'ouverture de Deng Xiaoping." },
          { a: "1980-08-26", date: "1980", txt: "Création de la zone économique spéciale de Shenzhen." },
          { a: "1981-01-20", date: "20 janvier 1981", txt: "Investiture de Ronald Reagan." },
          { a: "1989-06-04", date: "4 juin 1989", txt: "Répression de la place Tian'anmen à Pékin." }
        ],
        notions: [
          { mot: "Zone économique spéciale", def: "Territoire chinois ouvert aux investissements étrangers, avec des règles fiscales avantageuses." },
          { mot: "Reaganomics", def: "Nom donné à la politique économique de Reagan : baisse des impôts, dérégulation, réduction du rôle de l'État." }
        ],
        personnages: [
          { nom: "Ronald Reagan", dates: "1911-2004", txt: [
            "Ancien acteur de cinéma, gouverneur de Californie.",
            "Président républicain des États-Unis de 1981 à 1989.",
            "Il mène une politique néolibérale et relance la course aux armements contre l'« empire du mal »."
          ] },
          { nom: "Deng Xiaoping", dates: "1904-1997", txt: [
            "Dirigeant communiste chinois écarté pendant la Révolution culturelle.",
            "À partir de 1978, il ouvre la Chine à l'économie de marché.",
            "En 1989, il fait réprimer les manifestants de la place Tian'anmen."
          ] }
        ],
        pieges: [
          "Deng Xiaoping n'abandonne pas le communisme politique : le parti unique reste au pouvoir.",
          "Reagan ne réduit pas toutes les dépenses de l'État : les dépenses militaires augmentent fortement."
        ],
        mots: ["néolibéralisme", "Reagan", "baisse des impôts", "dérégulation", "Deng Xiaoping", "socialisme de marché", "zones économiques spéciales", "Tian'anmen"],
        reponse: "Après les chocs pétroliers, le modèle keynésien des Trente Glorieuses est remis en cause. Aux États-Unis, Ronald Reagan, président de 1981 à 1989, affirme que « l'État est le problème » : il baisse les impôts, déréglemente l'économie et réduit les dépenses sociales, tout en augmentant les dépenses militaires. En Chine, Deng Xiaoping lance à partir de 1978 le « socialisme de marché » : décollectivisation, zones économiques spéciales ouvertes aux capitaux étrangers comme Shenzhen, mais maintien du parti unique, qui réprime la contestation de Tian'anmen en 1989. Par des voies opposées, ils favorisent l'essor d'un capitalisme mondialisé dont la Chine devient l'atelier."
      },
      {
        id: "1989", court: "PPO L'année 1989",
        titre: "L'année 1989 dans le monde",
        question: "Pourquoi 1989 est-elle une année de bouleversements dans le monde ?",
        branches: [
          { titre: "Une URSS en crise", points: [
            "L'économie soviétique s'essouffle ; la guerre d'Afghanistan s'achève par un retrait en février 1989.",
            "Gorbatchev renonce à intervenir militairement dans les démocraties populaires."
          ] },
          { titre: "L'effondrement des démocraties populaires", points: [
            "En Pologne, Solidarność gagne les élections semi-libres de juin 1989 ; un non-communiste dirige le gouvernement en août.",
            "La Hongrie ouvre sa frontière avec l'Autriche ; le 9 novembre, le mur de Berlin tombe.",
            "« Révolution de velours » en Tchécoslovaquie (Václav Havel élu président en décembre) ; en Roumanie, Ceaușescu est renversé et exécuté (25 décembre)."
          ] },
          { titre: "Ailleurs dans le monde", points: [
            "En Chine, le régime écrase la contestation de la place Tian'anmen (4 juin).",
            "En Afrique du Sud, Frederik de Klerk devient président et engage la fin de l'apartheid (Mandela libéré en février 1990).",
            "Au Chili, une élection libre (décembre 1989) met fin à la dictature de Pinochet, qui quitte le pouvoir en mars 1990."
          ] },
          { titre: "La fin d'un monde", points: [
            "Au sommet de Malte (décembre 1989), Bush et Gorbatchev évoquent la fin de la guerre froide.",
            "L'Allemagne est réunifiée le 3 octobre 1990 ; l'URSS disparaît en décembre 1991."
          ] }
        ],
        reperes: [
          { a: "1989-02-15", date: "février 1989", txt: "Fin du retrait soviétique d'Afghanistan." },
          { a: "1989-06-04", date: "4 juin 1989", txt: "Massacre de la place Tian'anmen ; le même jour, élections en Pologne." },
          { a: "1989-11-09", date: "9 novembre 1989", txt: "Chute du mur de Berlin." },
          { a: "1989-12-02", date: "décembre 1989", txt: "Sommet de Malte entre Bush et Gorbatchev." },
          { a: "1989-12-25", date: "25 décembre 1989", txt: "Exécution de Ceaușescu en Roumanie." },
          { a: "1990-10-03", date: "3 octobre 1990", txt: "Réunification de l'Allemagne." }
        ],
        notions: [
          { mot: "Révolution de velours", def: "Chute pacifique du régime communiste en Tchécoslovaquie, en novembre-décembre 1989." },
          { mot: "Doctrine Brejnev", def: "Principe selon lequel l'URSS pouvait intervenir militairement dans les pays du bloc ; Gorbatchev y renonce." }
        ],
        personnages: [
          { nom: "Václav Havel", dates: "1936-2011", txt: [
            "Écrivain et dramaturge tchèque, dissident emprisonné par le régime communiste.",
            "Il anime la « révolution de velours » en 1989.",
            "Il est élu président de la Tchécoslovaquie en décembre 1989."
          ] }
        ],
        lieux: [
          { nom: "Pékin", lon: 116.4, lat: 39.9, txt: "Capitale de la Chine, où la contestation de la place Tian'anmen est écrasée le 4 juin 1989." },
          { nom: "Prague", lon: 14.42, lat: 50.08, txt: "Capitale de la Tchécoslovaquie, cœur de la révolution de velours." },
          { nom: "Bucarest", lon: 26.1, lat: 44.43, txt: "Capitale de la Roumanie, où Ceaușescu est renversé en décembre 1989." }
        ],
        pieges: [
          "1989 n'est pas seulement la chute du mur de Berlin : c'est un bouleversement mondial (Chine, Afrique du Sud, Chili).",
          "L'URSS ne disparaît pas en 1989, mais en décembre 1991."
        ],
        mots: ["Gorbatchev", "Solidarność", "mur de Berlin", "révolution de velours", "Ceaușescu", "Tian'anmen", "fin de l'apartheid", "fin de la guerre froide"],
        reponse: "En 1989, l'URSS de Gorbatchev, affaiblie par la crise économique et la guerre d'Afghanistan, renonce à intervenir dans les démocraties populaires. Celles-ci s'effondrent en quelques mois : victoire de Solidarność en Pologne, ouverture de la frontière hongroise, chute du mur de Berlin le 9 novembre, révolution de velours en Tchécoslovaquie, renversement de Ceaușescu en Roumanie. Ailleurs, les évolutions sont contrastées : la Chine écrase la contestation de Tian'anmen, l'Afrique du Sud engage la fin de l'apartheid, le Chili sort de la dictature de Pinochet. La guerre froide prend fin : l'Allemagne est réunifiée en 1990 et l'URSS disparaît en 1991."
      }
    ]
  },
  {
    id: "tle-h3-c2", n: "Tle", d: "histoire", carte: "france",
    theme: "Thème 3 · Les remises en cause économiques, politiques et sociales des années 1970 à 1991",
    num: "Chapitre 8",
    titre: "Un tournant social, politique et culturel, la France de 1974 à 1988",
    question: "Comment la société française se transforme-t-elle entre 1974 et 1988, dans un contexte de crise économique et d'alternance politique ?",
    plan: [
      "L'alternance politique avec l'élection de François Mitterrand",
      "Une société en mutation : femmes, jeunes, immigration",
      "Les transformations de la culture et de l'audiovisuel"
    ],
    cle: "De 1974 à 1988, malgré la crise et le chômage de masse, la France connaît de grandes réformes de société (majorité à 18 ans, IVG, abolition de la peine de mort), la première alternance de la Vᵉ République (1981) et la première cohabitation (1986).",
    essentiel: [
      "Élu en 1974, Valéry Giscard d'Estaing veut une « société libérale avancée » : majorité à 18 ans, loi Veil sur l'IVG, divorce par consentement mutuel, collège unique (1975). Mais la crise s'installe : le chômage dépasse 1,5 million de personnes en 1980.",
      "Le 10 mai 1981, François Mitterrand est élu : c'est la première alternance de la Vᵉ République. La gauche abolit la peine de mort, nationalise de grandes entreprises, décentralise (lois Defferre, 1982), abaisse la retraite à 60 ans ; mais elle doit adopter la « rigueur » en 1983. En 1986, la droite gagne les législatives : c'est la première cohabitation.",
      "La société change : les femmes travaillent davantage et conquièrent de nouveaux droits ; les jeunes sont scolarisés plus longtemps (objectif de 80 % d'une génération au niveau du bac en 1985). L'immigration de travail est suspendue en 1974 ; la Marche pour l'égalité et contre le racisme (1983) dénonce les discriminations, tandis que le Front national progresse.",
      "La culture se transforme : libération des ondes avec les radios libres (1981), chaînes privées (Canal+ en 1984, privatisation de TF1 en 1987), politique culturelle de Jack Lang (Fête de la musique, 1982) ; les cultures populaires, comme le hip-hop, se diffusent."
    ],
    reperes: [
      { a: "1974-05-19", date: "mai 1974", txt: "Élection de Valéry Giscard d'Estaing." },
      { a: "1974-07-05", date: "juillet 1974", txt: "La majorité passe de 21 à 18 ans ; l'immigration de travail est suspendue." },
      { a: "1975-01-17", date: "17 janvier 1975", txt: "Loi Veil sur l'interruption volontaire de grossesse." },
      { a: "1975-07-11", date: "juillet 1975", txt: "Loi Haby : création du collège unique ; divorce par consentement mutuel." },
      { a: "1981-05-10", date: "10 mai 1981", txt: "Élection de François Mitterrand : première alternance de la Vᵉ République." },
      { a: "1981-10-09", date: "9 octobre 1981", txt: "Loi abolissant la peine de mort." },
      { a: "1982-03-02", date: "mars 1982", txt: "Loi Defferre sur la décentralisation." },
      { a: "1982-06-21", date: "21 juin 1982", txt: "Première Fête de la musique." },
      { a: "1983-03-25", date: "mars 1983", txt: "Tournant de la rigueur." },
      { a: "1983-12-03", date: "3 décembre 1983", txt: "Arrivée à Paris de la Marche pour l'égalité et contre le racisme." },
      { a: "1986-03-20", date: "mars 1986", txt: "Première cohabitation : Jacques Chirac Premier ministre." },
      { a: "1988-05-08", date: "mai 1988", txt: "Réélection de François Mitterrand." },
      { a: "1988-12-01", date: "décembre 1988", txt: "Création du revenu minimum d'insertion (RMI)." }
    ],
    notions: [
      { mot: "Alternance", def: "Arrivée au pouvoir de l'opposition à la suite d'une élection ; la première de la Vᵉ République a lieu en 1981." },
      { mot: "Cohabitation", def: "Situation où le président et la majorité de l'Assemblée nationale sont de bords opposés (la première de 1986 à 1988)." },
      { mot: "Rigueur", def: "Politique de lutte contre l'inflation et les déficits adoptée par le gouvernement de gauche en 1983." },
      { mot: "Décentralisation", def: "Transfert de compétences de l'État vers les collectivités territoriales (communes, départements, régions)." },
      { mot: "Chômage de masse", def: "Chômage qui touche une part importante et durable de la population active : il dépasse 2 millions de personnes en France dès 1982." },
      { mot: "IVG", def: "Interruption volontaire de grossesse, dépénalisée par la loi Veil de 1975." },
      { mot: "Collège unique", def: "Collège commun à tous les élèves, créé par la loi Haby en 1975." },
      { mot: "Regroupement familial", def: "Droit accordé en 1976 aux immigrés installés en France de faire venir leur famille." },
      { mot: "Radios libres", def: "Radios privées autorisées à partir de 1981, qui mettent fin au monopole de l'État sur la radio." },
      { mot: "Démocratisation scolaire", def: "Accès d'un nombre croissant de jeunes, de tous milieux, à l'enseignement secondaire et supérieur." }
    ],
    personnages: [
      { nom: "Valéry Giscard d'Estaing", dates: "1926-2020", txt: [
        "Ministre des Finances du général de Gaulle puis de Pompidou.",
        "Élu président de la République en 1974, à 48 ans.",
        "Il fait voter la majorité à 18 ans et la loi sur l'IVG."
      ] },
      { nom: "François Mitterrand", dates: "1916-1996", txt: [
        "Plusieurs fois ministre sous la IVᵉ République, il refonde le Parti socialiste en 1971.",
        "Élu président en 1981, il est le premier président de gauche de la Vᵉ République.",
        "Réélu en 1988, il reste quatorze ans au pouvoir."
      ] },
      { nom: "Jacques Chirac", dates: "1932-2019", txt: [
        "Premier ministre de Giscard d'Estaing de 1974 à 1976.",
        "Premier ministre de la première cohabitation (1986-1988).",
        "Il est élu président de la République en 1995."
      ] },
      { nom: "Jack Lang", dates: "né en 1939", txt: [
        "Ministre de la Culture de François Mitterrand.",
        "Il crée la Fête de la musique en 1982.",
        "Il double le budget de la Culture et soutient les cultures populaires."
      ] },
      { nom: "Yvette Roudy", dates: "née en 1929", txt: [
        "Ministre des Droits de la femme à partir de 1981.",
        "Elle fait rembourser l'IVG par la Sécurité sociale (1982).",
        "La loi de 1983 sur l'égalité professionnelle entre les femmes et les hommes porte son nom."
      ] }
    ],
    lieux: [
      { nom: "Paris", lon: 2.35, lat: 48.86, txt: "Capitale ; 100 000 personnes y accueillent la Marche pour l'égalité le 3 décembre 1983." },
      { nom: "Marseille", lon: 5.37, lat: 43.3, txt: "Ville de départ de la Marche pour l'égalité et contre le racisme, en octobre 1983." },
      { nom: "Vénissieux", lon: 4.88, lat: 45.7, txt: "Commune de la banlieue lyonnaise ; la Marche de 1983 est née dans son quartier des Minguettes." },
      { nom: "Dreux", lon: 1.37, lat: 48.74, txt: "Ville où le Front national obtient sa première percée électorale, en 1983." },
      { nom: "Longwy", lon: 5.76, lat: 49.52, txt: "Ville sidérurgique de Lorraine frappée par les fermetures d'usines (1979, 1984)." },
      { nom: "Larzac", lon: 3.2, lat: 43.95, txt: "Plateau du sud du Massif central où des paysans luttent contre l'extension d'un camp militaire ; le projet est abandonné en 1981." },
      { nom: "Plogoff", lon: -4.67, lat: 48.04, txt: "Commune du Finistère où les habitants s'opposent à un projet de centrale nucléaire, abandonné en 1981." }
    ],
    graphiques: [
      { id: "bac-generation", type: "barres", titre: "La part d'une génération qui obtient le baccalauréat (en %)", unite: "%",
        source: "Ministère de l'Éducation nationale, DEPP (valeurs arrondies)",
        x: ["1970", "1975", "1980", "1985", "1990", "1995"], valeurs: [20, 24, 26, 29, 43, 63], quoi: "la part de bacheliers",
        questions: [
          { q: "Que montre l'accélération après 1985 ?", r: "La démocratisation scolaire, avec l'objectif de 80 % d'une génération au niveau du bac et la création du bac professionnel", faux: ["La fin du collège unique", "La baisse du nombre d'élèves", "La suppression du baccalauréat"], expl: "En 1985, le ministre Jean-Pierre Chevènement fixe l'objectif de 80 % d'une génération au niveau du bac ; le bac professionnel est créé la même année." }
        ] }
    ],
    trous: [
      { titre: "La France de 1974 à 1988", texte: "En 1974, [Giscard d'Estaing] abaisse la majorité à 18 ans ; la loi [Veil] dépénalise l'IVG en 1975. En 1981, l'élection de François [Mitterrand] est la première [alternance] de la Vᵉ République. Robert Badinter fait abolir la peine de [mort]. En 1983, la gauche choisit la [rigueur]. En 1986, la première [cohabitation] associe un président de gauche et un Premier ministre de droite." }
    ],
    capable: [
      "Expliquer ce qu'est l'alternance de 1981 et la cohabitation de 1986.",
      "Présenter les grandes réformes de société de 1974 à 1988.",
      "Décrire les mutations de la société : femmes, jeunes, immigration.",
      "Montrer comment la culture et l'audiovisuel se transforment."
    ],
    intrus: [
      { items: ["Majorité à 18 ans", "Loi Veil", "Collège unique", "Abolition de la peine de mort"], intrus: "Abolition de la peine de mort", expl: "L'abolition date de 1981, sous Mitterrand ; les trois autres sont des réformes de la présidence Giscard d'Estaing." },
      { items: ["Nationalisations", "Retraite à 60 ans", "Lois Defferre", "Privatisations de 1986"], intrus: "Privatisations de 1986", expl: "Les privatisations sont menées par le gouvernement Chirac pendant la cohabitation ; les trois autres sont des réformes de la gauche en 1981-1982." },
      { items: ["Radios libres", "Canal+", "Fête de la musique", "ORTF"], intrus: "ORTF", expl: "L'ORTF, office public de radio-télévision, est supprimé en 1974 ; les trois autres marquent la libéralisation de la culture et de l'audiovisuel des années 1980." },
      { items: ["Marche pour l'égalité", "SOS Racisme", "Regroupement familial", "Mai 68"], intrus: "Mai 68", expl: "Mai 68 précède la période ; les trois autres concernent l'immigration et la lutte contre le racisme entre 1976 et 1984." }
    ],
    ppo: [
      {
        id: "ivg", court: "PPO Loi Veil (1975)",
        titre: "1975 : la légalisation de l'interruption volontaire de grossesse, un tournant dans l'évolution des droits des femmes",
        question: "Pourquoi la loi Veil de 1975 est-elle un tournant dans l'évolution des droits des femmes ?",
        branches: [
          { titre: "Une revendication féministe", points: [
            "Une loi de 1920 interdit l'avortement ; la contraception n'est autorisée qu'en 1967 (loi Neuwirth).",
            "Le Mouvement de libération des femmes (MLF) réclame le droit de disposer de son corps.",
            "Le manifeste des 343 (1971) et le procès de Bobigny (1972), où l'avocate Gisèle Halimi défend une jeune fille, imposent le débat."
          ] },
          { titre: "Le combat de Simone Veil", points: [
            "Ministre de la Santé, elle présente le projet à l'Assemblée le 26 novembre 1974.",
            "Le débat est d'une rare violence ; la loi est adoptée grâce aux voix de la gauche et d'une partie de la droite (284 voix contre 189).",
            "Promulguée le 17 janvier 1975 pour cinq ans, elle est confirmée en 1979."
          ] },
          { titre: "Une loi qui change la vie des femmes", points: [
            "L'IVG est autorisée jusqu'à dix semaines de grossesse, dans des conditions médicales sûres.",
            "Elle est remboursée par la Sécurité sociale à partir de 1982.",
            "Le délai passe à 12 semaines en 2001, puis à 14 semaines en 2022."
          ] },
          { titre: "D'autres conquêtes", points: [
            "Divorce par consentement mutuel (1975), égalité professionnelle (loi Roudy, 1983).",
            "En 2024, la liberté de recourir à l'IVG est inscrite dans la Constitution."
          ] }
        ],
        reperes: [
          { a: "1967-12-28", date: "1967", txt: "Loi Neuwirth autorisant la contraception." },
          { a: "1971-04-05", date: "avril 1971", txt: "Manifeste des 343." },
          { a: "1972-11-08", date: "1972", txt: "Procès de Bobigny." },
          { a: "1974-11-26", date: "26 novembre 1974", txt: "Discours de Simone Veil à l'Assemblée nationale." },
          { a: "1975-01-17", date: "17 janvier 1975", txt: "Promulgation de la loi Veil." },
          { a: "2024-03-08", date: "mars 2024", txt: "La liberté de recourir à l'IVG entre dans la Constitution." }
        ],
        notions: [
          { mot: "Manifeste des 343", def: "Texte publié en 1971 dans lequel 343 femmes déclarent avoir avorté, alors que c'est un délit." },
          { mot: "Féminisme", def: "Mouvement qui lutte pour l'égalité des droits entre les femmes et les hommes." }
        ],
        personnages: [
          { nom: "Gisèle Halimi", dates: "1927-2020", txt: [
            "Avocate née en Tunisie, engagée pour les droits des femmes.",
            "En 1972, elle défend une jeune fille poursuivie pour avortement lors du procès de Bobigny.",
            "Elle fonde l'association « Choisir la cause des femmes »."
          ] },
          { nom: "Simone Veil", dates: "1927-2017", txt: [
            "Déportée à Auschwitz à 16 ans, elle survit à la Shoah.",
            "Magistrate, elle devient ministre de la Santé en 1974.",
            "Elle est la première présidente du Parlement européen élu au suffrage universel (1979)."
          ] }
        ],
        pieges: [
          "La loi Veil ne concerne pas la contraception, autorisée dès 1967 par la loi Neuwirth.",
          "Elle est d'abord provisoire (cinq ans), puis confirmée en 1979."
        ],
        mots: ["loi de 1920", "MLF", "manifeste des 343", "procès de Bobigny", "Simone Veil", "dépénalisation", "droits des femmes", "Constitution"],
        reponse: "Dans les années 1970, l'avortement est un délit depuis 1920, mais des centaines de milliers de femmes y ont recours clandestinement, au péril de leur vie. Les féministes du MLF, le manifeste des 343 (1971) et le procès de Bobigny (1972) imposent le débat. Ministre de la Santé, Simone Veil défend le projet devant une Assemblée presque entièrement masculine, dans un climat très violent ; la loi est promulguée le 17 janvier 1975. Elle permet aux femmes d'interrompre une grossesse dans des conditions médicales sûres. C'est un tournant : les femmes obtiennent la maîtrise de leur corps ; l'IVG est remboursée en 1982 et inscrite dans la Constitution en 2024."
      },
      {
        id: "peine-mort", court: "PPO Abolition de la peine de mort",
        titre: "1981 : l'abolition de la peine de mort",
        question: "Comment et pourquoi la France abolit-elle la peine de mort en 1981 ?",
        branches: [
          { titre: "Un débat ancien", points: [
            "Victor Hugo, puis Jean Jaurès en 1908, ont plaidé pour l'abolition, sans succès.",
            "Dans les années 1970, la guillotine fonctionne encore : la dernière exécution a lieu en septembre 1977."
          ] },
          { titre: "Le combat de Robert Badinter", points: [
            "Avocat, il obtient en 1977 que Patrick Henry, meurtrier d'un enfant, échappe à la peine de mort.",
            "Candidat en 1981, François Mitterrand annonce qu'il est contre la peine de mort, alors que la majorité des Français y est favorable."
          ] },
          { titre: "La loi de 1981", points: [
            "Devenu garde des Sceaux, Badinter défend l'abolition devant l'Assemblée le 17 septembre 1981.",
            "Les députés la votent le 18 septembre (363 voix contre 117) ; la loi est promulguée le 9 octobre 1981."
          ] },
          { titre: "Une abolition définitive", points: [
            "La France ratifie les conventions européennes qui interdisent la peine de mort.",
            "En 2007, l'abolition est inscrite dans la Constitution ; la France milite pour l'abolition universelle."
          ] }
        ],
        reperes: [
          { a: "1977-09-10", date: "septembre 1977", txt: "Dernière exécution en France." },
          { a: "1981-09-17", date: "17 septembre 1981", txt: "Discours de Robert Badinter à l'Assemblée nationale." },
          { a: "1981-10-09", date: "9 octobre 1981", txt: "Promulgation de la loi d'abolition." },
          { a: "2007-02-23", date: "2007", txt: "L'abolition est inscrite dans la Constitution." }
        ],
        notions: [
          { mot: "Abolition", def: "Suppression d'une loi, d'une institution ou d'une pratique (ici la peine de mort)." },
          { mot: "Garde des Sceaux", def: "Autre nom du ministre de la Justice." }
        ],
        personnages: [
          { nom: "Robert Badinter", dates: "1928-2024", txt: [
            "Avocat engagé contre la peine de mort.",
            "Ministre de la Justice de François Mitterrand à partir de 1981.",
            "Il entre au Panthéon en octobre 2025."
          ] }
        ],
        pieges: [
          "L'abolition n'est pas voulue par la majorité des Français en 1981 : c'est un choix politique et moral.",
          "Ne pas confondre la loi de 1981 et son inscription dans la Constitution en 2007."
        ],
        mots: ["guillotine", "Badinter", "Mitterrand", "alternance", "garde des Sceaux", "18 septembre 1981", "droits de l'homme", "Constitution"],
        reponse: "Défendue depuis Victor Hugo, l'abolition de la peine de mort n'avait jamais abouti ; la dernière exécution a lieu en 1977. Avocat, Robert Badinter mène ce combat, notamment au procès de Patrick Henry. Candidat en 1981, François Mitterrand se déclare contre la peine de mort, alors qu'une majorité de Français y est favorable. Après l'alternance, Badinter, devenu garde des Sceaux, défend l'abolition devant les députés le 17 septembre 1981 : « la justice française ne sera plus une justice qui tue ». La loi est votée le lendemain et promulguée le 9 octobre 1981. Elle fait partie des grandes réformes de société de la gauche ; l'abolition entre dans la Constitution en 2007."
      },
      {
        id: "sida", court: "PPO L'épidémie de sida",
        titre: "L'épidémie de sida en France : recherche, prévention et luttes politiques",
        question: "Comment la société française fait-elle face à l'épidémie de sida dans les années 1980 et 1990 ?",
        branches: [
          { titre: "Une maladie nouvelle", points: [
            "En 1981, les premiers cas sont décrits aux États-Unis ; la maladie touche d'abord les homosexuels, les toxicomanes et les personnes transfusées.",
            "En 1983, l'équipe de Luc Montagnier et Françoise Barré-Sinoussi, à l'Institut Pasteur, découvre le virus (VIH) ; elle reçoit le prix Nobel de médecine en 2008."
          ] },
          { titre: "Peurs et discriminations", points: [
            "Les malades sont souvent rejetés ; les homosexuels sont stigmatisés.",
            "L'affaire du sang contaminé (révélée en 1991) montre que des hémophiles ont été transfusés avec du sang non sécurisé."
          ] },
          { titre: "Prévention et militantisme", points: [
            "L'association AIDES est fondée en 1984 par Daniel Defert, après la mort de Michel Foucault ; Act Up-Paris naît en 1989.",
            "En 1987, la publicité pour le préservatif est autorisée et les seringues sont en vente libre en pharmacie.",
            "Des campagnes nationales de prévention se multiplient ; le Sidaction réunit les médias en 1994."
          ] },
          { titre: "Des traitements, une lutte qui continue", points: [
            "À partir de 1996, les trithérapies font du sida une maladie chronique dans les pays riches.",
            "Dans le monde, l'épidémie a fait plus de 40 millions de morts, surtout en Afrique."
          ] }
        ],
        reperes: [
          { a: "1981-06-05", date: "juin 1981", txt: "Premiers cas décrits aux États-Unis." },
          { a: "1983-05-20", date: "1983", txt: "Découverte du virus à l'Institut Pasteur." },
          { a: "1984-12-01", date: "1984", txt: "Création de l'association AIDES." },
          { a: "1987-05-13", date: "1987", txt: "Vente libre des seringues et publicité pour le préservatif autorisées." },
          { a: "1989-06-26", date: "1989", txt: "Création d'Act Up-Paris." },
          { a: "1996-07-01", date: "1996", txt: "Arrivée des trithérapies." }
        ],
        notions: [
          { mot: "VIH", def: "Virus de l'immunodéficience humaine, responsable du sida." },
          { mot: "Trithérapie", def: "Traitement associant trois médicaments, qui bloque le développement du virus depuis 1996." }
        ],
        personnages: [
          { nom: "Françoise Barré-Sinoussi", dates: "née en 1947", txt: [
            "Chercheuse à l'Institut Pasteur.",
            "En 1983, elle participe à la découverte du virus responsable du sida.",
            "Elle reçoit le prix Nobel de médecine en 2008 avec Luc Montagnier."
          ] }
        ],
        pieges: [
          "Le sida n'est pas seulement une question médicale : c'est aussi une question politique et sociale (discriminations, militantisme).",
          "Les trithérapies ne guérissent pas : elles empêchent le virus de se développer."
        ],
        mots: ["VIH", "Institut Pasteur", "discriminations", "sang contaminé", "AIDES", "Act Up", "prévention", "trithérapies"],
        reponse: "Apparue au début des années 1980, l'épidémie de sida touche d'abord les homosexuels, les toxicomanes et les personnes transfusées. La recherche française joue un rôle majeur : en 1983, l'équipe de l'Institut Pasteur découvre le virus (VIH). Mais la maladie suscite peurs et discriminations, et l'affaire du sang contaminé révèle des fautes graves. Les malades et leurs proches se mobilisent : AIDES (1984) puis Act Up-Paris (1989) réclament prévention, traitements et droits. L'État lance des campagnes, autorise la publicité pour le préservatif et la vente libre des seringues (1987). À partir de 1996, les trithérapies font du sida une maladie chronique dans les pays riches."
      }
    ]
  },
  {
    id: "tle-h4-c1", n: "Tle", d: "histoire", carte: ["europe-large", "monde"],
    theme: "Thème 4 · Le monde, l'Europe et la France depuis les années 1990, entre coopérations et conflits",
    num: "Chapitre 9",
    titre: "Nouveaux rapports de puissance et enjeux mondiaux",
    question: "Comment le monde de l'après-guerre froide devient-il multipolaire, et quels conflits et coopérations le caractérisent ?",
    plan: [
      "Un monde multipolaire : le jeu et la hiérarchie des puissances",
      "Les nouvelles formes de conflits : terrorisme, conflits asymétriques, retour de l'affrontement des puissances",
      "Les crimes de masse et les génocides : ex-Yougoslavie, Tutsi du Rwanda",
      "Une gouvernance mondiale face aux défis contemporains : justice internationale, réfugiés, environnement"
    ],
    cle: "Après 1991, les États-Unis restent la première puissance, mais le monde devient multipolaire avec l'essor de la Chine et des pays émergents ; les conflits prennent de nouvelles formes et la coopération internationale peine à répondre aux défis mondiaux.",
    essentiel: [
      "En 1991, les États-Unis sont la seule superpuissance ; ils dirigent la coalition de la guerre du Golfe. Mais la Chine, devenue la deuxième économie du monde en 2010, l'Inde, le Brésil et une Russie qui veut retrouver son influence font naître un monde multipolaire.",
      "Les conflits changent : guerres civiles et ethniques, terrorisme islamiste (attentats du 11 septembre 2001, puis guerres d'Afghanistan et d'Irak), conflits asymétriques. L'affrontement entre puissances revient avec l'annexion de la Crimée par la Russie (2014) et l'invasion de l'Ukraine (2022).",
      "Des crimes de masse reviennent : guerres en ex-Yougoslavie (1991-1999), avec le massacre de Srebrenica (1995) ; génocide des Tutsi au Rwanda (avril-juillet 1994), qui fait environ 800 000 morts en trois mois.",
      "On cherche une gouvernance mondiale : tribunaux pénaux internationaux, Cour pénale internationale (2002), protection des réfugiés, accords sur le climat (Rio 1992, Kyoto 1997, Paris 2015). Mais les rivalités entre puissances et le droit de veto au Conseil de sécurité limitent ces efforts."
    ],
    reperes: [
      { a: "1991-01-17", b: "1991-02-28", date: "janvier-février 1991", txt: "Guerre du Golfe : une coalition menée par les États-Unis libère le Koweït." },
      { a: "1991-06-25", date: "juin 1991", txt: "Indépendance de la Slovénie et de la Croatie : début des guerres de Yougoslavie." },
      { a: "1992-06-03", date: "juin 1992", txt: "Sommet de la Terre à Rio de Janeiro." },
      { a: "1994-04-07", b: "1994-07-17", date: "avril-juillet 1994", txt: "Génocide des Tutsi au Rwanda." },
      { a: "1994-05-10", date: "mai 1994", txt: "Nelson Mandela devient président de l'Afrique du Sud." },
      { a: "1995-07-11", date: "juillet 1995", txt: "Massacre de Srebrenica en Bosnie." },
      { a: "1997-12-11", date: "décembre 1997", txt: "Protocole de Kyoto sur le climat." },
      { a: "2001-09-11", date: "11 septembre 2001", txt: "Attentats d'al-Qaida contre les États-Unis." },
      { a: "2002-07-01", date: "juillet 2002", txt: "Création de la Cour pénale internationale." },
      { a: "2003-03-20", date: "mars 2003", txt: "Les États-Unis envahissent l'Irak." },
      { a: "2008-09-15", date: "septembre 2008", txt: "Faillite de la banque Lehman Brothers : crise financière mondiale." },
      { a: "2014-03-18", date: "mars 2014", txt: "La Russie annexe la Crimée." },
      { a: "2015-12-12", date: "décembre 2015", txt: "Accord de Paris sur le climat (COP21)." },
      { a: "2022-02-24", date: "24 février 2022", txt: "La Russie envahit l'Ukraine." }
    ],
    notions: [
      { mot: "Multipolarité", def: "Organisation du monde autour de plusieurs pôles de puissance (États-Unis, Chine, Union européenne, Russie, pays émergents)." },
      { mot: "Hyperpuissance", def: "Terme employé par le ministre français Hubert Védrine pour désigner les États-Unis, seule superpuissance après 1991." },
      { mot: "Puissance émergente", def: "Pays dont l'économie et l'influence progressent rapidement (Chine, Inde, Brésil…)." },
      { mot: "Hard power", def: "Puissance fondée sur la contrainte : force militaire, pression économique." },
      { mot: "Soft power", def: "Puissance fondée sur l'influence et l'attraction : culture, langue, universités, modèle de société." },
      { mot: "Terrorisme", def: "Usage de la violence, souvent contre des civils, pour créer un climat de peur et atteindre un but politique." },
      { mot: "Djihadisme", def: "Idéologie islamiste qui justifie la violence armée au nom d'une lecture extrême de l'islam (al-Qaida, État islamique)." },
      { mot: "Conflit asymétrique", def: "Conflit qui oppose des forces très inégales : une armée régulière face à des combattants irréguliers ou terroristes." },
      { mot: "Purification ethnique", def: "Expulsion ou massacre d'une population d'un territoire en raison de son origine (ex-Yougoslavie)." },
      { mot: "Gouvernance mondiale", def: "Ensemble des règles et des institutions qui permettent aux États de coopérer face aux problèmes mondiaux." },
      { mot: "Réfugié", def: "Personne qui a fui son pays par crainte de persécutions et bénéficie d'une protection internationale (convention de Genève, 1951)." },
      { mot: "Développement durable", def: "Développement qui répond aux besoins du présent sans compromettre ceux des générations futures." }
    ],
    personnages: [
      { nom: "Vladimir Poutine", dates: "né en 1952", txt: [
        "Ancien officier du KGB, le service de renseignement soviétique.",
        "Au pouvoir en Russie depuis 1999-2000, comme président ou Premier ministre.",
        "Il fait annexer la Crimée en 2014 et lance l'invasion de l'Ukraine en 2022."
      ] },
      { nom: "Slobodan Milošević", dates: "1941-2006", txt: [
        "Dirigeant nationaliste serbe.",
        "Président de la Serbie puis de la Yougoslavie pendant les guerres des années 1990.",
        "Poursuivi par le tribunal pénal international de La Haye, il meurt avant la fin de son procès."
      ] },
      { nom: "Kofi Annan", dates: "1938-2018", txt: [
        "Diplomate ghanéen.",
        "Secrétaire général de l'ONU de 1997 à 2006.",
        "Prix Nobel de la paix en 2001 avec l'ONU."
      ] },
      { nom: "Xi Jinping", dates: "né en 1953", txt: [
        "Dirigeant du parti communiste chinois depuis 2012.",
        "Président de la République populaire de Chine depuis 2013.",
        "Il lance en 2013 les « nouvelles routes de la soie »."
      ] }
    ],
    lieux: [
      { nom: "Koweït", lon: 47.98, lat: 29.37, txt: "Émirat envahi par l'Irak en août 1990, libéré par une coalition menée par les États-Unis en 1991." },
      { nom: "Srebrenica", lon: 19.3, lat: 44.1, txt: "Ville de Bosnie où plus de 8 000 hommes et garçons musulmans sont massacrés par les forces serbes en juillet 1995." },
      { nom: "Pristina", lon: 21.17, lat: 42.67, txt: "Capitale du Kosovo, où l'OTAN intervient en 1999 contre la Serbie." },
      { nom: "La Haye", lon: 4.3, lat: 52.08, txt: "Ville des Pays-Bas, siège de la Cour pénale internationale et de l'ancien tribunal pour l'ex-Yougoslavie." },
      { nom: "Kiev", lon: 30.52, lat: 50.45, txt: "Capitale de l'Ukraine (aussi écrite Kyiv), visée par l'offensive russe de février 2022." },
      { nom: "Sébastopol", lon: 33.52, lat: 44.6, txt: "Port de Crimée, base de la flotte russe de la mer Noire ; la Russie annexe la Crimée en 2014." },
      { nom: "Kigali", lon: 30.06, lat: -1.95, txt: "Capitale du Rwanda, où commence le génocide des Tutsi le 7 avril 1994." },
      { nom: "New York", lon: -74.01, lat: 40.71, txt: "Ville où les tours jumelles du World Trade Center s'effondrent le 11 septembre 2001 ; siège de l'ONU." },
      { nom: "Kaboul", lon: 69.17, lat: 34.53, txt: "Capitale de l'Afghanistan, où les talibans reprennent le pouvoir en août 2021." },
      { nom: "Bagdad", lon: 44.36, lat: 33.31, fond: "monde", txt: "Capitale de l'Irak, prise par les troupes américaines en avril 2003." },
      { nom: "Pékin", lon: 116.4, lat: 39.9, txt: "Capitale de la Chine, deuxième puissance économique mondiale." },
      { nom: "Rio de Janeiro", lon: -43.2, lat: -22.91, txt: "Ville du Brésil où se tient le Sommet de la Terre en 1992." }
    ],
    graphiques: [
      { id: "depenses-militaires", type: "barres-h", titre: "Les dépenses militaires des principales puissances en 2024 (milliards de dollars)", unite: "milliards de dollars",
        source: "SIPRI, Stockholm International Peace Research Institute, avril 2025 (estimations arrondies)",
        x: ["États-Unis", "Chine", "Russie", "Allemagne", "Inde", "Royaume-Uni", "France"], valeurs: [997, 314, 149, 88, 86, 82, 65],
        quoi: "les dépenses militaires", ou: "le pays",
        questions: [
          { q: "Que montre ce graphique sur la hiérarchie des puissances ?", r: "Les États-Unis restent de loin la première puissance militaire, devant la Chine", faux: ["La Russie dépense plus que les États-Unis", "Les puissances européennes dominent le monde", "La Chine ne dépense presque rien pour son armée"], expl: "Les États-Unis dépensent plus que les six pays suivants réunis : c'est la base de leur hard power ; la Chine est désormais deuxième." }
        ] }
    ],
    trous: [
      { titre: "Le monde depuis 1991", texte: "Après la fin de l'URSS, les États-Unis sont une [hyperpuissance], mais le monde devient [multipolaire] avec l'essor de la Chine. Le 11 septembre 2001, al-Qaida frappe les États-Unis : c'est une nouvelle forme de [terrorisme]. En 1994, le génocide des [Tutsi] fait environ 800 000 morts au Rwanda ; en 1995, le massacre de [Srebrenica] ensanglante la Bosnie. La Cour [pénale] internationale est créée en 2002. En 2022, la Russie envahit l'[Ukraine]." }
    ],
    capable: [
      "Expliquer pourquoi le monde devient multipolaire.",
      "Décrire les nouvelles formes de conflits depuis 1991.",
      "Présenter les génocides et crimes de masse des années 1990 (Rwanda, ex-Yougoslavie).",
      "Montrer les réussites et les limites de la gouvernance mondiale."
    ],
    intrus: [
      { items: ["Chine", "Inde", "Brésil", "Belgique"], intrus: "Belgique", expl: "La Belgique est un pays développé ancien ; la Chine, l'Inde et le Brésil sont des puissances émergentes." },
      { items: ["Kyoto", "Rio", "Paris", "Dayton"], intrus: "Dayton", expl: "Les accords de Dayton (1995) mettent fin à la guerre de Bosnie ; Rio, Kyoto et Paris sont des étapes des négociations sur le climat." },
      { items: ["Srebrenica", "Kigali", "Sarajevo", "Shenzhen"], intrus: "Shenzhen", expl: "Shenzhen est une ville chinoise du développement économique ; les trois autres sont des lieux de crimes de masse des années 1990." },
      { items: ["Hard power", "Armée", "Sanctions économiques", "Soft power"], intrus: "Soft power", expl: "Le soft power est la puissance d'influence ; les trois autres relèvent de la puissance de contrainte." }
    ],
    ppo: [
      {
        id: "11-septembre", court: "PPO 11 septembre 2001",
        titre: "Le 11 septembre 2001",
        question: "En quoi les attentats du 11 septembre 2001 marquent-ils une rupture dans les relations internationales ?",
        branches: [
          { titre: "Les attentats", points: [
            "Dix-neuf terroristes d'al-Qaida détournent quatre avions de ligne.",
            "Deux frappent les tours jumelles du World Trade Center à New York, un autre le Pentagone ; le quatrième s'écrase en Pennsylvanie.",
            "Près de 3 000 personnes sont tuées : c'est l'attentat le plus meurtrier de l'histoire."
          ] },
          { titre: "Al-Qaida et le djihadisme", points: [
            "Oussama Ben Laden a combattu les Soviétiques en Afghanistan dans les années 1980.",
            "Al-Qaida, abrité par les talibans afghans, veut frapper les États-Unis, accusés d'occuper les terres de l'islam.",
            "C'est un terrorisme mondialisé, qui vise des symboles de la puissance américaine."
          ] },
          { titre: "La « guerre contre le terrorisme »", points: [
            "En octobre 2001, les États-Unis attaquent l'Afghanistan avec l'appui de l'ONU et de l'OTAN.",
            "En 2003, ils envahissent l'Irak sans mandat de l'ONU, malgré l'opposition de la France.",
            "Prison de Guantánamo, lois d'exception : les libertés sont restreintes au nom de la sécurité."
          ] },
          { titre: "Des conséquences durables", points: [
            "Les guerres s'enlisent : retrait d'Irak en 2011, retour des talibans au pouvoir en Afghanistan en août 2021.",
            "Ben Laden est tué au Pakistan en mai 2011 ; l'État islamique prend le relais (attentats de Paris en 2015).",
            "Ces guerres affaiblissent l'image des États-Unis et nourrissent l'idée d'un monde multipolaire."
          ] }
        ],
        reperes: [
          { a: "2001-09-11", date: "11 septembre 2001", txt: "Attentats contre le World Trade Center et le Pentagone." },
          { a: "2001-10-07", date: "octobre 2001", txt: "Début de la guerre en Afghanistan." },
          { a: "2003-03-20", date: "mars 2003", txt: "Invasion de l'Irak." },
          { a: "2011-05-02", date: "mai 2011", txt: "Mort d'Oussama Ben Laden au Pakistan." },
          { a: "2021-08-15", date: "août 2021", txt: "Les talibans reprennent Kaboul." }
        ],
        notions: [
          { mot: "Al-Qaida", def: "Organisation terroriste djihadiste fondée par Oussama Ben Laden à la fin des années 1980." },
          { mot: "Guerre contre le terrorisme", def: "Politique de George W. Bush après le 11 septembre : guerres en Afghanistan et en Irak, mesures de sécurité exceptionnelles." }
        ],
        personnages: [
          { nom: "Oussama Ben Laden", dates: "1957-2011", txt: [
            "Fils d'une riche famille saoudienne.",
            "Il combat les Soviétiques en Afghanistan, puis fonde al-Qaida.",
            "Il organise les attentats du 11 septembre 2001 ; il est tué par un commando américain au Pakistan."
          ] },
          { nom: "George W. Bush", dates: "né en 1946", txt: [
            "Président républicain des États-Unis de 2001 à 2009.",
            "Il lance la « guerre contre le terrorisme » après les attentats de 2001.",
            "Il décide l'invasion de l'Irak en 2003."
          ] }
        ],
        pieges: [
          "La guerre d'Irak (2003) n'a pas de lien prouvé avec les attentats : elle est décidée sans l'accord de l'ONU.",
          "Le terrorisme djihadiste frappe surtout des pays musulmans, pas seulement l'Occident."
        ],
        mots: ["al-Qaida", "Ben Laden", "World Trade Center", "terrorisme mondialisé", "guerre contre le terrorisme", "Afghanistan", "Irak", "conflit asymétrique"],
        reponse: "Le 11 septembre 2001, dix-neuf terroristes d'al-Qaida détournent quatre avions et frappent le World Trade Center et le Pentagone : près de 3 000 personnes sont tuées. Pour la première fois, la superpuissance américaine est frappée sur son sol par un acteur non étatique, un réseau djihadiste mondialisé dirigé par Oussama Ben Laden. Les États-Unis lancent la « guerre contre le terrorisme » : ils attaquent l'Afghanistan des talibans (2001), puis envahissent l'Irak sans mandat de l'ONU (2003). Ces conflits asymétriques s'enlisent : les talibans reviennent au pouvoir en 2021. Le 11 septembre ouvre ainsi une période de nouvelles conflictualités et affaiblit l'hégémonie américaine."
      },
      {
        id: "apartheid", court: "PPO Fin de l'apartheid",
        titre: "La fin de l'apartheid en Afrique du Sud",
        question: "Comment l'Afrique du Sud sort-elle de l'apartheid au début des années 1990 ?",
        branches: [
          { titre: "Le régime de l'apartheid", points: [
            "À partir de 1948, le Parti national, au pouvoir, impose l'apartheid : la séparation des populations selon leur couleur de peau.",
            "La minorité blanche monopolise le pouvoir ; les Noirs sont privés de droits politiques et relégués dans des quartiers et des « bantoustans »."
          ] },
          { titre: "La lutte contre l'apartheid", points: [
            "L'ANC (Congrès national africain) lutte pour l'égalité ; Nelson Mandela est condamné à la prison à vie en 1964.",
            "En 1976, la révolte des lycéens de Soweto est réprimée dans le sang.",
            "Dans les années 1980, sanctions économiques et boycott sportif isolent le pays."
          ] },
          { titre: "La sortie de l'apartheid", points: [
            "Président à partir de 1989, Frederik de Klerk légalise l'ANC et libère Mandela le 11 février 1990.",
            "Les lois de l'apartheid sont abolies en 1991 ; Mandela et de Klerk reçoivent le prix Nobel de la paix en 1993.",
            "Le 27 avril 1994, les premières élections multiraciales portent Mandela à la présidence."
          ] },
          { titre: "Une « nation arc-en-ciel » ?", points: [
            "La Commission vérité et réconciliation, présidée par Desmond Tutu, recueille les témoignages des victimes et des bourreaux.",
            "Mais de fortes inégalités sociales et raciales persistent."
          ] }
        ],
        reperes: [
          { a: 1948, date: "1948", txt: "Le Parti national instaure l'apartheid." },
          { a: "1964-06-12", date: "1964", txt: "Nelson Mandela est condamné à la prison à vie." },
          { a: "1976-06-16", date: "juin 1976", txt: "Révolte de Soweto." },
          { a: "1990-02-11", date: "11 février 1990", txt: "Libération de Nelson Mandela." },
          { a: "1991-06-17", date: "1991", txt: "Abolition des dernières lois de l'apartheid." },
          { a: "1994-04-27", date: "27 avril 1994", txt: "Premières élections multiraciales." }
        ],
        notions: [
          { mot: "Apartheid", def: "« Séparation » en afrikaans : régime de ségrégation raciale imposé en Afrique du Sud de 1948 à 1991." },
          { mot: "ANC", def: "Congrès national africain : parti de lutte contre l'apartheid, au pouvoir depuis 1994." }
        ],
        personnages: [
          { nom: "Nelson Mandela", dates: "1918-2013", txt: [
            "Avocat et dirigeant de l'ANC.",
            "Emprisonné pendant vingt-sept ans, notamment sur l'île de Robben Island.",
            "Il devient le premier président noir de l'Afrique du Sud en 1994."
          ] },
          { nom: "Frederik de Klerk", dates: "1936-2021", txt: [
            "Dirigeant du Parti national, devenu président en 1989.",
            "Il libère Nelson Mandela et abolit les lois de l'apartheid.",
            "Il reçoit le prix Nobel de la paix en 1993."
          ] }
        ],
        lieux: [
          { nom: "Soweto", lon: 27.86, lat: -26.27, txt: "Township noir de Johannesburg, où la révolte des lycéens de 1976 est réprimée." },
          { nom: "Le Cap", lon: 18.42, lat: -33.92, txt: "Ville au large de laquelle se trouve Robben Island, où Mandela a été emprisonné." }
        ],
        pieges: [
          "La fin de l'apartheid n'est pas seulement l'œuvre de Mandela : elle résulte de la lutte de l'ANC, de la pression internationale et des choix de De Klerk.",
          "La fin juridique de l'apartheid (1991) ne met pas fin aux inégalités."
        ],
        mots: ["apartheid", "ségrégation", "ANC", "Mandela", "Soweto", "sanctions", "de Klerk", "élections multiraciales"],
        reponse: "Instauré en 1948, l'apartheid sépare les populations selon leur couleur de peau et réserve le pouvoir à la minorité blanche. L'ANC lutte contre ce régime ; son dirigeant, Nelson Mandela, est condamné à la prison à vie en 1964. La répression de Soweto (1976), puis les sanctions économiques et le boycott sportif isolent le pays. Après la fin de la guerre froide, le président Frederik de Klerk engage la sortie du régime : il libère Mandela en février 1990 et abolit les lois de l'apartheid en 1991. En 1994, les premières élections multiraciales portent Mandela à la présidence. La Commission vérité et réconciliation cherche ensuite à construire une « nation arc-en-ciel », malgré des inégalités persistantes."
      }
    ]
  },
  {
    id: "tle-h4-c2", n: "Tle", d: "histoire", carte: "europe-large",
    theme: "Thème 4 · Le monde, l'Europe et la France depuis les années 1990, entre coopérations et conflits",
    num: "Chapitre 10",
    titre: "La construction européenne entre élargissement, approfondissement et remises en question",
    question: "Comment la construction européenne s'élargit-elle et s'approfondit-elle depuis 1992, et pourquoi est-elle aussi remise en question ?",
    plan: [
      "Le passage de la CEE à l'Union européenne : un projet qui s'approfondit",
      "Des élargissements successifs",
      "Europe des États, Europe des citoyens : référendums et traités",
      "Des crises et des remises en question"
    ],
    cle: "Depuis le traité de Maastricht (1992), l'Union européenne s'approfondit (euro, citoyenneté européenne) et s'élargit jusqu'à 28 membres ; mais le rejet du traité constitutionnel (2005), les crises et le Brexit (2020) montrent ses fragilités.",
    essentiel: [
      "Le traité de Maastricht (1992) transforme la CEE en Union européenne : citoyenneté européenne, projet de monnaie unique, politique étrangère commune. L'espace Schengen supprime les contrôles aux frontières intérieures (1995) et l'euro devient la monnaie de nombreux pays (1999 ; pièces et billets en 2002).",
      "L'Union s'élargit : Autriche, Finlande et Suède (1995), dix pays dont huit d'Europe centrale et orientale (2004), Roumanie et Bulgarie (2007), Croatie (2013). Elle réunit ainsi l'Europe divisée par la guerre froide.",
      "Les citoyens sont plus souvent consultés : le traité de Maastricht n'est approuvé en France qu'à 51 % (1992) ; en 2005, Français et Néerlandais rejettent le traité constitutionnel. Le traité de Lisbonne (2007) reprend l'essentiel de ses institutions.",
      "Les crises se succèdent : crise de la zone euro (Grèce, 2010-2015), crise migratoire (2015), montée des partis eurosceptiques. Le Royaume-Uni vote sa sortie en 2016 et quitte l'UE en 2020. Mais l'Union réagit ensemble à la pandémie (plan de relance, 2020) et à l'invasion de l'Ukraine (2022)."
    ],
    reperes: [
      { a: "1992-02-07", date: "7 février 1992", txt: "Signature du traité de Maastricht." },
      { a: "1992-09-20", date: "septembre 1992", txt: "Référendum : les Français approuvent Maastricht à 51 %." },
      { a: "1993-11-01", date: "1er novembre 1993", txt: "Entrée en vigueur du traité de Maastricht : naissance de l'Union européenne." },
      { a: "1994-05-06", date: "mai 1994", txt: "Inauguration du tunnel sous la Manche." },
      { a: "1995-01-01", date: "1995", txt: "Entrée de l'Autriche, de la Finlande et de la Suède." },
      { a: "1995-03-26", date: "mars 1995", txt: "Application des accords de Schengen." },
      { a: "1999-01-01", date: "1er janvier 1999", txt: "Naissance de l'euro (monnaie des échanges financiers)." },
      { a: "2002-01-01", date: "1er janvier 2002", txt: "Mise en circulation des pièces et billets en euros." },
      { a: "2004-05-01", date: "1er mai 2004", txt: "Élargissement à dix nouveaux États." },
      { a: "2005-05-29", date: "29 mai 2005", txt: "Les Français rejettent le traité constitutionnel européen." },
      { a: "2007-12-13", date: "décembre 2007", txt: "Signature du traité de Lisbonne." },
      { a: "2016-06-23", date: "juin 2016", txt: "Référendum : les Britanniques votent pour quitter l'UE." },
      { a: "2020-01-31", date: "31 janvier 2020", txt: "Le Royaume-Uni quitte l'Union européenne." }
    ],
    notions: [
      { mot: "Union européenne", def: "Union d'États européens née du traité de Maastricht (1992) ; elle compte 27 membres depuis 2020." },
      { mot: "Approfondissement", def: "Renforcement de l'intégration entre les États membres (monnaie unique, nouvelles compétences communes)." },
      { mot: "Élargissement", def: "Entrée de nouveaux États dans l'Union européenne." },
      { mot: "Citoyenneté européenne", def: "Créée par Maastricht : elle permet notamment de circuler, de s'installer et de voter aux élections locales et européennes dans un autre État de l'UE." },
      { mot: "Espace Schengen", def: "Espace de libre circulation des personnes, sans contrôle aux frontières intérieures, appliqué depuis 1995." },
      { mot: "Zone euro", def: "Ensemble des États de l'UE qui ont adopté l'euro comme monnaie." },
      { mot: "Euroscepticisme", def: "Méfiance ou hostilité envers la construction européenne." },
      { mot: "Souveraineté", def: "Pouvoir d'un État de décider par lui-même ; une partie est partagée au sein de l'UE." },
      { mot: "Brexit", def: "Sortie du Royaume-Uni de l'Union européenne, votée en 2016 et effective le 31 janvier 2020." },
      { mot: "Parlement européen", def: "Assemblée de l'UE élue au suffrage universel direct depuis 1979 ; il vote les lois européennes avec le Conseil." }
    ],
    personnages: [
      { nom: "Jacques Delors", dates: "1925-2023", txt: [
        "Ancien ministre français de l'Économie.",
        "Président de la Commission européenne de 1985 à 1995.",
        "Il prépare l'Acte unique, le marché unique et la monnaie unique."
      ] },
      { nom: "Helmut Kohl", dates: "1930-2017", txt: [
        "Chancelier de l'Allemagne de l'Ouest puis de l'Allemagne réunifiée (1982-1998).",
        "Il forme avec François Mitterrand un couple franco-allemand moteur de l'Europe.",
        "Il accepte d'abandonner le mark pour la monnaie unique."
      ] },
      { nom: "Angela Merkel", dates: "née en 1954", txt: [
        "Chancelière allemande de 2005 à 2021.",
        "Elle joue un rôle central pendant la crise de la zone euro.",
        "En 2015, elle accueille de nombreux réfugiés en Allemagne."
      ] }
    ],
    lieux: [
      { nom: "Maastricht", lon: 5.69, lat: 50.85, txt: "Ville des Pays-Bas où est signé le traité fondateur de l'Union européenne en 1992." },
      { nom: "Bruxelles", lon: 4.35, lat: 50.85, fond: "europe-large", txt: "Capitale de la Belgique, siège de la Commission européenne et du Conseil." },
      { nom: "Strasbourg", lon: 7.75, lat: 48.57, txt: "Siège du Parlement européen." },
      { nom: "Francfort", lon: 8.68, lat: 50.11, txt: "Siège de la Banque centrale européenne, qui gère l'euro." },
      { nom: "Lisbonne", lon: -9.14, lat: 38.72, txt: "Ville où est signé le traité de 2007 qui réforme les institutions de l'UE." },
      { nom: "Schengen", lon: 6.37, lat: 49.47, txt: "Village du Luxembourg où sont signés en 1985 les accords de libre circulation." },
      { nom: "Athènes", lon: 23.73, lat: 37.98, txt: "Capitale de la Grèce, au cœur de la crise de la zone euro (2010-2015)." },
      { nom: "Londres", lon: -0.13, lat: 51.51, txt: "Capitale du Royaume-Uni, qui quitte l'Union européenne en 2020." },
      { nom: "Varsovie", lon: 21.01, lat: 52.23, txt: "Capitale de la Pologne, entrée dans l'UE en 2004." },
      { nom: "Lampedusa", lon: 12.6, lat: 35.5, txt: "Île italienne où arrivent de nombreux migrants traversant la Méditerranée." }
    ],
    graphiques: [
      { id: "elargissements", type: "barres", titre: "Le nombre d'États membres de la CEE puis de l'Union européenne", unite: "États",
        source: "Union européenne",
        x: ["1957", "1973", "1981", "1986", "1995", "2004", "2007", "2013", "2020"], valeurs: [6, 9, 10, 12, 15, 25, 27, 28, 27], quoi: "le nombre d'États membres",
        questions: [
          { q: "Quel élargissement est le plus important ?", r: "Celui de 2004, avec dix nouveaux États, surtout d'Europe centrale et orientale", faux: ["Celui de 1973, avec le Royaume-Uni", "Celui de 1995", "Celui de 2020"], expl: "En 2004, l'UE passe de 15 à 25 membres : elle réunit l'Europe divisée par la guerre froide. En 2020, le Brexit fait baisser le nombre de membres." }
        ] }
    ],
    trous: [
      { titre: "L'Union européenne depuis 1992", texte: "Le traité de [Maastricht] crée l'Union européenne en 1992. L'espace [Schengen] supprime les contrôles aux frontières intérieures. Les pièces et billets en [euros] circulent depuis 2002. En 2004, l'UE s'[élargit] à dix nouveaux États. En 2005, les Français rejettent par [référendum] le traité constitutionnel. Le traité de [Lisbonne] le remplace en 2007. En 2020, le Royaume-Uni quitte l'UE : c'est le [Brexit]." }
    ],
    capable: [
      "Expliquer le passage de la CEE à l'Union européenne.",
      "Distinguer élargissement et approfondissement, avec des exemples datés.",
      "Expliquer les débats entre Europe des États et Europe des citoyens (référendums, traités).",
      "Présenter les crises et les remises en question de l'UE."
    ],
    intrus: [
      { items: ["Maastricht", "Amsterdam", "Lisbonne", "Varsovie"], intrus: "Varsovie", expl: "Le pacte de Varsovie est l'alliance militaire du bloc soviétique ; Maastricht, Amsterdam et Lisbonne sont des traités européens." },
      { items: ["Autriche", "Finlande", "Suède", "Pologne"], intrus: "Pologne", expl: "La Pologne entre dans l'UE en 2004 ; l'Autriche, la Finlande et la Suède en 1995." },
      { items: ["Euro", "Schengen", "Citoyenneté européenne", "Brexit"], intrus: "Brexit", expl: "Le Brexit est une sortie de l'UE ; les trois autres sont des approfondissements de la construction européenne." },
      { items: ["Commission européenne", "Parlement européen", "Banque centrale européenne", "OTAN"], intrus: "OTAN", expl: "L'OTAN est une alliance militaire distincte de l'UE ; les trois autres sont des institutions de l'Union." }
    ],
    ppo: [
      {
        id: "tunnel", court: "PPO Tunnel sous la Manche",
        titre: "Le tunnel sous la Manche",
        question: "En quoi le tunnel sous la Manche est-il un symbole de la coopération européenne, mais aussi de ses limites ?",
        branches: [
          { titre: "Un vieux rêve devenu projet", points: [
            "L'idée d'un lien fixe entre la France et l'Angleterre date du XIXᵉ siècle ; les projets échouent longtemps, notamment par méfiance britannique.",
            "En 1986, Margaret Thatcher et François Mitterrand signent le traité de Canterbury : le tunnel sera financé par des capitaux privés."
          ] },
          { titre: "Un chantier exceptionnel", points: [
            "Les travaux, commencés en 1987-1988, mobilisent des milliers d'ouvriers ; les équipes française et britannique se rejoignent sous la mer en décembre 1990.",
            "Le tunnel, long d'environ 50 km dont près de 38 sous la mer, relie Coquelles (près de Calais) à Folkestone.",
            "Il est inauguré le 6 mai 1994 par la reine Élisabeth II et François Mitterrand."
          ] },
          { titre: "Un lien au cœur de l'Europe", points: [
            "L'Eurostar relie Paris et Londres en un peu plus de deux heures ; les navettes transportent voitures et camions.",
            "Le tunnel facilite les échanges entre le Royaume-Uni et le continent."
          ] },
          { titre: "Des limites et des tensions", points: [
            "Les coûts dépassent largement les prévisions, ce qui fragilise longtemps la société Eurotunnel.",
            "Calais devient un point de passage pour des migrants qui tentent de rejoindre le Royaume-Uni (camp de Sangatte, 1999-2002).",
            "Le Brexit rétablit des contrôles douaniers aux deux extrémités du tunnel."
          ] }
        ],
        reperes: [
          { a: "1986-02-12", date: "février 1986", txt: "Traité de Canterbury entre la France et le Royaume-Uni." },
          { a: "1990-12-01", date: "décembre 1990", txt: "Jonction des tunneliers français et britanniques." },
          { a: "1994-05-06", date: "6 mai 1994", txt: "Inauguration du tunnel." },
          { a: "1994-11-14", date: "novembre 1994", txt: "Premiers trains Eurostar entre Paris, Londres et Bruxelles." }
        ],
        notions: [
          { mot: "Lien fixe", def: "Infrastructure permanente (pont, tunnel) qui relie deux territoires séparés par la mer." },
          { mot: "Partenariat public-privé", def: "Projet décidé par des États mais financé et exploité par des entreprises privées, comme le tunnel." }
        ],
        lieux: [
          { nom: "Coquelles", lon: 1.8, lat: 50.93, txt: "Commune près de Calais, entrée française du tunnel sous la Manche." },
          { nom: "Folkestone", lon: 1.17, lat: 51.08, txt: "Ville du Kent, entrée britannique du tunnel sous la Manche." }
        ],
        pieges: [
          "Le tunnel n'est pas un projet de l'UE : c'est un accord franco-britannique, financé par le privé.",
          "Le Royaume-Uni n'a jamais été dans l'espace Schengen : les contrôles de passeport existaient déjà avant le Brexit."
        ],
        mots: ["traité de Canterbury", "Thatcher", "Mitterrand", "financement privé", "Eurostar", "Calais", "migrants", "Brexit"],
        reponse: "Rêvé depuis le XIXᵉ siècle, le tunnel sous la Manche est décidé en 1986 par Margaret Thatcher et François Mitterrand (traité de Canterbury) et financé par des capitaux privés. Après un chantier exceptionnel, il est inauguré le 6 mai 1994 : long d'environ 50 km, il relie Coquelles à Folkestone. Avec l'Eurostar et les navettes, il rapproche le Royaume-Uni du continent et symbolise la coopération européenne. Mais il en montre aussi les limites : les coûts explosent, Calais devient un point de tension pour les migrants qui veulent passer en Angleterre, et le Brexit rétablit des contrôles douaniers aux deux extrémités."
      },
      {
        id: "euro", court: "PPO L'euro",
        titre: "L'euro : genèse, mise en place et débats",
        question: "Comment l'euro a-t-il été créé, et pourquoi fait-il débat ?",
        branches: [
          { titre: "La genèse", points: [
            "Après la fin de Bretton Woods (1971), les Européens cherchent à stabiliser leurs monnaies : système monétaire européen (1979).",
            "Le rapport Delors (1989) propose une union économique et monétaire ; le traité de Maastricht (1992) la décide."
          ] },
          { titre: "La mise en place", points: [
            "Pour adopter l'euro, les États doivent respecter des critères : inflation faible, déficit public inférieur à 3 % du PIB, dette publique inférieure à 60 % du PIB.",
            "La Banque centrale européenne, à Francfort, est créée en 1998.",
            "L'euro naît le 1er janvier 1999 dans onze pays ; les pièces et billets circulent le 1er janvier 2002 dans douze pays."
          ] },
          { titre: "Une monnaie qui s'étend", points: [
            "La zone euro compte 21 États en 2026 (la Bulgarie est la dernière à l'avoir adoptée).",
            "Le Danemark a obtenu de ne pas l'adopter ; les Suédois l'ont refusé par référendum en 2003."
          ] },
          { titre: "Des débats", points: [
            "Les États perdent leur souveraineté monétaire et ne peuvent plus dévaluer.",
            "Lors du passage à l'euro, beaucoup de Français ont eu le sentiment d'une hausse des prix.",
            "La crise de la zone euro (Grèce, 2010-2015) oppose solidarité et rigueur ; la BCE intervient pour sauver la monnaie unique (2012)."
          ] }
        ],
        reperes: [
          { a: "1979-03-13", date: "1979", txt: "Système monétaire européen." },
          { a: "1989-04-17", date: "1989", txt: "Rapport Delors sur l'union économique et monétaire." },
          { a: "1992-02-07", date: "1992", txt: "Le traité de Maastricht décide la monnaie unique." },
          { a: "1998-06-01", date: "1998", txt: "Création de la Banque centrale européenne." },
          { a: "1999-01-01", date: "1er janvier 1999", txt: "Naissance de l'euro." },
          { a: "2002-01-01", date: "1er janvier 2002", txt: "Les pièces et billets en euros entrent en circulation." },
          { a: "2010-05-02", date: "2010", txt: "Premier plan d'aide à la Grèce : début de la crise de la zone euro." }
        ],
        notions: [
          { mot: "Critères de convergence", def: "Conditions fixées par le traité de Maastricht pour adopter l'euro (inflation, déficit, dette)." },
          { mot: "BCE", def: "Banque centrale européenne : elle fixe les taux d'intérêt et veille à la stabilité des prix dans la zone euro." },
          { mot: "Souveraineté monétaire", def: "Pouvoir d'un État de gérer sa propre monnaie, auquel renoncent les pays de la zone euro." }
        ],
        pieges: [
          "Tous les pays de l'UE n'ont pas l'euro : 21 sur 27 en 2026.",
          "L'euro existe depuis 1999 ; seuls les pièces et billets datent de 2002."
        ],
        mots: ["Maastricht", "union économique et monétaire", "critères de convergence", "BCE", "1999", "2002", "souveraineté monétaire", "crise de la zone euro"],
        reponse: "Après la fin du système de Bretton Woods, les Européens cherchent à stabiliser leurs monnaies (système monétaire européen, 1979). Le rapport Delors (1989) propose une monnaie unique, décidée par le traité de Maastricht en 1992. Les États doivent respecter des critères de convergence, comme un déficit public inférieur à 3 % du PIB. La BCE est créée à Francfort en 1998 ; l'euro naît en 1999 et les pièces et billets circulent en 2002. Aujourd'hui partagé par 21 États, il fait débat : les pays perdent leur souveraineté monétaire, le passage à l'euro a été associé à une hausse des prix, et la crise de la zone euro (2010-2015) a opposé solidarité et rigueur."
      }
    ]
  },
  {
    id: "tle-h4-c3", n: "Tle", d: "histoire", carte: "france",
    theme: "Thème 4 · Le monde, l'Europe et la France depuis les années 1990, entre coopérations et conflits",
    num: "Chapitre 11",
    titre: "La République française",
    question: "Comment la République française réaffirme-t-elle ses principes tout en s'adaptant aux évolutions de la société ?",
    plan: [
      "La Vᵉ République : un régime stable qui connaît de nombreuses réformes institutionnelles",
      "La réaffirmation du principe de laïcité (2004)",
      "Les combats pour l'égalité et les nouveaux droits : parité, Pacs, mariage"
    ],
    cle: "Depuis les années 1990, la Vᵉ République reste stable mais se réforme (quinquennat, décentralisation, révision de 2008) ; elle réaffirme la laïcité (2004) et étend l'égalité des droits (parité, Pacs, mariage pour tous).",
    essentiel: [
      "La Vᵉ République est stable, mais ses institutions évoluent : trois cohabitations (1986-1988, 1993-1995, 1997-2002) ; quinquennat adopté par référendum en 2000 ; révision de 2008 qui limite le président à deux mandats consécutifs et permet aux citoyens de contester une loi devant le Conseil constitutionnel (question prioritaire de constitutionnalité).",
      "La décentralisation s'approfondit : la Constitution affirme en 2003 que l'organisation de la République est « décentralisée » ; les régions sont regroupées (13 régions métropolitaines en 2016).",
      "La laïcité est réaffirmée : la loi du 15 mars 2004 interdit les signes religieux ostensibles à l'école publique ; elle prolonge la loi de séparation des Églises et de l'État de 1905.",
      "L'égalité progresse : révision constitutionnelle sur la parité (1999) et loi du 6 juin 2000 ; Pacs (1999) ; mariage pour les couples de même sexe (2013) ; liberté de recourir à l'IVG inscrite dans la Constitution (2024)."
    ],
    reperes: [
      { a: "1999-07-08", date: "juillet 1999", txt: "Révision constitutionnelle sur l'égal accès des femmes et des hommes aux mandats électoraux." },
      { a: "1999-11-15", date: "novembre 1999", txt: "Création du pacte civil de solidarité (Pacs)." },
      { a: "2000-06-06", date: "6 juin 2000", txt: "Loi sur la parité en politique." },
      { a: "2000-09-24", date: "septembre 2000", txt: "Référendum : adoption du quinquennat." },
      { a: "2003-03-28", date: "mars 2003", txt: "Révision constitutionnelle : « l'organisation de la République est décentralisée »." },
      { a: "2004-03-15", date: "15 mars 2004", txt: "Loi sur les signes religieux à l'école publique." },
      { a: "2008-07-23", date: "juillet 2008", txt: "Grande révision constitutionnelle (deux mandats présidentiels consécutifs au plus, QPC)." },
      { a: "2013-05-17", date: "mai 2013", txt: "Loi ouvrant le mariage aux couples de même sexe." },
      { a: "2016-01-01", date: "1er janvier 2016", txt: "La France métropolitaine passe de 22 à 13 régions." },
      { a: "2024-03-08", date: "mars 2024", txt: "La liberté de recourir à l'IVG est inscrite dans la Constitution." }
    ],
    notions: [
      { mot: "Quinquennat", def: "Mandat présidentiel de cinq ans, adopté par référendum en 2000 et appliqué depuis 2002." },
      { mot: "Cohabitation", def: "Coexistence d'un président et d'une majorité parlementaire de bords opposés." },
      { mot: "Laïcité", def: "Principe de séparation des religions et de l'État (loi de 1905) : l'État est neutre et garantit la liberté de conscience." },
      { mot: "Parité", def: "Égal accès des femmes et des hommes aux mandats électoraux et aux responsabilités." },
      { mot: "Pacs", def: "Pacte civil de solidarité : contrat qui organise la vie commune de deux personnes, de sexe différent ou de même sexe (1999)." },
      { mot: "Décentralisation", def: "Transfert de compétences et de moyens de l'État vers les collectivités territoriales." },
      { mot: "Collectivité territoriale", def: "Commune, département ou région, administrés par des élus." },
      { mot: "QPC", def: "Question prioritaire de constitutionnalité : depuis 2010, tout justiciable peut demander au Conseil constitutionnel si une loi respecte ses droits." },
      { mot: "Révision constitutionnelle", def: "Modification de la Constitution, votée par le Parlement réuni en Congrès ou par référendum." }
    ],
    personnages: [
      { nom: "Lionel Jospin", dates: "né en 1937", txt: [
        "Premier ministre de la troisième cohabitation (1997-2002).",
        "Son gouvernement fait voter la parité, le Pacs et les 35 heures.",
        "Éliminé au premier tour de l'élection présidentielle de 2002."
      ] },
      { nom: "Christiane Taubira", dates: "née en 1952", txt: [
        "Députée de la Guyane.",
        "La loi de 2001 qui reconnaît la traite et l'esclavage comme crimes contre l'humanité porte son nom.",
        "Ministre de la Justice, elle défend la loi ouvrant le mariage aux couples de même sexe (2013)."
      ] },
      { nom: "Gaston Defferre", dates: "1910-1986", txt: [
        "Maire de Marseille pendant plus de trente ans.",
        "Ministre de l'Intérieur et de la Décentralisation en 1981.",
        "Les lois de 1982 qui donnent plus de pouvoirs aux collectivités portent son nom."
      ] }
    ],
    lieux: [
      { nom: "Paris", lon: 2.35, lat: 48.86, txt: "Capitale ; le Parlement y vote les lois de la République." },
      { nom: "Versailles", lon: 2.13, lat: 48.8, txt: "Ville où le Parlement se réunit en Congrès pour réviser la Constitution." },
      { nom: "Marseille", lon: 5.37, lat: 43.3, txt: "Ville de Gaston Defferre, l'homme des lois de décentralisation de 1982." },
      { nom: "Lyon", lon: 4.84, lat: 45.76, txt: "Siège de la Métropole de Lyon, collectivité créée en 2015." },
      { nom: "Ajaccio", lon: 8.74, lat: 41.93, txt: "Siège de la Collectivité de Corse, collectivité unique créée en 2018." },
      { nom: "Strasbourg", lon: 7.75, lat: 48.57, txt: "Capitale de la région Grand Est, créée par la fusion de trois régions en 2016." }
    ],
    graphiques: [
      { id: "femmes-deputees", type: "barres", titre: "La part des femmes à l'Assemblée nationale (en %)", unite: "%",
        source: "Assemblée nationale (après chaque élection législative, valeurs arrondies)",
        x: ["1993", "1997", "2002", "2007", "2012", "2017", "2022", "2024"], valeurs: [6, 11, 12, 19, 27, 39, 37, 36], quoi: "la part des femmes",
        questions: [
          { q: "Que montre ce graphique sur la loi sur la parité de 2000 ?", r: "Elle a fait progresser lentement la place des femmes, mais l'égalité n'est pas encore atteinte", faux: ["Elle a immédiatement imposé 50 % de femmes députées", "Elle n'a eu aucun effet", "Elle a fait baisser le nombre de femmes"], expl: "Aux législatives, la loi ne prévoit que des pénalités financières pour les partis : la part des femmes progresse, surtout en 2017, mais reste sous 40 %." }
        ] }
    ],
    trous: [
      { titre: "La République depuis les années 1990", texte: "En 2000, le mandat présidentiel passe à cinq ans : c'est le [quinquennat]. La loi du 15 mars 2004 réaffirme la [laïcité] à l'école. La loi du 6 juin 2000 sur la [parité] favorise l'égal accès des femmes et des hommes aux mandats. Le [Pacs] est créé en 1999 ; le mariage est ouvert aux couples de même sexe en [2013]. Avec la [décentralisation], les collectivités territoriales gagnent des compétences." }
    ],
    capable: [
      "Présenter les grandes réformes institutionnelles de la Vᵉ République depuis 1990.",
      "Expliquer la loi de 2004 et le principe de laïcité.",
      "Expliquer les avancées de l'égalité : parité, Pacs, mariage pour tous.",
      "Expliquer l'approfondissement de la décentralisation."
    ],
    intrus: [
      { items: ["Quinquennat", "QPC", "Limitation à deux mandats", "Septennat"], intrus: "Septennat", expl: "Le septennat est l'ancien mandat de sept ans, supprimé en 2000 ; les trois autres sont des réformes récentes des institutions." },
      { items: ["Commune", "Département", "Région", "Préfecture"], intrus: "Préfecture", expl: "La préfecture représente l'État ; les trois autres sont des collectivités territoriales dirigées par des élus." },
      { items: ["Parité", "Pacs", "Mariage pour tous", "Loi de 1905"], intrus: "Loi de 1905", expl: "La loi de 1905 sépare les Églises et l'État ; les trois autres sont des avancées de l'égalité depuis 1999." },
      { items: ["Lois Defferre", "Révision de 2003", "Loi NOTRe", "Loi Veil"], intrus: "Loi Veil", expl: "La loi Veil (1975) concerne l'IVG ; les trois autres sont des étapes de la décentralisation." }
    ],
    ppo: [
      {
        id: "parite", court: "PPO La parité",
        titre: "La parité : du principe aux applications",
        question: "Comment le principe de parité est-il entré dans la loi, et avec quels résultats ?",
        branches: [
          { titre: "Un constat d'inégalité", points: [
            "Les femmes votent et sont éligibles depuis 1944, mais elles restent très minoritaires parmi les élus.",
            "En 1993, on ne compte qu'environ 6 % de femmes à l'Assemblée nationale.",
            "En 1996, le « Manifeste des dix pour la parité » réclame une loi."
          ] },
          { titre: "Le principe inscrit dans la Constitution", points: [
            "La révision du 8 juillet 1999 affirme : « La loi favorise l'égal accès des femmes et des hommes aux mandats électoraux et fonctions électives. »",
            "La loi du 6 juin 2000 impose des listes paritaires aux élections à la proportionnelle (municipales dans les communes de plus de 3 500 habitants, puis de plus de 1 000 habitants à partir de 2014, régionales, européennes)."
          ] },
          { titre: "Des applications qui s'étendent", points: [
            "Aux législatives, les partis qui ne présentent pas autant de femmes que d'hommes paient des pénalités financières.",
            "En 2008, la parité s'étend aux responsabilités professionnelles et sociales ; la loi Copé-Zimmermann (2011) impose 40 % de femmes dans les conseils d'administration des grandes entreprises.",
            "Depuis 2015, les élections départementales se font par binômes femme-homme."
          ] },
          { titre: "Un bilan contrasté", points: [
            "Les conseils municipaux et régionaux sont presque paritaires.",
            "Mais les femmes restent minoritaires à l'Assemblée (environ 36 % en 2024) et parmi les maires (environ un sur cinq après les municipales de 2020)."
          ] }
        ],
        reperes: [
          { a: "1944-04-21", date: "1944", txt: "Les femmes obtiennent le droit de vote et d'éligibilité." },
          { a: "1999-07-08", date: "8 juillet 1999", txt: "Révision constitutionnelle sur la parité." },
          { a: "2000-06-06", date: "6 juin 2000", txt: "Loi sur la parité." },
          { a: "2011-01-27", date: "2011", txt: "Loi Copé-Zimmermann sur les conseils d'administration." },
          { a: "2015-03-22", date: "2015", txt: "Premières élections départementales par binômes femme-homme." }
        ],
        notions: [
          { mot: "Liste paritaire", def: "Liste électorale qui alterne une femme et un homme (ou l'inverse)." },
          { mot: "Binôme", def: "Équipe d'une femme et d'un homme élus ensemble aux élections départementales depuis 2015." }
        ],
        pieges: [
          "La parité n'est pas un quota de 50 % de femmes élues : elle impose des candidatures paritaires.",
          "Ne pas confondre le droit de vote des femmes (1944) et la parité (2000)."
        ],
        mots: ["inégalité", "révision constitutionnelle", "égal accès", "listes paritaires", "pénalités financières", "binômes", "conseils d'administration", "bilan contrasté"],
        reponse: "Électrices et éligibles depuis 1944, les femmes restent très peu nombreuses parmi les élus : environ 6 % des députés en 1993. Sous la pression d'associations et de personnalités, la révision constitutionnelle de 1999 affirme que « la loi favorise l'égal accès des femmes et des hommes aux mandats électoraux ». La loi du 6 juin 2000 impose des listes paritaires aux élections à la proportionnelle et des pénalités financières aux partis qui ne présentent pas autant de femmes que d'hommes aux législatives. La parité s'étend ensuite aux conseils d'administration (2011) et aux élections départementales (2015). Le bilan est contrasté : les assemblées locales sont presque paritaires, mais les femmes restent minoritaires à l'Assemblée nationale et parmi les maires."
      },
      {
        id: "decentralisation", court: "PPO La décentralisation",
        titre: "L'approfondissement de la décentralisation",
        question: "Comment la décentralisation a-t-elle transformé l'organisation de la République depuis 1982 ?",
        branches: [
          { titre: "Une France longtemps centralisée", points: [
            "Depuis Napoléon, les préfets représentent l'État et contrôlent communes et départements.",
            "Les décisions importantes se prennent à Paris."
          ] },
          { titre: "L'acte I (1982-1983)", points: [
            "Les lois Defferre transfèrent le pouvoir exécutif du département et de la région des préfets aux élus.",
            "La région devient une collectivité territoriale, élue au suffrage universel à partir de 1986.",
            "Les collectivités reçoivent des compétences : écoles aux communes, collèges aux départements, lycées aux régions."
          ] },
          { titre: "L'acte II (2003-2004)", points: [
            "La révision constitutionnelle de 2003 inscrit à l'article 1er que « l'organisation de la République est décentralisée ».",
            "Elle crée le référendum local et le droit à l'expérimentation ; de nouvelles compétences sont transférées (RMI aux départements)."
          ] },
          { titre: "L'acte III et les débats", points: [
            "Création des métropoles (2014) ; regroupement en 13 régions métropolitaines (2016) ; loi NOTRe (2015).",
            "Statuts particuliers : Collectivité de Corse (2018), outre-mer.",
            "Débats : le « millefeuille territorial » est jugé complexe, et les inégalités entre territoires demeurent."
          ] }
        ],
        reperes: [
          { a: "1982-03-02", date: "2 mars 1982", txt: "Loi Defferre : acte I de la décentralisation." },
          { a: "1986-03-16", date: "1986", txt: "Premières élections régionales au suffrage universel direct." },
          { a: "2003-03-28", date: "28 mars 2003", txt: "Révision constitutionnelle : acte II de la décentralisation." },
          { a: "2014-01-27", date: "2014", txt: "Loi créant les métropoles." },
          { a: "2016-01-01", date: "1er janvier 2016", txt: "13 régions métropolitaines." }
        ],
        notions: [
          { mot: "Préfet", def: "Représentant de l'État dans le département et la région." },
          { mot: "Millefeuille territorial", def: "Expression critique qui désigne l'empilement des collectivités et des structures intercommunales." },
          { mot: "Métropole", def: "Ici, intercommunalité qui regroupe les communes d'une grande agglomération et exerce de larges compétences." }
        ],
        pieges: [
          "Décentraliser, ce n'est pas rendre les régions indépendantes : la France reste une République « indivisible ».",
          "Ne pas confondre décentralisation (des élus locaux reçoivent des compétences) et déconcentration (des agents de l'État agissent sur place)."
        ],
        mots: ["centralisation", "préfet", "lois Defferre", "collectivités territoriales", "compétences", "organisation décentralisée", "13 régions", "millefeuille territorial"],
        reponse: "Longtemps très centralisée, la France confie le contrôle des collectivités aux préfets depuis Napoléon. Les lois Defferre de 1982-1983 (acte I) transfèrent le pouvoir exécutif des départements et des régions aux élus, font de la région une collectivité élue et répartissent des compétences : écoles, collèges, lycées. En 2003, l'acte II inscrit dans la Constitution que l'organisation de la République est « décentralisée » et crée le référendum local et l'expérimentation. L'acte III crée les métropoles et regroupe les régions métropolitaines en 13 en 2016. La décentralisation rapproche les décisions des citoyens, mais le « millefeuille territorial » et les inégalités entre territoires restent débattus."
      }
    ]
  },
  {
    id: "tle-g1", n: "Tle", d: "geo", carte: ["france", "asie-est", "monde"],
    theme: "Thème 1 · Mers et océans : au cœur de la mondialisation",
    num: "Questions 1 et 2 · question spécifique",
    titre: "Mers et océans : vecteurs essentiels de la mondialisation, entre appropriation, protection et liberté de circulation",
    question: "Pourquoi les mers et les océans sont-ils au cœur de la mondialisation, et pourquoi sont-ils de plus en plus disputés ?",
    plan: [
      "Des espaces de circulation : routes maritimes, ports, détroits et câbles",
      "Des espaces de ressources : pêche, hydrocarbures, minerais",
      "Des espaces appropriés : eaux territoriales, ZEE et haute mer",
      "Des espaces à sécuriser et à protéger"
    ],
    cle: "Environ 80 % du commerce mondial passe par la mer : les océans sont les autoroutes de la mondialisation et des réservoirs de ressources, que les États se partagent et se disputent, entre liberté de circulation, appropriation et protection.",
    essentiel: [
      "C'est la maritimisation de l'économie : environ 80 % des marchandises échangées dans le monde (en volume) voyagent par mer, surtout dans des porte-conteneurs géants. Les flux se concentrent sur une grande route est-ouest, de l'Asie orientale à l'Europe et à l'Amérique du Nord, qui passe par des détroits et canaux stratégiques (Malacca, Ormuz, Bab-el-Mandeb, Suez, Panama). Les câbles sous-marins transportent l'essentiel des données d'Internet.",
      "Les plus grands ports sont en Asie orientale (Shanghai, Singapour, Ningbo, Shenzhen) ; avec leur arrière-pays, ils forment des façades maritimes, comme la Northern Range en Europe (Rotterdam, Anvers, Hambourg, Le Havre).",
      "Les mers sont des réservoirs de ressources : pêche et aquaculture, hydrocarbures offshore, minerais des grands fonds. La convention de Montego Bay (1982) définit les eaux territoriales (12 milles marins) et les zones économiques exclusives (ZEE, 200 milles marins), où l'État contrôle les ressources ; au-delà commence la haute mer, où la navigation est libre.",
      "L'appropriation des mers provoque des tensions (mer de Chine méridionale, Arctique, Méditerranée orientale) ; les routes doivent être sécurisées contre la piraterie (golfe d'Aden, golfe de Guinée) et les attaques (mer Rouge depuis 2023). La surpêche et la pollution imposent des protections : aires marines protégées, traité sur la haute mer (2023)."
    ],
    reperes: [
      { a: "1869-11-17", date: "1869", txt: "Ouverture du canal de Suez." },
      { a: "1914-08-15", date: "1914", txt: "Ouverture du canal de Panama." },
      { a: "1956-04-26", date: "1956", txt: "Premier transport de conteneurs, sur l'Ideal X, aux États-Unis." },
      { a: "1978-03-16", date: "mars 1978", txt: "Marée noire de l'Amoco Cadiz sur les côtes bretonnes." },
      { a: "1982-12-10", date: "1982", txt: "Convention des Nations unies sur le droit de la mer, à Montego Bay." },
      { a: "1999-12-12", date: "décembre 1999", txt: "Naufrage de l'Erika au large de la Bretagne." },
      { a: "2016-06-26", date: "2016", txt: "Inauguration du canal de Panama élargi." },
      { a: "2016-07-12", date: "juillet 2016", txt: "La Cour permanente d'arbitrage donne raison aux Philippines contre la Chine en mer de Chine méridionale." },
      { a: "2021-03-23", date: "mars 2021", txt: "Le porte-conteneurs Ever Given bloque le canal de Suez pendant six jours." },
      { a: "2023-06-19", date: "juin 2023", txt: "Adoption à l'ONU du traité sur la haute mer." },
      { a: "2023-11-19", date: "novembre 2023", txt: "Début des attaques des rebelles houthistes contre les navires en mer Rouge." }
    ],
    notions: [
      { mot: "Maritimisation", def: "Rôle croissant des mers et des océans dans l'économie mondiale : transport, ressources, activités littorales." },
      { mot: "Conteneurisation", def: "Transport des marchandises dans des boîtes métalliques standardisées, les conteneurs, qui passent facilement du navire au camion ou au train." },
      { mot: "EVP", def: "Équivalent vingt pieds : unité de mesure des conteneurs (une boîte d'environ 6 mètres de long)." },
      { mot: "Façade maritime", def: "Littoral qui regroupe plusieurs grands ports reliés à un vaste arrière-pays (ex. : la Northern Range en Europe)." },
      { mot: "Hinterland", def: "Arrière-pays d'un port, qu'il dessert et d'où viennent les marchandises." },
      { mot: "Hub", def: "Port (ou aéroport) qui concentre et redistribue les flux vers d'autres ports (ex. : Singapour)." },
      { mot: "Détroit", def: "Bras de mer resserré entre deux terres ; les plus fréquentés sont des points de passage stratégiques." },
      { mot: "Eaux territoriales", def: "Espace maritime de 12 milles marins (environ 22 km) à partir de la côte, sur lequel l'État est souverain." },
      { mot: "ZEE", def: "Zone économique exclusive : espace maritime de 200 milles marins (environ 370 km) où l'État riverain contrôle l'exploitation des ressources." },
      { mot: "Haute mer", def: "Espace maritime au-delà des ZEE, qui n'appartient à aucun État ; la navigation y est libre." },
      { mot: "Pavillon de complaisance", def: "Immatriculation d'un navire dans un pays aux règles fiscales et sociales peu contraignantes (Panama, Liberia, îles Marshall)." },
      { mot: "Aire marine protégée", def: "Espace marin où les activités humaines sont limitées pour protéger la biodiversité." }
    ],
    personnages: [
      { nom: "Malcom McLean", dates: "1913-2001", txt: [
        "Transporteur routier américain.",
        "En 1956, il fait charger 58 conteneurs sur un vieux pétrolier, l'Ideal X.",
        "Il est considéré comme l'inventeur de la conteneurisation."
      ] },
      { nom: "Hugo Grotius", dates: "1583-1645", txt: [
        "Juriste hollandais du XVIIᵉ siècle.",
        "En 1609, il publie Mare liberum (« La mer libre »).",
        "Il défend le principe de la liberté de navigation sur les mers."
      ] },
      { nom: "Arvid Pardo", dates: "1914-1999", txt: [
        "Ambassadeur de Malte à l'ONU.",
        "En 1967, il propose que les fonds marins soient un « patrimoine commun de l'humanité ».",
        "Son discours lance les négociations qui aboutissent à la convention de Montego Bay."
      ] }
    ],
    lieux: [
      { nom: "Le Havre", lon: 0.11, lat: 49.49, txt: "Premier port français pour les conteneurs, à l'embouchure de la Seine." },
      { nom: "Marseille", lon: 5.37, lat: 43.3, txt: "Avec Fos-sur-Mer, premier port de France en tonnage." },
      { nom: "Dunkerque", lon: 2.38, lat: 51.03, txt: "Grand port industriel français de la mer du Nord." },
      { nom: "Brest", lon: -4.49, lat: 48.39, txt: "Grande base navale de l'Atlantique ; les sous-marins nucléaires sont basés à l'île Longue, tout près." },
      { nom: "Toulon", lon: 5.93, lat: 43.12, txt: "Premier port militaire français, port d'attache du porte-avions Charles-de-Gaulle." },
      { nom: "Singapour", lon: 103.82, lat: 1.29, txt: "Cité-État au débouché du détroit de Malacca, deuxième port à conteneurs du monde." },
      { nom: "Shanghai", lon: 121.47, lat: 31.23, txt: "Premier port à conteneurs du monde, à l'embouchure du Yangzi." },
      { nom: "Détroit de Malacca", lon: 100.5, lat: 3.2, txt: "Passage entre la Malaisie et Sumatra : un quart du commerce maritime mondial y passe." },
      { nom: "Îles Spratleys", lon: 114, lat: 10, txt: "Archipel de la mer de Chine méridionale revendiqué par la Chine, le Vietnam, les Philippines, la Malaisie, Brunei et Taïwan." },
      { nom: "Rotterdam", lon: 4.48, lat: 51.92, txt: "Premier port d'Europe, au cœur de la Northern Range." },
      { nom: "Canal de Suez", lon: 32.35, lat: 30.6, txt: "Canal qui relie la Méditerranée à la mer Rouge, sur la route entre l'Asie et l'Europe." },
      { nom: "Canal de Panama", lon: -79.7, lat: 9.1, txt: "Canal qui relie l'Atlantique au Pacifique, élargi en 2016." },
      { nom: "Détroit d'Ormuz", lon: 56.5, lat: 26.6, txt: "Sortie du golfe Arabo-Persique, par où passe une grande partie du pétrole exporté dans le monde." },
      { nom: "Bab-el-Mandeb", lon: 43.4, lat: 12.6, txt: "Détroit entre la mer Rouge et le golfe d'Aden, menacé par les attaques houthistes depuis 2023." },
      { nom: "Polynésie française", lon: -149.4, lat: -17.7, txt: "Collectivité d'outre-mer du Pacifique qui apporte près de la moitié de la ZEE française." },
      { nom: "La Réunion", lon: 55.5, lat: -21.1, txt: "Département d'outre-mer de l'océan Indien, avec une vaste ZEE." },
      { nom: "Saint-Pierre-et-Miquelon", lon: -56.3, lat: 46.9, txt: "Archipel français de l'Atlantique Nord, au large du Canada." }
    ],
    graphiques: [
      { id: "commerce-maritime", type: "courbes", titre: "Le commerce maritime mondial (milliards de tonnes chargées)", unite: "milliards de tonnes",
        source: "CNUCED, Étude sur les transports maritimes (valeurs arrondies)",
        x: [1970, 1980, 1990, 2000, 2010, 2019],
        series: [{ nom: "Marchandises chargées", valeurs: [2.6, 3.7, 4, 6, 8.4, 11.1] }],
        questions: [
          { q: "Comment évolue le commerce maritime depuis 1990 ?", r: "Il est presque multiplié par trois, avec l'accélération de la mondialisation", faux: ["Il diminue régulièrement", "Il reste stable", "Il s'effondre après 2000"], expl: "De 4 à plus de 11 milliards de tonnes : l'ouverture des économies et la conteneurisation font exploser les échanges par mer." }
        ] },
      { id: "ports-conteneurs", type: "barres-h", titre: "Les premiers ports à conteneurs du monde en 2023 (millions d'EVP)", unite: "millions d'EVP",
        source: "Lloyd's List, One Hundred Ports 2024 (valeurs arrondies)",
        x: ["Shanghai", "Singapour", "Ningbo-Zhoushan", "Shenzhen", "Qingdao", "Canton", "Busan", "Rotterdam"], valeurs: [49.2, 39, 35.3, 29.9, 28.8, 25.4, 23, 13.4],
        quoi: "le trafic de conteneurs", ou: "le port",
        questions: [
          { q: "Où se trouvent la plupart des plus grands ports à conteneurs ?", r: "En Asie orientale, surtout en Chine", faux: ["En Europe de l'Ouest", "En Amérique du Nord", "En Afrique"], expl: "Sept des huit premiers ports sont en Asie orientale : c'est l'« atelier du monde » qui exporte ; Rotterdam, premier port européen, n'arrive qu'en onzième position environ." }
        ] },
      { id: "zee", type: "barres-h", titre: "Les plus grandes zones économiques exclusives (millions de km²)", unite: "millions de km²",
        source: "Estimations courantes (Sea Around Us, Ifremer ; valeurs arrondies)",
        x: ["États-Unis", "France", "Australie", "Russie", "Royaume-Uni", "Indonésie"], valeurs: [11.4, 10.2, 8.5, 7.6, 6.8, 6.2],
        quoi: "la surface de la ZEE", ou: "le pays",
        questions: [
          { q: "Pourquoi la France a-t-elle l'une des plus grandes ZEE du monde ?", r: "Grâce à ses territoires d'outre-mer répartis dans tous les océans", faux: ["Grâce à la longueur de ses côtes métropolitaines", "Parce qu'elle a acheté des espaces maritimes", "Parce que la Méditerranée lui appartient"], expl: "Environ 97 % de la ZEE française se trouve outre-mer, dont près de la moitié autour de la Polynésie française." }
        ] }
    ],
    croquis: [
      { id: "mers-mondialisation", titre: "Les mers et les océans au cœur de la mondialisation", fond: "monde",
        txt: "I. Des espaces de circulation essentiels ; II. Des points de passage stratégiques ; III. Des espaces disputés et menacés.",
        elements: [
          { nom: "Grande façade maritime", couleur: "#C0392B", opacite: ".45",
            ellipse: [[119, 30, 6, 11, -25], [4.5, 52, 5, 2.2, 0], [-75, 39, 4, 4, 30]] },
          { nom: "Route maritime majeure", couleur: "#1F4E5F", epaisseur: 3.2,
            ligne: [[[121.5, 31], [115, 20], [107, 9], [103.8, 1.3], [97, 6], [80, 6], [60, 13], [44, 12.3], [38, 20], [32.5, 30], [25, 34], [12, 37], [-5.6, 36], [-10, 43], [-5, 48.5], [2, 50.8], [4.5, 52]],
              [[122, 31], [150, 36], [179.5, 38]], [[-169.5, 38], [-150, 37], [-118.3, 33.7]],
              [[-74, 40.5], [-50, 43], [-20, 46], [-5, 48.5]]] },
          { nom: "Grand port mondial", forme: "rond", couleur: "#1B1B1B", points: [[121.47, 31.23], [103.82, 1.29], [129.04, 35.1], [55.03, 25.01], [4.48, 51.92], [-118.25, 33.74]] },
          { nom: "Détroit ou canal stratégique", forme: "etoile", couleur: "#E67E22", points: [[100.5, 3.2], [56.5, 26.6], [43.4, 12.6], [32.35, 30.6], [-79.7, 9.1], [-5.6, 35.95]] },
          { nom: "Zone de tensions sur l'appropriation des mers", couleur: "#D62828", motif: "hachures",
            ellipse: [[114, 12, 7, 7, 0], [31, 34.3, 4, 1.8, 0], [60, 72, 30, 2.5, 0]] },
          { nom: "Zone de piraterie ou d'attaques contre les navires", forme: "triangle", couleur: "#7B3FA0", points: [[48, 12.5], [4, 3], [40, 16]] }
        ] }
    ],
    trous: [
      { titre: "Mers et océans", texte: "Environ 80 % du commerce mondial passe par la [mer] : c'est la maritimisation. Les marchandises voyagent dans des [conteneurs]. Les flux passent par des points stratégiques comme le détroit de [Malacca] ou le canal de [Suez]. La convention de [Montego Bay] (1982) attribue à chaque État une [ZEE] de 200 milles marins. Au-delà, la [haute mer] est libre. La France possède la deuxième ZEE du monde grâce à ses [outre-mer]." }
    ],
    capable: [
      "Expliquer le rôle des mers et des océans dans la mondialisation (flux, ports, câbles).",
      "Définir eaux territoriales, ZEE et haute mer.",
      "Localiser les grands détroits et canaux, les grandes façades maritimes et les grands ports.",
      "Expliquer les tensions liées à l'appropriation des mers et la nécessité de les protéger.",
      "Montrer en quoi la France est une puissance maritime, avec ses atouts et ses limites."
    ],
    intrus: [
      { items: ["Malacca", "Ormuz", "Bab-el-Mandeb", "Rotterdam"], intrus: "Rotterdam", expl: "Rotterdam est un port ; Malacca, Ormuz et Bab-el-Mandeb sont des détroits." },
      { items: ["Shanghai", "Singapour", "Ningbo", "Le Havre"], intrus: "Le Havre", expl: "Shanghai, Singapour et Ningbo sont parmi les premiers ports à conteneurs du monde, en Asie ; Le Havre est un port français bien plus modeste." },
      { items: ["ZEE", "Eaux territoriales", "Plateau continental", "Hinterland"], intrus: "Hinterland", expl: "L'hinterland est l'arrière-pays terrestre d'un port ; les trois autres sont des espaces maritimes définis par le droit de la mer." },
      { items: ["Polynésie française", "Nouvelle-Calédonie", "La Réunion", "Corse"], intrus: "Corse", expl: "La Corse est en métropole ; les trois autres sont des territoires d'outre-mer qui donnent à la France une immense ZEE." }
    ],
    ppo: [
      {
        id: "malacca", court: "Étude de cas · Malacca",
        titre: "Le détroit de Malacca : un point de passage majeur et stratégique",
        question: "Pourquoi le détroit de Malacca est-il un point de passage majeur et stratégique de la mondialisation ?",
        branches: [
          { titre: "Un passage obligé", points: [
            "Long de plus de 800 km, entre la péninsule malaise et l'île indonésienne de Sumatra, il relie l'océan Indien à la mer de Chine méridionale.",
            "C'est la route la plus courte entre l'Europe, le Moyen-Orient et l'Asie orientale.",
            "Il se resserre à moins de 3 km de large dans le détroit de Singapour."
          ] },
          { titre: "Un trafic considérable", points: [
            "Près d'un quart du commerce maritime mondial y passe, sur des dizaines de milliers de navires par an.",
            "C'est le premier détroit du monde pour le transport de pétrole, vers la Chine, le Japon et la Corée du Sud."
          ] },
          { titre: "Singapour, un hub mondial", points: [
            "Fondé comme comptoir britannique en 1819, indépendant en 1965, Singapour est devenu le deuxième port à conteneurs du monde.",
            "Il est aussi le premier port du monde pour l'avitaillement des navires en carburant, un grand centre de raffinage et une place financière.",
            "Des ports malaisiens, comme Port Klang, le concurrencent."
          ] },
          { titre: "Des risques et des rivalités", points: [
            "Le trafic dense multiplie les risques de collision et de pollution ; la piraterie, forte au début des années 2000, a reculé grâce aux patrouilles coordonnées de l'Indonésie, de la Malaisie et de Singapour (2004).",
            "La Chine, très dépendante du détroit, parle de « dilemme de Malacca » : elle construit des oléoducs et gazoducs à travers la Birmanie et investit dans le port de Gwadar, au Pakistan.",
            "Les États-Unis et l'Inde (îles Andaman) surveillent cette route stratégique."
          ] }
        ],
        reperes: [
          { a: "1819-02-06", date: "1819", txt: "Stamford Raffles fonde le comptoir britannique de Singapour." },
          { a: "1965-08-09", date: "1965", txt: "Indépendance de Singapour." },
          { a: "2003-11-29", date: "2003", txt: "Le président chinois Hu Jintao évoque le « dilemme de Malacca »." },
          { a: "2004-07-20", date: "2004", txt: "Début des patrouilles coordonnées contre la piraterie dans le détroit." },
          { a: "2017-04-10", date: "2017", txt: "Mise en service de l'oléoduc qui relie la côte birmane à la Chine." }
        ],
        notions: [
          { mot: "Point de passage stratégique", def: "Passage maritime étroit et très fréquenté (détroit, canal) dont le blocage perturberait le commerce mondial." },
          { mot: "Soutage", def: "Avitaillement des navires en carburant ; Singapour en est le premier port mondial." },
          { mot: "Dilemme de Malacca", def: "Expression chinoise qui désigne la dépendance de la Chine envers le détroit pour ses importations d'hydrocarbures." }
        ],
        personnages: [
          { nom: "Stamford Raffles", dates: "1781-1826", txt: [
            "Administrateur britannique de la Compagnie des Indes orientales.",
            "En 1819, il fonde un comptoir à l'extrémité de la péninsule malaise.",
            "Il en fait un port franc, ouvert à tous les marchands : Singapour."
          ] }
        ],
        lieux: [
          { nom: "Kyaukpyu", lon: 93.55, lat: 19.43, txt: "Port de Birmanie d'où partent l'oléoduc et le gazoduc vers la Chine, qui évitent le détroit de Malacca." },
          { nom: "Îles Andaman", lon: 92.73, lat: 11.62, txt: "Archipel indien à l'entrée du détroit, où l'Inde a un commandement militaire." },
          { nom: "Gwadar", lon: 62.32, lat: 25.13, txt: "Port du Pakistan aménagé par la Chine, sur la mer d'Arabie." }
        ],
        pieges: [
          "Ne pas confondre le détroit de Malacca (entre la Malaisie et Sumatra) et la mer de Chine méridionale, qu'il dessert.",
          "Un point de passage stratégique est aussi une vulnérabilité : son blocage menacerait le commerce mondial."
        ],
        mots: ["route Europe-Asie", "point de passage stratégique", "trafic", "pétrole", "Singapour", "hub", "piraterie", "dilemme de Malacca"],
        reponse: "Long de plus de 800 km entre la péninsule malaise et Sumatra, le détroit de Malacca est la route la plus courte entre l'océan Indien et la mer de Chine méridionale, donc entre l'Europe, le Moyen-Orient et l'Asie orientale. Près d'un quart du commerce maritime mondial y passe, et c'est le premier détroit pour le transport de pétrole vers la Chine, le Japon et la Corée. À son débouché, Singapour est devenu un hub mondial : deuxième port à conteneurs, premier port de soutage, place financière. Mais ce passage étroit est vulnérable (collisions, pollution, piraterie, réduite par les patrouilles depuis 2004) et suscite des rivalités : la Chine cherche à contourner ce « dilemme de Malacca » par des oléoducs à travers la Birmanie, tandis que les États-Unis et l'Inde surveillent la route."
      },
      {
        id: "mer-chine", court: "Étude de cas · Mer de Chine",
        titre: "La mer de Chine méridionale : concurrences territoriales, enjeux économiques et liberté de circulation",
        question: "Pourquoi la mer de Chine méridionale est-elle l'un des espaces maritimes les plus disputés du monde ?",
        branches: [
          { titre: "Un espace stratégique", points: [
            "Elle relie le détroit de Malacca aux grands ports d'Asie orientale : une part considérable du commerce maritime mondial la traverse.",
            "Elle est riche en poissons et contient des hydrocarbures sous ses fonds."
          ] },
          { titre: "Des revendications concurrentes", points: [
            "La Chine revendique presque toute la mer à l'intérieur de sa « ligne en neuf traits ».",
            "Le Vietnam, les Philippines, la Malaisie, Brunei et Taïwan revendiquent aussi des îles et des espaces maritimes.",
            "Les Paracels sont contrôlées par la Chine depuis 1974 ; les Spratleys sont partagées entre plusieurs occupants."
          ] },
          { titre: "La stratégie chinoise", points: [
            "Depuis 2013-2014, la Chine transforme des récifs en îles artificielles, équipées de pistes d'aviation et de radars.",
            "Elle y envoie garde-côtes et milices de pêcheurs, ce qui provoque des incidents avec les Philippines et le Vietnam."
          ] },
          { titre: "Droit international et liberté de navigation", points: [
            "En 2016, la Cour permanente d'arbitrage de La Haye juge que la « ligne en neuf traits » n'a pas de fondement juridique ; la Chine rejette la décision.",
            "Les États-Unis et leurs alliés y font naviguer des navires de guerre au nom de la liberté de circulation.",
            "Les pays de l'ASEAN négocient avec la Chine un code de conduite."
          ] }
        ],
        reperes: [
          { a: "1974-01-19", date: "1974", txt: "La Chine prend le contrôle de tout l'archipel des Paracels." },
          { a: "2013-12-01", date: "2013-2014", txt: "Début de la construction d'îles artificielles par la Chine." },
          { a: "2016-07-12", date: "juillet 2016", txt: "Sentence arbitrale en faveur des Philippines." }
        ],
        notions: [
          { mot: "Ligne en neuf traits", def: "Tracé utilisé par la Chine pour revendiquer la quasi-totalité de la mer de Chine méridionale." },
          { mot: "Poldérisation", def: "Construction de terres nouvelles gagnées sur la mer ; la Chine l'utilise pour créer des îles artificielles." }
        ],
        lieux: [
          { nom: "Îles Paracels", lon: 112, lat: 16.5, txt: "Archipel contrôlé par la Chine depuis 1974, revendiqué par le Vietnam." },
          { nom: "Manille", lon: 120.98, lat: 14.6, txt: "Capitale des Philippines, qui a obtenu en 2016 une sentence contre les revendications chinoises." }
        ],
        pieges: [
          "Le conflit n'oppose pas seulement la Chine aux États-Unis : il concerne d'abord les États riverains.",
          "Une île artificielle ne donne pas droit à une ZEE selon le droit de la mer."
        ],
        mots: ["route maritime", "ligne en neuf traits", "Paracels", "Spratleys", "îles artificielles", "sentence de 2016", "liberté de navigation", "ASEAN"],
        reponse: "La mer de Chine méridionale relie le détroit de Malacca aux ports d'Asie orientale : une part considérable du commerce mondial la traverse, et elle est riche en poissons et en hydrocarbures. La Chine revendique presque toute la mer à l'intérieur de sa « ligne en neuf traits », face au Vietnam, aux Philippines, à la Malaisie, à Brunei et à Taïwan. Elle contrôle les Paracels et construit depuis 2013 des îles artificielles militarisées dans les Spratleys. En 2016, la Cour permanente d'arbitrage donne raison aux Philippines, mais la Chine rejette la décision. Les États-Unis y défendent la liberté de navigation : c'est un espace de rivalités régionales et mondiales."
      },
      {
        id: "france-maritime", court: "Question spécifique · France",
        titre: "La France : une puissance maritime ?",
        question: "La France est-elle une grande puissance maritime ?",
        branches: [
          { titre: "Un immense domaine maritime", points: [
            "La France possède la deuxième ZEE du monde, environ 10 millions de km², juste derrière les États-Unis.",
            "Environ 97 % de cette ZEE se trouve outre-mer, dont près de la moitié autour de la Polynésie française.",
            "Elle est présente dans tous les océans."
          ] },
          { titre: "Des atouts économiques", points: [
            "Ports de Marseille-Fos, Le Havre-Rouen-Paris (HAROPA), Dunkerque ; CMA CGM, à Marseille, est le troisième armateur de porte-conteneurs du monde.",
            "Chantiers navals de Saint-Nazaire, qui construisent les plus grands paquebots du monde ; tourisme littoral ; pêche.",
            "Énergies marines : le premier parc éolien en mer, au large de Saint-Nazaire, est mis en service en 2022."
          ] },
          { titre: "Une puissance militaire", points: [
            "La Marine nationale dispose d'un porte-avions, le Charles-de-Gaulle (Toulon), et de sous-marins nucléaires lanceurs d'engins (île Longue, près de Brest), au cœur de la dissuasion.",
            "Ses bases outre-mer lui permettent de surveiller les océans et de lutter contre la piraterie."
          ] },
          { titre: "Des limites", points: [
            "Les ports français sont loin derrière Rotterdam ou Anvers : une partie du commerce français passe par les ports étrangers.",
            "La ZEE est trop vaste pour être bien surveillée (pêche illégale) ; certaines îles sont revendiquées par d'autres États (Tromelin par Maurice, Mayotte par les Comores).",
            "La France doit protéger un patrimoine naturel exceptionnel : récifs coralliens, aires marines protégées."
          ] }
        ],
        reperes: [
          { a: "1978-03-16", date: "1978", txt: "Marée noire de l'Amoco Cadiz." },
          { a: "1982-12-10", date: "1982", txt: "Convention de Montego Bay : la France obtient ses ZEE." },
          { a: "2022-11-18", date: "2022", txt: "Mise en service du premier parc éolien en mer français, au large de Saint-Nazaire." }
        ],
        notions: [
          { mot: "Puissance maritime", def: "Capacité d'un État à utiliser et contrôler les mers : flotte, ports, marine militaire, ZEE." },
          { mot: "Dissuasion nucléaire", def: "Stratégie qui empêche une attaque par la menace de représailles nucléaires, assurée notamment par les sous-marins." }
        ],
        lieux: [
          { nom: "Saint-Nazaire", lon: -2.21, lat: 47.27, txt: "Chantiers navals qui construisent les plus grands paquebots du monde ; premier parc éolien en mer français au large." },
          { nom: "Nouvelle-Calédonie", lon: 165.6, lat: -21.3, txt: "Archipel français du Pacifique Sud, avec une vaste ZEE." },
          { nom: "Kerguelen", lon: 69.3, lat: -49.3, txt: "Archipel des Terres australes et antarctiques françaises, dans le sud de l'océan Indien." },
          { nom: "Guyane", lon: -53, lat: 4, txt: "Région française d'Amérique du Sud ; le centre spatial de Kourou est sur sa côte." }
        ],
        pieges: [
          "La ZEE française n'est pas surtout en métropole : l'essentiel est outre-mer.",
          "Avoir une grande ZEE ne suffit pas à être une grande puissance maritime : il faut aussi des ports, une flotte et une marine."
        ],
        mots: ["deuxième ZEE", "outre-mer", "Polynésie française", "Marseille-Fos", "CMA CGM", "Marine nationale", "dissuasion", "limites"],
        reponse: "La France possède la deuxième ZEE du monde, environ 10 millions de km², dont 97 % outre-mer, surtout dans le Pacifique : elle est présente dans tous les océans. Elle dispose d'atouts économiques (ports de Marseille-Fos et du Havre, CMA CGM, troisième armateur mondial, chantiers de Saint-Nazaire, tourisme, énergies marines) et d'une marine militaire puissante (porte-avions, sous-marins nucléaires de la dissuasion). Mais ses ports restent loin derrière Rotterdam ou Anvers, sa ZEE est difficile à surveiller et certaines îles sont contestées. La France est donc une puissance maritime réelle mais incomplète, qui doit aussi protéger un patrimoine marin exceptionnel."
      }
    ]
  },
  {
    id: "tle-g2", n: "Tle", d: "geo", carte: ["europe-large", "monde"],
    theme: "Thème 2 · Dynamiques territoriales, coopérations et tensions dans la mondialisation",
    num: "Questions 1 et 2 · question spécifique",
    titre: "Des territoires inégalement intégrés à la mondialisation ; coopérations, tensions et régulations",
    question: "Pourquoi les territoires sont-ils inégalement intégrés à la mondialisation, et comment les États coopèrent-ils ou s'affrontent-ils pour la réguler ?",
    plan: [
      "Des centres d'impulsion qui dominent la mondialisation",
      "Des périphéries intégrées et des marges",
      "Coopérer et réguler aux échelles mondiale, régionale et locale",
      "Des tensions qui se renforcent"
    ],
    cle: "La mondialisation hiérarchise les territoires : quelques grands pôles et métropoles la dominent, d'autres s'y intègrent, d'autres restent en marge ; les États coopèrent pour la réguler (OMC, accords régionaux) mais s'affrontent aussi (guerres commerciales, sanctions).",
    essentiel: [
      "Trois grands pôles concentrent les richesses, les sièges des firmes transnationales et les flux : l'Amérique du Nord, l'Europe occidentale et l'Asie orientale. Les métropoles mondiales (New York, Londres, Tokyo, Paris, Shanghai, Singapour) commandent les échanges ; parmi les grands centres financiers, plusieurs sont aujourd'hui en Asie.",
      "Des périphéries s'intègrent : pays émergents devenus « ateliers » ou fournisseurs de matières premières, zones franches, littoraux. Mais d'autres territoires restent en marge : pays les moins avancés, espaces enclavés, régions en crise ou en guerre (Sahel). La distance, les frontières et les barrières commerciales freinent encore les échanges.",
      "Les États coopèrent pour réguler la mondialisation : à l'échelle mondiale (OMC, G20, ONU), régionale (Union européenne, ACEUM en Amérique du Nord, Mercosur, ASEAN, zone de libre-échange continentale africaine) et locale (coopérations transfrontalières).",
      "Les tensions se renforcent : guerre commerciale entre les États-Unis et la Chine depuis 2018, sanctions contre la Russie depuis 2014 et 2022, rivalités pour les matières premières et les technologies, retour du protectionnisme."
    ],
    reperes: [
      { a: "1967-08-08", date: "1967", txt: "Création de l'ASEAN." },
      { a: "1991-03-26", date: "1991", txt: "Création du Mercosur." },
      { a: "1994-01-01", date: "1994", txt: "Entrée en vigueur de l'ALENA entre les États-Unis, le Canada et le Mexique." },
      { a: "1995-01-01", date: "1995", txt: "Création de l'Organisation mondiale du commerce (OMC)." },
      { a: "2001-12-11", date: "2001", txt: "La Chine entre dans l'OMC." },
      { a: "2008-11-15", date: "2008", txt: "Premier sommet des chefs d'État du G20, face à la crise financière." },
      { a: "2013-09-07", date: "2013", txt: "La Chine lance les « nouvelles routes de la soie »." },
      { a: "2018-07-06", date: "2018", txt: "Début de la guerre commerciale entre les États-Unis et la Chine." },
      { a: "2020-07-01", date: "2020", txt: "L'ACEUM remplace l'ALENA." },
      { a: "2021-01-01", date: "2021", txt: "Début des échanges dans la zone de libre-échange continentale africaine (ZLECAf)." },
      { a: "2022-02-24", date: "2022", txt: "Sanctions massives contre la Russie après l'invasion de l'Ukraine." }
    ],
    notions: [
      { mot: "Mondialisation", def: "Mise en relation des différentes parties du monde par des flux de marchandises, de capitaux, de personnes et d'informations." },
      { mot: "Centre d'impulsion", def: "Espace qui organise et commande les flux de la mondialisation (grands pôles, métropoles mondiales)." },
      { mot: "Métropole mondiale", def: "Très grande ville qui concentre des fonctions de commandement à l'échelle du monde (sièges de firmes, finance, culture)." },
      { mot: "Firme transnationale", def: "Entreprise qui produit et vend dans de nombreux pays, avec des filiales à l'étranger." },
      { mot: "IDE", def: "Investissements directs à l'étranger : capitaux investis par une entreprise pour créer ou acheter une entreprise dans un autre pays." },
      { mot: "Périphérie intégrée", def: "Territoire qui participe à la mondialisation sans la commander (pays émergents, zones franches)." },
      { mot: "Marge", def: "Territoire faiblement intégré à la mondialisation, à l'écart des flux (pays les moins avancés, espaces enclavés)." },
      { mot: "Zone franche", def: "Espace où les entreprises bénéficient d'avantages fiscaux et douaniers pour attirer les investissements." },
      { mot: "Libre-échange", def: "Commerce international sans droits de douane ni restrictions." },
      { mot: "Protectionnisme", def: "Politique qui protège la production nationale de la concurrence étrangère (droits de douane, quotas)." },
      { mot: "Régionalisation", def: "Regroupement d'États voisins dans des organisations économiques (UE, ASEAN, Mercosur…)." },
      { mot: "Régulation", def: "Ensemble de règles et d'institutions qui encadrent la mondialisation (OMC, accords, normes)." }
    ],
    personnages: [],
    lieux: [
      { nom: "Londres", lon: -0.13, lat: 51.51, txt: "Métropole mondiale, grande place financière (la City)." },
      { nom: "Paris", lon: 2.35, lat: 48.86, txt: "Métropole mondiale, premier quartier d'affaires d'Europe continentale (La Défense)." },
      { nom: "Francfort", lon: 8.68, lat: 50.11, txt: "Place financière allemande, siège de la Banque centrale européenne." },
      { nom: "Zurich", lon: 8.54, lat: 47.37, txt: "Grande place financière suisse." },
      { nom: "Moscou", lon: 37.62, lat: 55.75, txt: "Capitale de la Russie, qui concentre une grande part des richesses du pays." },
      { nom: "New York", lon: -74.01, lat: 40.71, txt: "Première métropole mondiale, siège de l'ONU et de Wall Street." },
      { nom: "Tokyo", lon: 139.69, lat: 35.69, txt: "Capitale du Japon, l'une des plus grandes métropoles du monde." },
      { nom: "Shanghai", lon: 121.47, lat: 31.23, txt: "Métropole économique de la Chine, premier port du monde." },
      { nom: "Singapour", lon: 103.82, lat: 1.29, txt: "Cité-État, grande place financière et hub portuaire de l'Asie du Sud-Est." },
      { nom: "Genève", lon: 6.14, lat: 46.2, txt: "Ville suisse, siège de l'OMC et de nombreuses organisations internationales." },
      { nom: "Lagos", lon: 3.38, lat: 6.52, txt: "Mégapole du Nigeria, porte d'entrée de l'Afrique de l'Ouest dans la mondialisation." },
      { nom: "Niamey", lon: 2.11, lat: 13.51, txt: "Capitale du Niger, pays du Sahel parmi les moins avancés du monde." }
    ],
    graphiques: [
      { id: "exportations", type: "barres-h", titre: "Les premiers exportateurs de marchandises en 2023 (milliards de dollars)", unite: "milliards de dollars",
        source: "Organisation mondiale du commerce (valeurs arrondies)",
        x: ["Chine", "États-Unis", "Allemagne", "Pays-Bas", "Japon", "Italie", "France"], valeurs: [3380, 2020, 1688, 935, 717, 677, 648],
        quoi: "les exportations", ou: "le pays",
        questions: [
          { q: "Que montre ce classement ?", r: "La Chine est devenue le premier exportateur, devant les puissances de la Triade", faux: ["Les pays d'Afrique dominent le commerce", "La France est le premier exportateur", "Les États-Unis exportent deux fois plus que la Chine"], expl: "Atelier du monde, la Chine exporte bien plus que les États-Unis ; les pôles d'Amérique du Nord, d'Europe et d'Asie orientale dominent le commerce." }
        ] },
      { id: "touristes", type: "barres-h", titre: "Les pays qui accueillent le plus de touristes internationaux en 2023 (millions d'arrivées)", unite: "millions",
        source: "ONU Tourisme (valeurs arrondies)",
        x: ["France", "Espagne", "États-Unis", "Italie", "Turquie", "Mexique"], valeurs: [100, 85, 67, 57, 55, 42],
        quoi: "le nombre de touristes", ou: "le pays",
        questions: [
          { q: "Que montre ce graphique sur l'attractivité de la France ?", r: "La France est la première destination touristique du monde", faux: ["La France attire peu de touristes", "La France est derrière tous les pays européens", "Le tourisme ne concerne que l'Asie"], expl: "Avec environ 100 millions de touristes internationaux, la France est la première destination mondiale, signe de son attractivité." }
        ] }
    ],
    croquis: [
      { id: "integration", titre: "Des territoires inégalement intégrés à la mondialisation", fond: "monde",
        txt: "I. Les centres d'impulsion ; II. Des périphéries intégrées ; III. Des marges.",
        elements: [
          { nom: "Grand pôle de la mondialisation", couleur: "#C0392B", opacite: ".55",
            ellipse: [[-82, 40, 13, 9, 0], [7, 49, 9, 6, 0], [125, 33, 13, 9, -20]] },
          { nom: "Puissance émergente intégrée", couleur: "#E67E22", motif: "hachures",
            zone: [[[75, 39], [80, 45], [87, 49], [97, 43], [111, 45], [120, 53], [134, 48], [131, 42], [125, 40], [122, 31], [120, 23], [108, 21], [98, 24], [92, 28], [80, 31]],
              [[68, 24], [72, 33], [78, 35], [81, 30], [88, 27.5], [97, 28], [92, 22], [87, 21.5], [80, 8], [76, 8], [72, 20]],
              [[-74, -8], [-70, 2], [-60, 5], [-51, 4], [-35, -6], [-39, -15], [-48, -27], [-53, -34], [-58, -30], [-55, -25], [-58, -20], [-60, -14], [-66, -10]],
              [[-117, 32.5], [-106, 31.5], [-97, 26], [-97, 21], [-92, 18], [-87, 21], [-88, 16], [-92, 14.5], [-105, 20], [-110, 23]]] },
          { nom: "Espace en marge de la mondialisation", couleur: "#8C8C8C", opacite: ".5",
            zone: [[-17, 15], [-5, 20], [15, 23], [24, 20], [32, 15], [38, 10], [33, 3], [28, -5], [20, -8], [12, -2], [8, 5], [-5, 6], [-15, 10]] },
          { nom: "Métropole mondiale", forme: "carre", couleur: "#1B1B1B", points: [[-74.01, 40.71], [-0.13, 51.51], [2.35, 48.86], [139.69, 35.69], [121.47, 31.23], [103.82, 1.29]] },
          { nom: "Flux majeurs entre les pôles", couleur: "#1F4E5F", fleches: [[[-70, 43], [-5, 50]], [[110, 30], [20, 45]], [[142, 36], [178, 38]], [[-168, 38], [-128, 37]]] }
        ] }
    ],
    trous: [
      { titre: "Des territoires inégalement intégrés", texte: "La mondialisation est dominée par trois grands [pôles] : l'Amérique du Nord, l'Europe occidentale et l'Asie orientale. Les [métropoles] mondiales, comme New York ou Londres, commandent les flux. Les pays [émergents] s'intègrent, tandis que les pays les moins avancés restent en [marge]. L'[OMC], créée en 1995, régule le commerce mondial. Depuis 2018, une guerre [commerciale] oppose les États-Unis et la Chine." }
    ],
    capable: [
      "Expliquer pourquoi les territoires sont inégalement intégrés à la mondialisation.",
      "Distinguer centres d'impulsion, périphéries intégrées et marges, avec des exemples localisés.",
      "Présenter les acteurs et les échelles de la régulation (OMC, organisations régionales, coopérations locales).",
      "Expliquer les tensions actuelles : guerre commerciale, sanctions, protectionnisme.",
      "Montrer le rayonnement international et l'attractivité inégale de la France."
    ],
    intrus: [
      { items: ["New York", "Londres", "Tokyo", "Niamey"], intrus: "Niamey", expl: "Niamey, capitale du Niger, est en marge de la mondialisation ; les trois autres sont des métropoles mondiales." },
      { items: ["ASEAN", "Mercosur", "ACEUM", "OTAN"], intrus: "OTAN", expl: "L'OTAN est une alliance militaire ; les trois autres sont des organisations régionales économiques." },
      { items: ["Droits de douane", "Quotas", "Sanctions", "Libre-échange"], intrus: "Libre-échange", expl: "Le libre-échange supprime les obstacles au commerce ; les trois autres en créent." },
      { items: ["Alliance française", "Institut français", "Lycées français", "Banque centrale européenne"], intrus: "Banque centrale européenne", expl: "La BCE est une institution de l'UE ; les trois autres sont des outils du rayonnement culturel de la France." }
    ],
    ppo: [
      {
        id: "russie", court: "Étude de cas · Russie",
        titre: "La Russie, un pays dans la mondialisation : inégale intégration des territoires, tensions et coopérations internationales",
        question: "Comment la Russie, immense et riche en ressources, s'intègre-t-elle à la mondialisation, et pourquoi en est-elle aujourd'hui en partie isolée ?",
        branches: [
          { titre: "Une intégration fondée sur les ressources", points: [
            "Le plus vaste pays du monde (17 millions de km²) est un grand exportateur de pétrole, de gaz, de céréales et de métaux.",
            "Avant 2022, les hydrocarbures représentaient environ la moitié de ses exportations : c'est une économie de rente."
          ] },
          { titre: "Des territoires très inégaux", points: [
            "Moscou et Saint-Pétersbourg concentrent les sièges des entreprises, les investissements et les revenus élevés.",
            "La Sibérie et l'Extrême-Orient, immenses et peu peuplés, sont surtout des espaces d'extraction (gaz de Yamal, pétrole).",
            "L'Arctique devient un espace stratégique avec la route maritime du Nord."
          ] },
          { titre: "Des tensions avec l'Occident", points: [
            "Annexion de la Crimée (2014), puis invasion de l'Ukraine (2022) : l'Union européenne et les États-Unis imposent des sanctions massives.",
            "L'Europe réduit fortement ses achats de gaz russe ; des entreprises occidentales quittent le pays."
          ] },
          { titre: "Des coopérations réorientées", points: [
            "La Russie se tourne vers l'Asie : gazoduc Force de Sibérie vers la Chine (2019), ventes de pétrole à l'Inde et à la Chine.",
            "Elle s'appuie sur les BRICS, l'Organisation de coopération de Shanghai et l'Union économique eurasiatique."
          ] }
        ],
        reperes: [
          { a: "2001-06-15", date: "2001", txt: "Création de l'Organisation de coopération de Shanghai." },
          { a: "2014-03-18", date: "2014", txt: "Annexion de la Crimée et premières sanctions occidentales." },
          { a: "2015-01-01", date: "2015", txt: "Création de l'Union économique eurasiatique." },
          { a: "2019-12-02", date: "2019", txt: "Mise en service du gazoduc Force de Sibérie vers la Chine." },
          { a: "2022-02-24", date: "2022", txt: "Invasion de l'Ukraine et sanctions massives." }
        ],
        notions: [
          { mot: "Économie de rente", def: "Économie qui dépend surtout de l'exportation de ressources naturelles (pétrole, gaz)." },
          { mot: "Sanctions", def: "Mesures économiques ou politiques prises contre un État pour le contraindre (embargo, gel des avoirs)." }
        ],
        lieux: [
          { nom: "Saint-Pétersbourg", lon: 30.32, lat: 59.94, txt: "Deuxième ville de Russie, grand port de la Baltique." },
          { nom: "Vladivostok", lon: 131.9, lat: 43.12, txt: "Port russe du Pacifique, tourné vers l'Asie." },
          { nom: "Novossibirsk", lon: 82.92, lat: 55.03, txt: "Plus grande ville de Sibérie, sur le Transsibérien." }
        ],
        pieges: [
          "La Russie n'est pas absente de la mondialisation : elle y participe surtout par ses exportations de ressources.",
          "Les sanctions n'ont pas coupé la Russie du monde : elle a réorienté ses échanges vers l'Asie."
        ],
        mots: ["hydrocarbures", "économie de rente", "Moscou", "Sibérie", "Arctique", "sanctions", "réorientation vers l'Asie", "BRICS"],
        reponse: "Plus vaste pays du monde, la Russie s'intègre à la mondialisation surtout par ses exportations de matières premières : avant 2022, les hydrocarbures représentaient environ la moitié de ses exportations. Ses territoires sont très inégaux : Moscou et Saint-Pétersbourg concentrent richesses et investissements, tandis que la Sibérie et l'Arctique sont surtout des espaces d'extraction. L'annexion de la Crimée (2014) puis l'invasion de l'Ukraine (2022) entraînent des sanctions occidentales massives et la baisse des achats européens de gaz. La Russie réoriente alors ses échanges vers l'Asie (gazoduc vers la Chine, pétrole vendu à l'Inde) et s'appuie sur les BRICS : son intégration se recompose."
      },
      {
        id: "france-rayonnement", court: "Question spécifique · France",
        titre: "La France : un rayonnement international différencié et une inégale attractivité dans la mondialisation",
        question: "Quels sont les atouts et les limites du rayonnement et de l'attractivité de la France dans la mondialisation ?",
        branches: [
          { titre: "Un rayonnement diplomatique et militaire", points: [
            "Membre permanent du Conseil de sécurité de l'ONU, puissance nucléaire, la France possède l'un des trois premiers réseaux diplomatiques du monde.",
            "Elle intervient militairement à l'étranger et dispose de bases (Djibouti, Émirats arabes unis)."
          ] },
          { titre: "Un rayonnement culturel et linguistique", points: [
            "L'Organisation internationale de la francophonie réunit des dizaines d'États ; le français est parlé par plus de 300 millions de personnes.",
            "Instituts français, Alliances françaises, lycées français à l'étranger, Louvre Abu Dhabi (2017) diffusent la culture française."
          ] },
          { titre: "Une forte attractivité", points: [
            "Première destination touristique du monde, avec environ 100 millions de touristes internationaux.",
            "Depuis 2019, la France est le premier pays européen pour le nombre de projets d'investissements étrangers.",
            "Elle accueille des organisations internationales (UNESCO et OCDE à Paris, Conseil de l'Europe à Strasbourg, Interpol à Lyon) et de grands événements (Jeux olympiques de Paris 2024)."
          ] },
          { titre: "Une attractivité inégale", points: [
            "Paris et les grandes métropoles concentrent sièges, investissements et touristes.",
            "D'autres territoires, ruraux ou industriels en reconversion, sont moins attractifs.",
            "Le poids de la France recule face aux puissances émergentes ; son influence est contestée, notamment en Afrique."
          ] }
        ],
        reperes: [
          { a: "1970-03-20", date: "1970", txt: "Création de l'Agence de coopération culturelle et technique, ancêtre de l'OIF." },
          { a: "2017-11-08", date: "2017", txt: "Inauguration du Louvre Abu Dhabi." },
          { a: "2024-07-26", date: "2024", txt: "Jeux olympiques de Paris." }
        ],
        notions: [
          { mot: "Rayonnement", def: "Capacité d'un pays à diffuser sa culture, sa langue et ses valeurs, et à exercer une influence dans le monde." },
          { mot: "Attractivité", def: "Capacité d'un territoire à attirer des personnes, des entreprises, des capitaux et des événements." },
          { mot: "Francophonie", def: "Ensemble des personnes et des pays qui parlent français ; l'OIF réunit des États qui ont le français en partage." }
        ],
        lieux: [
          { nom: "Abu Dhabi", lon: 54.37, lat: 24.47, txt: "Capitale des Émirats arabes unis, où le Louvre Abu Dhabi ouvre en 2017." },
          { nom: "Djibouti", lon: 43.15, lat: 11.59, txt: "Pays de la Corne de l'Afrique, où se trouve la plus grande base militaire française à l'étranger." }
        ],
        pieges: [
          "Le rayonnement ne se limite pas à l'économie : il passe aussi par la langue, la culture et la diplomatie.",
          "L'attractivité n'est pas la même partout en France : elle est très concentrée."
        ],
        mots: ["Conseil de sécurité", "réseau diplomatique", "francophonie", "soft power", "première destination touristique", "investissements étrangers", "organisations internationales", "métropoles"],
        reponse: "La France exerce un rayonnement mondial : membre permanent du Conseil de sécurité et puissance nucléaire, elle possède l'un des premiers réseaux diplomatiques du monde et des bases militaires à l'étranger. Son influence culturelle passe par la francophonie, les instituts et lycées français, ou le Louvre Abu Dhabi. Elle est aussi très attractive : première destination touristique du monde, premier pays européen pour les projets d'investissements étrangers, siège d'organisations internationales, hôte des Jeux de 2024. Mais cette attractivité est inégale : elle se concentre à Paris et dans les grandes métropoles, et l'influence française recule face aux puissances émergentes."
      }
    ]
  },
  {
    id: "tle-g3", n: "Tle", d: "geo", carte: ["france", "europe-large"],
    theme: "Thème 3 · L'Union européenne dans la mondialisation : des dynamiques complexes",
    num: "Questions 1 et 2 · question spécifique",
    titre: "Des politiques européennes entre compétitivité et cohésion des territoires ; l'UE, un espace plus ou moins ouvert sur le monde",
    question: "Comment l'Union européenne cherche-t-elle à concilier la compétitivité de ses territoires, leur cohésion et son ouverture sur le monde ?",
    plan: [
      "Une grande diversité de territoires, inégalement intégrés",
      "Des politiques entre compétitivité et cohésion",
      "Un espace ouvert sur le monde, mais qui se protège",
      "Des défis et des tensions qui limitent sa puissance"
    ],
    cle: "L'Union européenne, organisation régionale la plus intégrée du monde et grand pôle commercial, mène des politiques pour rendre ses territoires compétitifs et réduire leurs inégalités ; ouverte sur le monde, elle contrôle aussi ses frontières et peine à s'affirmer comme puissance politique.",
    essentiel: [
      "L'UE réunit 27 États et environ 450 millions d'habitants. Ses territoires sont très inégaux : un cœur dynamique, la « dorsale européenne », des métropoles très connectées (Paris, Francfort, Amsterdam, Milan), la façade maritime de la Northern Range ; des périphéries plus pauvres à l'est et au sud, et des régions ultrapériphériques (Guadeloupe, Réunion, Canaries…).",
      "La politique de cohésion (environ un tiers du budget européen) finance routes, réseaux, formation et innovation, surtout dans les régions les moins développées : les pays d'Europe centrale, comme la Pologne, rattrapent leur retard. D'autres politiques visent la compétitivité : recherche, grands projets (Airbus, Galileo), réseaux de transport, marché unique. La politique agricole commune (PAC) reste l'un des premiers budgets.",
      "L'UE est l'un des premiers pôles commerciaux du monde : marché unique, euro, accords de libre-échange (Canada, Japon, Mercosur…), puissance normative (protection des données, normes environnementales). Mais elle contrôle ses frontières extérieures (Frontex, espace Schengen) et cherche à réduire ses dépendances (énergie russe avant 2022, matériaux critiques venus de Chine).",
      "Elle reste divisée sur l'immigration, la défense ou la fiscalité ; le Brexit (2020) l'a affaiblie. Aux frontières, des territoires transfrontaliers se développent, comme autour de Genève, du Luxembourg ou de Lille, où vivent et circulent des centaines de milliers de travailleurs frontaliers."
    ],
    reperes: [
      { a: "1962-07-30", date: "1962", txt: "Mise en place de la politique agricole commune." },
      { a: "1975-03-18", date: "1975", txt: "Création du Fonds européen de développement régional (FEDER)." },
      { a: "1990-07-01", date: "1990", txt: "Premiers programmes Interreg de coopération transfrontalière." },
      { a: "1993-01-01", date: "1993", txt: "Entrée en vigueur du marché unique." },
      { a: "1995-03-26", date: "1995", txt: "Application des accords de Schengen." },
      { a: "2004-05-01", date: "2004", txt: "Élargissement à dix nouveaux États ; création de Frontex." },
      { a: "2018-05-25", date: "2018", txt: "Entrée en application du règlement général sur la protection des données (RGPD)." },
      { a: "2019-12-15", date: "décembre 2019", txt: "Mise en service du Léman Express dans le Grand Genève." },
      { a: "2020-01-31", date: "2020", txt: "Sortie du Royaume-Uni de l'UE." },
      { a: "2020-07-21", date: "juillet 2020", txt: "Plan de relance européen face à la pandémie, financé par un emprunt commun." }
    ],
    notions: [
      { mot: "Dorsale européenne", def: "Axe le plus riche et le plus peuplé de l'Europe, du sud de l'Angleterre au nord de l'Italie, par le Benelux et la vallée du Rhin." },
      { mot: "Northern Range", def: "Façade maritime de la mer du Nord et de la Manche, du Havre à Hambourg, la plus active d'Europe." },
      { mot: "Politique de cohésion", def: "Politique de l'UE qui réduit les écarts de développement entre ses régions grâce à des fonds (FEDER, Fonds de cohésion, FSE+)." },
      { mot: "Compétitivité", def: "Capacité d'un territoire ou d'une entreprise à affronter la concurrence et à attirer des activités." },
      { mot: "PAC", def: "Politique agricole commune : elle soutient les agriculteurs européens depuis 1962." },
      { mot: "Région ultrapériphérique", def: "Territoire de l'UE éloigné du continent européen (Guadeloupe, Martinique, Guyane, Réunion, Mayotte, Saint-Martin, Açores, Madère, Canaries)." },
      { mot: "Marché unique", def: "Espace sans frontières intérieures où circulent librement marchandises, services, capitaux et personnes (1993)." },
      { mot: "Frontex", def: "Agence européenne de garde-frontières et de garde-côtes, créée en 2004." },
      { mot: "Puissance normative", def: "Capacité de l'UE à imposer ses normes au reste du monde (protection des données, environnement), grâce au poids de son marché." },
      { mot: "Territoire transfrontalier", def: "Espace de part et d'autre d'une frontière, organisé par les échanges et les déplacements quotidiens." },
      { mot: "Travailleur frontalier", def: "Personne qui habite dans un pays et travaille dans un pays voisin, où elle se rend régulièrement." },
      { mot: "Eurorégion", def: "Structure de coopération entre collectivités de plusieurs pays voisins." }
    ],
    personnages: [],
    lieux: [
      { nom: "Lille", lon: 3.06, lat: 50.63, txt: "Cœur de l'Eurométropole Lille-Courtrai-Tournai, première structure de coopération transfrontalière de ce type (2008)." },
      { nom: "Strasbourg", lon: 7.75, lat: 48.57, txt: "Siège du Parlement européen, au cœur de l'Eurodistrict Strasbourg-Ortenau avec l'Allemagne." },
      { nom: "Genève", lon: 6.14, lat: 46.2, txt: "Ville suisse au cœur du Grand Genève, où travaillent de nombreux frontaliers français." },
      { nom: "Bâle", lon: 7.59, lat: 47.56, txt: "Ville suisse d'une agglomération à trois pays (Suisse, France, Allemagne), avec un aéroport binational." },
      { nom: "Luxembourg", lon: 6.13, lat: 49.61, txt: "Capitale du Luxembourg, qui attire plus de 100 000 travailleurs frontaliers venus de France." },
      { nom: "Hendaye", lon: -1.78, lat: 43.36, txt: "Ville du Pays basque, associée à Irun et Fontarabie dans une coopération transfrontalière sur la Bidassoa." },
      { nom: "Bruxelles", lon: 4.35, lat: 50.85, txt: "Siège de la Commission européenne et du Conseil." },
      { nom: "Francfort", lon: 8.68, lat: 50.11, txt: "Siège de la Banque centrale européenne, grand hub aérien." },
      { nom: "Rotterdam", lon: 4.48, lat: 51.92, txt: "Premier port d'Europe, sur la Northern Range." },
      { nom: "Milan", lon: 9.19, lat: 45.46, txt: "Métropole de l'Italie du Nord, à l'extrémité sud de la dorsale européenne." },
      { nom: "Varsovie", lon: 21.01, lat: 52.23, txt: "Capitale de la Pologne, l'un des pays qui ont le plus bénéficié de la politique de cohésion." },
      { nom: "Bucarest", lon: 26.1, lat: 44.43, txt: "Capitale de la Roumanie, pays parmi les moins riches de l'UE, mais en rattrapage rapide." },
      { nom: "Le Pirée", lon: 23.64, lat: 37.94, txt: "Port d'Athènes, contrôlé par l'entreprise chinoise COSCO depuis 2016 : une porte d'entrée de la Chine en Europe." },
      { nom: "Las Palmas", lon: -15.43, lat: 28.12, txt: "Ville des Canaries, région ultrapériphérique de l'Espagne au large de l'Afrique." }
    ],
    graphiques: [
      { id: "pib-hab-ue", type: "barres-h", titre: "Le PIB par habitant en standard de pouvoir d'achat en 2023 (moyenne de l'UE = 100)", unite: "indice",
        source: "Eurostat (valeurs arrondies)",
        x: ["Luxembourg", "Irlande", "Allemagne", "France", "Espagne", "Pologne", "Roumanie", "Grèce", "Bulgarie"], valeurs: [245, 212, 116, 98, 89, 80, 78, 67, 64],
        quoi: "le PIB par habitant", ou: "le pays",
        questions: [
          { q: "Que montre ce graphique ?", r: "De fortes inégalités de richesse entre les États membres", faux: ["Tous les États de l'UE ont la même richesse", "Les pays de l'Est sont les plus riches", "La France est le pays le plus riche"], expl: "Le PIB par habitant du Luxembourg est près de quatre fois celui de la Bulgarie : c'est pourquoi l'UE mène une politique de cohésion." }
        ] },
      { id: "pologne", type: "courbes", titre: "Le rattrapage de la Pologne : PIB par habitant en standard de pouvoir d'achat (moyenne de l'UE = 100)", unite: "indice",
        source: "Eurostat (valeurs arrondies)",
        x: [2004, 2010, 2015, 2020, 2023],
        series: [{ nom: "Pologne", valeurs: [51, 62, 69, 76, 80] }],
        questions: [
          { q: "Comment expliquer ce rattrapage ?", r: "Le marché unique et les fonds de la politique de cohésion ont favorisé la croissance", faux: ["La Pologne a quitté l'UE", "La Pologne a adopté l'euro", "La moyenne de l'UE a baissé de moitié"], expl: "Entrée dans l'UE en 2004, la Pologne a été le premier bénéficiaire des fonds de cohésion : autoroutes, réseaux, modernisation." }
        ] }
    ],
    croquis: [
      { id: "ue-territoires", titre: "L'Union européenne : des territoires inégalement intégrés", fond: "europe-large",
        txt: "I. Un cœur dynamique ; II. Des périphéries intégrées et en rattrapage ; III. Des frontières ouvertes et sous tension.",
        elements: [
          { nom: "Cœur de l'UE (dorsale européenne)", couleur: "#C0392B", opacite: ".5",
            zone: [[2, 51.2], [5, 53], [8, 52.5], [10, 49], [11, 46], [10, 44.8], [7.5, 45], [6, 47.5], [3.5, 49.5]] },
          { nom: "Espaces intégrés et dynamiques", couleur: "#E9A23B", opacite: ".45",
            zone: [[[-5, 48.5], [2, 51.2], [3.5, 49.5], [6, 47.5], [7.5, 45], [5, 43.3], [1, 43], [-1.5, 44], [-2, 47]],
              [[8, 52.5], [10, 54.5], [14, 54], [14.5, 50.5], [13, 48.5], [10, 49]],
              [[-9, 39], [-3, 43.4], [3, 42], [0, 38.5], [-5, 36.2], [-7, 37]]] },
          { nom: "Périphéries en rattrapage, aidées par la politique de cohésion", couleur: "#3B78B5", motif: "hachures",
            zone: [[[14.5, 54], [24, 54.2], [24, 50], [22.5, 48], [28, 47.5], [29.5, 45], [28, 43.8], [22.5, 41.3], [19, 42], [16.5, 46.5], [16.9, 48.6], [14.5, 50.5]],
              [[20, 39.6], [26, 41.5], [26, 36], [21, 36.5]], [[15, 41], [18.5, 40], [16, 38], [12.5, 38]]] },
          { nom: "Institution européenne majeure (Bruxelles, Strasbourg, Luxembourg, Francfort)", forme: "etoile", couleur: "#1B1B1B", points: [[4.35, 50.85], [7.75, 48.57], [6.13, 49.61], [8.68, 50.11]] },
          { nom: "Grand port de la Northern Range", forme: "rond", couleur: "#1F4E5F", points: [[4.48, 51.92], [4.4, 51.22], [9.99, 53.55], [0.11, 49.49]] },
          { nom: "Frontière extérieure sous pression migratoire", couleur: "#D62828", fleches: [[[13, 33.5], [12.6, 37]], [[25, 33.5], [24, 35.5]], [[29, 41.5], [26.5, 41.2]]] }
        ] }
    ],
    trous: [
      { titre: "L'Union européenne dans la mondialisation", texte: "L'UE réunit 27 États. Son cœur est la [dorsale] européenne, de Londres à Milan. La politique de [cohésion] aide les régions les moins riches, comme en Pologne ou en Roumanie. La [PAC] soutient les agriculteurs depuis 1962. L'UE est un grand pôle [commercial], ouvert sur le monde, mais elle contrôle ses frontières extérieures avec l'agence [Frontex]. Autour de Genève ou du Luxembourg, les territoires [transfrontaliers] attirent de nombreux travailleurs français." }
    ],
    capable: [
      "Décrire l'organisation inégale du territoire de l'UE (cœur, périphéries, régions ultrapériphériques).",
      "Expliquer les politiques européennes de cohésion et de compétitivité.",
      "Montrer que l'UE est ouverte sur le monde mais protège ses frontières.",
      "Présenter des exemples de territoires transfrontaliers français et leurs dynamiques différentes."
    ],
    intrus: [
      { items: ["FEDER", "Fonds de cohésion", "FSE+", "FMI"], intrus: "FMI", expl: "Le FMI est une institution mondiale ; les trois autres sont des fonds de la politique de cohésion européenne." },
      { items: ["Rotterdam", "Anvers", "Hambourg", "Marseille"], intrus: "Marseille", expl: "Marseille est en Méditerranée ; Rotterdam, Anvers et Hambourg sont des ports de la Northern Range." },
      { items: ["Grand Genève", "Eurométropole Lille-Courtrai-Tournai", "Eurodistrict Strasbourg-Ortenau", "Grand Paris"], intrus: "Grand Paris", expl: "Le Grand Paris n'est pas à une frontière ; les trois autres sont des coopérations transfrontalières." },
      { items: ["Guadeloupe", "Réunion", "Canaries", "Corse"], intrus: "Corse", expl: "La Corse est une île européenne ; la Guadeloupe, la Réunion et les Canaries sont des régions ultrapériphériques." }
    ],
    ppo: [
      {
        id: "transports-ue", court: "Étude de cas · Transports",
        titre: "Les transports dans l'Union européenne : un outil d'ouverture, de cohésion et de compétitivité",
        question: "Comment les réseaux de transport servent-ils à la fois l'ouverture, la cohésion et la compétitivité de l'Union européenne ?",
        branches: [
          { titre: "Des réseaux pour la compétitivité", points: [
            "Les grands ports de la Northern Range (Rotterdam, Anvers, Hambourg) et les hubs aériens (Paris-Charles-de-Gaulle, Francfort, Amsterdam) relient l'UE au monde.",
            "Le réseau transeuropéen de transport (RTE-T) organise de grands corridors qui traversent le continent."
          ] },
          { titre: "Des réseaux pour la cohésion", points: [
            "Les fonds européens financent autoroutes et voies ferrées dans les pays d'Europe centrale et orientale, comme en Pologne.",
            "Des chantiers relient des territoires séparés par des montagnes ou la mer : tunnel ferroviaire Lyon-Turin, tunnel du Brenner, lien fixe du Fehmarn entre l'Allemagne et le Danemark, Rail Baltica vers les pays baltes."
          ] },
          { titre: "Des portes d'entrée dans l'UE", points: [
            "Le port du Pirée, contrôlé par une entreprise chinoise depuis 2016, est une porte d'entrée des « nouvelles routes de la soie ».",
            "Des trains de marchandises relient la Chine à l'Europe (Duisbourg)."
          ] },
          { titre: "Des limites", points: [
            "L'est de l'UE reste moins bien équipé en lignes à grande vitesse que l'ouest.",
            "Les grands projets coûtent cher et sont parfois contestés pour leurs effets sur l'environnement.",
            "Le Pacte vert veut réduire fortement les émissions des transports en développant le rail et le transport fluvial."
          ] }
        ],
        reperes: [
          { a: "1996-07-23", date: "1996", txt: "Premières orientations du réseau transeuropéen de transport (RTE-T)." },
          { a: "2016-08-10", date: "2016", txt: "L'entreprise chinoise COSCO prend le contrôle du port du Pirée." },
          { a: "2019-12-11", date: "2019", txt: "Présentation du Pacte vert pour l'Europe." }
        ],
        notions: [
          { mot: "RTE-T", def: "Réseau transeuropéen de transport : ensemble de corridors routiers, ferroviaires, fluviaux et maritimes que l'UE veut compléter." },
          { mot: "Corridor", def: "Grand axe de transport qui relie plusieurs régions et pays." },
          { mot: "Pacte vert", def: "Programme de l'UE pour atteindre la neutralité climatique en 2050." }
        ],
        lieux: [
          { nom: "Duisbourg", lon: 6.76, lat: 51.43, txt: "Grand port fluvial allemand sur le Rhin, terminus de trains de marchandises venus de Chine." },
          { nom: "Turin", lon: 7.69, lat: 45.07, txt: "Ville italienne reliée à Lyon par un tunnel ferroviaire en construction sous les Alpes." }
        ],
        pieges: [
          "Les transports ne servent pas seulement la compétitivité : ils doivent aussi réduire les inégalités entre régions.",
          "Les réseaux ne s'arrêtent pas aux frontières de l'UE : ils la relient au reste du monde."
        ],
        mots: ["Northern Range", "hubs", "RTE-T", "corridors", "fonds de cohésion", "Lyon-Turin", "Le Pirée", "Pacte vert"],
        reponse: "Les transports servent d'abord la compétitivité de l'UE : les ports de la Northern Range et les grands hubs aériens la relient au monde, et le réseau transeuropéen organise des corridors à travers le continent. Ils servent aussi la cohésion : les fonds européens financent autoroutes et voies ferrées en Europe centrale et orientale, et de grands chantiers franchissent montagnes et détroits (Lyon-Turin, Brenner, Fehmarn). Ils font enfin de l'UE un espace ouvert : le port du Pirée, contrôlé par une entreprise chinoise, et les trains Chine-Europe en sont des portes d'entrée. Mais l'est reste moins bien équipé, les projets coûtent cher et le Pacte vert impose de développer des transports moins polluants."
      },
      {
        id: "transfrontaliers", court: "Question spécifique · France",
        titre: "La France : les dynamiques différenciées des territoires transfrontaliers",
        question: "Pourquoi les territoires transfrontaliers français connaissent-ils des dynamiques différentes ?",
        branches: [
          { titre: "Des frontières ouvertes par l'intégration européenne", points: [
            "Le marché unique (1993) et l'espace Schengen (1995) facilitent les déplacements.",
            "Les programmes Interreg financent des coopérations transfrontalières depuis 1990.",
            "Plus de 400 000 actifs qui habitent en France travaillent dans un pays voisin, surtout en Suisse et au Luxembourg."
          ] },
          { titre: "Des territoires très attractifs", points: [
            "Le Grand Genève et le nord de la Lorraine attirent des frontaliers par des salaires élevés.",
            "Mais les prix du logement montent, les routes sont saturées et les communes françaises perçoivent peu d'impôts : la Suisse leur reverse une compensation financière.",
            "Le Léman Express (2019) relie la Haute-Savoie et Genève."
          ] },
          { titre: "Des coopérations plus équilibrées", points: [
            "L'Eurométropole Lille-Courtrai-Tournai (2008) et l'Eurodistrict Strasbourg-Ortenau organisent transports, services et culture.",
            "Au Pays basque, Hendaye, Irun et Fontarabie coopèrent sur la Bidassoa."
          ] },
          { titre: "Des frontières qui restent des limites", points: [
            "Les Alpes et les Pyrénées freinent les échanges avec l'Italie et l'Espagne.",
            "Langues, fiscalité, systèmes sociaux différents compliquent la vie des frontaliers.",
            "Des contrôles aux frontières ont été rétablis après les attentats de 2015 et pendant la pandémie (2020)."
          ] }
        ],
        reperes: [
          { a: "1990-07-01", date: "1990", txt: "Premiers programmes Interreg." },
          { a: "2008-01-28", date: "2008", txt: "Création de l'Eurométropole Lille-Courtrai-Tournai." },
          { a: "2019-12-15", date: "2019", txt: "Mise en service du Léman Express." },
          { a: "2020-03-16", date: "mars 2020", txt: "Fermeture temporaire de frontières pendant la pandémie de Covid-19." }
        ],
        notions: [
          { mot: "Interreg", def: "Programme européen qui finance les projets de coopération entre régions de pays différents." },
          { mot: "Effet frontière", def: "Différence de part et d'autre d'une frontière (salaires, prix, lois) qui provoque des flux." }
        ],
        lieux: [
          { nom: "Annemasse", lon: 6.23, lat: 46.19, txt: "Ville de Haute-Savoie dans l'agglomération du Grand Genève, desservie par le Léman Express." },
          { nom: "Thionville", lon: 6.17, lat: 49.36, txt: "Ville de Moselle d'où partent chaque jour de nombreux frontaliers vers le Luxembourg." }
        ],
        pieges: [
          "Toutes les frontières françaises n'ont pas la même dynamique : la Suisse et le Luxembourg attirent, les Pyrénées freinent.",
          "Être attractif n'a pas que des avantages : logement cher, embouteillages, dépendance."
        ],
        mots: ["Schengen", "travailleurs frontaliers", "Grand Genève", "Luxembourg", "Eurométropole", "Interreg", "effet frontière", "limites"],
        reponse: "Grâce au marché unique et à l'espace Schengen, les frontières françaises sont devenues des lieux d'échanges : plus de 400 000 actifs habitant en France travaillent dans un pays voisin. Les dynamiques sont cependant différentes. Autour de Genève et du Luxembourg, les salaires élevés attirent les frontaliers, mais font monter les prix du logement et saturent les routes. Avec la Belgique et l'Allemagne, les coopérations sont plus équilibrées : Eurométropole lilloise, Eurodistrict Strasbourg-Ortenau. Ailleurs, les montagnes et les différences de langue ou de fiscalité freinent les échanges, et les contrôles rétablis en 2015 et 2020 rappellent que la frontière reste une limite."
      }
    ]
  },
  {
    id: "tle-g4", n: "Tle", d: "geo", carte: "france",
    theme: "Thème conclusif · La France et ses régions dans l'Union européenne et dans la mondialisation",
    num: "Thème conclusif",
    titre: "Lignes de force et recompositions du territoire français",
    question: "Quelles sont les grandes lignes de force du territoire français, et comment se recompose-t-il sous l'effet de l'intégration européenne et de la mondialisation ?",
    plan: [
      "Les lignes de force : métropoles, axes, littoraux, frontières",
      "Des territoires inégalement attractifs",
      "Des recompositions à toutes les échelles : régions, métropoles, espaces ruraux",
      "Les acteurs de l'aménagement : État, collectivités, Union européenne"
    ],
    cle: "Le territoire français est organisé par la métropolisation (Paris et un réseau de grandes métropoles), de grands axes, des littoraux et des frontières dynamiques ; l'intégration européenne et la mondialisation renforcent l'attractivité de certains territoires et en fragilisent d'autres, ce qui pousse les acteurs à aménager et à réduire les inégalités.",
    essentiel: [
      "La métropolisation organise le territoire : l'Île-de-France rassemble environ 18 % des habitants et près d'un tiers de la richesse produite ; un réseau de grandes métropoles (Lyon, Marseille, Toulouse, Bordeaux, Lille, Nantes…) s'affirme. De grands axes les relient (vallées de la Seine et du Rhône, lignes à grande vitesse, autoroutes).",
      "Les territoires les plus dynamiques sont les grandes métropoles, l'ouest et le sud (attractivité résidentielle, héliotropisme), les littoraux et certaines frontières (Genève, Luxembourg). D'autres restent en difficulté : la « diagonale des faibles densités », de la Meuse aux Landes, des régions industrielles en reconversion, des quartiers prioritaires des banlieues.",
      "Le territoire se recompose : 13 régions métropolitaines depuis 2016, métropoles et intercommunalités, renouveau de certains espaces ruraux. Les inégalités nourrissent des débats (le mouvement des « gilets jaunes » en 2018 est parti des espaces périurbains et ruraux).",
      "L'État (programmes Action cœur de ville, Petites villes de demain), les collectivités et l'Union européenne (fonds structurels, Interreg) aménagent le territoire pour le rendre plus compétitif et réduire les inégalités, y compris dans les outre-mer."
    ],
    reperes: [
      { a: 1947, date: "1947", txt: "Le géographe Jean-François Gravier publie Paris et le désert français." },
      { a: "1963-02-14", date: "1963", txt: "Création de la DATAR, chargée de l'aménagement du territoire." },
      { a: "1981-09-22", date: "1981", txt: "Mise en service du premier TGV, entre Paris et Lyon." },
      { a: "1982-03-02", date: "1982", txt: "Lois de décentralisation." },
      { a: "2010-12-16", date: "2010", txt: "Création du statut de métropole." },
      { a: "2016-01-01", date: "2016", txt: "13 régions métropolitaines." },
      { a: "2017-07-02", date: "2017", txt: "Mise en service des LGV vers Bordeaux et Rennes." },
      { a: "2018-03-27", date: "2018", txt: "Lancement du programme Action cœur de ville." },
      { a: "2018-11-17", date: "novembre 2018", txt: "Début du mouvement des « gilets jaunes »." },
      { a: "2020-10-01", date: "2020", txt: "Lancement du programme Petites villes de demain." }
    ],
    notions: [
      { mot: "Métropolisation", def: "Concentration des populations, des activités et des fonctions de commandement dans les grandes villes." },
      { mot: "Métropole", def: "Grande ville qui concentre des fonctions de commandement ; aussi, en France, une intercommunalité au statut particulier (22 métropoles)." },
      { mot: "Littoralisation", def: "Concentration des populations et des activités sur les littoraux." },
      { mot: "Héliotropisme", def: "Attirance des populations et des activités pour les régions ensoleillées du sud." },
      { mot: "Diagonale des faibles densités", def: "Bande de territoires peu peuplés qui traverse la France du nord-est au sud-ouest, de la Meuse aux Landes." },
      { mot: "Périurbanisation", def: "Extension des villes vers les espaces ruraux qui les entourent, où s'installent des habitants travaillant en ville." },
      { mot: "Aménagement du territoire", def: "Action des pouvoirs publics pour organiser le territoire et réduire les inégalités entre régions." },
      { mot: "Attractivité", def: "Capacité d'un territoire à attirer habitants, entreprises, touristes et investissements." },
      { mot: "Quartier prioritaire", def: "Quartier urbain en difficulté qui bénéficie des aides de la politique de la ville." },
      { mot: "Reconversion", def: "Transformation d'un territoire qui perd ses activités traditionnelles (mines, industrie) vers de nouvelles activités." },
      { mot: "Technopôle", def: "Espace qui associe universités, laboratoires et entreprises de haute technologie (Saclay, Sophia-Antipolis, Grenoble)." }
    ],
    personnages: [
      { nom: "Jean-François Gravier", dates: "1915-2005", txt: [
        "Géographe français.",
        "En 1947, il publie Paris et le désert français.",
        "Il dénonce le déséquilibre entre la capitale et le reste du pays, ce qui inspire l'aménagement du territoire."
      ] }
    ],
    lieux: [
      { nom: "Paris", lon: 2.35, lat: 48.86, txt: "Ville mondiale ; l'Île-de-France produit près d'un tiers de la richesse nationale." },
      { nom: "Lyon", lon: 4.84, lat: 45.76, txt: "Deuxième métropole française, au carrefour de l'axe Rhône-Saône." },
      { nom: "Marseille", lon: 5.37, lat: 43.3, txt: "Métropole méditerranéenne et premier port français." },
      { nom: "Toulouse", lon: 1.44, lat: 43.6, txt: "Métropole de l'aéronautique et de l'espace, l'une des plus dynamiques de France." },
      { nom: "Bordeaux", lon: -0.58, lat: 44.84, txt: "Métropole attractive du Sud-Ouest, reliée à Paris en un peu plus de deux heures par LGV." },
      { nom: "Nantes", lon: -1.55, lat: 47.22, txt: "Métropole de l'Ouest, en forte croissance." },
      { nom: "Lille", lon: 3.06, lat: 50.63, txt: "Métropole transfrontalière au carrefour Paris-Londres-Bruxelles." },
      { nom: "Saclay", lon: 2.17, lat: 48.71, txt: "Plateau au sud de Paris qui regroupe universités, grandes écoles et laboratoires." },
      { nom: "Sophia-Antipolis", lon: 7.05, lat: 43.62, txt: "Technopôle de la Côte d'Azur, près d'Antibes." },
      { nom: "Plateau de Langres", lon: 5.3, lat: 47.8, txt: "Espace rural peu peuplé de la diagonale des faibles densités." },
      { nom: "Denain", lon: 3.39, lat: 50.33, txt: "Ancienne ville minière et sidérurgique du Nord, en difficulté et en reconversion." }
    ],
    graphiques: [
      { id: "metropoles-pop", type: "barres-h", titre: "Les plus grandes aires d'attraction des villes en France (millions d'habitants)", unite: "millions d'habitants",
        source: "Insee, aires d'attraction des villes (valeurs arrondies)",
        x: ["Paris", "Lyon", "Marseille-Aix", "Lille (partie française)", "Toulouse", "Bordeaux", "Nantes"], valeurs: [13.1, 2.3, 1.9, 1.5, 1.5, 1.4, 1],
        quoi: "la population", ou: "l'aire",
        questions: [
          { q: "Que montre ce graphique ?", r: "Le poids écrasant de Paris, loin devant les autres métropoles", faux: ["Toutes les métropoles ont la même taille", "Lyon est plus peuplée que Paris", "Les métropoles de l'Ouest dominent"], expl: "L'aire de Paris est plus de cinq fois plus peuplée que celle de Lyon : c'est la macrocéphalie parisienne." }
        ] }
    ],
    croquis: [
      { id: "france-dynamiques", titre: "Les dynamiques du territoire français", fond: "france",
        txt: "I. Des espaces moteurs ; II. Des axes et des ouvertures ; III. Des espaces en difficulté.",
        elements: [
          { nom: "Région capitale, cœur du territoire", couleur: "#C0392B", opacite: ".55",
            ellipse: [[2.4, 48.8, 1.3, 0.8, 0]] },
          { nom: "Espaces dynamiques (métropoles de l'Ouest et du Sud, littoraux, Alpes du Nord)", couleur: "#E9A23B", opacite: ".45",
            zone: [[[-4.5, 48.6], [-1.5, 48.6], [-0.5, 47.5], [-1, 46], [-1.3, 44.5], [-1.6, 43.5], [-0.5, 43.4], [1.5, 43.4], [2, 44], [1, 45], [-0.2, 46.2], [-1.5, 47.3], [-4, 47.8]],
              [[3, 43.2], [4.5, 43.6], [6, 43.8], [7.5, 43.8], [7.5, 43.6], [6, 43.1], [4.5, 43.4], [3.2, 43.1]],
              [[4.5, 45.4], [5, 46], [6.5, 46.3], [7, 45.6], [6, 45], [5, 45]]] },
          { nom: "Diagonale des faibles densités", couleur: "#8C8C8C", motif: "hachures",
            zone: [[5.5, 49.3], [6, 48.5], [5.5, 47.3], [4, 46.5], [3.5, 45.2], [2.5, 44.3], [1, 44], [0, 44], [-0.5, 44.6], [0.6, 45.5], [1.8, 46.5], [3, 47.5], [4, 48.5], [4.6, 49.4]] },
          { nom: "Ancienne région industrielle en reconversion", couleur: "#7B3FA0", motif: "hachures",
            ellipse: [[3.2, 50.4, 0.8, 0.3, 0], [6.2, 49.2, 0.6, 0.5, 0]] },
          { nom: "Grand axe de communication", couleur: "#1F4E5F", epaisseur: 3.2,
            ligne: [[[0.1, 49.45], [1.5, 49.1], [2.35, 48.85], [3.5, 47.8], [4.85, 45.76], [4.8, 44.9], [4.8, 43.9], [5.37, 43.3]], [[2.35, 48.85], [1.9, 47.9], [0.7, 47.4], [0.3, 46.6], [-0.58, 44.84]], [[2.35, 48.85], [3.06, 50.63]], [[2.35, 48.85], [4.03, 49.26], [7.75, 48.57]]] },
          { nom: "Métropole", forme: "rond", couleur: "#1B1B1B", points: [[4.84, 45.76], [5.37, 43.3], [1.44, 43.6], [-0.58, 44.84], [-1.55, 47.22], [3.06, 50.63], [7.75, 48.57], [7.26, 43.7], [-1.68, 48.11], [3.88, 43.61]] },
          { nom: "Frontière attractive (travail frontalier)", couleur: "#D62828", fleches: [[[6.25, 46.35], [6.15, 46.2]], [[6.15, 49.3], [6.13, 49.55]], [[7.3, 47.7], [7.55, 47.55]]] }
        ] }
    ],
    trous: [
      { titre: "Le territoire français", texte: "Le territoire est dominé par Paris : c'est la [métropolisation]. Un réseau de grandes [métropoles] comme Lyon, Toulouse ou Bordeaux s'affirme. Les populations sont attirées par le sud, c'est l'[héliotropisme], et par les littoraux. De la Meuse aux Landes, la [diagonale] des faibles densités reste peu peuplée. Depuis 2016, la France métropolitaine compte [13] régions. L'État et l'Union européenne mènent des politiques d'[aménagement] du territoire." }
    ],
    capable: [
      "Décrire les lignes de force du territoire français (métropoles, axes, littoraux, frontières).",
      "Expliquer pourquoi l'attractivité des territoires est inégale.",
      "Présenter les recompositions territoriales (régions, métropoles, espaces ruraux).",
      "Identifier les acteurs de l'aménagement et leurs politiques.",
      "Appliquer ces notions à l'étude d'une région."
    ],
    intrus: [
      { items: ["Lyon", "Toulouse", "Bordeaux", "Langres"], intrus: "Langres", expl: "Langres est une petite ville de la diagonale des faibles densités ; les trois autres sont de grandes métropoles." },
      { items: ["Action cœur de ville", "Petites villes de demain", "Interreg", "Plan Marshall"], intrus: "Plan Marshall", expl: "Le plan Marshall est une aide américaine d'après-guerre ; les trois autres sont des programmes actuels d'aménagement." },
      { items: ["Saclay", "Sophia-Antipolis", "Grenoble", "Denain"], intrus: "Denain", expl: "Denain est une ancienne ville industrielle en reconversion ; les trois autres accueillent des technopôles." },
      { items: ["Héliotropisme", "Littoralisation", "Métropolisation", "Exode urbain"], intrus: "Exode urbain", expl: "Les trois premiers sont de grandes dynamiques du territoire ; « exode urbain » désigne un départ des villes, resté limité." }
    ],
    ppo: [
      {
        id: "aura", court: "Exemple · Une région",
        titre: "Une région dans l'Union européenne et dans la mondialisation : l'exemple d'Auvergne-Rhône-Alpes",
        question: "Comment une région française comme Auvergne-Rhône-Alpes s'intègre-t-elle à l'Union européenne et à la mondialisation, et avec quelles inégalités ?",
        branches: [
          { titre: "Une grande région européenne", points: [
            "Née en 2016 de la fusion de l'Auvergne et de Rhône-Alpes, elle compte environ 8 millions d'habitants.",
            "C'est la deuxième région française par la richesse produite, après l'Île-de-France.",
            "Rhône-Alpes coopère depuis 1988 avec le Bade-Wurtemberg, la Catalogne et la Lombardie (« Quatre moteurs pour l'Europe »)."
          ] },
          { titre: "Des pôles intégrés à la mondialisation", points: [
            "Lyon, métropole européenne : sièges d'entreprises, vallée de la chimie, aéroport international, Interpol.",
            "Grenoble, technopôle (recherche, microélectronique) ; Clermont-Ferrand, siège de Michelin ; Saint-Étienne, ville du design en reconversion.",
            "Les Alpes, grand espace touristique mondial, accueilleront les Jeux olympiques d'hiver de 2030 avec la région Provence-Alpes-Côte d'Azur."
          ] },
          { titre: "Des ouvertures transfrontalières", points: [
            "La Haute-Savoie et l'Ain vivent au rythme du Grand Genève.",
            "Le tunnel ferroviaire Lyon-Turin doit relier la région à l'Italie du Nord."
          ] },
          { titre: "Des inégalités internes", points: [
            "Le sillon alpin et l'agglomération lyonnaise concentrent la croissance.",
            "Les départements ruraux du Massif central (Cantal, Haute-Loire, Allier) sont moins peuplés et vieillissants.",
            "Les fonds européens et régionaux financent l'aménagement des territoires en difficulté."
          ] }
        ],
        reperes: [
          { a: "1988-09-09", date: "1988", txt: "Accord des « Quatre moteurs pour l'Europe »." },
          { a: "2016-01-01", date: "2016", txt: "Naissance de la région Auvergne-Rhône-Alpes." },
          { a: "2024-07-24", date: "2024", txt: "Les Alpes françaises obtiennent les Jeux olympiques d'hiver de 2030." }
        ],
        notions: [
          { mot: "Région", def: "Collectivité territoriale chargée notamment du développement économique, des transports régionaux et des lycées." },
          { mot: "Sillon alpin", def: "Ensemble de vallées urbanisées des Alpes du Nord, de Genève à Grenoble et Valence." }
        ],
        lieux: [
          { nom: "Grenoble", lon: 5.72, lat: 45.19, txt: "Technopôle des Alpes : recherche, microélectronique." },
          { nom: "Clermont-Ferrand", lon: 3.09, lat: 45.78, txt: "Capitale de l'Auvergne, siège du groupe Michelin." },
          { nom: "Saint-Étienne", lon: 4.39, lat: 45.44, txt: "Ancienne ville industrielle reconvertie, ville créative du design pour l'UNESCO." },
          { nom: "Annecy", lon: 6.13, lat: 45.9, txt: "Ville de Haute-Savoie très attractive, proche de Genève." },
          { nom: "Aurillac", lon: 2.44, lat: 44.93, txt: "Préfecture du Cantal, département rural du Massif central." }
        ],
        pieges: [
          "Une région n'est pas homogène : elle juxtapose des pôles dynamiques et des espaces en difficulté.",
          "Cet exemple peut être remplacé par l'étude de sa propre région : la démarche est la même."
        ],
        mots: ["fusion de 2016", "deuxième région", "Lyon", "Grenoble", "Quatre moteurs pour l'Europe", "Grand Genève", "Lyon-Turin", "inégalités internes"],
        reponse: "Née en 2016, Auvergne-Rhône-Alpes compte environ 8 millions d'habitants et produit la deuxième richesse régionale de France. Elle s'intègre à l'Europe et au monde par ses métropoles : Lyon, avec ses sièges d'entreprises et son aéroport, Grenoble, technopôle de la microélectronique, Clermont-Ferrand, siège de Michelin. Les Alpes sont un espace touristique mondial, qui accueillera les Jeux d'hiver de 2030. La région s'ouvre aussi sur ses frontières (Grand Genève, Lyon-Turin) et coopère avec d'autres régions européennes. Mais la croissance se concentre autour de Lyon et dans le sillon alpin, tandis que les départements ruraux du Massif central vieillissent : les politiques d'aménagement cherchent à réduire ces inégalités."
      }
    ]
  }
];
