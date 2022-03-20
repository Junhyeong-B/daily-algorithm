```jsx
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const stack = [-1];
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    const top = stack[stack.length - 1];

    if (s[top] === "(" && s[i] === ")") {
      stack.pop();
      const newTop = stack[stack.length - 1];
      answer = Math.max(answer, i - newTop);
    } else {
      stack.push(i);
    }
  }

  return answer;
};
```