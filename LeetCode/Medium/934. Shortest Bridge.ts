function shortestBridge(grid: number[][]): number {
  const row = grid.length;
  const col = grid[0].length;
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let currentStep: number[][] = [];
  let nextStep: number[][] = [];
  let result = -1;

  const dfs = (x: number, y: number) => {
    grid[x][y] = 2;
    currentStep.push([x, y]);

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || nx >= row || ny < 0 || ny >= col || grid[nx][ny] !== 1) {
        continue;
      }

      dfs(nx, ny);
    }
  };

  const bfs = (queue: number[][]) => {};

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j);

        while (currentStep.length) {
          nextStep = [];

          for (const step of currentStep) {
            const [nsx, nsy] = step;

            if (grid[nsx][nsy] === 1) {
              return result;
            }

            for (const [dx, dy] of directions) {
              const nx = nsx + dx;
              const ny = nsy + dy;

              if (
                nx < 0 ||
                nx >= row ||
                ny < 0 ||
                ny >= col ||
                grid[nx][ny] === 2
              ) {
                continue;
              }

              nextStep.push([nx, ny]);
              if (grid[nx][ny] === 0) {
                grid[nx][ny] = 2;
              }
            }
          }
          currentStep = nextStep;
          result++;
        }
      }
    }
  }

  return result;
}

console.log(
  shortestBridge([
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
  ])
); // 1
