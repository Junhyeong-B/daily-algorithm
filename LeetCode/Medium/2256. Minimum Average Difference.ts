/**
 * Runtime 253 ms Beats 12.50%
 * Memory 96.1 MB Beats 12.50%
 */

function minimumAverageDifference(nums: number[]): number {
  const leftSum: number[] = [];
  const rightSum: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    leftSum.push(nums[i] + (leftSum[i - 1] || 0));
    rightSum.push(nums[nums.length - 1 - i] + (rightSum[i - 1] || 0));
  }

  const leftDiff = leftSum.map((num, i) => Math.floor(num / (i + 1)));
  const rightDiff = rightSum.map((num, i) => Math.floor(num / (i + 1)));
  rightDiff.pop();
  rightDiff.reverse();
  rightDiff.push(0);

  let min = Infinity;
  let minIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    const diff = Math.abs(leftDiff[i] - rightDiff[i]);
    if (diff === 0) {
      return i;
    }

    if (diff < min) {
      minIndex = i;
      min = diff;
    }
  }

  return minIndex;
}

console.log(minimumAverageDifference([5, 4, 3, 2, 1])); // 1
