class PermutationsOfAinB {
  constructor() {}
  solve(A, B) {
    let count = 0;
    let N = A.length;
    let M = B.length;
    let FA = new Array(26).fill(0);
    let FB = new Array(26).fill(0);
    for (let i = 0; i < N; i++) {
      FA[A.charCodeAt(i) - "a".charCodeAt(0)] += 1;
    }
    for (let i = 0; i < N; i++) {
      FB[B.charCodeAt(i) - "a".charCodeAt(0)] += 1;
    }
    count += compare(FA, FB);
    for (let i = N; i < M; i++) {
      FB[B[i - N].charCodeAt(0) - "a".charCodeAt(0)] -= 1;
      FB[B[i].charCodeAt(0) - "a".charCodeAt(0)] += 1;
      count += compare(FA, FB);
    }
    return count;
  }
}
function compare(arr1, arr2) {
  for (let i = 0; i < 26; i++) {
    if (arr1[i] != arr2[i]) {
      return 0;
    }
  }
  return 1;
}

const poainb = new PermutationsOfAinB();

console.log(poainb.solve("abc", "abcbacabc"));
console.log(poainb.solve("aca", "acaa"));
