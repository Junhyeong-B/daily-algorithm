```jsx
function solution(n, works) {
  if (works.reduce((acc, cur) => acc + cur) <= n) return 0;

  works.sort((a, b) => b - a);
  let max = Math.max(...works);
  let count = n;

  while (count !== 0) {
    for (let i = 0; i < works.length; i++) {
      if (works[i] < max) continue;
      if (works[i] === max) {
        works[i] -= 1;
        count -= 1;

        if (count === 0) break;
      }
    }
    max--;
  }

  const answer = works.map((work) => work ** 2).reduce((acc, cur) => acc + cur);
  return answer;
}
```