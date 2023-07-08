function selectionSort(A) {
  for (let i = A.length - 1; i >= 0; i--) {
    let max_index = 0;
    for (let j = 1; j <= i; j++) {
      if (A[j] > A[max_index]) {
        max_index = j;
      }
    }
    swap(A, i, max_index);
  }
  return A;
}

function swap(A, i, j) {
  let temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}

console.log(selectionSort([2, 1, 4, 3, 2], 3));
console.log(selectionSort([2, 1], 2));
