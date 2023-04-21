/**
 * Runtime 197 ms Beats 95%
 * Memory 74.5 MB Beats 25%
 */
class Solution {
  values: Map<number, number[]>;
  constructor(nums: number[]) {
    this.values = new Map();

    for (let i = 0; i < nums.length; i++) {
      const storedValues = this.values.get(nums[i]) ?? [];
      storedValues.push(i);

      this.values.set(nums[i], storedValues);
    }
  }

  pick(target: number): number {
    const storedValues = this.values.get(target)!;
    const randomIndex = Math.floor(Math.random() * storedValues.length);
    return storedValues[randomIndex];
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

const solution = new Solution([1, 2, 3, 3, 3]);
console.log(solution.pick(3)); // 2 | 3 | 4 중 한가지 반환. 랜덤하게 반환될 수 있는 모든 index의 확률은 동일
