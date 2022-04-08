class KthLargest {
  nums: number[];
  k: number;

  constructor(k: number, nums: number[]) {
    this.nums = nums;
    this.k = k;
  }

  add(val: number): number {
    this.nums.push(val);
    this.nums.sort((a, b) => b - a);
    return this.nums[this.k - 1];
  }
}

/**
* Your KthLargest object will be instantiated and called as such:
* var obj = new KthLargest(k, nums)
* var param_1 = obj.add(val)
*/

/*
  Runtime: 5092 ms, faster than 11.87% of TypeScript online submissions for Kth Largest Element in a Stream.
  Memory Usage: 70.7 MB, less than 6.78% of TypeScript online submissions for Kth Largest Element in a Stream.
 */