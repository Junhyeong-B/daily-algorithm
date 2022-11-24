/**
 * Runtime 546 ms Beats 82.54%
 * Memory 44 MB Beats 74.60%
 */

function exist(board: string[][], word: string): boolean {
  const rev = word.split('').reverse().join('');
  const m = board.length;
  const n = board[0].length;
  const check = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => 0)
  );

  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  let flag = false;

  const dfs = (x: number, y: number, index: number, check: number[][]) => {
    if (flag) {
      return;
    }

    if (index >= rev.length) {
      flag = true;
      return;
    } else {
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (
          nx >= m ||
          nx < 0 ||
          ny >= n ||
          ny < 0 ||
          board[nx][ny] !== rev[index] ||
          check[nx][ny] === 1
        ) {
          continue;
        }

        check[nx][ny] = 1;
        dfs(nx, ny, index + 1, check);
        check[nx][ny] = 0;
      }
    }
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === rev[0]) {
        check[i][j] = 1;
        dfs(i, j, 1, check);
        check[i][j] = 0;
      }
    }
  }

  return flag;
}

console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCB'
  )
); // false
