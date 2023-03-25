function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

let finalResult = 0;

function findHeight(root) {
  let diameter = 0;
  if (!root) {
    return 0;
  }
  let leftHeight = findHeight(root.left);
  let rightHeight = findHeight(root.right);
  diameter = leftHeight + rightHeight;
  finalResult = Math.max(diameter, finalResult);
  return Math.max(leftHeight, rightHeight) + 1;
}

function diameterBT(A) {
  findHeight(A);
  return finalResult;
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

console.log(diameterBT(root));
