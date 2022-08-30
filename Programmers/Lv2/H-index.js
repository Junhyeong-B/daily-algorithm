function solution(citations) {
  citations.sort((a, b) => b - a);

  let count = 0;
  for (let i = 0; i < citations.length; i++) {
    if (count + 1 <= citations[i]) {
      count++;
    }
  }

  return count;
}

/**
 * 정확성  테스트
 *  테스트 1 〉	통과 (0.24ms, 30.2MB)
 *  테스트 2 〉	통과 (0.31ms, 30.1MB)
 *  테스트 3 〉	통과 (0.45ms, 30MB)
 *  테스트 4 〉	통과 (0.24ms, 29.8MB)
 *  테스트 5 〉	통과 (0.30ms, 29.9MB)
 *  테스트 6 〉	통과 (0.35ms, 29.9MB)
 *  테스트 7 〉	통과 (0.21ms, 30.3MB)
 *  테스트 8 〉	통과 (0.08ms, 30MB)
 *  테스트 9 〉	통과 (0.08ms, 30.1MB)
 *  테스트 10 〉통과 (0.17ms, 30MB)
 *  테스트 11 〉통과 (0.35ms, 30.1MB)
 *  테스트 12 〉통과 (0.14ms, 29.9MB)
 *  테스트 13 〉통과 (0.34ms, 29.9MB)
 *  테스트 14 〉통과 (0.30ms, 30MB)
 *  테스트 15 〉통과 (0.32ms, 30MB)
 *  테스트 16 〉통과 (0.05ms, 30.2MB)
 * 채점 결과
 *  정확성: 100.0
 *  합계: 100.0 / 100.0
 */
