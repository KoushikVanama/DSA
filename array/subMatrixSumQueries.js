function subMatrixSumQueries(A, B, C, D, E) {
  let PFA = [...Array(A.length + 1)].map(() => Array(A[0].length + 1).fill(0));
  let mod = 1000000007;
  for (let i = 1; i <= A.length; i++) {
    for (let j = 1; j <= A[0].length; j++) {
      PFA[i][j] +=
        A[i - 1][j - 1] + PFA[i][j - 1] + PFA[i - 1][j] - PFA[i - 1][j - 1];
      PFA[i][j] %= mod;
    }
  }
  let result = [];
  for (let i = 0; i < B.length; i++) {
    let b = B[i];
    let c = C[i];
    let d = D[i];
    let e = E[i];
    result.push(
      (((PFA[d][e] - PFA[d][c - 1] - PFA[b - 1][e] + PFA[b - 1][c - 1]) % mod) +
        mod) %
        mod
    );
  }
  return result;
}
console.log(
  subMatrixSumQueries(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [1, 2],
    [1, 2],
    [2, 3],
    [2, 3]
  )
);
