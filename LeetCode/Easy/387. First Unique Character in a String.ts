/**
 * Runtime: 184 ms, faster than 32.84% of TypeScript online submissions for First Unique Character in a String.
 * Memory Usage: 46 MB, less than 59.70% of TypeScript online submissions for First Unique Character in a String.
 */

function firstUniqChar(s: string): number {
  const countMap = new Map<string, number>();

  for (const alpha of s) {
    const count = countMap.get(alpha) || 0;
    countMap.set(alpha, count + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (countMap.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
};