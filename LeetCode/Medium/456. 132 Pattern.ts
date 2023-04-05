/**
 * Runtime 81 ms Beats 73.68%
 * Memory 53.2 MB Beats 73.68%
 */
function find132pattern(nums: number[]): boolean {
  let m = -Infinity;
  const stack: number[] = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    while (nums[i] > stack[stack.length - 1]) {
      m = stack.pop()!;
    }

    if (nums[i] < m) {
      return true;
    }

    stack.push(nums[i]);
  }

  return false;
}

console.log(find132pattern([1, 0, 1, -4, -3])); // false
