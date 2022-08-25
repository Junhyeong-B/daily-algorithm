const getGCD = (a, b) => {
  while (b !== 0) {
    const temp = a % b;
    a = b;
    b = temp;
  }

  return a;
};

function solution(w, h) {
  const gcd = getGCD(w, h);
  const slicedPapers = w + h - gcd;

  return w * h - slicedPapers;
}

/**
 * 정확성  테스트
 *  테스트 1 〉	통과 (0.05ms, 29.9MB)
 *  테스트 2 〉	통과 (0.05ms, 30.2MB)
 *  테스트 3 〉	통과 (0.10ms, 30.1MB)
 *  테스트 4 〉	통과 (0.05ms, 30MB)
 *  테스트 5 〉	통과 (0.07ms, 30MB)
 *  테스트 6 〉	통과 (0.05ms, 29.7MB)
 *  테스트 7 〉	통과 (0.12ms, 30MB)
 *  테스트 8 〉	통과 (0.09ms, 30.1MB)
 *  테스트 9 〉	통과 (0.04ms, 29.8MB)
 *  테스트 10 〉통과 (0.04ms, 30.1MB)
 *  테스트 11 〉통과 (0.05ms, 30.1MB)
 *  테스트 12 〉통과 (0.04ms, 30.2MB)
 *  테스트 13 〉통과 (0.07ms, 29.8MB)
 *  테스트 14 〉통과 (0.04ms, 30MB)
 *  테스트 15 〉통과 (0.04ms, 30.1MB)
 *  테스트 16 〉통과 (0.04ms, 30.2MB)
 *  테스트 17 〉통과 (0.06ms, 30.1MB)
 *  테스트 18 〉통과 (0.06ms, 30.1MB)
 * 채점 결과
 *  정확성: 100.0
 *  합계: 100.0 / 100.0
 */
