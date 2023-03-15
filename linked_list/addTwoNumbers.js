class Node {
  constructor(X) {
    this.data = X;
    this.next = null;
  }
}
class LinkedList {
  constructor() {}
  addTwoNumbers(A, B) {
    let num1 = "";
    let num2 = "";
    while (A != null) {
      num1 += A.data;
      A = A.next;
    }
    while (B != null) {
      num2 += B.data;
      B = B.next;
    }
    num1 = num1.split("").reverse().join("");
    num2 = num2.split("").reverse().join("");
    let sum = (parseInt(num1) + parseInt(num2)).toString();
    sum = sum.split("").reverse().join("");
    let head = null;
    let nll = head;
    for (let i = 0; i < sum.length; i++) {
      if (i == 0) {
        head = new Node(sum[i]);
        nll = head;
      } else {
        let temp = new Node(sum[i]);
        nll.next = temp;
        nll = nll.next;
      }
    }
    return head;
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
  data: "9",
  next: {
    data: "9",
    next: {
      data: "1",
      next: null,
    },
  },
};

var input2 = {
  data: "1",
  next: null,
};

const head = ll.addTwoNumbers(input1, input2);

ll.print_ll(head);

process.exit(0);
