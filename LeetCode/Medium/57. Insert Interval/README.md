```jsx
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const arr = [...intervals];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = [...intervals[i]];
  }
  arr.push([...newInterval]);
  arr.sort((a, b) => a[0] - b[0]);

  let l = 0;
  let r = l + 1;

  while (r < arr.length) {
    if (arr[l][1] >= arr[r][0]) {
      arr[l][0] = arr[l][0] <= arr[r][0] ? arr[l][0] : arr[r][0];
      arr[l][1] = arr[l][1] <= arr[r][1] ? arr[r][1] : arr[l][1];

      arr.splice(r, 1);
      continue;
    }

    if (r === arr.length - 1) {
      l += 1;
      r = l + 1;
    } else {
      r += 1;
    }
  }

  return arr;
};
```