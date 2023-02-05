/**
 * Runtime 2784 ms Beats 17.10%
 * Memory 46.9 MB Beats 83.77%
 */

const isSameCount = (
  pMap: Record<string, number>,
  sMap: Record<string, number>,
  pKeys: string[]
): boolean => {
  for (const key of pKeys) {
    if (pMap[key] !== sMap[key]) {
      return false;
    }
  }
  return true;
};

function findAnagrams(s: string, p: string): number[] {
  const pMap = p.split("").reduce<Record<string, number>>((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  const sMap: Record<string, number> = {};
  const pKeys = p.split("");
  const results: number[] = [];

  for (let i = 0; i < p.length; i++) {
    sMap[s[i]] = (sMap[s[i]] || 0) + 1;
  }

  if (isSameCount(pMap, sMap, pKeys)) {
    results.push(0);
  }

  for (let i = p.length; i < s.length; i++) {
    const diff = i - p.length;
    sMap[s[diff]] -= 1;
    sMap[s[i]] = (sMap[s[i]] || 0) + 1;
    if (isSameCount(pMap, sMap, pKeys)) {
      results.push(diff + 1);
    }
  }

  return results;
}

console.log(findAnagrams("abab", "ab")); // [0, 1, 2]
