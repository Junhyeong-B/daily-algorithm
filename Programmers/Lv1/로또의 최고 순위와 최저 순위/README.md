```jsx
function solution(lottos, win_nums) {
  const answer = [];
  const zeroCount = lottos.filter((e) => e === 0).length;
  let hitCount = 7;

  for (let i = 0; i < lottos.length; i++) {
    if (win_nums.includes(lottos[i])) hitCount--;
  }

  hitCount - zeroCount > 5 ? answer.push(6) : answer.push(hitCount - zeroCount);
  hitCount > 5 ? answer.push(6) : answer.push(hitCount);

  return answer;
}
```