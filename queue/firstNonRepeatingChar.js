class NonRepeatingCharacter {
  constructor() {}

  solve(A) {
    let obj = {};
    let queue = [];
    let result = "";
    for (let i = 0; i < A.length; i++) {
      obj[A[i]] ? obj[A[i]]++ : (obj[A[i]] = 1);
      while (queue.length && obj[queue[0]] > 1) queue.shift();
      if (obj[A[i]] === 1) queue.push(A[i]);
      queue[0] ? (result += queue[0]) : (result += "#");
    }
    return result;
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const nrc = new NonRepeatingCharacter();

rl.question("", function (line) {
  let inputString = line.trim();
  console.log(nrc.solve(inputString));
  rl.close();
});

rl.on("close", function () {
  process.exit(0);
});
