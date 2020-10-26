//ESERCIZIO CAMPO-MINATO
//BONUS
//Livello (POSSO METTERLI IN UNA FUNZIONE?!)
var level = parseInt( prompt("Scegli il livello di difficoltà").trim() );
while (isNaN(level) || (level < 0) || (level > 2)) {
  var guess = parseInt( prompt("Il numero deve essere tra 0 e 2!").trim() );
}

switch (level) {
  case 0:
       attempts = 84;
    break;
  case 1:
        attempts = 64;
    break;
  case 2:
        attempts = 34;
    break;
}

//ESERCIZIO!
//Il computer deve generare 16 numeri casuali (bombe) tra 1 e 100.
//I numeri non possono essere duplicati
var arrBombs = [];

for (var i = 1; i < 16; i++) {
  var bomb = bombGenerator();

  if ( ! arrBombs.includes(bomb)) { //oppure potevo scrivere arrBombs.includes(bomb) === false;
    arrBombs.push(bomb);
  }
}

console.log(arrBombs);

//In seguito deve chiedere all'utente (84) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//L'utente non può inserire più volte lo stesso numero.
//Se il numero è presente nella lista dei numeri generati (bombe), la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
//La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
var attempts = 84;
var games = [];

for (var i = 0; i < attempts; i++) {
  var guess = guessUser();

  //Condizioni e regole
  while (isNaN(guess) || (guess === 0) || (guess > 100) || (games.includes(guess))) {
    var guess = parseInt( prompt("Non stai rispettando le regole! Riprova.").trim() );
  }

  if (! arrBombs.includes(guess)) {
     games.push(guess);
     console.log(games);

  } else {
      alert("GAME OVER! Hai provato con successo " + games.length + "volte.");
  }
}

alert("HAI VINTO!");

//DEFINIZIONE FUNZIONI
//Generatore di bombe
function bombGenerator() {
  var x = Math.floor( Math.random() * (100 - 1 + 1)) + 1;

  return x;
}

//Tentativi utente
function guessUser() {
  var x = parseInt( prompt("Inserisci un numero, tenta la fortuna!").trim() );

  return x;
}
