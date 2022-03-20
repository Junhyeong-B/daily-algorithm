```jsx
function solution(k, dungeons) {
  const n = dungeons.length;
  const check = Array(n).fill(0);
  let answer = 0;

  const DFS = (L, rest, count) => {
    if (answer === n) return;
    if (L === n) {
      answer = Math.max(answer, count);
    } else {
      for (let i = 0; i < n; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          if (dungeons[i][0] <= rest && dungeons[i][1] <= rest) {
            DFS(L + 1, rest - dungeons[i][1], count + 1);
          } else {
            DFS(L + 1, rest, count);
          }
          check[i] = 0;
        }
      }
    }
  };

  DFS(0, k, 0);

  return answer;
}
```