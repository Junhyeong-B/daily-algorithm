/*
  정확성  테스트
    테스트 1 〉	통과 (0.11ms, 29.9MB)
    테스트 2 〉	통과 (0.07ms, 30MB)
    테스트 3 〉	통과 (0.09ms, 29.9MB)
    테스트 4 〉	통과 (0.09ms, 30.1MB)
    테스트 5 〉	통과 (0.14ms, 29.8MB)
    테스트 6 〉	통과 (0.11ms, 30.1MB)
    테스트 7 〉	통과 (0.07ms, 30MB)
    테스트 8 〉	통과 (0.09ms, 30MB)
    테스트 9 〉	통과 (0.06ms, 30MB)
    테스트 10 〉	통과 (0.13ms, 30.1MB)

  채점 결과
    정확성: 100.0
    합계: 100.0 / 100.0
*/

function solution(n) {
  return n
    .toString(3)
    .split("")
    .map((number, i) => +number * 3 ** i)
    .reduce((acc, cur) => acc + cur);
}
