/**
 * Given an integer array B of size N.

You need to find the Ath largest element in the subarray [1 to i], where i varies from 1 to N. In other words, find the Ath largest element in the sub-arrays [1 : 1], [1 : 2], [1 : 3], ...., [1 : N].

NOTE: If any subarray [1 : i] has less than A elements, then the output should be -1 at the ith index.
 */
class RunningMedian {
  constructor() {}
  solve(A) {
    let minHeap = new MinHeap();
    let maxHeap = new MaxHeap();
    maxHeap.insert(A[0]);
    let median = A[0];
    let c = [A[0]];
    for (let i = 1; i < A.length; i++) {
      if (A[i] <= median) {
        maxHeap.insert(A[i]);
        if (maxHeap.size - minHeap.size > 1) {
          minHeap.insert(maxHeap.remove());
        }
      } else {
        minHeap.insert(A[i]);
        if (minHeap.size > maxHeap.size) {
          maxHeap.insert(minHeap.remove());
        }
      }
      c[i] = maxHeap.storage[0];
      median = c[i];
    }
    return c;
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

const rm = new RunningMedian();

console.log(rm.solve([1, 2, 5, 4, 3])); // [1, 1, 2, 2, 3]
console.log(rm.solve([5, 17, 100, 11])); // [5, 5, 17, 11]
