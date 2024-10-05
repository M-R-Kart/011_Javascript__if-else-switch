//! Object Literals

JavaScript te object (nesne), birden fazla değeri tek bir yapıda saklamamızı sağlayan 
veri türüdür. Her değerin bir anahtarı (key) ve değeri (value) vardır. 
Object literals ise JavaScript te nesne oluşturmanın en basit yoludur; 
süslü parantezler {} içinde anahtar-değer çiftleriyle nesne tanımlanır.

//! Object Literals ile Nesne Oluşturma :
Object literals, anahtar-değer çiftlerini kullanarak nesneleri tanımlamak için kullanılır. 
Aşağıda basit bir örnek bulunuyor.

  //? Örnek:

    let kisi = {
      ad: "Ahmet",       // anahtar: ad, değer: "Ahmet"
      yas: 25,           // anahtar: yas, değer: 25
      meslek: "Mühendis" // anahtar: meslek, değer: "Mühendis"
    };
    
    Bu örnekte, kisi adlı nesne üç farklı anahtar-değer çiftinden oluşuyor: ad, yas ve meslek.

//! //////////////////////////////////////////////////////////////////////////////////////////

//! Nesneye Erişim:
Bir nesnenin içerisindeki verilere iki farklı yolla erişebilirsin.

  //! 1. Nokta Notasyonu (.)

    //? Örnek: 

      let kisi = {
      ad: "Ahmet",
      yas: 25, 
      meslek: "Mühendis",
      };
    
      console.log(kisi.ad); // "Ahmet"
      console.log(kisi.yas); // 25
  
  //! ************************************************

  //! 2. Köşeli Parantez Notasyonu ([])
  Anahtarın bir string olduğu durumlarda veya dinamik bir anahtar kullanıldığında kullanılır.   

    //? Örnek: 

      let kisi = {
        ad: "Ahmet", // anahtar: ad, değer: "Ahmet"
        yas: 25, // anahtar: yas, değer: 25
        meslek: "Mühendis", // anahtar: meslek, değer: "Mühendis"
      };
      
      console.log(kisi["meslek"]); // "Mühendis"
      
      let ozellik = "yas";
      console.log(kisi[ozellik]); // 25
  
  //! ************************************************

//! Nesneye Yeni Özellik Ekleme
Nesneye yeni bir özellik eklemek için basitçe nokta notasyonu veya köşeli parantez 
notasyonu kullanabilirsin.

    //? Örnek: 

      let kisi = {
        ad: "Ahmet", // anahtar: ad, değer: "Ahmet"
        yas: 25, // anahtar: yas, değer: 25
        meslek: "Mühendis", // anahtar: meslek, değer: "Mühendis"
      };

      kisi.soyad = "Yılmaz";
      console.log(kisi.soyad);

    //veya
    

  //! ************************************************









// let firstName = "Muhammet";
// let lastName = "Kart";

// let firstName2 = "Muhammet";
// let lastName2 = "Kart"; //! Kullanımı kesinlikle çok zor.

// let muhammet = ["Muhammet","Kart","28"];
// let esra = ["Esra","Yaşlı",40];  //! Kullanımı kesinlikle çok zor.

///////////////////////////////////////////////////////

let veri;
let user = {
  usurName: "muhammet",
  firstName: "Muhammet",
  lastName: "Kart",
  age: 28,
  hobbies: ["spor", "kitap okumak", "yazılım"],
  adress: {
    city: "İstanbul",
    country: "Türkiye",
    phone: "0555 444 33 22",
  },
};

veri = user;
veri = user.firstName;
veri = user.lastName;
veri = user.hobbies;
veri = user.hobbies.length;
veri = user.adress.city;
veri = user.adress.phone;

console.log(veri);
console.log(typeof user);
