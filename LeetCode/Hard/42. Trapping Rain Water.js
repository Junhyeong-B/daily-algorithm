/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const n = height.length;
  const maxLeft = Array.from(Array(n), () => 0);
  const maxRight = Array.from(Array(n), () => 0);
  const minTrap = [];
  const answer = [];

  for (let i = 1; i < n; i++) {
    if (maxLeft[i - 1] < height[i - 1]) {
      maxLeft[i] = height[i - 1];
    } else {
      maxLeft[i] = maxLeft[i - 1];
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    if (maxRight[i + 1] < height[i + 1]) {
      maxRight[i] = height[i + 1];
    } else {
      maxRight[i] = maxRight[i + 1];
    }
  }

  for (let i = 0; i < n; i++) {
    minTrap.push(Math.min(maxLeft[i], maxRight[i]));
  }

  for (let i = 0; i < n; i++) {
    answer.push(minTrap[i] - height[i] < 0 ? 0 : minTrap[i] - height[i]);
  }

  return answer.reduce((acc, cur) => acc + cur, 0);
};
