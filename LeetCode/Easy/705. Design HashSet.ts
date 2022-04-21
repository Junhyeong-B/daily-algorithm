/**
 * Runtime: 196 ms, faster than 77.48% of TypeScript online submissions for Design HashSet.
 * Memory Usage: 54.2 MB, less than 81.98% of TypeScript online submissions for Design HashSet. 
 */

class MyHashSet {
  values: Record<string, boolean>;
  constructor() {
    this.values = {}
  }

  add(key: number): void {
    if (!!this.values[key]) {
      return;
    }

    this.values[key] = true;
  }

  remove(key: number): void {
    delete this.values[key];
  }

  contains(key: number): boolean {
    return !!this.values[key];
  }
}

/**
* Your MyHashSet object will be instantiated and called as such:
* var obj = new MyHashSet()
* obj.add(key)
* obj.remove(key)
* var param_3 = obj.contains(key)
*/