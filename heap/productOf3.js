/**
 * Given an integer array A of size N.

You have to find the product of the three largest integers in array A from range 1 to i, where i goes from 1 to N.

Return an array B where B[i] is the product of the largest 3 integers in range 1 to i in array A. If i < 3, then the integer at index i in B should be -1.
 */
class ProductOf3 {
  constructor() {}
  solve(A) {
    let result = [];
    let heap = new MaxHeap();
    for (let i = 0; i < A.length; i++) {
      heap.insert(A[i]);
      if (i < 2) {
        result.push(-1);
      } else {
        let a = heap.remove();
        let b = heap.remove();
        let c = heap.remove();
        heap.insert(a);
        heap.insert(b);
        heap.insert(c);
        result.push(a * b * c);
      }
    }
    return result;
  }
}
class MaxHeap {
  constructor() {
    this.storage = [];
    this.size = 0;
  }
  //index
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  getLeftChildIndex(index) {
    return 2 * index + 1;
  }
  getRightChildIndex(index) {
    return 2 * index + 2;
  }
  //data
  parent(index) {
    return this.storage[this.getParentIndex(index)];
  }
  leftChild(index) {
    return this.storage[this.getLeftChildIndex(index)];
  }
  rightChild(index) {
    return this.storage[this.getRightChildIndex(index)];
  }
  // Bool conditions
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.size;
  }
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.size;
  }
  swap(a, b) {
    let temp = this.storage[a];
    this.storage[a] = this.storage[b];
    this.storage[b] = temp;
  }
  insert(data) {
    this.storage[this.size] = data;
    this.size += 1;
    this.heapifyUp(this.size - 1);
  }
  heapifyUp(index) {
    if (this.hasParent(index) && this.parent(index) < this.storage[index]) {
      this.swap(index, this.getParentIndex(index));
      this.heapifyUp(this.getParentIndex(index));
    }
  }
  remove() {
    if (this.size == 0) {
      this.storage.splice(0);
      return "Heap is Empty";
    }
    let data = this.storage[0];
    this.storage[0] = this.storage[this.size - 1];
    this.size -= 1;
    this.heapifyDown(0);
    return data;
  }
  heapifyDown(index) {
    let greatest = index;
    if (
      this.hasLeftChild(index) &&
      this.leftChild(index) > this.storage[greatest]
    ) {
      greatest = this.getLeftChildIndex(index);
    }
    if (
      this.hasRightChild(index) &&
      this.rightChild(index) > this.storage[greatest]
    ) {
      greatest = this.getRightChildIndex(index);
    }
    if (greatest !== index) {
      this.swap(greatest, index);
      this.heapifyDown(greatest);
    }
  }
}

const po3 = new ProductOf3();

console.log(po3.solve([1, 2, 3, 4, 5]));
console.log(po3.solve([10, 2, 13, 4]));
