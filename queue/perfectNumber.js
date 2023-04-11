let s = Array(100005).fill("");

class PerfectNumber {
  constructor() {}

  solve(N) {
    s[1] = "1";
    s[2] = "2";
    let queue = [];
    queue.push(s[1]);
    queue.push(s[2]);
    let count = 2;
    while (count <= N) {
      let ss = queue[0];
      queue.shift();
      count += 1;
      s[count] = ss + "1";
      queue.push(ss + "1");
      count += 1;
      s[count] = ss + "2";
      queue.push(ss + "2");
    }
    // s[N] has the first half of our final result
    let result = s[N];
    let reverseResult = this.reverseString(result);
    return result + reverseResult;
  }
  reverseString(str) {
    const revArray = [];
    const length = str.length - 1;
    for (let i = length; i >= 0; i--) {
      revArray.push(str[i]);
    }
    return revArray.join("");
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
