const solution = (n) => {
  let answer = 0;
  const dfs = (r, n, col, pos, neg) => {
    if (r === n) {
      answer += 1;
    } else {
      for (let c = 0; c < n; c++) {
        if (col.has(c) || pos.has(r - c) || neg.has(r + c)) {
          continue;
        }

        col.add(c);
        pos.add(r - c);
        neg.add(r + c);
        dfs(r + 1, n, col, pos, neg);
        col.delete(c);
        pos.delete(r - c);
        neg.delete(r + c);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    const col = new Set();
    const pos = new Set();
    const neg = new Set();
    col.add(i);
    pos.add(0 - i);
    neg.add(0 + i);

    dfs(1, n, col, pos, neg);
  }

  return answer;
};
