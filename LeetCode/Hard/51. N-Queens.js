/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const answer = [];

  const DFS = (r, tmp, col, neg, pos) => {
    if (r === n) {
      const ans = tmp.map((t) => t.join(""));
      answer.push([...ans]);
    } else {
      for (let c = 0; c < n; c++) {
        if (col.has(c) || neg.has(r - c) || pos.has(r + c)) {
          continue;
        } else {
          tmp[r][c] = "Q";
          col.add(c);
          neg.add(r - c);
          pos.add(r + c);
          DFS(r + 1, tmp, col, neg, pos);
          col.delete(c);
          neg.delete(r - c);
          pos.delete(r + c);
          tmp[r][c] = ".";
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    const tmp = Array.from(Array(n), () => Array.from(Array(n), () => "."));
    if (i > 0) {
      tmp[0][i - 1] = ".";
    }
    tmp[0][i] = "Q";

    const col = new Set();
    const neg = new Set();
    const pos = new Set();
    col.add(i);
    neg.add(-i === -0 ? 0 : -i);
    pos.add(i);

    DFS(1, tmp, col, neg, pos);
  }

  return answer;
};
