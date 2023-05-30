/**
 * 
 * A lucky number is a number that has exactly 2 distinct prime divisors.

You are given a number A, and you need to determine the count of lucky numbers between the range 1 to A (both inclusive).
 */
function luckyNumbers(A) {
  let res = [];
  let isPrime = new Array(A + 1).fill(0);
  for (let i = 2; i <= A; i++) {
    if (isPrime[i] == 0) {
      for (let j = 2 * i; j <= A; j += i) {
        isPrime[j] += 1;
      }
    }
  }
  isPrime.map((item, index) => {
    if (item == 2) res.push(index);
  });
  return res;
}

console.log(luckyNumbers(8));
console.log(luckyNumbers(12));
