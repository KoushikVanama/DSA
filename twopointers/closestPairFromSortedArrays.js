class ClosestPairFromSortedArrays {
  constructor() {}
  solve(A, B, C) {
    let n = A.length;
    let m = B.length;
    let l = 0,
      r = m - 1;
    let diff = Infinity;
    let ans = [-1, -1];
    while (l < n && r >= 0) {
      if (Math.abs(A[l] + B[r] - C) < diff) {
        diff = Math.abs(A[l] + B[r] - C);
        ans[0] = A[l];
        ans[1] = B[r];
      } else if (Math.abs(A[l] + B[r] - C) == diff && ans[0] == A[l]) {
        ans[1] = B[r];
      }
      if (A[l] + B[r] > C) {
        r--;
      } else {
        l++;
      }
    }
    return ans;
  }
}

const cpfsa = new ClosestPairFromSortedArrays();
console.log(cpfsa.solve([1, 2, 3, 4, 5], [2, 4, 6, 8], 9)); // [1,8]
console.log(cpfsa.solve([5, 10, 20], [1, 2, 30], 13)); // [10,2]
