/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  const answer = nums.sort((a, b) => {
    const strA = a + "";
    const strB = b + "";
    return strB + strA - (strA + strB);
  });

  if (answer[0] === 0) {
    return "0";
  }

  return answer.map((num) => num + "").reduce((acc, cur) => acc + cur);
};
