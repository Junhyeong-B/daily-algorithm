/**
 * Runtime: 87 ms, faster than 86.36% of TypeScript online submissions for Transpose Matrix.
 * Memory Usage: 45.3 MB, less than 63.64% of TypeScript online submissions for Transpose Matrix.
 */

function transpose(matrix: number[][]): number[][] {
  const m = matrix.length;
  const n = matrix[0].length;
  const transposedMatrix = Array.from({ length: n }, () => Array.from({ length: m }, () => 0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      transposedMatrix[i][j] = matrix[j][i];
    }
  }

  return transposedMatrix;
};
