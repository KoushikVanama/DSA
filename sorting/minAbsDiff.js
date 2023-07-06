function minAbsDiff(A) {
  A.sort((a, b) => a - b);
  let min = Infinity;
  for (let i = 1; i < A.length; i++) {
    min = Math.min(min, Math.abs(A[i] - A[i - 1]));
  }
  return min;
}

console.log(minAbsDiff([1, 2, 3, 4, 5])); // 1
console.log(minAbsDiff([5, 17, 100, 11])); // 6
