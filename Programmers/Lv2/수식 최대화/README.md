```jsx
function solution(expression) {
  const expressions = [expression[0]];
  for (let i = 1; i < expression.length; i++) {
    switch (expression[i]) {
      case "+":
      case "-":
      case "*":
        expressions.push(expression[i]);
        expressions.push("");
        break;
      default:
        const lastIndex = expressions.length - 1;
        expressions[lastIndex] += expression[i];
        break;
    }
  }

  const mathSigns = [
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "+", "*"],
    ["-", "*", "+"],
    ["*", "+", "-"],
    ["*", "-", "+"],
  ];

  let answer = 0;

  for (let signs of mathSigns) {
    const tmp = [...expressions];
    for (let sign of signs) {
      while (tmp.includes(sign)) {
        const signIndex = tmp.indexOf(sign);
        switch (sign) {
          case "+":
            tmp[signIndex - 1] = +tmp[signIndex - 1] + +tmp[signIndex + 1];
            break;
          case "-":
            tmp[signIndex - 1] = +tmp[signIndex - 1] - +tmp[signIndex + 1];
            break;
          case "*":
            tmp[signIndex - 1] = +tmp[signIndex - 1] * +tmp[signIndex + 1];
            break;
          default:
        }
        tmp.splice(signIndex, 2);
      }
    }
    answer = Math.max(answer, Math.abs(tmp[0]));
  }

  return answer;
}
```