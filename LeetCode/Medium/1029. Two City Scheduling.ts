/*
  Runtime: 111 ms, faster than 63.64% of TypeScript online submissions for Two City Scheduling.
  Memory Usage: 44.7 MB, less than 68.18% of TypeScript online submissions for Two City Scheduling.
*/

function twoCitySchedCost(costs: number[][]): number {
  return costs
    .map(cost => cost.concat(cost[1] - cost[0]))
    .sort((a, b) => a[2] - b[2])
    .reduce((acc, cur, i) => {
      if (i < costs.length / 2) {
        return acc + cur[1];
      } else {
        return acc + cur[0];
      }
    }, 0);
};