function moveZeros(arr) {
  let countZero = 0;
  const newArr = arr.filter(e => {
    if (e === 0) {
      countZero++;
    }
    return e !== 0;
  });
  const endArr = new Array(countZero).fill(0);
  const finalArr = [...newArr, ...endArr];
  return finalArr;
}

console.log(moveZeros([1, 2, 3, 0, 3, 0, 8, 0]));
