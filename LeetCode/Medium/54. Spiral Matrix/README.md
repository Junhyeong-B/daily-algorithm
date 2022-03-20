```jsx
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let left = 0;
  let right = matrix[0].length;
  let top = 0;
  let bottom = matrix.length;
  const answer = [];

  while (top < bottom && left < right) {
    // 오른쪽
    for (let i = left; i < right; i++) {
      answer.push(matrix[top][i]);
    }
    top += 1;

    // 아래
    for (let i = top; i < bottom; i++) {
      answer.push(matrix[i][right - 1]);
    }
    right -= 1;

    if (!(left < right && top < bottom)) {
      break;
    }

    // 왼쪽
    for (let i = right - 1; i >= left; i--) {
      answer.push(matrix[bottom - 1][i]);
    }
    bottom -= 1;

    // 위
    for (let i = bottom - 1; i >= top; i--) {
      answer.push(matrix[i][left]);
    }
    left += 1;
  }

  return answer;
};
```