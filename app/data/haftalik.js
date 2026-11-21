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
    },
    {
      hafta: "2026-11-23",
      url: "https://dergipark.org.tr/tr/pub/msydergi/article/1524939",
      neden: "Türkiye kırsalının son yıllarda nasıl değiştiğini merak edenler için güncel ve düşündürücü bir çalışma. Makale köylülük üzerine alışılmış yaklaşımları sorguluyor ve mevsimlik gezici tarım işçileri gibi kırın yeni aktörlerini anlamak için \"kırsal gettolar\" kavramını öneriyor. Bu haftanın il yazısı Adıyaman ile birlikte okunduğunda tarımdaki dönüşümün göç ve emek üzerindeki etkisini somut olarak görmek mümkün.",
      kavramlar: ["yabancilasma", "sinif-bilinci", "merkez-cevre"],
      sorular: [
        "\"Kırsal getto\" kavramı köy ve kent arasındaki geleneksel ayrımı nasıl değiştiriyor?",
        "Mevsimlik tarım işçiliği Marx'ın yabancılaşma kavramıyla nasıl okunabilir?",
        "Kendi bölgende tarımdaki dönüşümün izlerini nerelerde görüyorsun?"
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
    },
    {
      hafta: "2026-11-23",
      kuramci: "goffman",
      yazarlar: [["Goffman", "Erving"]],
      ad: "Günlük Yaşamda Benliğin Sunumu",
      ozgun: "The Presentation of Self in Everyday Life (1956)",
      ozgunYil: "1956",
      cevirmen: "Barış Cezar",
      yayinevi: "Metis Yayınları",
      yil: "2021",
      isbn: "978-975-342-698-5",
      neden: "Gündelik etkileşimleri bir tiyatro sahnesi gibi okuyan bu klasik eser, insanların başkalarının gözünde nasıl bir izlenim bırakmaya çalıştığını sade örneklerle anlatıyor. Sosyal medyada kimlik, iş yerinde rol performansı ya da hizmet sektörü üzerine çalışanlar için doğrudan kullanılabilecek kavramlar sunuyor.",
      kimlere: "Sosyolojiye yeni başlayanlar, nitel araştırma yapanlar, medya ve iletişim öğrencileri",
      kaynak: { ad: "Esra Yılmaz, \"Erving Goffman: Günlük Yaşamda Benliğin Sunumu\" (kitap incelemesi). Künye incelemenin ilk sayfasından alındı. Kitabın farklı yıllarda Metis'ten çıkmış başka baskıları da var, kaynakçana elindeki baskıyı yaz.", url: "https://dergipark.org.tr/tr/download/article-file/3042107" }
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
    },
    {
      id: "adiyaman", ad: "Adıyaman", plaka: "02", hafta: "2026-11-23",
      ozet: "Eski adı Hısn-ı Mansur olan Adıyaman, Doğan'ın (2012) aktardığı gibi pek çok devletin egemenliğinden geçmiş eski bir yerleşim yeridir. 19. yüzyılda küçük bir Osmanlı kazası olan kent 1954'te il oldu. Yakın dönemde tütün tarımındaki daralma, göç ve tekstil sanayisi Adıyaman'ın toplumsal yapısını yeniden biçimlendirdi.",
      bolumler: [
        { baslik: "Hısn-ı Mansur: Kavşakta bir kent",
          metin: "Doğan (2012) Adıyaman'ın eski adının Hısn-ı Mansur olduğunu belirtir ve bölgenin tarih boyunca Hititler, Kommagene, Roma, Bizans, Emeviler, Abbasiler, Selçuklular, Artuklular, Eyyübiler, Memlükler, Dulkadiroğulları ve Osmanlılar gibi pek çok siyasi gücün egemenliğinden geçtiğini aktarır. Bu uzun ve katmanlı geçmiş kentin kültürel yapısının tek bir dönemle açıklanamayacağını düşündürür." },
        { baslik: "1835 nüfus sayımı ve kentin ekonomik hayatı",
          metin: "Toprak (2016) Yeniçeri Ocağı'nın kaldırılmasından sonra yeni ordunun asker ve gelir ihtiyacını belirlemek için yapılan nüfus sayımlarının Hısnımansur'da 1835'te uygulandığını anlatır. Bu kayıtlara göre kent nüfusunun yaklaşık beşte birini gayrimüslim cemaat oluşturuyordu ve bu cemaatin mensupları kentte icra edilen iş ve meslek kollarının yaklaşık beşte ikisini ellerinde tutuyordu. Çalışma, nüfusun küçük bir bölümünün kentin zanaat ve ticaret hayatında belirgin bir yer tutabildiğini gösteriyor." },
        { baslik: "Kazadan vilayete",
          metin: "Gündüz (2019) Adıyaman'ın 1954'te Demokrat Parti döneminde kazadan vilayete dönüştürülme sürecini Meclis tutanakları ve dönemin basını üzerinden inceler. Bu kararın sosyoekonomik, coğrafi ve siyasi gerekçeleri iktidar ile muhalefet arasında tartışma yarattı. Sürecin en çok tartışılan konusu Besni'nin Adıyaman'a bağlanmasıydı. Gündüz'ün aktardığına göre Besnililerin çoğu Gaziantep'e bağlanmayı istiyordu. Muhalefet bu düzenlemenin siyasi amaçlı olduğunu ileri sürerken iktidar sosyoekonomik nedenleri öne çıkardı." },
        { baslik: "Tütünden tekstile: göç ve kentleşme",
          metin: "Kaya (2018) Adıyaman'ın uzun yıllar boyunca tarıma, özellikle de tütün ekimine dayalı bir ekonomiye sahip olduğunu belirtir. Tekel döneminde topraksız ve az topraklı köylüler yarıcılık ve ortakçılık yoluyla tütünden geçimini sağlayabiliyordu. Tütün ekimine kota getirilmesi ve Tekel fabrikalarının kapatılması on binlerce üreticiyi kent merkezine ve büyük şehirlere göçe yöneltti. GAP kapsamında bazı toprakların ve yerleşim yerlerinin baraj suları altında kalması da iç göçü artırdı. Kaya'nın aktardığı verilere göre Adıyaman kent merkezinin nüfusu 1980'de 53.219 iken 1990'da 101.576'ya, 2012'de 217.789'a yükseldi. Bu dönüşümün ardından tekstil kentin sanayisinde öne çıktı ve sektörde kadın emeği ağırlık kazandı. Kaya'nın 350 tekstil işçisiyle yaptığı araştırma, kadın işçilerin ücret ve çalışma saatleri bakımından dezavantajlı bir konumda olduğunu gösteriyor." },
        { baslik: "Sosyolojik bir okuma",
          metin: "Adıyaman'ın yakın tarihi farklı kavramlarla okunabilir. Kazanın il yapılması ve Besni tartışması, idari kararların yerel aidiyetlerle nasıl karşılaştığını gösteren bir merkez-çevre örneği olarak ele alınabilir. Tütün üreticiliğinden fabrika işçiliğine geçiş, Marx'ın yabancılaşma kavramı ve emeğin dönüşümü üzerine tartışmalar için zengin bir alan sunar. Kırdan kente göçle büyüyen çevre mahalleler, Tönnies'in cemaat-cemiyet ayrımı açısından tartışılabilir. Tekstil sektöründe kadın emeğinin yoğunlaşması ise toplumsal cinsiyet ve çalışma sosyolojisinin kesiştiği bir konu olarak öne çıkıyor. Bu haftanın makalesi olan Güler'in (2025) \"kırsal gettolar\" tartışması da Adıyaman'daki tarımsal dönüşümü düşünmek için yararlı bir çerçeve sağlıyor." },
        { baslik: "Bu yazının kapsamı",
          metin: "Bu yazı Adıyaman'ın tarihsel sosyolojisini 19. yüzyıldaki kent ekonomisi, il oluş süreci ve yakın dönemdeki tarımsal dönüşüm ile göç ekseninde ele alıyor. Bölgenin aşiret yapısı, Kürt ve Türkmen toplulukların tarihi, Hristiyan cemaatlerin sonraki dönemlerdeki durumu, Milli Mücadele yılları ve Nemrut Dağı çevresindeki arkeolojik miras ayrıca incelenmeyi hak eden konulardır. Bu başlıklar için DergiPark'ta ve YÖK Ulusal Tez Merkezi'nde \"Adıyaman\", \"Hısn-ı Mansur\", \"Besni\" ve \"Kâhta\" anahtar kelimeleriyle tarama yapabilirsin." }
      ],
      kavramlar: ["merkez-cevre", "yabancilasma", "cemaat-cemiyet", "sinif-bilinci"]
    }
  ]
};
