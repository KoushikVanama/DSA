function countOfDivisors(A) {
  let n = A.length;
  let maxElem = -1;
  for (let i = 0; i < n; i++) {
    maxElem = Math.max(maxElem, A[i]);
  }

  let cd = new Array(maxElem + 1).fill(0);
  // sieve
  for (let i = 1; i <= maxElem; i++) {
    for (j = i; j <= maxElem; j += i) {
      cd[j] += 1;
    }
  }

  let res = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    res[i] = cd[A[i]];
  }
  return res;
}
console.log(countOfDivisors([2, 3, 4, 5]));
console.log(countOfDivisors([8, 9, 10]));
