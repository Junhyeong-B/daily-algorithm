const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input[0];
const nodes = input.slice(2).map((node) => node.split(' ').map((n) => +n));
const graph = Array.from({ length: N + 1 }, () => []);

for (const [a, b] of nodes) {
  graph[a].push(b);
  graph[b].push(a);
}

let count = 0;
const visited = new Set();
const queue = [1];
visited.add(1);

while (queue.length) {
  const currentNode = queue.shift();

  for (const node of graph[currentNode]) {
    if (!visited.has(node)) {
      visited.add(node);
      queue.push(node);
      count++;
    }
  }
}

console.log(count);
