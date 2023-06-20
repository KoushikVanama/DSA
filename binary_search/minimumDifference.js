/**
 * 
 *You are given a 2-D matrix C of size A × B.
You need to build a new 1-D array of size A by taking one element from each row of the 2-D matrix in such a way that the cost of the newly built array is minimized.

The cost of an array is the minimum possible value of the absolute difference between any two adjacent elements of the array.

So if the newly built array is X, the element picked from row 1 will become X[1], element picked from row 2 will become X[2], and so on.

Determine the minimum cost of the newly built array.
 */
function minimumDifference(A, B, C) {
  C.forEach((item) => {
    item.sort((a, b) => a - b);
  });
  let ans = Infinity;
  for (let i = 0; i < A - 1; i++) {
    for (let j = 0; j < B; j++) {
      let lBound = lowerBound(C[i + 1], C[i][j]);
      let uBound = upperBound(C[i + 1], C[i][j]);
      ans = Math.min(
        ans,
        Math.min(Math.abs(uBound - C[i][j]), Math.abs(lBound - C[i][j]))
      );
    }
  }
  return ans;
}

function lowerBound(arr, X) {
  let l = 0;
  let r = arr.length - 1;
  let ans = -Infinity;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] < X) {
      l = mid + 1;
    } else {
      ans = arr[mid];
      r = mid - 1;
    }
  }
  return ans;
}
function upperBound(arr, X) {
  let l = 0;
  let r = arr.length - 1;
  let ans = Infinity;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] <= X) {
      ans = arr[mid];
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return ans;
}
console.log(
  minimumDifference(2, 2, [
    [8, 4],
    [6, 8],
  ])
); // 0
console.log(
  minimumDifference(3, 2, [
    [7, 3],
    [2, 1],
    [4, 9],
  ])
); // 1
