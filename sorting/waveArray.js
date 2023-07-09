function waveArray(A) {
  A.sort((a, b) => a - b);
  for (let i = 1; i < A.length; i += 2) {
    swap(A, i, i - 1);
  }
  return A;
}
function swap(A, i, j) {
  let temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}

console.log(waveArray([1, 2, 3, 4])); // [2,1,4,3]
console.log(waveArray([1, 2])); // [2,1]
