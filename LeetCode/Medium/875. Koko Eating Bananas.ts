/**
 * Runtime 85 ms Beats 74.43%
 * Memory 46.1 MB Beats 78.41%
 */
function checkEatingSpeedPosible(
  piles: number[],
  speed: number,
  h: number
): boolean {
  let days = 0;
  for (const pile of piles) {
    days += Math.ceil(pile / speed);
  }
  return days <= h;
}

function minEatingSpeed(piles: number[], h: number): number {
  let l = 1;
  let r = Math.max(...piles);

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (checkEatingSpeedPosible(piles, mid, h)) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return l;
}

console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)); // 23
