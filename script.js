const notes = [
  "Seni düşündüğüm her an, içim sıcacık oluyor.",
  "Gözlerin aklımda, sesin kulaklarımda, kalbin kalbimde.",
  "Sensiz geçen zaman, eksik bir hikâye gibi.",
  "Gülüşünü özledim... çok.",
  "Yanımda olmasan da kalbim hep seninle.",
  "Sesin içime iyi geliyor, terapi gibi.",
  "Özlemek bile sen olunca güzel.",
  "Kalbim seni düşündüğünde bir başka atıyor.",
  "Sana sarılmayı dünyanın en güvenli yeri gibi özlüyorum.",
  "Her saniye seni daha çok seviyorum.",
  "Seninle her şey güzel, sensiz her şey eksik.",
  "Gözlerim seni arıyor, kalbim sana fısıldıyor.",
  "Bir gülüşünle dünyam değişiyor.",
  "Senin yokluğun sessizlik gibi, çok derin.",
  "Varlığın kalbimi huzurla dolduruyor.",
  "Seni sevmenin bir zamanı yok, her an.",
  "Aklımda sen varsın, başka kimse yok.",
  "Beni mutlu eden üç şey: sen, sen ve yine sen.",
  "Adını duymak bile içimi kıpır kıpır yapıyor.",
  "Her şeyden çok, seninle olmak istiyorum.",
  "Özlemek ne ki? Ben her saniye seninleyim.",
  "Kalbimde yerin sabit, değişmez.",
  "Geceler sensiz uzun, düşünceler senli.",
  "Sana doyamıyorum, cümlelere sığmıyorsun.",
  "Seninle geçen bir dakika, sensiz geçen saatlere bedel.",
  "Her sabah seni düşünerek uyanıyorum.",
  "Sadece seninle tam hissediyorum.",
  "Dünyadaki en güzel yer, senin yanın.",
  "Ellerini tutmayı, gözlerine bakmayı özledim.",
  "En güzel hayalim sensin.",
  "Sen benim en huzurlu limanımsın.",
  "Sana her bakışımda bir kere daha âşık oluyorum.",
  "Sen yanımda yokken, zaman duruyor gibi.",
  "Varlığın kalbimi tamamlıyor.",
  "Her şeyin anlamı seninle geliyor.",
  "Sadece gözlerine bakmak bile yetiyor.",
  "Sensiz bir gün, bir ömür gibi geliyor.",
  "Kalbim sana kodlanmış sanki.",
  "Gözlerin, en güzel manzaram.",
  "Özlemin içime işliyor her saniye.",
  "Bir mesajın bile günümü aydınlatıyor.",
  "Sensiz cümlelerim hep yarım.",
  "Hayat seninle çok daha anlamlı.",
  "Her şeyden çok seni özledim.",
  "Yanı başımda olmanı istiyorum, şimdi.",
  "Seninle geçen anılar, kalbimin hazinesi.",
  "Ne zaman seni düşünsem, içim titriyor.",
  "Bensizsen eksik, sensizsem yokum.",
  "Birlikte geçireceğimiz günleri hayal ediyorum.",
  "Sadece adın bile kalbimi gülümsetiyor.",
  "Kalbim seni bekliyor... her an.",
  "Gülüşünü ezberledim, aklımdan çıkmıyor.",
  "Sana söylemediğim her şey, içimde bir sevda."
];

const container = document.getElementById("star-container");

for (let i = 0; i < 40; i++) {
  const star = document.createElement("div");
  star.className = "star";

  const size = Math.random() * 3 + 3;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;
  star.style.animationDuration = `${20 + Math.random() * 20}s`;

  const note = document.createElement("div");
  note.className = "note";
  note.textContent = notes[i % notes.length];

  star.addEventListener("click", () => {
    // Tüm notları gizle
    document.querySelectorAll(".note.visible").forEach(n => n.classList.remove("visible"));
    // Tıklanan yıldızın notasını göster
    note.classList.add("visible");

    // Notun pozisyonunu yıldızın biraz sağ altına ayarla
    note.style.top = `calc(${star.style.top} + 20px)`;
    note.style.left = `calc(${star.style.left} + 20px)`;
  });

  container.appendChild(star);
  container.appendChild(note);
}
