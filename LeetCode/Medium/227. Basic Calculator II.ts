/**
 * Runtime 189 ms Beats 15.7%
 * Memory 73.8 MB Beats 8.22%
 */
function calculate(s: string): number {
  const strArray = s
    .replace(/ /g, '')
    .replace(/[-+*\/]/g, (s) => ` ${s} `)
    .split(' ');

  const multipliedAndDivided: (string | number)[] = [];
  for (let i = 0; i < strArray.length; i++) {
    if (/[0-9+-]/.test(strArray[i])) {
      multipliedAndDivided.push(strArray[i]);
    } else {
      const num1 = multipliedAndDivided.pop();
      const num2 = strArray[i + 1];
      if (strArray[i] === '*') {
        multipliedAndDivided.push(Number(num1) * Number(num2));
      } else {
        multipliedAndDivided.push(Math.floor(Number(num1) / Number(num2)));
      }
      i++;
    }
  }

  let result = Number(multipliedAndDivided[0]);
  let operator = '+';
  for (let i = 1; i < multipliedAndDivided.length; i++) {
    if (multipliedAndDivided[i] === '+') {
      operator = '+';
      continue;
    } else if (multipliedAndDivided[i] === '-') {
      operator = '-';
      continue;
    }

    if (operator === '+') {
      result += Number(multipliedAndDivided[i]);
    } else {
      result -= Number(multipliedAndDivided[i]);
    }
  }

  return result;
}

console.log(calculate('42 + 2234512 / 2  ')); // 1117298
