/**
 * Runtime: 93 ms, faster than 60.70% of TypeScript online submissions for Add Binary.
 * Memory Usage: 44.3 MB, less than 95.63% of TypeScript online submissions for Add Binary.
 */

function addBinary(a: string, b: string): string {
  const intA = BigInt("0b" + a);
  const intB = BigInt("0b" + b);

  return (intA + intB).toString(2)
};