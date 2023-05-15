function solution(r1: number, r2: number) {
  const squareR1 = r1 ** 2;
  const squareR2 = r2 ** 2;
  let count = 0;
  for (let i = 1; i <= r2; i++) {
    const square = i ** 2;
    const maxY = Math.floor(Math.sqrt(squareR2 - square));
    const minY = r1 < i ? 0 : Math.ceil(Math.sqrt(squareR1 - square));
    count += maxY - minY + 1;
  }

  return count * 4;
}

console.log(solution(2, 3)); // 20
