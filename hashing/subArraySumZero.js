class SubArraySumZero {
  constructor() {}
  solve(A) {
    let prefixSum = 0;
    let map = new Map();
    let count = 0;
    for (let i = 0; i < A.length; i++) {
      prefixSum += A[i];
      if (prefixSum == 0) {
        count++;
      }
      if (map.has(prefixSum)) {
        count += map.get(prefixSum);
      }
      map.set(prefixSum, map.get(prefixSum) + 1 || 1);
    }
    if (count > 0) {
      return 1;
    }
    return 0;
  }
}

const sasz = new SubArraySumZero();

// console.log(sasz.solve([1, -2, 2, -2, -3, -1, 4, -1]));
// console.log(sasz.solve([-1, 1]));
// console.log(sasz.solve([3, -1, 1, 4, 3, 4, 3]));
console.log(sasz.solve([3, 1, 1, 4, -4, 3]));
