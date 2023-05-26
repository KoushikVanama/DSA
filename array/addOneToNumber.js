function addOneToNumber(A) {
  var b = [];
  A.forEach(function (i) {
    if (i) b.push(i);
  });
  var i = A.length;
  var carry = 1;

  // traversing the digits of the number in reverse order
  while (--i >= 0) {
    var prev = +A[i];
    b[i] = +A[i] + carry;
    b[i] = b[i] % 10;
    if (b[i] < prev) carry = 1;
    else carry = 0;
  }

  if (carry) b.unshift(1);
  while (b[0] === 0) b.shift();

  return b;
}

console.log(addOneToNumber([1, 2, 3]));
console.log(addOneToNumber([0, 1, 2, 3, 0]));
console.log(addOneToNumber([9, 9, 9]));
