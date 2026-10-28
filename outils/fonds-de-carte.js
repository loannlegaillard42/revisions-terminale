/* Génère cartes.js : les fonds de carte du site (outil « Carte à compléter », mode aventure, croquis).

   Les côtes viennent de Natural Earth (domaine public), au 1:50 000 000, via le paquet world-atlas ;
   les fleuves, du fichier ne_50m_rivers_lake_centerlines.geojson de Natural Earth (dépôt nvkelso/natural-earth-vector).
   Chaque fond est une projection simple (équirectangulaire, corrigée à la latitude moyenne) :
   x = (lon - lon0) × kx, y = (lat0 - lat) × ky. La page refait le même calcul pour placer les lieux,
   qui gardent donc leurs coordonnées géographiques (lon, lat) dans cours.js.

   Pour ajouter ou modifier un fond : compléter FONDS ci-dessous, puis, depuis un dossier de travail
     npm install world-atlas@2.0.2 d3-geo@3.1.1 topojson-client@3.1.0
     node chemin/vers/outils/fonds-de-carte.js chemin/vers/ne_50m_rivers_lake_centerlines.geojson > chemin/vers/rituels/cartes.js
   (NODE_PATH doit permettre de trouver les trois paquets).
   Options d'un fond : echelle ("50m" par défaut, "10m" pour une carte de pays, "110m" pour le monde entier), rangFleuves (rang Natural Earth
   maximal des fleuves dessinés, 0 = aucun), frontieres (frontières actuelles des États, pour la géographie).
   Noms : mers (toujours affichés, s'ils tiennent : max = largeur maximale en unités de la carte, \n = retour à la ligne)
   et nomsFleuves (affichés quand on zoome). */

var d3 = require("d3-geo");
var topojson = require("topojson-client");
var COTES = { "10m": require("world-atlas/land-10m.json"), "50m": require("world-atlas/land-50m.json"), "110m": require("world-atlas/land-110m.json") };
var PAYS = { "10m": require("world-atlas/countries-10m.json"), "50m": require("world-atlas/countries-50m.json"), "110m": require("world-atlas/countries-110m.json") };
var fleuves = JSON.parse(require("fs").readFileSync(process.argv[2], "utf8"));

