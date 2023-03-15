class Stack {
  constructor() {}
  prevSmallerNearest(A) {
    let stack = [];
    let result = [];
    for (let i = 0; i < A.length; i++) {
      while (!this.isEmpty(stack) && A[this.peek(stack)] >= A[i]) {
        stack.pop();
      }
      if (this.isEmpty(stack)) {
        result[i] = -1;
      } else {
        result[i] = A[this.peek(stack)];
      }
      stack.push(i);
    }
    return result;
  }

  isEmpty(stack) {
    return stack.length == 0;
  }

  peek(stack) {
    return stack[stack.length - 1];
  }
}

const stack = new Stack();

console.log(stack.prevSmallerNearest([1, 2, 3, 4, 5, 6, 7]));
// output: [-1, 1, 2, 3, 4, 5, 6]

process.exit(0);
