//  Crea un array vuoto e chiedi all’utente un numero
//  da inserire nell’array.Continua a chiedere i numeri
//  all’utente e a inserirli nell’array fino a quando
//  a somma degli elementi è minore di 50.

let number = [];
let sum = 0;
while (sum < 50) {
    let userNumber = parseInt(prompt('inserisci un numero'));
    console.log(userNumber);
    sum += userNumber;
    number.push(userNumber);
    
}

console.log(sum);
