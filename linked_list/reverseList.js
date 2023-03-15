class LinkedList {
  constructor() {}
  reverseList(A, B) {
    let head = A;
    let curr = head;
    let prev = null;
    let next = null;
    let count = 0;
    while (curr != null && count < B) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
      ++count;
    }
    if (next != null) {
      head.next = this.reverseList(next, B);
    }
    return prev;
  }

  print_ll(temp) {
    console.log(JSON.stringify(temp, null, 4));
    while (temp != null) {
      process.stdout.write(temp.data);
      temp = temp.next;
    }
    process.stdout.write("\n");
    rl.close();
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ll = new LinkedList();

var sampleInput = {
  data: "4",
  next: {
    data: "5",
    next: {
      data: "6",
      next: {
        data: "7",
        next: {
          data: "8",
          next: {
            data: "9",
            next: {
              data: "10",
              next: null,
            },
          },
        },
      },
    },
  },
};

rl.question("", function (no) {
  if (isNaN(no.trim()) || !no.trim()) {
    rl.close();
  }

  const head = ll.reverseList(sampleInput, parseInt(no));

  ll.print_ll(head);
});

rl.on("close", function () {
  process.exit(0);
});
