/**
 * Runtime 598 ms Beats 82.89%
 * Memory 112 MB Beats 43.42%
 */

function findWinners(matches: number[][]): number[][] {
  const winners = new Set<number>();
  const loserCount = new Map<number, number>();
  const losers: number[] = [];

  for (const [winner, loser] of matches) {
    winners.add(winner);
    loserCount.set(loser, (loserCount.get(loser) || 0) + 1);
  }

  for (const [loser, count] of loserCount) {
    winners.delete(loser);
    if (count === 1) {
      losers.push(loser);
    }
  }

  return [[...winners].sort((a, b) => a - b), losers.sort((a, b) => a - b)];
}

console.log(
  findWinners([
    [1, 3],
    [2, 3],
    [3, 6],
    [5, 6],
    [5, 7],
    [4, 5],
    [4, 8],
    [4, 9],
    [10, 4],
    [10, 9],
  ])
); // [[1, 2, 10], [4, 5, 7, 8]]
