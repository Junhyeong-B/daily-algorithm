const fs = require('fs');
const [_, ...input] = fs
  .readFileSync('./stdin.txt')
  .toString()
  .trim()
  .split('\n')
  .map((n) => +n);

class MinHeap {
  constructor() {
    this.values = [];
  }

  getLeftChildIndex(i) {
    return i * 2 + 1;
  }

  getRightChildIndex(i) {
    return i * 2 + 2;
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  isLeaf(i) {
    return (
      i >= Math.floor(this.values.length / 2) && i <= this.values.length - 1
    );
  }

  swap(i1, i2) {
    [this.values[i1], this.values[i2]] = [this.values[i2], this.values[i1]];
  }

  push(value) {
    this.values.push(value);
    this.heapifyUp(this.values.length - 1);
  }

  heapifyUp(i) {
    if (this.values.length <= 1) {
      return;
    }

    let currentIndex = i;
    let parentIndex = this.getParentIndex(i);
    while (this.values[currentIndex] < this.values[parentIndex]) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(parentIndex);
    }
  }

  pop() {
    if (this.values.length === 0) {
      return 0;
    }

    if (this.values.length === 1) {
      return this.values.pop();
    }

    const minValue = this.values[0];
    this.values[0] = this.values.pop();
    this.heapifyDown(0);

    return minValue;
  }

  heapifyDown(i) {
    if (this.isLeaf(i)) {
      return;
    }

    let currentIndex = i;
    const leftChildIndex = this.getLeftChildIndex(i);
    const rightChildIndex = this.getRightChildIndex(i);

    if (this.values[leftChildIndex] < this.values[currentIndex]) {
      currentIndex = leftChildIndex;
    }

    if (this.values[rightChildIndex] < this.values[currentIndex]) {
      currentIndex = rightChildIndex;
    }

    if (currentIndex !== i) {
      this.swap(i, currentIndex);
      this.heapifyDown(currentIndex);
    }
  }

  getSize() {
    return this.values.length;
  }
}

let result = 0;
const minHeap = new MinHeap();

for (const num of input) {
  minHeap.push(num);
}

while (minHeap.getSize() >= 2) {
  const num1 = minHeap.pop();
  const num2 = minHeap.pop();
  const sum = num1 + num2;
  result += sum;
  minHeap.push(sum);
}

console.log(result);
