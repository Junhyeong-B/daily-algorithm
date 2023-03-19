const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0].split(' ')[0];
const nMap = new Map();
for (let i = 1; i <= N; i++) {
  nMap.set(input[i], true);
}

const result = [];
for (let i = N + 1; i < input.length; i++) {
  if (nMap.has(input[i])) {
    result.push(input[i]);
  }
}

console.log(result.length);
result.sort();
result.forEach((name) => {
  console.log(name);
});
