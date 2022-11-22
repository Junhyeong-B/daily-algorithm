/**
 * Runtime 335 ms Beats 43.94%
 * Memory 46.4 MB Beats 89.39%
 */

 function numSquares(n: number): number {
  const dp: number[] = Array.from({ length: n + 1 }, () => n);
  dp[0] = 0;

  for (let i = 1; i < n + 1; i++) {
    inner: for (let j = 1; j < i + 1; j++) {
      const square = j * j;
      if (i < square) {
        break inner;
      }

      dp[i] = Math.min(dp[i], dp[i - square] + 1);
    }
  }

  return dp[n];
}

console.log(numSquares(13));
