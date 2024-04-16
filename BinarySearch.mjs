const toParseArray = new Array(1000).fill(0).map((e, i) => i + 1);
const numberToGuess = Math.floor(Math.random() * 1000);
let numberOfTries = 0;
let answer;

let minIndex = 0;
let maxIndex = toParseArray.length - 1;
let midIndex = Math.floor((minIndex + maxIndex) / 2);

for (let i = minIndex; i <= maxIndex; i++) {
  if (numberToGuess === toParseArray[midIndex]) {
    numberOfTries++;
    answer = toParseArray[midIndex];
    break;
  } else if (numberToGuess < toParseArray[midIndex]) {
    maxIndex = midIndex - 1;
    midIndex = Math.floor((minIndex + maxIndex) / 2);
    numberOfTries++;
    continue;
  } else {
    minIndex = midIndex + 1;
    midIndex = Math.floor((minIndex + maxIndex) / 2);
    numberOfTries++;
    continue;
  }
}

console.log(`Nombre à deviner : ${numberToGuess}`);
console.log(`Réponse : ${answer}`);
console.log(`Trouvée en ${numberOfTries} tentatives`);

//? AVec boucle while

while (minIndex <= maxIndex) {
  const midIndex = Math.floor((minIndex + maxIndex) / 2);
  const guess = toParseArray[midIndex];

  if (guess === numberToGuess) {
    numberOfTries++;
    answer = guess;
    break;
  } else if (guess < numberToGuess) {
    minIndex = midIndex + 1;
  } else {
    maxIndex = midIndex - 1;
  }

  numberOfTries++;
}

console.log(`Nombre à deviner : ${numberToGuess}`);
console.log(`Réponse : ${answer}`);
console.log(`Trouvée en ${numberOfTries} tentatives`);
