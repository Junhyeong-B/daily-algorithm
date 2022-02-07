/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const check = Array.from(Array(nums.length), () => 0);
  const map = new Map();
  const answer = [];

  const DFS = (L, tmp, check) => {
    if (L === nums.length) {
      const t = tmp.join("");
      if (map.has(t)) {
        return;
      } else {
        map.set(t, [...tmp]);
      }
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

  for (const [_, value] of map) {
    answer.push(value);
  }

  return answer;
};
