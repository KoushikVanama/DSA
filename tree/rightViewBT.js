function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

let queue = [];
function rightViewBT(A) {
  let root = A;
  if (root == null) return [];
  let queue = [];
  queue.push(root);
  let result = [];
  while (queue.length) {
    let n = queue.length;
    for (let i = 0; i < n; i++) {
      curr = queue.shift();
      if (i == n - 1) result.push(curr.data);
      if (curr.left != null) {
        queue.push(curr.left);
      }
      if (curr.right != null) {
        queue.push(curr.right);
      }
    }
  }
  return result;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log(rightViewBT(root));
