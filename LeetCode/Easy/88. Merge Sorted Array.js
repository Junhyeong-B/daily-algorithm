/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (let i = nums1.length - 1; i >= 0; i--) {
    if (i === m - 1) {
      break;
    } else {
      nums1.pop();
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (i === n) {
      break;
    } else {
      nums1.push(nums2[i]);
    }
  }

  nums1.sort((a, b) => a - b);
};
