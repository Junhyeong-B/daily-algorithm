const isProperBracket = (p) => {
  const stack = [];
  for (const bracket of p) {
    if (bracket === "(") {
      stack.push(bracket);
    } else {
      if (!stack.length) {
        return false;
      }

      stack.pop();
    }
  }

  return stack.length === 0;
};

const isBalancedBracket = (p) => {
  let count = 0;
  for (const bracket of p) {
    if (bracket === "(") {
      count += 1;
    } else {
      count -= 1;
    }
  }

  return count === 0;
};

const separateUV = (p) => {
  for (let i = 2; i < p.length; i += 2) {
    const u = p.slice(0, i);
    if (isBalancedBracket(u)) {
      return [u, p.slice(i)];
    }
  }

  return [p, ""];
};

const reverseBracket = (p) => {
  const brackets = [];
  for (const bracket of p) {
    if (bracket === ")") {
      brackets.push("(");
    } else {
      brackets.push(")");
    }
  }

  return brackets.join("");
};

const solution = (p) => {
  const recursive = (p, tmp) => {
    if (p === "") {
      const bracket = tmp.join("");
      return bracket;
    }

    const [u, v] = separateUV(p);

    if (isProperBracket(u)) {
      return recursive(v, tmp.concat(u));
    } else {
      const brackets = ["("];
      const middleBrackets = recursive(v, []);
      brackets.push(middleBrackets);
      brackets.push(")");

      const updateU = reverseBracket(u.slice(1, u.length - 1));
      brackets.push(updateU);

      return tmp.concat(brackets).join("");
    }
  };

  return recursive(p, []);
};
