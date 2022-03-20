```tsx
function rob(nums: number[]): number {
  if (nums.length < 3) {
    return Math.max(...nums);
  }

  const dp = [...nums];

  for (let i = nums.length - 3; i >= 0; i--) {
    dp[i] += Math.max(dp[i + 2], dp[i + 3] || 0);
  }

  return Math.max(dp[0], dp[1]);
}
```