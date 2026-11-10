# Changelog

Bu projedeki önemli değişiklikler bu dosyada tutulur.
Biçim [Keep a Changelog](https://keepachangelog.com/tr-TR/1.1.0/) standardını,
sürümler [Semantic Versioning](https://semver.org/lang/tr/) kurallarını izler.

## [Unreleased]

### Eklendi
- Proje yol haritası (ROADMAP.md), README ve temel git ayar dosyaları oluşturuldu.
- MehPiX, Mehbur07, MicroCore ve Quiz logoları ile Quiz bağlantı tablosu projeye eklendi.
- React Router + Vite + Tailwind iskeleti kuruldu; Türkçe/İngilizce "yapım aşamasında" sayfası ve 404 ekranı eklendi.
- main'e her merge'de siteyi kontrol edip GitHub Pages'e yayınlayan otomatik iş akışı eklendi.
- Neon renk paleti, koyu/açık tema, siteyle birlikte barındırılan fontlar ve ortak bileşenler (menü, canlı saatli footer, buton, kart, rozet, bölüm başlığı) eklendi.
- Bileşenlerin görülebildiği `/tasarim` vitrin sayfası eklendi; ana sayfaya tema ve dil düğmeleri geldi.
- "Yapım aşamasında" sayfasının yerine gerçek ana sayfa geldi: projeler, değerler, gerçek rakamlı sayaçlar, yol haritası, iş birlikleri, SSS ve iletişim bandı.
- Henüz yapılmamış sayfalara giden menü bağlantıları artık 404 yerine ana sayfadaki ilgili bölüme gidiyor.
- Projeler (filtreli), PyAI, Quiz (oynanış, parça listesi, bağlantı tablosu), Hakkımızda, İletişim (form) ve SSS sayfaları Türkçe ve İngilizce olarak eklendi.
- 404 ekranı menü, footer ve önerilen sayfa bağlantılarıyla yenilendi; Quiz açıklaması kodla uyumlu olacak şekilde "matematik yarışması" olarak düzeltildi.
- PyAI ve Quiz artık indirilebiliyor: dosyalar mehpix/PyAI ve mehpix/Quiz repolarının Releases sayfalarında; proje sayfalarına İndir/GitHub butonları, SHA-256 doğrulama ve Windows uyarısı notu eklendi.
- Site içi arama eklendi: menüdeki "Ara" butonu veya ⌘K / Ctrl+K ile sayfalar, projeler ve SSS soruları aranabiliyor; SSS sonuçları ilgili soruyu açık getiriyor.
- Yayın öncesi cila: favicon ve telefon ikonu, link paylaşımında çıkan önizleme görseli, sitemap.xml, robots.txt ve arama motorları için asıl adres/dil etiketleri eklendi.
- Logolar WebP'ye çevrilip ~2 MB'tan 60 KB'ın altına indirildi; PyAI kendi logosuna kavuştu, Mehbur07 bağlantısı yeni adresine (mehbur07.github.io) güncellendi.
- Tarayıcıların eski "ikon yok" kaydını tutup sekmede boş küre göstermesi düzeltildi: ikon adreslerine sürüm eki (`?v=2`) eklendi.
