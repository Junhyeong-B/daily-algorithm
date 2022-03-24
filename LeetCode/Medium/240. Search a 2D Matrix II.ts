/*
  Runtime: 110 ms, faster than 32.29% of TypeScript online submissions for Search a 2D Matrix II.
  Memory Usage: 45.8 MB, less than 31.25% of TypeScript online submissions for Search a 2D Matrix II.
*/

function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  const n = matrix[0].length;
  let maxColumn = n;

  for (let column = 0; column < n; column += 1) {
    if (matrix[0][column] > target) {
      maxColumn = column;
      break;
    }
  }

  for (let row = 0; row < m; row += 1) {
    if (matrix[row][0] > target) {
      break;
    }

    for (let column = 0; column < maxColumn; column += 1) {
      if (matrix[row][column] === target) {
        return true;
      }
    }
  }

  return false;
};
