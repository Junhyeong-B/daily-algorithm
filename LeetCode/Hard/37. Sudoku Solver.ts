/**
 * Runtime 99 ms Beats 89.47%
 * Memory 43.6 MB Beats 89.47%
 */

function isValid(
  board: string[][],
  row: number,
  col: number,
  char: string
): boolean {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === char) {
      return false;
    }

    if (board[i][col] === char) {
      return false;
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (
        board[i + Math.floor(row / 3) * 3][j + Math.floor(col / 3) * 3] === char
      ) {
        return false;
      }
    }
  }
  return true;
}

/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
  recursiveSolve(board);
}

function recursiveSolve(board: string[][]): boolean {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') {
        for (let k = 1; k <= 9; k++) {
          const char = k + '';

          if (isValid(board, i, j, char)) {
            board[i][j] = char;

            if (recursiveSolve(board)) {
              return true;
            } else {
              board[i][j] = '.';
            }
          }
        }

        return false;
      }
    }
  }

  return true;
}

const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

solveSudoku(board);

console.log(board);
/**
 * [ [ '5', '3', '4', '6', '7', '8', '9', '1', '2' ],
 * [ '6', '7', '2', '1', '9', '5', '3', '4', '8' ],
 * [ '1', '9', '8', '3', '4', '2', '5', '6', '7' ],
 * [ '8', '5', '9', '7', '6', '1', '4', '2', '3' ],
 * [ '4', '2', '6', '8', '5', '3', '7', '9', '1' ],
 * [ '7', '1', '3', '9', '2', '4', '8', '5', '6' ],
 * [ '9', '6', '1', '5', '3', '7', '2', '8', '4' ],
 * [ '2', '8', '7', '4', '1', '9', '6', '3', '5' ],
 * [ '3', '4', '5', '2', '8', '6', '1', '7', '9' ] ]
 */