var LARGEUR = 1000;
var FONDS = [
  { id: "mediterranee", nom: "L'Europe et la Méditerranée", ouest: -11, est: 47, nord: 52.5, sud: 28,
    mers: [
      { nom: "Océan\nAtlantique", lon: -6.3, lat: 46.2 },
      { nom: "Mer Méditerranée", lon: 17.5, lat: 33.4, grand: true },
      { nom: "Mer Noire", lon: 34.2, lat: 43.4 }
    ],
    nomsFleuves: [{ nom: "Nil", lon: 31.55, lat: 28.75 }, { nom: "Danube", lon: 25.4, lat: 44.25 }, { nom: "Rhône", lon: 5.4, lat: 44.8 }] },
  { id: "europe", nom: "L'Europe", ouest: -11, est: 31, nord: 56, sud: 36, frontieres: true,
    mers: [
      { nom: "Océan\nAtlantique", lon: -7.5, lat: 46.2 },
      { nom: "Mer du Nord", lon: 3.2, lat: 55.2 },
      { nom: "Mer Baltique", lon: 17.5, lat: 55.4, max: 150 },
      { nom: "Mer Méditerranée", lon: 7.5, lat: 38.6, grand: true }
    ],
    nomsFleuves: [{ nom: "Rhin", lon: 6.6, lat: 50.2 }, { nom: "Danube", lon: 25.4, lat: 44.25 }, { nom: "Elbe", lon: 11.0, lat: 53.0 }] },
  { id: "europe-large", nom: "L'Europe, de l'Atlantique à la Volga", ouest: -11, est: 52, nord: 62, sud: 33,
    mers: [
      { nom: "Océan\nAtlantique", lon: -7.5, lat: 46 },
      { nom: "Mer Méditerranée", lon: 17, lat: 35.5, grand: true },
      { nom: "Mer Noire", lon: 34.2, lat: 43.3 },
      { nom: "Mer Baltique", lon: 19.5, lat: 56.5, max: 140 }
    ],
    nomsFleuves: [{ nom: "Volga", lon: 46.2, lat: 50.2 }, { nom: "Dniepr", lon: 31.3, lat: 49.2 }, { nom: "Danube", lon: 25.4, lat: 44.25 }] },
  { id: "france", nom: "La France", ouest: -5.6, est: 10, nord: 51.4, sud: 41.2, echelle: "10m",
    mers: [
      { nom: "Manche", lon: -2.6, lat: 50.0 },
      { nom: "Océan\nAtlantique", lon: -3.6, lat: 45.6 },
      { nom: "Mer Méditerranée", lon: 5.2, lat: 42.4 }
    ],
    nomsFleuves: [
      { nom: "Seine", lon: 1.2, lat: 49.15 }, { nom: "Loire", lon: 0.3, lat: 47.65 }, { nom: "Garonne", lon: 0.1, lat: 44.6 },
      { nom: "Rhône", lon: 5.2, lat: 44.6 }, { nom: "Rhin", lon: 7.9, lat: 48.4 }
    ] },
  { id: "moyen-orient", nom: "Le Moyen-Orient", ouest: 28, est: 64, nord: 40, sud: 10, rangFleuves: 4, frontieres: true,
    mers: [
      { nom: "Mer Rouge", lon: 38.6, lat: 20.5, rot: -55 },
      { nom: "Golfe\nPersique", lon: 51.2, lat: 27.1 },
      { nom: "Mer d'Oman", lon: 61, lat: 21.5 },
      { nom: "Mer Méditerranée", lon: 31.2, lat: 34.2, max: 120 }
    ],
    nomsFleuves: [{ nom: "Tigre", lon: 44.1, lat: 35.9 }, { nom: "Euphrate", lon: 40.9, lat: 33.9 }, { nom: "Nil", lon: 31.55, lat: 26.75 }] },
  { id: "asie-est", nom: "L'Asie orientale", ouest: 92, est: 148, nord: 46, sud: -11, frontieres: true,
    mers: [
      { nom: "Mer de Chine\nméridionale", lon: 114, lat: 13.5 },
      { nom: "Océan\nPacifique", lon: 140.5, lat: 18 },
      { nom: "Océan Indien", lon: 98, lat: -8 },
      { nom: "Mer du Japon", lon: 134.5, lat: 40, max: 120 }
    ],
    nomsFleuves: [{ nom: "Mékong", lon: 105.6, lat: 15.5 }, { nom: "Yangzi Jiang", lon: 112.5, lat: 30.3 }, { nom: "Huang He", lon: 113.5, lat: 35 }] },
  { id: "monde", nom: "Le monde", ouest: -170, est: 180, nord: 75, sud: -56, echelle: "110m", rangFleuves: 0, frontieres: true,
    mers: [
      { nom: "Océan\nAtlantique", lon: -38, lat: 28 },
      { nom: "Océan\nPacifique", lon: -140, lat: 5 },
      { nom: "Océan\nIndien", lon: 78, lat: -22 }
    ] }
];

function arrondir(v) { return Math.round(v * 1000) / 1000; }

