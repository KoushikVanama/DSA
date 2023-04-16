function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

let result = 0;
function maxDepth(A) {
  let root = A;
  if (root == null) return 0;
  if (root.left == null && root.right == null) return 1;
  if (root.left == null) {
    return maxDepth(root.right) + 1;
  }
  if (root.right == null) {
    return maxDepth(root.left) + 1;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right));
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);
root.right.right.right = new TreeNode(7);
root.right.right.right.right = new TreeNode(8);

console.log(maxDepth(root));
