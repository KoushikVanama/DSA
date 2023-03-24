function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

let queue = [];
function levelOrder(A) {
  let root = A;
  let finalResult = [];
  if (root == null) return [];
  queue.push(root);
  let last = root;
  let result = [];
  while (!isEmpty(queue)) {
    curr = dequeue()[0];
    result.push(curr.data);
    if (curr.left != null) {
      enqueue(curr.left);
    }
    if (curr.right != null) {
      enqueue(curr.right);
    }
    if (curr === last) {
      finalResult.push(result);
      result = [];
      last = rear()[0];
    }
  }
  return finalResult;
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

console.log(levelOrder(root));
