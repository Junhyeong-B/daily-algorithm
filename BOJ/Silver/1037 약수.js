const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = +input[0];
const factor = input[1]
  .split(" ")
  .map((input) => +input)
  .sort((a, b) => a - b);

if (N % 2 === 0) {
  console.log(factor[N / 2 - 1] * factor[N / 2]);
} else {
  console.log(factor[Math.floor(N / 2)] ** 2);
}
