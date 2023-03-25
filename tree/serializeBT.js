function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

let queue = [];
function serializeBT(A) {
  let root = A;
  if (root == null) return [];
  queue.push(root);
  let result = [];
  while (!isEmpty(queue)) {
    curr = dequeue()[0];
    result.push(curr.data ? curr.data : curr);
    if (curr.left != null) {
      enqueue(curr.left);
    } else if (curr.left === null) {
      enqueue(-1);
    }
    if (curr.right != null) {
      enqueue(curr.right);
    } else if (curr.right === null) {
      enqueue(-1);
    }
  }
  return result;
}

function enqueue(X) {
  queue.push(X);
}
function dequeue() {
  return queue.splice(0, 1);
}
function rear() {
  return queue.slice(-1);
}
function isEmpty(queue) {
  return queue.length == 0;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

console.log(serializeBT(root));
