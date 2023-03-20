class DequeNode<T> {
  value: T;
  next: DequeNode<T> | null;
  prev: DequeNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

interface DequeImpl<T> {
  addFront: (value: T) => void;
  addBack: (value: T) => void;
  removeFront: () => T | null;
  removeBack: () => T | null;
  getSize: () => number;
  peekFront: () => T | undefined;
  peekBack: () => T | undefined;
}

class Deque<T> implements DequeImpl<T> {
  private head: DequeNode<T> | null;
  private tail: DequeNode<T> | null;
  private size: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addFront(value: T) {
    const node = new DequeNode(value);
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

  addBack(value: T) {
    const node = new DequeNode(value);
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
    } else {
      const value = this.head!.value;
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head!.next;
        this.head!.prev = null;
      }
      this.size--;
      return value;
    }
  }

  removeBack() {
    if (this.size === 0) {
      return null;
    } else {
      const value = this.tail!.value;
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail!.prev;
        this.tail!.next = null;
      }
      this.size--;
      return value;
    }
  }

  getSize() {
    return this.size;
  }

  peekFront() {
    return this.head?.value;
  }

  peekBack() {
    return this.tail?.value;
  }
}

const deque = new Deque();
deque.addFront(1);
deque.addFront(2);
deque.addBack(3);
deque.addBack(4);
deque.addFront(5);
deque.addBack(6);

console.log(deque); // [5, 2, 1, 3, 4, 6]
console.log(deque.peekFront()); // 5
console.log(deque.peekBack()); // 6
console.log(deque.removeFront()); // 5
console.log(deque.removeFront()); // 2
console.log(deque.removeFront()); // 1
console.log(deque.getSize()); // 3
console.log(deque.removeFront()); // 3
console.log(deque.removeBack()); // 6
console.log(deque.removeBack()); // 4
console.log(deque.removeBack()); // null
console.log(deque.peekFront()); // undefined
console.log(deque); // []
