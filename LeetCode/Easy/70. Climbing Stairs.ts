/**
 * Runtime: 113 ms, faster than 11.74% of TypeScript online submissions for Climbing Stairs.
 * Memory Usage: 43 MB, less than 50.06% of TypeScript online submissions for Climbing Stairs. 
 */

function climbStairs(n: number): number {
  const dp = [0, 1, 2, 3];
  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};