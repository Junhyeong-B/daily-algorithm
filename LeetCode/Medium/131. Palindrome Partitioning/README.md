```jsx
/**
 * @param {string} s
 * @return {string[][]}
 */
const isPalindrome = (str) => {
  return str === str.split("").reverse().join("");
};

var partition = function (s) {
  const answer = [];

  const DFS = (L, tmp, length) => {
    if (length > s.length) {
      return;
    }
    if (length === s.length) {
      for (const str of tmp) {
        if (!isPalindrome(str)) {
          return;
        }
      }
      answer.push([...tmp]);
    } else {
      for (let i = 1; i <= s.length; i++) {
        const currentWord = s.slice(length, L + i);
        if (currentWord === "") {
          continue;
        }

        const temp = [...tmp, currentWord];
        const wordLength = temp.join("").length;
        DFS(L + 1, temp, wordLength);

        if (wordLength === s.length) {
          break;
        }
      }
    }
  };

  DFS(0, [], 0);

  return answer;
};
```