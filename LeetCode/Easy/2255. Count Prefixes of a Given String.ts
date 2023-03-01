/**
 * Runtime 64 ms Beats 90.63%
 * Memory 44.4 MB Beats 71.88%
 */
function countPrefixes(words: string[], s: string): number {
  return words.filter((word) => s.startsWith(word)).length;
}

console.log(countPrefixes(['a', 'b', 'c', 'ab', 'bc', 'abc'], 'abc')); // 3
