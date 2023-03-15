class Stack {
  constructor() {}

  doubleTrouble(A) {
    let stack = [];
    for (let i = 0; i < A.length; i++) {
      if (!stack.length) {
        stack.push(A[i]);
      } else {
        let popped = stack.pop();
        if (popped != A[i]) {
          stack.push(popped);
          stack.push(A[i]);
        }
      }
    }
    return stack.join("");
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const stack = new Stack();

rl.question("", function (line) {
  let inputString = line.trim();
  // input: abaacbdbdd
  console.log(stack.doubleTrouble(inputString));
  // output: abcbdb
  rl.close();
});

rl.on("close", function () {
  process.exit(0);
});
