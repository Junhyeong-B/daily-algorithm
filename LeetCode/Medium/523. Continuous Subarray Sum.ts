/**
 * Runtime: 170 ms, faster than 60.71% of TypeScript online submissions for Continuous Subarray Sum.
 * Memory Usage: 63.6 MB, less than 50.00% of TypeScript online submissions for Continuous Subarray Sum.
 */

 function checkSubarraySum(nums: number[], k: number): boolean {
  let sum = 0;
  const map = new Map<number, number>();
  map.set(0, -1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const remainder = sum % k;

    if (map.has(remainder)) {
      const index = map.get(remainder) as number;
      if (i - index > 1) {
        return true;
      }
    } else {
      map.set(remainder, i);
    }
  }

  return false;
}

console.log(checkSubarraySum([23, 2, 6, 4, 7], 6)); // true
