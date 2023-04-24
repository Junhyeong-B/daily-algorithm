const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const nums = input[1].split(' ').map((n) => +n);

const numberSet = new Set(nums);
const numberCoord = Array.from(numberSet)
  .sort((a, b) => a - b)
  .reduce((acc, cur, index) => {
    acc[cur] = index;
    return acc;
  }, {});

console.log(nums.map((num) => numberCoord[num]).join(' '));
