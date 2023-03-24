/**
 * Runtime 520 ms Beats 60%
 * Memory 84.4 MB Beats 55%
 */
function minReorder(n: number, connections: number[][]): number {
  const neighbors: number[][] = Array.from({ length: n }, () => []);
  const visited = Array.from({ length: n }, () => false);
  const roadSet = new Set<string>();
  visited[0] = true;

  for (const [p, q] of connections) {
    neighbors[q].push(p);
    neighbors[p].push(q);
    roadSet.add(`${p}>${q}`);
  }

  let changes = 0;
  const dfs = (city: number) => {
    for (const neighbor of neighbors[city]) {
      if (visited[neighbor]) {
        continue;
      }

      if (!roadSet.has(`${neighbor}>${city}`)) {
        changes++;
      }
      visited[neighbor] = true;
      dfs(neighbor);
    }
  };

  dfs(0);
  return changes;
}

console.log(
  minReorder(6, [
    [0, 1],
    [1, 3],
    [2, 3],
    [4, 0],
    [4, 5],
  ])
); // 3
