class LinkedList {
  constructor() {}

  longestPalindrome(A) {
    let ans = 0;
    let head = A;
    let prev = null;
    let curr = head;
    let count = 0;
    while (curr != null) {
      let next = curr.next;
      count = this.countMatch(prev, next);
      ans = Math.max(ans, 2 * count + 1);
      count = this.countMatch(prev, curr); // for even numbered palindromes like 2->2, 3->3->3->3
      ans = Math.max(ans, 2 * count);
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return ans;
  }

  countMatch(prev, next) {
    let x = prev;
    let y = next;
    let count = 0;
    while (x != null && y != null) {
      if (x.data == y.data) {
        count++;
      } else {
        break;
      }
      x = x.next;
      y = y.next;
    }
    return count;
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
  //                     next: {
  //                         data: "10",
  //                         next: null,
  //                     },
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

console.log(ll.longestPalindrome(input));

process.exit(0);
