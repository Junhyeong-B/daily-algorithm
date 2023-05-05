const fs = require('fs');
const [_, ...input] = fs
  .readFileSync('./stdin.txt')
  .toString()
  .trim()
  .split('\n')
  .map((n) => +n);

class MinAbsHeap {
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
    this.values.push({
      abs: Math.abs(value),
      val: value,
    });
    this.heapifyUp(this.values.length - 1);
  }

  isMinimum(index, targetIndex) {
    return this.values[index]?.abs === this.values[targetIndex]?.abs
      ? this.values[index]?.val < this.values[targetIndex]?.val
      : this.values[index]?.abs < this.values[targetIndex]?.abs;
  }

  heapifyUp(i) {
    if (this.values.length <= 1) {
      return;
    }

    let currentIndex = i;
    let parentIndex = this.getParentIndex(i);
    while (this.isMinimum(currentIndex, parentIndex)) {
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
      return this.values.pop().val;
    }

    const minValue = this.values[0];
    this.values[0] = this.values.pop();
    this.heapifyDown(0);

    return minValue.val;
  }

  heapifyDown(i) {
    if (this.isLeaf(i)) {
      return;
    }

    let currentIndex = i;
    const leftChildIndex = this.getLeftChildIndex(i);
    const rightChildIndex = this.getRightChildIndex(i);

    if (this.isMinimum(leftChildIndex, currentIndex)) {
      currentIndex = leftChildIndex;
    }

    if (this.isMinimum(rightChildIndex, currentIndex)) {
      currentIndex = rightChildIndex;
    }

    if (currentIndex !== i) {
      this.swap(i, currentIndex);
      this.heapifyDown(currentIndex);
    }
  }
}

const minHeap = new MinAbsHeap();
const result = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === 0) {
    result.push(minHeap.pop());
  } else {
    minHeap.push(input[i]);
  }
}

console.log(result.join('\n'));
