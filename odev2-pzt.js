//Kullanıcıdan aldığımız verinin ilk harfi ve son harfi
 // görünsün geriye kalan karakter
   // kadar * (yıldız) olsun ==> Alınan örneğin Hamit  ==>  H***t
//Yardımcı oalcak metotlar v.s                                                                          function
//string ==> replace,sub,String,charAt()
//loop


//-------------------------------------------------

var kelime = String(prompt("Kelime giriniz: "))

function replaceToStar(kelime) {

    var arrayKelime = new Array();
    arrayKelime = Array.from(kelime)

    for(var i = 1; i < arrayKelime.length-1; i++) {
        arrayKelime[i] = "*"
    }
    document.write(arrayKelime.join(''))
}

replaceToStar(kelime)