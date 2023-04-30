const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const doc = input[0];
const word = input[1];
const n = word.length;

let result = 0;
for (let i = 0; i < doc.length; i++) {
  const currentWord = doc.slice(i, i + n);

  if (currentWord === word) {
    result++;
    i += n - 1;
  }
}

console.log(result);
