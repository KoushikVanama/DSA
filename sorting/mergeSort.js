function mergeSort(A) {
  mergeSortFn(A, 0, A.length - 1);
}
function mergeSortFn(A, start, end) {
  if (start == end) return;
  let mid = Math.floor((end - start) / 2) + start;
  mergeSortFn(A, start, mid);
  mergeSortFn(A, mid + 1, end);
  merge(A, start, mid, end);
}
function merge(A, start, mid, end) {
  let i = start; // points 1st half
  let j = mid + 1; // points 2nd half
  let C = new Array(end - start + 1);
  for (let k = 0; k < C.length; k++) {
    if (i > mid) {
      C[k] = A[j];
      j++;
    } else if (j > end) {
      C[k] = A[i];
      i++;
    } else if (A[i] <= A[j]) {
      C[k] = A[i];
      i++;
    } else {
      C[k] = A[j];
      j++;
    }
  }
  for (let k = 0; k < C.length; k++) {
    A[start + k] = C[k];
  }
}

let example1 = [1, 3, 2];
mergeSort(example1);
console.log(example1);

let example2 = [3, 4, 1, 2];
mergeSort(example2);
console.log(example2);
