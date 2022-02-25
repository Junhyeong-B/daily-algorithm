/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let lt = 0;
  let rt = nums.length - 1;
  if (nums[lt] < nums[rt]) {
    return nums[lt];
  }

  while (lt <= rt) {
    if (lt === rt) {
      return nums[lt];
    }

    const mid = Math.floor((lt + rt) / 2);
    if (mid === lt) {
      return Math.min(nums[lt], nums[rt]);
    }

    if (nums[lt] < nums[mid] && nums[mid] < nums[rt]) {
      return nums[lt];
    } else if (nums[lt] < nums[mid] && nums[rt] < nums[mid]) {
      lt = mid + 1;
    } else {
      if (nums[mid - 1] > nums[mid]) {
        return nums[mid];
      }

      rt = mid - 1;
    }
  }
};
