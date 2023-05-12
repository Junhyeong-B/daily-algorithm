/**
 * Runtime 4920 ms Beats 8%
 * Memory 139.2 MB Beats 8%
 */
function radixSort(arr: number[]): number[] {
  const result = arr.slice();
  const radix = 10;
  let maxLength = false;
  let temp: number;
  let placement = 1;

  while (!maxLength) {
    maxLength = true;
    let buckets: number[][] = Array.from({ length: radix });
    for (let i = 0; i < radix; i++) {
      buckets[i] = [];
    }

    for (let i = 0; i < result.length; i++) {
      temp = result[i] / placement;
      buckets[Math.floor(temp % radix)].push(result[i]);
      if (maxLength && temp > 0) {
        maxLength = false;
      }
    }

    let num = 0;
    for (let i = 0; i < radix; i++) {
      let bucket = buckets[i];
      for (let j = 0; j < bucket.length; j++) {
        result[num++] = bucket[j];
      }
    }
    placement *= radix;
  }

  return result;
}

function maximumGap(nums: number[]): number {
  const sortedNums = radixSort(nums);

  let maxGap = 0;
  for (let i = 1; i < nums.length; i++) {
    const diff = sortedNums[i] - sortedNums[i - 1];
    maxGap = Math.max(maxGap, diff);
  }

  return maxGap;
}

console.log(maximumGap([2, 99999999])); // 99999997
