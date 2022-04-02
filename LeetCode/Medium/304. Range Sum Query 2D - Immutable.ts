/*
  Runtime: 416 ms, faster than 100.00% of TypeScript online submissions for Range Sum Query 2D - Immutable.
  Memory Usage: 68.7 MB, less than 74.07% of TypeScript online submissions for Range Sum Query 2D - Immutable.
*/

class NumMatrix {
  dp: number[][];

  constructor(matrix: number[][]) {
    const m = matrix.length;
    const n = matrix[0].length;

    const dp = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => 0));

    for (let r = 1; r < m + 1; r++) {
      for (let c = 1; c < n + 1; c++) {
        dp[r][c] = dp[r - 1][c] + dp[r][c - 1] - dp[r - 1][c - 1] + matrix[r - 1][c - 1];
      }
    }

    this.dp = dp;
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    return this.dp[row2 + 1][col2 + 1] - this.dp[row1][col2 + 1] - this.dp[row2 + 1][col1] + this.dp[row1][col1];
  }
}

/**
* Your NumMatrix object will be instantiated and called as such:
* var obj = new NumMatrix(matrix)
* var param_1 = obj.sumRegion(row1,col1,row2,col2)
*/