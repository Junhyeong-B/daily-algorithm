const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

const [A, B, C, X, Y] = input.split(" ").map((input) => parseInt(input, 10));
let friedChickenPrice = 0;
let seasonedChickenPrice = 0;

if (A + B < C * 2) {
  friedChickenPrice = A * X;
  seasonedChickenPrice = B * Y;
} else {
  if (X < Y) {
    friedChickenPrice = C * X;
    seasonedChickenPrice = C * X + B * (Y - X);

    if (friedChickenPrice + seasonedChickenPrice > C * Y * 2) {
      friedChickenPrice = C * Y;
      seasonedChickenPrice = C * Y;
    }
  } else {
    friedChickenPrice = C * Y;
    seasonedChickenPrice = C * Y + A * (X - Y);

    if (friedChickenPrice + seasonedChickenPrice > C * X * 2) {
      friedChickenPrice = C * X;
      seasonedChickenPrice = C * X;
    }
  }
}

console.log(friedChickenPrice + seasonedChickenPrice);
