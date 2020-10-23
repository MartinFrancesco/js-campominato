//ESERCIZIO CAMPO-MINATO
//Il computer deve generare 16 numeri casuali (bombe) tra 1 e 100.
//I numeri non possono essere duplicati
var arrBombs = [];

for (var i = 0; i < 3; i++) {
  var bomb = bombGenerator();

  if (bomb !== arrBombs[i]) {
    arrBombs.push(bomb);
  }
}

console.log(arrBombs);

//In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//L'utente non può inserire più volte lo stesso numero.
//Se il numero è presente nella lista dei numeri generati (bombe), la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
//La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
var attempts = 3;
var games = [];

for (var i = 0; i < attempts; i++) {
  var guess = guessUser();

  if (guess !== games[i]) {
    games.push(guess);
  } else if (guess === 0){
    alert("Errore!");
  } else if (guess > 100){
    alert("Errore!");
  } else if (guess === games[i]){
    alert("Errore!");
  } else if (guess === arrBombs[i]) {
    alert("GAME OVER!");
  } else if (games.length == attempts) {
    alert("HAI VINTO!!!");
  }
}

switch (guess !== games[i]) {
  case expression:

    break;
  default:

}

console.log(games);


//DEFINIZIONE FUNZIONI
//Generatore di bombe
function bombGenerator() {
  var x = Math.floor( Math.random() * (100 - 1 + 1)) + 1;

  return x;
}
//Tentativi utente
function guessUser() {
  var x = parseInt( prompt("Inserisci un numero, tenta la fortuna!"));

  return x;
}
