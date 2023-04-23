/**
 * Misha loves eating candies. She has been given N boxes of Candies.

She decides that every time she will choose a box having the minimum number of candies, eat half of the candies and put the remaining candies in the other box that has the minimum number of candies.
Misha does not like a box if it has the number of candies greater than B so she won't eat from that box. Can you find how many candies she will eat?

NOTE 1: If a box has an odd number of candies then Misha will eat the floor(odd / 2).

NOTE 2: The same box will not be chosen again.
 */
class MishaAndCandies {
  constructor() {}
  solve(A, B) {
    let result = 0;
    let remainingCandies;
    let heap = new MinHeap();
    for (let i = 0; i < A.length; i++) {
      heap.insert(A[i]);
    }
    while (heap.size > 0) {
      let candies = heap.remove();
      if (candies <= B) {
        result += Math.floor(candies / 2);
        remainingCandies = candies - Math.floor(candies / 2);
      }
      if (heap.size >= 1) {
        let box = heap.remove();
        heap.insert(box + remainingCandies);
      }
    }
    return result;
  }
}
class MinHeap {
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
    if (this.hasParent(index) && this.parent(index) > this.storage[index]) {
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
      this.leftChild(index) < this.storage[greatest]
    ) {
      greatest = this.getLeftChildIndex(index);
    }
    if (
      this.hasRightChild(index) &&
      this.rightChild(index) < this.storage[greatest]
    ) {
      greatest = this.getRightChildIndex(index);
    }
    if (greatest !== index) {
      this.swap(greatest, index);
      this.heapifyDown(greatest);
    }
  }
}

const mac = new MishaAndCandies();

console.log(mac.solve([3, 2, 3], 4)); // 2
console.log(mac.solve([1, 2, 1], 2)); // 1
console.log(
  mac.solve(
    [
      986, 5404, 1402, 4295, 1567, 4642, 875, 963, 6230, 1844, 1847, 6770, 2024,
      5405, 3147, 8569, 372, 9196, 1721, 5008, 1591, 5903, 3209, 6072, 7989,
      2530, 2695, 5002, 2528, 2599, 4908, 2757, 3060, 4028, 3410, 8049, 4645,
      7328, 7758, 5517, 9638, 3111, 8273, 1461, 3440, 7702, 1119, 3162, 1960,
      9824, 4456, 5923, 6372, 8789, 114, 542, 8122, 7372, 3391, 2243, 8436,
      4839, 8311, 3156, 1591, 1880, 8401, 5207, 1363, 7525, 8103, 2324, 331,
      4076, 3780, 4595, 7479, 2665, 1813, 1241, 878, 2013, 2691, 7844, 5554,
      2961, 5099, 4406, 7747, 3718, 2781, 1218, 9692, 7920, 6373, 3746, 4626,
      4177, 6674, 6631, 2658, 4980, 1692, 6198, 3589, 9119, 5884, 2994, 8623,
      1952, 8576, 938, 4605, 5041, 8166, 6554, 8636, 4844, 6377, 7929, 9202,
      3064, 7869, 9389, 8398, 5296, 5062, 5787, 1922, 2288, 1838, 2723, 2831,
      4810, 894, 1966, 6710, 3074, 6403, 2311, 8635, 4477, 2604, 5598, 8587,
      3681, 6296, 3504, 9829, 4323, 5283, 1135, 9796, 6955, 1414, 9266, 3578,
      7061, 7792, 6403, 7196, 5854, 2884, 2933, 1779, 507, 1688, 7748, 1189,
      1965, 7087, 3549, 8076, 6697, 6064, 7517, 4372, 2708, 7494, 9026, 5782,
      2227, 6150, 2427, 1675, 8923, 607, 8558, 2985, 3850, 9002, 7676, 9032,
      1105, 3564, 2733, 7459, 6148, 6286, 4904, 4196, 527, 6151, 2014, 9418,
      9594, 6831, 3657, 8440, 2335, 1014, 2877, 6457, 2841, 3859, 7130, 7332,
      3583, 9012, 2543, 929, 300, 6108, 4112, 7703, 9915, 859, 8146, 5899, 2810,
      4283, 8545, 1288, 2227, 1789, 9305, 4570, 6313, 2993, 7317, 8258, 8409,
      3465, 8825, 8794, 7512, 6517, 5759, 2562, 1880, 7249, 4030, 134, 3084,
      7196, 8407, 7563, 5450, 5605, 8154, 6860, 1628, 679, 2744, 3729, 56, 4572,
      2432, 7744, 7894, 8572, 1114, 3529, 7201, 870, 1712, 8898, 9290, 1412,
      3172, 7714, 7728, 6280, 6398, 5275, 4353, 5649, 7660, 4372, 3290, 5325,
      9454, 5959, 2834, 306, 4292, 9785, 671, 9206, 1446, 9846, 8212, 2748,
      8210, 2889, 4860, 661, 4636, 7739, 8445, 5584, 6319, 6752, 2402, 3873,
      1485, 8243, 7303, 7222, 8479, 3109, 6204, 8233, 8668, 458, 6014, 8602,
      7693, 9704, 6127, 2847, 7941, 1667, 3941, 6838, 703, 9812, 4852, 7258,
      3396, 9941, 8459, 4684, 8461, 4459, 7331, 708, 5033, 3391, 489, 9465,
      9630, 9776, 5480, 1094, 266, 3294, 6281, 9125, 1685, 6378, 8680, 22, 8434,
      7167, 2056, 2955, 3428, 4449, 6697, 5719, 8535, 7056, 8260, 2135, 9454,
      5811, 9460, 6447, 8094, 96, 7678, 4657, 118, 455, 2932, 3266, 8818, 4061,
      9150, 3734, 2923, 7559, 7526, 4800, 4321, 9053, 446, 1764, 5253, 4660,
      5062, 2223, 1207, 9512, 8443, 7656, 3409, 7546, 9214, 9357, 6087, 9382,
      8000, 5974, 3032, 4489, 174, 4522, 6602, 2596, 7230, 7359, 7780, 5384,
      4442, 7008, 1820, 8064, 8331, 5113, 5053, 8336, 4798, 4771, 8230, 9794,
      6858, 1272, 4358, 5947, 650, 2337, 7911, 9111, 268, 2553, 9699, 7409,
      8806, 9993, 57, 7437, 5229, 6020, 834, 12, 4727, 9124, 6039, 8367, 3715,
      9773, 2861, 2260, 648, 4160, 5147, 2851, 9548, 9807, 1525, 2635, 8068,
      2323, 5380, 6484,
    ],
    1275
  )
); // 12074
