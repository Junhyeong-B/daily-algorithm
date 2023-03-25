class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.set = new Set();
  }

  addFront(value) {
    const node = new Node(value);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.set.add(value.join('/'));
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

    this.set.add(value.join('/'));
    this.size++;
  }

  removeFront() {
    if (this.size === 0) {
      return null;
    }

    const frontValue = this.head.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.size--;
    this.set.delete(frontValue.join('/'));
    return frontValue;
  }

  removeBack() {
    if (this.size === 0) {
      return null;
    }

    const backValue = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.size--;
    this.set.delete(backValue.join('/'));
    return backValue;
  }

  peekFront() {
    return this.head?.value;
  }

  peekBack() {
    return this.tail?.value;
  }

  getsize() {
    return this.size;
  }

  hasValue(value) {
    return this.set.has(value.join('/'));
  }
}

const fs = require('fs');
const input = fs.readFileSync('./stdin.txt').toString().trim().split('\n');

const N = +input[0];
const K = +input[1];

const board = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => 0)
);

for (let i = 2; i < K + 2; i++) {
  const [x, y] = input[i].split(' ').map((v) => +v - 1);
  board[x][y] = 1;
}

const dir = input.slice(3 + K).reduce((acc, cur) => {
  const [sec, direction] = cur.split(' ');
  acc[sec] = direction;
  return acc;
}, {});

let x = 0;
let y = 0;
let time = 0;
let currentDirIndex = 0;
const directions = ['RIGHT', 'DOWN', 'LEFT', 'UP'];
const getNextDirectionIndex = (dirIndex, C) => {
  if (C === 'L') {
    return dirIndex - 1 >= 0 ? dirIndex - 1 : 3;
  } else {
    return dirIndex + 1 < 4 ? dirIndex + 1 : 0;
  }
};

const deque = new Deque();
deque.addBack([x, y]);
while (deque.getsize()) {
  const [x, y] = deque.peekFront();

  if (dir[time]) {
    currentDirIndex = getNextDirectionIndex(currentDirIndex, dir[time]);
    delete dir[time];
  }

  let nx = x;
  let ny = y;
  switch (directions[currentDirIndex]) {
    case 'RIGHT':
      ny += 1;
      break;
    case 'LEFT':
      ny -= 1;
      break;
    case 'UP':
      nx -= 1;
      break;
    case 'DOWN':
      nx += 1;
      break;
    default:
      break;
  }

  if (nx < 0 || nx >= N || ny < 0 || ny >= N || deque.hasValue([nx, ny])) {
    break;
  }

  deque.addFront([nx, ny]);
  if (board[nx][ny] === 1) {
    board[nx][ny] = 0;
  } else if (board[nx][ny] === 0) {
    deque.removeBack();
  }

  time++;
}

console.log(time + 1);
