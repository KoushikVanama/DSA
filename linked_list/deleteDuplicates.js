class LinkedList {
  constructor() {}
  deleteDuplicates(A) {
    let temp = A;
    if (A.next == null) {
      return A;
    }
    while (temp != null) {
      if (temp.next != null && temp.data == temp.next.data) {
        temp.next = temp.next.next;
      } else {
        temp = temp.next;
      }
    }
    return A;
  }

  print_ll(temp) {
    console.log(JSON.stringify(temp, null, 4));
    while (temp != null) {
      process.stdout.write(temp.data);
      temp = temp.next;
    }
    process.stdout.write("\n");
  }
}

const ll = new LinkedList();

var sampleInput = {
  data: "1",
  next: {
    data: "1",
    next: {
      data: "2",
      next: {
        data: "2",
        next: {
          data: "2",
          next: {
            data: "3",
            next: null,
          },
        },
      },
    },
  },
};

const head = ll.deleteDuplicates(sampleInput);

ll.print_ll(head);

process.exit(0);
