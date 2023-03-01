/**
 * Runtime 485 ms Beats 43.45%
 * Memory 65.5 MB Beats 42.7%
 */
function sortArray(nums: number[]): number[] {
  if (nums.length <= 1) {
    return nums;
  }

  const middleIndex = Math.floor(nums.length / 2);
  const leftArray = nums.slice(0, middleIndex);
  const rightArray = nums.slice(middleIndex);

  return merge(sortArray(leftArray), sortArray(rightArray));
}

function merge(leftArray: number[], rightArray: number[]): number[] {
  const result: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      result.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }
  return result
    .concat(leftArray.slice(leftIndex))
    .concat(rightArray.slice(rightIndex));
}

console.log(sortArray([5, 1, 1, 2, 0, 0])); // [0, 0, 1, 1, 2, 5]
