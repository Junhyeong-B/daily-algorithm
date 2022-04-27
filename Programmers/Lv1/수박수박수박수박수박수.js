/**
 * 정확성  테스트
 *  테스트 1 〉   통과 (0.21ms, 30MB)
 *  테스트 2 〉   통과 (0.56ms, 30.4MB)
 *  테스트 3 〉   통과 (0.23ms, 30.1MB)
 *  테스트 4 〉   통과 (0.49ms, 30.1MB)
 *  테스트 5 〉   통과 (0.21ms, 30.2MB)
 *  테스트 6 〉   통과 (0.04ms, 30.1MB)
 *  테스트 7 〉   통과 (0.04ms, 30.4MB)
 *  테스트 8 〉   통과 (0.05ms, 30.3MB)
 *  테스트 9 〉   통과 (0.05ms, 29.9MB)
 *  테스트 10 〉	통과 (0.04ms, 30.1MB)
 *  테스트 11 〉	통과 (0.06ms, 29.9MB)
 *  테스트 12 〉	통과 (0.04ms, 30MB)
 *  테스트 13 〉	통과 (0.06ms, 30.2MB)
 *  테스트 14 〉	통과 (0.05ms, 29.9MB)
 *  테스트 15 〉	통과 (1.33ms, 30.2MB)
 *  테스트 16 〉	통과 (0.04ms, 30MB)
 *
 * 채점 결과
 *  정확성: 100.0
 *  합계: 100.0 / 100.0
 */

/**
 * @param {number} n
 * @returns {string}
 */
function solution(n) {
  const SUBAK = ["수", "박"];
  const returnValueArray = [];
  for (let i = 0; i < n; i++) {
    returnValueArray.push(SUBAK[i % 2]);
  }

  return returnValueArray.join("");
}
