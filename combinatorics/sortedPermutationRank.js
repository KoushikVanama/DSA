let mod = 1000003;
function factorial(n) {
  if (n == 0 || n == 1) return 1;
  else return (n * factorial(n - 1)) % mod;
}
function sortedPermutationRank(A) {
  let n = A.length;
  let res = 0;
  for (let i = 0; i < n - 1; i++) {
    let count = 0;
    for (let j = i + 1; j < n; j++) {
      if (A[i] > A[j]) count++;
    }
    res += (count * factorial(n - i - 1)) % mod;
  }
  return (res + 1) % mod;
}

console.log(sortedPermutationRank("acb")); // 2
console.log(sortedPermutationRank("view")); // 15
