const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [_, K] = input[0].split(' ').map((n) => +n);
const coins = input
  .slice(1)
  .map((n) => +n)
  .reverse();

let remain = K;
let i = 0;
let result = 0;

while (remain > 0) {
  if (remain < coins[i]) {
    i++;
    continue;
  }

  remain -= coins[i];
  result++;
}

console.log(result);
