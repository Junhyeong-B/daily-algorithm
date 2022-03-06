function minSubArrayLen(target: number, nums: number[]): number {
  let sum = 0;
  let left = 0;
  let answer = Infinity;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    if (sum > target) {
      while (left <= right && sum > target) {
        answer = Math.min(answer, (right - left) + 1);
        sum -= nums[left];
        left++;
      }
    }

    if (sum === target) {
      answer = Math.min(answer, (right - left) + 1);
      sum -= nums[left];
      left++;
    }
  }

  return answer === Infinity ? 0 : answer;
};