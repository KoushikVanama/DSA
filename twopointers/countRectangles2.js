class CountRectangles2 {
  constructor() {}
  solve(A, B) {
    let ans = 0;
    let n = A.length;
    let l = 0;
    let r = n - 1;
    let mod = 1e9 + 7;
    while (l < n && r >= 0) {
      if (A[l] * A[r] < B) {
        ans = (ans + r + 1) % mod;
        l++;
      } else {
        r--;
      }
    }
    return ans;
  }
}

const cr = new CountRectangles2();

console.log(cr.solve([1, 2], 5)); // 4
console.log(cr.solve([1, 2], 1)); // 0
console.log(cr.solve([1, 2, 3, 4, 5], 5)); // 8
