const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const k = input[0].split(" ").map((value) => parseInt(value, 10));
const cards = input[1].split(" ").map((cardNumber) => parseInt(cardNumber, 10));

const [N, M] = k;
let maxSum = 0;

outer: for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      const sum = cards[i] + cards[j] + cards[k];
      if (sum > M) {
        continue;
      } else {
        maxSum = Math.max(maxSum, sum);
      }
    }
  }
}

console.log(maxSum);
