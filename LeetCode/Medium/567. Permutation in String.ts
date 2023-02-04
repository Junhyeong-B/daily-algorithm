/**
 * Runtime 96 ms Beats 81.13%
 * Memory 46 MB Beats 76.98%
 */

const isSameCount = (
  s1Map: Record<string, number>,
  s2Map: Record<string, number>,
  s1Keys: string[]
): boolean => {
  for (const key of s1Keys) {
    if (s1Map[key] !== s2Map[key]) {
      return false;
    }
  }

  return true;
};

function checkInclusion(s1: string, s2: string): boolean {
  const s1Map = s1.split("").reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  const s2Map: Record<string, number> = {};
  const s1Keys = s1.split("");

  for (let i = 0; i < s1.length; i++) {
    s2Map[s2[i]] = (s2Map[s2[i]] || 0) + 1;
  }

  if (isSameCount(s1Map, s2Map, s1Keys)) {
    return true;
  }

  for (let i = s1.length; i < s2.length; i++) {
    const diff = i - s1.length;
    s2Map[s2[diff]] -= 1;
    s2Map[s2[i]] = (s2Map[s2[i]] || 0) + 1;
    if (isSameCount(s1Map, s2Map, s1Keys)) {
      return true;
    }
  }

  return false;
}

console.log(checkInclusion("ab", "eidbaooo")); // true
