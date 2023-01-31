/**
 * Runtime 75 ms Beats 81.48%
 * Memory 47.1 MB Beats 11.11%
 */

function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let poisoned = 0;
  let currentIndex = 0;
  for (let i = 0; i < timeSeries.length; i++) {
    currentIndex = Math.max(timeSeries[i], currentIndex);
    poisoned += timeSeries[i] + duration - currentIndex;
    currentIndex = timeSeries[i] + duration;
  }
  return poisoned;
}

console.log(findPoisonedDuration([1, 2], 2)); // 3
