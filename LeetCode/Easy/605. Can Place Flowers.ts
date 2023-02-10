/**
 * Runtime 79 ms Beats 50%
 * Memory 45.2 MB Beats 50%
 */

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  if (n === 0) {
    return true;
  }

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 1) {
      continue;
    }

    if (
      (flowerbed[i - 1] ?? 0) === 0 &&
      flowerbed[i] === 0 &&
      (flowerbed[i + 1] ?? 0) === 0
    ) {
      flowerbed[i] = 1;
      n--;
    }

    if (n === 0) {
      return true;
    }
  }

  return false;
}

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // true
