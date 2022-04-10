const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString();

const romanNums = [1, 5, 10, 50];
const sums = new Set();
const dfs = (L, sum, lt) => {
  if (L === input) {
    sums.add(sum);
  } else {
    for (let i = 0; i < 4; i++) {
      if (lt <= i) {
        dfs(L + 1, sum + romanNums[i], i);
      }
    }
  }
};

dfs(0, 0, 0);

console.log(sums.size);
