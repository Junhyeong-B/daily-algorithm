```jsx
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let lt = 0;
  let rt = nums.length - 1;

  while (lt <= rt) {
    if (lt === rt) {
      return nums[lt];
    }

    if (nums[lt] === nums[rt]) {
      lt++;
      continue;
    }

    let mid = Math.floor((lt + rt) / 2);
    if (lt === mid) {
      return Math.min(nums[lt], nums[rt]);
    }

    if (nums[lt] < nums[mid] && nums[lt] < nums[rt]) {
      return nums[lt];
    } else if (nums[mid] < nums[lt] && nums[rt] < nums[lt]) {
      if (nums[mid - 1] > nums[mid]) {
        return nums[mid];
      }

      rt = mid;
    } else {
      lt = mid;
    }
  }
};
```