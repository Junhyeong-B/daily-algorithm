/**
 * Runtime 70 ms Beats 86.90%
 * Memory 45.2 MB Beats 8.59%
 */

function detectCapitalUse(word: string): boolean {
  if (word === word.toLocaleLowerCase() || word === word.toUpperCase()) {
    return true;
  }

  if (word[0].toUpperCase() !== word[0]) {
    return false;
  }

  for (let i = 1; i < word.length; i++) {
    if (word[i].toUpperCase() === word[i]) {
      return false;
    }
  }

  return true;
}

console.log(detectCapitalUse("Leetcode")); // true
