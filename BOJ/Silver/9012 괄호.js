const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const T = +input[0];

outer: for (let i = 1; i <= T; i++) {
  const parenthesis = input[i];
  if (parenthesis.length % 2 === 1) {
    console.log('NO');
  } else {
    const stack = [];
    for (const bracket of parenthesis) {
      if (bracket === '(') {
        stack.push(bracket);
      } else {
        if (stack.length === 0) {
          console.log('NO');
          continue outer;
        }
        stack.pop();
      }
    }

    if (stack.length > 0) {
      console.log('NO');
    } else {
      console.log('YES');
    }
  }
}
