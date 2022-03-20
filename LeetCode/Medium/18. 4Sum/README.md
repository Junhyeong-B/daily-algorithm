```jsx
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const answer = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      let l = j + 1;
      let r = nums.length - 1;

      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r];
        if (sum < target) {
          l += 1;
        } else if (sum > target) {
          r -= 1;
        } else {
          answer.push([nums[i], nums[j], nums[l], nums[r]]);
          l += 1;
          while (nums[l] === nums[l - 1] && l < r) {
            l += 1;
          }
        }
      }
    }
  }

  return answer;
};

console.log(fourSum((nums = [2, 2, 2, 2, 2]), (target = 8)));
```