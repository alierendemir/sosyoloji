/* Çevrimdışı çalışma için basit önbellek. İçerik güncellendiğinde SURUM değerini artır. */
var SURUM = "sosyoloji-v4";
var DOSYALAR = [
  "./",
  "index.html",
  "styles.css",
  "app.js",
  "oyunlar.js",
  "gizlilik.html",
  "manifest.webmanifest",
  "data/kuramcilar.js",
  "data/kavramlar.js",
  "data/makaleler.js",
  "data/rehber.js",
  "data/haftalik.js",
  "icons/icon-192.png",
  "icons/icon-512.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(SURUM).then(function (c) { return c.addAll(DOSYALAR); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (anahtarlar) {
    return Promise.all(anahtarlar.filter(function (k) { return k !== SURUM; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(function (r) {
    return r || fetch(e.request).then(function (yanit) {
      var kopya = yanit.clone();
      caches.open(SURUM).then(function (c) { c.put(e.request, kopya); });
      return yanit;
    }).catch(function () { return caches.match("index.html"); });
  }));
});
