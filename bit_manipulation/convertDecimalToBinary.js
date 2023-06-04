function convDecToBinary(A) {
  let ans = [];
  while (A > 0) {
    ans.push(A % 2);
    A = Math.floor(A / 2);
  }
  return ans.reverse().join("");
}

console.log(convDecToBinary(10));
