class CountSubArraysUnique {
  constructor() {}
  solve(A) {
    let se = new Set();
    let ans = 0;
    let N = A.length,
      l = 0;
    for (let r = 0; r < N; r++) {
      // check if A[r] is already there in the present window
      while (se.has(A[r])) {
        se.delete(A[l]);
        l++;
      }
      // add the subarrays ending at position r
      ans += r - l + 1;
      se.add(A[r]);
    }
    return ans % (1e9 + 7);
  }
}

const csau = new CountSubArraysUnique();
console.log(csau.solve([1, 1, 3]));
console.log(csau.solve([2, 1, 2]));
console.log(csau.solve([2, 1, 2, 5, 6, 7, 21]));
