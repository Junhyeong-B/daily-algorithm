const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = +input[0];
let nIndex = 1;

for (let i = 0; i < n; i++) {
  const fashionMap = {};
  let m = +input[nIndex];
  const clothes = input.slice(nIndex + 1, nIndex + 1 + m);

  for (const wear of clothes) {
    const [_, category] = wear.split(' ');
    fashionMap[category] = (fashionMap[category] ?? 0) + 1;
  }

  nIndex += m + 1;

  console.log(
    Object.values(fashionMap).reduce((acc, cur) => acc * (cur + 1), 1) - 1
  );
}
