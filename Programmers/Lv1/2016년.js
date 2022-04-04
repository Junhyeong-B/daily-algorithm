/*
  정확성  테스트
    테스트 1 〉	통과 (0.04ms, 30.1MB)
    테스트 2 〉	통과 (0.13ms, 30MB)
    테스트 3 〉	통과 (0.04ms, 30MB)
    테스트 4 〉	통과 (0.06ms, 30.2MB)
    테스트 5 〉	통과 (0.04ms, 30MB)
    테스트 6 〉	통과 (0.04ms, 30.1MB)
    테스트 7 〉	통과 (0.05ms, 30.1MB)
    테스트 8 〉	통과 (0.05ms, 30MB)
    테스트 9 〉	통과 (0.04ms, 29.9MB)
    테스트 10 〉	통과 (0.11ms, 30.1MB)
    테스트 11 〉	통과 (0.04ms, 29.9MB)
    테스트 12 〉	통과 (0.05ms, 30.1MB)
    테스트 13 〉	통과 (0.05ms, 30.1MB)
    테스트 14 〉	통과 (0.05ms, 30MB)

  채점 결과
    정확성: 100.0
    합계: 100.0 / 100.0
 */

/**
 * @param {number} a
 * @param {number} b
 * @returns {string}
 */
function solution(a, b) {
  const days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const daysOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let day = 0;

  for (let month = 0; month < a - 1; month++) {
    day += daysOfMonth[month];
  }
  day += b - 1;

  return days[day % 7];
}
