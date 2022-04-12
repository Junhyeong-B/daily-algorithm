/*
  Runtime: 64 ms, faster than 96.55% of TypeScript online submissions for Game of Life.
  Memory Usage: 43.5 MB, less than 51.72% of TypeScript online submissions for Game of Life.
*/

/**
 Do not return anything, modify board in-place instead.
 */
function gameOfLife(board: number[][]): void {
  const m = board.length;
  const n = board[0].length;
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

  const countLivingNeighbors = (row: number, column: number) => {
    let count = 0;

    for (let i = 0; i < 8; i++) {
      const nextRow = row + dx[i];
      const nextColumn = column + dy[i];
      if (nextRow < 0 || nextColumn < 0 || nextRow >= m || nextColumn >= n) {
        continue;
      }

      if (board[nextRow][nextColumn] === 1) {
        count += 1;
      }
    }

    return count;
  }

  const nextGeneration = board.slice().map(cells => cells.slice());

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const livingNeighbors = countLivingNeighbors(i, j);
      if (board[i][j] === 0) {
        if (livingNeighbors === 3) {
          nextGeneration[i][j] = 1;
        }
      } else {
        if (livingNeighbors < 2 || livingNeighbors > 3) {
          nextGeneration[i][j] = 0;
        }
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      board[i][j] = nextGeneration[i][j];
    }
  }
};