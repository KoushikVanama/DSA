class TreeNode {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}
class BinaryTree {
  constructor() {}
  preOrderIterative(A) {
    let stack = [];
    let curr = A;
    let result = [];
    while (curr !== null || stack.length != 0) {
      if (curr != null) {
        result.push(curr.data);
        if (curr.right != null) {
          stack.push(curr.right);
        }
        curr = curr.left;
      } else {
        curr = stack.pop();
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

console.log(tree.preOrderIterative(root));
