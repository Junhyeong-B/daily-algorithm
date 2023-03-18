const fs = require('fs');
const S = fs.readFileSync('/dev/stdin').toString().trim();

const regExp = /<[a-z ]*>/g;

const tags = S.match(regExp) ?? [];
const stringWithoutTags = S.split(regExp).map((str) => {
  return str
    .split(' ')
    .map((s) => s.split('').reverse().join(''))
    .join(' ');
});

const result = [stringWithoutTags[0]];
let j = 0;
for (let i = 1; i < stringWithoutTags.length; i++) {
  result.push(tags[j]);
  j++;
  result.push(stringWithoutTags[i]);
}

console.log(result.join(''));
