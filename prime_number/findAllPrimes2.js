function findAllPrimes2(A) {
  let divisor = 2;
  let res = [];
  while (A > 2) {
    if (A % divisor == 0) {
      A = A / divisor;
      res.push(divisor);
    } else {
      divisor++;
    }
  }
  return res;
}

console.log(findAllPrimes2(100));
