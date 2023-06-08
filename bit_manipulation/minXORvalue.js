function minXORvalue(A) {
  let res = Infinity;
  A.sort((a, b) => a - b);
  let n = A.length;
  for (let i = 0; i < n - 1; i++) {
    res = Math.min(res, A[i] ^ A[i + 1]);
  }
  return res;
}

console.log(minXORvalue([0, 2, 5, 7]));
console.log(minXORvalue([0, 4, 7, 9]));
