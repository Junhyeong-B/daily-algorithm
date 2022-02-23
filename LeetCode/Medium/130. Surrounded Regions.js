/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const m = board.length;
  const n = board[0].length;

  const DFS = (x, y) => {
    if (x === -1 || y === -1 || x === m || y === n) {
      return;
    } else {
      if (board[x][y] === "O") {
        board[x][y] = "";
        DFS(x + 1, y);
        DFS(x - 1, y);
        DFS(x, y + 1);
        DFS(x, y - 1);
      }
    }
  };

  for (let i = 0; i < m; i++) {
    DFS(i, 0);
    DFS(i, n - 1);
  }

  for (let i = 0; i < n; i++) {
    DFS(0, i);
    DFS(m - 1, i);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "") {
        board[i][j] = "O";
      } else if (board[i][j] === "O") {
        board[i][j] = "X";
      }
    }
  }
};
