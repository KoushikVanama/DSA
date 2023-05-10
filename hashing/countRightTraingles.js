class CountRightTraingles {
  constructor() {}
  solve(A, B) {
    let m1 = new Map();
    // stores the frequency of each y coordinate
    let m2 = new Map();
    for (let i = 0; i < A.length; i++) {
      m1.set(A[i], (m1.get(A[i]) || 0) + 1);
      m2.set(B[i], (m2.get(B[i]) || 0) + 1);
    }
    let ans = 0,
      mod = 1000000007;
    for (let i = 0; i < A.length; i++) {
      // counts the no of triangles that forms a right angle at the i-th point
      let val = ((m1.get(A[i]) - 1) * (m2.get(B[i]) - 1)) % mod;
      ans = (ans + val) % mod;
    }
    return ans;
  }
}

const crt = new CountRightTraingles();
console.log(crt.solve([1, 1, 2], [1, 2, 1]));
console.log(crt.solve([1, 1, 2, 3, 3], [1, 2, 1, 2, 1]));
