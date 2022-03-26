/*
  Runtime: 80 ms, faster than 87.93% of TypeScript online submissions for Add Digits.
  Memory Usage: 45.5 MB, less than 9.29% of TypeScript online submissions for Add Digits.
*/

function addDigits(num: number): number {
  let number = num;
  while (number.toString().length !== 1) {
    number = number.toString().split("").reduce((acc: number, cur) => +acc + +cur, 0);
  }

  return number;
};