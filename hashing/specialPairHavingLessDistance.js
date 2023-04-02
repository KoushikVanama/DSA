class SpecialPairHavingLessDistance {
  constructor() {}
  solve(A) {
    let obj = {};
    let result = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < A.length; i++) {
      if (obj[A[i]]) {
        let temp = obj[A[i]];
        temp.push(i);
        obj[A[i]] = temp;
      } else {
        obj[A[i]] = [i];
      }
    }
    Object.values(obj).forEach((elem) => {
      if (elem.length >= 2) {
        result = Math.min(result, Math.abs(elem[0] - elem[1]));
      }
    });
    return result == Number.MAX_SAFE_INTEGER ? -1 : result;
  }
}

const sphld = new SpecialPairHavingLessDistance();

// console.log(sphld.solve([7, 1, 3, 4, 1, 5, 7]));
console.log(sphld.solve([7, 0, 3, 4, 1, 5, 6]));
