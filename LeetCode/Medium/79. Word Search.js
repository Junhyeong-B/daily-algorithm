/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  const m = board.length;
  const n = board[0].length;
  const check = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => 0)
  );
  let answer = false;

  const DFS = (L, x, y, currentWord, check) => {
    if (answer) {
      return;
    }

    if (L === word.length) {
      answer = true;
    } else {
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (
          nx < m &&
          nx >= 0 &&
          ny < n &&
          ny >= 0 &&
          check[nx][ny] === 0 &&
          board[nx][ny] === currentWord
        ) {
          check[nx][ny] = 1;
          DFS(L + 1, nx, ny, word[L + 1], check);
          check[nx][ny] = 0;
        }
      }
    }
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0]) {
        check[i][j] = 1;
        DFS(1, i, j, word[1], check);
        check[i][j] = 0;
      }
    }
  }

  return answer;
};
