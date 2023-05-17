class IsomorphicStrings {
  constructor() {}
  solve(A, B) {
    if (A.length != B.length) return 0;
    let map = new Map();
    for (let i = 0; i < A.length; i++) {
      if (map.has(A[i]) && map.get(A[i]) !== B[i]) {
        return 0;
      } else {
        map.set(A[i], B[i]);
      }
    }
    if (new Set([...map.values()]).size === map.size) {
      return 1;
    }
    return 0;
  }
}

const is = new IsomorphicStrings();
console.log(is.solve("aba", "xyx"));
console.log(is.solve("cvv", "xyx"));
console.log(is.solve("abc", "abc"));
console.log(is.solve("abc", "xyz"));
