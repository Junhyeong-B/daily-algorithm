/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;
  const newArray = Array.from(Array(n), () => []);

  for (let i = 0; i < n; i++) {
    for (let j = n - 1; j >= 0; j--) {
      newArray[i].push(matrix[j][i]);
    }
  }

  while (matrix.length) {
    matrix.pop();
  }

  while (newArray.length) {
    matrix.push(newArray.shift());
  }
};
