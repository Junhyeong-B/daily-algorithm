/*
  Runtime: 156 ms, faster than 74.35% of TypeScript online submissions for Longest Increasing Subsequence.
  Memory Usage: 45.1 MB, less than 46.09% of TypeScript online submissions for Longest Increasing Subsequence.
*/

function lengthOfLIS(nums: number[]): number {
  const dp = Array.from({ length: nums.length }, () => 1);

  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
};