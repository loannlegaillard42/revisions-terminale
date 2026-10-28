/* Repères fondamentaux de Terminale — le parcours de culture générale du mode aventure (index.html#/aventure/reperes-Tle).
   Chaque unité reprend les champs d'un point de passage de cours.js (court, notions, reperes, lieux) ;
   « carte » choisit le fond de carte de l'unité (cartes.js). */
const REPERES_FONDAMENTAUX = [
  { id: "dates-1929-1945", court: "Grandes dates : 1929-1945", d: "histoire",
    reperes: [
      { a: "1929-10-24", date: "24 octobre 1929", txt: "Le « jeudi noir » : krach de Wall Street." },
      { a: "1933-01-30", date: "30 janvier 1933", txt: "Hitler devient chancelier." },
      { a: "1936-06-07", date: "juin 1936", txt: "Accords Matignon sous le Front populaire." },
      { a: "1936-07-17", b: "1939-04-01", date: "1936-1939", txt: "La guerre d'Espagne." },
      { a: "1938-11-09", date: "9-10 novembre 1938", txt: "La nuit de Cristal." },
      { a: "1939-09-01", date: "1er septembre 1939", txt: "L'Allemagne envahit la Pologne." },
      { a: "1940-06-18", date: "18 juin 1940", txt: "Appel du général de Gaulle." },
      { a: "1941-06-22", date: "22 juin 1941", txt: "L'Allemagne attaque l'URSS." },
      { a: "1941-12-07", date: "7 décembre 1941", txt: "Attaque japonaise de Pearl Harbor." },
      { a: "1943-02-02", date: "2 février 1943", txt: "Victoire soviétique à Stalingrad." },
      { a: "1944-06-06", date: "6 juin 1944", txt: "Débarquement en Normandie." },
      { a: "1945-05-08", date: "8 mai 1945", txt: "Capitulation de l'Allemagne." },
      { a: "1945-08-06", date: "6 août 1945", txt: "Bombardement atomique d'Hiroshima." }
    ] },

  { id: "dates-1945-1973", court: "Grandes dates : 1945-1973", d: "histoire",
    reperes: [
      { a: "1945-06-26", date: "26 juin 1945", txt: "Signature de la Charte des Nations unies à San Francisco." },
      { a: "1945-11-20", b: "1946-10-01", date: "1945-1946", txt: "Le procès de Nuremberg." },
      { a: "1946-10-27", date: "1946", txt: "Naissance de la IVᵉ République." },
      { a: "1947-03-12", date: "1947", txt: "Doctrine Truman : début de la guerre froide." },
      { a: "1948-05-14", date: "14 mai 1948", txt: "Proclamation de l'État d'Israël." },
      { a: "1949-04-04", date: "1949", txt: "Création de l'OTAN." },
      { a: "1949-10-01", date: "1er octobre 1949", txt: "Mao Zedong proclame la République populaire de Chine." },
      { a: "1950-06-25", b: "1953-07-27", date: "1950-1953", txt: "La guerre de Corée." },
      { a: "1955-04-18", date: "1955", txt: "Conférence de Bandung." },
      { a: "1957-03-25", date: "1957", txt: "Traité de Rome : naissance de la CEE." },
      { a: "1958-10-04", date: "1958", txt: "Naissance de la Vᵉ République." },
      { a: "1961-08-13", date: "1961", txt: "Construction du mur de Berlin." },
      { a: "1962-03-18", date: "1962", txt: "Accords d'Évian : indépendance de l'Algérie." },
      { a: "1962-10-16", date: "octobre 1962", txt: "Crise des missiles de Cuba." }
    ] },

  { id: "dates-1973-1991", court: "Grandes dates : 1973-1991", d: "histoire",
    reperes: [
      { a: "1973-10-16", date: "1973", txt: "Premier choc pétrolier." },
      { a: "1975-01-17", date: "1975", txt: "Loi Veil sur l'interruption volontaire de grossesse." },
      { a: "1979-02-11", date: "1979", txt: "Révolution islamique en Iran." },
      { a: "1979-12-27", b: "1989-02-15", date: "1979-1989", txt: "Guerre soviétique en Afghanistan." },
      { a: "1981-05-10", date: "10 mai 1981", txt: "Élection de François Mitterrand : première alternance de la Vᵉ République." },
      { a: "1981-10-09", date: "1981", txt: "Abolition de la peine de mort en France." },
      { a: "1985-03-11", date: "1985", txt: "Gorbatchev arrive à la tête de l'URSS." },
      { a: "1986-02-17", date: "1986", txt: "Acte unique européen." },
      { a: "1989-11-09", date: "9 novembre 1989", txt: "Chute du mur de Berlin." },
      { a: "1990-10-03", date: "3 octobre 1990", txt: "Réunification de l'Allemagne." },
      { a: "1991-12-26", date: "décembre 1991", txt: "Disparition de l'URSS." }
    ] },

  { id: "dates-depuis-1991", court: "Grandes dates depuis 1991", d: "histoire",
    reperes: [
      { a: "1992-02-07", date: "1992", txt: "Traité de Maastricht : naissance de l'Union européenne." },
      { a: "1994-04-07", date: "avril 1994", txt: "Début du génocide des Tutsi au Rwanda." },
      { a: "1994-05-10", date: "mai 1994", txt: "Nelson Mandela devient président de l'Afrique du Sud." },
      { a: "1995-07-11", date: "juillet 1995", txt: "Massacre de Srebrenica en Bosnie." },
      { a: "2001-09-11", date: "11 septembre 2001", txt: "Attentats contre les États-Unis." },
      { a: "2002-01-01", date: "1er janvier 2002", txt: "Mise en circulation des pièces et billets en euros." },
      { a: "2004-05-01", date: "2004", txt: "Élargissement de l'UE à dix nouveaux États." },
      { a: "2005-05-29", date: "2005", txt: "Les Français rejettent par référendum le traité constitutionnel européen." },
      { a: "2015-12-12", date: "2015", txt: "Accord de Paris sur le climat." },
      { a: "2020-01-31", date: "2020", txt: "Le Royaume-Uni quitte l'Union européenne." },
      { a: "2022-02-24", date: "24 février 2022", txt: "La Russie envahit l'Ukraine." }
    ] },

  { id: "presidents", court: "Les présidents de la Vᵉ République", d: "histoire",
    notions: [
      { mot: "Vᵉ République", def: "Le régime politique de la France depuis la Constitution du 4 octobre 1958." },
      { mot: "Suffrage universel direct", def: "Élection par tous les citoyens ; le président est élu ainsi depuis la réforme de 1962." },
      { mot: "Alternance", def: "Arrivée au pouvoir de l'opposition à la suite d'une élection : la première a lieu en 1981." },
      { mot: "Cohabitation", def: "Situation où le président et la majorité de l'Assemblée nationale sont de bords opposés (1986-1988, 1993-1995, 1997-2002)." },
      { mot: "Quinquennat", def: "Mandat présidentiel de cinq ans, adopté par référendum en 2000 ; il remplace le septennat." },
      { mot: "Septennat", def: "Mandat présidentiel de sept ans, en vigueur jusqu'en 2002." }
    ],
    reperes: [
      { a: 1959, b: 1969, date: "1959-1969", txt: "Charles de Gaulle, président de la République." },
      { a: 1969, b: 1974, date: "1969-1974", txt: "Georges Pompidou, président de la République." },
      { a: 1974, b: 1981, date: "1974-1981", txt: "Valéry Giscard d'Estaing, président de la République." },
      { a: 1981, b: 1995, date: "1981-1995", txt: "François Mitterrand, président de la République." },
      { a: 1995, b: 2007, date: "1995-2007", txt: "Jacques Chirac, président de la République." },
      { a: 2007, b: 2012, date: "2007-2012", txt: "Nicolas Sarkozy, président de la République." },
      { a: 2012, b: 2017, date: "2012-2017", txt: "François Hollande, président de la République." },
      { a: 2017, date: "depuis 2017", txt: "Emmanuel Macron, président de la République." }
    ] },

  { id: "organisations", court: "Les organisations internationales", d: "geo",
    notions: [
      { mot: "ONU", def: "Organisation des Nations unies, créée en 1945 pour maintenir la paix ; 193 États membres." },
      { mot: "Conseil de sécurité", def: "Organe de l'ONU chargé de la paix : cinq membres permanents (États-Unis, Russie, Chine, Royaume-Uni, France) ont un droit de veto." },
      { mot: "OTAN", def: "Organisation du traité de l'Atlantique Nord, alliance militaire créée en 1949 autour des États-Unis." },
      { mot: "Union européenne", def: "Union de 27 États européens, née du traité de Maastricht (1992)." },
      { mot: "OMC", def: "Organisation mondiale du commerce, créée en 1995 pour réguler les échanges internationaux." },
      { mot: "FMI", def: "Fonds monétaire international, créé à Bretton Woods en 1944 ; il prête aux États en difficulté." },
      { mot: "G20", def: "Groupe des 19 plus grandes économies du monde, plus l'Union européenne et l'Union africaine." },
      { mot: "OPEP", def: "Organisation des pays exportateurs de pétrole, créée en 1960." },
      { mot: "BRICS", def: "Groupe de puissances émergentes autour du Brésil, de la Russie, de l'Inde, de la Chine et de l'Afrique du Sud, élargi depuis 2024." },
      { mot: "ASEAN", def: "Association des nations de l'Asie du Sud-Est, créée en 1967." },
      { mot: "Mercosur", def: "Marché commun du Sud de l'Amérique latine, créé en 1991 autour du Brésil et de l'Argentine." },
      { mot: "Cour pénale internationale", def: "Tribunal permanent créé en 2002 à La Haye pour juger les génocides, crimes contre l'humanité et crimes de guerre." }
    ] },

  { id: "detroits", court: "Mers, détroits et canaux", d: "geo", carte: "monde",
    lieux: [
      { nom: "Canal de Suez", lon: 32.35, lat: 30.6, txt: "Canal égyptien qui relie la Méditerranée à la mer Rouge, ouvert en 1869." },
      { nom: "Canal de Panama", lon: -79.7, lat: 9.1, txt: "Canal qui relie l'Atlantique au Pacifique à travers l'isthme de Panama, ouvert en 1914." },
      { nom: "Détroit de Malacca", lon: 101, lat: 2.5, txt: "Passage entre la Malaisie et l'île indonésienne de Sumatra : la route de l'Europe vers la Chine." },
      { nom: "Détroit d'Ormuz", lon: 56.5, lat: 26.6, txt: "Sortie du golfe Arabo-Persique : une grande partie du pétrole exporté dans le monde y passe." },
      { nom: "Bab-el-Mandeb", lon: 43.4, lat: 12.6, txt: "Détroit entre la mer Rouge et le golfe d'Aden, au sud de la route de Suez." },
      { nom: "Détroit de Gibraltar", lon: -5.6, lat: 35.95, txt: "Passage entre l'Atlantique et la Méditerranée, entre l'Espagne et le Maroc." },
      { nom: "Bosphore", lon: 29.05, lat: 41.1, txt: "Détroit d'Istanbul, entre la mer Noire et la Méditerranée." },
      { nom: "Pas de Calais", lon: 1.5, lat: 51, txt: "Détroit entre la France et le Royaume-Uni, l'un des plus fréquentés du monde." },
      { nom: "Cap de Bonne-Espérance", lon: 18.5, lat: -34.4, txt: "Pointe sud de l'Afrique, sur la route des pétroliers trop grands pour Suez." },
      { nom: "Mer de Chine méridionale", lon: 114, lat: 12, txt: "Mer disputée entre la Chine et ses voisins, sur l'une des routes les plus fréquentées du monde." },
      { nom: "Golfe de Guinée", lon: 3, lat: 2, txt: "Espace riche en pétrole offshore, touché par la piraterie." },
      { nom: "Détroit de Béring", lon: -169, lat: 65.8, txt: "Passage entre la Russie et l'Alaska, porte de l'Arctique." }
    ] },

  { id: "ports", court: "Les grands ports du monde", d: "geo", carte: "monde",
    lieux: [
      { nom: "Shanghai", lon: 121.47, lat: 31.23, txt: "Premier port à conteneurs du monde, à l'embouchure du Yangzi." },
      { nom: "Singapour", lon: 103.82, lat: 1.29, txt: "Cité-État au débouché du détroit de Malacca, deuxième port à conteneurs du monde." },
      { nom: "Shenzhen", lon: 114.06, lat: 22.54, txt: "Grand port du sud de la Chine, près de Hong Kong." },
      { nom: "Busan", lon: 129.04, lat: 35.1, txt: "Premier port de Corée du Sud." },
      { nom: "Jebel Ali (Dubaï)", lon: 55.03, lat: 25.01, txt: "Premier port du Moyen-Orient, aux Émirats arabes unis." },
      { nom: "Rotterdam", lon: 4.48, lat: 51.92, txt: "Premier port d'Europe, aux Pays-Bas, au cœur de la Northern Range." },
      { nom: "Tanger Med", lon: -5.5, lat: 35.89, txt: "Grand port marocain sur le détroit de Gibraltar, premier port d'Afrique." },
      { nom: "Los Angeles", lon: -118.25, lat: 33.74, txt: "Avec Long Beach, premier port des États-Unis, tourné vers l'Asie." },
      { nom: "New York", lon: -74.01, lat: 40.69, txt: "Grand port de la façade atlantique des États-Unis." },
      { nom: "Santos", lon: -46.31, lat: -23.96, txt: "Premier port d'Amérique latine, au Brésil, près de São Paulo." }
    ] },

  { id: "ue", court: "Les États de l'Union européenne", d: "geo", carte: "europe-large",
    lieux: [
      { nom: "Paris", lon: 2.35, lat: 48.86, txt: "Capitale de la France, membre fondateur." },
      { nom: "Berlin", lon: 13.4, lat: 52.52, txt: "Capitale de l'Allemagne, membre fondateur." },
      { nom: "Rome", lon: 12.5, lat: 41.9, txt: "Capitale de l'Italie, membre fondateur." },
      { nom: "Bruxelles", lon: 4.35, lat: 50.85, txt: "Capitale de la Belgique, membre fondateur, siège de la Commission européenne." },
      { nom: "Amsterdam", lon: 4.9, lat: 52.37, txt: "Capitale des Pays-Bas, membre fondateur." },
      { nom: "Luxembourg", lon: 6.13, lat: 49.61, txt: "Capitale du Luxembourg, membre fondateur." },
      { nom: "Dublin", lon: -6.26, lat: 53.35, txt: "Capitale de l'Irlande, membre depuis 1973." },
      { nom: "Copenhague", lon: 12.57, lat: 55.68, txt: "Capitale du Danemark, membre depuis 1973." },
      { nom: "Athènes", lon: 23.73, lat: 37.98, txt: "Capitale de la Grèce, membre depuis 1981." },
      { nom: "Madrid", lon: -3.7, lat: 40.42, txt: "Capitale de l'Espagne, membre depuis 1986." },
      { nom: "Lisbonne", lon: -9.14, lat: 38.72, txt: "Capitale du Portugal, membre depuis 1986." },
      { nom: "Vienne", lon: 16.37, lat: 48.21, txt: "Capitale de l'Autriche, membre depuis 1995." },
      { nom: "Stockholm", lon: 18.07, lat: 59.33, txt: "Capitale de la Suède, membre depuis 1995." },
      { nom: "Helsinki", lon: 24.94, lat: 60.17, txt: "Capitale de la Finlande, membre depuis 1995." },
      { nom: "Varsovie", lon: 21.01, lat: 52.23, txt: "Capitale de la Pologne, membre depuis 2004." },
      { nom: "Prague", lon: 14.42, lat: 50.08, txt: "Capitale de la Tchéquie, membre depuis 2004." },
      { nom: "Budapest", lon: 19.04, lat: 47.5, txt: "Capitale de la Hongrie, membre depuis 2004." },
      { nom: "Ljubljana", lon: 14.51, lat: 46.06, txt: "Capitale de la Slovénie, membre depuis 2004." },
      { nom: "Tallinn", lon: 24.75, lat: 59.44, txt: "Capitale de l'Estonie, membre depuis 2004." },
      { nom: "Riga", lon: 24.1, lat: 56.95, txt: "Capitale de la Lettonie, membre depuis 2004." },
      { nom: "Vilnius", lon: 25.28, lat: 54.69, txt: "Capitale de la Lituanie, membre depuis 2004." },
      { nom: "La Valette", lon: 14.51, lat: 35.9, txt: "Capitale de Malte, membre depuis 2004." },
      { nom: "Nicosie", lon: 33.37, lat: 35.17, txt: "Capitale de Chypre, membre depuis 2004." },
      { nom: "Bucarest", lon: 26.1, lat: 44.43, txt: "Capitale de la Roumanie, membre depuis 2007." },
      { nom: "Sofia", lon: 23.32, lat: 42.7, txt: "Capitale de la Bulgarie, membre depuis 2007." },
      { nom: "Zagreb", lon: 15.98, lat: 45.81, txt: "Capitale de la Croatie, membre depuis 2013." }
    ] },

  { id: "france", court: "La France : métropoles, ports, frontières", d: "geo", carte: "france",
    lieux: [
      { nom: "Paris", lon: 2.35, lat: 48.86, txt: "Capitale et ville mondiale, première métropole française." },
      { nom: "Lyon", lon: 4.84, lat: 45.76, txt: "Deuxième métropole française, au confluent du Rhône et de la Saône." },
      { nom: "Marseille", lon: 5.37, lat: 43.3, txt: "Métropole méditerranéenne, premier port de France avec Fos-sur-Mer." },
      { nom: "Lille", lon: 3.06, lat: 50.63, txt: "Métropole transfrontalière, reliée à la Belgique." },
      { nom: "Toulouse", lon: 1.44, lat: 43.6, txt: "Métropole de l'aéronautique et de l'espace (Airbus)." },
      { nom: "Bordeaux", lon: -0.58, lat: 44.84, txt: "Métropole du Sud-Ouest, sur la Garonne." },
      { nom: "Nantes", lon: -1.55, lat: 47.22, txt: "Métropole de l'Ouest, sur l'estuaire de la Loire." },
      { nom: "Strasbourg", lon: 7.75, lat: 48.57, txt: "Métropole frontalière, siège du Parlement européen." },
      { nom: "Nice", lon: 7.26, lat: 43.7, txt: "Métropole de la Côte d'Azur, très touristique." },
      { nom: "Montpellier", lon: 3.88, lat: 43.61, txt: "Métropole du Languedoc, l'une des plus dynamiques de France." },
      { nom: "Rennes", lon: -1.68, lat: 48.11, txt: "Métropole de la Bretagne." },
      { nom: "Le Havre", lon: 0.11, lat: 49.49, txt: "Premier port français pour les conteneurs, à l'embouchure de la Seine." },
      { nom: "Dunkerque", lon: 2.38, lat: 51.03, txt: "Grand port industriel de la mer du Nord." },
      { nom: "Saint-Nazaire", lon: -2.21, lat: 47.27, txt: "Port de l'estuaire de la Loire, chantiers navals." },
      { nom: "Genève", lon: 6.14, lat: 46.2, txt: "Ville suisse au cœur d'une agglomération transfrontalière avec la Haute-Savoie et l'Ain." },
      { nom: "Bâle", lon: 7.59, lat: 47.56, txt: "Ville suisse d'une agglomération transfrontalière avec l'Alsace et l'Allemagne." },
      { nom: "Luxembourg", lon: 6.13, lat: 49.61, txt: "Capitale du Luxembourg, où travaillent plus de 100 000 frontaliers français." }
    ] }
];
