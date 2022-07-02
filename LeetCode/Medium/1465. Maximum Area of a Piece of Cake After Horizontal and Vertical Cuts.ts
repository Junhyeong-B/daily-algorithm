/**
 * Runtime: 168 ms, faster than 83.33% of TypeScript online submissions for Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts.
 * Memory Usage: 54.6 MB, less than 50.00% of TypeScript online submissions for Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts.
 */

function maxArea(h: number, w: number, horizontalCuts: number[], verticalCuts: number[]): number {
  horizontalCuts.sort((a, b) => a - b);
  verticalCuts.sort((a, b) => a - b);

  let maxHeight: bigint;
  if (horizontalCuts[0] < h - horizontalCuts[horizontalCuts.length - 1]) {
    maxHeight = BigInt(h - horizontalCuts[horizontalCuts.length - 1]);
  } else {
    maxHeight = BigInt(horizontalCuts[0]);
  }

  for (let i = 1; i < horizontalCuts.length; i++) {
    const horizontalWidth = BigInt(horizontalCuts[i]) - BigInt(horizontalCuts[i - 1]);
    if (maxHeight < horizontalWidth) {
      maxHeight = horizontalWidth;
    }
  }


  let maxWidth: bigint;
  if (verticalCuts[0] < w - verticalCuts[verticalCuts.length - 1]) {
    maxWidth = BigInt(w - verticalCuts[verticalCuts.length - 1]);
  } else {
    maxWidth = BigInt(verticalCuts[0]);
  }

  for (let i = 1; i < verticalCuts.length; i++) {
    const verticalWidth = BigInt(verticalCuts[i]) - BigInt(verticalCuts[i - 1]);
    if (maxWidth < verticalWidth) {
      maxWidth = verticalWidth;
    }
  }

  const salt = BigInt(10 ** 9 + 7);
  const answer = (maxHeight * maxWidth) % salt;

  return Number(answer);
};
