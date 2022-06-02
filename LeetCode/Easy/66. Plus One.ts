/**
 * Runtime: 76 ms, faster than 66.82% of TypeScript online submissions for Plus One.
 * Memory Usage: 43.4 MB, less than 33.96% of TypeScript online submissions for Plus One.
 */

function plusOne(digits: number[]): number[] {
  const bigNumber = BigInt(digits.join("")) + BigInt(1);
  return bigNumber.toString().split("").map(num => parseInt(num, 10));
};