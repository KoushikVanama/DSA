function singleNumberII(A) {
  let ans = 0;
  for (let b = 0; b < 32; b++) {
    let count = 0;
    for (let i = 0; i < A.length; i++) {
      count = count + ((A[i] >> b) & 1);
    }
    if (count % 3 == 1) {
      ans = (1 << b) | ans;
    }
  }
  return ans;
}

console.log(singleNumberII([1, 2, 2, 2])); // 1
console.log(singleNumberII([1, 2, 8, 3, 3, 2, 2, 3, 1, 1])); // 8
