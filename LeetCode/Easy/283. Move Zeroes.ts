/*
  Runtime: 176 ms, faster than 22.57% of TypeScript online submissions for Move Zeroes.
  Memory Usage: 46.9 MB, less than 88.23% of TypeScript online submissions for Move Zeroes.
*/
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let count = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      count += 1;
    }
  }

  nums.push(...Array(count).fill(0))
};