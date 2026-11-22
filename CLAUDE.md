# Sosyoloji Cebimde · Claude için çalışma talimatı

Bu depo Ali Eren Demir'in "Sosyoloji Cebimde" uygulamasıdır. Yeni bir oturumda bu dosyayı okuyan Claude, önceki sohbetin bilgisine ihtiyaç duymadan çalışmayı sürdürebilmelidir.

## Uygulama
- `app/` klasöründe derleme gerektirmeyen bir PWA (HTML, CSS, JavaScript). Veri toplamaz, çevrimdışı çalışır.
- Yayın adresi: https://alierendemir.github.io/sosyoloji/ . `main` dalına giren her `app/` değişikliği `.github/workflows/pages.yml` ile otomatik yayınlanır.
- Veri dosyaları: `app/data/kuramcilar.js`, `kavramlar.js`, `makaleler.js`, `rehber.js`, `haftalik.js`
- Diğer dosyalar: `app/app.js` (sayfalar), `app/oyunlar.js` (dört oyun), `app/kurulum.js` (İndir penceresi), `app/sw.js` (önbellek)
- Sosyal medya: Instagram https://www.instagram.com/sosyolojikdusun/ , YouTube https://www.youtube.com/@sosyolojikdusun
- Galaxy Store dosyaları: `magaza/`

## Kullanıcının isteği
- Güncellemeler kendiliğinden yayınlansın. Testler geçince PR açılır ve Claude birleştirir (`merge_pull_request`, tam 40 karakterlik head SHA ile).
- Her hafta: haftanın makalesi, haftanın kitabı, plaka sırasıyla bir ilin tarihsel sosyolojisi, mümkünse yeni bir kuramcı ve uygulamadaki hataların düzeltilmesi.
- Sıradaki il, kuramcı ve eklenenler listesi `GELISTIRME_PLANI.md` içinde.

## Haftalık güncelleme adımları
1. Güncel `main` dalını al. `GELISTIRME_PLANI.md` ve `app/data/haftalik.js` dosyalarını oku. Haftanın tarihi o haftanın pazartesisidir. Bu tarihli kayıt varsa haftalık içerik ekleme.
2. **Haftanın makalesi:** `makaleler.js` dosyasına ekle, `haftalik.js` → `makaleler` dizisinin sonuna `{ hafta, url, neden, kavramlar, sorular }` yaz.
3. **Haftanın kitabı:** Türkçe baskının künyesini (çevirmen, yayınevi, yıl, ISBN) DergiPark'taki bir kitap incelemesinin ilk sayfasından doğrula. `haftalik.js` → `kitaplar` dizisine Goffman kaydının yapısıyla ekle.
4. **İl:** 3–5 kaynağı doğrula, `makaleler.js` dosyasına `il: "<id>"` ve `kuramci: []` ile ekle. `haftalik.js` → `iller` dizisine Adana ve Adıyaman yapısıyla yaz: `ozet`, 4–6 bölüm, "Sosyolojik bir okuma" ve "Bu yazının kapsamı". Her bilgi kaynağa dayansın, metinde yazar ve yıl anılsın.
5. **Kuramcı (zaman kalırsa):** `GELISTIRME_PLANI.md` "Sıradakiler" listesinin başından.
6. **Hata taraması:** `app/` içinde `python3 -m http.server` başlat ve Playwright ile telefon boyutunda tüm sayfaları ve dört oyunu aç. `localStorage` içine `indir-ertele` yazarak İndir penceresini kapat. Konsol hatası, yatay taşma ve geçersiz id başvurusu ara.
7. **Yayın:** `app/sw.js` içinde `SURUM` değerini, Hakkında sayfasında sürüm numarasını artır. `GELISTIRME_PLANI.md` dosyasını güncelle. PR aç, birleştir, yayın iş akışının sonucunu kontrol et. Geçici GitHub hatasında bir kez yeniden çalıştır.

## Kaynak doğrulama (çok önemli)
- Arama sonuçlarındaki künyeye güvenme. DergiPark makale sayfasını `curl` ile indir, `<meta name="citation_...">` etiketlerinden künyeyi al.
- Eski makalelerde DergiPark tarihi yüklenme tarihini gösterebilir. Makalenin PDF'ini indir ve `pdftotext` ile ilk sayfadaki yıl, sayı ve sayfa bilgisini esas al.
- Doğrulanamayan hiçbir makale ya da kitap bilgisi uygulamaya girmez. Kitaplarda yayınevi ve yıl yalnızca doğrulandıysa yazılır.
- Ortamda `dergipark.org.tr` erişime açık olmalı. Kapalıysa ağ ayarlarından bu alan adına izin ver.

## Yazım kuralları (kullanıcının kesin tercihleri)
- Noktalı virgül kullanma.
- "sadece/yalnızca ... değil, aynı zamanda" kalıbını hiç kullanma.
- Önce olumsuz sonra olumlu söyleyen "X değil, Y" yapısını kullanma.
- "-ken" ekiyle birlikte gereksiz "aynı zamanda" kullanma.
- Her yere virgül koyma, mekanik cümle kurma.
- Keskin ve kategorik ifadeler yerine ölçülü ve anlaşılır bir dil kullan. Kelime tekrarından kaçın.
- Kullanıcıyla Türkçe konuş.

## Türkü Defteri (ikinci uygulama)
- `turku/` klasöründe derleme gerektirmeyen ayrı bir PWA. Yayın adresi: https://alierendemir.github.io/sosyoloji/turku/ . `pages.yml` siteyi birleştirirken `turku/` klasörünü `/turku/` altına kopyalar, `turku/araclar/` yayına girmez.
- Dosyalar: `turku/app.js` (sayfalar, repertuvar, ekranı açık tutma), `turku/akort.js` (mikrofonlu bağlama akort aleti), `turku/data/turkuler.js` (türküler), `turku/data/duzenler.js` (Kaya 2021, Tablo 3), `turku/sw.js` (önbellek, `SURUM` değeri "turku-" ile başlar).
- Sözler yalnızca telifi serbest metinlerden alınır: Vikikaynak'taki anonim türküler ve kamu malı ozanlar. Günümüz sanatçılarının özgün eserleri, Kurmancî ve Kirmanckî kayıtlar yalnızca YouTube bağlantısıyla girer. Söz uydurulmaz, YouTube video kimliği yalnızca arama sonucunda görülen gerçek adresten alınır.
- Veri `turku/araclar/` betikleriyle üretilir (bkz. `turku/araclar/BENIOKU.md`). Ortamda `tr.wikisource.org` erişime açık olmalıdır.
- Türkü Defteri için haftalık zamanlanmış görev yoktur. Ali Eren Demir istediğinde güncellenir.
- Her güncellemede `turku/sw.js` içindeki `SURUM` ve `turku/app.js` içindeki `SURUM` değerini artır. Sosyoloji uygulamasının `app/sw.js` dosyası yalnızca "sosyoloji-" önbelleklerini siler, bu kural korunmalı.
