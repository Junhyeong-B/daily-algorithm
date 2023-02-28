/**
 * Runtime 91 ms Beats 79.59%
 * Memory 47.5 MB Beats 62.59%
 */
function snakesAndLadders(board: number[][]): number {
  const goal = board.length ** 2;
  const newBoard = board.reverse().reduce(
    (acc, cur, i) => {
      if (i % 2 === 0) {
        return acc.concat(cur);
      } else {
        return acc.concat(cur.reverse());
      }
    },
    [0]
  );

  const check = new Set<number>();
  const queue: number[][] = [[1, 0]];
  while (queue.length) {
    const [currentStep, moves] = queue.shift()!;

    for (let i = 1; i <= 6; i++) {
      let nextStep = currentStep + i;
      if (newBoard[nextStep] !== -1) {
        nextStep = newBoard[nextStep];
      }

      if (nextStep >= goal) {
        return moves + 1;
      }

      if (!check.has(nextStep)) {
        check.add(nextStep);
        queue.push([nextStep, moves + 1]);
      }
    }
  }

  return -1;
}

console.log(
  snakesAndLadders([
    [-1, -1, 19, 10, -1],
    [2, -1, -1, 6, -1],
    [-1, 17, -1, 19, -1],
    [25, -1, 20, -1, -1],
    [-1, -1, -1, -1, 15],
  ])
); // 2
