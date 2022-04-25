/**
 * Runtime: 82 ms, faster than 68.75% of TypeScript online submissions for Peeking Iterator.
 * Memory Usage: 44.6 MB, less than 87.50% of TypeScript online submissions for Peeking Iterator.
 */

/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Iterator {
 *      hasNext(): boolean {}
 *
 *      next(): number {}
 * }
 */

class PeekingIterator {
  data: number[];
  index: number;
  constructor(iterator: Iterator) {
    const { data, index } = iterator
    this.data = data;
    this.index = index;
  }

  peek(): number {
    return this.data[this.index];
  }

  next(): number {
    const returnValue = this.peek();
    this.index += 1;
    return returnValue;;
  }

  hasNext(): boolean {
    return this.data.length > this.index;
  }
}

/**
* Your PeekingIterator object will be instantiated and called as such:
* var obj = new PeekingIterator(iterator)
* var param_1 = obj.peek()
* var param_2 = obj.next()
* var param_3 = obj.hasNext()
*/