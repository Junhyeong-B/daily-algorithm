/*
  Runtime: 76 ms, faster than 86.03% of TypeScript online submissions for Next Permutation.
  Memory Usage: 45 MB, less than 56.62% of TypeScript online submissions for Next Permutation.
 */

/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  let num1 = -1;
  let num2 = -1;
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      num1 = i - 1;
      break;
    }
  }

  if (num1 === -1) {
    nums.sort((a, b) => a - b);
    return;
  }

  let max = nums[num1];
  for (let i = nums.length - 1; i > num1; i--) {
    if (max < nums[i]) {
      max = nums[i];
      num2 = i;
      break;
    }
  }


  [nums[num1], nums[num2]] = [nums[num2], nums[num1]]
  const tempArray = nums.splice(num1 + 1);
  tempArray.sort((a, b) => a - b);
  nums.push(...tempArray);
};
