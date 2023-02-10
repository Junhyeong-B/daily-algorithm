/**
 * Runtime 106 ms Beats 95.24%
 * Memory 49.8 MB Beats 80.95%
 */

function maxDistance(grid: number[][]): number {
  const queue: number[][] = [];
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const n = grid.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        queue.push([i, j, 1]);
      }
    }
  }

  let max = 0;
  while (queue.length) {
    const [x, y, dis] = queue.shift()!;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= n) {
        continue;
      }

      if (grid[nx][ny] === 0) {
        grid[nx][ny] = dis + 1;
        queue.push([nx, ny, dis + 1]);
        max = Math.max(max, dis + 1);
      }
    }
  }

  return max - 1;
}

console.log(
  maxDistance([
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ])
); // 4
