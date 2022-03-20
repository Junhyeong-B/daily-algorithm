```tsx
{
  /*
    Runtime: 79 ms, faster than 72.73% of TypeScript online submissions for Implement Queue using Stacks.
    Memory Usage: 43.4 MB, less than 14.77% of TypeScript online submissions for Implement Queue using Stacks.
  */
  class MyQueue {
    queue: Array<number | undefined>;
    head: number;
    tail: number;
    size: number;
    constructor() {
      this.queue = [];
      this.head = 0;
      this.tail = 0;
      this.size = 0;
    }

    push(x: number): void {
      this.queue[this.tail] = x;
      this.tail += 1;
      this.size += 1;
    }

    pop(): number {
      const value = this.queue[this.head];
      this.queue[this.head] = undefined;
      this.head += 1;
      this.size -= 1;
      return value!;
    }

    peek(): number {
      return this.queue[this.head]!;
    }

    empty(): boolean {
      return this.size === 0;
    }
  }

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/}```