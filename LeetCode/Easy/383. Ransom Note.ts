/**
 * Runtime 68 ms Beats 99.76%
 * Memory 47 MB Beats 42.58%
 */

function getCountofAlpha(str: string): Record<string, number> {
  return str.split("").reduce<Record<string, number>>((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
}

function canConstruct(ransomNote: string, magazine: string): boolean {
  const ransomNoteCount = getCountofAlpha(ransomNote);
  const magazineCount = getCountofAlpha(magazine);

  for (const key of Object.keys(ransomNoteCount)) {
    if (!magazineCount[key] || magazineCount[key] < ransomNoteCount[key]) {
      return false;
    }
  }

  return true;
}

console.log(
  canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj")
); // true
