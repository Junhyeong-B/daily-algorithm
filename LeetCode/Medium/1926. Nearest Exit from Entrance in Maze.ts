/**
 * Runtime 505 ms Beats 21.43%
 * Memory 61.3 MB Beats 50%
 */

function nearestExit(maze: string[][], entrance: number[]): number {
  const m = maze.length;
  const n = maze[0].length;

  const routes: number[][] = Array.from({ length: m }, (_, i) =>
    Array.from({ length: n }, (_, j) => {
      if (maze[i][j] === '+') {
        return -1;
      } else {
        return 0;
      }
    })
  );

  const queue: number[][] = [[...entrance, 0]];

  while (queue.length) {
    const [x, y, count] = queue.shift()!;

    if (
      x < 0 ||
      x >= m ||
      y < 0 ||
      y >= n ||
      maze[x][y] === '+' ||
      routes[x][y] === -1 ||
      routes[x][y] !== 0
    ) {
      continue;
    }

    if (x === entrance[0] && y === entrance[1]) {
      routes[x][y] = -1;
    } else {
      routes[x][y] = count;
    }

    queue.push([x + 1, y, count + 1]);
    queue.push([x - 1, y, count + 1]);
    queue.push([x, y + 1, count + 1]);
    queue.push([x, y - 1, count + 1]);
  }

  const posibleRoutes = routes
    .map((route, i) => {
      if (i === 0 || i === m - 1) {
        return route.filter((num) => num > 0);
      } else {
        return route.filter((num, j) => num > 0 && (j === 0 || j === n - 1));
      }
    })
    .flat();

  return posibleRoutes.length > 0 ? Math.min(...posibleRoutes) : -1;
}

console.log(
  nearestExit(
    [
      ['+', '.', '+', '+', '+', '+', '+'],
      ['+', '.', '+', '.', '.', '.', '+'],
      ['+', '.', '+', '.', '+', '.', '+'],
      ['+', '.', '.', '.', '.', '.', '+'],
      ['+', '+', '+', '+', '.', '+', '.'],
    ],
    [0, 1]
  )
); // 7
