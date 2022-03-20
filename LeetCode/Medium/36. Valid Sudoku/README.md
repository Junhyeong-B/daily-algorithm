```jsx
/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isProperRow = (board) => {
  const nums = board.filter((b) => b !== ".");
  const set = new Set([...nums]);
  return set.size === nums.length;
};

const isProperColumn = (board) => {
  const arr = Array(9).fill(".");

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      arr[j] = board[j][i];
    }
    if (!isProperRow(arr)) {
      return false;
    }
  }
  return true;
};

const isProperSquare = (board) => {
  let arr = [];
  let x = 0;
  let y = 0;

  while (true) {
    for (let i = x * 3; i < x * 3 + 3; i++) {
      for (let j = y * 3; j < y * 3 + 3; j++) {
        arr.push(board[i][j]);
      }
    }

    if (!isProperRow(arr)) {
      return false;
    }

    if (x === 2 && y === 2) {
      break;
    }
    x = y === 2 ? x + 1 : x;
    y = y === 2 ? 0 : y + 1;
    arr = [];
  }

  return true;
};

var isValidSudoku = function (board) {
  for (const b of board) {
    if (!isProperRow(b)) {
      return false;
    }
  }

  if (!isProperColumn(board) || !isProperSquare(board)) {
    return false;
  }

  return true;
};
```