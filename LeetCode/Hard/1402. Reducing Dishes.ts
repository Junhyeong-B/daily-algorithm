/**
 * Runtime 277 ms Beats 25%
 * Memory 49.7 MB Beats 25%
 */
function maxSatisfaction(satisfaction: number[]): number {
  const n = satisfaction.length;
  const sortedSatisfaction = [...satisfaction].sort((a, b) => a - b);

  if (sortedSatisfaction[n - 1] < 0) {
    return 0;
  }

  const dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: n + 1 }, () => -1)
  );

  const dfs = (
    satisfaction: number[],
    index: number,
    time: number,
    dp: number[][]
  ) => {
    if (index === n) {
      return 0;
    }

    if (dp[index][time] !== -1) {
      return dp[index][time];
    }

    const includeDish =
      satisfaction[index] * time + dfs(satisfaction, index + 1, time + 1, dp);
    const excludeDish = 0 + dfs(satisfaction, index + 1, time, dp);

    dp[index][time] = Math.max(includeDish, excludeDish);
    return dp[index][time];
  };

  return dfs(sortedSatisfaction, 0, 1, dp);
}

console.log(maxSatisfaction([4, 3, 2])); // 20
