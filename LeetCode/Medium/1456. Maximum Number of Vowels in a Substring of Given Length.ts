/**
 * Runtime 101 ms Beats 60.27%
 * Memory 46.7 MB Beats 46.7%
 */
const vowels = {
  a: 1,
  e: 1,
  i: 1,
  o: 1,
  u: 1,
};

function maxVowels(s: string, k: number): number {
  let count = 0;
  let maxCount = 0;
  for (let i = 0; i < k; i++) {
    count += vowels[s[i]] ?? 0;
  }

  maxCount = Math.max(count, maxCount);
  let i = 0;
  for (let j = k; j < s.length; j++) {
    count += vowels[s[j]] ?? 0;
    count -= vowels[s[i++]] ?? 0;
    maxCount = Math.max(count, maxCount);
  }

  return maxCount;
}

console.log(maxVowels('abciiidef', 3)); // 3
