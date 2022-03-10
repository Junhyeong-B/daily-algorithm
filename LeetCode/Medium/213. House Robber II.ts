{
  /*
    Runtime: 85 ms, faster than 64.78% of TypeScript online submissions for House Robber II.
    Memory Usage: 43.1 MB, less than 44.65% of TypeScript online submissions for House Robber II.
  */
  const rob = (nums: number[]): number => {
    if (!nums.length) {
      return 0;
    }
    if (nums.length === 1) {
      return nums[0];
    }

    const n = nums.length;
    const subArray1 = nums.slice(0, n - 1);
    const subArray2 = nums.slice(1, n);
    const dp1 = Array.from({ length: n - 1 }, (_, i) => subArray1[i]);
    const dp2 = Array.from({ length: n - 1 }, (_, i) => subArray2[i]);

    for (let i = n - 4; i >= 0; i--) {
      if (!dp1[i + 3]) {
        dp1[i] = dp1[i] + dp1[i + 2];
        dp2[i] = dp2[i] + dp2[i + 2];
      } else {
        dp1[i] = dp1[i] + Math.max(dp1[i + 2], dp1[i + 3]);
        dp2[i] = dp2[i] + Math.max(dp2[i + 2], dp2[i + 3]);
      }
    }

    const max1 = Math.max(...dp1);
    const max2 = Math.max(...dp2);

    return Math.max(max1, max2);
  };
}