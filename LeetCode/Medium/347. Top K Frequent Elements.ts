/*
  Runtime: 166 ms, faster than 16.04% of TypeScript online submissions for Top K Frequent Elements.
  Memory Usage: 45 MB, less than 96.23% of TypeScript online submissions for Top K Frequent Elements.
 */

function topKFrequent(nums: number[], k: number): number[] {
  const countNums = new Map();

  for (const num of nums) {
    const prevCount = countNums.get(num) || 0;
    countNums.set(num, prevCount + 1);
  }

  return Array.from(countNums)
    .sort((a, b) => b[1] - a[1])
    .filter((_, i) => i < k)
    .map(countNum => countNum[0]);
};