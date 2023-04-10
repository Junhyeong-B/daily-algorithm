/**
 * Runtime 150 ms Beats 76.92%
 * Memory 50.4 MB Beats 30.77%
 */
const isValidParantheses = (s: string): boolean => {
  let count = 0;

  for (const str of s) {
    switch (str) {
      case '(':
        count++;
        break;
      case ')':
        if (count === 0) {
          return false;
        }

        count--;
      default:
    }
  }

  return count === 0;
};

function removeInvalidParentheses(s: string): string[] {
  const result: string[] = [];
  const check = new Set<string>();
  check.add(s);

  const queue = [s];
  let flag = false;
  while (queue.length) {
    const str = queue.shift()!;

    if (isValidParantheses(str)) {
      result.push(str);
      flag = true;
    }

    if (flag) {
      continue;
    }

    for (let i = 0; i < str.length; i++) {
      if (str[i] !== '(' && str[i] !== ')') {
        continue;
      }

      const nextStr = str.substring(0, i) + str.substring(i + 1);
      if (!check.has(nextStr)) {
        check.add(nextStr);
        queue.push(nextStr);
      }
    }
  }

  return result;
}

console.log(removeInvalidParentheses('()())()')); // ['(())()', '()()()']
