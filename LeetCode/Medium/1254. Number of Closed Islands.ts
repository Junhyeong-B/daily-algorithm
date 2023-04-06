/**
 * Runtime 85 ms Beats 33.33%
 * Memory 47.9 MB Beats 47.62%
 */
function closedIsland(grid: number[][]): number {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const visited = Array.from({ length: grid.length }, () =>
    Array.from({ length: grid[0].length }, () => false)
  );

  const checkIsClosedIsland = (x: number, y: number) => {
    const queue = [[x, y]];
    let isClosed = true;
    visited[x][y] = true;

    while (queue.length) {
      const [x, y] = queue.shift()!;

      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;

        if (nx < 0 || nx >= grid.length || ny < 0 || ny >= grid[0].length) {
          isClosed = false;
          continue;
        }

        if (!visited[nx][ny] && grid[nx][ny] === 0) {
          queue.push([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }

    return isClosed;
  };

  let islandCount = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!visited[i][j] && grid[i][j] === 0 && checkIsClosedIsland(i, j)) {
        islandCount++;
      }
    }
  }

  return islandCount;
}

console.log(
  closedIsland([
    [1, 1, 1, 1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0],
    [1, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0],
  ])
); // 2
