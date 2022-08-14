{
  const checkOneLetterDifferent = (word1: string, word2: string) => {
    let count = 0;
    for (let i = 0; i < word1.length; i++) {
      if (count > 1) {
        return false;
      }

      if (word1[i] !== word2[i]) {
        count++;
      }
    }

    return count === 1;
  }

  function findLadders(beginWord: string, endWord: string, wordList: string[]): string[][] {
    const endWordIndex = wordList.indexOf(endWord);
    if (!wordList.includes(endWord)) {
      return [];
    }

    const result: string[][] = [];
    const check = Array.from({ length: wordList.length }, () => 0);
    let min: number = Infinity;

    const dfs = (currentWord: string, check: number[], words: string[]) => {
      if (words.length > min) {
        return;
      }

      if (currentWord === endWord) {
        min = Math.min(words.length, min);
        result.push(words);
      } else {
        for (let i = 0; i < wordList.length; i++) {
          if (check[i] === 1) {
            continue;
          }

          if (checkOneLetterDifferent(currentWord, wordList[i])) {
            check[i] = 1;
            dfs(wordList[i], check, [...words, wordList[i]]);
            check[i] = 0;
          }
        }
      }
    }

    dfs(beginWord, check, [beginWord]);

    return result.filter(res => res.length === min);
  };
}