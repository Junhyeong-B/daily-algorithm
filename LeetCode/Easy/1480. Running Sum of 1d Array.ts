{
  /**
   * Runtime: 139 ms, faster than 5.49% of TypeScript online submissions for Running Sum of 1d Array.
   * Memory Usage: 49 MB, less than 5.49% of TypeScript online submissions for Running Sum of 1d Array.
   */

  const runningSum = (nums: number[]): number[] => nums.reduce((a: number[], b: number, i: number) => {
    if (i !== 0) {
      return a.concat(b + a[i - 1])
    } else {
      return a.concat(b)
    }
  }, [])
}


{
  /**
   * Runtime: 79 ms, faster than 68.29% of TypeScript online submissions for Running Sum of 1d Array.
   * Memory Usage: 44.4 MB, less than 77.44% of TypeScript online submissions for Running Sum of 1d Array.
   */
  const runningSum = (nums: number[]): number[] => {
    const answer: number[] = [];
    let sum = 0;

    for (const num of nums) {
      sum += num;
      answer.push(sum);
    }

    return answer;
  };
}