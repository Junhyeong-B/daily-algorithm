/**
 * Runtime 102 ms Beats 23.8%
 * Memory 49.3 MB Beats 15.38%
 */

/**
 Do not return anything, modify nums in-place instead.
 */
 function wiggleSort(nums: number[]): void {
  const sortedNums = nums.slice().sort((a, b) => a - b);

  const mid = Math.ceil(nums.length / 2);
  const smallerNums = sortedNums.slice(0, mid);
  const biggerNums = sortedNums.slice(mid);

  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      nums[i] = smallerNums.pop()!;
    } else {
      nums[i] = biggerNums.pop()!;
    }
  }
}

console.log(wiggleSort([1, 5, 1, 1, 6, 4, 2])); // [2, 6, 1, 5, 1, 4, 1]
