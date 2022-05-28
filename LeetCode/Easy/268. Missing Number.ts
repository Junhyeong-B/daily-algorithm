/**
 * Runtime: 120 ms, faster than 31.61% of TypeScript online submissions for Missing Number.
 * Memory Usage: 45.5 MB, less than 53.68% of TypeScript online submissions for Missing Number.
 */

function missingNumber(nums: number[]): number {
  const n = nums.length;
  const sum = nums.reduce((a, b) => a + b);
  const maxSum = Array.from({ length: n }, (_, i) => i + 1).reduce((a, b) => a + b);

  return maxSum - sum;
};
