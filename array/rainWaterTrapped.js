function rainWaterTrapped(A) {
  let n = A.length;
  let ans = 0;
  let maxR = [];
  for (let i = n - 2; i >= 0; i--) {
    maxR[n - 1] = A[n - 1];
    maxR[i] = Math.max(A[i], maxR[i + 1]);
  }
  let maxL = [A[0]];
  for (let i = 1; i < n; i++) {
    maxL[i] = Math.max(A[i], maxL[i - 1]);
  }
  for (let i = 1; i < n - 1; i++) {
    ans += Math.min(maxL[i], maxR[i]) - A[i];
  }
  return ans;
}

console.log(rainWaterTrapped([0, 1, 0, 2]));
console.log(rainWaterTrapped([1, 2]));
