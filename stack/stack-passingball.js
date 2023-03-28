class Stack {
  constructor() {}

  passingBall(A, B, C) {
    let stack = [B];
    for (let i = 0; i < C.length; i++) {
      if (C[i] == 0) stack.pop();
      else stack.push(C[i]);
    }
    return stack.pop();
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const stack = new Stack();

console.log("Sample input: 10 23 [86,63,60,0,47,0,99,9,0,0]");
rl.question("", function (line) {
  let inputArgs = line.split(" ");
  console.log(
    stack.passingBall(
      parseInt(inputArgs[0]),
      parseInt(inputArgs[1]),
      JSON.parse(inputArgs[2])
    )
  );
  rl.close();
});

rl.on("close", function () {
  process.exit(0);
});
