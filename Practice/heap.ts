{
  /*
    ※ 우선순위 큐
      - FIFO인 큐와 달리 우선 순위가 높은 요소가 먼저 나가는 큐
      - 자료구조가 아니라 개념
      - 힙(Heap)은 우선순위 큐를 구현하기 위한 형태 중 하나

    ※ 힙(Heap)
      - 이진 트리 형태를 가지며 우선순위가 높은 요소가 먼저 나가기 위해 요소가 삽입, 삭제될 때 정렬된다.
      - 우선순위 큐와 힙이 같은 개념이 아니고 우선순위 큐를 구현하기 위한 방법 중 하나이다.
    
      1) 특징
        - 우선순위가 높은 요소가 먼저 나간다.
        - 루트가 가장 큰 값이 되는 최대 힙(Max Heap)과 루트가 가장 작은 값이 되는 최소 힙(Min Heap)이 있다.
      
      2) 힙 요소 추가
        1. 추가할 요소는 트리 가장 마지막에 추가한다.
        2. 이후 해당 요소의 부모 정점보다 우선순위가 높다면 부모 정점과 순서를 바꾼다.
        3. 이 과정을 반복하면 결국 우선순위가 높은 정점이 루트가 된다.
        4. 완전 이진 트리의 높이는 logN 이므로 힙 요소 추가 알고리즘은 O(logN) 시간복잡도를 가진다.
      
      3) 힙 요소 제거
        1. 요소 제거는 루트 정점만 가능하다.
        2. 루트 정점이 제거되면 가장 마지막 정점이 루트에 위치한다.
        3. 루트 정점의 두 자식 정점 중 더 우선순위가 높은 정점과 바꾼다.
        4. 두 자식 정점이 우선순위가 더 낮을 때 까지 반복한다.
        5. 힙 요소 제거 알고리즘은 추가와 마찬가지로 O(logN) 시간복잡도를 가진다.
  */

  interface HeapImpl {
    /*
      class의 구현 사항을 interface로 정의할 때 "public"만 작성한다.
      protected, private 키워드로 작성된 interface들은 작성하지 않는다.
    */
    push(value: number): void;
    pop(): number | null;
    getValues(): number[];
  }

  class MaxHeap implements HeapImpl {
    private _values: number[];
    constructor() {
      this._values = [];
    }

    private swap(index1: number, index2: number) {
      [this._values[index1], this._values[index2]] = [this._values[index2], this._values[index1]];
    }

    private parent(index: number) {
      return Math.floor((index - 1) / 2);
    }

    private leftChild(index: number) {
      return (index * 2) + 1;
    }

    private rightChild(index: number) {
      return (index * 2) + 2;
    }

    private isLeaf(index: number) {
      return (
        index >= Math.floor(this._values.length / 2) && index <= this._values.length - 1
      );
    }

    push(value: number) {
      this._values.push(value);
      this.heapifyUp(this._values.length - 1);
    }

    private heapifyUp(index: number) {
      let currentIndex = index;
      let parentIndex = this.parent(currentIndex);

      while (currentIndex > 0 && this._values[parentIndex] < this._values[currentIndex]) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
        parentIndex = this.parent(parentIndex);
      }
    }

    pop() {
      if (this._values.length < 1) {
        return null;
      }

      const max = this._values[0];
      this._values[0] = this._values.pop()!;
      this.heapifyDown(0);

      return max;
    }

    private heapifyDown(index: number) {
      if (this.isLeaf(index)) {
        return;
      }

      let largestIndex = index;
      let leftIndex = this.leftChild(index);
      let rightIndex = this.rightChild(index);

      if (this._values[largestIndex] < this._values[leftIndex]) {
        largestIndex = leftIndex;
      }

      if (this._values[largestIndex] < this._values[rightIndex]) {
        largestIndex = rightIndex;
      }

      if (largestIndex !== index) {
        this.swap(index, largestIndex);
        this.heapifyDown(largestIndex);
      }
    }

    getValues() {
      return this._values;
    }
  }

  const maxheap = new MaxHeap();
  maxheap.push(32);
  maxheap.push(36);
  maxheap.push(52);
  maxheap.push(24);
  maxheap.push(45);
  console.log(maxheap.getValues()); // [ 52, 45, 36, 24, 32 ]
  console.log(maxheap.pop()); // 52
  console.log(maxheap.getValues()); // [ 45, 32, 36, 24 ]
}
