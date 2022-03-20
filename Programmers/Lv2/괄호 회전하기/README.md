```jsx
const isProperBracket = (s) => {
  const stack = [];

  for (const bracket of s) {
    const lastBracket = stack[stack.length - 1];
    switch (bracket) {
      case "(":
      case "[":
      case "{":
        stack.push(bracket);
        break;
      case ")":
        if (!lastBracket) return false;
        if (lastBracket === "(") {
          stack.pop();
        }
        break;
      case "]":
        if (!lastBracket) return false;
        if (lastBracket === "[") {
          stack.pop();
        }
        break;
      case "}":
        if (!lastBracket) return false;
        if (lastBracket === "{") {
          stack.pop();
        }
        break;
    }
  }

  return !stack.length;
};

function solution(s) {
  const tempArray = s.split("");
  let count = 0;

  for (const i in tempArray) {
    if (isProperBracket(tempArray)) {
      count += 1;
    }

    tempArray.push(tempArray.shift());
  }

  return count;
}
```