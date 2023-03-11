/**
 * 2023.03.11
 * Runtime 184 ms Beats 41.13%
 * Memory 69 MB Beats 36.29%
 */
function largestRectangleArea(heights: number[]): number {
  const stack: number[][] = [];
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    if (stack.length === 0) {
      maxArea = Math.max(maxArea, heights[i]);
      stack.push([i, heights[i]]);
      continue;
    }

    if (stack.length > 0 && stack[stack.length - 1][1] <= heights[i]) {
      stack.push([i, heights[i]]);
    } else {
      let lastIndex = 0;
      while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
        const [index, height] = stack.pop()!;
        maxArea = Math.max(maxArea, height * (i - index));
        lastIndex = index;
      }
      stack.push([lastIndex, heights[i]]);
    }
  }

  while (stack.length) {
    const [index, height] = stack.pop()!;
    maxArea = Math.max(maxArea, (heights.length - index) * height);
  }

  return maxArea;
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // 10

/**
 * Runtime: 214 ms, faster than 34.54% of TypeScript online submissions for Largest Rectangle in Histogram.
 * Memory Usage: 78.4 MB, less than 14.54% of TypeScript online submissions for Largest Rectangle in Histogram.
 */

function largestRectangleArea(heights: number[]): number {
  const stack: number[][] = [];
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    const currentHeight = heights[i];
    let currentIndex = i;

    if (stack.length === 0) {
      stack.push([i, currentHeight]);
      continue;
    }

    while (stack.length && currentHeight < stack[stack.length - 1][1]) {
      const [index, height] = stack.pop()!;
      const currentArea = (i - index) * height;
      maxArea = Math.max(maxArea, currentArea);
      currentIndex = index;
    }

    stack.push([currentIndex, currentHeight]);
  }

  while (stack.length) {
    const [index, height] = stack.pop()!;
    const currentArea = (heights.length - index) * height;
    maxArea = Math.max(maxArea, currentArea);
  }

  return maxArea;
}
