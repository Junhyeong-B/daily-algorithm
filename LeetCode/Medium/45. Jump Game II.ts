/**
 * Runtime 77 ms Beats 76.88%
 * Memory 44.7 MB Beats 88.71%
 */

function jump(nums: number[]): number {
  let count = 0;
  let l = 0;
  let r = 0;

  while (r < nums.length - 1) {
    let maxJump = 0;
    for (let i = l; i <= r; i++) {
      maxJump = Math.max(maxJump, i + nums[i]);
    }
    l = r + 1;
    r = maxJump;
    count++;
  }

  return count;
}

console.log(jump([2, 3, 1, 1, 4])); // 2
