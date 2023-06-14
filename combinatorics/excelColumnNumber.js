function excelColumnNumber(A) {
  A = [...A].reverse().join("");
  let res = 0;
  let cur = 1;
  [...A].forEach((char) => {
    res += cur * (char.charCodeAt(0) - "A".charCodeAt(0) + 1);
    cur *= 26;
  });
  return res;
}

console.log(excelColumnNumber("AD")); // 30
console.log(excelColumnNumber("AZ")); // 52
console.log(excelColumnNumber("Z")); // 26
console.log(excelColumnNumber("ALL")); // 1000
