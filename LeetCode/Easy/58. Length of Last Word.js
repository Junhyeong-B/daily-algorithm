/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const split = s.trimEnd().split(" ");

  return split[split.length - 1].length;
};
