```jsx
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const paths = Array.from(Array(m), () => Array.from(Array(n), () => 0));

  for (let i = 0; i < m; i++) {
    paths[i].push(Infinity);
  }
  paths.push([...Array(n + 1).fill(Infinity)]);
  paths[m][n - 1] = 0;

  for (let c = m - 1; c >= 0; c--) {
    for (let r = n - 1; r >= 0; r--) {
      const right = paths[c][r + 1];
      const bottom = paths[c + 1][r];
      paths[c][r] = Math.min(right, bottom) + grid[c][r];
    }
  }

  return paths[0][0];
};
```