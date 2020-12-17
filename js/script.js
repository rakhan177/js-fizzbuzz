/*Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.*/

// creo ciclo if che parte da 1 e arriva a 100 compreso
for (i = 1; i <= 100; i++){
  /*creo le condizioni in cui il resto di un numero diviso per 3 e per 5 sia 0,
  essendo un ciclo metto all' inizio la condizione in cui entrambi diano 0
  in modo che sarà la prima condizione vera e quindi quella stampata, altrimenti
  stamperebbe solo Buzz o Fizz*/
  if (i % 3 === 0 && i % 5 === 0){
    console.log('FizzBuzz');
    // recap: else if deve essere argomentato
  }else if(i % 3 === 0){
    console.log('Fizz');
  }else if (i % 5 === 0){
    console.log('Buzz');
    // recap: else non accetta argomenti...è semplicemente: altrimenti
  }else{
    console.log(i);
  }
}
