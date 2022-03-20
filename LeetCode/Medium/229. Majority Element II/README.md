```tsx
{
  /*
    Runtime: 112 ms, faster than 53.85% of TypeScript online submissions for Majority Element II.
    Memory Usage: 46 MB, less than 30.77% of TypeScript online submissions for Majority Element II.
  */
  const majorityElement = (nums: number[]): number[] => {
    const answer: number[] = [];
    const hash = new Map<number, number>();

    for (const num of nums) {
      const getNum = hash.get(num) || 0;
      hash.set(num, getNum + 1);
    }

    for (const [num, count] of Array.from(hash)) {
      if (count > nums.length / 3) {
        answer.push(num);
      }
    }

    return answer;
  };
}```