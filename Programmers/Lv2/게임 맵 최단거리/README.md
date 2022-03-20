```jsx
function solution(maps) {
  const dx = [1, 0, -1, 0];
  const dy = [0, -1, 0, 1];
  const n = maps.length;
  const m = maps[0].length;
  const arr = [...maps].map((map) => map.map((r) => (r = 1)));
  const queue = [[0, 0]];

  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < m &&
        maps[nx][ny] === 1 &&
        arr[nx][ny] === 1
      ) {
        arr[nx][ny] = arr[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  return arr[n - 1][m - 1] === 1 ? -1 : arr[n - 1][m - 1];
}
```