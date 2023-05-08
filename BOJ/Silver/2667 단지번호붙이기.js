const fs = require('fs');
const [N, ...input] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const areas = input.map((inp) => inp.split('').map((n) => +n));

const directions = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const countHouseArea = (x, y, area) => {
  let count = 1;
  const queue = [[x, y]];

  while (queue.length) {
    const [x, y] = queue.shift();

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx < 0 ||
        nx >= N ||
        ny < 0 ||
        ny >= N ||
        area[nx][ny] === 0 ||
        area[nx][ny] === -1
      ) {
        continue;
      }

      area[nx][ny] = -1;
      queue.push([nx, ny]);
      count++;
    }
  }

  return count;
};

const result = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (areas[i][j] === 1) {
      areas[i][j] = -1;
      const count = countHouseArea(i, j, areas);
      result.push(count);
    }
  }
}

console.log(result.length);

console.log(result.sort((a, b) => a - b).join('\n'));
