/**
 *
 * @param {No of boards} B
 * @param {T units of time taken per 1 unit of board} T
 * @param {Total time} X
 */

function minNoOfPainters(B, T, X) {
  let count = 1;
  let time = X;
  for (let i = 0; i < B.length; i++) {
    if (B[i] * T > X) return -1;
    if (B[i] * T <= time) {
      time -= T * B[i];
    } else {
      count++;
      time = X - B[i] * T;
    }
  }
  return count;
}

console.log(minNoOfPainters([5, 3, 6, 1, 9], 2, 15)); // -1
console.log(minNoOfPainters([5, 3, 6, 1, 9], 2, 20)); // 3
console.log(minNoOfPainters([5, 3, 6, 1, 9], 2, 30)); // 2
