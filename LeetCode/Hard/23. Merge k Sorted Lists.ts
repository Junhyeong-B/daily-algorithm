/**
 * Runtime 116 ms Beats 60.97%
 * Memory 49.2 MB Beats 36.12%
 */

/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class MyMinHeap {
  private values: number[];
  constructor() {
    this.values = [];
  }

  private getParentIndex(i: number) {
    return Math.floor((i - 1) / 2);
  }

  private getLeftChildIndex(i: number) {
    return i * 2 + 1;
  }

  private getRightChildIndex(i: number) {
    return i * 2 + 2;
  }

  private isLeaf(i: number) {
    return Math.floor(this.values.length / 2) <= i && i < this.values.length;
  }

  private swap(i1: number, i2: number) {
    [this.values[i1], this.values[i2]] = [this.values[i2], this.values[i1]];
  }

  push(value: number) {
    this.values.push(value);
    this.heapifyUp(this.values.length - 1);
  }

  private heapifyUp(i: number) {
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
      return null;
    }

    if (this.values.length === 1) {
      return this.values.pop();
    }

    const minValue = this.values[0];
    this.values[0] = this.values.pop()!;
    this.heapifyDown(0);

    return minValue;
  }

  private heapifyDown(i: number) {
    let currentIndex = i;
    let leftChildIndex = this.getLeftChildIndex(i);
    let rightChildIndex = this.getRightChildIndex(i);

    if (this.values[leftChildIndex] < this.values[currentIndex]) {
      currentIndex = leftChildIndex;
    }

    if (this.values[rightChildIndex] < this.values[currentIndex]) {
      currentIndex = rightChildIndex;
    }

    if (currentIndex !== i) {
      this.swap(currentIndex, i);
      this.heapifyDown(currentIndex);
    }
  }

  getSize() {
    return this.values.length;
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const minHeap = new MyMinHeap();

  for (let i = 0; i < lists.length; i++) {
    let currentNode = lists[i];

    while (currentNode) {
      minHeap.push(currentNode.val);
      currentNode = currentNode.next;
    }
  }

  const heapLength = minHeap.getSize();
  if (heapLength === 0) {
    return null;
  }

  const listNode = new ListNode();
  let head = listNode;
  for (let i = 0; i < heapLength; i++) {
    i;
    const value = minHeap.pop() as number;
    head.next = new ListNode(value);
    head = head.next;
  }

  return listNode.next;
}

const listA = new ListNode(1, new ListNode(4, new ListNode(5)));
const listB = new ListNode(1, new ListNode(3, new ListNode(4)));
const listC = new ListNode(2, new ListNode(6));

console.log(mergeKLists([listA, listB, listC])); // [1, 1, 2, 3, 4, 4, 5, 6]
