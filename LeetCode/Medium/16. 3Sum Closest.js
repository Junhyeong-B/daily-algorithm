/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let answer = Number.MAX_SAFE_INTEGER;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];

      if (sum > target) {
        r -= 1;
      } else if (sum < target) {
        l += 1;
      } else {
        return sum;
      }

      answer =
        Math.abs(target - sum) < Math.abs(target - answer) ? sum : answer;
    }
  }

  return answer;
};
