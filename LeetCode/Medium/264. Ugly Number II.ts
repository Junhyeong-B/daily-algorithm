function nthUglyNumber(n: number): number {
  const nums = [1];
  let i2 = 0;
  let i3 = 0;
  let i5 = 0;
  let uglyNumber = 0;

  for (let i = 0; i < n - 1; i++) {
    uglyNumber = Math.min(nums[i2] * 2, nums[i3] * 3, nums[i5] * 5);
    nums.push(uglyNumber);

    if (uglyNumber === nums[i2] * 2) i2 += 1;
    if (uglyNumber === nums[i3] * 3) i3 += 1;
    if (uglyNumber === nums[i5] * 5) i5 += 1;
  }


  return nums[n - 1];
};

console.log(nthUglyNumber(10))