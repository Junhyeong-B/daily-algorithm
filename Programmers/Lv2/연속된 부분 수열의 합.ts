function solution(sequence: number[], k: number): number[] {
  let l = 0;
  let r = 0;
  let sum = 0;

  const result: number[][] = [];
  while (r <= sequence.length) {
    if (sum === k) {
      result.push([l, r - 1]);
      sum -= sequence[l++];
      sum += sequence[r++];
      continue;
    }

    if (sum < k) {
      sum += sequence[r++];
      continue;
    }

    while (sum > k) {
      sum -= sequence[l++];
    }
  }

  const minDiff = result.reduce(
    (acc, cur) => Math.min(acc, cur[1] - cur[0]),
    Infinity
  );
  return result.filter(([l, r]) => r - l === minDiff)[0];
}

console.log(solution([1, 1, 1, 2, 3, 4, 5], 5)); // [6, 6]

/**
 * 정확성  테스트
 *  테스트 1 〉	통과 (0.09ms, 33.1MB)
 *  테스트 2 〉	통과 (0.09ms, 33.4MB)
 *  테스트 3 〉	통과 (0.19ms, 33.5MB)
 *  테스트 4 〉	통과 (0.26ms, 33.1MB)
 *  테스트 5 〉	통과 (2.74ms, 36.9MB)
 *  테스트 6 〉	통과 (1.72ms, 37.3MB)
 *  테스트 7 〉	통과 (3.35ms, 38.5MB)
 *  테스트 8 〉	통과 (3.93ms, 38.2MB)
 *  테스트 9 〉	통과 (6.36ms, 40.3MB)
 *  테스트 10 〉통과 (9.24ms, 50.3MB)
 *  테스트 11 〉통과 (16.46ms, 69.4MB)
 *  테스트 12 〉통과 (11.99ms, 69.3MB)
 *  테스트 13 〉통과 (12.25ms, 69.2MB)
 *  테스트 14 〉통과 (12.27ms, 69.3MB)
 *  테스트 15 〉통과 (12.78ms, 69.4MB)
 *  테스트 16 〉통과 (5.66ms, 71.2MB)
 *  테스트 17 〉통과 (321.26ms, 184MB)
 *  테스트 18 〉통과 (0.20ms, 33.4MB)
 *  테스트 19 〉통과 (0.09ms, 33.4MB)
 *  테스트 20 〉통과 (0.17ms, 33.5MB)
 *  테스트 21 〉통과 (0.10ms, 33.4MB)
 *  테스트 22 〉통과 (0.10ms, 33.5MB)
 *  테스트 23 〉통과 (0.10ms, 33.5MB)
 *  테스트 24 〉통과 (164.72ms, 126MB)
 *  테스트 25 〉통과 (5.77ms, 65.7MB)
 *  테스트 26 〉통과 (16.38ms, 65.8MB)
 *  테스트 27 〉통과 (15.41ms, 65.8MB)
 *  테스트 28 〉통과 (11.24ms, 65.7MB)
 *  테스트 29 〉통과 (10.58ms, 65.8MB)
 *  테스트 30 〉통과 (13.44ms, 71.5MB)
 *  테스트 31 〉통과 (0.09ms, 33.5MB)
 *  테스트 32 〉통과 (0.09ms, 33.5MB)
 *  테스트 33 〉통과 (0.09ms, 33.6MB)
 *  테스트 34 〉통과 (0.09ms, 33.6MB)
 * 채점 결과
 *  정확성: 100.0
 *  합계: 100.0 / 100.0
 */
