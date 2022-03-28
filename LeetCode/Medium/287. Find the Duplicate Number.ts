/*
  Runtime: 175 ms, faster than 31.04% of TypeScript online submissions for Find the Duplicate Number.
  Memory Usage: 58.2 MB, less than 30.46% of TypeScript online submissions for Find the Duplicate Number.
*/
function findDuplicate(nums: number[]): number {
  const set = new Set<number>();

  for (const num of nums) {
    if (set.has(num)) {
      return num;
    }

    set.add(num);
  }

  return 0;
};