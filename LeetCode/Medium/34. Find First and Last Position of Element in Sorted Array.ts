/**
 * Runtime 110 ms Beats 50.64%
 * Memory 45 MB Beats 28.85%
 */

const findFirst = (nums: number[], target: number): number => {
  let l = 0;
  let r = nums.length - 1;
  let firstIndex = -1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    if (nums[mid] === target) {
      firstIndex = mid;
      r = mid - 1;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid - 1;
    }
  }

  return firstIndex;
};

const findLast = (nums: number[], target: number): number => {
  let l = 0;
  let r = nums.length - 1;
  let lastIndex = -1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    if (nums[mid] === target) {
      lastIndex = mid;
      l = mid + 1;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid - 1;
    }
  }

  return lastIndex;
};

function searchRange(nums: number[], target: number): number[] {
  const firstIndex = findFirst(nums, target);
  const lastIndex = findLast(nums, target);

  return [firstIndex, lastIndex];
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
