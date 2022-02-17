/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const check = Array.from(Array(n + 1), () => 0);
  const answer = [];
  const DFS = (L, tmp, lt) => {
    if (L === k) {
      answer.push([...tmp]);
    } else {
      for (let i = 1; i <= n; i++) {
        if (check[i] === 0 && i > lt) {
          check[i] = 1;
          DFS(L + 1, [...tmp, i], i);
          check[i] = 0;
        }
      }
    }
  };

  DFS(0, [], 0);

  return answer;
};
