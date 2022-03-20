```jsx
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;

  for (let r = 0; r < m; r++) {
    if (matrix[r][0] > target) {
      break;
    }

    for (let c = 0; c < n; c++) {
      if (matrix[r][c] === target) {
        return true;
      }
    }
  }

  return false;
};
```