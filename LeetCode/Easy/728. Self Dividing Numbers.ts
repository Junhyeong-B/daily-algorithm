/**
 * Runtime: 131 ms, faster than 39.66% of TypeScript online submissions for Self Dividing Numbers.
 * Memory Usage: 47.7 MB, less than 27.59% of TypeScript online submissions for Self Dividing Numbers.
 */

const isSelfDividingNumber = (num: number): boolean =>
  num
    .toString()
    .split('')
    .every((digit) => num % +digit === 0);

function selfDividingNumbers(left: number, right: number): number[] {
  const nums = Array.from({ length: right - left + 1 }, (_, i) => left + i);
  return nums.filter((num) => isSelfDividingNumber(num));
}
