class Stack {
  constructor() {}

  balancedParanthesis(A) {
    let stack = [];
    let allowed = new Set("}");
    allowed.add(")");
    allowed.add("]");
    for (let i = 0; i < A.length; i++) {
      if (!stack.length) {
        stack.push(A[i]);
      } else if (allowed.has(A[i])) {
        let popped = stack.pop();
        if (A[i] == "}" && popped != "{") return 0;
        if (A[i] == "]" && popped != "[") return 0;
        if (A[i] == ")" && popped != "(") return 0;
      } else {
        stack.push(A[i]);
      }
    }
    return stack.length > 0 ? 0 : 1;
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
  console.log(stack.balancedParanthesis(inputString));
  rl.close();
});

rl.on("close", function () {
  process.exit(0);
});
