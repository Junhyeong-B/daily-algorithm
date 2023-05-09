/**
 * Runtime 81 ms Beats 5.88% Memory 45.3 MB Beats 23.53%
 */
function diagonalSum(mat: number[][]): number {
  const n = mat.length;

  let sum = 0;

  for (let i = 0; i < n; i++) {
    const j = n - i - 1;
    sum += mat[i][j];
    sum += mat[i][i];

    if (j === i) {
      sum -= mat[i][j];
    }
  }

  return sum;
}

console.log(
  diagonalSum([
    [7, 3, 1, 9],
    [3, 4, 6, 9],
    [6, 9, 6, 6],
    [9, 5, 8, 5],
  ])
); // 55
