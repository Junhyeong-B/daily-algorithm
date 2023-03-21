const fs = require('fs');
const input = fs.readFileSync('/dev/stdin.txt').toString().trim().split('\n');

const [N, Q] = input[0].split(' ').map((v) => +v);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i < N; i++) {
  const [p, q, r] = input[i].split(' ').map((v) => +v);
  graph[p].push({ node: q, usado: r });
  graph[q].push({ node: p, usado: r });
}

for (let i = N; i < input.length; i++) {
  const [k, v] = input[i].split(' ').map((v) => +v);
  const visited = Array.from({ length: N + 1 }, () => false);
  visited[v] = true;
  const queue = [[v, Infinity]];
  let count = 0;

  while (queue.length) {
    const [currentV, currentUsado] = queue.shift();
    for (const { node, usado } of graph[currentV]) {
      const minUsado = Math.min(usado, currentUsado);
      if (k <= minUsado && !visited[node]) {
        visited[node] = true;
        count++;
        queue.push([node, minUsado]);
      }
    }
  }

  console.log(count);
}
