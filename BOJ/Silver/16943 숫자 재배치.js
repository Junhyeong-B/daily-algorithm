const fs = require("fs");
const [A, B] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((input) => parseInt(input, 10));

const arrayA = A.toString().split("");
const check = Array.from({ length: arrayA.length }, () => 0);
const setC = new Set();

const dfs = (numberArray, check, leng) => {
  if (leng === arrayA.length) {
    setC.add(+numberArray.join(""));
  } else {
    for (let i = 0; i < arrayA.length; i++) {
      if (numberArray.length === 0 && arrayA[i] === "0") {
        continue;
      }

      if (check[i] === 0) {
        check[i] = 1;
        dfs([...numberArray, arrayA[i]], check, leng + 1);
        check[i] = 0;
      }
    }
  }
};

dfs([], check, 0);

let C = -1;

for (const number of setC) {
  if (number >= B) {
    continue;
  }

  C = Math.max(C, number);
}

console.log(C);
