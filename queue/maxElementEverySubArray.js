class MaxElementOfEverySubArrayUsingWindowSlidingTechnique {
  constructor() {}

  solve(A, K) {
    let q = [];
    let result = [];
    for (let i = 0; i < K; i++) {
      while (q.length != 0 && A[q[q.length - 1]] < A[i]) {
        q.pop();    // dequeueRear
      }
      q.push(i);    // enqueueRear
    }
    result.push(A[q[0]]);
    for (let i = K; i < A.length; i++) {
      while (q.length != 0 && A[q[q.length - 1]] < A[i]) {
        q.pop();    // dequeueRear
      }
      q.push(i);    // enqueueRear
      if (q[0] == i - K) {
        q.shift();  // dequeueFront
      }
      result.push(A[q[0]]);
    }
    return result;
  }
}

const meoesauwst = new MaxElementOfEverySubArrayUsingWindowSlidingTechnique();

console.log(meoesauwst.solve([1, 8, 5, 6, 7, 4, 2, 0, 3], 3));
