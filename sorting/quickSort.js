function quickSort(A) {
  quickSortFn(A, 0, A.length - 1);
}

function quickSortFn(A, start, end) {
  if (start >= end) return;
  let pivot = partiton(A, start, end);
  quickSortFn(A, start, pivot - 1);
  quickSortFn(A, pivot + 1, end);
}

function partiton(A, start, end) {
  let pe = A[end];
  let i = start;
  for (let j = start; j <= end - 1; j++) {
    if (A[j] < pe) {
      swap(A, i, j);
      i++;
    }
  }
  swap(A, i, end);
  return i;
}

function swap(A, i, j) {
  let temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}

const arr1 = [10, 80, 30, 90, 40, 50, 70];
quickSort(arr1);
console.log(arr1);

const arr2 = [1, 2, 3, 4, 0];
quickSort(arr2);
console.log(arr2);
