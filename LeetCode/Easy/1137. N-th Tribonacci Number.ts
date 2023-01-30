/**
 * Runtime 71 ms Beats 62.13%
 * Memory 42.7 MB Beats 76.92%
 */

function tribonacci(n: number): number {
  const tri = [0, 1, 1];

  for (let i = 3; i <= n; i++) {
    tri.push(tri[i - 3] + tri[i - 2] + tri[i - 1]);
  }

  return tri[n];
}

console.log(tribonacci(25)); // 1389537
