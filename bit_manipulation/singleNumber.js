function singleNumber(A) {
  let ans = 0;
  A.forEach((item) => {
    ans ^= item;
  });
  return Number(ans);
}

console.log(singleNumber([1, 2, 2]));
