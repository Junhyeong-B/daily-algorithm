const checkMovableNodes = (graph, start, end) => {
  const nextVisitNode = [...graph[start]];
  const visitedNode = [start];
  const queue = [];
  queue.push(nextVisitNode.shift());

  while (!!queue.length) {
    const currentNode = queue.shift();
    if (currentNode === end) {
      if (!!nextVisitNode.length) {
        queue.push(nextVisitNode.shift());
        continue;
      } else {
        continue;
      }
    }

    for (const node of graph[currentNode]) {
      if (!visitedNode.includes(node) && node !== -1) {
        nextVisitNode.push(node);
      }
    }
    visitedNode.push(currentNode);

    if (!!nextVisitNode.length) {
      queue.push(nextVisitNode.shift());
    }
  }

  return visitedNode;
};

function solution(n, wires) {
  const graph = Array.from(Array(n + 1), () => []);
  let answer = Number.MAX_SAFE_INTEGER;

  wires.forEach((wire) => {
    const [start, end] = wire;
    graph[start].push(end);
    graph[end].push(start);
  });

  for (let i = 1; i < graph.length; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      const start = i;
      const end = graph[i][j];
      const countNodesFromStart = checkMovableNodes(graph, start, end).length;
      const countNodesFromEnd = checkMovableNodes(graph, end, start).length;
      answer = Math.min(
        answer,
        Math.abs(countNodesFromStart - countNodesFromEnd)
      );
    }
  }

  return answer;
}
