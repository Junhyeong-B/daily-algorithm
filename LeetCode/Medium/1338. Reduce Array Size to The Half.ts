/**
 * Runtime: 290 ms, faster than 60.00% of TypeScript online submissions for Reduce Array Size to The Half.
 * Memory Usage: 99.8 MB, less than 60.00% of TypeScript online submissions for Reduce Array Size to The Half.
 */

function minSetSize(arr: number[]): number {
  const map = new Map<number, number>();

  for (const num of arr) {
    const count = map.get(num) || 0;
    map.set(num, count + 1);
  }

  const targetSize = arr.length / 2;
  const countSortedArray = Array.from(map).sort((a, b) => b[1] - a[1]);

  let removedSize = 0;
  for (let i = 0; i < countSortedArray.length; i++) {
    removedSize += countSortedArray[i][1];
    if (removedSize >= targetSize) {
      return i + 1;
    }
  }

  return 1;
};

console.log(minSetSize([7, 7, 7, 7, 7, 7]))