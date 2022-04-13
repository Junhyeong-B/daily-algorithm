const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, L, R, X] = input[0].split(" ").map((input) => parseInt(input, 10));
const A = input[1].split(" ").map((input) => parseInt(input, 10));
const check = Array.from({ length: N }, () => 0);
let count = 0;

const dfs = (tmp, max, min, sum, check, lt) => {
  if (tmp.length >= 2) {
    if (!(max - min < X || sum < L || sum > R)) {
      count += 1;
    }
  }

  for (let i = 0; i < N; i++) {
    if (check[i] === 0 && lt <= i) {
      const currentSum = sum + A[i];
      if (currentSum > R) {
        continue;
      }

      check[i] = 1;
      dfs(
        [...tmp, A[i]],
        Math.max(max, A[i]),
        Math.min(min, A[i]),
        currentSum,
        check,
        i
      );
      check[i] = 0;
    }
  }
};

dfs([], -Infinity, Infinity, 0, check, 0);

console.log(count);
