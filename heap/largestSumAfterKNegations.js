var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let modify = 0;
  let i = 0;
  while (k > 0) {
    if (nums[i] < nums[modify]) modify = i;
    if (i + 1 < nums.length) i++;
    nums[modify] = -nums[modify];
    k--;
  }
  return nums.reduce((acc, cur) => acc + cur, 0);
};

console.log(largestSumAfterKNegations([24, -68, -29, -9, 84], 5));
console.log(
  largestSumAfterKNegations([57, 3, -14, -87, 42, 38, 31, -7, -28, -61], 10)
);
