{
  /*
    Runtime: 118 ms, faster than 54.17% of TypeScript online submissions for Split Array Largest Sum.
    Memory Usage: 44.7 MB, less than 66.67% of TypeScript online submissions for Split Array Largest Sum.
  */
  const canSplitNums = (nums: number[], max: number, m: number): boolean => {
    let count = 1;
    let sum = 0;

    for (const num of nums) {
      sum += num;
      if (sum > max) {
        sum = num;
        count += 1;
      }

      if (count > m) {
        return false;
      }
    }

    return true;
  }

  const splitArray = (nums: number[], m: number): number => {
    let left = Math.max(...nums);
    let right = nums.reduce((acc, cur) => acc + cur);
    let mid = 0;

    while (left < right) {
      mid = Math.floor((left + right) / 2);

      if (canSplitNums(nums, mid, m)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return left;
  };
}