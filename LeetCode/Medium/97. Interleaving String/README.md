```jsx
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  const dp = {};
  let answer = false;
  const DFS = (i, j) => {
    if (dp[[i, j]]) {
      return;
    }
    if (i === s1.length && j === s2.length && i + j === s3.length) {
      answer = true;
    } else {
      if (i < s1.length && s1[i] === s3[i + j]) {
        DFS(i + 1, j);
      }

      if (j < s2.length && s2[j] === s3[i + j]) {
        DFS(i, j + 1);
      }

      dp[[i, j]] = true;
    }
  };

  DFS(0, 0);

  return answer;
};
```