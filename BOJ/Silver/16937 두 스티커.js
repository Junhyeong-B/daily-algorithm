const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [H, W] = input[0].split(" ").map((input) => parseInt(input, 10));
const N = parseInt(input[1], 10);
const rc = input
  .slice(2)
  .map((input) => input.split(" ").map((rc) => parseInt(rc, 10)));

const check = Array.from({ length: rc.length }, () => 0);
let maxArea = 0;

const canPlaceSticker = (sti1, sti2) => {
  const [x1, y1] = sti1;
  const [x2, y2] = sti2;
  if (
    (x1 + x2 <= H && Math.max(y1, y2) <= W) ||
    (Math.max(x1, x2) <= H && y1 + y2 <= W)
  ) {
    return true;
  }

  return false;
};

const dfs = (L, tmp, check, lt) => {
  if (L === 2) {
    const currentArea = tmp.reduce((acc, cur) => acc + cur[0] * cur[1], 0);

    if (currentArea < maxArea) {
      return;
    }

    if (canPlaceSticker(tmp[0], tmp[1])) {
      maxArea = Math.max(maxArea, currentArea);
    }
  } else {
    for (let i = 0; i < rc.length; i++) {
      if (check[i] === 0 && lt <= i) {
        check[i] = 1;
        dfs(L + 1, [...tmp, rc[i]], check, i);

        if (rc[i][0] !== rc[i][1]) {
          dfs(L + 1, [...tmp, rc[i].reverse()], check, i);
        }
        check[i] = 0;
      }
    }
  }
};

dfs(0, [], check, 0);

console.log(maxArea);
