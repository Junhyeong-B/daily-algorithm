/**
 * Runtime 109 ms Beats 21.46%
 * Memory 49.2 MB Beats 22.44%
 */

function subarraysDivByK(nums: number[], k: number): number {
  const sums: Record<string, number> = { 0: 1 };
  let sum = 0;
  let count = 0;
  for (const num of nums) {
    sum = (sum + num) % k;
    if (sum < 0) {
      sum += k;
    }

    if (sum in sums) {
      count += sums[sum];
    }

    sums[sum] = (sums[sum] || 0) + 1;
  }

  return count;
}
