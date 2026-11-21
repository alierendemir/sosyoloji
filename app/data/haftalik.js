/*
  Haftalık içerik: haftanın makalesi, haftanın kitabı ve illerin tarihsel sosyolojisi.
  Her hafta en yeni kayıt dizinin SONUNA eklenir. Ana sayfa son kaydı gösterir.
  "hafta" alanı o haftanın pazartesi tarihidir (YYYY-AA-GG).

  Kaynak kuralları:
  - Haftanın makalesi app/data/makaleler.js içinde de bulunmalıdır (url ile eşleşir).
  - Kitap künyesi (çevirmen, yayınevi, yıl, ISBN) yalnızca doğrulanabilen bir kaynaktan
    yazılır. "kaynak" alanında künyenin doğrulandığı sayfa verilir.
  - İl yazılarında yalnızca künyesi doğrulanmış kaynaklara dayanan bilgiler yer alır.
    Kaynaklar makaleler.js içinde "il" alanıyla işaretlenir.
*/
window.HAFTALIK = {
  makaleler: [
    {
      hafta: "2026-11-16",
      url: "https://dergipark.org.tr/tr/pub/troyacademy/article/1830598",
      neden: "Şerif Mardin'in merkez-çevre kuramı Türkiye'yi anlamaya çalışan tezlerde en sık başvurulan çerçevelerden biridir. Bu makale kuramı yeni orta sınıf tartışmasıyla birlikte yeniden okuyor ve merkez ile çevre arasında kalan toplumsal katmanların bu ikili şema içinde nereye yerleştirilebileceğini soruyor.",
      kavramlar: ["merkez-cevre", "sinif-bilinci", "kulturel-sermaye"],
      sorular: [
        "Merkez-çevre ayrımı bugünün Türkiye'sinde hâlâ açıklayıcı bir çerçeve sunuyor mu?",
        "Beyaz yakalılar ve hizmet sektörü çalışanları merkeze mi çevreye mi daha yakın konumlanıyor?",
        "Yeni orta sınıfın tüketim alışkanlıkları Bourdieu'nun kültürel sermaye kavramıyla nasıl okunabilir?"
      ]
    }
  ],

  kitaplar: [
    {
      hafta: "2026-11-16",
      kuramci: "berger",
      yazarlar: [["Berger", "Peter L."], ["Luckmann", "Thomas"]],
      ad: "Gerçekliğin Sosyal İnşası: Bir Bilgi Sosyolojisi İncelemesi",
      ozgun: "The Social Construction of Reality: A Treatise in the Sociology of Knowledge (1966)",
      ozgunYil: "1966",
      cevirmen: "Vefa Saygın Öğütle",
      yayinevi: "Paradigma Yayıncılık",
      yil: "2008",
      isbn: "9789757819448",
      neden: "Gündelik hayatta \"doğal\" görünen kabullerin nasıl oluştuğunu, kurumların nasıl ortaya çıktığını ve bireyin bu dünyayı nasıl içselleştirdiğini anlatan klasik bir eserdir. Nitel araştırma yapan, kimlik, aile ya da din üzerine çalışan herkes için sağlam bir kuramsal temel sunar.",
      kimlere: "Lisans ve yüksek lisans öğrencileri, nitel araştırmacılar, bilgi sosyolojisine ilgi duyanlar",
      kaynak: { ad: "Nişancı (2024), 4. BOYUT Medya ve Kültürel Çalışmalar Dergisi, 24, 157–162 (kitap değerlendirmesi)", url: "https://dergipark.org.tr/tr/pub/dortboyut/issue/85942/1470973" }
    }
  ],

  /* 81 il plaka sırasıyla eklenir. */
  iller: [
    {
      id: "adana", ad: "Adana", plaka: "01", hafta: "2026-11-16",
      ozet: "Çukurova'nın verimli ovası yüzyıllar boyunca konar-göçer Türkmen boylarının kışlağı oldu. 1865'teki Fırka-i Islahiye ile bu boylar yerleşik hayata geçirildi ve aynı dönemde Amerikan İç Savaşı'nın etkisiyle pamuk, Adana'yı dünya ekonomisine bağlayan ürün hâline geldi. Kentin tarihsel sosyolojisi göçebelikten yerleşikliğe, aşiretten tarım toplumuna ve pamuk üzerinden modern kente uzanan bir dönüşüm öyküsü olarak okunabilir.",
      bolumler: [
        { baslik: "Ova ve konar-göçerler",
          metin: "Çukurova, kışları ılık geçen geniş ovasıyla Toros dağlarından inen konar-göçer toplulukların kışlak olarak kullandığı bir bölgeydi. Sansar'ın (2013) aktardığına göre Dulkadir Türkmenlerine bağlı Cerid ve Tecirli aşiretleri 16. yüzyılın sonlarından itibaren Çukurova'da kışlamaya başlamıştı. Yazın yaylaya, kışın ovaya uzanan bu döngü bölgenin toplumsal yapısını uzun süre belirledi." },
        { baslik: "Türkmen boyları ve beylikler",
          metin: "Demirbağ (2023) Varsak Türkmenlerini bölgenin Türkleşmesinin öncüleri arasında sayar ve onların Karamanoğulları, Memlûkler, Ramazanoğulları, Dulkadiroğulları ve Osmanlılarla kurduğu ilişkileri inceler. Çukurova Osmanlı hâkimiyetine girdikten sonra vergisini veren reaya hâline gelen Varsaklar, Celali isyanlarıyla bozulan asayiş ortamında Toros dağlarına çekilmiş ve bu süreçte Kozanoğulları beyliği ortaya çıkmıştı." },
        { baslik: "Ayanlar, derebeyler ve Fırka-i Islahiye",
          metin: "Kütük (2022) 17. ve 18. yüzyıldaki uzun savaşların ve Celali isyanlarının Osmanlı'nın idari, mali ve toplumsal düzenini sarstığını, Çukurova'da da eski Türkmen ailelerinin yerini kendi iktidarını kuran ayan ve derebeylerin aldığını anlatır. Devletin önceki iskân girişimleri istenen sonucu vermedi. 1865'te gönderilen Fırka-i Islahiye adlı reform ordusu bölgeyi Kozanoğulları, Menemencioğulları gibi yerel güçlerin denetiminden aldı ve Türkmen aşiretlerini zorla da olsa yerleşik hayata geçirdi. Yeni kasabalar ve köyler kuruldu. Sansar (2013) bu süreçte Cerid ve Tecirlilerin yaylaya çıkmalarının yasaklandığını ve çiftçiliğe yönlendirildiklerini belirtir." },
        { baslik: "Pamuk ve dünya ekonomisi",
          metin: "Yaktı (2013) 1861'de başlayan Amerikan İç Savaşı'nın dünya pamuk arzını daralttığını ve İngiliz tekstil sanayisini yeni üretim bölgeleri aramaya yönelttiğini anlatır. Bu gelişmeyle Adana hem hammadde sağlanan hem de yatırım yapılan bir bölgeye dönüştü. 20. yüzyılın başına dek süren bu süreçte kent Güney Anadolu'nun iktisadi merkezlerinden biri hâline geldi ve pamuk ekonomisi kentleşmeden gündelik yaşama kadar pek çok alanı etkiledi." },
        { baslik: "Sosyolojik bir okuma",
          metin: "Adana'nın 19. yüzyıldaki dönüşümü farklı kavramlarla okunabilir. Fırka-i Islahiye ile merkezî devletin yerel ayan ve derebeyleri tasfiye etmesi, Şerif Mardin'in merkez-çevre gerilimine somut bir örnek sunar. Konar-göçer boyların yerleşik tarıma geçmesi, İbn Haldun'un bedevi yaşamdan hadari yaşama geçiş ve asabiyetin dönüşümü üzerine düşünceleriyle tartışılabilir. Vergi, askerlik ve kayıt düzeninin bölgeye yerleşmesi Weber'in rasyonelleşme kavramıyla ilişkilendirilebilir. Demirbağ'ın saha araştırmasında yerleşik hâle gelen aşiretlerin çoğunun Varsak kimliğini unuttuğunu belirtmesi ise toplumsal bellek ve kimlik çalışmaları için düşündürücü bir bulgudur. Pamuk üzerinden dünya pazarına bağlanma süreci de yerel bir ekonominin küresel iş bölümüne eklemlenmesinin tipik bir örneği olarak incelenebilir." },
        { baslik: "Bu yazının kapsamı",
          metin: "Bu yazı Adana'nın tarihsel sosyolojisini kırsal iskân ve pamuk ekonomisi ekseninde ele alıyor. Kentin 19. ve 20. yüzyıllardaki çok dinli ve çok dilli nüfus yapısı, Cumhuriyet dönemi sanayileşmesi, tarım işçiliği ve iç göç dalgaları ayrıca incelenmeyi hak eden konulardır. Bu başlıklar için kaynak ararken DergiPark ve YÖK Ulusal Tez Merkezi'nde \"Adana\" ve \"Çukurova\" anahtar kelimeleriyle tarama yapabilirsin." }
      ],
      kavramlar: ["merkez-cevre", "asabiyet", "rasyonellesme", "cemaat-cemiyet"]
    }
  ]
};
