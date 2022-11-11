{
  /**
   * Runtime 150 ms Beats 34.25%
   * Memory 47.7 MB Beats 5.48%
   */

  const removeDuplicates = (nums: number[]): number => {
    let currentNum = nums[0];
    for (let i = 1; i < nums.length; i++) {
      if (currentNum === nums[i]) {
        nums[i] = Infinity;
      } else {
        currentNum = nums[i];
      }
    }
    nums.sort((a, b) => a - b);

    let i = nums.length - 1;
    while (nums[i] === Infinity && i >= 0) {
      nums.pop();
      i--;
    }

    return nums.length;
  };
}
