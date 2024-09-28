//! Object Literals

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
