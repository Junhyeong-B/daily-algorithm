```jsx
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const answer = [];
  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      answer.push([1]);
      continue;
    }

    const tmp = [1];

    for (let j = 0; j < i - 1; j++) {
      tmp.push(answer[i - 1][j] + answer[i - 1][j + 1]);
    }

    tmp.push(1);
    answer.push([...tmp]);
  }

  return answer;
};
```