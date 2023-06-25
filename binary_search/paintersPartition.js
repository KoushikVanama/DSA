/**
 *
 * @param {Painters available} A
 * @param {B units of time taken per 1 unit of board} B
 * @param {Boards lengths} C
 */

function paintersPartition(A, B, C) {
  let mod = 10000003;

  let max = C[0];
  let total = 0;
  for (let i = 0; i < C.length; i++) {
    if (C[i] > max) max = C[i];
    total += C[i];
  }
  let l = max * B;
  let r = total * B;
  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    if (isPossible(A, B, C, mid)) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l % mod;
}

// minNoOfPainters problem
function isPossible(painters, T, Boards, midTime) {
  let count = 1;
  let time = midTime;
  for (let i = 0; i < Boards.length; i++) {
    if (Boards[i] * T > midTime) return false;
    if (Boards[i] * T <= time) {
      time -= T * Boards[i];
    } else {
      count++;
      time = midTime - Boards[i] * T;
    }
  }
  if (count <= painters) return true;
  return false;
}

console.log(paintersPartition(2, 2, [5, 3, 6, 1, 9])); // 28
console.log(paintersPartition(2, 5, [1, 10])); // 50
console.log(paintersPartition(10, 1, [1, 8, 11, 3])); // 11
