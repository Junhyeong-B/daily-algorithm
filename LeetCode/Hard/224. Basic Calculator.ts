/**
 * Runtime 215 ms Beats 17.24%
 * Memory 50.3 MB Beats 41.38%
 */
function calculate(s: string): number {
  let str = s.replace(/ /g, '');
  while (str.includes('(')) {
    str = str.replace(/\([0-9+-]*\)/g, (expressionWithBracket) => {
      const expressionWithoutBracket = expressionWithBracket.slice(
        1,
        expressionWithBracket.length - 1
      );
      return calculateString(expressionWithoutBracket).toString();
    });
    str = str.replace(/--/g, '+');
  }

  return calculateString(str);
}

function calculateString(s: string) {
  const expression = s.replace(/[+-]/g, (op) => ` ${op} `).split(' ');
  let result = 0;
  let operator = '+';
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === '+') {
      operator = '+';
      continue;
    } else if (expression[i] === '-') {
      operator = '-';
      continue;
    }

    if (operator === '+') {
      result += Number(expression[i]);
    } else {
      result -= Number(expression[i]);
    }
  }

  return result;
}

console.log(calculate('1-(-2)')); // 3
