class PerfectNumber {
  constructor() {}

  solve(N) {
    let queue = [];
    let result = [];
    let count = 3;
    queue[0] = 1;
    queue[1] = 2;
    queue[2] = 3;
    result[0] = 1;
    result[1] = 2;
    result[2] = 3;
    while (count < N) {
      let w = queue.shift();
      let x = w * 10 + 1;
      let y = w * 10 + 2;
      let z = w * 10 + 3;
      queue.push(x, y, z);
      result.push(x, y, z);
      count += 3;
    }
    return result.slice(0, N);
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const pn = new PerfectNumber();

rl.question("", function (line) {
  let inputString = line.trim();
  console.log(pn.solve(parseInt(inputString)));
  rl.close();
});

rl.on("close", function () {
  process.exit(0);
});
