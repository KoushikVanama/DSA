class CountRectangles {
  constructor() {}
  solve(A, B) {
    let map = new Map();
    let ans = 0;
    for (let i = 0; i < A.length; i++) {
      map[[A[i], B[i]]] = (map[[A[i], B[i]]] || 0) + 1;
    }
    for (let i = 0; i < A.length; i++) {
      for (let j = i + 1; j < A.length; j++) {
        if (A[i] === A[j] || B[i] === B[j]) {
          continue;
        }
        if ((map[[A[i], B[j]]] || 0) != 0 && (map[[A[j], B[i]]] || 0) != 0) {
          ans++;
        }
      }
    }
    return Math.floor(ans / 2);
  }
}

const cr = new CountRectangles();

console.log(cr.solve([1, 1, 2, 2], [1, 2, 1, 2]));
console.log(cr.solve([1, 1, 2, 2, 3, 3], [1, 2, 1, 2, 1, 2]));
