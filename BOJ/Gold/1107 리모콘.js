/**
 * 메모리: 11988 KB
 * 시간: 276 ms
 */

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const N = +input[0];
const M = +input[1];

const solution = () => {
  if (M === 0) {
    console.log(Math.min(Math.abs(N - 100), N.toString().length));
    return;
  }

  if (N === 100) {
    console.log(0);
    return;
  }

  const buttons = input[2].split(" ").map((btn) => +btn);

  const posibleButtons = Array.from({ length: 10 }, (_, i) => i).filter(
    (n) => !buttons.includes(n)
  );
  let minMoves = Math.abs(N - 100);

  const dfs = (channel) => {
    for (let i = 0; i < posibleButtons.length; i++) {
      const currentChannel = channel + "" + posibleButtons[i];
      minMoves = Math.min(
        minMoves,
        Math.abs(N - currentChannel) + currentChannel.length
      );

      if (currentChannel.length < 6) {
        dfs(currentChannel);
      }
    }
  };

  dfs("");

  console.log(minMoves);
};

solution();
