/**
 * Runtime: 3516 ms, faster than 100.00% of TypeScript online submissions for Create Maximum Number.
 * Memory Usage: 49.1 MB, less than 100.00% of TypeScript online submissions for Create Maximum Number. 
 */

const getMaxArray = (arr: number[], k: number) => {
  let res: number[] = [];
  let count = arr.length - k;

  for (const num of arr) {
    while (count && res.length && res[res.length - 1] < num) {
      res.pop();
      count--;
    }

    res.push(num);
  }

  if (res.length >= k) {
    res = res.slice(0, k);
  } else {
    res = res.concat(Array(k - res.length).fill(0));
  }

  return res;
}

const mergeMaxArray = (arr1: number[], arr2: number[]) => {
  const res: number[] = [];

  while (arr1.length + arr2.length) {
    res.push(arr1 < arr2 ? arr2.shift()! : arr1.shift()!);
  }

  return res;
}

function maxNumber(nums1: number[], nums2: number[], k: number): number[] {
  const m = nums1.length;
  const n = nums2.length;
  let res: number[] = [];

  for (let i = Math.max(0, k - n); i <= Math.min(k, m); i++) {
    const maxA = getMaxArray(nums1, i);
    const maxB = getMaxArray(nums2, k - i);
    const mergedArray = mergeMaxArray(maxA, maxB);
    if (res < mergedArray) {
      res = mergedArray;
    }
  }

  return res;
};

console.log(maxNumber([3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 5))