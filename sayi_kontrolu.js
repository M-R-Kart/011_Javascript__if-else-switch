//* Sayı Kontrolü
//? Bir sayı girilmesini iste ve sayının:

//? Negatif, pozitif veya sıfır olup olmadığını if-else ile kontrol et.

//! Kullanıcıdan sayı al
let sayi = prompt("Lütfen bir sayı giriniz.");

//! Sayıyı tam sayıya çevir
sayi = parseInt(sayi);

//! Eğer sayı geçerli değilse uyarı ver
if (isNaN(sayi)) {
  console.log("Lütfen geçerli bir sayı giriniz.");
} else if (sayi < 0) {
  console.log("Sayi negatif sayıdır.");
} else if (sayi > 0) {
  console.log("Sayi pozitif sayıdır.");
} else {
  console.log("Sayı nötr(sıfır)'dır.");
}

console.log(sayi);

/*
Nasıl Çalışır?
1- prompt() ile kullanıcıdan bir sayı alıyoruz.
2- parseFloat() ile string değeri ondalıklı sayıya çeviriyoruz (istersen parseInt() kullanarak sadece tam sayı da alabilirsin).
3- isNaN() ile geçerli bir sayı girilip girilmediğini kontrol ediyoruz.
4- Girilen sayının 0'dan büyük, küçük veya sıfır olup olmadığına göre uygun mesaj gösteriliyor.
*/
