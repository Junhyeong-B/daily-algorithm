```jsx
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const copiedArray = [...nums];
  let startIndex = k % nums.length;

  for (let i = 0; i < nums.length; i++) {
    nums[startIndex] = copiedArray[i];
    if (startIndex === nums.length - 1) {
      startIndex = 0;
    } else {
      startIndex++;
    }
  }
};
```