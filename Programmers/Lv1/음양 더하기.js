/*
  정확성  테스트
    테스트 1 〉	통과 (0.10ms, 29.8MB)
    테스트 2 〉	통과 (0.11ms, 30MB)
    테스트 3 〉	통과 (0.09ms, 30MB)
    테스트 4 〉	통과 (0.17ms, 29.9MB)
    테스트 5 〉	통과 (0.15ms, 30MB)
    테스트 6 〉	통과 (0.09ms, 30MB)
    테스트 7 〉	통과 (0.09ms, 29.9MB)
    테스트 8 〉	통과 (0.10ms, 30MB)
    테스트 9 〉	통과 (0.10ms, 30MB)

  채점 결과
    정확성: 100.0
    합계: 100.0 / 100.0
 */

function solution(absolutes, signs) {
  return absolutes.reduce((acc, cur, i) => {
    if (signs[i]) {
      return acc + cur;
    } else {
      return acc - cur;
    }
  }, 0);
}
