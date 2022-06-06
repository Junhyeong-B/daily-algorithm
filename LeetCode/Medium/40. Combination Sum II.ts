/**
 * Runtime: 114 ms, faster than 48.62% of TypeScript online submissions for Combination Sum II.
 * Memory Usage: 44.8 MB, less than 84.40% of TypeScript online submissions for Combination Sum II.
 */

function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  const combinations: number[][] = [];

  const backtracking = (temp: number[], i: number, target: number) => {
    if (target === 0) {
      combinations.push([...temp]);
    }

    if (target <= 0) {
      return;
    } else {
      let flag = -1;
      for (let j = i; j < candidates.length; j++) {
        if (flag === candidates[j]) {
          continue;
        }
        temp.push(candidates[j]);
        backtracking(temp, j + 1, target - candidates[j]);
        temp.pop();

        flag = candidates[j];
      }
    }
  }

  backtracking([], 0, target);
  return combinations;
};