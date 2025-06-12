const starContainer = document.getElementById("star-container");
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

function createStar() {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDuration = 20 + Math.random() * 20 + "s";

    const note = notes[Math.floor(Math.random() * notes.length)];
    const noteDiv = document.createElement("div");
    noteDiv.className = "note";
    noteDiv.textContent = note;
    star.appendChild(noteDiv);

    star.addEventListener("click", () => {
        noteDiv.classList.toggle("visible");
    });

    starContainer.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 40000);
}

setInterval(createStar, 500);
