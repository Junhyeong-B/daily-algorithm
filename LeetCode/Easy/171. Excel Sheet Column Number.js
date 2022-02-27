/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  const nums = [];
  for (let i = 0; i < columnTitle.length; i++) {
    nums.push(columnTitle.charCodeAt(i) - 64);
  }

  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i === nums.length - 1) {
      answer += nums[i];
    } else {
      answer += 26 ** (nums.length - 1 - i) * nums[i];
    }
  }

  return answer;
};
