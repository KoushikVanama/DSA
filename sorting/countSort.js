function countSort(A) {
  let max = 0;
  A.forEach((elem) => {
    max = elem > max ? elem : max;
  });
  let res = [];
  let freqArr = new Array(Number(max) + 1).fill(0);
  for (let i = 0; i <= A.length; i++) {
    freqArr[A[i]] += 1;
  }
  for (let i = 0; i <= max; i++) {
    for (let j = 1; j <= freqArr[i]; j++) {
      res.push(i);
    }
  }
  return res;
}

console.log(countSort([1, 3, 1])); // [1, 1, 3]
console.log(countSort([4, 2, 1, 3])); // [1, 2, 3, 4]
console.log(countSort([10, 9, 8])); // [8, 9, 10]
