/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set([...nums]);

  let min = Math.min(...nums);
  let max = 0;
  let count = 0;
  while (set.size) {
    if (set.has(min)) {
      set.delete(min);
      min++;
      count++;
    } else {
      min = Math.min(...set);
      count = 0;
    }
    if (max < count) {
      max = count;
    }
  }

  return max;
};
