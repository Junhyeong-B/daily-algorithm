/**
 * Runtime: 217 ms, faster than 100.00% of TypeScript online submissions for Out of Boundary Paths.
 * Memory Usage: 53.2 MB, less than 100.00% of TypeScript online submissions for Out of Boundary Paths.
 */

function findPaths(m: number, n: number, maxMove: number, startRow: number, startColumn: number): number {
  const paths = new Map<string, number>();
  const MOD = 10 ** 9 + 7;

  const dfs = (currentRow: number, currentColumn: number, move: number) => {
    let count = 0;
    const key = `${currentRow}|${currentColumn}|${move}`;

    if (move > maxMove) {
      return 0;
    }

    if (paths.has(key)) {
      return paths.get(key);
    }

    if (currentRow < 0 || currentColumn < 0 || currentRow >= m || currentColumn >= n) {
      return 1;
    }

    const direction = [
      [currentRow + 1, currentColumn],
      [currentRow - 1, currentColumn],
      [currentRow, currentColumn + 1],
      [currentRow, currentColumn - 1]
    ];

    for (const [nextRow, nextColumn] of direction) {
      count = (count + dfs(nextRow, nextColumn, move + 1)!) % MOD;
    }

    paths.set(key, count);
    return count;
  }

  return dfs(startRow, startColumn, 0)!;
};
