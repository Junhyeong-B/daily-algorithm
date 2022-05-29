/**
 * Runtime: 571 ms, faster than 30.00% of TypeScript online submissions for Maximum Product of Word Lengths.
 * Memory Usage: 46.3 MB, less than 80.00% of TypeScript online submissions for Maximum Product of Word Lengths.
 */

const hasShareCommonLetter = (word1: string, word2: string): boolean => {
  for (let i = 0; i < word1.length; i++) {
    if (word2.includes(word1[i])) {
      return false;
    }
  }

  return true;
}

function maxProduct(words: string[]): number {
  let max = 0;

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (hasShareCommonLetter(words[i], words[j])) {
        const multipliedWordLength = words[i].length * words[j].length;
        max = Math.max(max, multipliedWordLength);
      }
    }
  }

  return max;
};