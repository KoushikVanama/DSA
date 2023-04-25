/**
 * Given an integer array B of size N.

You need to find the Ath largest element in the subarray [1 to i], where i varies from 1 to N. In other words, find the Ath largest element in the sub-arrays [1 : 1], [1 : 2], [1 : 3], ...., [1 : N].

NOTE: If any subarray [1 : i] has less than A elements, then the output should be -1 at the ith index.
 */
class AthLargestElement {
  constructor() {}
  solve(A, B) {
    let heap = new MinHeap();
    for (let i = 0; i < B.length; i++) {
      if (i < A - 1) {
        heap.insert(B[i]);
        B[i] = -1;
      } else {
        if (B[i] > heap.storage[0]) {
          if (heap.size == A) heap.remove();
          heap.insert(B[i]);
          B[i] = heap.storage[0];
        } else {
          B[i] = heap.storage[0];
        }
      }
    }
    return B;
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
    this.size++;
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
    this.size--;
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

const ale = new AthLargestElement();

console.log(ale.solve(4, [1, 2, 3, 4, 5, 6])); // [-1, -1, -1, 1, 2, 3]
console.log(ale.solve(2, [15, 20, 99, 1])); // [-1, 15, 20, 20]
