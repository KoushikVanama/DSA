function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function solve(A) {
  let root = A;
  let max = Number.MIN_VALUE;
  return countNodes(root, max);
}

let count = 0;
function countNodes(root, max) {
  if (root == null) return;
  else {
    if (root.data > max) {
      count++;
    }
    countNodes(root.left, Math.max(max, root.data));
    countNodes(root.right, Math.max(max, root.data));
  }
  return count;
}

const root = new TreeNode(4);
root.left = new TreeNode(5);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);
root.right.right = new TreeNode(6);

console.log(solve(root));
