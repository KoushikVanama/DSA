class LinkedList {
  constructor() {}
  
  checkPalindrome(A) {
    let head = A;
    let head2 = null;
    let mid;
    let slow = head;
    let fast = head.next; // for even numbered palindrome otherwise fast=head would suffice
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    mid = slow;
    head2 = mid.next;
    mid.next = null; // un-link ll
    head2 = this.reverse(head2);
    while (head != null && head2 != null) {
      if (head.data != head2.data) return 0;
      head = head.next;
      head2 = head2.next;
    }
    if (head == null && head2 == null) return 1;
    if (head.next == null && head2 == null) return 1;
    return 0;
  }

  reverse(ll2) {
    let curr = ll2;
    let prev = null;
    while (curr != null) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }
}

const ll = new LinkedList();

var input = {
  // data: "4",
  // next: {
  //     data: "5",
  //     next: {
  //         data: "6",
  //         next: {
  //             data: "7",
  //             next: {
  //                 data: "8",
  //                 next: {
  //                     data: "9",
  //                     next: null,
  //                 },
  //             },
  //         },
  //     },
  // },
  // data: "4",
  // next: {
  //     data: "5",
  //     next: {
  //         data: "6",
  //         next: {
  //             data: "7",
  //             next: {
  //                 data: "6",
  //                 next: {
  //                     data: "5",
  //                     next: null,
  //                 },
  //             },
  //         },
  //     },
  // },
  // data: "4",
  // next: {
  //   data: "5",
  //   next: {
  //     data: "6",
  //     next: {
  //       data: "7",
  //       next: {
  //         data: "6",
  //         next: {
  //           data: "5",
  //           next: {
  //             data: "4",
  //             next: null,
  //           },
  //         },
  //       },
  //     },
  //   },
  // },
  // data: "1",
  // next: {
  //     data: "2",
  //     next: {
  //         data: "3",
  //         next: null,
  //     },
  // },
  data: "3",
  next: {
      data: "3",
      next: null,
  },
  // data: "3",
  // next: null,
};

console.log(ll.checkPalindrome(input));

process.exit(0);
