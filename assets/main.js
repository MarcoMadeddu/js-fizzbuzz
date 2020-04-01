console.log("java is done");

//stampa tutti i numeri da 1 a 100;
var valore;

for (var i = 0; i <= 99; i++){

  valore = i + 1;
  if( valore%3 == 0 && valore % 5 == 0){

    valore= "FizzBuzz";

  } else if(valore % 3 == 0){

    valore = "Fizz";

  }  else if(valore % 5 == 0){

      valore = "Buzz";

    }

console.log(valore);
}
