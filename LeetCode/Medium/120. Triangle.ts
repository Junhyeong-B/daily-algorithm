/**
 * Runtime: 71 ms, faster than 94.74% of TypeScript online submissions for Triangle.
 * Memory Usage: 44.9 MB, less than 33.68% of TypeScript online submissions for Triangle.
 */

function minimumTotal(triangle: number[][]): number {
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }

  return triangle[0][0];
};
