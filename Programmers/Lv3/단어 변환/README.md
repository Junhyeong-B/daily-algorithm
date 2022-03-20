```jsx
const countDiffrence = (word, next) => {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== next[i]) {
      count++;
      if (count > 1) {
        return false;
      }
    }
  }

  return count === 1;
};

function solution(begin, target, words) {
  const answer = [];
  const check = Array(words.length).fill(0);
  const DFS = (word, count) => {
    if (word === target) {
      answer.push(count);
    } else {
      for (let i = 0; i < words.length; i++) {
        if (countDiffrence(word, words[i]) && check[i] === 0) {
          check[i] = 1;
          DFS(words[i], count + 1);
          check[i] = 0;
        }
      }
    }
  };

  DFS(begin, 0);

  if (!answer.length) {
    return 0;
  }

  return Math.min(...answer);
}
```