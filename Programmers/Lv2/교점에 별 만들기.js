function solution(line) {
  const n = line.length;
  const points = [];
  let pointX = [];
  let pointY = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const [A, B, E] = line[i];
      const [C, D, F] = line[j];
      const x = (B * F - E * D) / (A * D - B * C);
      const y = (E * C - A * F) / (A * D - B * C);

      if (
        String(x).includes(".") ||
        String(y).includes(".") ||
        x === NaN ||
        x === Infinity ||
        x === -Infinity ||
        y === NaN ||
        y === Infinity ||
        y === -Infinity
      ) {
        continue;
      }
      points.push([x, y]);
    }
  }

  for (const [x, y] of points) {
    if (x < 0) {
      points.map((point) => (point[0] -= x));
    }
    if (y < 0) {
      points.map((point) => (point[1] -= y));
    }
  }

  for (const [x, y] of points) {
    pointX.push(x);
    pointY.push(y);
  }
  const minX = Math.min(...pointX);
  const minY = Math.min(...pointY);

  if (minX > 0) {
    points.map((point) => (point[0] -= minX));
    pointX = [];
    for (const [x] of points) pointX.push(x);
  }
  if (minY > 0) {
    points.map((point) => (point[1] -= minY));
    pointY = [];
    for (const [, y] of points) pointY.push(y);
  }

  const maxX = Math.max(...pointX);
  const maxY = Math.max(...pointY);
  const disX = maxX - minX;
  const disY = maxY - minY;
  if (disX === 0 && disY === 0) return ["*"];

  const answer = Array.from(Array(maxY + 1), () => ".".repeat(maxX + 1));

  points.sort((a, b) => a[1] - b[1]);
  for (const [x, y] of points) {
    let tmp = answer[y].split("");
    tmp[x] = "*";
    answer[y] = tmp.join("");
  }

  return answer.reverse();
}
