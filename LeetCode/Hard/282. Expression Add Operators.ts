/**
 * Runtime 3570 ms Beats 14.29%
 * Memory 54.6 MB Beats 28.57%
 */
function addOperators(num: string, target: number): string[] {
  const set = new Set<string>();

  const dfs = (l: number, str: string) => {
    if (l === num.length) {
      const expression = str;
      if (!set.has(expression) && calculateString(expression) === target) {
        set.add(expression);
      }
    } else {
      if (l === 0) {
        dfs(l + 1, num[l]);
      } else {
        dfs(l + 1, `${str}${num[l]}`);
        dfs(l + 1, `${str}+${num[l]}`);
        dfs(l + 1, `${str}-${num[l]}`);
        dfs(l + 1, `${str}*${num[l]}`);
      }
    }
  };

  dfs(0, '');

  return Array.from(set);
}

function calculateString(str: string) {
  const strArray = str.replace(/[-+*]/g, (s) => ` ${s} `).split(' ');

  for (const exp of strArray) {
    if (exp.length > 1 && exp[0] === '0') {
      return NaN;
    }
  }

  const multiplied: (string | number)[] = [];
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] !== '*') {
      multiplied.push(strArray[i]);
    } else {
      const num1 = +multiplied.pop()!;
      const num2 = +strArray[i + 1];
      multiplied.push(num1 * num2);
      i++;
    }
  }

  let result = +multiplied[0];
  let operator = '+';
  for (let i = 1; i < multiplied.length; i++) {
    if (multiplied[i] === '+') {
      operator = '+';
      continue;
    } else if (multiplied[i] === '-') {
      operator = '-';
      continue;
    }

    if (operator === '+') {
      result += +multiplied[i];
    } else {
      result -= +multiplied[i];
    }
  }

  return result;
}

console.log(addOperators('105', 5)); // ['10-5', '1*0+5']
