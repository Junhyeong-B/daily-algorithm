```tsx
function numIslands(grid: string[][]): number {
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  const m = grid.length;
  const n = grid[0].length;
  const checkIslands = (startIndex: number[]) => {
    const [x, y] = startIndex;
    grid[x][y] = "2";
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === "1") {
        checkIslands([nx, ny]);
      }
    }
  };

  let answer = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        answer++;
        checkIslands([i, j]);
      }
    }
  }

  return answer;
}
```