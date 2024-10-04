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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

JavaScript te if...else yapısı, koşullu ifadelerle mantıksal kontroller yapmayı sağlar. 
Eğer verilen koşul doğruysa (true), if bloğu çalıştırılır; değilse, else bloğu çalıştırılır.

    //! Örnek:

        if (koşul) {
            //* Bu blok, koşul doğruysa çalışır.
        } else {
            //* Bu blok, koşul yanlışsa çalışır.
        }


İF...ELSE YAPISININ KULLANIMI :

    //! Örnek:

        let sayi = 10;
        
        if (sayi > 5) {
            //* Eğer koşul doğruysa (true), bu blok çalışır.
            console.log("Sayı 5'ten büyüktür.");
        } else {
            //* Eğer koşul yanlışsa (false), bu blok çalışır.
            console.log("Sayı 5'ten büyük değildir.");
        }
        //* Çıktı: "Sayı 5'ten büyüktür."
    //! /////////////////////////////////////////////////////////////////////
    //! Örnek: 
        //? Bir sayının pozitif veya negatif olduğunu kontrol edelim:

        let sayi = -6;

        if (sayi > 0) {
          console.log(`0'dan büyük olduğu için ${sayi} "POZİTİF" sayıdır.`);
        } else {
          console.log(`0'dan küçük olduğu için ${sayi} "NEGATİF" sayıdır.`);
        }
        //* Çıktı: "0'dan küçük olduğu için -6 "NEGATİF" sayıdır."

    //! /////////////////////////////////////////////////////////////////////
    //!Örnek:
        //? Ehliyet alabilir mi? (Not: 18 ve üzeri ehliyet alabilir.)

        let firstName = "Çağla";
        let age = 20;

        if (age >= 18) {
          console.log(`${firstName}, ehliyet alabilir.`);
        } else {
          console.log(`${firstName}, yaşı şartları karşılamamıştır.`);
        }
        //* Çıktı: Çağla, ehlliyet alabilir.

//! //////////////////////////////////////////////////////////////////////

if...else Yapısının Adımları:
Koşul (condition): if parantezleri içine yazılır ve bu ifade, true ya da false döner.
Eğer if koşulu doğruysa (true): if bloğu çalışır ve içindeki kod yürütülür.
Eğer if koşulu yanlışsa (false): else bloğu çalışır ve içindeki kod yürütülür.
else if ile Daha Fazla Koşul Kontrol Etme
Eğer birden fazla koşul kontrol etmek istersen, else if yapısını kullanabilirsin
  Örnek:
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
    //* Çıktı: "Notunuz B"
  ////////////////////////////////////////////////////////////////////
  Örnek:
  Diploma puanı 90>=a 80>=b 70>=c 60>=d 50<kötü puan çıktısı ?
    let firstName = "Çağla";
    let diplomaPuan = 53;
    
    if (diplomaPuan >= 90) {
      console.log(`${firstName}- Diploma Puanı = ${diplomaPuan}; = Dereceniz "A"`);
    } else if (diplomaPuan >= 80) {
      console.log(`${firstName}- Diploma Puanı = ${diplomaPuan}; = Dereceniz "B"`);
    } else if (diplomaPuan >= 70) {
      console.log(`${firstName}- Diploma Puanı = ${diplomaPuan}; = Dereceniz "C"`);
    } else if (diplomaPuan >= 60) {
      console.log(`${firstName}- Diploma Puanı = ${diplomaPuan}, = Dereceniz "D"`);
    } else if (diplomaPuan < 60) {
      console.log(`${firstName}- Diploma Puanı = ${diplomaPuan}; = Malesef Dereceniz "Kötü"`);
    }
    //* Çıktı: Çağla- Diploma Puanı = 53; = Malesef Dereceniz "Kötü"
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Notlar:
Mantıksal operatörler: Koşulları birleştirmek için && (ve) ve || (veya) operatörleri kullanılabilir.


if (sayi > 0 && sayi < 100) {
    console.log("Sayı pozitif ve 100'den küçüktür.");
}
Eşitlik kontrolleri: == ile iki değer karşılaştırılabilir. 
Daha sıkı bir karşılaştırma (tip karşılaştırması dahil) yapmak için === kullanılır.

if (sayi === 10) {
    console.log("Sayı tam olarak 10'dur.");
}
