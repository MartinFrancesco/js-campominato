//ESERCIZIO CAMPO-MINATO
//Il computer deve generare 16 numeri casuali (bombe) tra 1 e 100.
//I numeri non possono essere duplicati

var arrBombs = [];

for (var i = 0; i < 16; i++) {
  var bomb = bombGenerator();

  if (bomb !== arrBombs[i]) {
    arrBombs.push(bomb);
  }
}

console.log(arrBombs);







//Definizione funzioni

function bombGenerator() {
  var bombsGenerator = Math.floor( Math.random() * (100 - 1 + 1)) + 1;

  return bombsGenerator;
}
