/**
 * Runtime 146 ms Beats 49.13%
 * Memory 47.6 MB Beats 41.96%
 */

const isValid = (row: string[]): boolean => {
  const cell = row.filter((cell) => cell !== '.');
  const set = new Set(cell);
  return set.size === cell.length;
};

const isRowValid = (board: string[][]): boolean =>
  board.every((row) => isValid(row));

const isColumnValid = (board: string[][]) => {
  const row: string[] = Array(9).fill('.');
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      row[j] = board[j][i];
    }
    if (!isValid(row)) {
      return false;
    }
  }
  return true;
};

const is3on3Vaild = (board: string[][]): boolean => {
  let newBoard: string[][] = Array.from({ length: board.length }, () => []);
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < 3; j++) {
      newBoard[Math.floor(i / 3)].push(board[j][i]);
    }

    for (let j = 3; j < 6; j++) {
      newBoard[Math.floor(i / 3) + 3].push(board[j][i]);
    }

    for (let j = 6; j < 9; j++) {
      newBoard[Math.floor(i / 3) + 6].push(board[j][i]);
    }
  }
  return isRowValid(newBoard);
};

function isValidSudoku(board: string[][]): boolean {
  return isRowValid(board) && isColumnValid(board) && is3on3Vaild(board);
}

console.log(
  isValidSudoku([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
); // true
