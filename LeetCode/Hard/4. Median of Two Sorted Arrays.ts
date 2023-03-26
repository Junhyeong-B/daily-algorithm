/**
 * Runtime 124 ms Beats 29.70%
 * Memory 48.4 MB Beats 57.39%
 */
function merge(nums1: number[], nums2: number[]): number[] {
  let i = 0;
  let j = 0;
  const result = new Array<number>();
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      result.push(nums1[i]);
      i++;
    } else {
      result.push(nums2[j]);
      j++;
    }
  }

  if (i < nums1.length) {
    return result.concat(nums1.slice(i));
  } else {
    return result.concat(nums2.slice(j));
  }
}

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums1.length === 0 && nums2.length === 0) {
    return 0;
  }
  const mergedArray = merge(nums1, nums2);

  let l = 0;
  let r = mergedArray.length - 1;
  const mid = Math.floor((l + r) / 2);
  if (mergedArray.length % 2 === 1) {
    return mergedArray[mid];
  } else {
    return (mergedArray[mid] + mergedArray[mid + 1]) / 2;
  }
}

console.log(findMedianSortedArrays([3], [1, 7, 10])); // 5
