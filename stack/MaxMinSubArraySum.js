class Stack {
  constructor() {}
  maxMinSubarraySum(A) {
    let ans = 0;
    let array = A;
    for (let i = 0; i < array.length; i++) {
      ans += array[i] * this.contribution(array, i);
    }
    return ans;
  }
  contribution(array, i) {
    let j = 0,
      k = 0,
      l = 0,
      m = 0,
      smallestNoOfSubArrays = 0,
      greatestNoOfSubArrays = 0;
    j = this.findElement("left", "greater", array, i);
    k = this.findElement("right", "greater", array, i);
    l = this.findElement("left", "smaller", array, i);
    m = this.findElement("right", "smaller", array, i);
    greatestNoOfSubArrays = eval(i - j) * eval(k - i);
    smallestNoOfSubArrays = eval(i - l) * eval(m - i);
    return eval(greatestNoOfSubArrays - smallestNoOfSubArrays);
  }
  findElement(side, operation, array, i) {
    let stack = [];
    let result = [];
    if (side == "left" && operation == "smaller") {
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
      return result[i];
    } else if (side == "left" && operation == "greater") {
      for (let i = 0; i < array.length; i++) {
        while (!this.isEmpty(stack) && array[this.peek(stack)] <= array[i]) {
          stack.pop();
        }
        if (this.isEmpty(stack)) {
          result[i] = -1;
        } else {
          result[i] = this.peek(stack);
        }
        stack.push(i);
      }
      return result[i];
    } else if (side == "right" && operation == "smaller") {
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
      return result[i];
    } else if (side == "right" && operation == "greater") {
      for (let i = array.length - 1; i >= 0; i--) {
        while (!this.isEmpty(stack) && array[this.peek(stack)] <= array[i]) {
          stack.pop();
        }
        if (this.isEmpty(stack)) {
          result[i] = array.length;
        } else {
          result[i] = this.peek(stack);
        }
        stack.push(i);
      }
      return result[i];
    }
  }
  isEmpty(stack) {
    return stack.length === 0;
  }
  peek(stack) {
    return stack[stack.length - 1];
  }
}

const stack = new Stack();

console.log(stack.maxMinSubarraySum([4, 7, 3, 8]));
// console.log(stack.maxMinSubarraySum([992387, 932142, 971117, 934674, 988917, 967890, 948508, 970347]));
// console.log(stack.maxMinSubarraySum([4, 5, 2, 10, 8]));
// console.log(stack.maxMinSubarraySum([8, 2, 4, 9, 7, 5, 3, 10, 3]));

process.exit(0);
