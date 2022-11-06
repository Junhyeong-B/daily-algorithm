/**
 * Runtime 188 ms Beats 63.85%
 * Memory 51.6 MB Beats 59.48%
 */

class MinStack {
  private stack: { val: number; min: number }[];
  constructor() {
    this.stack = [];
  }

  push(value: number): void {
    if (this.stack.length === 0) {
      this.stack.push({ val: value, min: value });
    } else {
      const { min } = this.stack[this.stack.length - 1];
      this.stack.push({ val: value, min: Math.min(min, value) });
    }
  }

  pop(): void {
    if (this.stack.length > 0) {
      this.stack.pop();
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1].val;
  }

  getMin(): number {
    return this.stack[this.stack.length - 1].min;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(3);
console.log(obj.getMin()); // -2
obj.pop();
console.log(obj.top()); // 0
console.log(obj.getMin()); // -2
