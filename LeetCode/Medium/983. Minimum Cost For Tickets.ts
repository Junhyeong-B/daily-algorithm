/**
 * Runtime 72 ms Beats 78.57%
 * Memory 44.5 MB Beats 85.71%
 */
function mincostTickets(days: number[], costs: number[]): number {
  const dp = Array.from({ length: days[days.length - 1] + 1 }, () => 0);
  const daysSet = new Set(days);

  for (let i = 1; i < dp.length; i++) {
    if (!daysSet.has(i)) {
      dp[i] = dp[i - 1];
      continue;
    }

    const oneDay = dp[i - 1] + costs[0];
    const sevenDay = dp[Math.max(0, i - 7)] + costs[1];
    const thirtyDay = dp[Math.max(0, i - 30)] + costs[2];
    dp[i] = Math.min(oneDay, sevenDay, thirtyDay);
  }

  return dp[dp.length - 1];
}

console.log(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]));
