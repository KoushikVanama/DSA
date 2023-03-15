class LinkedList {
  constructor() {}
  reverseBetween(A, B, C) {
    let from,
      to,
      first,
      last = null;
    let curr = A;
    let count = 0;
    while (curr != null) {
      count++;
      if (count < B) first = curr;
      if (count == B) from = curr;
      if (count == C) {
        to = curr;
        last = to.next;
        break;
      }
      curr = curr.next;
    }
    to.next = null; // to break the ll at end
    this.reverse_ll(from);
    debugger;
    if (first != null) {
      first.next = to;
      from.next = last;
      return A;
    } else {
      from.next = last;
      return to;
    }
  }

  reverse_ll(head) {
    let prev = head,
      curr = head.next;
    while (curr != null) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
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
  data: "1",
  next: {
    data: "2",
    next: {
      data: "3",
      next: {
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
      },
    },
  },
};
rl.question("", function (line) {
  var args = line.split(" ");

  const head = ll.reverseBetween(
    sampleInput,
    parseInt(args[0]),
    parseInt(args[1])
  );
  
  ll.print_ll(head);
});

rl.on("close", function () {
  process.exit(0);
});
