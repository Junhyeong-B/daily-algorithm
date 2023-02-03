/**
 * Runtime 65 ms Beats 85.92%
 * Memory 45.5 MB Beats 9.86%
 */

const isProperOrder = (
  word1: string,
  word2: string,
  order: Record<string, number>
): boolean => {
  if (word1 === word2) {
    return true;
  }

  const beforeSortedWord = word1 + '/' + word2;
  const afterSortedWord = [word1, word2]
    .sort((a, b) => {
      for (let i = 0; i < a.length; i++) {
        if (a[i] === b[i]) {
          continue;
        }

        return order[a[i]] - order[b[i]];
      }

      return a.length - b.length;
    })
    .join('/');

  return beforeSortedWord === afterSortedWord;
};

function isAlienSorted(words: string[], order: string): boolean {
  const alienAlphabetOrder = order
    .split('')
    .reduce<Record<string, number>>((acc, cur, i) => {
      acc[cur] = i;
      return acc;
    }, {});

  for (let i = 0; i < words.length - 1; i++) {
    if (!isProperOrder(words[i], words[i + 1], alienAlphabetOrder)) {
      return false;
    }
  }

  return true;
}

console.log(isAlienSorted(['aa', 'a'], 'abqwertyuioplkjhgfdszxcvnm')); // false
