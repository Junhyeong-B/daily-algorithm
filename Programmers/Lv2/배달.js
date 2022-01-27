function solution(N, road, K) {
  const graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
  for (const [x, y, dis] of road) {
    if (!!graph[x][y] && graph[x][y] < dis) {
      continue;
    }
    graph[x][y] = dis;
    graph[y][x] = dis;
  }

  for (let i = 1; i <= N; i++) {
    inner: for (let j = 1; j <= N; j++) {
      if (i === j || graph[i][j]) continue inner;
      graph[i][j] = Infinity;
    }
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      for (let k = 1; k <= N; k++) {
        if (graph[k][j] > graph[k][i] + graph[j][i]) {
          graph[k][j] = graph[k][i] + graph[j][i];
        }
      }
    }
  }

  return graph[1].filter((g) => g <= K).length - 1;
}
