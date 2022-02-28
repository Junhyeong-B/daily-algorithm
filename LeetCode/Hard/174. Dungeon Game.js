/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  const m = dungeon.length;
  const n = dungeon[0].length;
  console.log(m, n);
  const route = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => 0)
  );

  route[m - 1][n - 1] = Math.abs(Math.min(dungeon[m - 1][n - 1], 0)) + 1;

  for (let i = m - 2; i >= 0; i--) {
    const nextStep = dungeon[i][n - 1] * -1;
    const prevStep = route[i + 1][n - 1];
    route[i][n - 1] = Math.max(prevStep + nextStep, 1);
  }

  for (let i = n - 2; i >= 0; i--) {
    const nextStep = dungeon[m - 1][i] * -1;
    const prevStep = route[m - 1][i + 1];
    route[m - 1][i] = Math.max(prevStep + nextStep, 1);
  }

  for (let i = m - 2; i >= 0; i--) {
    for (let j = n - 2; j >= 0; j--) {
      const nextStep = dungeon[i][j] * -1;
      route[i][j] = Math.max(
        Math.min(route[i + 1][j], route[i][j + 1]) + nextStep,
        1
      );
    }
  }

  return route[0][0];
};
