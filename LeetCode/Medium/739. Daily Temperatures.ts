/**
 * Runtime 4301 ms Beats 20.67%
 * Memory 66 MB Beats 66.48%
 */

function dailyTemperatures(temperatures: number[]): number[] {
  return temperatures.map((temp, i, temps) => {
    for (let j = i + 1; j < temps.length; j++) {
      if (temp < temps[j]) {
        return j - i;
      }
    }
    return 0;
  });
}

console.log(dailyTemperatures([30, 40, 50, 60])); // [1, 1, 1, 0]
