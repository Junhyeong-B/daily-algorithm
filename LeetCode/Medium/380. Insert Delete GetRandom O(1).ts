{
  /**
   * Runtime 689 ms Beats 84.71%
   * Memory 116.1 MB Beats 27.6%
   */

  class RandomizedSet {
    private set: Set<number>;
    constructor() {
      this.set = new Set();
    }

    insert(val: number): boolean {
      const size = this.set.size;
      this.set.add(val);
      return size !== this.set.size;
    }

    remove(val: number): boolean {
      const size = this.set.size;
      this.set.delete(val);
      return size !== this.set.size;
    }

    getRandom(): number {
      const index = Math.floor(Math.random() * this.set.size);
      return [...this.set][index];
    }
  }

  /**
   * Your RandomizedSet object will be instantiated and called as such:
   * var obj = new RandomizedSet()
   * var param_1 = obj.insert(val)
   * var param_2 = obj.remove(val)
   * var param_3 = obj.getRandom()
   */

  const obj = new RandomizedSet();
  console.log(obj.insert(1)); // true
  console.log(obj.remove(2)); // false
  console.log(obj.insert(2)); // true
  console.log(obj.getRandom()); // 1 or 2
  console.log(obj.remove(1)); // true
  console.log(obj.insert(2)); // false
  console.log(obj.getRandom()); // 2
}
