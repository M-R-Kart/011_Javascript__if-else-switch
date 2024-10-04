İF...ELSE YAPISININ KULLANIMI :

JavaScript te if...else yapısı, koşullu ifadelerle mantıksal kontroller yapmayı sağlar. 
Eğer verilen koşul doğruysa (true), if bloğu çalıştırılır; değilse, else bloğu çalıştırılır.

    //! Örnek:

        if (koşul) {
            //* Bu blok, koşul doğruysa çalışır.
        } else {
            //* Bu blok, koşul yanlışsa çalışır.
        }

//! //////////////////////////////////////////////////////////////////////////////////////////

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
    //! ////////////////////////////////////////////////////////

      //! Örnek: 

        let isStudent = true;

        if (isStudent) {
          console.log("Hangi bölümde okuyorsunuz.");
        } else {
          console.log("Hangi meslek sahibisiniz.");
        }
        //* Çıktı: "Hangi meslek sahibisiniz.""

    //! ////////////////////////////////////////////////////////

    //! Örnek: 
        //? Bir sayının pozitif veya negatif olduğunu kontrol edelim:

        let sayi = -6;

        if (sayi > 0) {
          console.log(`0'dan büyük olduğu için ${sayi} "POZİTİF" sayıdır.`);
        } else {
          console.log(`0'dan küçük olduğu için ${sayi} "NEGATİF" sayıdır.`);
        }
        //* Çıktı: "0'dan küçük olduğu için -6 "NEGATİF" sayıdır."

    //! ////////////////////////////////////////////////////////
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

//! //////////////////////////////////////////////////////////////////////////////////////////

ELSE İF İLE DAHA FAZLA KOŞUL KONTROL ETME

Eğer birden fazla koşul kontrol etmek istersen, else if yapısını kullanabilirsin.

    //!Örnek:
      //? Diploma puanı 90>=a 80>=b 70>=c 60>=d 50<kötü puan çıktısı ?
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

//! //////////////////////////////////////////////////////////////////////////////////////////

MANTIKSAL OPERATÖRLER

Koşulları birleştirmek için && (ve) ve || (veya) operatörleri kullanılabilir.

    //!Örnek:

        let sayi = 101;

        if (sayi > 0 && sayi < 100) {
          console.log("Sayı pozitif ve 100'den küçüktür.");
        } else if (sayi > 100 || sayi < 0) {
          console.log("Sayı negatif veya 100'den büyüktür.");
        }


EŞİTLİK KONTROLLERİ

 == ile iki değer karşılaştırılabilir. 
Daha sıkı bir karşılaştırma (tip karşılaştırması dahil) yapmak için === kullanılır.
== 2 eşitlik içeriği sorgular.
=== 3 eşitlik hem içeriği hem veri türünü sorgular.

if (sayi === 10) {
    console.log("Sayı tam olarak 10'dur.");
}
