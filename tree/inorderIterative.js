class TreeNode {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}
class BinaryTree {
  constructor() {}
  inOrderIterative(A) {
    let stack = [];
    let curr = A;
    let result = [];
    while (!this.isEmpty(stack) || curr != null) {
      if (curr != null) {
        stack.push(curr);
        curr = curr.left;
      } else {
        curr = stack.pop();
        result.push(curr.data);
        curr = curr.right;
      }
    }
    return result;
  }
  isEmpty(stack) {
    return stack.length == 0;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

const tree = new BinaryTree();

console.log(tree.inOrderIterative(root));
