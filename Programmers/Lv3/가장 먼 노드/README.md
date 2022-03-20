```jsx
{
  /*
    정확성  테스트
      테스트 1 〉	통과 (0.41ms, 30.1MB)
      테스트 2 〉	통과 (0.45ms, 30MB)
      테스트 3 〉	통과 (0.56ms, 30.2MB)
      테스트 4 〉	통과 (0.69ms, 30.3MB)
      테스트 5 〉	통과 (1.69ms, 30.1MB)
      테스트 6 〉	통과 (4.40ms, 31.4MB)
      테스트 7 〉	통과 (33.35ms, 48.5MB)
      테스트 8 〉	통과 (42.85ms, 57.2MB)
      테스트 9 〉	통과 (45.30ms, 56.2MB)

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
      this.size = 0;
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
      this.size += 1;
    }

    dequeue() {
      const value = this.head.value;
      this.head = this.head.next;
      this.size -= 1;
      return value;
    }
  }

  const solution = (n, edge) => {
    const graph = Array.from({ length: n + 1 }, () => []);

    for (const [a, b] of edge) {
      graph[a].push(b);
      graph[b].push(a);
    }

    const nextVisitNode = new Queue();
    const visitedNode = Array.from({ length: n + 1 }, () => 0);
    visitedNode[1] = 1;

    for (const node of graph[1]) {
      nextVisitNode.enqueue([node, 2]);
      visitedNode[node] = 2;
    }

    while (nextVisitNode.size) {
      const [nextVisit, distance] = nextVisitNode.dequeue();

      for (const node of graph[nextVisit]) {
        if (visitedNode[node] === 0) {
          visitedNode[node] = distance + 1;
          nextVisitNode.enqueue([node, distance + 1]);
        }
      }
    }

    const max = nextVisitNode.tail.value[1];
    return visitedNode.filter((distance) => distance === max).length;
  };
}
```