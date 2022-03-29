/*
  정확성  테스트
    테스트 1 〉	통과 (0.07ms, 29.8MB)
    테스트 2 〉	통과 (0.08ms, 30MB)
    테스트 3 〉	통과 (0.08ms, 30MB)
    테스트 4 〉	통과 (0.08ms, 29.7MB)
    테스트 5 〉	통과 (0.09ms, 30MB)
    테스트 6 〉	통과 (0.11ms, 30MB)
    테스트 7 〉	통과 (0.11ms, 30.1MB)

  채점 결과
    정확성: 100.0
    합계: 100.0 / 100.0
*/

function solution(array, commands) {
  const answer = [];

  for (const [i, j, k] of commands) {
    answer.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
  }

  return answer;
}
