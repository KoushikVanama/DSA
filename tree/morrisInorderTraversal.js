class TreeNode {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}
class MorrisInorderTraversal {
  constructor() {}
  solve(A) {
    let curr = A;
    let result = [];
    while (curr != null) {
      if (curr.left == null) {
        result.push(curr.data);
        curr = curr.right;
      } else {
        let R = this.rightMostNodeOfCurrNode(curr);
        if (R.right == null) {
          R.right = curr;
          curr = curr.left;
        } else {
          result.push(curr.data);
          R.right = null;
          curr = curr.right;
        }
      }
    }
    return result;
  }
  rightMostNodeOfCurrNode(curr) {
    let temp = curr.left;
    while (temp.right != null && temp.right != curr) {
      temp = temp.right;
    }
    return temp;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

const mit = new MorrisInorderTraversal();

console.log(mit.solve(root));
