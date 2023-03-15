class LinkedList {
  constructor() {}
  removeNthFromEnd(A, B) {
    let head = A;
    let t = A;
    let temp = A;
    let llLength = 0;
    while (temp != null) {
      ++llLength;
      temp = temp.next;
    }
    console.log(A, llLength);
    if (B >= llLength) {
      head = head.next;
      return head;
    }
    for (let i = 1; i < llLength - B; i++) {
      t = t.next;
    }
    t.next = t.next.next;
    return A;
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
        next: null,
      },
    },
  },
};

rl.question("", function (pos) {
  if (isNaN(pos.trim()) || !pos.trim()) {
    rl.close();
  }
  const head = ll.removeNthFromEnd(sampleInput, parseInt(pos));
  ll.print_ll(head);
});

rl.on("close", function () {
  process.exit(0);
});
