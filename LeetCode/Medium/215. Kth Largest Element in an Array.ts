{
  // 1. sorting을 이용한 풀이

  /**
   * Runtime: 117 ms, faster than 53.68% of TypeScript online submissions for Kth Largest Element in an Array.
   * Memory Usage: 44.5 MB, less than 92.65% of TypeScript online submissions for Kth Largest Element in an Array.
   */

  const findKthLargest = (nums: number[], k: number): number => {
    return nums.sort((a, b) => b - a)[k - 1];
  };
}

{
  // 2. 우선순위 큐(Max Heap) 자료구조를 이용한 풀이

  /**
   * Runtime: 192 ms, faster than 13.61% of TypeScript online submissions for Kth Largest Element in an Array.
   * Memory Usage: 50 MB, less than 5.52% of TypeScript online submissions for Kth Largest Element in an Array.
   */

  interface MaxHeapImpl<T> {
    push(value: T): void;
    pop(): null | T;
    peak(): null | T;
  }

  class Node<T> {
    value: T;
    next: Node<T> | null;
    constructor(value: T) {
      this.value = value;
      this.next = null;
    }
  }

  class MaxHeap<T> implements MaxHeapImpl<T>{
    private _values: T[];

    constructor() {
      this._values = [];
    }

    private swap(index1: number, index2: number) {
      [this._values[index1], this._values[index2]] = [this._values[index2], this._values[index1]]
    }

    private parent(index: number) {
      return Math.floor((index - 1) / 2);
    }

    private leftChild(index: number) {
      return index * 2 + 1;
    }

    private rightChild(index: number) {
      return index * 2 + 2;
    }

    private isLeaf(index: number) {
      return index <= this._values.length - 1 && index >= Math.floor(this._values.length / 2);
    }

    push(value: T) {
      this._values.push(value);
      this.heapifyUp(this._values.length - 1);
    }

    private heapifyUp(index: number) {
      let currentIndex = index;
      let parentIndex = this.parent(index);

      while (parentIndex >= 0 && this._values[parentIndex] < this._values[currentIndex]) {
        this.swap(parentIndex, currentIndex);
        currentIndex = parentIndex;
        parentIndex = this.parent(currentIndex);
      }
    }

    pop() {
      if (this._values.length < 1) {
        return null;
      }

      const returnValue = this._values[0];
      this._values[0] = this._values.pop()!;
      this.heapifyDown(0);

      return returnValue;
    }

    private heapifyDown(index: number) {
      if (this.isLeaf(index)) {
        return;
      }

      let currentIndex = index;
      let leftChild = this.leftChild(index);
      let rightChild = this.rightChild(index);

      if (this._values[currentIndex] < this._values[leftChild]) {
        currentIndex = leftChild;
      }

      if (this._values[currentIndex] < this._values[rightChild]) {
        currentIndex = rightChild;
      }

      if (currentIndex !== index) {
        this.swap(index, currentIndex);
        this.heapifyDown(currentIndex);
      }
    }

    peak() {
      if (this._values.length < 1) {
        return null;
      }

      return this._values[0];
    }
  }

  const findKthLargest = (nums: number[], k: number): number => {
    const maxHeap = new MaxHeap();

    for (const num of nums) {
      maxHeap.push(num);
    }

    for (let i = 0; i < k - 1; i++) {
      maxHeap.pop();
    }

    return maxHeap.peak() as number;
  };
}