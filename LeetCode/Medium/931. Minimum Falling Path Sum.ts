/**
 * Runtime 90 ms Beats 74.36%
 * Memory 45.4 MB Beats 33.33%
 */

function minFallingPathSum(matrix: number[][]): number {
  const n = matrix.length;
  const board = Array.from({ length: n }, () =>
    Array.from({ length: n }, () => 0)
  );

  for (let i = 0; i < n; i++) {
    board[n - 1][i] = matrix[n - 1][i];
  }

  for (let row = n - 2; row >= 0; row--) {
    for (let col = 0; col < n; col++) {
      board[row][col] =
        matrix[row][col] +
        Math.min(
          board[row + 1][col],
          board[row + 1][col + 1] ?? Infinity,
          board[row + 1][col - 1] ?? Infinity
        );
    }
  }

  return Math.min(...board[0]);
}

console.log(
  minFallingPathSum([
    [2, 1, 3],
    [6, 5, 4],
    [7, 8, 9],
  ])
); // 13
