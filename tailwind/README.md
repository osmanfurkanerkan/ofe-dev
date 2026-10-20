# Tailwind CSS derlemesi

Site artık Tailwind'i tarayıcıda (cdn.tailwindcss.com) üretmiyor; önceden derlenmiş `styles.css` dosyasını kullanıyor. Bu, sayfanın çok daha hızlı açılmasını sağlıyor.

**Önemli:** `index.html`'e daha önce hiç kullanılmamış yeni bir Tailwind sınıfı (class) eklersen, `styles.css`'i yeniden üretmen gerekir. Yoksa o sınıf çalışmaz.

Repo kök klasöründe (ofe.dev) şu komutu çalıştır:

```
npx tailwindcss@3.4.17 -c tailwind/tailwind.config.js -i tailwind/input.css -o styles.css --minify
```

Sonra `index.html` içindeki `styles.css?v=...` değerini güncelle (ör. bugünün tarihi), böylece ziyaretçiler eski CSS'i önbellekten görmez.
