/**
 * Runtime 57 ms Beats 87.26%
 * Memory 45 MB Beats 27.80%
 */
function mergeAlternately(word1: string, word2: string): string {
  let result = '';
  for (let i = 0; i < Math.min(word1.length, word2.length); i++) {
    result += word1[i] + word2[i];
  }

  if (word1.length < word2.length) {
    result += word2.slice(word1.length);
  }

  if (word2.length < word1.length) {
    result += word1.slice(word2.length);
  }

  return result;
}

console.log(mergeAlternately('ab', 'pqrs')); // apbqrs
