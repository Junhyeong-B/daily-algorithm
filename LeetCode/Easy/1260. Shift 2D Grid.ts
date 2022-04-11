/*
  Runtime: 92 ms, faster than 93.33% of TypeScript online submissions for Shift 2D Grid.
  Memory Usage: 49.4 MB, less than 33.33% of TypeScript online submissions for Shift 2D Grid.
*/

function shiftGrid(grid: number[][], k: number): number[][] {
  if (k === 0) {
    return grid;
  }

  const nums: number[] = [];
  const m = grid.length;
  const n = grid[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      nums.push(grid[i][j]);
    }
  }

  let index = nums.length - k;
  while (index < 0) {
    index += nums.length;
  }

  const shiftedGrid: number[][] = Array.from({ length: m }, () => []);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      shiftedGrid[i].push(nums[index]);
      index += 1;
      if (index === nums.length) {
        index = 0;
      }
    }
  }

  return shiftedGrid;
};