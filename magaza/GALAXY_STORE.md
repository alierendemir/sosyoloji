# Galaxy Store'a yükleme (Samsung Satıcı Portalı)

Bu klasördeki dosyalar Galaxy Store başvurusu için hazırlandı:

- `simge-512.png`: uygulama simgesi (512×512)
- `ekran-goruntuleri/`: sekiz telefon ekran görüntüsü (1082×2202)
- `one-cikan-gorsel-1024x500.png`: tanıtım görseli (Google Play de aynı ölçüyü istiyor)

Uygulamanın adresi: `https://alierendemir.github.io/sosyoloji/`
Gizlilik politikası: `https://alierendemir.github.io/sosyoloji/gizlilik.html`

## 1. Android paketini oluştur (telefonda ya da bilgisayarda, yaklaşık 5 dakika)

1. https://www.pwabuilder.com adresini aç ve uygulamanın adresini yapıştır.
2. **Package for stores** düğmesine, ardından **Android** seçeneğine dokun.
3. **Package ID** alanına `io.github.alierendemir.sosyoloji` yaz. Bu ad yayından sonra değiştirilemez.
4. **App name** alanı *Sosyoloji Cebimde*, **Launcher name** alanı *Sosyoloji* olabilir.
5. **Signing key** bölümünde **Create new** seçili kalsın ve paketi indir.
6. İndirilen zip dosyasının içinde şunlar bulunur:
   - `.apk` dosyası: Galaxy Store'a yükleyeceğin dosya
   - `.aab` dosyası: ileride Google Play için
   - `signing.keystore` ve `signing-key-info.txt`: **Bunları güvenli bir yerde (örneğin Google Drive) sakla.** Kaybedersen uygulamayı güncelleyemezsin.

## 2. Satıcı Portalı sekmeleri

https://seller.samsungapps.com adresinden giriş yap ve sağ üstteki **Add New Application** (Yeni Uygulama) simgesine dokun. Tür olarak **Android** seç. Her sekmeden çıkmadan önce **Kaydet** düğmesine bas.

### Uygulama Bilgileri
| Alan | Girilecek bilgi |
|---|---|
| Varsayılan dil | Türkçe |
| Uygulama adı | Sosyoloji Cebimde |
| Açıklama | Aşağıdaki "Uzun açıklama" metni |
| Kategori | Eğitim (Education) |
| Simge | `simge-512.png` |
| Ekran görüntüleri | `ekran-goruntuleri/` klasöründeki sekiz dosya |
| Yaş derecelendirmesi | Herkes ya da en düşük seviye. Uygulamada şiddet, kumar veya yetişkin içerik bulunmuyor |
| Gizlilik politikası URL'si | `https://alierendemir.github.io/sosyoloji/gizlilik.html` |
| Destek e-postası | Kendi e-posta adresin |

### İkili (Binary)
- PWABuilder'ın oluşturduğu `.apk` dosyasını yükle.
- Desteklenen cihazlar: tüm telefonlar ve tabletler.

### Ülke/Bölge ve Fiyat
- Fiyat: **Ücretsiz**
- Ülke: Türkiye. İstersen Azerbaycan, Almanya gibi Türkçe konuşan kullanıcıların bulunduğu ülkeleri de ekleyebilirsin.

### Yayın
- İncelemeden geçince otomatik yayınlanmasını seçebilirsin.
- ABD ihracat yasaları onayı: Uygulama standart HTTPS bağlantısı dışında şifreleme kullanmıyor.

### Uygulama İçi Satın Alma
- Boş bırak.

### Veri Güvenliği
- **Uygulama kullanıcı verisi toplamıyor ve üçüncü taraflarla paylaşmıyor** seçeneğini işaretle.

### İnceleme notu
> Uygulama giriş gerektirmez. Sosyoloji kavramları, kuramcılar ve Türkçe makale önerileri içeren ücretsiz bir eğitim uygulamasıdır. İnternet bağlantısı olmadan da çalışır. Kullanıcı verisi toplamaz.

## Mağaza metinleri

**Kısa tanıtım:**
Sosyoloji kavramları, kuramcılar, Türkçe makaleler, oyunlar ve tez rehberi

**Uzun açıklama:**

Sosyoloji Cebimde sosyoloji öğrencileri ve araştırmacılar için hazırlanmış ücretsiz bir öğrenme ve başvuru uygulamasıdır.

• 50 temel kavram için tanım, gündelik hayattan örnek ve makalede kullanım önerisi
• Comte'tan Bourdieu'ya, İbn Haldun'dan Şerif Mardin'e 27 kuramcının temel fikirleri ve eserleri
• Künyesi DergiPark üzerinden doğrulanmış Türkçe makale önerileri
• Tek dokunuşla APA 7 kaynakça ve metin içi atıf kopyalama
• Kuramsal çerçeve kurma ve kavram kullanımı rehberi
• APA atıf oluşturucu
• Her seferinde farklı sorularla kısa testler
• Dört sosyoloji oyunu: Hafıza Kartları, Saha Notu, Zaman Çizelgesi ve Kavram Tahmini
• Okuma listesi
• İnternet olmadan çalışır, hesap istemez, reklam içermez ve hiçbir kişisel veri toplamaz

İçerik düzenli olarak yeni kuramcılar, kavramlar ve makalelerle genişletilmektedir.

**Anahtar kelimeler:**
sosyoloji, kuram, kuramcı, kavram, tez, makale, APA, atıf, kaynakça, akademik, üniversite, oyun, test

## Güncellemeler hakkında

Uygulama içeriği web üzerinden geldiği için yeni kuramcı ve kavramlar eklendiğinde Galaxy Store'a yeni paket yüklemen gerekmez. Kullanıcılar uygulamayı açtığında güncel içerik kendiliğinden gelir. Yeni paket yalnızca uygulama adı, simgesi ya da paket ayarları değiştiğinde gerekir.
