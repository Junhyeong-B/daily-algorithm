const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const nums = input.map((num) => +num);
let primeNumber = Array.from({ length: 1000001 }, () => true);
primeNumber[0] = false;
primeNumber[1] = false;

for (let i = 2; i <= Math.floor(1000001 ** 0.5); i++) {
  if (primeNumber[i]) {
    for (let j = i * 2; j <= 1000001; j += i) {
      primeNumber[j] = false;
    }
  }
}
primeNumber[2] = false;

const findGoldbachMinPrimeNumber = (n) => {
  for (let i = 3; i < n; i++) {
    if (primeNumber[i] && primeNumber[n - i]) {
      return i;
    }
  }

  return null;
};

for (const N of nums) {
  if (N === 0) {
    break;
  }

  const minPrimeNumber = findGoldbachMinPrimeNumber(N);
  if (minPrimeNumber === null) {
    console.log("Goldbach's conjecture is wrong.");
  } else {
    console.log(`${N} = ${minPrimeNumber} + ${N - minPrimeNumber}`);
  }
}
