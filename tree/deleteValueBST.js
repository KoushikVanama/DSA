class TreeNode {
  constructor(X) {
    this.data = X;
    this.left = null;
    this.right = null;
  }
}
class deleteBST {
  constructor() {
    this.queue = [];
    this.isBST = true;
  }
  solve(A, B) {
    return this.deleteNode(A, B);
  }
  deleteNode(A, B) {
    let root = A;
    if (root == null) {
      return root;
    }
    if (root.data < B) {
      root.right = this.deleteNode(root.right, B);
    } else if (root.data > B) {
      root.left = this.deleteNode(root.left, B);
    } else {
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.data = this.maxValueFromLeftSubtree(root.left);

      // Delete the inorder successor
      root.left = this.deleteNode(root.left, root.data);
    }
    return root;
  }
  maxValueFromLeftSubtree(root) {
    let maxVal = root.data;
    while (root.right != null) {
      maxVal = root.right.data;
      root = root.right;
    }
    return maxVal;
  }
}
const root = new TreeNode(10);
root.left = new TreeNode(2);
root.right = new TreeNode(14);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(9);
root.left.right.left = new TreeNode(6);
root.right.right = new TreeNode(26);

const dbst = new deleteBST();

console.log(dbst.solve(root, 6));
