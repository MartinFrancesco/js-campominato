//ESERCIZIO CAMPO-MINATO
//Il computer deve generare 16 numeri casuali (bombe) tra 1 e 100.
//I numeri non possono essere duplicati
var arrBombs = [];
var arrAttempts =

for (var i = 0; i < 16; i++) {
  var bomb = bombGenerator();

  if (bomb !== arrBombs[i]) {
    arrBombs.push(bomb);
  }
}

console.log(arrBombs);

//In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//L'utente non può inserire più volte lo stesso numero.
for (var i = 0; i < 3; i++) {
  var guess = guessUser();

  if (guess > 100) {
    alert("Errore!");
  } else if (guess === 0){
    alert("Errore!");
  }
}





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
