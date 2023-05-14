class SubArrayWithGivenSum {
  constructor() {}
  solve(A, B) {
    let l = 0,
      r = 0;
    let n = A.length;
    let sum = A[l];
    while (l <= r && r < A.length) {
      if (sum == B) {
        return A.slice(l, r + 1);
      } else if (sum < B) {
        r++;
        if (r < n) {
          sum += A[r];
        }
      } else {
        sum -= A[l];
        l++;
        // this below if code block needed if we have large nums in beginning of array
        // if the array is sorted no need of this code block
        if (l > r && l < n - 1) {
          r++;
          sum += A[r];
        }
      }
    }
    return [-1];
  }
}

const sawgs = new SubArrayWithGivenSum();
console.log(sawgs.solve([1, 2, 3, 4, 5], 5));
console.log(sawgs.solve([5, 10, 20, 100, 105], 110));
console.log(sawgs.solve([15, 2, 5, 6, 9], 7));
