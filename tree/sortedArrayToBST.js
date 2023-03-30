class TreeNode {
  constructor(X) {
    this.data = X;
    this.left = null;
    this.right = null;
  }
}
class SortedArrayToBST {
  constructor() {
    this.queue = [];
    this.isBST = true;
  }
  solve(A) {
    return this.sortedArrayToBST(A);
  }
  sortedArrayToBST(A) {
    return buildBST(A, 0, A.length - 1);
    function buildBST(A, low, high) {
      if (low < 0 || high > A.length - 1) {
        return null;
      }
      if (A.length == 0 || low > high) {
        return null;
      }
      let mid = low + Math.floor((high - low) / 2);
      let root = new TreeNode(A[mid]);
      root.left = buildBST(A, low, mid - 1);
      root.right = buildBST(A, mid + 1, high);
      return root;
    }
  }
}

const sabst = new SortedArrayToBST();

console.log(sabst.solve([1,2,3,4,5,6,7]));
