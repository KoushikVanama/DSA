class TreeNode {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}
class InvertBT {
  constructor() {}
  solve(A) {
    if (A == null) return null;
    let temp = this.solve(A.left);
    A.left = this.solve(A.right);
    A.right = temp;
    return A;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);

const ibt = new InvertBT();

console.log(ibt.solve(root));
