/**
 * 정확성  테스트
 *  테스트 1 〉	통과 (33.54ms, 46.8MB)
 *  테스트 2 〉	통과 (124.35ms, 78.5MB)
 *  테스트 3 〉	통과 (199.18ms, 98.1MB)
 *  테스트 4 〉	통과 (132.48ms, 83.4MB)
 *  테스트 5 〉	통과 (205.56ms, 132MB)
 *  테스트 6 〉	통과 (61.26ms, 51.8MB)
 *  테스트 7 〉	통과 (203.07ms, 106MB)
 *  테스트 8 〉	통과 (15.34ms, 40MB)
 *  테스트 9 〉	통과 (185.01ms, 91.1MB)
 *  테스트 10 〉	통과 (256.64ms, 118MB)
 * 채점 결과
 *  정확성: 100.0
 *  합계: 100.0 / 100.0
 */

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
    this.size++;
  }

  dequeue() {
    if (this.size === 0) {
      return null;
    }

    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

/**
 * @param {number[]} order
 * @returns
 */

function solution(order) {
  const subContainer = [];
  const box = new Queue();
  for (let i = 1; i <= order.length; i++) {
    box.enqueue(i);
  }

  let index = 0;
  let count = 0;
  while (box.size) {
    const currentBox = order[index];
    if (currentBox === box[0]) {
      count++;
      index++;
      box.dequeue();
    } else {
      if (subContainer.length === 0) {
        subContainer.push(box.dequeue());
        continue;
      }

      const lastBox = subContainer[subContainer.length - 1];
      if (order[index] === lastBox) {
        count++;
        index++;
        subContainer.pop();
      } else {
        if (currentBox < lastBox) {
          break;
        }

        subContainer.push(box.dequeue());
      }
    }
  }

  while (subContainer.length) {
    if (order[index] === subContainer[subContainer.length - 1]) {
      count++;
      index++;
      subContainer.pop();
    } else {
      break;
    }
  }

  return count;
}
