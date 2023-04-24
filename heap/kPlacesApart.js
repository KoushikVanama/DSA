/**
 * N people having different priorities are standing in a queue.

The queue follows the property that each person is standing at most B places away from its position in the sorted queue.

Your task is to sort the queue in the increasing order of priorities.

NOTE:

No two persons can have the same priority.
Use the property of the queue to sort the queue with complexity O(NlogB).
 */
class KplacesApart {
  constructor() {}
  solve(A, B) {
    let heap = new MinHeap();
    let result = [];
    for (let i = 0; i <= B; i++) {
      heap.insert(A[i]);
    }
    for (let i = B + 1; i < A.length; i++) {
      result.push(heap.remove());
      heap.insert(A[i]);
    }
    while (heap.size > 0) {
      result.push(heap.remove());
    }
    return result;
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

const kpa = new KplacesApart();

console.log(kpa.solve([1, 40, 2, 3], 2));
console.log(kpa.solve([2, 1, 17, 10, 21, 95], 1));
