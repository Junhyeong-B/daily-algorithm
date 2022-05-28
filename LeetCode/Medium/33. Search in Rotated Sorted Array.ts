/**
 * Runtime: 98 ms, faster than 38.72% of TypeScript online submissions for Search in Rotated Sorted Array.
 * Memory Usage: 44.5 MB, less than 54.28% of TypeScript online submissions for Search in Rotated Sorted Array.
 */

function search(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[l] <= nums[mid]) {
      if (nums[l] <= target && target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[r]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }


  return -1;
};