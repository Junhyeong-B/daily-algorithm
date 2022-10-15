{
  /**
   * Runtime: 3856 ms, faster than 17.10% of TypeScript online submissions for LRU Cache.
   * Memory Usage: 99.8 MB, less than 91.32% of TypeScript online submissions for LRU Cache.
   */
  class LRUCache {
    private cache: Map<number, number>;
    private capacity: number;

    constructor(capacity: number) {
      this.cache = new Map();
      this.capacity = capacity;
    }

    get(key: number): number {
      const value = this.cache.get(key) ?? -1;
      if (value !== -1) {
        this.cache.delete(key);
        this.cache.set(key, value);
      }
      return value;
    }

    put(key: number, value: number): void {
      if (this.cache.has(key)) {
        this.cache.delete(key);
        this.cache.set(key, value);
        return;
      }

      if (this.cache.size < this.capacity) {
        this.cache.set(key, value);
      } else {
        const cache = Array.from(this.cache);
        const oldestKey = cache[0][0];
        this.cache.delete(oldestKey);
        this.cache.set(key, value);
      }
    }
  }

  const cache = new LRUCache(2);
  cache.put(1, 1);
  cache.put(2, 2);
  console.log(cache.get(1)); // 1
  cache.put(3, 3);
  console.log(cache.get(1)); // 1
  console.log(cache.get(2)); // -1
  cache.put(4, 4);
  console.log(cache.get(4)); // 4
  console.log(cache); // {{1=>1}, {4=>4}}
}
