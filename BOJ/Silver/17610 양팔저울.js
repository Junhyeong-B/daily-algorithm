const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const k = parseInt(input[0], 10);
const weights = input[1].split(" ").map((weight) => parseInt(weight, 10));

const S = weights.reduce((acc, cur) => acc + cur);
const answer = Array.from({ length: S + 1 }, () => false);
answer[0] = true;

const dfs = (L, weights, weight, n) => {
  if (L === n) {
    if (weight > 0) {
      answer[weight] = true;
    }
  } else {
    dfs(L + 1, weights, weight + weights[L], n);
    dfs(L + 1, weights, weight - weights[L], n);
    dfs(L + 1, weights, weight, n);
  }
};

dfs(0, weights, 0, k);

console.log(answer.filter((ans) => !ans).length);
