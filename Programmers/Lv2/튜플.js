function solution(s) {
  const numbers = s.match(/[0-9]+/g);
  const map = new Map();

  for (const num of numbers) {
    const count = map.get(num) || 0;
    map.set(num, count + 1);
  }

  return Array.from(map)
    .sort((a, b) => b[1] - a[1])
    .map((tuple) => +tuple[0]);
}

/**
 * 정확성  테스트
 *  테스트 1 〉	통과 (0.16ms, 29.9MB)
 *  테스트 2 〉	통과 (0.27ms, 30.1MB)
 *  테스트 3 〉	통과 (0.26ms, 30MB)
 *  테스트 4 〉	통과 (0.19ms, 30MB)
 *  테스트 5 〉	통과 (0.68ms, 29.7MB)
 *  테스트 6 〉	통과 (0.53ms, 30.2MB)
 *  테스트 7 〉	통과 (7.13ms, 34MB)
 *  테스트 8 〉	통과 (24.42ms, 37.5MB)
 *  테스트 9 〉	통과 (10.46ms, 34.9MB)
 *  테스트 10 〉통과 (23.48ms, 38.7MB)
 *  테스트 11 〉통과 (29.11ms, 41.4MB)
 *  테스트 12 〉통과 (47.40ms, 44MB)
 *  테스트 13 〉통과 (43.31ms, 43.6MB)
 *  테스트 14 〉통과 (43.07ms, 44MB)
 *  테스트 15 〉통과 (0.26ms, 30MB)
 * 채점 결과
 *  정확성: 100.0
 *  합계: 100.0 / 100.0
 */
