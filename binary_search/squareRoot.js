function squareRoot(A) {
  if (A == 0) return 0;
  let l = 1;
  let r = A;
  let ans = 0;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (mid * mid <= A) {
      ans = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return ans;
}

console.log(squareRoot(11)); // 3
console.log(squareRoot(9)); // 3
console.log(squareRoot(2)); // 1
console.log(squareRoot(1)); // 1
console.log(squareRoot(0)); // 0
