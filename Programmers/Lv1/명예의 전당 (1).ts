{
  // 최소 힙 구현으로 풀이
  class MinHeap {
    private values: number[];
    private capacity: number;
    constructor(capacity: number) {
      this.values = [];
      this.capacity = capacity;
    }

    getParent(i: number): number {
      return Math.floor((i - 1) / 2);
    }

    getLeftChild(i: number): number {
      return i * 2 + 1;
    }

    getRightChild(i: number): number {
      return i * 2 + 2;
    }

    isLeaf(i: number): boolean {
      return Math.floor(this.values.length / 2) <= i && i < this.values.length;
    }

    swap(i1: number, i2: number): void {
      [this.values[i1], this.values[i2]] = [this.values[i2], this.values[i1]];
    }

    push(value: number): void {
      if (this.values.length >= this.capacity && value < this.getMin()) {
        return;
      }

      if (this.capacity <= this.values.length) {
        this.pop();
      }

      this.values.push(value);
      this.heapifyUp(this.values.length - 1);
    }

    heapifyUp(i: number) {
      let currentIndex = i;
      let parentIndex = this.getParent(i);

      while (
        parentIndex >= 0 &&
        this.values[currentIndex] < this.values[parentIndex]
      ) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
        parentIndex = this.getParent(currentIndex);
      }
    }

    pop(): number | null {
      if (this.values.length < 1) {
        return null;
      }

      const min = this.values[0];
      this.values[0] = this.values.pop()!;
      this.heapifyDown(0);

      return min;
    }

    heapifyDown(i: number) {
      let currentIndex = i;
      let leftChild = this.getLeftChild(i);
      let rightChild = this.getRightChild(i);

      if (this.values[currentIndex] > this.values[leftChild]) {
        currentIndex = leftChild;
      }

      if (this.values[currentIndex] > this.values[rightChild]) {
        currentIndex = rightChild;
      }

      if (currentIndex !== i) {
        this.swap(currentIndex, i);
        this.heapifyDown(currentIndex);
      }
    }

    getMin(): number {
      return this.values[0];
    }
  }

  function solution(k: number, score: number[]): number[] {
    const minHeap = new MinHeap(k);
    const answer: number[] = [];

    for (const s of score) {
      minHeap.push(s);
      answer.push(minHeap.getMin());
    }

    console.log(minHeap);

    return answer;
  }

  console.log(solution(3, [10, 100, 20, 150, 1, 100, 200])); // [10, 10, 10, 20, 20, 100, 100]

  /**
    정확성  테스트
      테스트 1 〉	  통과 (0.33ms, 33.4MB)
      테스트 2 〉	  통과 (0.15ms, 33.4MB)
      테스트 3 〉	  통과 (0.21ms, 33.4MB)
      테스트 4 〉	  통과 (0.33ms, 33.4MB)
      테스트 5 〉	  통과 (0.39ms, 33.5MB)
      테스트 6 〉	  통과 (0.27ms, 33.4MB)
      테스트 7 〉	  통과 (0.30ms, 33.4MB)
      테스트 8 〉	  통과 (0.40ms, 33.4MB)
      테스트 9 〉	  통과 (0.33ms, 33.5MB)
      테스트 10 〉	통과 (0.43ms, 33.5MB)
      테스트 11 〉	통과 (0.34ms, 33.4MB)
      테스트 12 〉	통과 (1.07ms, 33.8MB)
      테스트 13 〉	통과 (1.07ms, 33.8MB)
      테스트 14 〉	통과 (0.97ms, 33.8MB)
      테스트 15 〉	통과 (1.41ms, 33.9MB)
      테스트 16 〉	통과 (1.39ms, 33.9MB)
      테스트 17 〉	통과 (1.42ms, 34MB)
      테스트 18 〉	통과 (1.41ms, 34MB)
      테스트 19 〉	통과 (0.58ms, 33.6MB)
      테스트 20 〉	통과 (0.91ms, 33.8MB)
      테스트 21 〉	통과 (0.68ms, 33.6MB)
      테스트 22 〉	통과 (0.66ms, 33.7MB)
      테스트 23 〉	통과 (0.67ms, 33.7MB)
      테스트 24 〉	통과 (0.69ms, 33.7MB)
      테스트 25 〉	통과 (0.71ms, 33.7MB)
      테스트 26 〉	통과 (0.19ms, 33.5MB)
    채점 결과
      정확성: 100.0
      합계: 100.0 / 100.0 
   */
}
