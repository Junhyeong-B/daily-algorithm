const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map((input) => parseInt(input, 10));
const s = input
  .filter((_, i) => i > 0)
  .map((input) => input.split("\r")[0].split(""));

const grating = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => ".")
);
let answer = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (s[i][j] === "*") {
      let size = 0;
      for (k = 1; true; k++) {
        if (i - k < 0 || i + k >= N || j - k < 0 || j + k >= M) {
          break;
        }

        if (
          s[i - k][j] === "*" &&
          s[i + k][j] === "*" &&
          s[i][j - k] === "*" &&
          s[i][j + k] === "*"
        ) {
          size += 1;
          continue;
        }

        break;
      }

      if (size > 0) {
        grating[i][j] = "*";
        answer.push([i + 1, j + 1, size]);
        for (k = 1; k <= size; k++) {
          grating[i + k][j] = "*";
          grating[i - k][j] = "*";
          grating[i][j + k] = "*";
          grating[i][j - k] = "*";
        }
      }
    }
  }
}

outer: for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (s[i][j] === "*" && grating[i][j] !== "*") {
      answer = false;
      break outer;
    }
  }
}

if (Array.isArray(answer)) {
  console.log(answer.length);

  for (const coordinate of answer) {
    console.log(coordinate.join(" "));
  }
} else {
  console.log(-1);
}
