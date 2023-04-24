const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const booksHashMap = input.slice(1).reduce((acc, cur) => {
  acc[cur] = (acc[cur] ?? 0) + 1;
  return acc;
}, {});

const sortedBooks = Object.entries(booksHashMap).sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0].localeCompare(b[0]);
  } else {
    return b[1] - a[1];
  }
});

console.log(sortedBooks[0][0]);
