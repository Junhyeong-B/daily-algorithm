const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const k = parseInt(input[0], 10);
const weights = input[1].split(" ").map((weight) => parseInt(weight, 10));
const s = parseInt(input[2], 10);
const goals = input[3].split(" ");

const dp = Array.from({ length: 31 }, () =>
  Array.from({ length: 40001 }, () => 0)
);
const canWeigh = Array.from({ length: 40001 }, () => 0);

const dfs = (L, weights, weight, n) => {
  if (L === n + 1 || dp[L][weight] === 1) {
    return;
  }

  dp[L][weight] = 1;
  canWeigh[weight] = 1;

  dfs(L + 1, weights, weight + weights[L], n);
  dfs(L + 1, weights, Math.abs(weight - weights[L]), n);
  dfs(L + 1, weights, weight, n);
};

dfs(0, weights, 0, k);

for (let i = 0; i < s; i++) {
  if (goals[i] > 40000 || canWeigh[goals[i]] === 0) {
    console.log("N");
  } else {
    console.log("Y");
  }
}
