/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const map = new Map();
  for (const num of nums) {
    if (num < 0) {
      continue;
    }
    map.set(num, true);
  }

  let answer = 1;
  while (true) {
    if (map.has(answer)) {
      answer += 1;
    } else {
      return answer;
    }
  }
};
