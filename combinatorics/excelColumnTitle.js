function excelColumnTitle(A) {
  let title = "";
  let base = "A".charCodeAt(0);
  while (A > 0) {
    let rem = A % 26;
    if (!rem) {
      rem = 26;
    }
    title = String.fromCharCode(base + rem - 1) + title;
    A -= rem;
    A = A / 26;
  }
  return title;
}

console.log(excelColumnTitle(30)); // AD
console.log(excelColumnTitle(52)); // AZ
console.log(excelColumnTitle(26)); // Z
console.log(excelColumnTitle(1000)); // ALL
