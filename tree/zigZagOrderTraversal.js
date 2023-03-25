function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

let queue = [];
function zigZagOrderTraversal(A) {
  let root = A;
  if (root == null) return [];
  let queue = [];
  queue.push(root);
  let finalResult = [];
  let direction = true;
  while (queue.length) {
    let n = queue.length;
    let result = [];
    for (let i = 0; i < n; i++) {
      curr = queue.shift();
      direction ? result.push(curr.data) : result.unshift(curr.data);
      if (curr.left != null) {
        queue.push(curr.left);
      }
      if (curr.right != null) {
        queue.push(curr.right);
      }
    }
    direction = !direction;
    finalResult.push(result);
  }
  return finalResult;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);
root.right.right.left = new TreeNode(7);
root.right.right.right = new TreeNode(8);

console.log(zigZagOrderTraversal(root));
