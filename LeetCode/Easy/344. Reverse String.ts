/*
  Runtime: 138 ms, faster than 50.99% of TypeScript online submissions for Reverse String.
  Memory Usage: 49.9 MB, less than 65.38% of TypeScript online submissions for Reverse String.
*/

/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left += 1;
    right -= 1;
  }
};