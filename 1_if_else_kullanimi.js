//! Koşullu Durumlar (İf-Else)

const firsName = "Çağla";
const userName = "caglayilmaz";
const age = 20;
const isStudent = true;
const school = "university";

if (userName == "caglayilmaz") {
  console.log("Merhaba Çağla!");
} else {
  console.log("Kullanıcı bulunamadı!");
}

///////////////////////////////////////////////////////

if (age === 20) {
  //! "===" 2 eşitlik içeriği 3 eşitlik hem içeriği hem veri türünü sorgular.
  console.log("Yaşınız : 20");
}

if (isStudent) {
  console.log("Hangi bölümde okuyorsunuz?");
} else {
  console.log("Hangi mesleği yapıyorsunuz?");
}

///////////////////////////////////////////////////////

if (age >= 18) {
  if (school == "university") {
    console.log("Ehliyet alabilirsiniz.");
  } else {
    console.log("Eğitim durumu ehliyet alabilmek için yeterli değildir.");
  }
} else {
  console.log("Yaşınız ehliyet alabilmek için yetersiz.");
}

///////////////////////////////////////////////////////

//let id = "2323223";
if (typeof id != "undefined") {
  console.log("id: " + id);
} else {
  console.log("id tanımlanmadı.");
}

///////////////////////////////////////////////////////
JavaScript'te if...else yapısı, koşullu ifadelerle mantıksal kontroller yapmayı sağlar. Eğer verilen koşul doğruysa (true), if bloğu çalıştırılır; değilse, else bloğu çalıştırılır. Visual Studio Code ortamında bu yapının nasıl kullanılacağını açıklayan bir bilgilendirme örneği oluşturabilirim.

Aşağıda, if...else yapısının genel kullanımını ve açıklamalarını içeren bir Visual Studio Code'ta yer alacak bilgilendirme şeması bulunuyor:

js
Kodu kopyala
// if...else yapısının kullanımı:

// Koşul belirlenir (condition). Eğer bu koşul 'true' dönerse, 'if' bloğu çalıştırılır.
// Aksi takdirde, 'else' bloğu çalıştırılır.
let sayi = 10;

if (sayi > 5) {
    // Eğer koşul doğruysa (true), bu blok çalışır.
    console.log("Sayı 5'ten büyüktür.");
} else {
    // Eğer koşul yanlışsa (false), bu blok çalışır.
    console.log("Sayı 5'ten büyük değildir.");
}

// Çıktı: "Sayı 5'ten büyüktür."
if...else Yapısının Adımları:
Koşul (condition): if parantezleri içine yazılır ve bu ifade, true ya da false döner.
Eğer if koşulu doğruysa (true): if bloğu çalışır ve içindeki kod yürütülür.
Eğer if koşulu yanlışsa (false): else bloğu çalışır ve içindeki kod yürütülür.
else if ile Daha Fazla Koşul Kontrol Etme
Eğer birden fazla koşul kontrol etmek istersen, else if yapısını kullanabilirsin.

js
Kodu kopyala
let not = 85;

if (not >= 90) {
    console.log("Tebrikler, notunuz A!");
} else if (not >= 80) {
    console.log("Notunuz B");
} else if (not >= 70) {
    console.log("Notunuz C");
} else {
    console.log("Maalesef, notunuz düşük.");
}

// Çıktı: "Notunuz B"
Notlar:
Mantıksal operatörler: Koşulları birleştirmek için && (ve) ve || (veya) operatörleri kullanılabilir.

js
Kodu kopyala
if (sayi > 0 && sayi < 100) {
    console.log("Sayı pozitif ve 100'den küçüktür.");
}
Eşitlik kontrolleri: == ile iki değer karşılaştırılabilir. Daha sıkı bir karşılaştırma (tip karşılaştırması dahil) yapmak için === kullanılır.

js
Kodu kopyala
if (sayi === 10) {
    console.log("Sayı tam olarak 10'dur.");
}
Bu bilgilendirmeyi Visual Studio Code'ta hem kod yazarken rehber olarak kullanabilir, hem de if...else yapılarına hızlı bir başlangıç yapabilirsin!
