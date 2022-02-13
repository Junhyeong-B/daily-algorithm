/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const matrix = Array.from(Array(n), () => Array.from(Array(n), () => 0));

  let top = 0;
  let bottom = n;
  let left = 0;
  let right = n;
  let count = 1;

  while (count <= n * n) {
    for (let i = left; i < right; i++) {
      matrix[top][i] = count;
      count++;
    }
    top++;

    for (let i = top; i < bottom; i++) {
      matrix[i][right - 1] = count;
      count++;
    }
    right--;

    for (let i = right - 1; i >= left; i--) {
      matrix[bottom - 1][i] = count;
      count++;
    }
    bottom--;

    for (let i = bottom - 1; i >= top; i--) {
      matrix[i][left] = count;
      count++;
    }
    left++;
  }

  return matrix;
};
