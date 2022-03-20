```jsx
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  const check = Array(n + 1).fill(0);
  const answer = [];

  const DFS = (L, tmp, check) => {
    if (answer.length >= k) {
      return;
    }

    if (L === n) {
      answer.push(tmp);
    } else {
      for (let i = 1; i <= n; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          DFS(L + 1, tmp + i, check);
          check[i] = 0;
        }
      }
    }
  };

  DFS(0, "", check);

  return answer[k - 1];
};
```