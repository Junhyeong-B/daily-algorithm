/**
 * Runtime 76 ms Beats 46.67%
 * Memory 45.2 MB Beats 60%
 */

function uniquePathsIII(grid: number[][]): number {
  const N = grid.length;
  const M = grid[0].length;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const countPaths = (
    grid: number[][],
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    roads: number
  ) => {
    let count = 0;

    if (startX === endX && startY === endY && roads === 0) {
      return 1;
    }

    grid[startX][startY] = -1;
    for (const [dx, dy] of directions) {
      const nx = startX + dx;
      const ny = startY + dy;

      if (nx < 0 || nx >= N || ny < 0 || ny >= M || grid[nx][ny] === -1) {
        continue;
      }

      count += countPaths(grid, nx, ny, endX, endY, roads - 1);
    }
    grid[startX][startY] = 0;

    return count;
  };

  let sx = 0;
  let sy = 0;
  let ex = 0;
  let ey = 0;
  let roads = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (grid[i][j] !== -1) {
        roads++;
      }

      if (grid[i][j] === 1) {
        sx = i;
        sy = j;
      }

      if (grid[i][j] === 2) {
        ex = i;
        ey = j;
      }
    }
  }

  return countPaths(grid, sx, sy, ex, ey, roads - 1);
}

console.log(
  uniquePathsIII([
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 2],
  ])
); // 4
