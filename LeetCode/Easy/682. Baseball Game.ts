/*
  Runtime: 84 ms, faster than 58.82% of TypeScript online submissions for Baseball Game.
  Memory Usage: 45 MB, less than 29.41% of TypeScript online submissions for Baseball Game.
*/

function calPoints(ops: string[]): number {
  const score: number[] = [];

  for (const op of ops) {
    switch (op) {
      case "C":
        score.pop();
        break;
      case "D":
        score.push(score[score.length - 1] * 2);
        break;
      case "+":
        const { length } = score;
        score.push(score[length - 1] + score[length - 2]);
        break;
      default:
        if (isNaN(parseInt(op, 10))) {
          break;
        }
        score.push(parseInt(op, 10));
    }
  }

  return score.reduce((acc, cur) => acc + cur);
};