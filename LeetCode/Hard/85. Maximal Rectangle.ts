/**
 * Runtime 129 ms Beats 33.33%
 * Memory 54.1 MB Beats 5.55%
 */
function getMaxAreaFromHistogram(histogram: number[]): number {
  const stack: number[][] = [];
  let maxArea = 0;

  for (let i = 0; i < histogram.length; i++) {
    if (stack.length === 0) {
      stack.push([i, histogram[i]]);
      maxArea = Math.max(maxArea, histogram[i]);
      continue;
    }

    if (stack.length > 0 && stack[stack.length - 1][1] <= histogram[i]) {
      stack.push([i, histogram[i]]);
    } else {
      let lastIndex = 0;
      while (stack.length > 0 && stack[stack.length - 1][1] > histogram[i]) {
        const [index, area] = stack.pop()!;
        maxArea = Math.max(maxArea, (i - index) * area);
        lastIndex = index;
      }
      stack.push([lastIndex, histogram[i]]);
    }
  }

  while (stack.length) {
    const [index, area] = stack.pop()!;
    maxArea = Math.max(maxArea, (histogram.length - index) * area);
  }

  return maxArea;
}

function maximalRectangle(matrix: string[][]): number {
  const histograms: number[][] = [];
  for (let i = 0; i < matrix.length; i++) {
    const histogram: number[] = [];
    if (i === 0) {
      histograms.push(matrix[0].map((value) => +value));
      continue;
    }
    for (let j = 0; j < matrix[i].length; j++) {
      const prevValue = histograms[i - 1][j];
      if (prevValue === 0) {
        histogram.push(matrix[i][j] === '1' ? 1 : 0);
      } else {
        histogram.push(matrix[i][j] === '1' ? prevValue + 1 : 0);
      }
    }
    histograms.push(histogram);
  }

  let maxRectangle = 0;
  for (const histogram of histograms) {
    const currentRectangleArea = getMaxAreaFromHistogram(histogram);
    maxRectangle = Math.max(maxRectangle, currentRectangleArea);
  }

  return maxRectangle;
}

console.log(
  maximalRectangle([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
  ])
); // 6
