/**
 * Runtime 65 ms Beats 82.86%
 * Memory 44.8 MB Beats 17.14%
 */
function findKthPositive(arr: number[], k: number): number {
  const nums: number[] = [];
  const maxNumber = Math.max(...arr);

  let i = 0;
  for (let j = 1; j <= maxNumber + k; j++) {
    if (arr[i] === j) {
      i++;
      continue;
    }

    nums.push(j);
  }

  return nums[k - 1];
}

console.log(findKthPositive([5, 6, 7, 8, 9], 9)); // 14
