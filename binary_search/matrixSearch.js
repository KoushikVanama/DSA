function matrixSearch(A, B) {
  let m = A.length; // rows
  let n = A[0].length; // cols
  let l = 0;
  let r = m * n - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let row = Math.floor(mid / n);
    let col = Math.floor(mid % n);
    if (A[row][col] == B) return 1;
    else if (A[row][col] < B) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return 0;
}

console.log(
  matrixSearch([[1, 3, 5, 7], [(10, 11, 16, 20)], [(23, 30, 34, 50)]], 3)
); // 1
console.log(matrixSearch([[5, 17, 100, 111], [(119, 120, 127, 131)]], 3)); // 0
