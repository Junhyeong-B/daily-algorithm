const fs = require('fs');
const expression = fs.readFileSync('/dev/stdin').toString().trim();

const splitExpression = expression
  .replace(/[+-]/g, (exp) => ` ${exp} `)
  .split(' ')
  .map((exp) => {
    const number = +exp;
    return isNaN(number) ? exp : number;
  });

const stack = [];

for (let i = 0; i < splitExpression.length; i++) {
  if (splitExpression[i] !== '+') {
    stack.push(splitExpression[i]);
    continue;
  }

  const num1 = stack.pop();
  const num2 = splitExpression[i + 1];
  stack.push(num1 + num2);
  i++;
}

if (stack.length === 1) {
  console.log(stack[0]);
} else {
  let sum = stack[0];

  for (let i = 2; i < stack.length; i += 2) {
    sum -= stack[i];
  }

  console.log(sum);
}
