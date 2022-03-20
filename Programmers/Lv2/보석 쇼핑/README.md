```jsx
function solution(gems) {
  const kindsOfGems = new Set([...gems]);
  const gemsSize = kindsOfGems.size;
  if (gemsSize === 1) {
    return [1, 1];
  }

  const gemsLength = gems.length;
  const parchaseList = new Map();
  parchaseList.set(gems[0], 1);

  let answer = [1, gemsLength];
  let start = 0;
  let end = 0;

  while (end < gemsLength && start <= end) {
    if (gemsSize === parchaseList.size) {
      if (end - start < answer[1] - answer[0]) {
        answer = [start, end];
      } else if (end - start === answer[1] - answer[0]) {
        if (start < answer[0]) {
          answer = [start, end];
        }
      }

      if (parchaseList.get(gems[start]) > 1) {
        parchaseList.set(gems[start], parchaseList.get(gems[start]) - 1);
      } else if (parchaseList.get(gems[start]) === 1) {
        parchaseList.delete(gems[start]);
      }
      start += 1;
    } else {
      end += 1;
      parchaseList.set(gems[end], (parchaseList.get(gems[end]) || 0) + 1);
    }
  }

  return [answer[0] + 1, answer[1] + 1];
}
```