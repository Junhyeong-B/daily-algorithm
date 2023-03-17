const fs = require('fs');
const N = fs.readFileSync('/dev/stdin').toString();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.size += 1;
  }

  dequeue() {
    if (this.size === 0) {
      return null;
    }

    const firstValue = this.head.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.size -= 1;
      return firstValue;
    }

    this.head = this.head.next;
    this.size -= 1;
    return firstValue;
  }
}

const queue = new Queue();

for (let i = 1; i <= N; i++) {
  queue.enqueue(i);
}

while (queue.size > 1) {
  queue.dequeue();
  queue.enqueue(queue.dequeue());
}

console.log(queue.dequeue());