var sortie = FONDS.map(function (f) {
  var echelle = f.echelle || "50m";
  var terres = topojson.feature(COTES[echelle], COTES[echelle].objects.land);
  var rangFleuves = f.rangFleuves === undefined ? 6 : f.rangFleuves;
  var latMoy = (f.nord + f.sud) / 2 * Math.PI / 180;
  var k = LARGEUR / ((f.est - f.ouest) * Math.cos(latMoy));
  var kx = arrondir(k * Math.cos(latMoy)), ky = arrondir(k);
  var hauteur = Math.round((f.nord - f.sud) * ky);
  // même projection que la page : x = (lon - lon0) × kx, y = (lat0 - lat) × ky. Pour le monde entier, d3 la fait
  // sur la sphère, ce qui coupe proprement les terres qui chevauchent l'antiméridien (Russie, Fidji) ; pour un fond
  // régional, on projette à plat (les grands polygones très détaillés du 1:10 000 000 s'inversent sur la sphère).
  // Découpe au cadre avec une marge, pour que le trait de côte ne dessine jamais le bord du cadre ;
  // tracé SVG écrit au dixième près.
  var marge = 8;
  var cadre = [[-marge, -marge], [LARGEUR + marge, hauteur + marge]];
  var spherique = f.est - f.ouest > 180;
  function aPlat(c) { return [(c[0] - f.ouest) * kx, (f.nord - c[1]) * ky]; }
  // à plat, une terre qui chevauche l'antiméridien (îles Fidji, Tchoukotka) traverserait toute la carte : on déroule
  // ses longitudes (179, 181… plutôt que 179, -179…), en gardant la plupart des points entre -180 et 180
  function derouler(a) {
    var l = a.map(function (c) { return c[0]; });
    if (Math.max.apply(null, l) - Math.min.apply(null, l) <= 180) return a;
    var d = 0, res = a.map(function (c, i) {
      if (i) { var saut = c[0] - a[i - 1][0]; if (saut > 180) d -= 360; else if (saut < -180) d += 360; }
      return [c[0] + d, c[1]];
    });
    var meilleur = 0, garde = -1;
    [-360, 0, 360].forEach(function (k) {
      var n = res.filter(function (c) { return c[0] + k >= -180 && c[0] + k <= 180; }).length;
      if (n > garde) { garde = n; meilleur = k; }
    });
    return res.map(function (c) { return [c[0] + meilleur, c[1]]; });
  }
  function enPlan(g) {
    if (spherique) return g;
    function anneaux(a) { return derouler(a).map(aPlat); }
    if (g.type === "FeatureCollection") return { type: "FeatureCollection", features: g.features.map(function (ft) { return { type: "Feature", properties: {}, geometry: enPlan(ft.geometry) }; }) };
    if (g.type === "Polygon") return { type: "Polygon", coordinates: g.coordinates.map(anneaux) };
    if (g.type === "MultiPolygon") return { type: "MultiPolygon", coordinates: g.coordinates.map(function (p) { return p.map(anneaux); }) };
    if (g.type === "LineString") return { type: "LineString", coordinates: anneaux(g.coordinates) };
    if (g.type === "MultiLineString") return { type: "MultiLineString", coordinates: g.coordinates.map(anneaux) };
    throw new Error("géométrie inattendue : " + g.type);
  }
  var proj = spherique
    ? d3.geoProjection(function (l, p) { return [l * kx / ky, p]; })
      .scale(ky * 180 / Math.PI).translate([-kx * f.ouest, ky * f.nord]).precision(0).clipExtent(cadre)
    : d3.geoIdentity().clipExtent(cadre);
  if (spherique) {
    [[f.ouest + 1, f.nord - 1], [f.est - 1, f.sud + 1]].forEach(function (c) {
      var a = proj(c), b = aPlat(c);
      if (Math.abs(a[0] - b[0]) > .01 || Math.abs(a[1] - b[1]) > .01) throw new Error("projection incohérente pour " + f.id);
    });
  }
  var trace = d3.geoPath(proj).digits(1)(enPlan(terres)) || "";
  // on retire les anneaux réduits à rien après découpe (îles hors du cadre)
  trace = trace.split("Z").filter(function (s) { return /L/.test(s); }).join("Z") + "Z";
  function traceLignes(lignes) {
    return (d3.geoPath(proj).digits(1)(enPlan(lignes)) || "").split("M").filter(function (s) { return /L/.test(s); }).map(function (s) { return "M" + s; }).join("");
  }
  // fleuves : les grands cours d'eau (rang ≤ rangFleuves), sans les canaux
  var lignes = { type: "MultiLineString", coordinates: [] };
  fleuves.features.forEach(function (ft) {
    var p = ft.properties || {};
    if (p.scalerank > rangFleuves || /canal/i.test(p.name || "") || !/River|Lake Centerline/.test(p.featurecla || "")) return;
    var g = ft.geometry;
    (g.type === "LineString" ? [g.coordinates] : g.coordinates).forEach(function (l) { lignes.coordinates.push(l); });
  });
  var traceFleuves = lignes.coordinates.length ? traceLignes(lignes) : "";
  // frontières : les limites entre États (pas les côtes)
  var traceFrontieres = "";
  if (f.frontieres) {
    var pays = PAYS[echelle];
    traceFrontieres = traceLignes(topojson.mesh(pays, pays.objects.countries, function (a, b) { return a !== b; }));
  }
  return {
    id: f.id, nom: f.nom, lon0: f.ouest, lat0: f.nord, kx: kx, ky: ky, l: LARGEUR, h: hauteur,
    mers: f.mers, nomsFleuves: f.nomsFleuves || [], fleuves: traceFleuves, frontieres: traceFrontieres, terre: trace
  };
});

var js = "/* Fonds de carte de la boîte à outils — fichier généré par outils/fonds-de-carte.js, ne pas modifier à la main.\n" +
  "   Côtes : Natural Earth (domaine public), via world-atlas. Projection : x = (lon - lon0) × kx, y = (lat0 - lat) × ky. */\n" +
  "const FONDS = {\n" + sortie.map(function (f) {
    var t = f.terre, r = f.fleuves, fr = f.frontieres; delete f.terre; delete f.fleuves; delete f.frontieres;
    var tete = JSON.stringify(f).slice(0, -1);
    return "  " + JSON.stringify(f.id) + ": " + tete + ",\n    \"fleuves\": " + JSON.stringify(r) +
      ",\n    \"frontieres\": " + JSON.stringify(fr) + ",\n    \"terre\": " + JSON.stringify(t) + " }";
  }).join(",\n") + "\n};\n";
process.stdout.write(js);
