/**
 * Runtime 318 ms Beats 19.23%
 * Memory 48.9 MB Beats 41.83%
 */

const isSameCount = (
  sMap: Record<string, number>,
  tMap: Record<string, number>,
  tKeys: string[]
): boolean => {
  for (const key of tKeys) {
    if (!sMap[key] || tMap[key] > sMap[key]) {
      return false;
    }
  }

  return true;
};

function minWindow(s: string, t: string): string {
  const tMap = t.split('').reduce<Record<string, number>>((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
  const tKeys = Object.keys(tMap);
  const sMap: Record<string, number> = {};

  let minimumSubstring = s + t;
  let i = 0;
  for (let j = 0; j < s.length; j++) {
    sMap[s[j]] = (sMap[s[j]] || 0) + 1;

    while (isSameCount(sMap, tMap, tKeys)) {
      const subString = s.slice(i, j + 1);
      minimumSubstring =
        minimumSubstring.length > subString.length
          ? subString
          : minimumSubstring;

      sMap[s[i]] -= 1;

      if (sMap[s[i]] === 0) {
        delete sMap[s[i]];
      }

      i++;
    }
  }

  return minimumSubstring === s + t ? '' : minimumSubstring;
}

console.log(minWindow('ADOBECODEBANC', 'ABC')); // BANC
