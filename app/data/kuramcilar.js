/*
  Kuramcılar verisi.
  "eserler" alanında özgün ad ve ilk yayın yılı verilir. "tr" alanı eserin Türkçeye
  çevrildiği bilinen adıdır. Yayınevi ve baskı yılı baskıdan baskıya değiştiği için
  burada yazılmamıştır. Kaynakçaya yazarken elindeki baskının künyesini kullan.
*/
window.KURAMCILAR = [
  {
    id: "comte", ad: "Auguste Comte", yillar: "1798–1857", ulke: "Fransa", ekol: "Pozitivizm",
    ozet: "Sosyoloji adını ilk kullanan düşünür olarak bilinir. Toplumu doğa bilimlerine benzer bir yöntemle inceleyebilecek bir bilim tasarlamış, insan düşüncesinin tarih içinde aşamalardan geçtiğini öne sürmüştür.",
    fikirler: [
      "İnsan düşüncesi teolojik, metafizik ve pozitif olmak üzere üç aşamadan geçer.",
      "Sosyoloji toplumsal statik (düzen) ve toplumsal dinamik (ilerleme) olarak iki alana ayrılır.",
      "Gözlem, deney, karşılaştırma ve tarihsel yöntem toplum biliminin temel araçlarıdır.",
      "Geç döneminde toplumsal bütünleşmeyi sağlayacak bir \"İnsanlık Dini\" tasarlamıştır."
    ],
    kavramlar: ["uc-hal", "pozitivizm"],
    eserler: [
      { orijinal: "Cours de philosophie positive", yil: "1830–1842", tr: "" },
      { orijinal: "Système de politique positive", yil: "1851–1854", tr: "" }
    ],
    tezde: "Comte'u daha çok sosyolojinin doğuşunu ve pozitivist bilim anlayışını tartışan giriş bölümlerinde kullanabilirsin. Yöntem bölümünde nicel yaklaşımın tarihsel kökenine değinirken ya da Türk modernleşmesinde pozitivizmin etkisini anlatırken iyi bir başlangıç noktası olur."
  },
  {
    id: "marx", ad: "Karl Marx", yillar: "1818–1883", ulke: "Almanya", ekol: "Çatışma kuramı / Tarihsel materyalizm",
    ozet: "Toplumu üretim ilişkileri ve sınıflar arasındaki çatışma üzerinden açıklar. Kapitalizmin işleyişine dair çözümlemesi sosyoloji, ekonomi ve siyaset bilimini derinden etkilemiştir.",
    fikirler: [
      "Toplumsal yaşamın temelinde maddi üretim ve üretim ilişkileri bulunur.",
      "Tarih, sınıflar arasındaki mücadelenin tarihi olarak okunabilir.",
      "Kapitalist üretimde emekçi, ürettiği nesneye, üretim sürecine, kendi türsel özüne ve diğer insanlara yabancılaşır.",
      "Meta biçimi, insanlar arasındaki ilişkileri şeyler arasındaki ilişkiler gibi gösterir."
    ],
    kavramlar: ["yabancilasma", "sinif-bilinci", "meta-fetisizmi", "altyapi-ustyapi"],
    eserler: [
      { orijinal: "Ökonomisch-philosophische Manuskripte (1844 Elyazmaları)", yil: "1844 (yazılış), 1932 (yayın)", tr: "1844 Elyazmaları" },
      { orijinal: "Manifest der Kommunistischen Partei (Engels ile)", yil: "1848", tr: "Komünist Manifesto" },
      { orijinal: "Das Kapital, Cilt 1", yil: "1867", tr: "Kapital" }
    ],
    tezde: "Emek, çalışma koşulları, tüketim, kentsel eşitsizlik ya da dijital platform emeği gibi konularda yabancılaşma ve sınıf kavramları güçlü bir çerçeve sunar. Kavramı kullanırken Marx'ın kendi tanımını verip ardından alandaki gözlemlerinle ilişkilendirmen tezini daha tutarlı kılar."
  },
  {
    id: "tonnies", ad: "Ferdinand Tönnies", yillar: "1855–1936", ulke: "Almanya", ekol: "Klasik Alman sosyolojisi",
    ozet: "Toplumsal ilişkileri cemaat (Gemeinschaft) ve cemiyet (Gesellschaft) olarak iki ideal biçime ayırmıştır. Bu ayrım geleneksel topluluklardan modern topluma geçişi anlatmak için yaygın biçimde kullanılır.",
    fikirler: [
      "Cemaat, yakınlık, akrabalık, gelenek ve duygusal bağlara dayanan topluluk biçimidir.",
      "Cemiyet, sözleşmeye, çıkara ve kişisel olmayan ilişkilere dayanan toplum biçimidir.",
      "Modernleşme ve kentleşme ile birlikte cemiyet tipi ilişkiler yaygınlaşır."
    ],
    kavramlar: ["cemaat-cemiyet"],
    eserler: [
      { orijinal: "Gemeinschaft und Gesellschaft", yil: "1887", tr: "Cemaat ve Cemiyet" }
    ],
    tezde: "Göç, kentleşme, mahalle kültürü, çevrim içi topluluklar ya da dini cemaatler üzerine çalışıyorsan bu ayrım kuramsal çerçevenin başlangıç noktası olabilir. Tönnies'in kavramlarını ideal tipler olarak sunman ve sahadaki ilişkilerin çoğu zaman iki biçimin karışımı olduğunu göstermen önerilir."
  },
  {
    id: "durkheim", ad: "Émile Durkheim", yillar: "1858–1917", ulke: "Fransa", ekol: "İşlevselcilik / Fransız sosyoloji okulu",
    ozet: "Sosyolojiyi bağımsız bir akademik disiplin olarak kuran isimlerden biridir. Toplumsal olguların bireylerden bağımsız bir gerçekliği olduğunu savunmuş, dayanışma, din ve intihar üzerine klasikleşmiş çalışmalar yapmıştır.",
    fikirler: [
      "Toplumsal olgular şeyler gibi incelenmelidir ve birey üzerinde dışsal bir baskı uygular.",
      "Geleneksel toplumlarda mekanik dayanışma, modern toplumlarda işbölümüne dayanan organik dayanışma görülür.",
      "Hızlı toplumsal değişim dönemlerinde normların zayıflaması anomiye yol açar.",
      "İntihar oranları bireysel olduğu kadar toplumsal bütünleşme ve düzenlemenin düzeyiyle de ilişkilidir.",
      "Din, kutsal ile dindışı arasındaki ayrım etrafında topluluğu bir araya getiren bir sistemdir."
    ],
    kavramlar: ["toplumsal-olgu", "mekanik-organik", "anomi", "kolektif-bilinc"],
    eserler: [
      { orijinal: "De la division du travail social", yil: "1893", tr: "Toplumsal İşbölümü" },
      { orijinal: "Les règles de la méthode sociologique", yil: "1895", tr: "Sosyolojik Yöntemin Kuralları" },
      { orijinal: "Le suicide", yil: "1897", tr: "İntihar" },
      { orijinal: "Les formes élémentaires de la vie religieuse", yil: "1912", tr: "Dinî Hayatın İlkel Biçimleri" }
    ],
    tezde: "Toplumsal değişim, gençlik, suç, intihar, dijital kültür ya da göç çalışmalarında anomi kavramı sıkça kullanılır. Ziya Gökalp üzerinden Türk sosyolojisine etkisi de güçlü olduğundan Türkiye bağlamındaki tezlerde Durkheim'ı Gökalp ile birlikte ele almak verimli olabilir."
  },
  {
    id: "simmel", ad: "Georg Simmel", yillar: "1858–1918", ulke: "Almanya", ekol: "Biçimsel sosyoloji",
    ozet: "Toplumsal etkileşimin biçimlerine odaklanmıştır. Kent yaşamı, para ekonomisi, moda ve yabancı gibi konulardaki denemeleri modern deneyimi anlamak için hâlâ sıkça okunur.",
    fikirler: [
      "Toplum, bireyler arasındaki karşılıklı etkileşimlerin toplamı olarak düşünülebilir.",
      "Büyük kentte uyaranların yoğunluğu bireyde mesafeli ve kayıtsız bir tutum (blasé) üretir.",
      "Para ekonomisi ilişkileri nicelleştirir ve kişisel olmayan bir hâle getirir.",
      "Yabancı, gruba hem yakın hem uzak duran özgün bir toplumsal konumdur."
    ],
    kavramlar: ["blase", "yabanci"],
    eserler: [
      { orijinal: "Philosophie des Geldes", yil: "1900", tr: "" },
      { orijinal: "Die Großstädte und das Geistesleben", yil: "1903", tr: "" },
      { orijinal: "Soziologie", yil: "1908", tr: "" }
    ],
    tezde: "Kent sosyolojisi, tüketim, moda, sosyal medya ve göçmenlik çalışmalarında Simmel'in denemeleri kısa ve etkili bir kuramsal dayanak sağlar. Türkçe çevirileri farklı derlemelerde yer aldığından alıntı yaparken kullandığın derlemenin künyesini dikkatle yazman gerekir."
  },
  {
    id: "weber", ad: "Max Weber", yillar: "1864–1920", ulke: "Almanya", ekol: "Anlayıcı sosyoloji",
    ozet: "Toplumsal eylemin öznel anlamını anlamayı sosyolojinin merkezine koymuştur. Modern dünyanın rasyonelleşmesi, bürokrasi, otorite tipleri ve din ile ekonomi ilişkisi üzerine yaptığı çalışmalar klasikleşmiştir.",
    fikirler: [
      "Sosyoloji, toplumsal eylemi yorumlayarak anlamaya (Verstehen) çalışır.",
      "İdeal tip, gerçekliği karşılaştırmak için kurulan analitik bir modeldir.",
      "Protestan ahlakı ile kapitalizmin ruhu arasında seçici bir yakınlık vardır.",
      "Meşru otorite geleneksel, karizmatik ve yasal-ussal olmak üzere üç tipte görülür.",
      "Modern yaşamın rasyonelleşmesi bireyi bir \"demir kafes\" içine sıkıştırabilir."
    ],
    kavramlar: ["ideal-tip", "rasyonellesme", "otorite-tipleri", "verstehen"],
    eserler: [
      { orijinal: "Die protestantische Ethik und der Geist des Kapitalismus", yil: "1904–1905", tr: "Protestan Ahlakı ve Kapitalizmin Ruhu" },
      { orijinal: "Wirtschaft und Gesellschaft", yil: "1922", tr: "Ekonomi ve Toplum" }
    ],
    tezde: "Kurumlar, kamu yönetimi, din, iş dünyası ve liderlik konularında Weber'in kavramları tezin analitik omurgasını oluşturabilir. İdeal tip kavramını yöntem bölümünde, araştırdığın olguyu karşılaştıracağın bir model kurmak için de kullanabilirsin."
  },
  {
    id: "mead", ad: "George Herbert Mead", yillar: "1863–1931", ulke: "ABD", ekol: "Sembolik etkileşimcilik / Pragmatizm",
    ozet: "Benliğin toplumsal etkileşim içinde oluştuğunu savunmuştur. Sembolik etkileşimcilik geleneğinin kurucu figürü kabul edilir.",
    fikirler: [
      "Benlik başkalarıyla kurulan iletişim içinde zamanla gelişir.",
      "Benliğin iki yönü vardır: kendiliğinden tepki veren \"ben\" (I) ve toplumun beklentilerini içselleştiren \"beni\" (me).",
      "Çocuk oyun ve takım oyunu aşamalarında başkalarının rolünü almayı öğrenir.",
      "Genelleştirilmiş öteki, topluluğun ortak tutumlarının birey tarafından içselleştirilmesidir."
    ],
    kavramlar: ["genellestirilmis-oteki", "ben-beni"],
    eserler: [
      { orijinal: "Mind, Self, and Society", yil: "1934 (ölümünden sonra)", tr: "Zihin, Benlik ve Toplum" }
    ],
    tezde: "Kimlik, sosyalleşme, çocukluk, eğitim ve dijital benlik çalışmalarında Mead'in kavramları mikro düzeydeki çözümlemeye sağlam bir zemin hazırlar. Nitel görüşmelerden elde ettiğin anlatıları \"ben\" ve \"beni\" ayrımıyla okumak bulgularına kuramsal derinlik katabilir."
  },
  {
    id: "gramsci", ad: "Antonio Gramsci", yillar: "1891–1937", ulke: "İtalya", ekol: "Neo-Marksizm",
    ozet: "İktidarın zor kadar rıza üretimiyle de korunduğunu gösteren hegemonya kavramıyla tanınır. Notlarının büyük bölümünü hapishanede yazmıştır.",
    fikirler: [
      "Hegemonya, egemen grubun dünya görüşünün toplumun geneline doğal ve sağduyulu görünecek biçimde yayılmasıdır.",
      "Sivil toplum kurumları (okul, medya, din kurumları) rızanın üretildiği alanlardır.",
      "Organik aydınlar belirli bir toplumsal sınıfla birlikte ortaya çıkar ve onun dünya görüşünü dile getirir.",
      "Karşı-hegemonya, alternatif bir kültürel ve siyasal blok kurma çabasıdır."
    ],
    kavramlar: ["hegemonya", "organik-aydin"],
    eserler: [
      { orijinal: "Quaderni del carcere", yil: "1929–1935 (yazılış)", tr: "Hapishane Defterleri" }
    ],
    tezde: "Medya, eğitim, popüler kültür, aydın tartışmaları ve siyasal söylem üzerine çalışmalarda hegemonya kavramı yaygın biçimde kullanılır. Kavramı kullanırken rıza üretiminin somut olarak hangi kurumlar ve pratikler üzerinden işlediğini göstermen çözümlemeni güçlendirir."
  },
  {
    id: "parsons", ad: "Talcott Parsons", yillar: "1902–1979", ulke: "ABD", ekol: "Yapısal işlevselcilik",
    ozet: "Toplumu birbirine bağlı alt sistemlerden oluşan bir bütün olarak ele almıştır. 20. yüzyılın ortasında Amerikan sosyolojisinin en etkili kuramcılarından biri olmuştur.",
    fikirler: [
      "Her toplumsal sistem varlığını sürdürebilmek için dört işlevsel gereksinimi karşılamalıdır (AGIL).",
      "Değerler ve normlar toplumsal düzenin temel dayanaklarıdır.",
      "Sosyalleşme, bireyin toplumsal rolleri içselleştirmesini sağlar.",
      "Hasta rolü gibi kavramlarla sağlık sosyolojisine de katkı sunmuştur."
    ],
    kavramlar: ["agil"],
    eserler: [
      { orijinal: "The Structure of Social Action", yil: "1937", tr: "" },
      { orijinal: "The Social System", yil: "1951", tr: "" }
    ],
    tezde: "Kurumların işleyişini, eğitim ya da sağlık sistemlerini çözümlerken AGIL şeması düzenli bir analiz çerçevesi sunar. Parsons'a yöneltilen eleştirileri (çatışmayı ve değişimi ihmal etmesi gibi) tezinde tartışman kuramsal bölümü dengeli kılar."
  },
  {
    id: "elias", ad: "Norbert Elias", yillar: "1897–1990", ulke: "Almanya / İngiltere", ekol: "Figürasyonel sosyoloji",
    ozet: "Uzun dönemli toplumsal süreçlerle bireysel davranış ve duygular arasındaki ilişkiyi incelemiştir. Görgü kuralları, öz denetim ve devletleşme arasında bağ kuran çözümlemeleriyle tanınır.",
    fikirler: [
      "Birey ve toplum karşılıklı bağımlılık ağları (figürasyonlar) içinde birlikte oluşur.",
      "Orta Çağ'dan modern döneme davranış kuralları incelmiş, dışsal denetim yerini öz denetime bırakmıştır.",
      "Şiddet tekelinin devlette toplanması uygarlaşma süreciyle bağlantılıdır."
    ],
    kavramlar: ["uygarlasma-sureci"],
    eserler: [
      { orijinal: "Über den Prozess der Zivilisation", yil: "1939", tr: "Uygarlık Süreci" }
    ],
    tezde: "Beden, duygular, görgü, spor, şiddet ve gündelik yaşam üzerine çalışmalarda Elias tarihsel derinliği olan bir çerçeve sunar. Figürasyon kavramı, araştırdığın grubu ilişkiler ağı olarak tarif etmek için yöntemsel bir araç olarak da kullanılabilir."
  },
  {
    id: "merton", ad: "Robert K. Merton", yillar: "1910–2003", ulke: "ABD", ekol: "İşlevselcilik / Orta ölçekli kuramlar",
    ozet: "İşlevselciliği daha esnek ve sınanabilir bir hâle getirmeye çalışmıştır. Orta ölçekli kuramlar, açık ve gizil işlevler, kendini gerçekleştiren kehanet ve anomi-gerilim kuramı gibi kavramlarla tanınır.",
    fikirler: [
      "Sosyoloji büyük ve her şeyi açıklayan kuramlar yerine sınanabilir orta ölçekli kuramlar geliştirmelidir.",
      "Toplumsal pratiklerin bilinen ve amaçlanan (açık) işlevleri ile fark edilmeyen (gizil) işlevleri vardır.",
      "Kültürel hedefler ile bu hedeflere ulaşmanın meşru araçları arasındaki uyumsuzluk sapmaya yol açabilir.",
      "Bir duruma ilişkin yanlış bir tanım, insanların davranışlarını değiştirerek kendini doğrulayabilir."
    ],
    kavramlar: ["acik-gizil-islev", "anomi"],
    eserler: [
      { orijinal: "Social Theory and Social Structure", yil: "1949", tr: "" }
    ],
    tezde: "Suç, sapma, gençlik, eğitimde başarı ve kurumların istenmeyen sonuçları gibi konularda Merton'un kavramları doğrudan uygulanabilir. Açık ve gizil işlev ayrımı, bulgularında beklenmedik sonuçları yorumlamak için de işe yarar."
  },
  {
    id: "mills", ad: "C. Wright Mills", yillar: "1916–1962", ulke: "ABD", ekol: "Eleştirel sosyoloji",
    ozet: "Bireysel sorunlarla toplumsal yapılar arasında bağ kurmayı sosyolojinin temel görevi olarak görmüştür. Amerikan toplumundaki güç yapısını eleştiren çalışmalarıyla tanınır.",
    fikirler: [
      "Sosyolojik imgelem, kişisel sıkıntıları toplumsal ve tarihsel yapılarla ilişkilendirebilme yeteneğidir.",
      "Kişisel dertler (troubles) ile kamusal sorunlar (issues) arasında ayrım yapılmalıdır.",
      "Ekonomik, siyasal ve askeri seçkinler birbirine bağlı bir güç seçkinleri grubu oluşturur."
    ],
    kavramlar: ["sosyolojik-imgelem"],
    eserler: [
      { orijinal: "The Power Elite", yil: "1956", tr: "İktidar Seçkinleri" },
      { orijinal: "The Sociological Imagination", yil: "1959", tr: "Sosyolojik Tahayyül" }
    ],
    tezde: "Giriş bölümünde araştırma sorunun neden toplumsal bir sorun olduğunu gerekçelendirirken Mills'in sosyolojik imgelem kavramı çok işlevseldir. İşsizlik, borçluluk, boşanma gibi bireysel görünen deneyimleri yapısal koşullarla ilişkilendirmek için kullanılabilir."
  },
  {
    id: "goffman", ad: "Erving Goffman", yillar: "1922–1982", ulke: "Kanada / ABD", ekol: "Sembolik etkileşimcilik / Dramaturji",
    ozet: "Gündelik etkileşimleri bir tiyatro sahnesi benzetmesiyle incelemiştir. Benlik sunumu, damga ve kapalı kurumlar üzerine çalışmaları mikro sosyolojinin temel kaynakları arasındadır.",
    fikirler: [
      "İnsanlar etkileşimde başkalarının kendileri hakkındaki izlenimlerini yönetmeye çalışır.",
      "Toplumsal yaşamda ön bölge (sahne) ve arka bölge (kulis) davranışları birbirinden farklıdır.",
      "Damga, kişinin toplumsal kabulünü zedeleyen ve kimliğini örseleyen bir özelliktir.",
      "Hapishane, akıl hastanesi gibi total kurumlar bireyin benliğini yeniden biçimlendirir."
    ],
    kavramlar: ["dramaturji", "damga"],
    eserler: [
      { orijinal: "The Presentation of Self in Everyday Life", yil: "1956 / 1959", tr: "Günlük Yaşamda Benliğin Sunumu" },
      { orijinal: "Asylums", yil: "1961", tr: "" },
      { orijinal: "Stigma", yil: "1963", tr: "Damga" }
    ],
    tezde: "Sosyal medyada kimlik, iş yerinde rol performansı, engellilik, hastalık ve mahremiyet çalışmalarında Goffman'ın kavramları gözlem ve görüşme verilerini yorumlamak için çok elverişlidir. Saha notlarında ön ve arka bölge ayrımını sistematik biçimde kodlamak çözümlemeni derinleştirebilir."
  },
  {
    id: "berger", ad: "Peter L. Berger ve Thomas Luckmann", yillar: "1929–2017 / 1927–2016", ulke: "ABD / Almanya", ekol: "Bilgi sosyolojisi / Sosyal inşacılık",
    ozet: "Toplumsal gerçekliğin insanlar tarafından nasıl üretildiğini, nesnelleştiğini ve yeniden içselleştirildiğini açıklayan bir bilgi sosyolojisi geliştirmişlerdir.",
    fikirler: [
      "Toplum insan ürünüdür, toplum nesnel bir gerçekliktir ve insan toplumsal bir üründür.",
      "Dışsallaşma, nesneleşme ve içselleştirme toplumsal gerçekliğin oluşumundaki üç anı ifade eder.",
      "Kurumlar, alışkanlık hâline gelmiş eylemlerin karşılıklı tipleştirilmesiyle ortaya çıkar.",
      "Meşrulaştırma, kurumsal düzenin anlamlı ve haklı görünmesini sağlar."
    ],
    kavramlar: ["sosyal-insa"],
    eserler: [
      { orijinal: "The Social Construction of Reality", yil: "1966", tr: "Gerçekliğin Sosyal İnşası" }
    ],
    tezde: "Kimlik, gündelik bilgi, din, aile ve meslek kültürü gibi konularda sosyal inşacı bir çerçeve kurmak istiyorsan Berger ve Luckmann temel başvuru kaynağıdır. Nitel araştırmalarda katılımcıların anlam dünyasını çözümlerken üç anı ayrımı analiz kategorisi olarak kullanılabilir."
  },
  {
    id: "habermas", ad: "Jürgen Habermas", yillar: "1929–", ulke: "Almanya", ekol: "Eleştirel kuram (Frankfurt Okulu)",
    ozet: "Frankfurt Okulu'nun ikinci kuşağının önde gelen ismidir. Kamusal alan, iletişimsel eylem ve müzakereci demokrasi üzerine geliştirdiği kuramlarla tanınır.",
    fikirler: [
      "Burjuva kamusal alanı, özel bireylerin ortak meseleleri akıl yoluyla tartıştığı bir alan olarak ortaya çıkmıştır.",
      "İletişimsel eylem, karşılıklı anlaşmaya yönelen ve baskıdan arınmış bir iletişimi ifade eder.",
      "Sistem (para ve iktidar) yaşam dünyasını sömürgeleştirme eğilimindedir.",
      "Demokratik meşruiyet açık ve kapsayıcı müzakere süreçlerine dayanır."
    ],
    kavramlar: ["kamusal-alan", "iletisimsel-eylem"],
    eserler: [
      { orijinal: "Strukturwandel der Öffentlichkeit", yil: "1962", tr: "Kamusallığın Yapısal Dönüşümü" },
      { orijinal: "Theorie des kommunikativen Handelns", yil: "1981", tr: "İletişimsel Eylem Kuramı" }
    ],
    tezde: "Sosyal medya, gazetecilik, sivil toplum, siyasal katılım ve kentsel kamusal mekânlar üzerine çalışmalarda Habermas'ın kamusal alan kavramı sıkça başvurulan bir çerçevedir. Kavrama yöneltilen feminist ve çoğulcu eleştirileri de tartışman çalışmanı zenginleştirir."
  },
  {
    id: "foucault", ad: "Michel Foucault", yillar: "1926–1984", ulke: "Fransa", ekol: "Post-yapısalcılık",
    ozet: "İktidarın bilgi, söylem ve kurumlar aracılığıyla bedenler ve nüfuslar üzerinde nasıl işlediğini incelemiştir. Hapishane, klinik, delilik ve cinsellik üzerine tarihsel çalışmaları sosyal bilimlerde çok geniş bir etki yaratmıştır.",
    fikirler: [
      "İktidar ilişkiler ağı içinde dağınık biçimde işler.",
      "Disiplin iktidarı gözetim, normalleştirme ve sınav gibi tekniklerle uysal bedenler üretir.",
      "Biyoiktidar, doğum, ölüm, sağlık gibi süreçleri düzenleyerek nüfusu yönetir.",
      "Bilgi ve iktidar birbirinden ayrılamaz biçimde iç içedir.",
      "Söylem, hakkında konuştuğu nesneleri biçimlendiren bir pratiktir."
    ],
    kavramlar: ["disiplin", "biyoiktidar", "panoptikon", "soylem"],
    eserler: [
      { orijinal: "Histoire de la folie à l'âge classique", yil: "1961", tr: "Deliliğin Tarihi" },
      { orijinal: "Naissance de la clinique", yil: "1963", tr: "Kliniğin Doğuşu" },
      { orijinal: "Surveiller et punir", yil: "1975", tr: "Hapishanenin Doğuşu" },
      { orijinal: "Histoire de la sexualité, Cilt 1", yil: "1976", tr: "Cinselliğin Tarihi" }
    ],
    tezde: "Sağlık, eğitim, beden, gözetim teknolojileri, hapishane ve kamu politikaları çalışmalarında Foucault'nun kavramları yaygın olarak kullanılır. Söylem çözümlemesi yapacaksan yöntem bölümünde Foucaultcu söylem anlayışını açıkça tanımlaman önerilir."
  },
  {
    id: "bourdieu", ad: "Pierre Bourdieu", yillar: "1930–2002", ulke: "Fransa", ekol: "Yapısalcı inşacılık / Düşünümsel sosyoloji",
    ozet: "Toplumsal eşitsizliklerin kültür, eğitim ve beğeniler aracılığıyla nasıl yeniden üretildiğini incelemiştir. Habitus, sermaye ve alan kavramları sosyolojide en çok kullanılan kavramsal araçlar arasındadır.",
    fikirler: [
      "Habitus, toplumsal koşulların bireyde bıraktığı kalıcı eğilimler sistemidir.",
      "Ekonomik sermayenin yanında kültürel, sosyal ve sembolik sermaye de toplumsal konumu belirler.",
      "Toplumsal dünya, kendi kuralları ve mücadeleleri olan alanlardan oluşur.",
      "Beğeniler sınıfsal ayrımları görünür kılar ve yeniden üretir.",
      "Sembolik şiddet, tahakkümün doğal ve meşru görünmesini sağlar."
    ],
    kavramlar: ["habitus", "kulturel-sermaye", "sosyal-sermaye", "alan", "sembolik-siddet"],
    eserler: [
      { orijinal: "La distinction", yil: "1979", tr: "Ayrım: Beğeni Yargısının Toplumsal Eleştirisi" },
      { orijinal: "Réponses (Wacquant ile)", yil: "1992", tr: "Düşünümsel Bir Antropoloji İçin Cevaplar" },
      { orijinal: "Raisons pratiques", yil: "1994", tr: "Pratik Nedenler" },
      { orijinal: "La domination masculine", yil: "1998", tr: "Eril Tahakküm" }
    ],
    tezde: "Eğitim eşitsizliği, tüketim, beğeni, meslekler, sanat ve kent çalışmalarında Bourdieu'nun kavram üçlüsü birlikte kullanıldığında güçlü bir çözümleme sağlar. Kavramları tek tek kullanmak yerine habitus, sermaye ve alan arasındaki ilişkiyi göstermen Bourdieu'nun kuramına daha sadık bir okuma sunar."
  },
  {
    id: "baudrillard", ad: "Jean Baudrillard", yillar: "1929–2007", ulke: "Fransa", ekol: "Postmodern kuram",
    ozet: "Tüketim toplumu, göstergeler ve medya üzerine yaptığı çözümlemelerle tanınır. Simülasyon ve hipergerçeklik kavramlarıyla gerçeklik ile temsil arasındaki ilişkiyi sorgulamıştır.",
    fikirler: [
      "Tüketim nesneleri işlevlerinden çok taşıdıkları göstergeler ve toplumsal anlamlar nedeniyle tüketilir.",
      "Simülakrlar, bir aslı olmayan kopyalardır.",
      "Hipergerçeklikte temsiller gerçeğin yerini alır ve ondan daha gerçek görünür.",
      "Medya, olayları aktarmanın ötesinde gerçekliği biçimlendirir."
    ],
    kavramlar: ["simulasyon"],
    eserler: [
      { orijinal: "La société de consommation", yil: "1970", tr: "Tüketim Toplumu" },
      { orijinal: "Simulacres et simulation", yil: "1981", tr: "Simülakrlar ve Simülasyon" }
    ],
    tezde: "Sosyal medya, reklam, marka, turizm ve dijital kimlik çalışmalarında Baudrillard'ın kavramları sıkça kullanılır. Kuramın soyut düzeyi yüksek olduğu için kavramları somut örnekler ve veriyle desteklemen okuyucunun argümanını izlemesini kolaylaştırır."
  },
  {
    id: "giddens", ad: "Anthony Giddens", yillar: "1938–", ulke: "İngiltere", ekol: "Yapılaşma kuramı",
    ozet: "Yapı ile eylem arasındaki ikiliği aşmayı amaçlayan yapılaşma kuramını geliştirmiştir. Modernlik, küreselleşme, mahremiyet ve kimlik üzerine geniş bir literatür üretmiştir.",
    fikirler: [
      "Yapı, eylemin hem aracı hem de sonucudur (yapının ikiliği).",
      "Modernlikte zaman ve mekân birbirinden ayrışır, toplumsal ilişkiler yerel bağlamlarından koparılır.",
      "Geç modern toplumlarda birey kimliğini düşünümsel bir proje olarak sürekli yeniden kurar.",
      "Uzman sistemlere ve soyut sistemlere duyulan güven modern yaşamın temel dayanaklarından biridir."
    ],
    kavramlar: ["yapilasma", "dusunumsellik"],
    eserler: [
      { orijinal: "The Constitution of Society", yil: "1984", tr: "Toplumun Kuruluşu" },
      { orijinal: "The Consequences of Modernity", yil: "1990", tr: "Modernliğin Sonuçları" },
      { orijinal: "Modernity and Self-Identity", yil: "1991", tr: "Modernlik ve Bireysel Kimlik" },
      { orijinal: "The Transformation of Intimacy", yil: "1992", tr: "Mahremiyetin Dönüşümü" }
    ],
    tezde: "Aile, mahremiyet, kimlik, risk ve küreselleşme konularında Giddens hem kuramsal hem de güncel bir çerçeve sunar. Yapı-eylem ilişkisini tartışan bir tezde yapılaşma kuramını Bourdieu'nun habitus kavramıyla karşılaştırmak çalışmana özgün bir katkı katabilir."
  },
  {
    id: "beck", ad: "Ulrich Beck", yillar: "1944–2015", ulke: "Almanya", ekol: "Düşünümsel modernleşme",
    ozet: "Modern toplumun ürettiği risklerin toplumsal yaşamı yeniden biçimlendirdiğini savunan risk toplumu kuramıyla tanınır. Bireyselleşme ve kozmopolitleşme üzerine de çalışmıştır.",
    fikirler: [
      "Sanayi toplumunda zenginliğin dağıtımı tartışılırken risk toplumunda risklerin dağıtımı merkezî bir sorun hâline gelir.",
      "Çevre felaketleri, nükleer tehlikeler ve küresel salgınlar gibi riskler ulusal sınırları aşar.",
      "Modernleşme kendi ürettiği sorunlarla yüzleşerek düşünümsel bir nitelik kazanır.",
      "Geleneksel bağların çözülmesiyle birey kendi yaşam öyküsünü kurmak zorunda kalır."
    ],
    kavramlar: ["risk-toplumu", "dusunumsellik"],
    eserler: [
      { orijinal: "Risikogesellschaft", yil: "1986", tr: "Risk Toplumu: Başka Bir Modernliğe Doğru" }
    ],
    tezde: "Afet, iklim değişikliği, salgın, gıda güvenliği ve teknoloji riskleri üzerine çalışmalarda risk toplumu kuramı doğrudan uygulanabilir. Türkiye'de deprem gibi afetlerin toplumsal boyutunu inceleyen tezler için özellikle elverişli bir çerçevedir."
  },
  {
    id: "bauman", ad: "Zygmunt Bauman", yillar: "1925–2017", ulke: "Polonya / İngiltere", ekol: "Modernite eleştirisi",
    ozet: "Modernliğin katı evresinden akışkan evresine geçişi anlatan çözümlemeleriyle tanınır. Tüketim, belirsizlik, ilişkiler ve göç üzerine yaygın biçimde okunan kitaplar yazmıştır.",
    fikirler: [
      "Katı modernlik düzen, kalıcılık ve planlamaya dayanırken akışkan modernlik esneklik, belirsizlik ve hızla tanımlanır.",
      "Akışkan modern toplumda bireyler üretici kimliğinden çok tüketici kimliğiyle tanımlanır.",
      "İnsan ilişkileri kırılgan ve geçici bir nitelik kazanır.",
      "Modernliğin düzen arayışı Holokost gibi felaketlerin de koşullarını hazırlamıştır."
    ],
    kavramlar: ["akiskan-modernite"],
    eserler: [
      { orijinal: "Modernity and the Holocaust", yil: "1989", tr: "Modernite ve Holokost" },
      { orijinal: "Liquid Modernity", yil: "2000", tr: "Akışkan Modernite" },
      { orijinal: "The Individualized Society", yil: "2001", tr: "Bireyselleşmiş Toplum" }
    ],
    tezde: "Tüketim kültürü, güvencesiz çalışma, sosyal medya, romantik ilişkiler ve mültecilik çalışmalarında Bauman'ın kavramları geniş bir uygulama alanı bulur. Metaforik dilini kullanırken kavramları kendi verinle somutlaştırman akademik metnin netliğini artırır."
  },
  {
    id: "castells", ad: "Manuel Castells", yillar: "1942–", ulke: "İspanya", ekol: "Enformasyon çağı sosyolojisi",
    ozet: "Bilgi ve iletişim teknolojilerinin toplumsal örgütlenmeyi nasıl dönüştürdüğünü incelemiştir. Ağ toplumu kavramı dijital çağ sosyolojisinin temel çerçevelerinden biridir.",
    fikirler: [
      "Ağ toplumunda temel toplumsal yapılar elektronik iletişim ağları etrafında örgütlenir.",
      "Akışlar mekânı, fiziksel yakınlık gerektirmeyen toplumsal pratiklerin mekânıdır.",
      "İletişim ağları üzerindeki denetim iktidarın kaynaklarından biridir.",
      "Dijital ağlar yeni toplumsal hareketlerin örgütlenme biçimlerini dönüştürmüştür."
    ],
    kavramlar: ["ag-toplumu"],
    eserler: [
      { orijinal: "The Rise of the Network Society", yil: "1996", tr: "Ağ Toplumunun Yükselişi" },
      { orijinal: "The Power of Identity", yil: "1997", tr: "Kimliğin Gücü" },
      { orijinal: "Networks of Outrage and Hope", yil: "2012", tr: "İsyan ve Umut Ağları" }
    ],
    tezde: "Dijital sosyoloji, toplumsal hareketler, uzaktan çalışma ve kent çalışmalarında Castells güncel ve kapsamlı bir çerçeve sunar. Ağ toplumu kavramını Habermas'ın kamusal alan tartışmasıyla birlikte ele almak sık kullanılan ve verimli bir yoldur."
  },
  {
    id: "butler", ad: "Judith Butler", yillar: "1956–", ulke: "ABD", ekol: "Feminist kuram / Queer kuram",
    ozet: "Toplumsal cinsiyetin tekrarlanan edimlerle kurulduğunu savunan performatiflik kuramıyla tanınır. Çalışmaları toplumsal cinsiyet ve kimlik tartışmalarında çok etkili olmuştur.",
    fikirler: [
      "Toplumsal cinsiyet tekrarlanan edimler yoluyla üretilir ve zamanla doğal bir öz gibi görünür.",
      "Normlar bedenleri ve kimlikleri tanınabilir kılan çerçeveler sunar.",
      "Normların tekrarı içinde kayma ve yeniden anlamlandırma olanakları da bulunur.",
      "Hangi yaşamların yas tutulmaya değer görüldüğü siyasal bir sorudur."
    ],
    kavramlar: ["performatiflik"],
    eserler: [
      { orijinal: "Gender Trouble", yil: "1990", tr: "Cinsiyet Belası" }
    ],
    tezde: "Toplumsal cinsiyet, erkeklik çalışmaları, beden, medya temsilleri ve kimlik siyaseti alanlarında performatiflik kavramı güçlü bir çözümleme aracıdır. Film ya da dizi çözümlemelerinde karakterlerin cinsiyet performanslarını sahne sahne izlemek yöntemsel olarak iyi işler."
  },
  {
    id: "ibnhaldun", ad: "İbn Haldun", yillar: "1332–1406", ulke: "Kuzey Afrika (Tunus doğumlu)", ekol: "İlm-i umran",
    ozet: "Toplumsal yaşamı nedensellik ilişkileri içinde incelemeye çalışan ilk düşünürlerden biri kabul edilir. Mukaddime adlı eserinde bedevi ve hadari yaşam, asabiyet ve devletlerin yükseliş ile çöküşünü ele almıştır.",
    fikirler: [
      "Toplumsal olaylar kendi nedenleri ve yasalarıyla incelenebilir (ilm-i umran).",
      "Asabiyet, grubu bir arada tutan dayanışma duygusu ve bağlılıktır.",
      "Bedevi yaşamda güçlü olan asabiyet hadari (kentli) yaşamda zayıflar.",
      "Devletler belirli kuşaklar içinde kuruluş, yükseliş ve çöküş evrelerinden geçer."
    ],
    kavramlar: ["asabiyet"],
    eserler: [
      { orijinal: "Mukaddime", yil: "1377", tr: "Mukaddime" }
    ],
    tezde: "Dayanışma, akrabalık, hemşehrilik ağları ve siyasal örgütlenme üzerine çalışmalarda asabiyet kavramı özgün bir yerli kuramsal dayanak sunar. Asabiyeti sosyal sermaye ya da Durkheim'ın dayanışma kavramlarıyla karşılaştırmak tezine karşılaştırmalı bir derinlik kazandırabilir."
  },
  {
    id: "gokalp", ad: "Ziya Gökalp", yillar: "1876–1924", ulke: "Osmanlı / Türkiye", ekol: "Durkheimcı sosyoloji",
    ozet: "Türkiye'de sosyolojinin kurumsallaşmasında öncü rol oynamıştır. Durkheim'dan etkilenerek geliştirdiği hars ve medeniyet ayrımı Türk modernleşmesi tartışmalarında merkezî bir yer tutar.",
    fikirler: [
      "Hars, bir milletin kendine özgü değerler bütünüdür ve millîdir.",
      "Medeniyet, farklı milletlerin ortak olarak paylaşabileceği yöntem ve bilgiler bütünüdür.",
      "Türk toplumu Türkleşmek, İslamlaşmak ve muasırlaşmak ilkelerini birlikte gerçekleştirmelidir.",
      "Aydınların görevi halka gidip harsı bulmak ve ona medeniyeti götürmektir."
    ],
    kavramlar: ["hars-medeniyet"],
    eserler: [
      { orijinal: "Türkleşmek, İslamlaşmak, Muasırlaşmak", yil: "1918", tr: "Türkleşmek, İslamlaşmak, Muasırlaşmak" },
      { orijinal: "Türkçülüğün Esasları", yil: "1923", tr: "Türkçülüğün Esasları" }
    ],
    tezde: "Türk modernleşmesi, kültür politikaları, millî kimlik ve eğitim tarihi çalışmalarında Gökalp vazgeçilmez bir kaynaktır. Gökalp'in metinlerini Osmanlıca aslından ya da sadeleştirilmiş baskılardan hangisini kullandığını kaynakçada açıkça belirtmen önerilir."
  },
  {
    id: "sabahattin", ad: "Prens Sabahattin", yillar: "1879–1948", ulke: "Osmanlı / Türkiye", ekol: "Le Play okulu (Science Sociale)",
    ozet: "Türk sosyolojisinin öncü isimlerinden biridir. Le Play okulunun yöntemini benimseyerek Osmanlı toplumunun sorunlarını teşebbüs-i şahsi (bireysel girişim) ve adem-i merkeziyet kavramlarıyla açıklamaya çalışmıştır.",
    fikirler: [
      "Toplumlar cemaatçi (toplulukçu) ve bireyci (teşebbüs-i şahsi) olarak iki tipe ayrılabilir.",
      "Osmanlı toplumunun sorunlarının kökeninde bireysel girişimi zayıflatan cemaatçi yapı bulunur.",
      "Yerinden yönetim (adem-i merkeziyet) toplumsal gelişmeyi kolaylaştırır.",
      "Toplum incelemesi ailenin yapısından başlamalıdır."
    ],
    kavramlar: ["tesebbus-i-sahsi"],
    eserler: [
      { orijinal: "Türkiye Nasıl Kurtarılabilir?", yil: "", tr: "Türkiye Nasıl Kurtarılabilir?" }
    ],
    tezde: "Türk sosyoloji tarihi, liberal düşünce, yerel yönetimler ve aile yapısı üzerine çalışmalarda Prens Sabahattin'i Ziya Gökalp ile karşılaştırmalı olarak ele almak yaygın ve verimli bir yaklaşımdır."
  },
  {
    id: "mardin", ad: "Şerif Mardin", yillar: "1927–2017", ulke: "Türkiye", ekol: "Tarihsel sosyoloji / Siyaset sosyolojisi",
    ozet: "Türk modernleşmesini merkez-çevre ilişkisi üzerinden açıklayan çözümlemesiyle tanınır. Din, ideoloji ve Jön Türk düşüncesi üzerine yaptığı çalışmalar Türkiye'de sosyal bilimleri derinden etkilemiştir.",
    fikirler: [
      "Osmanlı ve Türk siyasal yaşamında devlet seçkinlerinden oluşan merkez ile taşradaki çevre arasında süreklilik gösteren bir gerilim vardır.",
      "Bu gerilim Cumhuriyet döneminde siyasal partiler ve seçmen davranışları üzerinden de izlenebilir.",
      "Din, toplumun gündelik yaşamında anlam üreten bir kaynak olarak sosyolojik açıdan incelenmelidir."
    ],
    kavramlar: ["merkez-cevre"],
    eserler: [
      { orijinal: "Center-Periphery Relations: A Key to Turkish Politics? (Daedalus)", yil: "1973", tr: "" },
      { orijinal: "Jön Türklerin Siyasi Fikirleri", yil: "", tr: "Jön Türklerin Siyasi Fikirleri" },
      { orijinal: "Religion and Social Change in Modern Turkey", yil: "1989", tr: "Bediüzzaman Said Nursi Olayı" }
    ],
    tezde: "Türkiye'de siyasal davranış, din ve modernleşme, kent-taşra ilişkileri ve orta sınıf çalışmalarında merkez-çevre kuramı sık kullanılan bir çerçevedir. Kurama yöneltilen eleştirileri de (ikili yapının fazla şematik bulunması gibi) tartışman önerilir."
  },
  {
    id: "berkes", ad: "Niyazi Berkes", yillar: "1908–1988", ulke: "Türkiye / Kanada", ekol: "Türk modernleşmesi / Düşünce tarihi",
    ozet: "Cumhuriyet döneminin önde gelen sosyal bilimcilerinden biridir. Türkiye'de Çağdaşlaşma adlı eseriyle Osmanlı'dan Cumhuriyet'e uzanan modernleşme sürecini sekülerleşme ekseninde okumuş ve bu alandaki tartışmaları uzun süre biçimlendirmiştir.",
    fikirler: [
      "Osmanlı toplumunda diğer Doğu toplumlarında olduğu gibi din ile devlet iç içe geçmiştir. Bu nedenle çağdaşlaşma, sekülerleşme anlamına gelir.",
      "18. yüzyıldan beri süren modernleşme çabaları geleneksel yapı içinde toplumu ileri taşımakta zorlanmış ve zaman zaman tepkiyle karşılanmıştır.",
      "Atatürk devrimleri bağımsızlık ve ulusal egemenlik ilkesini benimsediği için bu süreçte bir dönüm noktasıdır.",
      "Osmanlı-Türk modernleşmesinin laik bir ulus-devletin kuruluşuyla sonuçlanması tarihsel sürecin kaçınılmaz bir sonucu olarak görülür."
    ],
    kavramlar: ["cagdaslasma"],
    eserler: [
      { orijinal: "The Development of Secularism in Turkey", yil: "1964 (Türkçesi 1973)", tr: "Türkiye'de Çağdaşlaşma" }
    ],
    tezde: "Türk modernleşmesi, laiklik, din ve toplum ilişkisi ve Cumhuriyet'in kuruluş dönemi üzerine çalışmalarda Berkes temel başvuru kaynaklarından biridir. Onun ilerlemeci ve aydınlanmacı yaklaşımını Şerif Mardin'in merkez-çevre ve kültür vurgusuyla karşılaştırmak, kuramsal bölüme dengeli bir tartışma kazandırır."
  }
];
