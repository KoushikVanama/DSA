class MaxContinuousOf1s {
  constructor() {}
  solve(A, B) {
    let n = A.length;
    let l = 0,
      r = 0;
    let count = 0;
    let maxCount = -Infinity;
    let limit = B;
    let resultArr = [];
    let [start, end] = [];
    while (r < n) {
      if (A[r] == 1) {
        r++;
        count++;
      } else {
        if (limit > 0) {
          limit--;
          r++;
          count++;
        } else {
          if (count > maxCount) {
            [start, end] = [l, r - 1];
            maxCount = count;
          }
          if (A[l] == 0) {
            limit++;
          }
          l++;
          count--;
        }
      }
    }
    [start, end] = r - l > maxCount ? [l, r - 1] : [start, end];
    for (let i = start; i <= end; i++) {
      resultArr.push(i);
    }
    return resultArr;
  }
}

const mco1s = new MaxContinuousOf1s();
console.log(mco1s.solve([1, 1, 0, 1, 1, 0, 0, 1, 1, 1], 1)); // [0, 1, 2, 3, 4]
console.log(mco1s.solve([1, 0, 0, 0, 1, 0, 1], 2)); // [3, 4, 5, 6]
console.log(mco1s.solve([0, 1, 1, 1], 0)); // [1, 2, 3]
