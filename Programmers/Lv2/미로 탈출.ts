function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const bfs = (s: number[], e: number[]) => {
    const [x, y] = s;
    const [goalX, goalY] = e;
    const route = Array.from({ length: n }, () =>
      Array.from({ length: m }, () => 0)
    );
    const check = Array.from({ length: n }, () =>
      Array.from({ length: m }, () => false)
    );

    route[x][y] = -1;
    check[x][y] = true;
    const queue = [[x, y, 0]];

    while (queue.length) {
      const [currentX, currentY, count] = queue.shift()!;
      if (currentX === goalX && currentY === goalY) {
        return count;
      }

      for (const [dx, dy] of directions) {
        const nx = currentX + dx;
        const ny = currentY + dy;

        if (
          nx < 0 ||
          nx >= n ||
          ny < 0 ||
          ny >= m ||
          check[nx][ny] ||
          route[nx][ny] !== 0 ||
          maps[nx][ny] === 'X'
        ) {
          continue;
        }

        route[nx][ny] = count + 1;
        queue.push([nx, ny, count + 1]);
      }
    }
  };

  const start: number[] = [];
  const end: number[] = [];
  const lever: number[] = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] === 'S') {
        start.push(i);
        start.push(j);
      } else if (maps[i][j] === 'L') {
        lever.push(i);
        lever.push(j);
      } else if (maps[i][j] === 'E') {
        end.push(i);
        end.push(j);
      }
    }
  }

  const routeFromStartToLever = bfs(start, lever);
  const routeFromLeverToEnd = bfs(lever, end);

  if (routeFromStartToLever == undefined || routeFromLeverToEnd == undefined) {
    return -1;
  }

  return routeFromStartToLever + routeFromLeverToEnd;
}

console.log(solution(['SOOOL', 'XXXXO', 'OOOOO', 'OXXXX', 'OOOOE'])); // 16

/**
 * 정확성  테스트
 *  테스트 1 〉	통과 (0.53ms, 33.5MB)
 *  테스트 2 〉	통과 (0.87ms, 33.6MB)
 *  테스트 3 〉	통과 (0.92ms, 33.5MB)
 *  테스트 4 〉	통과 (0.69ms, 33.6MB)
 *  테스트 5 〉	통과 (0.86ms, 33.6MB)
 *  테스트 6 〉	통과 (0.73ms, 33.5MB)
 *  테스트 7 〉	통과 (3.26ms, 34.5MB)
 *  테스트 8 〉	통과 (5.29ms, 36.6MB)
 *  테스트 9 〉	통과 (0.55ms, 33.5MB)
 *  테스트 10 〉통과 (0.56ms, 33.5MB)
 *  테스트 11 〉통과 (2.17ms, 33.9MB)
 *  테스트 12 〉통과 (8.28ms, 36.6MB)
 *  테스트 13 〉통과 (10.06ms, 36.6MB)
 *  테스트 14 〉통과 (7.02ms, 36.6MB)
 *  테스트 15 〉통과 (1.69ms, 33.8MB)
 *  테스트 16 〉통과 (25.66ms, 38.9MB)
 *  테스트 17 〉통과 (29.94ms, 38.7MB)
 *  테스트 18 〉통과 (1.04ms, 33.7MB)
 *  테스트 19 〉통과 (0.88ms, 33.7MB)
 *  테스트 20 〉통과 (20.06ms, 37.7MB)
 *  테스트 21 〉통과 (4.76ms, 34.5MB)
 *  테스트 22 〉통과 (1.38ms, 33.6MB)
 *  테스트 23 〉통과 (0.53ms, 33.5MB)
 * 채점 결과
 *  정확성: 100.0
 *  합계: 100.0 / 100.0
 */
