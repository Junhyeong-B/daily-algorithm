const fs = require("fs");
const input = fs.readFileSync("stdin.txt").toString().split("\n");

const N = +input[0];
const board = input
  .filter((_, i) => i > 0)
  .map((row) => row.replace("\r", "").split(""));

const swap = (a, b) => {
  [board[a[0]][a[1]], board[b[0]][b[1]]] = [
    board[b[0]][b[1]],
    board[a[0]][a[1]],
  ];
};

const findMaxCandy = () => {
  let max = 0;
  for (let i = 0; i < N; i++) {
    let countRow = 1;
    let countColumn = 1;

    for (let j = 0; j < N - 1; j++) {
      if (board[i][j] === board[i][j + 1]) {
        countColumn++;
      } else {
        max = Math.max(max, countColumn);
        countColumn = 1;
      }

      if (board[j][i] === board[j + 1][i]) {
        countRow++;
      } else {
        max = Math.max(max, countRow);
        countRow = 1;
      }
    }
    max = Math.max(max, countRow, countColumn);
  }
  return max;
};

let maxCandy = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (j + 1 < N) {
      swap([i, j], [i, j + 1]);
      maxCandy = Math.max(maxCandy, findMaxCandy());
      swap([i, j], [i, j + 1]);
    }
    if (i + 1 < N) {
      swap([i, j], [i + 1, j]);
      maxCandy = Math.max(maxCandy, findMaxCandy());
      swap([i, j], [i + 1, j]);
    }
  }
}

console.log(maxCandy);
