# Sosyoloji Cebimde · Google Play'e yükleme rehberi

Uygulama bir PWA (ilerici web uygulaması) olarak yazıldı. Önce internette yayınlanır, ardından PWABuilder ile Play Store'a yüklenebilecek bir Android paketine (.aab) dönüştürülür.

## 1. Uygulamayı denemek

Bilgisayarında `app` klasörünün içinde şu komutu çalıştır ve tarayıcıda `http://localhost:8000` adresini aç:

```
python3 -m http.server 8000
```

## 2. Uygulamayı GitHub Pages'te yayınlamak

1. Bu dalı `main` dalıyla birleştir.
2. GitHub'da depo sayfasında **Settings → Pages** bölümüne git ve **Source** olarak **GitHub Actions** seç.
3. `main` dalına her gönderimde `.github/workflows/pages.yml` uygulamayı otomatik yayınlar. Adres şu biçimde olur: `https://alierendemir.github.io/sosyoloji/`
4. Gizlilik politikası adresi: `https://alierendemir.github.io/sosyoloji/gizlilik.html` (Play Console bu bağlantıyı ister.)

## 3. Android paketini oluşturmak (PWABuilder)

1. https://www.pwabuilder.com adresine uygulamanın yayın adresini yaz.
2. **Package for stores → Android** seçeneğini seç.
3. Paket adı (Package ID) olarak örneğin `io.github.alierendemir.sosyoloji` gibi benzersiz bir ad gir. Bu ad yayından sonra değiştirilemez.
4. İndirilen zip dosyasında şunlar bulunur:
   - `.aab` dosyası (Play Console'a yüklenecek paket)
   - imzalama anahtarı (`signing.keystore`) ve şifre bilgileri. **Bu dosyaları güvenli bir yerde sakla.** Kaybedersen uygulamayı güncelleyemezsin.
   - `assetlinks.json` dosyası

### assetlinks.json hakkında önemli not

Android'in uygulamayı tarayıcı adres çubuğu olmadan tam ekran açması için `assetlinks.json` dosyasının alan adının kökünde, yani `https://ALAN-ADI/.well-known/assetlinks.json` adresinde bulunması gerekir. GitHub Pages proje sitesi (`.../sosyoloji/`) alan adının köküne yazamadığı için iki yol öne çıkıyor:

- GitHub'da `alierendemir.github.io` adında ayrı bir depo açıp dosyayı o deponun `.well-known/assetlinks.json` yoluna koymak
- Uygulamayı kendi alan adına ya da Netlify veya Cloudflare Pages gibi bir servise taşımak

Bu adım atlanırsa uygulama yine çalışır, ama üst kısımda küçük bir adres çubuğu görünebilir.

## 4. Play Console adımları

1. https://play.google.com/console adresinden geliştirici hesabı aç (bir kerelik kayıt ücreti ve kimlik doğrulaması istenir).
2. **Uygulama oluştur** → ad: *Sosyoloji Cebimde*, varsayılan dil: Türkçe, tür: Uygulama, ücretsiz.
3. **Mağaza girişi**: kısa açıklama, uzun açıklama, simge (`app/icons/icon-512.png`), en az iki telefon ekran görüntüsü ve 1024×500 öne çıkan görsel.
4. **Uygulama içeriği**:
   - Gizlilik politikası: yukarıdaki `gizlilik.html` bağlantısı
   - Veri güvenliği: "Uygulama kullanıcı verisi toplamıyor ya da paylaşmıyor"
   - Reklamlar: Hayır
   - İçerik derecelendirmesi anketi: eğitim uygulaması
   - Hedef kitle: 18 yaş ve üstü ya da 13 yaş ve üstü
5. **Test**: Bireysel hesaplarda üretime çıkmadan önce bir süre kapalı test isteniyor (son bilinen şart 12 test kullanıcısıyla 14 gün). Güncel şartı Console'dan kontrol et.
6. Kapalı test tamamlandıktan sonra **Üretim** sürümüne `.aab` dosyasını yükle ve incelemeye gönder.

## Önerilen mağaza metinleri

**Kısa açıklama (80 karakter):**
Sosyoloji kavramları, kuramcılar, Türkçe makaleler ve tez yazım rehberi

**Uzun açıklama:**
Sosyoloji Cebimde sosyoloji öğrencileri ve araştırmacılar için hazırlanmış ücretsiz bir öğrenme ve başvuru uygulamasıdır.

• 50 temel kavram için tanım, gündelik hayattan örnek ve makalede kullanım önerisi
• Comte'tan Bourdieu'ya, İbn Haldun'dan Şerif Mardin'e 27 kuramcının temel fikirleri ve eserleri
• Künyesi DergiPark üzerinden doğrulanmış Türkçe makale önerileri
• Tek dokunuşla APA 7 kaynakça ve metin içi atıf kopyalama
• Kuramsal çerçeve kurma ve kavram kullanımı rehberi
• APA atıf oluşturucu
• Her seferinde farklı sorularla kısa testler
• Okuma listesi
• İnternet olmadan çalışır, hesap istemez, reklam içermez ve hiçbir kişisel veri toplamaz

## İçerik güncellerken

- Yeni kavram: `app/data/kavramlar.js`
- Yeni kuramcı: `app/data/kuramcilar.js`
- Yeni makale: `app/data/makaleler.js` (künyeyi makalenin kendi sayfasından kontrol et)
- Değişiklikten sonra `app/sw.js` içindeki `SURUM` değerini artır ki kullanıcıların cihazındaki önbellek yenilensin.
