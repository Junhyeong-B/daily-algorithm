/**
 * 정확성  테스트
 *  테스트 1 〉	통과 (0.14ms, 33.5MB)
 *  테스트 2 〉	통과 (0.12ms, 33.5MB)
 *  테스트 3 〉	통과 (0.18ms, 33.5MB)
 *  테스트 4 〉	통과 (0.13ms, 33.5MB)
 *  테스트 5 〉	통과 (0.17ms, 33.5MB)
 *  테스트 6 〉	통과 (0.15ms, 33.4MB)
 *  테스트 7 〉	통과 (0.22ms, 33.5MB)
 *  테스트 8 〉	통과 (0.13ms, 33.5MB)
 *  테스트 9 〉	통과 (0.14ms, 33.4MB)
 *  테스트 10 〉	통과 (0.23ms, 33.5MB)
 *  테스트 11 〉	통과 (0.13ms, 33.5MB)
 *  테스트 12 〉	통과 (0.19ms, 33.4MB)
 *  테스트 13 〉	통과 (0.14ms, 33.5MB)
 * 채점 결과
 *  정확성: 100.0
 *  합계: 100.0 / 100.0
 */

/**
 * @param {number} number
 * @returns
 */

function solution(number) {
  let answer = 0;

  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      for (let k = j + 1; k < number.length; k++) {
        const sum = number[i] + number[j] + number[k];
        if (sum === 0) {
          answer++;
        }
      }
    }
  }

  return answer;
}
