const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const blackFirstBoard = [
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
];

const whiteFirstBoard = [
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
  'WBWBWBWB',
  'BWBWBWBW',
];

const [N, M] = input[0].split(' ').map((n) => +n);
const board = input.slice(1);

const getMinimumCountForPaint = (x, y) => {
  let blackFirstCount = 0;
  let whiteFirstCount = 0;

  for (let i = x; i < x + 8; i++) {
    const currentI = i - x;

    for (let j = y; j < y + 8; j++) {
      const currentJ = j - y;

      if (board[i][j] !== blackFirstBoard[currentI][currentJ]) {
        blackFirstCount++;
      }

      if (board[i][j] !== whiteFirstBoard[currentI][currentJ]) {
        whiteFirstCount++;
      }
    }
  }

  return Math.min(blackFirstCount, whiteFirstCount);
};

const counts = [];

for (let i = 0; i < N - 7; i++) {
  for (let j = 0; j < M - 7; j++) {
    counts.push(getMinimumCountForPaint(i, j));
  }
}

console.log(Math.min(...counts));
