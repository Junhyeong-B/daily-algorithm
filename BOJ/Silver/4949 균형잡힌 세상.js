const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
  if (input[i] === '.') {
    break;
  }

  if (isValidBrackets(input[i])) {
    console.log('yes');
  } else {
    console.log('no');
  }
}

function isValidBrackets(str) {
  const stack = [];
  for (const s of str) {
    if (stack.length === 0) {
      if (s === ')' || s === ']') {
        return false;
      }

      if (s === '(' || s === '[') {
        stack.push(s);
      }
    } else {
      switch (s) {
        case '[':
        case '(':
          stack.push(s);
          break;
        case ']':
          if (stack[stack.length - 1] === '(') {
            return false;
          }
          stack.pop();
          break;
        case ')':
          if (stack[stack.length - 1] === '[') {
            return false;
          }
          stack.pop();
          break;
      }
    }
  }

  return stack.length === 0;
}
