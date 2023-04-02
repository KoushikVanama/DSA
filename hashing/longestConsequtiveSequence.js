class LongestConsequtiveSequence {
  constructor() {}

  solve(A) {
    let set = new Set();
    let count = 0;
    let result = 0;
    A.forEach((item) => set.add(item));
    for (let i = 0; i < A.length; i++) {
      if (set.has(A[i] - 1)) {
        continue;
      } else {
        let j = 1;
        count = 1;
        while (set.has(A[i] + j)) {
          count++;
          j++;
        }
      }
      result = Math.max(result, count);
    }
    return result;
  }
}

const lcs = new LongestConsequtiveSequence();

console.log(lcs.solve([100, 4, 3, 6, 10, 20, 11, 5, 101]));
