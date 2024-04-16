const toParseArray = new Array(100).fill(0).map((elem, index) => index + 1);
const numberToGuess = Math.floor(Math.random() * 100);

let answer = 0;
let numberOfTries = 0;

for (let i = 0; i < toParseArray.length; i++) {
  if (toParseArray[i] === numberToGuess) {
    numberOfTries++;
    answer = toParseArray[i];
    break;
  } else if (toParseArray[i] !== numberToGuess) {
    numberOfTries++;
    continue;
  }
}

console.log(`Nombre à deviner : ${numberToGuess}`);
console.log(`Réponse : ${answer}`);
console.log(`Trouvée en ${numberOfTries} tentatives`);
