/**
  정확성  테스트
    테스트 1 〉	통과 (0.07ms, 30.1MB)
    테스트 2 〉	통과 (0.08ms, 30.2MB)
    테스트 3 〉	통과 (0.09ms, 30.1MB)
    테스트 4 〉	통과 (0.09ms, 30.1MB)
    테스트 5 〉	통과 (0.09ms, 30MB)
    테스트 6 〉	통과 (0.13ms, 29.9MB)
    테스트 7 〉	통과 (0.56ms, 30.2MB)
    테스트 8 〉	통과 (0.45ms, 30.2MB)
    테스트 9 〉	통과 (0.34ms, 30.1MB)

  채점 결과
    정확성: 100.0
    합계: 100.0 / 100.0
 */

/**
 * @param {number[]} numbers
 * @returns {number[]}
 */
function solution(numbers) {
  const sums = new Set();
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      sums.add(numbers[i] + numbers[j]);
    }
  }
  const answer = Array.from(sums).sort((a, b) => a - b);
  return answer;
}
