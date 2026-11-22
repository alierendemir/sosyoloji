/* Türkü Defteri alierendemir.github.io/turku/ adresine taşındı. Bu dosya eski adreste kurulu kalan önbelleği
   temizler ve kendi kaydını siler. Yeni uygulamanın "turku-defteri-" önbelleklerine dokunmaz. */
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (anahtarlar) {
    return Promise.all(anahtarlar.filter(function (k) { return /^turku-v\d+$/.test(k); }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.registration.unregister(); }).then(function () {
    return self.clients.matchAll({ type: "window" });
  }).then(function (pencereler) {
    pencereler.forEach(function (p) { p.navigate("https://alierendemir.github.io/turku/"); });
  }));
});
