function rotatedSortedArraySearch(A, B) {
  let l = 0;
  let r = A.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (A[mid] == B) return mid;
    if (B < A[0]) {
      // B is in 2nd part
      if (A[mid] < A[0]) {
        // mid is in 2nd part
        if (A[mid] < B) {
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      } else {
        l = mid + 1;
      }
    } else {
      // B is in 1st part
      if (A[mid] < A[0]) {
        // mid is in 2nd part
        r = mid - 1;
      } else {
        if (A[mid] < B) {
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      }
    }
  }
}

console.log(rotatedSortedArraySearch([4, 5, 6, 7, 0, 1, 2, 3], 4)); // 0
console.log(rotatedSortedArraySearch([9, 10, 3, 5, 6, 8], 5)); // 3
