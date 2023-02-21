/**
 * Runtime 71 ms Beats 55.56%
 * Memory 45.9 MB Beats 74.7%
 */

function isValid(index: number, nums: number[]): boolean {
  if (index % 2 === 0) {
    return nums[index + 1] === nums[index];
  } else {
    return nums[index + 1] !== nums[index];
  }
}

function singleNonDuplicate(nums: number[]): number {
  let l = -1;
  let r = nums.length - 1;

  while (l + 1 < r) {
    const mid = Math.floor((l + r) / 2);

    if (isValid(mid, nums)) {
      l = mid;
    } else {
      r = mid;
    }
  }

  return nums[r];
}

console.log(singleNonDuplicate([1, 2, 2, 3, 3]));
