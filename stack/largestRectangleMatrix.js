class Stack {
  constructor() {}
  largestRectangleMatrix(A) {
    let rowLength = A.length;
    let colLength = A[0].length;
    let v = A[0]; // first row
    let max = this.largestRectangleArea(v);
    for (let i = 1; i < rowLength; i++) {
      for (let j = 0; j < colLength; j++) {
        if (A[i][j] == 0) {
          v[j] = 0;
        } else {
          v[j] = v[j] + A[i][j];
        }
      }
      max = Math.max(max, this.largestRectangleArea(v));
    }
    return max;
  }
  largestRectangleArea(A) {
    let array = A;
    let leftSmallerArray = this.leftSmaller(array);
    let rightSmallerArray = this.rightSmaller(array);
    let maxArea = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < array.length; i++) {
      let currentArea =
        array[i] * (rightSmallerArray[i] - leftSmallerArray[i] - 1);
      maxArea = Math.max(maxArea, currentArea);
    }
    return maxArea;
  }
  leftSmaller(array) {
    let stack = [];
    let result = [];
    for (let i = 0; i < array.length; i++) {
      while (!this.isEmpty(stack) && array[this.peek(stack)] >= array[i]) {
        stack.pop();
      }
      if (this.isEmpty(stack)) {
        result[i] = -1;
      } else {
        result[i] = this.peek(stack);
      }
      stack.push(i);
    }
    return result;
  }
  rightSmaller(array) {
    let stack = [];
    let result = [];
    for (let i = array.length - 1; i >= 0; i--) {
      while (!this.isEmpty(stack) && array[this.peek(stack)] >= array[i]) {
        stack.pop();
      }
      if (this.isEmpty(stack)) {
        result[i] = array.length;
      } else {
        result[i] = this.peek(stack);
      }
      stack.push(i);
    }
    return result;
  }
  isEmpty(stack) {
    return stack.length === 0;
  }
  peek(stack) {
    return stack[stack.length - 1];
  }
}

const stack = new Stack();

// console.log(stack.largestRectangleAreaHistogram([1]));
console.log(
  stack.largestRectangleMatrix([
    [0, 0, 1],
    [0, 1, 1],
    [1, 1, 1],
  ])
);
// console.log(stack.maxMinSubarraySum([4, 5, 2, 10, 8]));
// console.log(stack.maxMinSubarraySum([8, 2, 4, 9, 7, 5, 3, 10, 3]));

process.exit(0);
