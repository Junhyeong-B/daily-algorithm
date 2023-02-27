/**
 * 내가 갖고있는 자산인 w보다 적은 자산이 필요한 프로젝트 중에서 가장 이익이 높은 것을 고른다.
 * 만약 자산이 2만큼 필요한 프로젝트라면 2만큼을 사용하고 이익을 얻는 것인줄 알았는데, 그게 아니라 자산은 그대로 있고 이익만 취할 수 있다.
 * 결국 내가 갖고있는 자산보다 적은 자산이 필요한 프로젝트를 찾기 위해 MinHeap을 사용하고,
 * 해당 프로젝트들 중 가장 높은 이익을 주는 프로젝트를 찾기 위해 MaxHeap을 사용한다.
 */

/**
 * Runtime 301 ms Beats 66.91%
 * Memory 74.8 MB Beats 70.59%
 */
class BaseHeap<T> {
  protected values: T[];
  constructor() {
    this.values = [];
  }

  protected getLeftChildIndex(i: number) {
    return i * 2 + 1;
  }

  protected getRightChildIndex(i: number) {
    return i * 2 + 2;
  }

  protected getParentIndex(i: number) {
    return Math.floor((i - 1) / 2);
  }

  protected isLeaf(i: number) {
    return Math.floor(this.values.length / 2) <= i && i < this.values.length;
  }

  protected swap(i1: number, i2: number) {
    [this.values[i1], this.values[i2]] = [this.values[i2], this.values[i1]];
  }

  protected heapifyUp(i: number) {
    // overiding
  }

  protected heapifyDown(i: number) {
    // overiding
  }

  peek() {
    return this.values[0];
  }

  push(val: T) {
    this.values.push(val);
    if (this.values.length > 1) {
      this.heapifyUp(this.values.length - 1);
    }
  }

  pop() {
    if (this.values.length === 0) {
      return null;
    }

    if (this.values.length === 1) {
      return this.values.pop()!;
    }

    const returnValue = this.values[0];
    this.values[0] = this.values.pop()!;
    this.heapifyDown(0);

    return returnValue;
  }

  getSize() {
    return this.values.length;
  }
}

class MyMaxHeap<T extends number> extends BaseHeap<T> {
  protected heapifyUp(i: number): void {
    let currentIndex = i;
    let parentIndex = this.getParentIndex(i);

    while (this.values[parentIndex] < this.values[currentIndex]) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }

  protected heapifyDown(i: number): void {
    let currentIndex = i;
    const leftChildIndex = this.getLeftChildIndex(i);
    const rightChildIndex = this.getRightChildIndex(i);

    if (this.values[currentIndex] < this.values[leftChildIndex]) {
      currentIndex = leftChildIndex;
    }

    if (this.values[currentIndex] < this.values[rightChildIndex]) {
      currentIndex = rightChildIndex;
    }

    if (i !== currentIndex) {
      this.swap(i, currentIndex);
      this.heapifyDown(currentIndex);
    }
  }
}

class MyMinHeap<T extends { cap: number; pro: number }> extends BaseHeap<T> {
  protected heapifyUp(i: number): void {
    let currentIndex = i;
    let parentIndex = this.getParentIndex(i);

    while (this.values[parentIndex]?.cap > this.values[currentIndex]?.cap) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }

  protected heapifyDown(i: number): void {
    let currentIndex = i;
    const leftChildIndex = this.getLeftChildIndex(i);
    const rightChildIndex = this.getRightChildIndex(i);

    if (this.values[currentIndex]?.cap > this.values[leftChildIndex]?.cap) {
      currentIndex = leftChildIndex;
    }

    if (this.values[currentIndex]?.cap > this.values[rightChildIndex]?.cap) {
      currentIndex = rightChildIndex;
    }

    if (i !== currentIndex) {
      this.swap(i, currentIndex);
      this.heapifyDown(currentIndex);
    }
  }
}

function findMaximizedCapital(
  k: number,
  w: number,
  profits: number[],
  capital: number[]
): number {
  const maxHeap = new MyMaxHeap<number>();
  const minHeap = new MyMinHeap();
  for (let i = 0; i < profits.length; i++) {
    minHeap.push({ cap: capital[i], pro: profits[i] });
  }

  for (let j = 0; j < k; j++) {
    while (minHeap.peek() && minHeap.peek().cap <= w) {
      const { pro } = minHeap.pop()!;
      maxHeap.push(pro);
    }

    if (maxHeap.getSize() === 0) {
      break;
    }

    w += maxHeap.pop()!;
  }

  return w;
}

console.log(findMaximizedCapital(1, 2, [1, 2, 3], [1, 1, 1])); // 5
