function countOfDivisorsFrom1toN(A) {
  let cd = new Array(A + 1).fill(0);
  for (let i = 1; i <= A; i++) {
    for (j = i; j <= A; j += i) {
      cd[j] += 1;
    }
  }
  return cd.slice(1);
}
console.log(countOfDivisorsFrom1toN(5));
