const fs = require('fs');
const [S, Bomb] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const stack = [];
for (let i = 0; i < S.length; i++) {
  stack.push(S[i]);
  if (stack.slice(-Bomb.length).join('') === Bomb) {
    for (let j = 0; j < Bomb.length; j++) {
      stack.pop();
    }
  }
}

console.log(stack.join('') || 'FRULA');
