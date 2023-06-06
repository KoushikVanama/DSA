function maxANDpair(A) {
  let n = A.length;
  for (let b = 29; b >= 0; b--) {
    let arr = [];
    for (let i = 0; i < n; i++) {
      if (A[i] != undefined && A[i] & BigInt(1 << b)) {
        // why undefined?
        arr.push(A[i]);
      }
    }
    if (arr.length >= 2) {
      A = arr;
    }
  }
  return Number(A[0] & A[1]);
}

console.log(maxANDpair([5, 6, 7]));
console.log(maxANDpair([53, 39, 88]));
console.log(maxANDpair([38, 44, 84, 12]));
