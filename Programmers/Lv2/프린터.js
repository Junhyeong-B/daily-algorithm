{
  /*
    정확성  테스트
      테스트 1 〉	통과 (0.38ms, 30.1MB)
      테스트 2 〉	통과 (0.44ms, 30.1MB)
      테스트 3 〉	통과 (0.25ms, 30.2MB)
      테스트 4 〉	통과 (0.34ms, 30.1MB)
      테스트 5 〉	통과 (0.19ms, 30.1MB)
      테스트 6 〉	통과 (0.37ms, 30.1MB)
      테스트 7 〉	통과 (0.22ms, 30.2MB)
      테스트 8 〉	통과 (0.27ms, 30.2MB)
      테스트 9 〉	통과 (0.35ms, 30.1MB)
      테스트 10 〉	통과 (0.40ms, 30.1MB)
      테스트 11 〉	통과 (0.41ms, 30MB)
      테스트 12 〉	통과 (0.19ms, 30.2MB)
      테스트 13 〉	통과 (0.43ms, 30.1MB)
      테스트 14 〉	통과 (0.46ms, 29.6MB)
      테스트 15 〉	통과 (0.35ms, 29.9MB)
      테스트 16 〉	통과 (0.18ms, 29.6MB)
      테스트 17 〉	통과 (0.50ms, 30.2MB)
      테스트 18 〉	통과 (0.20ms, 30.2MB)
      테스트 19 〉	통과 (0.26ms, 29.9MB)
      테스트 20 〉	통과 (0.37ms, 30MB)

    채점 결과
      정확성: 100.0
      합계: 100.0 / 100.0
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
    }

    enqueue(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }

    dequeue() {
      const value = this.head.value;
      this.head = this.head.next;
      return value;
    }
  }

  const solution = (priorities, location) => {
    const queue = new Queue();

    for (let i = 0; i < priorities.length; i++) {
      queue.enqueue([priorities[i], i]);
    }

    const sortedPriorities = priorities.slice().sort((a, b) => b - a);

    let count = 0;
    while (true) {
      const currentNode = queue.head.value;
      if (currentNode[0] === sortedPriorities[count]) {
        queue.dequeue();
        count++;

        if (currentNode[1] === location) {
          return count;
        }
      } else {
        queue.enqueue(queue.dequeue());
      }
    }
  };
}
