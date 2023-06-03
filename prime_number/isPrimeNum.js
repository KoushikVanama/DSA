function isPrimeOrNot(num) {
  let flag = true;
  for (let i = 2; i <= Math.floor(num / 2); i++) {
    if (num % i == 0) flag = false;
  }
  return flag;
}

console.log(isPrimeOrNot(7));
console.log(isPrimeOrNot(8));
