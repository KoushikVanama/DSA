class ConnectingRopes {
  constructor() {}
  solve(A) {
    let heap = new MinHeap();
    let n = A.length;
    for (let i = 0; i < n; i++) {
      heap.insert(A[i]);
    }
    let sum = 0;
    while (heap.size > 1) {
      let temp = heap.remove() + heap.remove();
      sum += temp;
      heap.insert(temp);
    }
    return sum;
  }
}
class MinHeap {
  constructor() {
    this.storage = [];
    this.size = 0;
  }
  //return indexes
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }
  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  //Boolean Values
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.size;
  }
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.size;
  }

  //get the parent
  parent(index) {
    return this.storage[this.getParentIndex(index)];
  }
  //get the left child
  leftChild(index) {
    return this.storage[this.getLeftChildIndex(index)];
  }
  //get the right child
  rightChild(index) {
    return this.storage[this.getRightChildIndex(index)];
  }

  swap(a, b) {
    let temp = this.storage[b];
    this.storage[b] = this.storage[a];
    this.storage[a] = temp;
  }

  //operations
  insert(data) {
    this.storage[this.size] = data;
    this.size += 1;
    this.heapifyUp(this.size - 1);
  }
  heapifyUp(index) {
    if (this.hasParent(index) && this.parent(index) > this.storage[index]) {
      this.swap(this.getParentIndex(index), index);
      this.heapifyUp(this.getParentIndex(index));
    }
  }
  remove() {
    if (this.size == 0) {
      this.storage.splice(0);
      console.log("end", this.storage.length);
      return "Heap is empty";
    }
    let data = this.storage[0];
    this.storage[0] = this.storage[this.size - 1];
    this.size -= 1;
    this.heapifyDown(0);
    return data;
  }
  heapifyDown(index) {
    let smallest = index;
    if (
      this.hasLeftChild(index) &&
      this.leftChild(index) < this.storage[smallest]
    )
      smallest = this.getLeftChildIndex(index);
    if (
      this.hasRightChild(index) &&
      this.rightChild(index) < this.storage[smallest]
    )
      smallest = this.getRightChildIndex(index);
    if (smallest !== index) {
      this.swap(smallest, index);
      this.heapifyDown(smallest);
    }
  }
}

const cr = new ConnectingRopes();

console.log(cr.solve([1, 2, 3, 4, 5]));
console.log(cr.solve([5, 4, 3, 2, 1]));
console.log(cr.solve([1, 2, 3, 4, 5, 5, 4, 3, 2, 1]));
