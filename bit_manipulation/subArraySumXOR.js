function subArraySumXOR(A) {
  let ans = 0;
  let n = A.length;
  for (let b = 0; b < 32; b++) {
    set = 0;
    unset = 0;
    let count = 0;
    for (let i = 0; i < n; i++) {
      if (((A[i] >> b) & 1) == 1) {
        set++;
      } else {
        unset++;
      }
    }
    count = set * unset;
    ans += count * (1 << b);
  }
  return ans;
}

console.log(subArraySumXOR([3, 6, 5, 8]));
