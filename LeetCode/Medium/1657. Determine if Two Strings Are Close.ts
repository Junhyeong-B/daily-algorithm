/**
 * Runtime 1175 ms Beats 50%
 * Memory 63.4 MB Beats 50%
 */

function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) {
    return false;
  }

  const word1Hash = word1
    .split('')
    .reduce((acc, cur) => ({ ...acc, [cur]: (acc[cur] || 0) + 1 }), {});
  const word1Set = new Set(Object.keys(word1Hash));

  const word2Hash = word2
    .split('')
    .reduce((acc, cur) => ({ ...acc, [cur]: (acc[cur] || 0) + 1 }), {});
  const word2Set = new Set(Object.keys(word2Hash));

  if (word1Set.size !== word2Set.size) {
    return false;
  }

  for (const word of word1Set) {
    if (!word2Set.has(word)) {
      return false;
    }
  }

  const word1Count: number[] = Object.values(word1Hash);
  const word2Count: number[] = Object.values(word2Hash);
  word1Count.sort((a, b) => a - b);
  word2Count.sort((a, b) => a - b);

  for (let i = 0; i < word1Count.length; i++) {
    if (word1Count[i] !== word2Count[i]) {
      return false;
    }
  }

  return true;
}

console.log(closeStrings('abbzzca', 'babzzcz')); // false
