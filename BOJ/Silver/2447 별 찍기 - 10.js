const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString();

const recursiveMakeStar = (l) => {
  if (l === 1) {
    return ["*"];
  }

  const stars = recursiveMakeStar(l / 3);
  const L = [];

  for (const s of stars) {
    L.push(s.repeat(3));
  }
  for (const s of stars) {
    L.push(s + " ".repeat(l / 3) + s);
  }
  for (const s of stars) {
    L.push(s.repeat(3));
  }
  return L;
};

console.log(recursiveMakeStar(input).join("\n"));
