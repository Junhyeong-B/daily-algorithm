/**
 * Runtime: 114 ms, faster than 15.53% of TypeScript online submissions for Decode String.
 * Memory Usage: 43.4 MB, less than 37.86% of TypeScript online submissions for Decode String.
 */

const isNum = (char: string) => char !== "" && !isNaN(+char);
const isOpen = (char: string) => char === "[";
const isClose = (char: string) => char === "]";

const getInner = (stack: string[]) => {
  const inner: string[] = [];
  while (stack[stack.length - 1] && !isOpen(stack[stack.length - 1])) {
    inner.push(stack.pop()!);
  }
  stack.pop();
  return inner.reverse().join("");
}

const getCount = (stack: string[]) => {
  const counter: string[] = [];
  while (stack[stack.length - 1] && isNum(stack[stack.length - 1])) {
    counter.push(stack.pop()!);
  }
  return +counter.reverse().join("")
}

function decodeString(s: string): string {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    if (isClose(char)) {
      const inner = getInner(stack);
      const counter = getCount(stack);
      const decodedString = inner.repeat(counter)

      stack.push(decodedString);
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};