/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) return [];

  const letters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const answer = [];

  const DFS = (L, m, tmp) => {
    if (L === m) {
      answer.push(tmp.join(""));
    } else {
      for (let i = 0; i < letters[digits[L]].length; i++) {
        tmp.push(letters[digits[L]][i]);
        DFS(L + 1, m, [...tmp]);
        tmp.pop();
      }
    }
  };

  DFS(0, digits.length, []);

  return answer;
};
