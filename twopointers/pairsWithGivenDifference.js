class PairsWithGivenDiff {
  constructor() {}
  solve(A, B) {
    let i = 0;
    let j = 1;
    let n = A.length;
    A.sort((a, b) => a - b);
    let ans = [];
    while (j < n) {
      let x = A[i],
        y = A[j];
      // below if code block is needed if i==j and B=0
      if (i == j) {
        j++;
        continue;
      }
      if (y - x == B) {
        ans.push([i, j]);
        while (i < n && A[i] == x) {
          i++;
        }
        while (j < n && A[j] == y) {
          j++;
        }
      } else if (y - x < B) {
        j++;
      } else {
        i++;
      }
    }
    return ans.length;
  }
}

const pwgd = new PairsWithGivenDiff();
console.log(pwgd.solve([1, 5, 3, 4, 2], 3));
console.log(pwgd.solve([1, 2, 3, 4, 5], 3));
console.log(pwgd.solve([8, 12, 16, 4, 0, 20], 4));
console.log(pwgd.solve([1, 1, 1, 2, 2], 0));
console.log(pwgd.solve([1, 2], 0));
