/**
 * Runtime 79 ms Beats 71.19%
 * Memory 45.3 MB Beats 15.25%
 */

function shuffle(nums: number[], n: number): number[] {
  const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const index = Math.floor(i / 2);
    if (i % 2 === 0) {
      result.push(nums[index]);
    } else {
      result.push(nums[n + index]);
    }
  }
  return result;
}

console.log(shuffle([2, 5, 1, 3, 4, 7], 3)); // [2, 3, 5, 4, 1, 7]
