const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const len = +input[0];

for (let i = 1; i <= len * 2; i += 2) {
  const [N, M] = input[i].split(' ').map((v) => +v);
  const priority = input[i + 1].split(' ').map((v) => +v);
  const queue = priority.map((v, i) => [v, i]);

  let max = Math.max(...priority);
  let count = 0;

  while (queue.length) {
    const [pri, index] = queue.shift();
    if (pri < max) {
      queue.push([pri, index]);
    } else {
      count++;
      max = Math.max(...queue.map(([v]) => v));

      if (index === M) {
        console.log(count);
        break;
      }
    }
  }
}
