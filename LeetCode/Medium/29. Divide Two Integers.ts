/**
 * Runtime 143 ms Beats 56.56%
 * Memory 45.3 MB Beats 16.39%
 */

function divide(dividend: number, divisor: number): number {
  const MAX = 2 ** 31 - 1;
  const MIN = (MAX + 1) * -1;
  let result = dividend / divisor;
  result = result < 0 ? Math.ceil(result) : Math.floor(result);

  return result >= MAX ? MAX : result <= MIN ? MIN : result;
}

console.log(divide(7, -3));
