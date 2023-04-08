/**
 * Runtime 382 ms Beats 86.55%
 * Memory 76.3 MB Beats 86.56%
 */

class MyNode {
  value: number;
  next: MyNode | null;
  prev: MyNode | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class MyDeque {
  head: MyNode | null;
  tail: MyNode | null;
  size: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addFront(value: number) {
    const node = new MyNode(value);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head!.prev = node;
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  addBack(value: number) {
    const node = new MyNode(value);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.size++;
  }

  removeFront() {
    if (this.size === 0) {
      return null;
    }

    const value = this.head?.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
      return value;
    }

    this.head = this.head?.next!;
    this.head.prev = null;
    this.size--;
    return value;
  }

  removeBack() {
    if (this.size === 0) {
      return null;
    }

    const value = this.tail?.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size--;
      return value;
    }

    this.tail = this.tail?.prev!;
    this.tail.next = null;
    this.size--;
    return value;
  }

  getFront() {
    return this.head?.value;
  }

  getBack() {
    return this.tail?.value;
  }

  getSize() {
    return this.size;
  }
}

function maxSlidingWindow(nums: number[], k: number): number[] {
  const deque = new MyDeque();
  let l = 0;
  let r = 0;
  const result: number[] = [];

  while (r < nums.length) {
    while (deque.getSize() > 0 && nums[deque.getBack()!] < nums[r]) {
      deque.removeBack();
    }
    deque.addBack(r);

    if (l > deque.getFront()!) {
      deque.removeFront();
    }

    if (r + 1 >= k) {
      result.push(nums[deque.getFront()!]);
      l += 1;
    }

    r += 1;
  }
  return result;
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3, 3, 5, 5, 6, 7]
