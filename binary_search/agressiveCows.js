/**
 * Farmer John has built a new long barn with N stalls. Given an array of integers A of size N where each element of the array represents the location of the stall and an integer B which represents the number of cows.

His cows don't like this barn layout and become aggressive towards each other once put into a stall. To prevent the cows from hurting each other, John wants to assign the cows to the stalls, such that the minimum distance between any two of them is as large as possible. What is the largest minimum distance?
 */
function agressiveCows(A, C) {
  A.sort((a, b) => a - b);
  let n = A.length;
  let l = 0;
  let r = A[n - 1] - A[0];
  let ans = 0;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (isPossibleWithMidDist(A, mid, C)) {
      ans = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return ans;
}

function isPossibleWithMidDist(A, mid, C) {
  C--;
  let prevCow = A[0];
  for (let i = 1; i < A.length; i++) {
    if (A[i] - prevCow >= mid) {
      C--;
      prevCow = A[i];
    }
  }
  if (C <= 0) return true;
  return false;
}

console.log(agressiveCows([1, 2, 3, 4, 5], 3)); // 2
console.log(agressiveCows([1, 2], 2)); // 1
console.log(agressiveCows([5, 17, 100, 11], 2)); // 95
