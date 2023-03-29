class TreeNode {
  constructor(X) {
    this.data = X;
    this.left = null;
    this.right = null;
  }
}
class checkBST {
  constructor() {
    this.queue = [];
    this.isBST = true;
  }
  solve(A) {
    return this.check(A, -Infinity, Infinity);
  }
  check(root, min, max) {
    if (!root) return 1;
    if (root.data < min || root.data >= max) return 0;
    let isLeft = this.check(root.left, min, root.data);
    let isRight = this.check(root.right, root.data, max);
    return isLeft && isRight;
  }
}
const root = new TreeNode(10);
root.left = new TreeNode(2);
root.right = new TreeNode(14);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(9);
root.left.right.left = new TreeNode(6);

const cbst = new checkBST();

console.log(cbst.solve(root));
