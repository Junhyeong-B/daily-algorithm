/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0];
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum < 0) {
      max = Math.max(max, nums[i]);
      sum = 0;
      continue;
    }
    max = Math.max(max, sum);
  }

  return max;
};
