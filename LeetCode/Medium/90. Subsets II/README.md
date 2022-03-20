```jsx
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const n = nums.length;
  const answer = [];
  const map = new Map();

  const DFS = (L, tmp) => {
    if (L === n) {
      const newArray = [...tmp].sort((a, b) => a - b);
      map.set(newArray.join(""), newArray);
    } else {
      DFS(L + 1, [...tmp, nums[L]]);
      DFS(L + 1, [...tmp]);
    }
  };

  DFS(0, []);

  for (const [_, value] of map) {
    answer.push([...value]);
  }

  return answer;
};
```