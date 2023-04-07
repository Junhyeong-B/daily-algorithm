/**
 * Runtime 159 ms Beats 40.74%
 * Memory 50.4 MB Beats 100%
 */
function numEnclaves(grid: number[][]): number {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const visited = Array.from({ length: grid.length }, () =>
    Array.from({ length: grid[0].length }, () => false)
  );

  const getEnclavesCountBFS = (x: number, y: number) => {
    const queue = [[x, y]];
    visited[x][y] = true;
    let count = 1;
    let isClosed = false;

    while (queue.length) {
      const [x, y] = queue.shift()!;

      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;

        if (nx < 0 || nx >= grid.length || ny < 0 || ny >= grid[0].length) {
          isClosed = true;
          continue;
        }

        if (!visited[nx][ny] && grid[nx][ny] === 1) {
          queue.push([nx, ny]);
          visited[nx][ny] = true;
          count++;
        }
      }
    }

    return isClosed ? 0 : count;
  };

  let enclavesCount = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!visited[i][j] && grid[i][j] === 1) {
        enclavesCount += getEnclavesCountBFS(i, j);
      }
    }
  }

  return enclavesCount;
}

console.log(
  numEnclaves([
    [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [1, 1, 0, 0, 0, 1, 0, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 0, 1, 0, 0],
    [0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 1, 1, 1, 0, 1],
    [0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 1, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 1],
  ])
); // 3
