// Service worker du site : la page, les fiches et la méthode restent disponibles sans connexion, après une première visite.
// - La page : le réseau d'abord (3 s au plus), le cache en secours, pour avoir toujours la dernière version.
// - Les fiches (cours.js, cartes.js…), les images et les polices : le cache d'abord, mis à jour en arrière-plan.
const CACHE = "terminale-hg-v2";
const BASE = ["./", "./index.html", "./cours.js", "./cartes.js", "./reperes.js", "./methode.js", "./vendor/qrcode-generator-1.4.4.js", "./icon-192.png"];
const POLICES = /^https:\/\/fonts\.(googleapis|gstatic)\.com\//;

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(BASE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("terminale-hg-") && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
const cle = (url) => { const u = new URL(url); return u.origin + u.pathname; };
const garder = (req, rep) => {
  if (rep && ((rep.ok && (rep.type === "basic" || rep.type === "cors")) || (rep.type === "opaque" && POLICES.test(req.url)))) {
    const copie = rep.clone();
    caches.open(CACHE).then((cache) => cache.put(POLICES.test(req.url) ? req.url : cle(req.url), copie));
  }
  return rep;
};
const duCache = (req) => caches.open(CACHE).then((cache) => cache.match(POLICES.test(req.url) ? req.url : cle(req.url)));
function reseauDabord(req) {
  const reseau = fetch(req).then((rep) => garder(req, rep));
  const delai = new Promise((ok) => setTimeout(ok, 3000)).then(() => duCache(req));
  return Promise.race([reseau.catch(() => duCache(req)), delai.then((r) => r || reseau)])
    .then((r) => r || reseau)
    .catch(() => duCache(req).then((r) => r || Response.error()));
}
function cacheDabord(req, e) {
  return duCache(req).then((enCache) => {
    const reseau = fetch(req).then((rep) => garder(req, rep));
    if (enCache) { e.waitUntil(reseau.catch(() => {})); return enCache; }
    return reseau;
  });
}
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const page = req.mode === "navigate" || url.pathname.endsWith("/") || url.pathname.endsWith(".html");
  if (url.origin === location.origin && url.pathname.startsWith(new URL("./", location.href).pathname)) {
    e.respondWith(page ? reseauDabord(req) : cacheDabord(req, e));
  } else if (POLICES.test(req.url)) {
    e.respondWith(cacheDabord(req, e));
  }
});
