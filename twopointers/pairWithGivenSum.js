class PairWithGivenSum {
  constructor() {}
  solve(A, B) {
    let i = 0;
    let j = A.length - 1;
    while (i < j) {
      if (A[i] + A[j] == B) {
        return [i, j];
      } else if (A[i] + A[j] < B) {
        i++;
      } else {
        j--;
      }
    }
    return [-1, -1];
  }
}

const pwgs = new PairWithGivenSum();
console.log(pwgs.solve([1, 2, 3, 4, 5], 5));
console.log(pwgs.solve([5, 10, 20, 100, 105], 110));
console.log(pwgs.solve([5, 25], 7));
