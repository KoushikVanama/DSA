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
    let s1 = [];
    let s2 = [];

    if (this.path(A, s1, B) == false || this.path(A, s2, C) == false) return -1;
    let i = 0;
    while (i < s1.length && i < s2.length) {
      if (s1[i] != s2[i]) break;
      i += 1;
    }
    return s1[i - 1];
  }
  path(root, s, val) {
    if (root == null) return false;
    s.push(root.data);
    if (root.data == val) return true;
    if (
      (root.left != null && this.path(root.left, s, val)) ||
      (root.right != null && this.path(root.right, s, val))
    )
      return true;
    s.pop();
    return false;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
root.left.left.left = new TreeNode(8);
root.left.left.right = new TreeNode(9);

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
console.log(lca.solve(root, 6, 7));
