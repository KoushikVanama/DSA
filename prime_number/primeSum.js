function primeSum(A) {
  let isPrime = new Array(A + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;
  for (let i = 2; i <= A; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= A; j += i) {
        isPrime[j] = false;
      }
    }
  }
  for (let i = 2; i <= A; i++) {
    if (isPrime[i] && isPrime[A - i]) {
      return [i, A - i];
    }
  }
}

console.log(primeSum(16));
