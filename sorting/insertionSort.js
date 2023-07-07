function insertionSort(A) {
  let n = A.length;
  let temp = 0;
  for (let i = 1; i < n; i++) {
    temp = A[i];
    let j = i - 1;
    while (j >= 0 && A[j] > temp) {
      A[j + 1] = A[j];
      j--;
    }
    A[j + 1] = temp;
  }
  return A;
}

console.log(insertionSort([4, 1, 3])); // [1, 3, 4]
console.log(insertionSort([2, 4, 5])); // [2, 4, 5]
