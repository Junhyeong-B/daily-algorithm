function solution(maps: string[]) {
  const n = maps.length;
  const m = maps[0].length;
  const board = maps.map((row) =>
    row.split('').map((cell) => (cell === 'X' ? cell : +cell))
  );
  const check = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => false)
  );
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  const bfs = (x, y, value) => {
    const queue = [[x, y]];
    let sum = value;

    while (queue.length) {
      const [currentX, currentY] = queue.shift()!;

      for (const [dx, dy] of directions) {
        const nx = currentX + dx;
        const ny = currentY + dy;

        if (
          nx < 0 ||
          nx >= n ||
          ny < 0 ||
          ny >= m ||
          check[nx][ny] ||
          board[nx][ny] === 'X'
        ) {
          continue;
        }

        check[nx][ny] = true;
        queue.push([nx, ny]);
        sum += board[nx][ny];
      }
    }

    return sum;
  };

  const result: number[] = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] !== 'X' && !check[i][j]) {
        check[i][j] = true;
        const sum = bfs(i, j, board[i][j]);
        result.push(sum);
      }
    }
  }

  return result.length === 0 ? [-1] : result.sort((a, b) => a - b);
}

console.log(solution(['X591X', 'X1X5X', 'X231X', '1XXX1'])); // [1, 1, 27]

/**
 * 정확성  테스트
 *  테스트 1 〉	통과 (0.16ms, 33.4MB)
 *  테스트 2 〉	통과 (0.38ms, 33.4MB)
 *  테스트 3 〉	통과 (0.44ms, 33.5MB)
 *  테스트 4 〉	통과 (0.60ms, 33.5MB)
 *  테스트 5 〉	통과 (2.23ms, 35.9MB)
 *  테스트 6 〉	통과 (3.02ms, 36.2MB)
 *  테스트 7 〉	통과 (1.92ms, 35.9MB)
 *  테스트 8 〉	통과 (10.68ms, 38.2MB)
 *  테스트 9 〉	통과 (10.25ms, 38.4MB)
 *  테스트 10 〉통과 (12.27ms, 38.4MB)
 *  테스트 11 〉통과 (11.63ms, 38.4MB)
 *  테스트 12 〉통과 (11.14ms, 38.5MB)
 *  테스트 13 〉통과 (11.19ms, 38.6MB)
 *  테스트 14 〉통과 (12.91ms, 38.6MB)
 *  테스트 15 〉통과 (12.98ms, 38.5MB)
 *  테스트 16 〉통과 (13.55ms, 38.6MB)
 *  테스트 17 〉통과 (0.84ms, 33.8MB)
 *  테스트 18 〉통과 (12.98ms, 38.6MB)
 *  테스트 19 〉통과 (13.58ms, 38.6MB)
 *  테스트 20 〉통과 (2.18ms, 33.7MB)
 *  테스트 21 〉통과 (2.37ms, 37.3MB)
 *  테스트 22 〉통과 (0.43ms, 33.5MB)
 *  테스트 23 〉통과 (15.30ms, 39.1MB)
 *  테스트 24 〉통과 (14.50ms, 38.2MB)
 *  테스트 25 〉통과 (0.74ms, 33.5MB)
 * 채점 결과
 *  정확성: 100.0
 *  합계: 100.0 / 100.0
 */
