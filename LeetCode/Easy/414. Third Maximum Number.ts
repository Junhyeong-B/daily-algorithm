/**
 * Runtime: 115 ms, faster than 44.78% of TypeScript online submissions for Third Maximum Number.
 * Memory Usage: 44.9 MB, less than 67.91% of TypeScript online submissions for Third Maximum Number.
 */

function thirdMax(nums: number[]): number {
  const set = [...new Set(nums)];

  if (set.length < 3) {
    return Math.max(...set);
  }

  set.sort((a, b) => b - a);
  return set[2];
}
