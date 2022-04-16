const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const nums = input[1].split(" ").map((input) => +input);

const dp = Array.from({ length: 1001 }, () => true);
dp[1] = false;
dp[2] = true;

for (let i = 2; i <= Math.floor(1001 ** 0.5); i++) {
  if (dp[i]) {
    dp[i] = true;
    for (let j = i * 2; j <= 1001; j += i) {
      dp[j] = false;
    }
  }
}

console.log(nums.filter((num) => dp[num]).length);
