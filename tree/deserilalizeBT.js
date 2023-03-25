function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function deSerializeBT(A) {
  let queue = [];
  let root = new TreeNode(A[0]);
  queue.push(root);
  for (let i = 0; i < Math.floor(A.length / 2); i++) {
    let curr = queue.shift();
    let left = A[i * 2 + 1];
    let right = A[i * 2 + 2];
    if (left != -1) {
      let node = new TreeNode(left);
      queue.push(node);
      curr.left = node;
    }
    if (right != -1) {
      let node = new TreeNode(right);
      queue.push(node);
      curr.right = node;
    }
  }
  return root;
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

console.log(deSerializeBT([1, 2, 3, 4, 5, -1, -1, -1, -1, -1, -1]));
