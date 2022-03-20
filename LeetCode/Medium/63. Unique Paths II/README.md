```jsx
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const n = obstacleGrid.length;
  const m = obstacleGrid[0].length;
  const paths = Array.from(Array(n), () => Array.from(Array(m), () => 0));

  for (let i = 0; i < n; i++) {
    if (obstacleGrid[i][0] === 1) {
      break;
    }
    paths[i][0] = 1;
  }

  for (let i = 0; i < m; i++) {
    if (obstacleGrid[0][i] === 1) {
      break;
    }
    paths[0][i] = 1;
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (obstacleGrid[i][j] === 0) {
        paths[i][j] = paths[i - 1][j] + paths[i][j - 1];
      }
    }
  }

  return paths[n - 1][m - 1];
};
```