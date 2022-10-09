/**
 * Runtime: 132 ms, faster than 52.92% of TypeScript online submissions for Two Sum.
 * Memory Usage: 45.3 MB, less than 37.70% of TypeScript online submissions for Two Sum.
 */

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) === undefined) {
      map.set(target - nums[i], i);
    } else {
      return [map.get(nums[i])!, i];
    }
  }

  return [];
}
