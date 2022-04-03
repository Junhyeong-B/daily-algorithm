/*
  Runtime: 2532 ms, faster than 82.35% of TypeScript online submissions for Range Sum Query - Mutable.
  Memory Usage: 97.7 MB, less than 58.82% of TypeScript online submissions for Range Sum Query - Mutable.
 */

class NumArray {
  nums: number[];
  sum: number[];

  constructor(nums: number[]) {
    this.nums = nums;
    this.sum = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
      this.sum.push(nums[i] + this.sum[i - 1]);
    }
  }

  update(index: number, val: number): void {
    const sub = val - this.nums[index];
    this.nums[index] = val;

    for (let i = index; i < this.sum.length; i++) {
      this.sum[i] += sub;
    }
  }

  sumRange(left: number, right: number): number {
    return this.sum[right] - (left === 0 ? 0 : this.sum[left - 1]);
  }
}

/**
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* obj.update(index,val)
* var param_2 = obj.sumRange(left,right)
*/