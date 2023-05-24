function mergeIntervals(A, B) {
  let result = [];
  A.push(B);
  A = A.sort((a, b) => {
    if (a[0] == b[0]) return -a[1] + b[1];
    return a[0] - b[0];
  });
  let n = A.length;
  let s = A[0][0];
  let e = A[0][1];
  for (let i = 1; i < n; i++) {
    let l = A[i][0];
    let r = A[i][1];
    if (e >= l) {
      e = Math.max(e, r);
    } else {
      result.push([s, e]);
      s = l;
      e = Math.max(e, r);
    }
  }
  result.push([s, e]);
  return result;
}

console.log(
  mergeIntervals(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
); // [[1, 5], [6, 9]]
console.log(
  mergeIntervals(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 6]
  )
); // [[1,9]]
console.log(
  mergeIntervals(
    [
      [1, 2],
      [3, 6],
      [8, 10],
    ],
    [0, 0]
  )
);
