function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

let queue = [];
function MaxLevelOrderSum(A) {
  let root = A;
  if (root == null) return;
  let result = 0;
  let finalResult = 0;
  let queue = [];
  queue.push(A);
  let last = root;
  let curr;
  while (queue.length != 0) {
    curr = queue.splice(0, 1)[0];
    result += curr.data;
    if (curr.left != -1 && curr.left != null) {
      queue.push(curr.left);
    }
    if (curr.right != -1 && curr.right != null) {
      queue.push(curr.right);
    }
    if (curr == last) {
      finalResult = Math.max(finalResult, result);
      last = queue[queue.length - 1];
      result = 0;
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

console.log(MaxLevelOrderSum(root));
