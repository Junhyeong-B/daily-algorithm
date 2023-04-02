/**
 * Runtime 347 ms Beats 50%
 * Memory 76.5 MB Beats 62.50%
 */
function successfulPairs(
  spells: number[],
  potions: number[],
  success: number
): number[] {
  const sortedPotions = potions.slice().sort((a, b) => a - b);

  const result = new Array<number>();
  for (const spell of spells) {
    const minPotion = success / spell;

    let l = 0;
    let r = sortedPotions.length - 1;
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      if (sortedPotions[mid] < minPotion) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }

    result.push(potions.length - l);
  }

  return result;
}

console.log(successfulPairs([3, 1, 2], [8, 5, 8], 16)); // [2, 0, 2]
