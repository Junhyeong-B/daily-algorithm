/**
 * Runtime: 68 ms, faster than 86.36% of TypeScript online submissions for Valid Perfect Square.
 * Memory Usage: 43.5 MB, less than 11.69% of TypeScript online submissions for Valid Perfect Square.
 */

function isPerfectSquare(num: number): boolean {
  for (let i = 1; i <= Math.round(num / 2); i++) {
    const sqrt = i * i;
    if (num === sqrt) {
      return true;
    }

    if (sqrt > num) {
      return false;
    }
  }

  return false;
};
