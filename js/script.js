/*
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 =>  tra 1 e 80
con difficoltà 2 => tra 1 e 50
*/

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function controlloNumeriUguali(array , num) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == num) {
      return true;
    }
  }
  return false;
}

var arrayNumeriRandom = [];
var arrayNumeriUtente = [];
var numUtente = 0;
var punteggio = false;
var quantitaNumDaInserire = 10;

for (var i = 0; i < 16; i++) {
  arrayNumeriRandom.push(getRandomInt(1, 100));
}
console.log(arrayNumeriRandom);


i = 0;
while (i < quantitaNumDaInserire) {
  numUtente = parseInt(prompt("Inserisci " + quantitaNumDaInserire + " numeri da 1 a 100"));
  if (numUtente < 1 || numUtente > 100 || isNaN(numUtente)) {
    alert("Devi inserire solo e solamente NUMERI e devono essere compresi fra 1 e 100 riententa , prego")
  } else if (controlloNumeriUguali(arrayNumeriUtente, numUtente)) {
    alert("Hai inserito un numero già esistente reinseriscine un'altro")
  } else {
     arrayNumeriUtente.push(numUtente);
     i++;
     if (controlloNumeriUguali(arrayNumeriRandom, numUtente)) {
       console.log("Hai perso!!");
       quantitaNumDaInserire = -1;
     }
  }
}

if (i == 10) {
console.log("Hai totalizzato", i , "Punti");
} else {
console.log("Hai totalizzato", (i-1) , "Punti");
}

console.log(arrayNumeriUtente);
