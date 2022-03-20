```jsx
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const triplets = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum < 0) {
        l += 1;
      } else if (sum > 0) {
        r -= 1;
      } else {
        triplets.push([nums[i], nums[l], nums[r]]);
        l += 1;
        while (nums[l] === nums[l - 1] && l < r) {
          l += 1;
        }
      }
    }
  }

  return triplets;
};
```