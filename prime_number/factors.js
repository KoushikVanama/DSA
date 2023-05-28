// return factors of given number
function factors(A) {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(A); i++) {
    if (A % i == 0) {
      if (i == A / i) {
        count += 1;
      } else {
        count += 2;
      }
    }
  }
  return count;
}

console.log(factors(25));
