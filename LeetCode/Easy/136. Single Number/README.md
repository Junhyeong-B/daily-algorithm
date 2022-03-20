```jsx
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const map = new Map();

  for (const num of nums) {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1);
  }

  for (const [key, value] of map) {
    if (value === 1) {
      return key;
    }
  }
};
```