/**
 * Given two arrays of integers A and B, Sort A in such a way that the relative order among the elements will be the same as those are in B.
For the elements not present in B, append them at last in sorted order.

Return the array A after sorting from the above method.
 */
class SortArrayInGivenOrder {
  constructor() {}
  solve(A, B) {
    let unCommonElems = [];
    let commonElems = [];
    let result = [];
    let i = 0;
    for (let i = 0; i < A.length; i++) {
      if (B.indexOf(A[i]) == -1) {
        unCommonElems.push(A[i]);
      } else {
        commonElems.push(A[i]);
      }
    }
    unCommonElems = unCommonElems.sort((a, b) => a - b);
    while (i < B.length) {
      for (let x of commonElems) {
        if (x == B[i]) {
          result.push(x);
        }
      }
      i++;
    }
    return result.concat(unCommonElems);
  }
}

const saigo = new SortArrayInGivenOrder();

console.log(saigo.solve([10, 2, 18, 16, 16, 16], [3, 13, 2, 16, 4, 19]));
// console.log(saigo.solve([15, 5, 10, 6, 14], [8, 16, 6, 2, 13, 1, 12, 3, 14]));
