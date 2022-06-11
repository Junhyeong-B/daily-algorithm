/**
 * Runtime: 196 ms, faster than 100.00% of TypeScript online submissions for Minimum Operations to Reduce X to Zero.
 * Memory Usage: 53.7 MB, less than 100.00% of TypeScript online submissions for Minimum Operations to Reduce X to Zero.
 */

function minOperations(nums: number[], x: number): number {
  const sum = nums.reduce((acc, cur) => acc + cur);
  const target = sum - x;

  if (target < 0) {
    return -1;
  } else if (target === 0) {
    return nums.length;
  }

  let leftIndex = 0;
  let runningSums = 0;
  let maxLength = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    runningSums += nums[i];

    while (target < runningSums) {
      runningSums -= nums[leftIndex++];
    }
    if (target === runningSums) {
      maxLength = Math.max(maxLength, i - leftIndex + 1);
    }
  }

  return maxLength === -Infinity ? -1 : nums.length - maxLength;
};
