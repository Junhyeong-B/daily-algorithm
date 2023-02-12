/**
 * Runtime 225 ms Beats 50%
 * Memory 49.3 MB Beats 15%
 */

function triangularSum(nums: number[]): number {
  let currentNums = [...nums];
  for (let i = 0; i < nums.length - 1; i++) {
    const newNums: number[] = [];

    for (let j = 0; j < currentNums.length - 1; j++) {
      newNums.push((currentNums[j] + currentNums[j + 1]) % 10);
    }

    currentNums = [...newNums];
  }

  return currentNums[0];
}

console.log(triangularSum([1, 2, 3, 4, 5])); // 8
