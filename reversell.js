class LinkedList {
  constructor() {}
  reverseList(A) {
    let head = A;
    let prev = null;
    let cur = head;
    while (cur != null) {
      let next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    console.log(JSON.stringify(cur));
    head = prev;
    return head;
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

const ll = new LinkedList();

var sampleInput = {
  data: "4",
  next: {
    data: "5",
    next: {
      data: "6",
      next: null,
    },
  },
};

const head = ll.reverseList(sampleInput);
ll.print_ll(head);

process.exit(0);
