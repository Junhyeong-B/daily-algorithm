/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const checkOneLetterDifferent = (word1, word2) => {
  let count = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      count++;
    }

    if (count > 1) {
      return false;
    }
  }

  return count === 1;
};

var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) {
    return 0;
  }
  const queue = [[beginWord, 1]];
  const check = Array.from({ length: wordList.length }, () => 0);

  while (queue.length) {
    const [currentWord, count] = queue.shift();
    if (currentWord === endWord) {
      return count;
    }
    for (let i = 0; i < wordList.length; i++) {
      if (check[i] === 0 && checkOneLetterDifferent(currentWord, wordList[i])) {
        check[i] = 1;
        queue.push([wordList[i], count + 1]);
      }
    }
  }

  return 0;
};
