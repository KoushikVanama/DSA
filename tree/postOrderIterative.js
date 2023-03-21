class TreeNode {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}
class BinaryTree {
  constructor() {}
  postOrderIterative(A) {
    const stack1 = [];
    const stack2 = [];
    const result = [];
    stack1.push(A);
    while (stack1.length > 0) {
      // push left and right to stack if children exists
      let curr = stack1.pop();
      stack2.push(curr);
      if (curr.left) {
        stack1.push(curr.left);
      }
      if (curr.right) {
        stack1.push(curr.right);
      }
    }
    while (stack2.length > 0) {
      let tmp = stack2.pop();
      result.push(tmp.data);
    }
    return result;
  }
  isEmpty(stack) {
    return stack.length == 0;
  }
}

const curr = new TreeNode(1);
curr.left = new TreeNode(2);
curr.right = new TreeNode(3);
curr.left.left = new TreeNode(4);
curr.left.right = new TreeNode(5);
curr.right.right = new TreeNode(6);

const tree = new BinaryTree();

console.log(tree.postOrderIterative(curr));
