/**
 * Runtime 103 ms Beats 75%
 * Memory 53.7 MB Beats 75%
 */
function zeroFilledSubarray(nums: number[]): number {
  let numberOfSubarray = 0;
  let length = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      length++;
      numberOfSubarray += length;
    } else {
      length = 0;
    }
  }

  return numberOfSubarray;
}

console.log(zeroFilledSubarray([1, 3, 0, 0, 2, 0, 0, 4])); // 6
