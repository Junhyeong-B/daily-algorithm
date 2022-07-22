/**
 * Runtime: 107 ms, faster than 40.77% of TypeScript online submissions for Is Subsequence.
 * Memory Usage: 43.2 MB, less than 56.98% of TypeScript online submissions for Is Subsequence.
 */

function isSubsequence(s: string, t: string): boolean {
  let sIndex = 0;

  for (let i = 0; i < t.length; i++) {
    if (s[sIndex] === t[i]) {
      sIndex++;
    }
  }

  return sIndex === s.length;
};