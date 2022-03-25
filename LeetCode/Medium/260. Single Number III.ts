/*
  Runtime: 103 ms, faster than 33.33% of TypeScript online submissions for Single Number III.
  Memory Usage: 46.5 MB, less than 48.15% of TypeScript online submissions for Single Number III.
*/

function singleNumber(nums: number[]): number[] {
  const hash = new Map<number, number>();

  for (const num of nums) {
    hash.set(num, hash.has(num) ? hash.get(num)! + 1 : 1);
  }

  return Array.from(hash).filter(numberAndCount => numberAndCount[1] === 1).map(numberAndCount => numberAndCount[0]);
};