/**
 * @param {number} n
 * @return {string[]}
 */
const countBracket = (bracket) => {
  return bracket.filter((b) => b === "(").length;
};

const isProper = (bracket) => {
  const stack = [];
  for (const b of bracket) {
    switch (b) {
      case "(":
        stack.push(b);
        break;
      case ")":
        if (!stack.length) {
          return false;
        }
        stack.pop();
        break;
    }
  }

  return true;
};

var generateParenthesis = function (n) {
  const answer = [];

  const DFS = (L, tmp) => {
    if (tmp[0] === ")") {
      return;
    }
    if (L === n * 2) {
      if (tmp[L - 1] === "(" || countBracket(tmp) !== n) {
        return;
      }
      if (isProper(tmp)) {
        answer.push(tmp.join(""));
      }
    } else {
      DFS(L + 1, [...tmp, "("]);
      DFS(L + 1, [...tmp, ")"]);
    }
  };

  DFS(0, []);

  return answer;
};
