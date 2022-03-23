function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const prefix = Array.from({ length: n + 1 }, () => 1);
  const postfix = Array.from({ length: n + 1 }, () => 1);

  for (let i = 0; i < nums.length; i++) {
    prefix[i + 1] = nums[i] * prefix[i];
  }

  for (let i = n - 1; i >= 0; i--) {
    postfix[i] = nums[i] * postfix[i + 1];
  }

  const answer: number[] = [];

  for (let i = 0; i < n; i++) {
    answer.push(prefix[i] * postfix[i + 1])
  }

  return answer;
};