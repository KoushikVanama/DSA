class TreeNode {
  constructor(X) {
    this.data = X;
    this.left = null;
    this.right = null;
  }
}
class Node {
  constructor(TreeNode, coordinate) {
    this.node = TreeNode;
    this.coordinate = coordinate;
  }
}
class topViewVerticalOrderTraversal {
  constructor() {
    this.queue = [];
  }
  solve(A) {
    let map = new Map();
    let min = 0,
      max = 0;
    map.set(0, [A.data]);
    this.queue.push(new Node(A, 0));
    while (!this.isEmpty(this.queue)) {
      let curr = this.queue.shift();
      if (curr.node.left != null) {
        let incLeftCoord = curr.coordinate - 1;
        if (map.has(incLeftCoord)) {
          let exisVal = map.get(incLeftCoord);
          exisVal.push(curr.node.left.data);
          //   map.set(incLeftCoord, exisVal);
        } else {
          map.set(incLeftCoord, [curr.node.left.data]);
          min = Math.min(min, incLeftCoord);
        }
        this.enqueue(new Node(curr.node.left, incLeftCoord));
      }
      if (curr.node.right != null) {
        let incRightCoord = curr.coordinate + 1;
        if (map.has(incRightCoord)) {
          let exisVal = map.get(incRightCoord);
          exisVal.push(curr.node.right.data);
          //   map.set(incRightCoord, exisVal);
        } else {
          map.set(incRightCoord, [curr.node.right.data]);
          max = Math.max(max, incRightCoord);
        }
        this.enqueue(new Node(curr.node.right, incRightCoord));
      }
    }
    // console.log(map);
    // map map :lol
    let result = [];
    for (let i = min; i <= max; i++) {
      result.push(map.get(i)[0]);
    }
    return result;
  }
  enqueue(X) {
    this.queue.push(X);
  }
  isEmpty(queue) {
    return queue.length == 0;
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

const tvvot = new topViewVerticalOrderTraversal();

console.log(tvvot.solve(root));
