{
  /**
   * Runtime: 152 ms, faster than 15.63% of TypeScript online submissions for N-Queens.
   * Memory Usage: 45.7 MB, less than 70.31% of TypeScript online submissions for N-Queens.
   */

  const solveNQueens = (n: number): string[][] => {
    const answer: string[][] = [];
    const board = Array.from({ length: n }, () => Array.from({ length: n }, () => '.'));

    const DFS = (r: number, col: Set<number>, pos: Set<number>, neg: Set<number>, tempBoard: string[][]) => {
      if (r >= n) {
        answer.push(tempBoard.map(board => board.join("")));
      } else {
        for (let c = 0; c < n; c++) {
          const postive = r + c;
          const negative = r - c;
          if (col.has(c) || pos.has(postive) || neg.has(negative)) {
            continue;
          }
          col.add(c);
          pos.add(postive);
          neg.add(negative);
          tempBoard[r][c] = "Q";
          DFS(r + 1, col, pos, neg, tempBoard);
          col.delete(c);
          pos.delete(postive);
          neg.delete(negative);
          tempBoard[r][c] = ".";
        }
      }
    }

    for (let i = 0; i < n; i++) {
      const col = new Set<number>([i]);
      const pos = new Set<number>([i]);
      const neg = new Set<number>([-i]);
      board[0][i] = "Q";
      DFS(1, col, pos, neg, board);
      board[0][i] = ".";
    }

    return answer;
  };
}