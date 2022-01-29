/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const answer = [];

  const DFS = (L, tmp) => {
    if (L === nums.length) {
      answer.push([...tmp]);
    } else {
      DFS(L + 1, [...tmp]);
      DFS(L + 1, [...tmp, nums[L]]);
    }
  };

  DFS(0, []);

  return answer;
};
