function findMax(A) {
  let n = A.length;
  let prefGCD = JSON.parse(JSON.stringify(A));
  let suffGCD = JSON.parse(JSON.stringify(A));
  let val1 = prefGCD[0];
  for (let i = 0; i <= n - 1; i++) {
    prefGCD[i] = gcd(val1, prefGCD[i]);
    val1 = prefGCD[i];
  }
  let val2 = suffGCD[n - 1];
  for (let i = n - 1; i >= 0; i--) {
    suffGCD[i] = gcd(val2, suffGCD[i]);
    val2 = suffGCD[i];
  }
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (i == 0) {
      ans = Math.max(ans, suffGCD[i + 1]);
    } else if (i == n - 1) {
      ans = Math.max(ans, prefGCD[i - 1]);
    } else {
      ans = Math.max(ans, gcd(prefGCD[i - 1], suffGCD[i + 1]));
    }
  }
  return ans;
}

function gcd(A, B) {
  if (A == 0) return B;
  if (B == 0) return A;
  if (A == 1 || B == 1) return 1;
  if (A > B) return gcd(B % A, A);
  return gcd(A, B % A);
}

console.log(findMax([12, 15, 18]));
console.log(findMax([5, 15, 30]));
console.log(findMax([3, 9, 6, 8, 3]));
