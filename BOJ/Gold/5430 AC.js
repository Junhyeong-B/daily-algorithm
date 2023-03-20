const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

class Node {
  constructor(value) {
    this.value = +value;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addFront(value) {
    const node = new Node(value);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  addBack(value) {
    const node = new Node(value);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
  }

  removeFront() {
    if (this.size === 0) {
      return null;
    } else {
      const value = this.head.value;
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      this.size--;
      return value;
    }
  }

  removeBack() {
    if (this.size === 0) {
      return null;
    } else {
      const value = this.tail.value;
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      this.size--;
      return value;
    }
  }

  getValues(isReverse) {
    const arr = [];
    if (isReverse) {
      let currentNode = this.tail;
      while (currentNode) {
        arr.push(currentNode.value);
        currentNode = currentNode.prev;
      }
    } else {
      let currentNode = this.head;
      while (currentNode) {
        arr.push(currentNode.value);
        currentNode = currentNode.next;
      }
    }
    return arr;
  }

  getSize() {
    return this.size;
  }
}

const result = [];

for (let i = 1; i < input.length; i += 3) {
  const p = input[i];
  const strings = JSON.parse(input[i + 2]);
  const deque = new Deque();

  for (const str of strings) {
    deque.addBack(str);
  }

  let isReverse = false;
  let isError = false;
  for (let j = 0; j < p.length; j++) {
    if (p[j] === 'R') {
      isReverse = !isReverse;
    } else {
      let value;
      if (isReverse) {
        value = deque.removeBack();
      } else {
        value = deque.removeFront();
      }

      if (value == null) {
        isError = true;
        break;
      }
    }
  }

  if (deque.getSize() === 0 || isError) {
    result.push('error');
  } else {
    result.push(JSON.stringify(deque.getValues(isReverse)));
  }
}

console.log(result.join('\n'));
