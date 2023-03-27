class TreeNode {
  constructor(X) {
    this.data = X;
    this.left = null;
    this.right = null;
  }
}
class searchBST {
  constructor() {
    this.queue = [];
    this.isBST = true;
  }
  solve(A, B) {
    let root = A;
    while (root != null) {
      console.log(JSON.stringify(root));
      if (root.data == B) return 1;
      if (root && root.data < B) {
        root = root.right;
      }
      if (root && root.data > B) {
        root = root.left;
      }
    }
    return 0;
  }
}
const root = new TreeNode(10);
root.left = new TreeNode(2);
root.right = new TreeNode(14);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(9);
root.right.right = new TreeNode(26);

const sbst = new searchBST();

console.log(sbst.solve(root, 0));
