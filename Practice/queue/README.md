```tsx
{
  class Node<T> {
    value: T;
    next: Node<T> | null;
    constructor(value: T) {
      this.value = value;
      this.next = null;
    }
  }

  interface QueueImpl<T> {
    enqueue(value: T): void,
    dequeue(): T | void,
    peek(): T | void,
  }

  class Queue<T> implements QueueImpl<T> {
    head: Node<T> | null;
    tail: Node<T> | null;
    size: number;

    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }

    enqueue(value: T): void {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        if (!this.tail) {
          return;
        }

        this.tail.next = newNode;
        this.tail = newNode;
      }

      this.size += 1;
    }

    dequeue(): T | void {
      if (!this.head) {
        return;
      }

      const value = this.head.value;
      this.head = this.head.next;
      this.size -= 1;
      return value;
    }

    peek() {
      if (!this.head) {
        return;
      }

      return this.head.value;
    }
  }

  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue("str");
  queue.enqueue({ a: 10 });
  console.log(queue);
  /*
    Queue {
      head: Node { value: 1, next: Node { value: 'str', next: [Object] } },
      tail: Node { value: { a: 10 }, next: null },
      size: 3
    } 
  */
  console.log(queue.dequeue()); // 1
  console.log(queue.peek()); // str
}```