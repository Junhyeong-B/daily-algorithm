/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  let count = 0;
  const DFS = (r, col, neg, pos) => {
    if (r === n) {
      count++;
    } else {
      for (let c = 0; c < n; c++) {
        if (col.has(c) || neg.has(r - c) || pos.has(r + c)) {
          continue;
        } else {
          col.add(c);
          neg.add(r - c);
          pos.add(r + c);
          DFS(r + 1, col, neg, pos);
          col.delete(c);
          neg.delete(r - c);
          pos.delete(r + c);
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    const col = new Set();
    const neg = new Set();
    const pos = new Set();
    col.add(i);
    neg.add(-i === -0 ? 0 : -i);
    pos.add(i);

    DFS(1, col, neg, pos);
  }

  return count;
};
