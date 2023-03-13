class Node {
  constructor(X) {
    this.data = X;
    this.next = null;
  }
}
class LinkedList {
  constructor() {}
  removeLoop(A) {
    let slow = A;
    let fast = A;
    let a = null,
      b = null;
    let head = A;
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow == fast) {
        break; // to find the meeting point
      }
    }
    a = head;
    b = slow;
    while (a != b) {
      a = a.next;
      b = b.next;
    }
    let start = a;
    let startCopy = a;
    let count = 1;
    while (start.next != startCopy) {
      // to count no of nodes in cycle
      count++;
      start = start.next;
    }
    while (count > 1) {
      // to go to last node in cycle
      startCopy = startCopy.next;
      count--;
    }
    startCopy.next = null; // to de-link cycle
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

const ll = new LinkedList();

var sampleInput = new Node(1);
sampleInput.next = new Node(2);
sampleInput.next.next = new Node(3);
sampleInput.next.next.next = new Node(4);
sampleInput.next.next.next.next = new Node(5);
sampleInput.next.next.next.next.next = new Node(6);
sampleInput.next.next.next.next.next.next = sampleInput.next.next;

const head = ll.removeLoop(sampleInput);
ll.print_ll(head);

process.exit(0);
