const isProperBracket = (brackets) => {
  const stack = [];
  for (const bracket of brackets) {
    switch (bracket) {
      case "(":
        stack.push(bracket);
        break;
      case ")":
        if (!stack.length) {
          return false;
        }
        stack.pop();
        break;
    }
  }

  return !stack.length;
};

const makeUV = (brackets) => {
  let count = 0;
  const U = [];
  for (const i in brackets) {
    switch (brackets[i]) {
      case "(":
        count++;
        break;
      case ")":
        count--;
        break;
    }
    U.push(brackets[i]);

    if (!!U.length && count === 0) {
      const V = brackets.slice(+i + 1);
      return [U.join(""), V];
    }
  }
};

const recursive = (brackets) => {
  const [u, v] = makeUV(brackets);
  if (!isProperBracket(u)) {
  }
};

const reverseBrackets = (brackets) => {
  return brackets
    .split("")
    .map((b, i) => {
      if (i === 0) {
        return "";
      } else if (i === brackets.length - 1) {
        return "";
      } else {
        if (b === "(") {
          return ")";
        } else {
          return "(";
        }
      }
    })
    .join("");
};

function solution(p) {
  if (isProperBracket(p)) {
    return p;
  }
  const stack = [];

  const recursive = (brackets) => {
    if (brackets === "") {
      return;
    }

    const [u, v] = makeUV(brackets);
    console.log(u, v);
    if (isProperBracket(u)) {
      stack.push(u);
      recursive(v);
    } else {
      recursive(v);
      const createdBracket = stack[stack.length - 1];
      let bracket = "";
      console.log(!createdBracket);
      if (!createdBracket) {
        bracket = "(" + ")" + reverseBrackets(u);
        stack.push(bracket);
      } else {
        bracket = "(" + stack[stack.length - 1] + ")" + reverseBrackets(u);
        stack[stack.length - 1] = bracket;
      }
    }
  };

  recursive(p);

  return stack.join("");
}

console.log(solution(")("));
