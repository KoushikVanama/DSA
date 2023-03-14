class Node {
  constructor(X) {
    this.data = X;
    this.next = null;
  }
}
class LinkedList {
  constructor() {}
  findIntersection(A, B) {
    if (A == null || B == null) return null;
    let h1 = A;
    let h2 = B;
    let temp = null;
    let size1 = 0,
      size2 = 0;
    while (h1 != null) {
      size1++;
      h1 = h1.next;
    }
    while (h2 != null) {
      size2++;
      h2 = h2.next;
    }
    let diff = Math.abs(size1 - size2);
    temp = size1 >= size2 ? A : B;
    while (temp != null && diff > 0) {
      // exclude diff(num of nodes) in larger list
      temp = temp.next;
      diff--;
    }
    let slow = temp;
    let fast = size1 < size2 ? A : B;
    while (slow != null && fast != null) {
      if (slow.data != fast.data) {
        // deep copy; it may fail otherwise
        slow = slow.next;
        fast = fast.next;
      } else {
        return slow;
      }
    }
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

var input1 = {
  data: "1",
  next: {
    data: "2",
    next: {
      data: "3",
      next: {
        data: "4",
        next: {
          data: "5",
          next: null,
        },
      },
    },
  },
};

var input2 = {
  data: "6",
  next: {
    data: "3",
    next: {
      data: "4",
      next: {
        data: "5",
        next: null,
      },
    },
  },
  // data: "1",
  // next: {
  //   data: "2",
  //   next: {
  //     data: "3",
  //     next: {
  //       data: "4",
  //       next: {
  //         data: "5",
  //         next: null,
  //       },
  //     },
  //   },
  // },
};
// var input2=null;

const head = ll.findIntersection(input1, input2);

ll.print_ll(head);

process.exit(0);
