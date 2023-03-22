function solution(
  n: number,
  roads: number[][],
  sources: number[],
  destination: number
): number[] {
  const graph: number[][] = new Array(n + 1).fill(null).map(() => []);
  for (const [p, q] of roads) {
    graph[p].push(q);
    graph[q].push(p);
  }

  const distance = new Array(n + 1).fill(Infinity);
  const bfs = (destination: number) => {
    const queue = [destination];
    distance[destination] = 0;
    while (queue.length) {
      const node = queue.shift()!;
      for (const nextNode of graph[node]) {
        if (distance[node] + 1 < distance[nextNode]) {
          distance[nextNode] = distance[node] + 1;
          queue.push(nextNode);
        }
      }
    }
  };
  bfs(destination);

  return sources.map((start) =>
    distance[start] === Infinity ? -1 : distance[start]
  );
}

console.log(
  solution(
    5,
    [
      [1, 2],
      [1, 4],
      [2, 4],
      [2, 5],
      [4, 5],
    ],
    [1, 3, 5],
    5
  )
); // [2, -1, 0]

/**
 * 정확성  테스트
 *  테스트 1 〉	통과 (0.15ms, 33.4MB)
 *  테스트 2 〉	통과 (0.20ms, 33.4MB)
 *  테스트 3 〉	통과 (0.14ms, 33.6MB)
 *  테스트 4 〉	통과 (0.13ms, 33.4MB)
 *  테스트 5 〉	통과 (0.15ms, 33.4MB)
 *  테스트 6 〉	통과 (15.56ms, 45.2MB)
 *  테스트 7 〉	통과 (15.15ms, 46.5MB)
 *  테스트 8 〉	통과 (30.96ms, 56.1MB)
 *  테스트 9 〉	통과 (11.29ms, 44.5MB)
 *  테스트 10 〉통과 (11.38ms, 43.5MB)
 *  테스트 11 〉통과 (737.36ms, 182MB)
 *  테스트 12 〉통과 (728.44ms, 183MB)
 *  테스트 13 〉통과 (937.88ms, 184MB)
 *  테스트 14 〉통과 (829.81ms, 184MB)
 *  테스트 15 〉통과 (748.24ms, 184MB)
 *  테스트 16 〉통과 (94.17ms, 88MB)
 * 채점 결과
 *  정확성: 100.0
 *  합계: 100.0 / 100.0
 */
