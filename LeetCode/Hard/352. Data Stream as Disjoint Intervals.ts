{
  /**
   * Runtime 711 ms Beats 10%
   * Memory 55.1 MB Beats 36.67%
   */
  class MyMinimumHeap {
    values: number[];
    set: Set<number>;
    constructor(values: number[] = []) {
      this.values = values;
      this.set = new Set(values);
    }

    private getParent(index: number) {
      return Math.floor((index - 1) / 2);
    }

    private getLeftChild(index: number) {
      return index * 2 + 1;
    }

    private getRightChild(index: number) {
      return index * 2 + 2;
    }

    private swap(index1: number, index2: number) {
      [this.values[index1], this.values[index2]] = [
        this.values[index2],
        this.values[index1],
      ];
    }

    private isLeaf(index: number) {
      return (
        Math.floor(this.values.length / 2) <= index &&
        index <= this.values.length - 1
      );
    }

    push(value: number) {
      const size = this.set.size;
      this.set.add(value);

      if (this.set.size === size) {
        return;
      }

      this.values.push(value);
      this.heapifyUp(this.values.length - 1);
    }

    heapifyUp(index: number) {
      let currentIndex = index;
      let parentIndex = this.getParent(index);

      while (
        parentIndex >= 0 &&
        this.values[currentIndex] < this.values[parentIndex]
      ) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
        parentIndex = this.getParent(parentIndex);
      }
    }

    pop() {
      if (this.values.length === 0) {
        return;
      }

      if (this.values.length === 1) {
        return this.values.pop();
      }

      const minimumValue = this.values[0];
      this.values[0] = this.values.pop()!;
      this.heapifyDown(0);

      return minimumValue;
    }

    heapifyDown(index: number) {
      if (this.isLeaf(index)) {
        return;
      }

      let currentIndex = index;
      const leftChild = this.getLeftChild(index);
      const rightChild = this.getRightChild(index);

      if (
        this.values[leftChild] &&
        this.values[leftChild] < this.values[currentIndex]
      ) {
        currentIndex = leftChild;
      }

      if (
        this.values[rightChild] &&
        this.values[rightChild] < this.values[currentIndex]
      ) {
        currentIndex = rightChild;
      }

      if (currentIndex !== index) {
        this.swap(index, currentIndex);
        this.heapifyDown(currentIndex);
      }
    }

    getSize() {
      return this.values.length;
    }
  }

  class SummaryRanges {
    stream: MyMinimumHeap;
    constructor() {
      this.stream = new MyMinimumHeap();
    }

    addNum(value: number): void {
      this.stream.push(value);
    }

    getIntervals(): number[][] {
      const tempHeap = new MyMinimumHeap(this.stream.values.slice());
      const size = tempHeap.getSize();
      const intervals: number[][] = [];
      let currentInterval: number[] = [];

      for (let i = 0; i < size; i++) {
        const value = tempHeap.pop()!;
        if (currentInterval.length === 0) {
          currentInterval.push(value);
          currentInterval.push(value);
        } else {
          if (value === currentInterval[1] + 1) {
            currentInterval[1] = value;
          } else {
            intervals.push([...currentInterval]);
            currentInterval = [value, value];
          }
        }
      }

      return [...intervals, [...currentInterval]];
    }
  }

  const summaryRanges = new SummaryRanges();
  summaryRanges.addNum(6);
  console.log(summaryRanges.getIntervals()); // [[6, 6]]
  summaryRanges.addNum(6);
  console.log(summaryRanges.getIntervals()); // [[6, 6]]
  summaryRanges.addNum(7);
  console.log(summaryRanges.getIntervals()); // [[6, 7]]
  summaryRanges.addNum(2);
  console.log(summaryRanges.getIntervals()); // [[2, 2], [6, 7]]
  summaryRanges.addNum(1);
  console.log(summaryRanges.getIntervals()); // [[1, 2], [6, 7]]

  /**
   * Your SummaryRanges object will be instantiated and called as such:
   * var obj = new SummaryRanges()
   * obj.addNum(value)
   * var param_2 = obj.getIntervals()
   */
}
