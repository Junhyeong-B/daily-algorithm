/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const answer = [];
  const check = Array.from(Array(nums.length), () => 0);

  const DFS = (L, tmp, check) => {
    if (L === nums.length) {
      answer.push([...tmp]);
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          DFS(L + 1, [...tmp, nums[i]], check);
          check[i] = 0;
        }
      }
    }
  };

  DFS(0, [], check);

  return answer;
};
