function continuousSumQuery(A, B) {
  let coins = new Array(A).fill(0);
  for (let i = 0; i < B.length; i++) {
    let s = B[i][0] - 1;
    let e = B[i][1];
    let val = B[i][2];
    coins[s] += val;
    if (e < A) coins[e] -= val;
  }
  for (let i = 1; i < coins.length; i++) {
    coins[i] += coins[i - 1];
  }
  return coins;
}

console.log(
  continuousSumQuery(5, [
    [1, 2, 10],
    [2, 3, 20],
    [2, 5, 25],
  ])
);
console.log(
  continuousSumQuery(5, [
    [1, 1, 5],
    [2, 2, 5],
    [3, 4, 5],
    [5, 5, 5],
  ])
);
