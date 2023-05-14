/**
 * Find i, j, k such that : max(abs(A[i] - B[j]), abs(B[j] - C[k]), abs(C[k] - A[i])) is minimized.

Return the minimum max(abs(A[i] - B[j]), abs(B[j] - C[k]), abs(C[k] - A[i])).
 */
class Array3Pointers {
  constructor() {}
  solve(A, B, C) {
    let x = A.length;
    let y = B.length;
    let z = C.length;
    let n = 0,
      m = 0,
      l = 0;
    let ans = Infinity;
    while (n < x && m < y && l < z) {
      let min = Math.min(A[n], B[m], C[l]);
      let diff = Math.max(A[n], B[m], C[l]) - Math.min(A[n], B[m], C[l]);
      if (diff > min) {
        if (min == A[n]) {
          n++;
        } else if (min == B[m]) {
          m++;
        } else {
          l++;
        }
      } else {
        ans = Math.min(diff, ans);
        if (min == A[n]) {
          n++;
        } else if (min == B[m]) {
          m++;
        } else {
          l++;
        }
      }
    }
    return ans;
  }
}

const a3p = new Array3Pointers();
console.log(a3p.solve([1, 4, 10], [2, 15, 20], [10, 12])); // 5
console.log(a3p.solve([3, 5, 6], [2], [3, 4], 13)); // 1
console.log(a3p.solve([1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1])); // 0
