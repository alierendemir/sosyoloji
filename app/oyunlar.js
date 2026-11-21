/*
  Sosyoloji oyunları.
  Tüm oyunlar uygulamadaki kavram ve kuramcı verisini kullanır.
  Skorlar yalnızca bu cihazda saklanır.
*/
(function () {
  "use strict";

  var OYUN_LISTESI = [
    { id: "hafiza", ad: "Hafıza Kartları", aciklama: "Kartları çevir, her kavramı kuramcısıyla eşleştir.", simge: "🃏" },
    { id: "saha", ad: "Saha Notu", aciklama: "Sahadan gelen gözlemi oku, onu en iyi açıklayan kavramı bul.", simge: "📓" },
    { id: "zaman", ad: "Zaman Çizelgesi", aciklama: "Dört kuramcıyı en eskiden en yeniye doğru sırala.", simge: "⏳" },
    { id: "tahmin", ad: "Kavram Tahmini", aciklama: "İpuçlarından yola çıkıp gizli kavramı harf harf bul.", simge: "🔤" }
  ];
  window.OYUN_LISTESI = OYUN_LISTESI;

  function S() { return window.SC; }
  function alan() { return document.getElementById("icerik"); }

  function enIyiGoster(id, birim) {
    var v = S().oku("oyun-" + id, null);
    return v === null ? "" : '<p class="soluk kucuk">En iyi sonucun: <b>' + v + "</b> " + birim + "</p>";
  }
  function enIyiKaydet(id, deger, kucukDahaIyi) {
    var eski = S().oku("oyun-" + id, null);
    var yeniRekor = eski === null || (kucukDahaIyi ? deger < eski : deger > eski);
    if (yeniRekor) S().yaz("oyun-" + id, deger);
    return yeniRekor && eski !== null;
  }
  function sonEkran(baslik, skorMetni, yorum, rekor, id) {
    var e = S().esc;
    alan().innerHTML = "<h1>" + e(baslik) + '</h1><div class="skor">' + e(skorMetni) + "</div>" +
      (rekor ? '<p style="text-align:center"><b>Yeni rekor!</b></p>' : "") +
      '<p style="text-align:center">' + e(yorum) + "</p>" +
      '<div class="dugme-sira" style="justify-content:center"><button class="dugme ana" id="tekrar">Yeniden oyna</button><a class="dugme" href="#/oyunlar">Oyunlara dön</a></div>';
    document.getElementById("tekrar").addEventListener("click", function () { window.OYUN_BASLAT(id); });
    window.scrollTo(0, 0);
  }
  function ust(baslik, bilgi) {
    return '<a class="geri" href="#/oyunlar">← Oyunlar</a><h1>' + S().esc(baslik) + '</h1><p class="soluk kucuk" id="oyun-bilgi">' + S().esc(bilgi) + "</p>";
  }

  /* ---------- 1. Hafıza Kartları ---------- */
  function hafiza() {
    var sc = S(), e = sc.esc;
    var kullanilan = {}, ciftler = [];
    sc.karistir(sc.KV).forEach(function (k) {
      var kr = sc.kuramciById[k.kuramci[0]];
      if (kr && !kullanilan[kr.id] && ciftler.length < 6) { kullanilan[kr.id] = 1; ciftler.push({ kavram: k, kuramci: kr }); }
    });
    var kartlar = [];
    ciftler.forEach(function (c, i) {
      kartlar.push({ cift: i, metin: c.kavram.ad.split(" (")[0], tur: "Kavram" });
      kartlar.push({ cift: i, metin: c.kuramci.ad, tur: "Kuramcı" });
    });
    kartlar = sc.karistir(kartlar);
    var acik = [], eslesen = 0, hamle = 0, kilit = false;

    alan().innerHTML = ust("Hafıza Kartları", "Hamle: 0 · Eşleşen: 0 / 6") +
      '<div class="hafiza-izgara">' + kartlar.map(function (k, i) {
        return '<button class="hafiza-kart" data-i="' + i + '" aria-label="Kapalı kart"><span class="on">?</span><span class="arka"><small>' + e(k.tur) + "</small>" + e(k.metin) + "</span></button>";
      }).join("") + "</div>" + '<div id="eslesme-not"></div>';

    function bilgi() { document.getElementById("oyun-bilgi").textContent = "Hamle: " + hamle + " · Eşleşen: " + eslesen + " / 6"; }
    document.querySelectorAll(".hafiza-kart").forEach(function (b) {
      b.addEventListener("click", function () {
        var i = +b.getAttribute("data-i");
        if (kilit || b.classList.contains("cevrik") || b.classList.contains("tamam")) return;
        b.classList.add("cevrik"); b.setAttribute("aria-label", kartlar[i].tur + ": " + kartlar[i].metin);
        acik.push(b);
        if (acik.length < 2) return;
        hamle++;
        var a1 = acik[0], a2 = acik[1]; acik = [];
        var k1 = kartlar[+a1.getAttribute("data-i")], k2 = kartlar[+a2.getAttribute("data-i")];
        if (k1.cift === k2.cift && k1.tur !== k2.tur) {
          eslesen++;
          a1.classList.add("tamam"); a2.classList.add("tamam");
          var c = ciftler[k1.cift];
          document.getElementById("eslesme-not").innerHTML = '<div class="kart kucuk"><b>' + e(c.kavram.ad) + "</b> · " + e(c.kuramci.ad) + '<br><span class="soluk">' + e(c.kavram.tanim.split(/(?<=\.)\s/)[0]) + "</span></div>";
          bilgi();
          if (eslesen === 6) {
            setTimeout(function () {
              var rekor = enIyiKaydet("hafiza", hamle, true);
              sonEkran("Tebrikler", hamle + " hamle", hamle <= 9 ? "Harika bir hafıza. Kavramlarla kuramcıları çok iyi eşleştiriyorsun." : "Bütün eşleşmeleri buldun. Bir dahaki turda daha az hamleyle bitirmeyi deneyebilirsin.", rekor, "hafiza");
            }, 900);
          }
        } else {
          kilit = true; bilgi();
          setTimeout(function () { a1.classList.remove("cevrik"); a2.classList.remove("cevrik"); a1.setAttribute("aria-label", "Kapalı kart"); a2.setAttribute("aria-label", "Kapalı kart"); kilit = false; }, 1000);
        }
      });
    });
    var not = document.createElement("div"); not.innerHTML = enIyiGoster("hafiza", "hamle"); alan().appendChild(not);
  }

  /* ---------- 2. Saha Notu ---------- */
  function saha() {
    var sc = S(), e = sc.esc;
    var sorular = sc.karistir(sc.KV).slice(0, 8);
    var i = 0, dogru = 0;
    function ciz() {
      var k = sorular[i];
      var secenekler = sc.karistir([k].concat(sc.karistir(sc.KV.filter(function (x) { return x.id !== k.id; })).slice(0, 3)));
      alan().innerHTML = ust("Saha Notu", "Not " + (i + 1) + " / " + sorular.length + " · Doğru: " + dogru) +
        '<div class="ilerleme"><div style="width:' + (i / sorular.length * 100) + '%"></div></div>' +
        '<div class="saha-notu"><small>Saha notu</small>' + e(k.ornek) + "</div>" +
        '<p class="soru">Bu gözlemi en iyi hangi kavram açıklar?</p>' +
        secenekler.map(function (s) { return '<button class="secenek" data-id="' + s.id + '">' + e(s.ad) + "</button>"; }).join("") +
        '<div id="geri-bildirim"></div>';
      document.querySelectorAll(".secenek").forEach(function (b) {
        b.addEventListener("click", function () {
          var ok = b.getAttribute("data-id") === k.id; if (ok) dogru++;
          document.querySelectorAll(".secenek").forEach(function (x) {
            x.disabled = true;
            if (x.getAttribute("data-id") === k.id) x.classList.add("dogru"); else if (x === b) x.classList.add("yanlis");
          });
          document.getElementById("geri-bildirim").innerHTML = '<div class="kart"><b>' + (ok ? "Doğru" : "Doğru cevap: " + e(k.ad)) + '</b><p class="kucuk" style="margin:6px 0 0">' + e(k.tanim) + "</p></div>" +
            '<button class="dugme ana" id="sonraki">' + (i < sorular.length - 1 ? "Sonraki not" : "Sonucu gör") + "</button>";
          document.getElementById("sonraki").addEventListener("click", function () {
            i++;
            if (i < sorular.length) { ciz(); window.scrollTo(0, 0); }
            else {
              var rekor = enIyiKaydet("saha", dogru, false);
              sonEkran("Saha çalışması bitti", dogru + " / " + sorular.length, dogru >= 7 ? "Gündelik hayatı kavramlarla okumakta çok başarılısın." : dogru >= 4 ? "İyi gidiyorsun. Kavram sayfalarındaki örneklere göz atmak işini kolaylaştırabilir." : "Kavram sayfalarındaki örnekleri okuyup yeniden denemek iyi bir fikir olabilir.", rekor, "saha");
            }
          });
        });
      });
    }
    ciz();
  }

  /* ---------- 3. Zaman Çizelgesi ---------- */
  function zaman() {
    var sc = S(), e = sc.esc;
    var tur = 0, toplam = 0, TUR = 5;
    function yil(k) { return parseInt(k.yillar, 10); }
    function dortSec() {
      var secilen = [], yillar = {};
      sc.karistir(sc.KR).forEach(function (k) { var y = yil(k); if (secilen.length < 4 && !yillar[y]) { yillar[y] = 1; secilen.push(k); } });
      return secilen;
    }
    function ciz() {
      var dort = dortSec(), sira = [];
      var dogruSira = dort.slice().sort(function (a, b) { return yil(a) - yil(b); });
      alan().innerHTML = ust("Zaman Çizelgesi", "Tur " + (tur + 1) + " / " + TUR + " · Puan: " + toplam) +
        '<p class="soru">Kuramcılara en eskiden en yeniye doğru, doğum sırasına göre dokun.</p>' +
        '<div id="zaman-secenek">' + dort.map(function (k) { return '<button class="secenek" data-id="' + k.id + '"><span class="sira-rozet"></span>' + e(k.ad) + "</button>"; }).join("") + "</div>" +
        '<div class="dugme-sira"><button class="dugme" id="sifirla">Sıfırla</button></div><div id="geri-bildirim"></div>';
      var dugmeler = document.querySelectorAll("#zaman-secenek .secenek");
      function rozetler() {
        dugmeler.forEach(function (b) { var n = sira.indexOf(b.getAttribute("data-id")); b.querySelector(".sira-rozet").textContent = n === -1 ? "" : String(n + 1); b.classList.toggle("secili-sira", n !== -1); });
      }
      document.getElementById("sifirla").addEventListener("click", function () { sira = []; rozetler(); });
      dugmeler.forEach(function (b) {
        b.addEventListener("click", function () {
          var id = b.getAttribute("data-id");
          if (sira.indexOf(id) !== -1 || sira.length >= 4) return;
          sira.push(id); rozetler();
          if (sira.length < 4) return;
          var puan = 0;
          sira.forEach(function (id2, n) { if (dogruSira[n].id === id2) puan++; });
          toplam += puan;
          dugmeler.forEach(function (x) {
            x.disabled = true;
            var n = sira.indexOf(x.getAttribute("data-id"));
            x.classList.add(dogruSira[n].id === x.getAttribute("data-id") ? "dogru" : "yanlis");
          });
          document.getElementById("sifirla").disabled = true;
          document.getElementById("geri-bildirim").innerHTML = '<div class="kart"><b>' + (puan === 4 ? "Kusursuz sıralama" : puan + " / 4 doğru") + '</b><ol class="duz kucuk" style="margin:8px 0 0">' +
            dogruSira.map(function (k) { return "<li>" + e(k.ad) + ' <span class="soluk">(' + e(k.yillar) + ")</span></li>"; }).join("") + "</ol></div>" +
            '<button class="dugme ana" id="sonraki">' + (tur < TUR - 1 ? "Sonraki tur" : "Sonucu gör") + "</button>";
          document.getElementById("sonraki").addEventListener("click", function () {
            tur++;
            if (tur < TUR) { ciz(); window.scrollTo(0, 0); }
            else {
              var rekor = enIyiKaydet("zaman", toplam, false);
              sonEkran("Çizelge tamamlandı", toplam + " / " + (TUR * 4), toplam >= 16 ? "Sosyoloji tarihine çok hâkimsin." : "Kuramcılar sayfası doğum yılına göre sıralı. Oraya göz atıp yeniden deneyebilirsin.", rekor, "zaman");
            }
          });
        });
      });
    }
    ciz();
  }

  /* ---------- 4. Kavram Tahmini ---------- */
  var HARFLER = "ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ".split("");
  function buyuk(s) { return String(s).toLocaleUpperCase("tr"); }
  function tahmin() {
    var sc = S(), e = sc.esc;
    var havuz = sc.karistir(sc.KV.filter(function (k) { var a = k.ad.split(" (")[0]; return a.length >= 5 && a.length <= 26; })).slice(0, 5);
    var tur = 0, toplam = 0, HAK = 6;
    function ciz() {
      var k = havuz[tur];
      var hedef = buyuk(k.ad.split(" (")[0]);
      var tahminler = [], yanlis = 0, ipucuAcik = false, bitti = false;
      var kr = k.kuramci.map(function (id) { return sc.kuramciById[id] ? sc.kuramciById[id].ad : ""; }).join(", ");
      function maske() {
        return hedef.split(" ").map(function (kelime) {
          return '<span class="kelime-grup">' + kelime.split("").map(function (c) {
            if (HARFLER.indexOf(c) === -1) return '<span class="harf-kutu acik">' + e(c) + "</span>";
            var gorunur = tahminler.indexOf(c) !== -1 || bitti;
            return '<span class="harf-kutu' + (gorunur ? " acik" : "") + '">' + (gorunur ? e(c) : "") + "</span>";
          }).join("") + "</span>";
        }).join("");
      }
      function tanimMaskeli() {
        var c = k.tanim.split(/(?<=\.)\s/)[0];
        k.ad.split(" (")[0].split(/\s+/).filter(function (w) { return w.length > 3; }).forEach(function (w) {
          c = c.replace(new RegExp(w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"), "……");
        });
        return c;
      }
      function tamamMi() { return hedef.split("").every(function (c) { return HARFLER.indexOf(c) === -1 || tahminler.indexOf(c) !== -1; }); }
      function yenile() {
        document.getElementById("kelime").innerHTML = maske();
        document.getElementById("hak").textContent = "Kalan hak: " + (HAK - yanlis);
      }
      alan().innerHTML = ust("Kavram Tahmini", "Kavram " + (tur + 1) + " / " + havuz.length + " · Puan: " + toplam) +
        '<div class="kart"><div class="soluk kucuk">İpucu</div><b>' + e(kr) + "</b> · " + e(k.alan) +
        '<div id="ek-ipucu"></div><button class="dugme" id="ipucu-dugme" style="margin-top:8px">Tanımı göster (−1 puan)</button></div>' +
        '<div id="kelime" class="kelime"></div><p class="soluk kucuk" id="hak"></p>' +
        '<div class="klavye">' + HARFLER.map(function (h) { return '<button class="tus" data-h="' + h + '">' + h + "</button>"; }).join("") + "</div>" +
        '<div id="geri-bildirim"></div>';
      yenile();
      document.getElementById("ipucu-dugme").addEventListener("click", function () {
        ipucuAcik = true; this.remove();
        document.getElementById("ek-ipucu").innerHTML = '<p class="kucuk" style="margin:8px 0 0">' + e(tanimMaskeli()) + "</p>";
      });
      function bitir(kazandi) {
        bitti = true; yenile();
        var puan = kazandi ? Math.max(1, (HAK - yanlis) - (ipucuAcik ? 1 : 0)) : 0;
        toplam += puan;
        document.querySelectorAll(".tus").forEach(function (t) { t.disabled = true; });
        var ib = document.getElementById("ipucu-dugme"); if (ib) ib.remove();
        document.getElementById("geri-bildirim").innerHTML = '<div class="kart"><b>' + (kazandi ? "Buldun! +" + puan + " puan" : "Bu sefer olmadı. Kavram: " + e(k.ad)) + '</b><p class="kucuk" style="margin:6px 0 0">' + e(k.tanim) + '</p><a class="kucuk" href="#/kavram/' + k.id + '">Kavram sayfası →</a></div>' +
          '<button class="dugme ana" id="sonraki">' + (tur < havuz.length - 1 ? "Sonraki kavram" : "Sonucu gör") + "</button>";
        document.getElementById("sonraki").addEventListener("click", function () {
          tur++;
          if (tur < havuz.length) { ciz(); window.scrollTo(0, 0); }
          else {
            var rekor = enIyiKaydet("tahmin", toplam, false);
            sonEkran("Tahmin turu bitti", toplam + " puan", toplam >= 20 ? "Kavram dağarcığın çok geniş." : "Kavramlar sayfasında gezinip yeniden denemek puanını artırabilir.", rekor, "tahmin");
          }
        });
      }
      document.querySelectorAll(".tus").forEach(function (t) {
        t.addEventListener("click", function () {
          var h = t.getAttribute("data-h");
          if (bitti || tahminler.indexOf(h) !== -1) return;
          tahminler.push(h); t.disabled = true;
          if (hedef.indexOf(h) !== -1) { t.classList.add("dogru"); yenile(); if (tamamMi()) bitir(true); }
          else { t.classList.add("yanlis"); yanlis++; yenile(); if (yanlis >= HAK) bitir(false); }
        });
      });
    }
    ciz();
  }

  var OYUNLAR = { hafiza: hafiza, saha: saha, zaman: zaman, tahmin: tahmin };
  window.OYUN_BASLAT = function (id) {
    if (!OYUNLAR[id]) { alan().innerHTML = '<p class="bos">Oyun bulunamadı. <a href="#/oyunlar">Oyunlara dön</a></p>'; return; }
    OYUNLAR[id]();
    window.scrollTo(0, 0);
  };
})();
