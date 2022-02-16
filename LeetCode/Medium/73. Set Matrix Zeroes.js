/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const pos = [];
  const m = matrix.length;
  const n = matrix[0].length;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (matrix[r][c] === 0) {
        pos.push([r, c]);
      }
    }
  }

  if (pos.length) {
    for (const [r, c] of pos) {
      for (let i = 0; i < m; i++) {
        matrix[i][c] = 0;
      }
      for (let i = 0; i < n; i++) {
        matrix[r][i] = 0;
      }
    }
  }
};
