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
var numRandom = 0;
var arrayNumeriUtente = [];
var numUtente = 0;
var difficolta = 0;
var quantitaBombe =16;
var minimo = 0;
var maximo = 0;




alert("Benvenuto in Campo Minato")
difficolta = parseInt(prompt("Scegli a che difficoltà vuoi giocare in base ad un range di numeri casuali : Con difficoltà 0 => tra 1 e 100 || Con difficoltà 1 =>  tra 1 e 80 || Con difficoltà 2 => tra 1 e 50"))
if (difficolta == 2 ) {
  while (arrayNumeriRandom.length < quantitaBombe) {
    var minimo = 1;
    var maximo = 50;
    numRandom = getRandomInt(minimo, maximo);
    if (!(controlloNumeriUguali(arrayNumeriUtente, numUtente))) {
      arrayNumeriRandom.push(numRandom);
    }
  }
} else if (difficolta == 1 ) {
  while (arrayNumeriRandom.length < quantitaBombe) {
    var minimo = 1;
    var maximo = 80;
    numRandom = getRandomInt(minimo, maximo);
    if (!(controlloNumeriUguali(arrayNumeriUtente, numUtente))) {
      arrayNumeriRandom.push(numRandom);
    }
  }
} else if (difficolta == 0 || isNaN(difficolta)) {
  while (arrayNumeriRandom.length < quantitaBombe) {
    var minimo = 1;
    var maximo = 100;
    numRandom = getRandomInt(minimo, maximo);
    if (!(controlloNumeriUguali(arrayNumeriUtente, numUtente))) {
      arrayNumeriRandom.push(numRandom);
    }
  }
}
console.log(arrayNumeriRandom);


var quantitaNumDaInserire = maximo - quantitaBombe;
console.log(quantitaNumDaInserire);
var i = 0;
while (i < quantitaNumDaInserire) {
  numUtente = parseInt(prompt("Inserisci " + quantitaNumDaInserire + " numeri per vincere da " + minimo + " a " + maximo ));
  if (numUtente < minimo || numUtente > maximo || isNaN(numUtente)) {
    alert("Devi inserire solo e solamente NUMERI e devono essere compresi fra " + minimo + " e " + maximo + " riententa , prego")
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
if (i == quantitaNumDaInserire) {
console.log("Hai vinto");
console.log("Hai totalizzato", i , "Punti");
} else {
console.log("Hai totalizzato", (i-1) , "Punti");
}
