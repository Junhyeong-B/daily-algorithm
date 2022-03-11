{
  /*
    Runtime: 235 ms, faster than 27.85% of TypeScript online submissions for Maximal Square.
    Memory Usage: 45.5 MB, less than 70.89% of TypeScript online submissions for Maximal Square.
  */

  const isSquare = (matrix: string[][], size: number, x: number, y: number): boolean => {
    for (let i = x; i < x + size; i++) {
      for (let j = y; j < y + size; j++) {
        if (matrix[i][j] === "0") {
          return false;
        }
      }
    }
    return true;
  }

  const maximalSquare = (matrix: string[][]): number => {
    const m = matrix.length;
    const n = matrix[0].length;
    let size = 1;


    outer: while (true) {
      for (let i = 0; i < m - size + 1; i++) {
        for (let j = 0; j < n - size + 1; j++) {
          if (matrix[i][j] === "0") {
            continue;
          }

          if (isSquare(matrix, size, i, j)) {
            size++;
            continue outer;
          }
        }
      }

      break;
    }

    return (size - 1) ** 2;
  };
}