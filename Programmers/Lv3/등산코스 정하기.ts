/**
 * 첫 번째 시도. dfs 함수를 만들고, 입구에서는 나오는 방향만, 출구에서는 들어가는 방향만 지정.
 * 13번 테스트 케이스부터 시간 초과로 실패. 12번 테스트 케이스까지는 정답.
 */
function solution(
  n: number,
  paths: number[][],
  gates: number[],
  summits: number[]
) {
  const graph: number[][] = Array.from({ length: n + 1 }, () =>
    Array.from({ length: n + 1 }, () => 0)
  );
  const gateAndSummitIndex = Array(n + 1).fill(0);
  for (const gate of gates) {
    gateAndSummitIndex[gate] = -1;
  }
  for (const summit of summits) {
    gateAndSummitIndex[summit] = -2;
  }

  for (const path of paths) {
    const [start, end, len] = path;
    if (gateAndSummitIndex[start] === -1 || gateAndSummitIndex[end] === -2) {
      graph[start][end] = len;
    } else if (
      gateAndSummitIndex[end] === -1 ||
      gateAndSummitIndex[start] === -1
    ) {
      graph[end][start] = len;
    } else {
      graph[start][end] = len;
      graph[end][start] = len;
    }
  }

  const result = [0, Infinity];

  const dfs = (
    start: number,
    end: number,
    currentNode: number,
    intensity: number,
    check: boolean[]
  ) => {
    if (end === currentNode) {
      if (intensity < result[1]) {
        result[0] = end;
        result[1] = intensity;
      }
    } else {
      const minHeap: number[][] = [];
      for (let i = 1; i <= n; i++) {
        if (i !== start && !check[i] && graph[currentNode][i] !== 0) {
          minHeap.push([graph[currentNode][i], i]);
        }
      }

      while (minHeap.length) {
        const [distance, nextNode] = minHeap.pop()!;
        check[nextNode] = true;
        dfs(start, end, nextNode, Math.max(distance, intensity), check);
        check[nextNode] = false;
      }
    }
  };

  const check = Array.from({ length: n + 1 }, () => false);
  for (const gate of gates) {
    for (const summit of summits) {
      dfs(gate, summit, gate, 0, check);
    }
  }

  return result;
}

console.log(
  solution(
    7,
    [
      [1, 4, 4],
      [1, 6, 1],
      [1, 7, 3],
      [2, 5, 2],
      [3, 7, 4],
      [5, 6, 6],
    ],
    [1],
    [2, 3, 4]
  )
);
