/**
 * Runtime: 422 ms, faster than 71.64% of TypeScript online submissions for Substring with Concatenation of All Words.
 * Memory Usage: 50.2 MB, less than 59.70% of TypeScript online submissions for Substring with Concatenation of All Words.
 */

const isConcat = (word: string, wordCount: Map<string, number>, length: number): boolean => {
  const map = new Map<string, number>();

  for (let i = 0; i < word.length; i += length) {
    const currentWord = word.slice(i, i + length);
    const count = map.get(currentWord) || 0;
    map.set(currentWord, count + 1);
  }

  for (const [word, count] of map) {
    if (!wordCount.get(word) || wordCount.get(word) !== count) {
      return false;
    }
  }

  return true;
}

function findSubstring(s: string, words: string[]): number[] {
  const wordLength = words[0].length;
  const subStringLength = words.length * wordLength;
  const map = new Map<string, number>();

  for (const word of words) {
    const count = map.get(word) || 0;
    map.set(word, count + 1);
  }

  const result: number[] = [];
  for (let i = 0; i < s.length - subStringLength + 1; i++) {
    const currentWord = s.slice(i, i + subStringLength);
    if (isConcat(currentWord, map, wordLength)) {
      result.push(i);
    }
  }

  return result;
};

console.log(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"])) // [6, 9, 12]