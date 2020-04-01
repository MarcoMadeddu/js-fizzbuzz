console.log("java is done");
// versione only Java
// //stampa tutti i numeri da 1 a 100, successivamente individua i divisibili per 3, per 5 e per entrambi;
// var valore;
//
// for (var i = 0; i <= 99; i++){
//
//   valore = i + 1;
//   if( valore%3 == 0 && valore % 5 == 0){
//
//     valore= "FizzBuzz";
//
//   } else if(valore % 3 == 0){
//
//     valore = "Fizz";
//
//   }  else if(valore % 5 == 0){
//
//       valore = "Buzz";
//
//     }
//
// console.log(valore);
// }


//versione html

var valore;
var list = document.getElementById("myList")
var btnCreate = document.getElementById("create");

//genero metodo per creazione tramite tasto

btnCreate.addEventListener("click",
  function() {
    var lista ="";
    for (var i = 1; i <= 100; i++){

      if( i%3 == 0 && i % 5 == 0){

        lista += "<li>" + "FizzBuzz" + "</li>";

      } else if(i % 3 == 0){

        lista += "<li>" + "Fizz" + "</li>";

      }  else if(i % 5 == 0){

          lista += "<li>" + "Buzz" + "</li>";

        } else{

          lista += "<li>" + i + "</li>";

        }

    }
    myList.innerHTML = lista;
  }
)
