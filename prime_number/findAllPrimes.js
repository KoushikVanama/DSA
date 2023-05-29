function findAllPrimes(A) {
  let isPrime = new Array(A + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;
  let res = [];
  for (let i = 2; i * i <= A; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= A; j = j + i) {
        isPrime[j] = false;
      }
    }
  }
  isPrime.map((item, index) => {
    if (item) res.push(index);
  });
  return res;
}

console.log(findAllPrimes(13));
