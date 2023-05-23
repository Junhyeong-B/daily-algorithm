/**
 * Runtime 65 ms Beats 46.76%
 * Memory 43.2 MB Beats 72.69%
 */
function calcEquation(
  equations: string[][],
  values: number[],
  queries: string[][]
): number[] {
  const graph = {};
  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];
    const value = values[i];

    if (!graph[a]) {
      graph[a] = {};
    }

    if (!graph[b]) {
      graph[b] = {};
    }

    graph[a][b] = value;
    graph[b][a] = 1 / value;
  }

  const dfs = (a: string, b: string, visited: Set<string>) => {
    if (!(a in graph) || !(b in graph)) {
      return -1.0;
    }

    if (a === b) {
      return 1.0;
    }

    visited.add(a);
    const neighbors = graph[a];

    for (const neighbor in neighbors) {
      if (!visited.has(neighbor)) {
        const result = dfs(neighbor, b, visited);

        if (result !== -1.0) {
          return neighbors[neighbor] * result;
        }
      }
    }

    return -1.0;
  };

  const results: number[] = [];

  for (const query of queries) {
    const [a, b] = query;
    const visited = new Set<string>();
    const result = dfs(a, b, visited);

    results.push(result);
  }

  return results;
}

console.log(
  calcEquation(
    [
      ['a', 'b'],
      ['b', 'c'],
    ],
    [2.0, 3.0],
    [
      ['a', 'c'],
      ['b', 'a'],
      ['a', 'e'],
      ['a', 'a'],
      ['x', 'x'],
    ]
  )
); // [6.0, 0.5, -1.0, 1.0, -1.0]
