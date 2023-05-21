function firstMissingInteger(A) {
  A = A.map((item) => item - 1);
  let n = A.length;
  let i = 0;
  while (i < n) {
    if (A[i] >= 0 && A[i] < n) {
      if (A[A[i]] != A[i]) {
        // swap(A, i, A[i]); // TLE
        [A[A[i]], A[i]] = [A[i], A[A[i]]];
        i--; // to check the same index again after swap if i=A[i]
      }
    }
    i++;
  }
  for (let i = 0; i < n; i++) {
    if (i != A[i]) return i + 1;
  }
  return n + 1;
}
function swap(A, ind1, ind2) {
  let temp = A[ind1];
  A[ind1] = A[ind2];
  A[ind2] = temp;
}

console.log(firstMissingInteger([1, 2, 0])); // 3
console.log(firstMissingInteger([3, 4, -1, 1])); // 2
console.log(firstMissingInteger([-8, -7, -6])); // 1
