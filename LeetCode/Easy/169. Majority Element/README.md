```jsx
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map();

  for (const num of nums) {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1);
  }

  const answer = [0, 0];

  for (const [key, count] of map) {
    if (count > answer[1]) {
      [answer[0], answer[1]] = [key, count];
    }
  }

  return answer[0];
};
```