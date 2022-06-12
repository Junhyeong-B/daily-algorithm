/**
 * Runtime: 315 ms, faster than 50.00% of TypeScript online submissions for Maximum Erasure Value.
 * Memory Usage: 69.9 MB, less than 41.67% of TypeScript online submissions for Maximum Erasure Value.
 */

function maximumUniqueSubarray(nums: number[]): number {
  let max = 0;
  let left = 0;
  let sum = 0;
  const subArrayUnits = new Set<number>();

  for (let right = 0; right < nums.length; right++) {
    if (subArrayUnits.has(nums[right])) {
      while (subArrayUnits.has(nums[right])) {
        sum -= nums[left];
        subArrayUnits.delete(nums[left++])
      }
    }

    subArrayUnits.add(nums[right]);
    sum += nums[right];
    max = Math.max(max, sum);
  }

  return max;
};
