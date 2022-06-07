
//ÖDEV: Math.round(Math.random()*10+1))
// bilgisayar tarafında rastgele  sayılar 1-10 arasında rastgele 
    //olsun oluştursun ve bitiş değeri 1<=X<=kullanıcı tarafından bitiş sayısına göre sayılar oluşturulsun 
// bu sayıları bir diziye atama yapalım
// bu sayılardan ilk eleman  ===> dizi[0]
// bu sayılardan son eleman ===> dizi[dizi.length-1]
// bu sayıların küçükten büyüğe sıralama ===> dizi.sort()
// bu sayıların büyükten küçüğe sıralama ===> dizi.sort().reverse()
// bu sayıların toplamları  ===> sum=0  sum+=i;
// bu sayıların çift sayı toplamları  ===> if(dizi[i]%2==0)
// bu sayıların tek sayı toplamları  ===> if(dizi[i]%2==1)
// bu sayıların her birine 1 ekleyerek yeni bir dizi oluşturalım ==>
  // iterative for ile her bir eleman erişmek ve 1 eklemek bunun dinamik kısmını ES kısmında göreceğiz.

//-------------------------------------------------------------------

//alınan sayı kadar rastgele 1-10 arası sayılar
var arrayLength = prompt("Enter a number: ")
var randomArray = []
sum = 0;
sumEven = 0;
sumOdd = 0;
  
for(var i = 0; i < arrayLength; i++) {
        randomArray.push(Math.round(Math.random() * 10+1))   
        sum += randomArray[i]
    }

document.writeln(randomArray + "<hr>")

//1.indisteki sayı
document.writeln(randomArray[0] + "<hr>")

//sondaki sayı
document.writeln(randomArray[randomArray.length-1] + "<hr>")

//büyükten küçüğe dizi
document.writeln(randomArray.sort() + "<hr>")

//küçükten büyüğe dizi
document.writeln(randomArray.sort().reverse() + "<hr>")

//dizinin toplamı
document.writeln(sum + '<hr>')

//çift sayılar toplamı
for(var i = 0; i < arrayLength; i++) {
    if(randomArray[i]%2 == 0) {
        sumEven += randomArray[i]
    } 
}

    document.writeln(sumEven + '<hr>')
  
//tek sayılar toplamı
for(var i = 0; i < arrayLength; i++) {
      if(randomArray[i]%2 == 1) {
            sumOdd += randomArray[i]
        } 
    }
    
    document.writeln(sumOdd + '<hr>')
      
 // her elemana +1 eklenmiş dizi   
for(temp of randomArray) {
  newArray = (temp + 1)
  document.writeln(newArray)
}
