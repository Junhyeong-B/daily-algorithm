const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = +input[0];
const nums = input[1].split(' ').map((input) => +input);

let max = -Infinity;
const dp = [];

for (let i = 0; i < N; i++) {
  if (i === 0) {
    dp.push(nums[i]);
  } else {
    dp.push(Math.max(dp[i - 1] + nums[i], nums[i]));
  }
  max = Math.max(max, dp[i]);
}

console.log(max);
