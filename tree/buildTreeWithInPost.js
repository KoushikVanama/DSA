function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}
function buildTree(A, B) {
  if (!A.length || !B.length) return null;
  return recurBuildTree(A, B, 0, A.length - 1, 0, B.length - 1);
}
function recurBuildTree(A, B, st_in, end_in, st_po, end_po) {
  if (st_in > end_in) return null;
  if (A.length == 0 || B.length == 0) {
    return null;
  }
  let root = new TreeNode(B[end_po]);
  //find root in A
  let ind = A.indexOf(B[end_po]);
  let countLeft = ind - st_in;
  let countRight = end_in - ind;
  root.left = recurBuildTree(A, B, st_in, ind - 1, st_po, st_po + countLeft - 1);
  root.right = recurBuildTree(A, B, ind + 1, end_in, st_po + countLeft, end_po - 1);
  return root;
}

console.log(buildTree([4, 2, 7, 5, 1, 3, 6], [4, 7, 5, 2, 6, 3, 1]));
