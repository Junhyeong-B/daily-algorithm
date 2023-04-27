const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const times = input
  .slice(1)
  .map((time) => time.split(" ").map((n) => +n))
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }

    return a[1] - b[1];
  });

let count = 0;
let endTime = 0;

for (const [meetingStart, meetingEnd] of times) {
  if (endTime <= meetingStart) {
    endTime = meetingEnd;
    count++;
  }
}

console.log(count);
