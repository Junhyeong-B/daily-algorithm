const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());
const answer = [];

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this._head = null;
    this._tail = null;
    this._size = 0;
  }

  push(value) {
    const node = new Node(value);
    if (!this._head) {
      this._head = node;
    } else {
      this._tail.next = node;
    }

    this._tail = node;
    this._size += 1;
  }

  pop() {
    if (this._size === 0) {
      return -1;
    }

    const returnValue = this._head.value;
    this._head = this._head.next;
    this._size -= 1;
    return returnValue;
  }

  empty() {
    return this._size === 0 ? 1 : 0;
  }

  front() {
    if (this._size === 0) {
      return -1;
    }

    return this._head.value;
  }

  back() {
    if (this._size === 0) {
      return -1;
    }

    return this._tail.value;
  }

  getSize() {
    return this._size;
  }
}

const queue = new Queue();
for (let i = 1; i < input.length; i++) {
  switch (input[i]) {
    case "front":
      answer.push(queue.front());
      break;
    case "back":
      answer.push(queue.back());
      break;
    case "empty":
      answer.push(queue.empty());
      break;
    case "size":
      answer.push(queue.getSize());
      break;
    case "pop":
      answer.push(queue.pop());
      break;
    default:
      const [, value] = input[i].split(" ");
      queue.push(value);
  }
}

console.log(answer.join("\n"));
