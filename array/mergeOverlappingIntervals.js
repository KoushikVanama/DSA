function mergeOverlappingIntervals(A) {
  A = A.sort((a, b) => {
    if (a[0] == b[0]) return -a[1] + b[1];
    return a[0] - b[0];
  });
  let result = [];
  let n = A.length;
  let s = A[0][0];
  let e = A[0][1];
  for (let i = 1; i < n; i++) {
    let l = A[i][0];
    let r = A[i][1];
    //overlapping condition
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
  mergeOverlappingIntervals([
    [1, 3],
    [15, 18],
    [2, 6],
    [2, 7],
    [8, 10],
  ])
); // [[1,7],[8,10],[15,18]]
console.log(
  mergeOverlappingIntervals([
    [1, 2],
    [2, 4],
    [3, 10],
    [11, 18],
  ])
); // [[1,10],[11,18]]
