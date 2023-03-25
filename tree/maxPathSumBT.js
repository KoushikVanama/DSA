function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

let globalSum = 0;

function findPath(root) {
  if (!root) {
    return 0;
  }
  let leftSum = findPath(root.left);
  let rightSum = findPath(root.right);
  leftSum = Math.max(0, leftSum);
  rightSum = Math.max(0, rightSum);
  globalSum = Math.max(globalSum, leftSum + rightSum + root.data);
  return Math.max(leftSum, rightSum) + root.data;
}

function maxPathSumBT(A) {
  findPath(A);
  return globalSum;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);
root.right.right.right = new TreeNode(7);
root.right.right.right.right = new TreeNode(8);
root.right.right.right.right.right = new TreeNode(9);

console.log(maxPathSumBT(root));
