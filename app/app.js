(function () {
  "use strict";

  var KR = window.KURAMCILAR || [];
  var KV = window.KAVRAMLAR || [];
  var MK = window.MAKALELER || [];
  var RH = window.REHBER || [];
  var HF = window.HAFTALIK || { makaleler: [], kitaplar: [], iller: [] };
  var $icerik = document.getElementById("icerik");

  var kuramciById = {}; KR.forEach(function (k) { kuramciById[k.id] = k; });
  var kavramById = {}; KV.forEach(function (k) { kavramById[k.id] = k; });

  /* ---------- yardımcılar ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function kucuk(s) { return String(s).toLocaleLowerCase("tr"); }
  function sadelestir(s) {
    return kucuk(s).replace(/[çğıöşüâîû]/g, function (c) {
      return { "ç": "c", "ğ": "g", "ı": "i", "ö": "o", "ş": "s", "ü": "u", "â": "a", "î": "i", "û": "u" }[c];
    });
  }
  function karistir(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function bildir(m) {
    var b = document.getElementById("bildirim");
    b.textContent = m; b.classList.add("goster");
    clearTimeout(bildir._t); bildir._t = setTimeout(function () { b.classList.remove("goster"); }, 2200);
  }
  function kopyala(metin) {
    function eski() {
      var t = document.createElement("textarea"); t.value = metin; t.setAttribute("readonly", "");
      t.style.position = "fixed"; t.style.opacity = "0"; document.body.appendChild(t); t.select();
      try { document.execCommand("copy"); bildir("Panoya kopyalandı"); } catch (e) { bildir("Kopyalanamadı"); }
      document.body.removeChild(t);
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(metin).then(function () { bildir("Panoya kopyalandı"); }, eski);
    } else { eski(); }
  }

  /* ---------- yerel depolama (yalnızca bu cihazda) ---------- */
  function oku(anahtar, varsayilan) {
    try { var v = localStorage.getItem(anahtar); return v ? JSON.parse(v) : varsayilan; } catch (e) { return varsayilan; }
  }
  function yaz(anahtar, deger) { try { localStorage.setItem(anahtar, JSON.stringify(deger)); } catch (e) { /* depolama kapalı olabilir */ } }
  function listem() { return oku("listem", []); }
  function listedeMi(k) { return listem().indexOf(k) !== -1; }
  function listeDegistir(k) {
    var l = listem(); var i = l.indexOf(k);
    if (i === -1) { l.push(k); bildir("Okuma listene eklendi"); } else { l.splice(i, 1); bildir("Okuma listesinden çıkarıldı"); }
    yaz("listem", l);
    return i === -1;
  }
  function yildizDugme(k) {
    var v = listedeMi(k);
    return '<button class="yildiz" data-liste="' + esc(k) + '" aria-pressed="' + v + '" aria-label="Okuma listesine ekle" title="Okuma listesine ekle">' + (v ? "★" : "☆") + "</button>";
  }

  /* ---------- APA biçimlendirme ---------- */
  function basHarfler(ad) {
    return ad.split(/[\s-]+/).filter(Boolean).map(function (w) { return w.charAt(0).toLocaleUpperCase("tr") + "."; }).join(" ");
  }
  function apaYazarlar(y) {
    var a = y.map(function (p) { return p[1] ? p[0] + ", " + basHarfler(p[1]) : p[0]; });
    if (a.length === 1) return a[0];
    if (a.length === 2) return a[0] + ", & " + a[1];
    return a.slice(0, -1).join(", ") + ", & " + a[a.length - 1];
  }
  function metinIci(m) {
    var y = m.yazarlar;
    if (y.length === 1) return "(" + y[0][0] + ", " + m.yil + ")";
    if (y.length === 2) return "(" + y[0][0] + " ve " + y[1][0] + ", " + m.yil + ")";
    return "(" + y[0][0] + " vd., " + m.yil + ")";
  }
  function apaKaynak(m, html) {
    var i = function (s) { return html ? "<i>" + esc(s) + "</i>" : s; };
    var e = html ? esc : function (s) { return s; };
    var hacim = "";
    if (m.cilt) hacim += ", " + i(m.cilt);
    if (m.sayi) hacim += (m.cilt ? "" : ",") + (m.cilt ? "" : " ") + "(" + e(m.sayi) + ")";
    var baglanti = m.doi ? "https://doi.org/" + m.doi : m.url;
    return e(apaYazarlar(m.yazarlar)) + " (" + m.yil + "). " + e(m.baslik) + (/[?!.]$/.test(m.baslik) ? " " : ". ") +
      i(m.dergi) + hacim + (m.sayfa ? ", " + e(m.sayfa) : "") + ". " +
      (html ? '<a href="' + esc(baglanti) + '" target="_blank" rel="noopener">' + esc(baglanti) + "</a>" : baglanti);
  }
  function makaleAnahtar(m) { return "m:" + m.url; }

  /* ---------- parçalar ---------- */
  function kuramciAdlari(ids) {
    return ids.map(function (id) {
      var k = kuramciById[id]; return k ? '<a class="etiket" href="#/kuramci/' + k.id + '">' + esc(k.ad) + "</a>" : "";
    }).join("");
  }
  function kavramEtiketleri(ids) {
    return ids.map(function (id) {
      var k = kavramById[id]; return k ? '<a class="etiket" href="#/kavram/' + k.id + '">' + esc(k.ad) + "</a>" : "";
    }).join("");
  }
  function kavramKart(k) {
    return '<a class="kart kart-link" href="#/kavram/' + k.id + '"><h3>' + esc(k.ad) + '</h3><div class="soluk">' +
      esc(k.kuramci.map(function (id) { return kuramciById[id] ? kuramciById[id].ad : ""; }).join(", ")) + " · " + esc(k.alan) + "</div></a>";
  }
  function kuramciKart(k) {
    return '<a class="kart kart-link" href="#/kuramci/' + k.id + '"><h3>' + esc(k.ad) + '</h3><div class="soluk">' +
      esc(k.yillar) + " · " + esc(k.ekol) + "</div></a>";
  }
  function makaleKart(m) {
    var anahtar = makaleAnahtar(m);
    return '<div class="kart makale"><div class="ust-baslik"><div class="kunye">' + apaKaynak(m, true) + "</div>" + yildizDugme(anahtar) + "</div>" +
      '<p class="soluk kucuk" style="margin-top:8px">' + esc(m.ozet) + "</p>" +
      '<div class="dugme-sira">' +
      '<button class="dugme" data-kopya="apa" data-url="' + esc(m.url) + '">APA kaynakça</button>' +
      '<button class="dugme" data-kopya="ici" data-url="' + esc(m.url) + '">Metin içi atıf</button>' +
      '<a class="dugme" href="' + esc(m.url) + '" target="_blank" rel="noopener">Makaleyi aç ↗</a>' +
      "</div></div>";
  }
  function makaleBul(url) { for (var i = 0; i < MK.length; i++) if (MK[i].url === url) return MK[i]; return null; }

  /* ---------- sayfalar ---------- */
  function gununKavrami() {
    var d = new Date(); var n = d.getFullYear() * 400 + d.getMonth() * 31 + d.getDate();
    return KV[n % KV.length];
  }

  function anaSayfa() {
    var g = gununKavrami();
    return '<h1>Merhaba</h1><p class="soluk">Kavramlar, kuramcılar, Türkçe makaleler ve tez yazımı için cebindeki sosyoloji rehberi.</p>' +
      '<input class="arama" id="genel-arama" type="search" placeholder="Kavram, kuramcı ya da makale ara…" autocomplete="off" aria-label="Arama">' +
      '<div id="arama-sonuc"></div>' +
      '<div id="ana-blok">' +
      buHaftaBlok() +
      '<div class="bolum"><h2>Günün kavramı</h2><a class="kart kart-link" href="#/kavram/' + g.id + '"><h3>' + esc(g.ad) + '</h3><p class="kucuk" style="margin:0">' + esc(g.tanim) + "</p></a></div>" +
      '<div class="izgara">' +
      '<a class="kutucuk" href="#/kavramlar"><b>' + KV.length + ' kavram</b><span>Tanım, örnek ve kullanım önerisi</span></a>' +
      '<a class="kutucuk" href="#/kuramcilar"><b>' + KR.length + ' kuramcı</b><span>Fikirler, eserler ve Türkçe kaynaklar</span></a>' +
      '<a class="kutucuk" href="#/makaleler"><b>' + MK.length + ' makale</b><span>Künyesi doğrulanmış Türkçe çalışmalar</span></a>' +
      '<a class="kutucuk" href="#/oyunlar"><b>Oyunlar</b><span>Test, hafıza kartları ve daha fazlası</span></a>' +
      '<a class="kutucuk" href="#/tez"><b>Tezine ekle</b><span>Kuramsal çerçeve ve APA atıf</span></a>' +
      '<a class="kutucuk" href="#/listem"><b>Okuma listem</b><span>Kaydettiklerin</span></a>' +
      "</div>" +
      '<p class="alt-not">Geliştiren: <b>Ali Eren Demir</b><br>Uygulama hiçbir kişisel veri toplamaz. Okuma listen ve test sonuçların yalnızca bu cihazda saklanır. <a href="#/hakkinda">Hakkında</a></p>' +
      "</div>";
  }
  function anaSayfaBagla() {
    var g = document.getElementById("genel-arama");
    var s = document.getElementById("arama-sonuc");
    var blok = document.getElementById("ana-blok");
    g.addEventListener("input", function () {
      var q = sadelestir(g.value.trim());
      if (q.length < 2) { s.innerHTML = ""; blok.style.display = ""; return; }
      blok.style.display = "none";
      var kv = KV.filter(function (k) { return sadelestir(k.ad + " " + k.ing + " " + k.tanim).indexOf(q) !== -1; });
      var kr = KR.filter(function (k) { return sadelestir(k.ad + " " + k.ekol + " " + k.ozet).indexOf(q) !== -1; });
      var mk = MK.filter(function (m) { return sadelestir(m.baslik + " " + m.yazarlar.map(function (y) { return y.join(" "); }).join(" ") + " " + m.dergi).indexOf(q) !== -1; });
      var h = "";
      if (kv.length) h += '<div class="bolum"><h2>Kavramlar</h2>' + kv.slice(0, 8).map(kavramKart).join("") + "</div>";
      if (kr.length) h += '<div class="bolum"><h2>Kuramcılar</h2>' + kr.slice(0, 8).map(kuramciKart).join("") + "</div>";
      if (mk.length) h += '<div class="bolum"><h2>Makaleler</h2>' + mk.slice(0, 8).map(makaleKart).join("") + "</div>";
      s.innerHTML = h || '<p class="bos">Sonuç bulunamadı. Farklı bir yazımla deneyebilirsin.</p>';
    });
  }

  var kavramFiltre = "Tümü";
  function kavramlarSayfa() {
    var alanlar = ["Tümü"].concat(KV.map(function (k) { return k.alan; }).filter(function (v, i, a) { return a.indexOf(v) === i; }).sort(function (a, b) { return a.localeCompare(b, "tr"); }));
    return '<h1>Kavramlar</h1><input class="arama" id="kavram-arama" type="search" placeholder="Kavram ara…" aria-label="Kavram ara">' +
      '<div class="filtre" role="group" aria-label="Alan filtresi">' + alanlar.map(function (a) {
        return '<button data-alan="' + esc(a) + '" class="' + (a === kavramFiltre ? "secili" : "") + '">' + esc(a) + "</button>";
      }).join("") + '</div><div id="kavram-liste"></div>';
  }
  function kavramlarBagla() {
    var arama = document.getElementById("kavram-arama"), liste = document.getElementById("kavram-liste");
    function ciz() {
      var q = sadelestir(arama.value.trim());
      var l = KV.filter(function (k) {
        return (kavramFiltre === "Tümü" || k.alan === kavramFiltre) && (!q || sadelestir(k.ad + " " + k.ing + " " + k.tanim).indexOf(q) !== -1);
      }).sort(function (a, b) { return a.ad.localeCompare(b.ad, "tr"); });
      liste.innerHTML = l.length ? l.map(kavramKart).join("") : '<p class="bos">Bu ölçütlere uyan kavram bulunamadı.</p>';
    }
    arama.addEventListener("input", ciz);
    document.querySelectorAll(".filtre button").forEach(function (b) {
      b.addEventListener("click", function () {
        kavramFiltre = b.getAttribute("data-alan");
        document.querySelectorAll(".filtre button").forEach(function (x) { x.classList.toggle("secili", x === b); });
        ciz();
      });
    });
    ciz();
  }

  function kavramSayfa(id) {
    var k = kavramById[id]; if (!k) return bulunamadi();
    var ilgiliMakale = MK.filter(function (m) { return m.kuramci.some(function (x) { return k.kuramci.indexOf(x) !== -1; }); });
    return '<a class="geri" href="#/kavramlar">← Kavramlar</a>' +
      '<div class="ust-baslik"><h1>' + esc(k.ad) + "</h1>" + yildizDugme("k:" + k.id) + "</div>" +
      '<p class="soluk">' + esc(k.ing) + " · " + esc(k.alan) + "</p>" + kuramciAdlari(k.kuramci) +
      '<div class="bolum"><h2>Tanım</h2><p>' + esc(k.tanim) + "</p></div>" +
      '<div class="bolum"><h2>Örnek</h2><div class="alinti">' + esc(k.ornek) + "</div></div>" +
      '<div class="bolum"><h2>Makalende nasıl kullanırsın?</h2><p>' + esc(k.kullanim) + "</p></div>" +
      (k.iliskili && k.iliskili.length ? '<div class="bolum"><h2>İlişkili kavramlar</h2>' + kavramEtiketleri(k.iliskili) + "</div>" : "") +
      (ilgiliMakale.length ? '<div class="bolum"><h2>Türkçe okuma önerileri</h2>' + ilgiliMakale.map(makaleKart).join("") + "</div>" : "");
  }

  function kuramcilarSayfa() {
    var sirali = KR.slice().sort(function (a, b) { return parseInt(a.yillar, 10) - parseInt(b.yillar, 10); });
    return '<h1>Kuramcılar</h1><p class="soluk">Doğum yılına göre sıralanmıştır.</p>' +
      '<input class="arama" id="kuramci-arama" type="search" placeholder="Kuramcı ya da ekol ara…" aria-label="Kuramcı ara">' +
      '<div id="kuramci-liste" style="margin-top:12px">' + sirali.map(kuramciKart).join("") + "</div>";
  }
  function kuramcilarBagla() {
    var a = document.getElementById("kuramci-arama"), l = document.getElementById("kuramci-liste");
    var sirali = KR.slice().sort(function (x, y) { return parseInt(x.yillar, 10) - parseInt(y.yillar, 10); });
    a.addEventListener("input", function () {
      var q = sadelestir(a.value.trim());
      var r = sirali.filter(function (k) { return !q || sadelestir(k.ad + " " + k.ekol + " " + k.ulke).indexOf(q) !== -1; });
      l.innerHTML = r.length ? r.map(kuramciKart).join("") : '<p class="bos">Bu aramaya uyan kuramcı bulunamadı.</p>';
    });
  }

  function kuramciSayfa(id) {
    var k = kuramciById[id]; if (!k) return bulunamadi();
    var mk = MK.filter(function (m) { return m.kuramci.indexOf(k.id) !== -1; });
    return '<a class="geri" href="#/kuramcilar">← Kuramcılar</a>' +
      '<div class="ust-baslik"><h1>' + esc(k.ad) + "</h1>" + yildizDugme("q:" + k.id) + "</div>" +
      '<p class="soluk">' + esc(k.yillar) + " · " + esc(k.ulke) + "<br>" + esc(k.ekol) + "</p>" +
      "<p>" + esc(k.ozet) + "</p>" +
      '<div class="bolum"><h2>Temel fikirler</h2><ul class="duz">' + k.fikirler.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul></div>" +
      '<div class="bolum"><h2>Kavramları</h2>' + kavramEtiketleri(k.kavramlar) + "</div>" +
      '<div class="bolum"><h2>Temel eserleri</h2>' + k.eserler.map(function (e) {
        return '<div class="kart"><b>' + esc(e.tr || e.orijinal) + "</b>" +
          (e.tr && e.tr !== e.orijinal ? '<div class="soluk kucuk">Özgün adı: ' + esc(e.orijinal) + "</div>" : "") +
          (e.yil ? '<div class="soluk kucuk">İlk yayın: ' + esc(e.yil) + "</div>" : "") +
          (e.tr ? "" : '<div class="soluk kucuk">Türkçe çevirisi için kütüphane kataloğuna bakabilirsin.</div>') + "</div>";
      }).join("") +
      '<p class="soluk kucuk">Türkçe baskıların yayınevi, çevirmen ve yılı baskıdan baskıya değişir. Kaynakçaya elindeki baskının künyesini yaz.</p></div>' +
      '<div class="bolum"><h2>Tezinde nasıl kullanırsın?</h2><div class="alinti">' + esc(k.tezde) + "</div></div>" +
      '<div class="bolum"><h2>Türkçe makaleler</h2>' + (mk.length ? mk.map(makaleKart).join("") : '<p class="soluk">Bu kuramcı için henüz makale eklenmedi.</p>') + "</div>";
  }

  function makalelerSayfa() {
    var sirali = MK.slice().sort(function (a, b) { return a.yazarlar[0][0].localeCompare(b.yazarlar[0][0], "tr"); });
    return '<h1>Türkçe makaleler</h1><p class="soluk">Her künye makalenin DergiPark sayfasından kontrol edilerek eklenmiştir. Tezinde kullanmadan önce makalenin tam metnini okuman önerilir.</p>' +
      '<input class="arama" id="makale-arama" type="search" placeholder="Başlık, yazar ya da dergi ara…" aria-label="Makale ara">' +
      '<div id="makale-liste" style="margin-top:12px">' + sirali.map(makaleKart).join("") + "</div>";
  }
  function makalelerBagla() {
    var a = document.getElementById("makale-arama"), l = document.getElementById("makale-liste");
    var sirali = MK.slice().sort(function (x, y) { return x.yazarlar[0][0].localeCompare(y.yazarlar[0][0], "tr"); });
    a.addEventListener("input", function () {
      var q = sadelestir(a.value.trim());
      var r = sirali.filter(function (m) {
        var kr = m.kuramci.map(function (id) { return kuramciById[id] ? kuramciById[id].ad : ""; }).join(" ");
        return !q || sadelestir(m.baslik + " " + m.dergi + " " + kr + " " + m.yazarlar.map(function (y) { return y.join(" "); }).join(" ")).indexOf(q) !== -1;
      });
      l.innerHTML = r.length ? r.map(makaleKart).join("") : '<p class="bos">Bu aramaya uyan makale bulunamadı.</p>';
    });
  }

  /* ---------- test ---------- */
  function soruUret() {
    var tipler = [];
    // 1. kavram -> kuramcı
    KV.forEach(function (k) {
      var dogru = kuramciById[k.kuramci[0]]; if (!dogru) return;
      tipler.push(function () {
        var yanlis = karistir(KR.filter(function (x) { return k.kuramci.indexOf(x.id) === -1; })).slice(0, 3).map(function (x) { return x.ad; });
        return { soru: "\"" + k.ad + "\" kavramı en çok hangi düşünürle ilişkilendirilir?", dogru: dogru.ad, secenekler: karistir([dogru.ad].concat(yanlis)), aciklama: k.tanim, link: "#/kavram/" + k.id };
      });
    });
    // 2. tanım -> kavram
    KV.forEach(function (k) {
      tipler.push(function () {
        var cumle = k.tanim.split(/(?<=\.)\s/)[0];
        var kok = k.ad.split(" (")[0];
        kok.split(/\s+/).filter(function (w) { return w.length > 3 && w !== "ve"; }).forEach(function (w) {
          var re = new RegExp(w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"); cumle = cumle.replace(re, "……");
        });
        var yanlis = karistir(KV.filter(function (x) { return x.id !== k.id; })).slice(0, 3).map(function (x) { return x.ad; });
        return { soru: "Aşağıdaki tanım hangi kavrama aittir?\n\n" + cumle, dogru: k.ad, secenekler: karistir([k.ad].concat(yanlis)), aciklama: k.tanim, link: "#/kavram/" + k.id };
      });
    });
    // 3. eser -> kuramcı
    KR.forEach(function (k) {
      k.eserler.forEach(function (e) {
        tipler.push(function () {
          var ad = e.tr || e.orijinal;
          var yanlis = karistir(KR.filter(function (x) { return x.id !== k.id; })).slice(0, 3).map(function (x) { return x.ad; });
          return { soru: "\"" + ad + "\" adlı eser kime aittir?", dogru: k.ad, secenekler: karistir([k.ad].concat(yanlis)), aciklama: k.ad + " (" + k.yillar + "), " + k.ekol + ".", link: "#/kuramci/" + k.id };
        });
      });
    });
    // 4. fikir -> kuramcı
    KR.forEach(function (k) {
      k.fikirler.forEach(function (f) {
        tipler.push(function () {
          var yanlis = karistir(KR.filter(function (x) { return x.id !== k.id; })).slice(0, 3).map(function (x) { return x.ad; });
          return { soru: "Aşağıdaki düşünce hangi kuramcıya aittir?\n\n" + f, dogru: k.ad, secenekler: karistir([k.ad].concat(yanlis)), aciklama: k.ozet, link: "#/kuramci/" + k.id };
        });
      });
    });
    return karistir(tipler).slice(0, 10).map(function (f) { return f(); });
  }

  var test = null;
  function testSayfa() {
    var enIyi = oku("test-en-iyi", null);
    return '<h1>Kısa test</h1><p class="soluk">Kavramlar, kuramcılar ve eserler üzerine rastgele seçilen 10 soru. Her turda farklı sorular gelir.</p>' +
      (enIyi !== null ? '<p>En iyi sonucun: <b>' + enIyi + " / 10</b></p>" : "") +
      '<button class="dugme ana" id="test-basla">Teste başla</button>' +
      '<div class="bolum"><h2>Konuya göre çalış</h2><p class="soluk kucuk">Bir kuramcının sayfasını okuduktan sonra testi çözmek öğrendiklerini pekiştirmene yardımcı olur.</p></div>';
  }
  function testBagla() {
    document.getElementById("test-basla").addEventListener("click", function () {
      test = { sorular: soruUret(), i: 0, dogru: 0 };
      soruCiz();
    });
  }
  function soruCiz() {
    var s = test.sorular[test.i];
    var parcalar = s.soru.split("\n\n");
    $icerik.innerHTML = '<div class="ilerleme"><div style="width:' + (test.i * 10) + '%"></div></div>' +
      '<p class="soluk kucuk">Soru ' + (test.i + 1) + " / " + test.sorular.length + "</p>" +
      '<div class="soru">' + esc(parcalar[0]) + "</div>" +
      (parcalar[1] ? '<div class="alinti">' + esc(parcalar[1]) + "</div>" : "") +
      '<div id="secenekler">' + s.secenekler.map(function (o, i) { return '<button class="secenek" data-i="' + i + '">' + esc(o) + "</button>"; }).join("") + "</div>" +
      '<div id="geri-bildirim"></div>';
    document.querySelectorAll(".secenek").forEach(function (b) {
      b.addEventListener("click", function () {
        var secim = s.secenekler[+b.getAttribute("data-i")];
        var dogruMu = secim === s.dogru; if (dogruMu) test.dogru++;
        document.querySelectorAll(".secenek").forEach(function (x) {
          x.disabled = true;
          var o = s.secenekler[+x.getAttribute("data-i")];
          if (o === s.dogru) x.classList.add("dogru"); else if (x === b) x.classList.add("yanlis");
        });
        document.getElementById("geri-bildirim").innerHTML =
          '<div class="kart"><b>' + (dogruMu ? "Doğru" : "Doğru cevap: " + esc(s.dogru)) + '</b><p class="kucuk" style="margin:6px 0 0">' + esc(s.aciklama) + '</p><a class="kucuk" href="' + s.link + '">Ayrıntılar →</a></div>' +
          '<button class="dugme ana" id="sonraki">' + (test.i < test.sorular.length - 1 ? "Sonraki soru" : "Sonucu gör") + "</button>";
        document.getElementById("sonraki").addEventListener("click", function () {
          test.i++;
          if (test.i < test.sorular.length) soruCiz(); else sonucCiz();
          window.scrollTo(0, 0);
        });
      });
    });
  }
  function sonucCiz() {
    var enIyi = oku("test-en-iyi", 0);
    if (test.dogru > enIyi) yaz("test-en-iyi", test.dogru);
    var yorum = test.dogru >= 9 ? "Harika bir sonuç. Kavramlara oldukça hâkimsin." :
      test.dogru >= 6 ? "İyi bir sonuç. Yanlış yaptığın konulara kısa bir göz atmak işini kolaylaştırır." :
      "Kuramcı sayfalarını gözden geçirip yeniden denemek iyi bir fikir olabilir.";
    $icerik.innerHTML = '<h1>Test tamamlandı</h1><div class="skor">' + test.dogru + " / 10</div><p style=\"text-align:center\">" + yorum + "</p>" +
      '<div class="dugme-sira" style="justify-content:center"><button class="dugme ana" id="yeniden">Yeni test</button><a class="dugme" href="#/kuramcilar">Kuramcılara dön</a></div>';
    document.getElementById("yeniden").addEventListener("click", function () { test = { sorular: soruUret(), i: 0, dogru: 0 }; soruCiz(); });
  }

  /* ---------- tezine ekle ---------- */
  function rehberIcerik(parca) {
    switch (parca.t) {
      case "p": return "<p>" + esc(parca.m) + "</p>";
      case "ol": return '<ol class="duz">' + parca.m.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ol>";
      case "ipucu": return '<div class="ipucu">' + esc(parca.m) + "</div>";
      case "ornek": return '<div class="alinti">' + esc(parca.m) + "</div>";
      case "kalip": return "<b class=\"kucuk\">" + esc(parca.b) + '</b><div class="kalip">' + esc(parca.m) + "</div>";
      case "tablo": return '<table class="tablo"><thead><tr>' + parca.m[0].map(function (h) { return "<th>" + esc(h) + "</th>"; }).join("") + "</tr></thead><tbody>" +
        parca.m.slice(1).map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + esc(c) + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table>";
      case "liste": return parca.m.map(function (l) { return '<div class="kart"><a href="' + esc(l.url) + '" target="_blank" rel="noopener"><b>' + esc(l.ad) + ' ↗</b></a><div class="soluk kucuk">' + esc(l.not) + "</div></div>"; }).join("");
      default: return "";
    }
  }
  function tezSayfa() {
    return '<h1>Tezine ekle</h1><p class="soluk">Kuramsal çerçeve kurma, kavram kullanımı ve APA 7 atıf için kısa bir rehber.</p>' +
      RH.map(function (r, i) {
        return '<details class="akordeon"' + (i === 0 ? " open" : "") + "><summary>" + esc(r.baslik) + "</summary><div>" + r.icerik.map(rehberIcerik).join("") + "</div></details>";
      }).join("") +
      '<details class="akordeon" open><summary>APA atıf oluşturucu</summary><div>' +
      '<label class="alan" for="a-tur">Kaynak türü</label><select class="girdi" id="a-tur"><option value="makale">Dergi makalesi</option><option value="kitap">Kitap</option><option value="ceviri">Çeviri kitap</option><option value="tez">Lisansüstü tez</option></select>' +
      '<label class="alan" for="a-yazar">Yazar(lar) · her satıra bir yazar, "Soyadı, Adı" biçiminde</label><textarea class="girdi" id="a-yazar" rows="2" placeholder="Palabıyık, Adem"></textarea>' +
      '<label class="alan" for="a-yil">Yıl</label><input class="girdi" id="a-yil" inputmode="numeric" placeholder="2011">' +
      '<label class="alan" for="a-baslik">Başlık</label><input class="girdi" id="a-baslik">' +
      '<div data-tur="makale"><label class="alan" for="a-dergi">Dergi adı</label><input class="girdi" id="a-dergi">' +
      '<label class="alan" for="a-cilt">Cilt</label><input class="girdi" id="a-cilt">' +
      '<label class="alan" for="a-sayi">Sayı</label><input class="girdi" id="a-sayi">' +
      '<label class="alan" for="a-sayfa">Sayfa aralığı</label><input class="girdi" id="a-sayfa" placeholder="1–21">' +
      '<label class="alan" for="a-doi">DOI ya da bağlantı</label><input class="girdi" id="a-doi" placeholder="10.xxxx/xxxx"></div>' +
      '<div data-tur="kitap ceviri"><label class="alan" for="a-yayinevi">Yayınevi</label><input class="girdi" id="a-yayinevi"></div>' +
      '<div data-tur="ceviri"><label class="alan" for="a-cevirmen">Çevirmen (Adı Soyadı)</label><input class="girdi" id="a-cevirmen">' +
      '<label class="alan" for="a-ozgun">Özgün eserin yayın yılı</label><input class="girdi" id="a-ozgun" inputmode="numeric"></div>' +
      '<div data-tur="tez"><label class="alan" for="a-derece">Tez türü</label><select class="girdi" id="a-derece"><option>Yüksek lisans tezi</option><option>Doktora tezi</option></select>' +
      '<label class="alan" for="a-univ">Üniversite</label><input class="girdi" id="a-univ"></div>' +
      '<div class="cikti" id="a-cikti" aria-live="polite"></div><div class="cikti kucuk" id="a-ici"></div>' +
      '<div class="dugme-sira"><button class="dugme ana" id="a-kopya">Kaynakçayı kopyala</button><button class="dugme" id="a-ici-kopya">Metin içi atfı kopyala</button></div>' +
      '<p class="soluk kucuk">Oluşturulan künyeyi kaynağın kendi bilgileriyle karşılaştırman önerilir. Büyük-küçük harf kullanımı gibi ayrıntılar kılavuzdan kılavuza değişebilir.</p>' +
      "</div></details>";
  }
  function tezBagla() {
    var ids = ["a-tur", "a-yazar", "a-yil", "a-baslik", "a-dergi", "a-cilt", "a-sayi", "a-sayfa", "a-doi", "a-yayinevi", "a-cevirmen", "a-ozgun", "a-derece", "a-univ"];
    var el = {}; ids.forEach(function (i) { el[i] = document.getElementById(i); });
    var sonPlain = "", sonIci = "";
    function guncelle() {
      var tur = el["a-tur"].value;
      document.querySelectorAll("[data-tur]").forEach(function (d) { d.style.display = d.getAttribute("data-tur").split(" ").indexOf(tur) !== -1 ? "" : "none"; });
      var yazarlar = el["a-yazar"].value.split("\n").map(function (s) { return s.trim(); }).filter(Boolean).map(function (s) {
        var p = s.split(","); return [p[0].trim(), (p[1] || "").trim()];
      });
      var yil = el["a-yil"].value.trim() || "t.y.";
      var baslik = el["a-baslik"].value.trim();
      if (!yazarlar.length && !baslik) { document.getElementById("a-cikti").innerHTML = '<span class="soluk">Alanları doldurdukça künye burada oluşur.</span>'; document.getElementById("a-ici").textContent = ""; sonPlain = ""; return; }
      var yz = yazarlar.length ? apaYazarlar(yazarlar.map(function (y) { return [y[0], y[1]]; })).replace(/, \.$/, "") : "";
      var html = "", plain = "";
      if (tur === "makale") {
        var m = { yazarlar: yazarlar.length ? yazarlar : [["Yazar", ""]], yil: yil, baslik: baslik, dergi: el["a-dergi"].value.trim(), cilt: el["a-cilt"].value.trim(), sayi: el["a-sayi"].value.trim(), sayfa: el["a-sayfa"].value.trim(), doi: "", url: "" };
        var d = el["a-doi"].value.trim();
        if (/^10\./.test(d)) m.doi = d; else m.url = d;
        html = apaKaynak(m, true); plain = apaKaynak(m, false);
      } else if (tur === "kitap" || tur === "ceviri") {
        var yay = el["a-yayinevi"].value.trim();
        var cev = tur === "ceviri" && el["a-cevirmen"].value.trim() ? " (Ç. " + el["a-cevirmen"].value.trim() + ")" : "";
        var ozg = tur === "ceviri" && el["a-ozgun"].value.trim() ? " (Özgün eserin yayın tarihi " + el["a-ozgun"].value.trim() + ")" : "";
        plain = yz + " (" + yil + "). " + baslik + cev + ". " + yay + (yay ? "." : "") + ozg;
        html = esc(yz) + " (" + esc(yil) + "). <i>" + esc(baslik) + "</i>" + esc(cev) + ". " + esc(yay) + (yay ? "." : "") + esc(ozg);
      } else {
        var drc = el["a-derece"].value, un = el["a-univ"].value.trim();
        plain = yz + " (" + yil + "). " + baslik + " [" + drc + (un ? ", " + un : "") + "]. YÖK Ulusal Tez Merkezi.";
        html = esc(yz) + " (" + esc(yil) + "). <i>" + esc(baslik) + "</i> [" + esc(drc) + (un ? ", " + esc(un) : "") + "]. YÖK Ulusal Tez Merkezi.";
      }
      var ici = "";
      if (yazarlar.length) {
        var yilIci = tur === "ceviri" && el["a-ozgun"].value.trim() ? el["a-ozgun"].value.trim() + "/" + yil : yil;
        ici = yazarlar.length === 1 ? "(" + yazarlar[0][0] + ", " + yilIci + ")" : yazarlar.length === 2 ? "(" + yazarlar[0][0] + " ve " + yazarlar[1][0] + ", " + yilIci + ")" : "(" + yazarlar[0][0] + " vd., " + yilIci + ")";
      }
      document.getElementById("a-cikti").innerHTML = html;
      document.getElementById("a-ici").textContent = ici ? "Metin içi: " + ici : "";
      sonPlain = plain; sonIci = ici;
    }
    ids.forEach(function (i) { el[i].addEventListener("input", guncelle); el[i].addEventListener("change", guncelle); });
    document.getElementById("a-kopya").addEventListener("click", function () { if (sonPlain) kopyala(sonPlain); else bildir("Önce alanları doldur"); });
    document.getElementById("a-ici-kopya").addEventListener("click", function () { if (sonIci) kopyala(sonIci); else bildir("Önce yazar ve yıl gir"); });
    guncelle();
  }

  /* ---------- okuma listem ---------- */
  function listemSayfa() {
    var l = listem();
    if (!l.length) return '<h1>Okuma listem</h1><p class="bos">Listen henüz boş. Kavram, kuramcı ya da makale sayfalarındaki ☆ işaretine dokunarak buraya ekleyebilirsin.</p>';
    var kv = [], kr = [], mk = [];
    l.forEach(function (k) {
      if (k.indexOf("k:") === 0 && kavramById[k.slice(2)]) kv.push(kavramById[k.slice(2)]);
      else if (k.indexOf("q:") === 0 && kuramciById[k.slice(2)]) kr.push(kuramciById[k.slice(2)]);
      else if (k.indexOf("m:") === 0 && makaleBul(k.slice(2))) mk.push(makaleBul(k.slice(2)));
    });
    var tumApa = mk.slice().sort(function (a, b) { return a.yazarlar[0][0].localeCompare(b.yazarlar[0][0], "tr"); }).map(function (m) { return apaKaynak(m, false); }).join("\n\n");
    return '<h1>Okuma listem</h1><p class="soluk">Bu liste yalnızca bu cihazda saklanır.</p>' +
      (kv.length ? '<div class="bolum"><h2>Kavramlar</h2>' + kv.map(kavramKart).join("") + "</div>" : "") +
      (kr.length ? '<div class="bolum"><h2>Kuramcılar</h2>' + kr.map(kuramciKart).join("") + "</div>" : "") +
      (mk.length ? '<div class="bolum"><h2>Makaleler</h2><button class="dugme ana" id="tum-kopya" style="margin-bottom:12px">Tüm makaleleri kaynakça olarak kopyala</button>' + mk.map(makaleKart).join("") + "</div>" : "") +
      '<textarea id="tum-apa" hidden>' + esc(tumApa) + "</textarea>";
  }
  function listemBagla() {
    var b = document.getElementById("tum-kopya");
    if (b) b.addEventListener("click", function () { kopyala(document.getElementById("tum-apa").value); });
  }

  function hakkindaSayfa() {
    return '<h1>Hakkında</h1>' +
      "<p>Sosyoloji Cebimde, sosyoloji öğrencileri ve araştırmacılar için hazırlanmış ücretsiz bir öğrenme ve başvuru uygulamasıdır.</p>" +
      '<div class="kart"><div class="soluk kucuk">Geliştiren</div><b style="font-family:var(--serif);font-size:1.15rem">Ali Eren Demir</b>' +
      '<div class="dugme-sira"><a class="dugme" href="https://github.com/alierendemir/sosyoloji" target="_blank" rel="noopener">GitHub ↗</a><button class="dugme" id="paylas">Uygulamayı paylaş</button></div></div>' +
      '<div class="bolum"><h2>İçerik</h2><ul class="duz">' +
      "<li>" + KV.length + " kavram için tanım, örnek ve makalede kullanım önerisi</li>" +
      "<li>" + KR.length + " kuramcı için temel fikirler, eserler ve tez önerileri</li>" +
      "<li>" + MK.length + " Türkçe makale (künyeler DergiPark üzerindeki makale sayfalarından doğrulanmıştır)</li>" +
      "<li>Kısa testler, dört sosyoloji oyunu, tez yazım rehberi ve APA atıf oluşturucu</li></ul></div>" +
      '<div class="bolum"><h2>Gizlilik</h2><p>Uygulama hiçbir kişisel veri toplamaz, hesap istemez ve reklam içermez. Okuma listen ve test sonucun yalnızca cihazındaki tarayıcı belleğinde tutulur ve hiçbir sunucuya gönderilmez. Makale bağlantılarına dokunduğunda ilgili dergi sayfası tarayıcında açılır.</p>' +
      '<p><a href="gizlilik.html">Gizlilik politikasının tamamı</a></p></div>' +
      '<div class="bolum"><h2>Kaynaklar hakkında not</h2><p>Kuramcıların eserlerinde özgün ad ve ilk yayın yılı verilmiştir. Türkçe baskılar için yayınevi ve yıl bilgisi baskıya göre değiştiğinden kaynakçana elindeki baskının künyesini yazman önerilir. Makale özetleri makalelerin kendi özetlerine dayanarak hazırlanmış kısa tanıtımlardır.</p></div>' +
      '<div class="bolum"><h2>Görünüm</h2><div class="dugme-sira"><button class="dugme" data-tema="">Sistem</button><button class="dugme" data-tema="light">Açık</button><button class="dugme" data-tema="dark">Koyu</button></div></div>' +
      '<p class="alt-not">Sürüm 1.3 · © 2026 Ali Eren Demir</p>';
  }
  function hakkindaBagla() {
    var pd = document.getElementById("paylas");
    if (pd) pd.addEventListener("click", function () {
      var veri = { title: "Sosyoloji Cebimde", text: "Sosyoloji kavramları, kuramcılar, Türkçe makaleler ve oyunlar. Ücretsiz ve reklamsız.", url: "https://alierendemir.github.io/sosyoloji/" };
      if (navigator.share) navigator.share(veri).catch(function () {});
      else kopyala(veri.url);
    });
    document.querySelectorAll("[data-tema]").forEach(function (b) {
      b.addEventListener("click", function () { var t = b.getAttribute("data-tema"); temaUygula(t); yaz("tema", t); bildir("Görünüm güncellendi"); });
    });
  }
  function temaUygula(t) { if (t) document.documentElement.setAttribute("data-theme", t); else document.documentElement.removeAttribute("data-theme"); }

  var AYLAR = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
  function haftaYazi(t) { var p = String(t).split("-"); return +p[2] + " " + AYLAR[+p[1] - 1] + " " + p[0] + " haftası"; }
  function son(dizi) { return dizi && dizi.length ? dizi[dizi.length - 1] : null; }
  function kitapApa(k) {
    return apaYazarlar(k.yazarlar) + " (" + k.yil + "). " + k.ad + (k.cevirmen ? " (Ç. " + k.cevirmen + ")" : "") + ". " + k.yayinevi + "." + (k.ozgunYil ? " (Özgün eserin yayın tarihi " + k.ozgunYil + ")" : "");
  }
  function kitapKart(k, buyuk) {
    var yz = k.yazarlar.map(function (y) { return y[1] + " " + y[0]; }).join(" ve ");
    return '<div class="kart"><div class="soluk kucuk">Haftanın kitabı · ' + esc(haftaYazi(k.hafta)) + '</div><h3 style="margin-top:4px">' + esc(k.ad) + "</h3>" +
      '<div class="soluk kucuk">' + esc(yz) + (k.cevirmen ? " · Çeviren: " + esc(k.cevirmen) : "") + " · " + esc(k.yayinevi) + ", " + esc(k.yil) + "</div>" +
      (buyuk ? '<p style="margin-top:10px">' + esc(k.neden) + "</p>" + (k.kimlere ? '<p class="kucuk"><b>Kimlere:</b> ' + esc(k.kimlere) + "</p>" : "") +
        '<p class="soluk kucuk">Özgün eser: ' + esc(k.ozgun) + (k.isbn ? " · ISBN " + esc(k.isbn) : "") + "</p>" +
        '<div class="dugme-sira"><button class="dugme" data-kitap-kopya="' + esc(k.hafta) + '">APA kaynakça</button>' +
        (k.kuramci && kuramciById[k.kuramci] ? '<a class="dugme" href="#/kuramci/' + k.kuramci + '">Kuramcı sayfası</a>' : "") +
        (k.kaynak ? '<a class="dugme" href="' + esc(k.kaynak.url) + '" target="_blank" rel="noopener">Kitap değerlendirmesi ↗</a>' : "") + "</div>" +
        (k.kaynak ? '<p class="soluk kucuk" style="margin-top:8px">Künye kaynağı: ' + esc(k.kaynak.ad) + "</p>" : "")
        : '<p class="kucuk" style="margin:8px 0 0">' + esc(k.neden) + "</p>") + "</div>";
  }
  function haftaninMakalesiBlok(h, buyuk) {
    var m = makaleBul(h.url); if (!m) return "";
    return '<div class="soluk kucuk" style="margin-bottom:6px">Haftanın makalesi · ' + esc(haftaYazi(h.hafta)) + "</div>" + makaleKart(m) +
      (buyuk ? '<div class="alinti">' + esc(h.neden) + "</div>" +
        (h.kavramlar && h.kavramlar.length ? '<p class="kucuk"><b>İlgili kavramlar:</b></p>' + kavramEtiketleri(h.kavramlar) : "") +
        (h.sorular && h.sorular.length ? '<p class="kucuk" style="margin-top:10px"><b>Okurken düşünmek için:</b></p><ol class="duz kucuk">' + h.sorular.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ol>" : "") : "");
  }
  function ilKart(il) {
    return '<a class="kart kart-link" href="#/il/' + il.id + '"><div class="soluk kucuk">' + esc(il.plaka) + " · İllerin tarihsel sosyolojisi</div><h3 style=\"margin-top:4px\">" + esc(il.ad) + '</h3><p class="kucuk" style="margin:0">' + esc(il.ozet) + "</p></a>";
  }
  function buHaftaBlok() {
    var m = son(HF.makaleler), k = son(HF.kitaplar), il = son(HF.iller);
    if (!m && !k && !il) return "";
    var mk = m ? makaleBul(m.url) : null;
    return '<div class="bolum"><h2>Bu hafta</h2>' +
      (mk ? '<a class="kart kart-link" href="#/haftalik"><div class="soluk kucuk">📄 Haftanın makalesi</div><h3 style="margin-top:4px">' + esc(mk.baslik) + '</h3><div class="soluk kucuk">' + esc(mk.yazarlar.map(function (y) { return y[1] + " " + y[0]; }).join(", ")) + " · " + esc(mk.dergi) + ", " + mk.yil + "</div></a>" : "") +
      (k ? '<a class="kart kart-link" href="#/haftalik"><div class="soluk kucuk">📚 Haftanın kitabı</div><h3 style="margin-top:4px">' + esc(k.ad) + '</h3><div class="soluk kucuk">' + esc(k.yazarlar.map(function (y) { return y[1] + " " + y[0]; }).join(" ve ")) + "</div></a>" : "") +
      (il ? '<a class="kart kart-link" href="#/il/' + il.id + '"><div class="soluk kucuk">🗺️ İllerin tarihsel sosyolojisi · ' + esc(il.plaka) + '</div><h3 style="margin-top:4px">' + esc(il.ad) + '</h3><p class="kucuk" style="margin:0">' + esc(il.ozet.split(/(?<=\.)\s/)[0]) + "</p></a>" : "") +
      '<a class="kucuk" href="#/haftalik">Önceki haftalar →</a></div>';
  }
  function haftalikSayfa() {
    var m = HF.makaleler.slice().reverse(), k = HF.kitaplar.slice().reverse();
    return "<h1>Haftalık</h1><p class=\"soluk\">Her hafta bir makale, bir kitap ve bir il. Yeni içerik her pazartesi eklenir.</p>" +
      '<div class="bolum"><h2>Haftanın makalesi</h2>' + (m.length ? haftaninMakalesiBlok(m[0], true) + m.slice(1).map(function (h) { return haftaninMakalesiBlok(h, false); }).join("") : '<p class="soluk">Henüz eklenmedi.</p>') + "</div>" +
      '<div class="bolum"><h2>Haftanın kitabı</h2>' + (k.length ? kitapKart(k[0], true) + k.slice(1).map(function (x) { return kitapKart(x, false); }).join("") : '<p class="soluk">Henüz eklenmedi.</p>') + "</div>" +
      '<div class="bolum"><h2>İllerin tarihsel sosyolojisi</h2><p class="soluk kucuk">81 ilden ' + HF.iller.length + ' tanesi yazıldı. İller plaka sırasıyla ekleniyor.</p>' + HF.iller.slice().reverse().map(ilKart).join("") + "</div>";
  }
  function ilSayfa(id) {
    var il = null; HF.iller.forEach(function (x) { if (x.id === id) il = x; });
    if (!il) return bulunamadi();
    var kaynak = MK.filter(function (m) { return m.il === il.id; });
    return '<a class="geri" href="#/haftalik">← Haftalık</a><div class="soluk kucuk">' + esc(il.plaka) + " · İllerin tarihsel sosyolojisi · " + esc(haftaYazi(il.hafta)) + "</div><h1>" + esc(il.ad) + "</h1>" +
      '<p class="alinti">' + esc(il.ozet) + "</p>" +
      il.bolumler.map(function (b) { return '<div class="bolum"><h2>' + esc(b.baslik) + "</h2><p>" + esc(b.metin) + "</p></div>"; }).join("") +
      (il.kavramlar && il.kavramlar.length ? '<div class="bolum"><h2>İlgili kavramlar</h2>' + kavramEtiketleri(il.kavramlar) + "</div>" : "") +
      (kaynak.length ? '<div class="bolum"><h2>Kaynaklar</h2>' + kaynak.map(makaleKart).join("") + "</div>" : "");
  }

  function oyunlarSayfa() {
    var oyunlar = window.OYUN_LISTESI || [];
    var enIyiTest = oku("test-en-iyi", null);
    return '<h1>Oyunlar</h1><p class="soluk">Sosyolojiyi oynayarak öğren. Skorların yalnızca bu cihazda saklanır.</p>' +
      '<a class="kart kart-link oyun-kart" href="#/test"><span class="oyun-simge" aria-hidden="true">✅</span><span><h3>Kısa Test</h3><span class="soluk kucuk">Kavramlar, kuramcılar ve eserler üzerine 10 soru.' + (enIyiTest !== null ? " En iyi: " + enIyiTest + " / 10" : "") + '</span></span></a>' +
      oyunlar.map(function (o) {
        var en = oku("oyun-" + o.id, null);
        return '<a class="kart kart-link oyun-kart" href="#/oyun/' + o.id + '"><span class="oyun-simge" aria-hidden="true">' + o.simge + '</span><span><h3>' + esc(o.ad) + '</h3><span class="soluk kucuk">' + esc(o.aciklama) + (en !== null ? " En iyi: " + en + (o.id === "hafiza" ? " hamle" : "") : "") + "</span></span></a>";
      }).join("");
  }

  function bulunamadi() { return '<p class="bos">Aradığın sayfa bulunamadı. <a href="#/">Ana sayfaya dön</a></p>'; }

  /* ---------- yönlendirici ---------- */
  function yonlendir() {
    var h = location.hash.replace(/^#\/?/, "");
    var p = h.split("/");
    var menu = "ana", html = "", bagla = null;
    switch (p[0]) {
      case "": html = anaSayfa(); bagla = anaSayfaBagla; break;
      case "kavramlar": menu = "kavram"; html = kavramlarSayfa(); bagla = kavramlarBagla; break;
      case "kavram": menu = "kavram"; html = kavramSayfa(decodeURIComponent(p[1] || "")); break;
      case "kuramcilar": menu = "kuramci"; html = kuramcilarSayfa(); bagla = kuramcilarBagla; break;
      case "kuramci": menu = "kuramci"; html = kuramciSayfa(decodeURIComponent(p[1] || "")); break;
      case "makaleler": menu = "ana"; html = makalelerSayfa(); bagla = makalelerBagla; break;
      case "test": menu = "oyun"; html = testSayfa(); bagla = testBagla; break;
      case "oyunlar": menu = "oyun"; html = oyunlarSayfa(); break;
      case "haftalik": menu = "ana"; html = haftalikSayfa(); break;
      case "il": menu = "ana"; html = ilSayfa(decodeURIComponent(p[1] || "")); break;
      case "oyun": menu = "oyun"; html = ""; bagla = function () { if (window.OYUN_BASLAT) window.OYUN_BASLAT(decodeURIComponent(p[1] || "")); }; break;
      case "tez": menu = "tez"; html = tezSayfa(); bagla = tezBagla; break;
      case "listem": menu = ""; html = listemSayfa(); bagla = listemBagla; break;
      case "hakkinda": menu = ""; html = hakkindaSayfa(); bagla = hakkindaBagla; break;
      default: html = bulunamadi();
    }
    $icerik.innerHTML = html;
    if (bagla) bagla();
    document.querySelectorAll(".alt-menu a").forEach(function (a) { a.classList.toggle("aktif", a.getAttribute("data-menu") === menu); });
    window.scrollTo(0, 0);
  }

  /* olay yetkilendirme: yıldız ve kopyala düğmeleri */
  document.addEventListener("click", function (e) {
    var y = e.target.closest("[data-liste]");
    if (y) {
      var eklendi = listeDegistir(y.getAttribute("data-liste"));
      y.textContent = eklendi ? "★" : "☆"; y.setAttribute("aria-pressed", String(eklendi));
      return;
    }
    var kk = e.target.closest("[data-kitap-kopya]");
    if (kk) {
      HF.kitaplar.forEach(function (x) { if (x.hafta === kk.getAttribute("data-kitap-kopya")) kopyala(kitapApa(x)); });
      return;
    }
    var k = e.target.closest("[data-kopya]");
    if (k) {
      var m = makaleBul(k.getAttribute("data-url")); if (!m) return;
      kopyala(k.getAttribute("data-kopya") === "apa" ? apaKaynak(m, false) : metinIci(m));
    }
  });

  window.SC = { esc: esc, karistir: karistir, oku: oku, yaz: yaz, bildir: bildir, KR: KR, KV: KV, kuramciById: kuramciById, kavramById: kavramById };

  temaUygula(oku("tema", ""));
  window.addEventListener("hashchange", yonlendir);
  yonlendir();

  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    var oncekiDenetleyici = !!navigator.serviceWorker.controller, yenilendi = false;
    navigator.serviceWorker.addEventListener("controllerchange", function () {
      if (oncekiDenetleyici && !yenilendi) { yenilendi = true; location.reload(); }
    });
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js", { updateViaCache: "none" }).then(function (k) { k.update(); }).catch(function () { /* çevrimdışı önbellek kullanılamıyor */ });
    });
  }
})();
