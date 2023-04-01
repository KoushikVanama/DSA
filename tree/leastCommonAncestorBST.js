class TreeNode {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}
class LeastCommonAncestor {
  constructor() {}
  solve(A, B, C) {
    if (A.data > B && A.data > C) {
      return this.solve(A.left, B, C);
    }
    if (A.data < B && A.data < C) {
      return this.solve(A.right, B, C);
    }
    return A.data;
  }
}

const root = new TreeNode(15);
root.left = new TreeNode(12);
root.right = new TreeNode(20);
root.left.left = new TreeNode(10);
root.left.right = new TreeNode(14);
root.right.left = new TreeNode(16);
root.right.right = new TreeNode(27);
root.left.left.left = new TreeNode(8);

// example with perfect binary tree
// const root = new TreeNode(15);
// root.left = new TreeNode(23);
// root.right = new TreeNode(16);
// root.left.left = new TreeNode(38);
// root.left.right = new TreeNode(8);
// root.right.left = new TreeNode(18);
// root.right.right = new TreeNode(32);
// root.left.left.left = new TreeNode(40);
// root.left.left.right = new TreeNode(-1);
// root.left.right.left = new TreeNode(-1);
// root.left.right.right = new TreeNode(-1);
// root.right.left.left = new TreeNode(-1);
// root.right.left.right = new TreeNode(-1);
// root.right.right.left = new TreeNode(-1);
// root.right.right.right = new TreeNode(-1);

const lca = new LeastCommonAncestor();

// console.log(lca.solve(root, 38, 8));
console.log(lca.solve(root, 8, 8));
