class PairsWithGivenSum {
  constructor() {}
  solve(A, B) {
    let l = 0;
    let n = A.length;
    let r = n - 1;
    let ans = 0;
    let mod = 1e9 + 7;
    while (l < r) {
      if (A[l] + A[r] == B) {
        if (A[l] == A[r]) {
          let range = (r - l + 1) % mod;
          ans += Math.floor((range * (range - 1)) / 2) % mod;
          break;
        }
        let a = 1,
          b = 1;
        while (A[l + 1] == A[l] && l < n) {
          a++;
          l++;
        }
        while (A[r - 1] == A[r] && r > 0) {
          b++;
          r--;
        }
        ans += (a * b) % mod;
        l++;
        r--;
      } else if (A[l] + A[r] < B) {
        l++;
      } else {
        r--;
      }
    }
    return ans;
  }
}

const pwgs = new PairsWithGivenSum();

console.log(pwgs.solve([1, 1, 1], 2));
console.log(pwgs.solve([1, 1], 2));
console.log(pwgs.solve([1, 1, 1, 2, 2], 3));
