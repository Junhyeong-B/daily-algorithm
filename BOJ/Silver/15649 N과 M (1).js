const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((input) => parseInt(input));

const [N, M] = input;

const check = Array.from({ length: N + 1 }, () => 0);
const dfs = (L, check, N, M, tmp) => {
  if (L === M) {
    console.log(tmp.join(" "));
  } else {
    for (let i = 1; i <= N; i++) {
      if (check[i] === 0) {
        check[i] = 1;
        dfs(L + 1, check, N, M, tmp.concat(i));
        check[i] = 0;
      }
    }
  }
};

dfs(0, check, N, M, []);
