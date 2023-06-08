/**
 * 
Two numbers, X and Y, are defined as follows:

X is the greatest number smaller than A such that the XOR sum of X and A is the same as the sum of X and A.
Y is the smallest number greater than A, such that the XOR sum of Y and A is the same as the sum of Y and A.
Find and return the XOR of X and Y.

NOTE 1: XOR of X and Y is defined as X ^ Y where '^' is the BITWISE XOR operator.

NOTE 2: Your code will be run against a maximum of 100000 Test Cases.} A  
 */
function strangeEquality(A) {
  // XOR of 2 no's and arthimetic sum of 2 num's:
  //   (A + B) = (A ^ B) + 2(A & B);
  let bitsInA = Math.floor(Math.log2(A)) + 1;
  let X = 0;
  for (let b = 0; b < bitsInA; b++) {
    if (A & (1 << b)) continue;
    X += 1 << b;
  }
  let Y = 1 << bitsInA;
  return X ^ Y;
}
console.log(strangeEquality(5)); // 10
