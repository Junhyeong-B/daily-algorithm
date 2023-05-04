const fs = require('fs');
const [N, ...input] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const dp = input.map((arr) => arr.split(' ').map((n) => +n));

for (let i = N - 2; i >= 0; i--) {
  for (let j = 0; j < dp[i].length; j++) {
    dp[i][j] += Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
  }
}

console.log(dp[0][0]);
