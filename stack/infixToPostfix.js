class Stack {
  constructor() {}

  infixToPostfix(A) {
    let stack = [],
      hashSet = new Set(["+", "-", "*", "/", "(", ")", "^"]);
    let output = [];

    for (let i = 0; i < A.length; i++) {
      if (!hashSet.has(A[i])) {
        output.push(A[i]);
      } else if (A[i] == "(") {
        stack.push(A[i]);
      } else if (A[i] == ")") {
        while (!this.isEmpty(stack) && this.peek(stack) != "(") {
          output.push(stack.pop());
        }
        stack.pop();
      } else {
        if (this.isEmpty(stack) || this.peek(stack) == "(") {
          stack.push(A[i]);
        } else {
          if (this.isEmpty(stack)) {
            stack.push(A[i]);
          } else {
            if (
              this.checkPrecedence(this.peek(stack)) >=
              this.checkPrecedence(A[i])
            ) {
              while (
                !this.isEmpty(stack) &&
                this.checkPrecedence(this.peek(stack)) >=
                  this.checkPrecedence(A[i])
              ) {
                output.push(stack.pop());
              }
            }
            stack.push(A[i]);
          }
        }
      }
    }
    while (!this.isEmpty(stack)) {
      output.push(stack.pop());
    }
    return output.join("");
  }

  peek(stack) {
    return stack[stack.length - 1];
  }

  isEmpty(stack) {
    return !stack.length;
  }

  checkPrecedence(char) {
    if (char == "^") return 4;
    else if (char == "*" || char == "/") return 3;
    else if (char == "+" || char == "-") return 2;
    else if (char == "(" || char == ")") return 1;
    else return 0;
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const stack = new Stack();

rl.question("", function (line) {
  // input: a+b*(c^d-e)^(f+g*h)-i
  console.log(stack.infixToPostfix(line));
  // ouput: abcd^e-fgh*+^*+i-
  rl.close();
});

rl.on("close", function () {
  process.exit(0);
});
