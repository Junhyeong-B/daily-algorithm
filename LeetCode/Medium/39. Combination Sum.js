/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const map = new Map();
  const DFS = (sum, tmp) => {
    if (sum > target) {
      return;
    }
    if (sum === target) {
      const t = tmp.sort((a, b) => a - b);
      map.set(t.join(""), t);
    } else {
      for (const candidate of candidates) {
        DFS(sum + candidate, [...tmp, candidate]);
      }
    }
  };

  DFS(0, []);

  const answer = [];
  for (const [_, value] of map) {
    answer.push(value);
  }
  return answer;
};
