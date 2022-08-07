/**
 * Runtime: 173 ms, faster than 60.00% of TypeScript online submissions for Count Vowels Permutation.
 * Memory Usage: 49.1 MB, less than 100.00% of TypeScript online submissions for Count Vowels Permutation.
 */

function countVowelPermutation(n: number): number {
  const MOD = 10 ** 9 + 7;
  let dp: number[] = Array(5).fill(1);

  for (let i = 1; i < n; i++) {
    let nextDp: number[] = Array(5).fill(0);
    nextDp[0] = dp[1];
    nextDp[1] = (dp[0] + dp[2]) % MOD;
    nextDp[2] = (dp[0] + dp[1] + dp[3] + dp[4]) % MOD;
    nextDp[3] = (dp[2] + dp[4]) % MOD;
    nextDp[4] = dp[0];

    dp = nextDp;
  }

  let res = 0;

  for (const count of dp) {
    res += count;

    if (res >= MOD) {
      res -= MOD;
    }
  }

  return res;
};