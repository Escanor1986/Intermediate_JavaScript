function pigIt(str) {
  const newString = str.split(" ").map(e => {
    let begin = e.slice(1);
    let end = e.slice(0, 1);
    return begin + end + "ay";
  });

  let sentence = newString.join(" ");
  return sentence;
}

console.log(pigIt("Pig latin is cool")); // igPay atinlay siay oolcay
console.log(pigIt("Hello world !")); // elloHay orldway !
