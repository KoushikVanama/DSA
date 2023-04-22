/**
 * Given N bags, each bag contains Bi chocolates. There is a kid and a magician.
In a unit of time, the kid can choose any bag i, and eat Bi chocolates from it, then the magician will fill the ith bag with floor(Bi/2) chocolates.

Find the maximum number of chocolates that the kid can eat in A units of time.

NOTE:

floor() function returns the largest integer less than or equal to a given number.
Return your answer modulo 109+7
 */
class KidMagicianChocolates {
  constructor() {}
  solve(A, B) {
    let result = 0;
    let heap = new MaxHeap();
    for (let i = 0; i < B.length; i++) {
      heap.insert(B[i]);
    }
    while (A > 0) {
      let temp = heap.remove();
      result += temp;
      heap.insert(Math.floor(temp / 2));
      A--;
    }
    return result % (Math.pow(10, 9) + 7);
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

const kmc = new KidMagicianChocolates();

console.log(kmc.solve(3, [6, 5]));
console.log(kmc.solve(5, [2, 6, 8, 10]));
