/**
 * Runtime: 121 ms, faster than 30.56% of TypeScript online submissions for Min Cost Climbing Stairs.
 * Memory Usage: 44.9 MB, less than 51.23% of TypeScript online submissions for Min Cost Climbing Stairs.
 */

function minCostClimbingStairs(cost: number[]): number {
  const dp = [...cost];

  for (let i = dp.length - 3; i >= 0; i--) {
    dp[i] = Math.min(dp[i] + dp[i + 1], dp[i] + dp[i + 2])
  }

  return Math.min(dp[0], dp[1]);
};