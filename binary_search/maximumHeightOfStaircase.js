/**
 * Given an integer A representing the number of square blocks. The height of each square block is 1. The task is to create a staircase of max-height using these blocks.

The first stair would require only one block, and the second stair would require two blocks, and so on.

Find and return the maximum height of the staircase.
 */
function maximumHeightOfStaircase(A) {
  let l = 0;
  let r = A;
  let ans = 0;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if ((mid * (mid + 1)) / 2 <= A) {
      ans = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return ans;
}

console.log(maximumHeightOfStaircase(10)); // 4
console.log(maximumHeightOfStaircase(20)); // 5
