function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}
let balanced = 1;

function findHeight(root) {
  if (!root) {
    return 0;
  }
  if (balanced === 0) {
    return;
  }
  let leftHeight = findHeight(root.left);
  let rightHeight = findHeight(root.right);
  let diff = Math.abs(leftHeight - rightHeight);
  if (diff > 1) {
    balanced = 0;
  }
  return Math.max(leftHeight, rightHeight) + 1;
}

function isBalanced(A) {
  balanced = 1;
  findHeight(A);
  return balanced;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);
root.right.right.right = new TreeNode(7);

console.log(isBalanced(root));
