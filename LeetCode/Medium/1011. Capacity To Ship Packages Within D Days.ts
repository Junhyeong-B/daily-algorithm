/**
 * Runtime 119 ms Beats 16.67%
 * Memory 46.5 MB Beats 41.67%
 */

function isPossibleWeight(
  weights: number[],
  days: number,
  capacity: number
): boolean {
  let ship = 0;
  let totalWeight = 0;

  for (const weight of weights) {
    totalWeight += weight;

    if (capacity < totalWeight) {
      totalWeight = weight;
      ship++;
    }

    if (days < ship) {
      return false;
    }
  }

  return days < ship + 1 ? false : true;
}

function shipWithinDays(weights: number[], days: number): number {
  let min = 0;
  let max = 0;
  for (const weight of weights) {
    min = Math.max(min, weight);
    max += weight;
  }

  while (min < max) {
    const mid = Math.floor((min + max) / 2);

    if (isPossibleWeight(weights, days, mid)) {
      max = mid;
    } else {
      min = mid + 1;
    }
  }

  return max;
}

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // 15
