/**
 * Runtime 131 ms Beats 65.85%
 * Memory 51.9 MB Beats 34.15%
 */

function findJudge(n: number, trust: number[][]): number {
  const graph: number[][] = Array.from({ length: n + 1 }, () => []);
  const judges = Array.from({ length: n + 1 }, (_, i) => i);
  judges[0] = -1;

  for (const [a, b] of trust) {
    graph[b].push(a);

    if (judges[a] > 0) {
      judges[a] = -1;
    }
  }

  const judgeCandidate = judges.filter((judge) => judge !== -1);
  if (judgeCandidate.length > 1) {
    return -1;
  }

  const judge = judgeCandidate[0];
  if (graph[judge]?.length !== n - 1) {
    return -1;
  }

  return judge;
}

console.log(
  findJudge(3, [
    [1, 2],
    [2, 3],
  ])
); // -1
