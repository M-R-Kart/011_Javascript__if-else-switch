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
