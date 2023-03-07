/**
 * Runtime 158 ms Beats 100%
 * Memory 56.4 MB Beats 50%
 */
function canTrip(times: number[], trips: number, totalTrips: number) {
  let totalTime = 0;
  for (const time of times) {
    totalTime += Math.floor(trips / time);
  }

  return totalTime >= totalTrips;
}

function minimumTime(time: number[], totalTrips: number): number {
  let l = Math.min(...time);
  let r = Math.max(...time) * totalTrips;
  let minTime = Infinity;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (canTrip(time, mid, totalTrips)) {
      minTime = Math.min(minTime, mid);
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }

  return minTime;
}

console.log(minimumTime([1, 2, 3], 5)); // 3
