class TreeNode {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
    this.next = null;
  }
}
class NextPointerBT {
  constructor() {}
  solve(A) {
    let root = A;
    let queue = [];
    if (root == null) return [];
    queue.push(A);
    let last = A;
    while (queue.length !== 0) {
      let curr = queue.splice(0, 1)[0];
      if (curr.left != null) {
        queue.push(curr.left);
      }
      if (curr.right != null) {
        queue.push(curr.right);
      }
      if (last == curr) {
        let temp = queue;
        for (let i = 0; i < temp.length; i++) {
          temp[i].next = temp[i + 1];
        }
        last = queue[queue.length - 1];
      }
    }
    return JSON.stringify(A, null, 4);
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);

const npbt = new NextPointerBT();

console.log(npbt.solve(root));
