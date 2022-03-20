```jsx
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const answer = [];
  const dp = Array.from({ length: s.length + 1 }, () => false);
  dp[s.length] = true;

  for (let i = s.length - 1; i >= 0; i--) {
    for (const word of wordDict) {
      if (i + word.length <= s.length && s.slice(i, i + word.length) === word) {
        if (!dp[i]) {
          dp[i] = [[word, i + word.length]];
        } else {
          dp[i].push([word, i + word.length]);
        }
      }
    }
  }

  const recursive = (wordArray, currentIndex, currentDp) => {
    if (currentIndex > s.length || !currentDp) {
      return;
    }

    if (currentIndex === s.length) {
      answer.push(wordArray.join(" "));
    } else {
      for (const [word, nextIndex] of currentDp) {
        recursive([...wordArray, word], nextIndex, dp[nextIndex]);
      }
    }
  };

  recursive([], 0, dp[0]);

  return answer;
};
```