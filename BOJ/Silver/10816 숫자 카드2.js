const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input[1].split(' ').map((num) => +num);
const M = input[3].split(' ').map((num) => +num);
const NMap = N.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

const result = [];
for (const num of M) {
  result.push(NMap[num] ?? 0);
}

console.log(result.join(' '));
