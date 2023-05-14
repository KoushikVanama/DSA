/**
 * Given an array A of N integers, find three integers in A such that the sum is closest to a given number B. Return the sum of those three integers.

Assume that there will only be one solution.
 */
class Sum3 {
  constructor() {}
  solve(A, B) {
    let n = A.length;
    let sum = Infinity;
    A.sort((a, b) => a - b);
    for (let i = 0; i < n; i++) {
      let cur = 0;
      let l = i + 1;
      let r = n - 1;
      while (l < r) {
        cur = A[l] + A[r] + A[i];
        if (Math.abs(B - cur) < Math.abs(B - sum)) {
          sum = cur;
        }
        if (cur < B) {
          l++;
        } else {
          r--;
        }
      }
    }
    return sum;
  }
}

const s3 = new Sum3();

console.log(s3.solve([-1, 2, 1, -4], 1)); // 2
console.log(s3.solve([1, 2, 3], 6)); // 6
console.log(s3.solve([2, 2, 2, 3], 8)); // 7
