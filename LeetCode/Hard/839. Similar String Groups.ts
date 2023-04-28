/**
 * Runtime 95 ms Beats 100%
 * Memory 47.2 MB Beats 50%
 */
const isSimilar = (str1: string, str2: string) => {
  let count = 0;

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      count++;
    }

    if (count > 2) {
      return false;
    }
  }

  return count === 0 || count === 2;
};

function numSimilarGroups(strs: string[]): number {
  let groupCount = 0;
  const visited = new Set<string>();

  const dfs = (str: string, strs: string[], visited: Set<string>) => {
    if (visited.has(str)) {
      return;
    }

    visited.add(str);

    for (const s of strs) {
      if (!visited.has(s) && isSimilar(str, s)) {
        dfs(s, strs, visited);
      }
    }
  };

  for (const str of strs) {
    if (visited.has(str)) {
      continue;
    }

    dfs(str, strs, visited);
    groupCount++;
  }

  return groupCount;
}

console.log(numSimilarGroups(['tars', 'rats', 'arts', 'star'])); // 2
