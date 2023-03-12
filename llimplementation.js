class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

let head = null;
let listLength = 0;
let temp;
class LinkedList {
  constructor() {}

  insert_node(pos, no) {
    let xn = new Node();
    xn.data = no;
    if (pos == 1) {
      xn.next = head;
      head = xn;
    } else {
      temp = head;
      for (let i = 1; i < pos - 1; i++) {
        temp = temp.next;
      }
      xn.next = temp.next;
      temp.next = xn;
    }
    listLength++;
  }

  delete_node(pos) {
    if (pos >= 1 && pos <= listLength) {
      if (pos == 1) {
        let temp = head.next;
        head = temp;
      } else {
        let prev = head;
        for (let i = 1; i < pos - 1; i++) {
          prev = prev.next;
        }
        prev.next = prev.next.next;
      }
    }
    listLength--;
  }

  print_ll() {
    console.log(JSON.stringify(head, null, 4));
    let temp = head;
    while (temp != null) {
      process.stdout.write(temp.data);
      temp = temp.next;
    }
    process.stdout.write("\n");
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const ll = new LinkedList();

rl.question("", function (cases) {
  if (isNaN(cases.trim()) || !cases.trim()) {
    console.log("Check your input");
    rl.close();
  }
  var no_of_cases = parseInt(cases);

  function recur() {
    if (no_of_cases == 0) rl.close();
    no_of_cases--;
    rl.question("", function (line) {
      var args = line.split(" ");

      switch (args[0]) {
        case "i":
          ll.insert_node(args[1], args[2]);
          recur();
          break;
        case "d":
          ll.delete_node(args[1]);
          recur();
          break;
        case "p":
          ll.print_ll();
          recur();
          break;
        default:
          console.log("Check your input");
          rl.close();
          recur();
      }
    });
  }
  recur();
});

rl.on("close", function () {
  process.exit(0);
});
