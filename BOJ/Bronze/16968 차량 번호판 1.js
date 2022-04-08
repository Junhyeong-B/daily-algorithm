const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let count = 0;
const cases = {
  d: 10,
  c: 26,
};
for (let i = 0; i < input.length; i++) {
  if (i === 0) {
    count += cases[input[i]];
    continue;
  }

  if (input[i] === input[i - 1]) {
    count *= cases[input[i]] - 1;
  } else {
    count *= cases[input[i]];
  }
}

console.log(count);
