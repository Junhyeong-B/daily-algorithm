/**
 * Runtime: 136 ms, faster than 7.69% of TypeScript online submissions for Non-decreasing Array.
 * Memory Usage: 45.9 MB, less than 23.08% of TypeScript online submissions for Non-decreasing Array.
 */

function checkPossibility(nums: number[]): boolean {
  let count = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      count++;

      if (count > 1) {
        return false;
      }

      const leftNumber = i > 1 ? nums[i - 2] : -Infinity;
      if (leftNumber > nums[i]) {
        nums[i] = nums[i - 1];
      } else {
        nums[i - 1] = leftNumber;
      }
    }
  }

  return true;
};
