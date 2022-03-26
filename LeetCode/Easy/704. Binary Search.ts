/*
  Runtime: 76 ms, faster than 79.65% of TypeScript online submissions for Binary Search.
  Memory Usage: 46.5 MB, less than 29.72% of TypeScript online submissions for Binary Search.
*/

function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};
