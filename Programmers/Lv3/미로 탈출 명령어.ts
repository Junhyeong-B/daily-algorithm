function solution(
  n: number,
  m: number,
  x: number,
  y: number,
  r: number,
  c: number,
  k: number
) {
  const queue: [number, number, string, number][] = [[x, y, '', 0]];
  const direction: [number, number, string][] = [
    [1, 0, 'd'],
    [0, -1, 'l'],
    [0, 1, 'r'],
    [-1, 0, 'u'],
  ];

  while (queue.length) {
    const [x, y, path, count] = queue.shift()!;

    if (x === r && y === c && count === k) {
      return path;
    }

    for (let i = 0; i < 4; i++) {
      const [dx, dy, dir] = direction[i];
      const nx = x + dx;
      const ny = y + dy;
      if (nx < 1 || nx > n || ny < 1 || ny > m) {
        continue;
      }
      if (Math.abs(nx - r) + Math.abs(ny - c) + count + 1 > k) {
        continue;
      }
      queue.push([nx, ny, path + dir, count + 1]);
      break;
    }
  }

  return 'impossible';
}

console.log(solution(3, 4, 2, 3, 3, 1, 5)); // dllrl
console.log(solution(2, 2, 1, 1, 2, 2, 2)); // dr
console.log(solution(3, 3, 1, 2, 3, 3, 4)); // impossible

/**
 * 정확성  테스트
 *  테스트 1 〉	통과 (0.52ms, 33.5MB)
 *  테스트 2 〉	통과 (0.38ms, 33.7MB)
 *  테스트 3 〉	통과 (0.10ms, 33.5MB)
 *  테스트 4 〉	통과 (0.36ms, 33.5MB)
 *  테스트 5 〉	통과 (0.41ms, 33.4MB)
 *  테스트 6 〉	통과 (0.28ms, 33.4MB)
 *  테스트 7 〉	통과 (0.28ms, 33.5MB)
 *  테스트 8 〉	통과 (0.27ms, 33.6MB)
 *  테스트 9 〉	통과 (11.99ms, 38.4MB)
 *  테스트 10 〉통과 (11.82ms, 38.4MB)
 *  테스트 11 〉통과 (12.48ms, 38.4MB)
 *  테스트 12 〉통과 (12.78ms, 38.4MB)
 *  테스트 13 〉통과 (15.65ms, 38.4MB)
 *  테스트 14 〉통과 (12.65ms, 38.4MB)
 *  테스트 15 〉통과 (18.36ms, 38.3MB)
 *  테스트 16 〉통과 (12.22ms, 38.4MB)
 *  테스트 17 〉통과 (13.18ms, 38.5MB)
 *  테스트 18 〉통과 (18.28ms, 38.4MB)
 *  테스트 19 〉통과 (20.59ms, 38.4MB)
 *  테스트 20 〉통과 (18.52ms, 38.4MB)
 *  테스트 21 〉통과 (11.95ms, 38.3MB)
 *  테스트 22 〉통과 (17.71ms, 38.2MB)
 *  테스트 23 〉통과 (13.86ms, 38.4MB)
 *  테스트 24 〉통과 (18.43ms, 38.5MB)
 *  테스트 25 〉통과 (14.40ms, 38.4MB)
 *  테스트 26 〉통과 (13.06ms, 38.4MB)
 *  테스트 27 〉통과 (14.39ms, 38.4MB)
 *  테스트 28 〉통과 (14.67ms, 38.4MB)
 *  테스트 29 〉통과 (18.24ms, 38.3MB)
 *  테스트 30 〉통과 (12.46ms, 38.5MB)
 *  테스트 31 〉통과 (3.03ms, 34.5MB)
 * 채점 결과
 *  정확성: 100.0
 *  합계: 100.0 / 100.0
 */
