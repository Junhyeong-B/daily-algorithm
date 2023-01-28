/**
 * Runtime 54 ms Beats 100%
 * Memory 45.1 MB Beats 52.63%
 */

function getCountofAlpha(str: string): Record<string, number> {
  return str.split('').reduce<Record<string, number>>((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
}

function findTheDifference(s: string, t: string): string {
  const sCount = getCountofAlpha(s);
  const tCount = getCountofAlpha(t);

  for (const str of Object.keys(tCount)) {
    if (!sCount[str] || sCount[str] < tCount[str]) {
      return str;
    }
  }

  return '';
}

console.log(findTheDifference('abcd', 'abcde'));
