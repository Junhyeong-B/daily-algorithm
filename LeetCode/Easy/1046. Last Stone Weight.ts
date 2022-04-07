/*
  Runtime: 108 ms, faster than 36.74% of TypeScript online submissions for Last Stone Weight.
  Memory Usage: 45.3 MB, less than 10.20% of TypeScript online submissions for Last Stone Weight.
 */

{
  class MaxHeap<T> {
    values: T[];
    size: number;

    constructor() {
      this.values = [];
      this.size = 0;
    }

    parent(index: number) {
      return Math.floor((index - 1) / 2);
    }

    leftChild(index: number) {
      return index * 2 + 1;
    }

    rightChild(index: number) {
      return index * 2 + 2;
    }

    swap(index1: number, index2: number) {
      [this.values[index1], this.values[index2]] = [this.values[index2], this.values[index1]];
    }

    isLeaf(index: number) {
      return (
        index >= Math.floor(this.values.length / 2) && index <= this.values.length - 1
      );
    }

    push(value: T) {
      this.values.push(value);
      this.heapifyUp(this.values.length - 1);
    }

    heapifyUp(index: number) {
      let currentIndex = index;
      let parentIndex = this.parent(index);

      while (currentIndex > 0 && this.values[currentIndex] > this.values[parentIndex]) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
        parentIndex = this.parent(parentIndex);
      }

      this.size += 1;
    }

    pop() {
      if (this.values.length === 0) {
        return null;
      } else if (this.values.length === 1) {
        this.size -= 1;
        return this.values.pop();
      }

      const removedValue = this.values[0];
      this.values[0] = this.values.pop()!;
      this.heapifyDown(0);
      this.size -= 1;

      return removedValue;
    }

    heapifyDown(index: number) {
      if (this.isLeaf(index)) {
        return;
      }

      let currentIndex = index;
      let leftIndex = this.leftChild(index);
      let rightIndex = this.rightChild(index);

      if (this.values[currentIndex] < this.values[leftIndex]) {
        currentIndex = leftIndex;
      }

      if (this.values[currentIndex] < this.values[rightIndex]) {
        currentIndex = rightIndex;
      }

      if (currentIndex !== index) {
        this.swap(index, currentIndex);
        this.heapifyDown(currentIndex);
      }
    }
  }

  function lastStoneWeight(stones: number[]): number {
    const heap = new MaxHeap();

    for (const stone of stones) {
      heap.push(stone);
    }

    while (heap.size > 1) {
      const stone1 = heap.pop() as number;
      const stone2 = heap.pop() as number;

      if (stone1 === stone2) {
        continue;
      } else {
        heap.push((stone1 - stone2));
      }
    }

    return heap.size === 0 ? 0 : heap.pop() as number;
  };
}