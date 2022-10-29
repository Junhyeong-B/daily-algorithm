/**
 * 정확성  테스트
 *  테스트 1 〉	통과 (0.15ms, 33.4MB)
 *  테스트 2 〉	통과 (0.04ms, 33.5MB)
 *  테스트 3 〉	통과 (0.12ms, 33.5MB)
 *  테스트 4 〉	통과 (0.04ms, 33.4MB)
 *  테스트 5 〉	통과 (0.04ms, 33.5MB)
 *  테스트 6 〉	통과 (0.04ms, 33.4MB)
 *  테스트 7 〉	통과 (0.04ms, 33.4MB)
 *  테스트 8 〉	통과 (0.04ms, 33.4MB)
 *  테스트 9 〉	통과 (0.13ms, 33.4MB)
 *  테스트 10 〉	통과 (0.04ms, 33.5MB)
 *  테스트 11 〉	통과 (0.04ms, 33.4MB)
 *  테스트 12 〉	통과 (0.47ms, 33.4MB)
 *  테스트 13 〉	통과 (0.04ms, 33.5MB)
 *  테스트 14 〉	통과 (0.05ms, 33.4MB)
 * 채점 결과
 *  정확성: 100.0
 *  합계: 100.0 / 100.0
 */

 function solution(a, b, n) {
  let remaining = n;
  let answer = 0;
  while (remaining > 0) {
    if (remaining < a) {
      break;
    }
    const bottle = Math.floor(remaining / a) * b;
    const leftBottle = remaining % a;
    remaining = bottle + leftBottle;
    answer += bottle;
  }

  return answer;
}

console.log(solution(3, 2, 20));
