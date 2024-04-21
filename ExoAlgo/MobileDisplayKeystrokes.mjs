function mobileKeyboard(str) {
  //have fun ^.^
  const keyboardArray = [
    ["1"],
    ["2", "a", "b", "c"],
    ["3", "d", "e", "f"],
    ["4", "g", "h", "i"],
    ["5", "j", "k", "l"],
    ["6", "m", "n", "o"],
    ["7", "p", "q", "r", "s"],
    ["8", "t", "u", "v"],
    ["9", "w", "x", "y", "z"],
    ["*"],
    ["0"],
    ["#"],
  ];

  let total = 0;
  let count = 0;

  let splitStr = str.split("");
  console.log(splitStr);

  for (let i = 0; i < keyboardArray.length; i++) {
    for (let j = 0; j < splitStr.length; j++) {
      if (count !== splitStr.length) {
        if (keyboardArray[i].includes(splitStr[j])) {
          count++;
          total = total + (keyboardArray[i].indexOf(splitStr[j]) + 1);
        }
      } else {
        break;
      }
    }
  }

  return total;
}

console.log(mobileKeyboard("123"));
