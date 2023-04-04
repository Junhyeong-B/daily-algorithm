/**
 * Runtime 130 ms Beats 47.83%
 * Memory 50.4 MB Beats 52.17%
 */
function partitionString(s: string): number {
  const strSet = new Set<string>();
  let count = 1;
  for (let i = 0; i < s.length; i++) {
    if (strSet.has(s[i])) {
      count++;
      strSet.clear();
    }
    strSet.add(s[i]);
  }

  return count;
}

console.log(partitionString('abacaba')); // 4
