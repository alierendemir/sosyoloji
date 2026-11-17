/*
  "Tezine Ekle" bölümünün içerikleri.
  Atıf örnekleri APA 7 biçimine göre hazırlanmıştır. Üniversitenin ya da derginin
  yazım kılavuzu farklı bir biçim istiyorsa o kılavuz esas alınmalıdır.
*/
window.REHBER = [
  {
    id: "kuramsal-cerceve", baslik: "Kuramsal çerçeve nasıl kurulur?",
    icerik: [
      { t: "p", m: "Kuramsal çerçeve araştırma sorunu ile kullandığın kavramlar arasında köprü kurar. Okuyucuya olguyu hangi gözlükle incelediğini gösterir." },
      { t: "ol", m: [
        "Araştırma sorunu netleştir. Ne sorduğunu tek cümleyle yazabiliyorsan kuram seçmek kolaylaşır.",
        "Sorunla doğrudan ilişkili bir ya da iki ana kuramcı seç. Çok sayıda kuramcıyı yüzeysel biçimde anmak yerine birkaç kavramı derinlemesine kullanmak genellikle daha güçlü bir metin ortaya çıkarır.",
        "Kullanacağın kavramları kuramcının kendi eserinden tanımla. Türkçe çeviri kullanıyorsan çeviri künyesini kaynakçaya ekle.",
        "Kavramı Türkçe literatürde kullanan çalışmaları tara. Bu uygulamadaki makale önerileri bunun için bir başlangıç noktası olabilir.",
        "Kavramın senin sahanda nasıl gözlemlenebileceğini açıkla. Bu adıma kavramsallaştırma ya da işlevselleştirme denir.",
        "Kurama yöneltilen eleştirileri ve kendi çalışmanın sınırlılıklarını kısaca tartış."
      ] },
      { t: "ipucu", m: "Kuramsal bölümün kendi araştırmana bağlı kalması için her paragrafın sonunda o kavramın senin araştırma sorunla ilişkisini bir cümleyle hatırlatmak bölümü canlı tutar." }
    ]
  },
  {
    id: "kavram-kullanimi", baslik: "Bir kavramı metne taşımak",
    icerik: [
      { t: "p", m: "Bir kavramı makaleye taşırken şu dört adımlı yapıyı kullanabilirsin:" },
      { t: "ol", m: [
        "Tanım: Kavramı ilk kez kullanan kuramcının tanımını ver ve kaynak göster.",
        "Yorum: Kavramın Türkçe literatürde nasıl ele alındığını bir iki çalışma üzerinden aktar.",
        "Uyarlama: Kavramı kendi araştırma alanına nasıl uyarladığını açıkla.",
        "Bağlantı: Bulgular bölümünde kavrama geri dön ve verinin kavramı nasıl desteklediğini ya da sorguladığını göster."
      ] },
      { t: "ornek", m: "Örnek paragraf: Bourdieu'ya göre habitus, bireyin toplumsal koşullarının onda bıraktığı kalıcı eğilimler sistemidir (Bourdieu, 1979/2015). Türkçe literatürde kavram çoğunlukla sermaye ve alan kavramlarıyla birlikte ele alınmaktadır (Palabıyık, 2011). Bu çalışmada habitus, üniversiteye yeni başlayan birinci kuşak öğrencilerin kampüs yaşamına uyum süreçlerini anlamak için kullanılmaktadır." },
      { t: "ipucu", m: "Örnekteki (Bourdieu, 1979/2015) gösterimi çeviri bir eserde özgün yayın yılı ile kullandığın çevirinin yılını birlikte verir. Buradaki 2015 yalnızca biçimi göstermek için yazılmıştır. Kendi metninde elindeki çevirinin gerçek yılını kullan." }
    ]
  },
  {
    id: "apa-metin-ici", baslik: "APA 7 metin içi atıf",
    icerik: [
      { t: "tablo", m: [
        ["Durum", "Biçim"],
        ["Tek yazar", "(Palabıyık, 2011) ya da Palabıyık (2011)"],
        ["Doğrudan alıntı", "(Palabıyık, 2011, s. 5)"],
        ["İki yazar", "(Kaplan ve Yardımcıoğlu, 2020)"],
        ["Üç ve daha fazla yazar", "(Soyadı vd., Yıl)"],
        ["Çeviri eser", "(Weber, 1905/Çeviri yılı)"],
        ["Aynı parantezde birden fazla kaynak", "(Can, 2004; Taş, 2020) yazar soyadına göre alfabetik sırayla"],
        ["İkincil kaynak", "(Mead, 1934, akt. Kınağ, 2017)"]
      ] },
      { t: "p", m: "APA 7 aynı parantez içindeki farklı kaynakları noktalı virgülle ayırmayı ister. Türkçe yazım kılavuzlarının bir bölümü bu konuda farklı öneriler sunabilir. Enstitünün tez yazım kılavuzunu kontrol etmen önerilir." },
      { t: "ipucu", m: "İkincil kaynak (akt.) kullanımını az tutmaya çalış. Özgün metne ulaşabiliyorsan doğrudan ona atıf yapmak akademik açıdan daha güçlü kabul edilir." }
    ]
  },
  {
    id: "apa-kaynakca", baslik: "APA 7 kaynakça biçimleri",
    icerik: [
      { t: "p", m: "Aşağıdaki kalıplar genel biçimi gösterir. Köşeli parantez içindeki bölümleri kendi kaynağının bilgileriyle doldur." },
      { t: "kalip", b: "Dergi makalesi", m: "Soyadı, A. A. (Yıl). Makalenin başlığı. Derginin Adı, Cilt(Sayı), ilk sayfa–son sayfa. https://doi.org/xxxx" },
      { t: "kalip", b: "Kitap", m: "Soyadı, A. (Yıl). Kitabın adı. Yayınevi." },
      { t: "kalip", b: "Çeviri kitap", m: "Soyadı, A. (Çeviri yılı). Kitabın Türkçe adı (Ç. Çevirmenin Adı Soyadı). Yayınevi. (Özgün eserin yayın tarihi Yıl)" },
      { t: "kalip", b: "Derleme kitapta bölüm", m: "Soyadı, A. (Yıl). Bölümün adı. E. Editör (Ed.), Kitabın adı içinde (ss. xx–xx). Yayınevi." },
      { t: "kalip", b: "Yüksek lisans ya da doktora tezi", m: "Soyadı, A. (Yıl). Tezin adı [Yüksek lisans tezi, Üniversite Adı]. YÖK Ulusal Tez Merkezi." },
      { t: "ipucu", m: "Bu uygulamadaki her makalenin altında \"APA kaynakça\" düğmesi bulunur. Düğmeye bastığında künye panoya kopyalanır ve doğrudan kaynakçana yapıştırabilirsin." }
    ]
  },
  {
    id: "kaynak-bulma", baslik: "Türkçe kaynak nerede aranır?",
    icerik: [
      { t: "liste", m: [
        { ad: "DergiPark", url: "https://dergipark.org.tr", not: "Türkiye'deki akademik dergilerin büyük bölümünü barındıran ücretsiz platform." },
        { ad: "YÖK Ulusal Tez Merkezi", url: "https://tez.yok.gov.tr", not: "Türkiye'deki üniversitelerde yazılmış yüksek lisans ve doktora tezleri." },
        { ad: "TR Dizin", url: "https://trdizin.gov.tr", not: "TÜBİTAK ULAKBİM tarafından yürütülen ulusal atıf dizini." },
        { ad: "Google Akademik", url: "https://scholar.google.com", not: "Türkçe ve yabancı dildeki çalışmaları birlikte taramak ve atıf sayılarını görmek için kullanılabilir." }
      ] },
      { t: "ipucu", m: "Arama yaparken kavramın Türkçe karşılıklarını birlikte dene. Örneğin \"yapılaşma\" ile \"yapılanma\" ya da \"sosyolojik imgelem\" ile \"sosyolojik tahayyül\" farklı çalışmalarda farklı biçimlerde kullanılmaktadır." }
    ]
  },
  {
    id: "etik", baslik: "Alıntı ve akademik dürüstlük",
    icerik: [
      { t: "ol", m: [
        "Okumadığın bir kaynağa atıf yapma. Bir makalenin kaynakçasında gördüğün bir esere ulaşamadıysan \"akt.\" kullan.",
        "Her künyeyi kaynağın kendi sayfasından kontrol et. Yazar adı, yıl, cilt ve sayfa bilgileri ikincil listelerde hatalı olabilir.",
        "Doğrudan alıntıları tırnak içinde ver ve sayfa numarasını ekle. Kırk kelimeden uzun alıntıları blok alıntı olarak yaz.",
        "Başka bir yazarın düşüncesini kendi cümlelerinle aktarırken de kaynak göster.",
        "Yapay zekâ araçlarından yararlandıysan kurumunun bu konudaki kurallarını kontrol et ve kaynak olarak gösterilemeyecek bilgileri özgün kaynaktan doğrula."
      ] }
    ]
  }
];
