/**
 * Runtime: 330 ms, faster than 27.52% of TypeScript online submissions for Design HashMap.
 * Memory Usage: 52.4 MB, less than 94.50% of TypeScript online submissions for Design HashMap.
 */

class MyHashMap {
  values: Record<number, number>;
  constructor() {
    this.values = {};
  }

  put(key: number, value: number): void {
    this.values[key] = value;
  }

  get(key: number): number {
    return this.values[key] === undefined ? -1 : this.values[key];
  }

  remove(key: number): void {
    delete this.values[key];
  }
}

/**
* Your MyHashMap object will be instantiated and called as such:
* var obj = new MyHashMap()
* obj.put(key,value)
* var param_2 = obj.get(key)
* obj.remove(key)
*/