const fs = require("fs");
const [N, K] = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const MIN = 0;
const MAX = 100000;
const queue = [[N, 0]];
const check = {
  [N]: 0,
};

const checkLocation = (next, time) => {
  if (MIN <= next && next <= MAX && check[next] == null) {
    check[next] = time + 1;
    queue.push([next, time + 1]);
  }
};

while (queue.length) {
  const [location, time] = queue.shift();

  checkLocation(location + 1, time);
  checkLocation(location - 1, time);
  checkLocation(location * 2, time);

  if (check[K] != null) {
    console.log(check[K]);
    break;
  }
}
