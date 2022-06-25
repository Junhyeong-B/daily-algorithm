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
};