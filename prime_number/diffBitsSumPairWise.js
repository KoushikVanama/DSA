/**
 * 
 * We define f(X, Y) as the number of different corresponding bits in the binary representation of X and Y.
For example, f(2, 7) = 2, since the binary representation of 2 and 7 are 010 and 111, respectively. The first and the third bit differ, so f(2, 7) = 2.

You are given an array of N positive integers, A1, A2,..., AN. Find sum of f(Ai, Aj) for all pairs (i, j) such that 1 ≤ i, j ≤ N. Return the answer modulo 109+7.
 */
function diffBitsSumPairWise(A) {
  let n = A.length;
  let mod = 1000000007;
  let ans = 0;
  for (let b = 0; b < 32; b++) {
    let count = 0;
    for (let i = 0; i < n; i++) {
      if (A[i] & (1 << b)) {
        count++;
      }
    }
    ans += 2 * count * (n - count);
    ans %= mod;
  }
  return ans;
}

console.log(diffBitsSumPairWise([1, 3, 5]));
console.log(diffBitsSumPairWise([2, 3]));
