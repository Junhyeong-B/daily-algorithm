{/**
 * Runtime: 86 ms, faster than 45.45% of TypeScript online submissions for Wiggle Subsequence.
 * Memory Usage: 42.8 MB, less than 63.64% of TypeScript online submissions for Wiggle Subsequence.
 */
  const POSITIVE = "POSITIVE";
  const NEGATIVE = "NEGATIVE";
  const NEUTRAL = "NEUTRAL";

  const diffrentOfNums = (num1: number, num2: number) => {
    if (num1 < num2) {
      return POSITIVE;
    } else if (num1 > num2) {
      return NEGATIVE;
    }

    return NEUTRAL;
  }

  function wiggleMaxLength(nums: number[]): number {
    if (nums.length === 1) {
      return 1;
    }

    let count = 1;
    let currentIndex = 1;
    let prevStatus = diffrentOfNums(nums[0], nums[1]);
    if (prevStatus !== NEUTRAL) {
      count++;
    }

    for (let i = 2; i < nums.length; i++) {
      const currentStatus = diffrentOfNums(nums[currentIndex], nums[i]);
      currentIndex = i;
      if (prevStatus === currentStatus || currentStatus === NEUTRAL) {
        continue;
      }

      count++;
      prevStatus = currentStatus;
    }

    return count;
  };
}