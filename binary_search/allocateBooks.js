/**
 * Given an array of integers A of size N and an integer B.

The College library has N books. The ith book has A[i] number of pages.

You have to allocate books to B number of students so that the maximum number of pages allocated to a student is minimum.

A book will be allocated to exactly one student.
Each student has to be allocated at least one book.
Allotment should be in contiguous order, for example: A student cannot be allocated book 1 and book 3, skipping book 2.
Calculate and return that minimum possible number.

NOTE: Return -1 if a valid assignment is not possible.
 * 
 */

function allocateBooks(A, B) {
  let n = A.length;
  if (B > n) return -1;
  let max = A[0];
  let total = 0;
  for (let i = 0; i < n; i++) {
    if (A[i] > max) max = A[i];
    total += A[i];
  }
  let l = max;
  let r = total;
  let ans = 0;
  while (l <= r) {
    let mid = Math.floor((r - l) / 2) + l;
    if (isPossible(A, B, mid)) {
      ans = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return ans;
}

function isPossible(A, B, mid) {
  let count = 1;
  let totalPages = mid;
  for (let i = 0; i < A.length; i++) {
    if (A[i] <= totalPages) {
      totalPages -= A[i];
    } else {
      count++;
      totalPages = mid - A[i];
    }
  }
  return count <= B;
}

console.log(allocateBooks([12, 34, 67, 90], 2)); // 113
console.log(allocateBooks([12, 15, 78], 4)); // -1
console.log(
  allocateBooks(
    [
      97, 26, 12, 67, 10, 33, 79, 49, 79, 21, 67, 72, 93, 36, 85, 45, 28, 91,
      94, 57, 1, 53, 8, 44, 68, 90, 24,
    ],
    26
  )
); // 97
