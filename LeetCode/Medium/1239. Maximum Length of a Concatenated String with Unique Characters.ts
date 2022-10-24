/**
 * Runtime: 4128 ms, faster than 33.33% of TypeScript online submissions for Maximum Length of a Concatenated String with Unique Characters.
 * Memory Usage: 48.9 MB, less than 66.67% of TypeScript online submissions for Maximum Length of a Concatenated String with Unique Characters.
 */

function isValidSubstring(str: string) {
  const set = new Set(str.split(""));
  return set.size === str.length;
}

function maxLength(arr: string[]): number {
  let maxLen = 0;
  const dfs = (L: number, tmp: string, arr: string[]) => {
    if (L === arr.length) {
      if (tmp.length < maxLen) {
        return;
      }

      if (isValidSubstring(tmp)) {
        maxLen = Math.max(maxLen, tmp.length);
      }
    } else {
      dfs(L + 1, tmp + arr[L], arr);
      dfs(L + 1, tmp, arr);
    }
  }

  dfs(0, "", arr);

  return maxLen;
};
