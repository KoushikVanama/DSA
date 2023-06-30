function replicateSubString(A, B) {
  let freqArr = new Array().fill(0);
  for (let i = 0; i < B.length; i++) {
    freqArr[B.charCodeAt(i)] = (freqArr[B.charCodeAt(i)] || 0) + 1;
  }
  let flag = true;
  Object.values(freqArr).forEach((item) => {
    if (item % A != 0) flag = false;
  });
  return flag ? +flag : -1;
}

console.log(replicateSubString(2, "bbaabb")); // 1
console.log(replicateSubString(2, "bc")); // -1
