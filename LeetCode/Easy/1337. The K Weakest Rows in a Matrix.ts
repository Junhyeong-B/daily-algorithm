/*
  Runtime: 120 ms, faster than 27.59% of TypeScript online submissions for The K Weakest Rows in a Matrix.
  Memory Usage: 45 MB, less than 72.41% of TypeScript online submissions for The K Weakest Rows in a Matrix.
*/

function kWeakestRows(mat: number[][], k: number): number[] {
  const n = mat[0].length;

  return mat
    .map((m, i) => {
      const civiliansIndex = m.findIndex(soldiers => soldiers === 0);
      return [i, civiliansIndex < 0 ? n - 1 : civiliansIndex - 1];
    })
    .sort((a, b) => a[1] - b[1])
    .slice(0, k)
    .map(mat => mat[0]);
};
