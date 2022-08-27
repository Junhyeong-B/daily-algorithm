function solution(numbers) {
  const sortedNumbers = numbers
    .slice()
    .map((num) => num.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");

  return sortedNumbers[0] === "0" ? "0" : sortedNumbers;
}

/**
 * 정확성  테스트
 *  테스트 1 〉	통과 (113.21ms, 39.2MB)
 *  테스트 2 〉	통과 (79.85ms, 36.8MB)
 *  테스트 3 〉	통과 (152.36ms, 45.8MB)
 *  테스트 4 〉	통과 (3.85ms, 32.3MB)
 *  테스트 5 〉	통과 (121.03ms, 38.5MB)
 *  테스트 6 〉	통과 (91.68ms, 38.7MB)
 *  테스트 7 〉	통과 (0.15ms, 30.2MB)
 *  테스트 8 〉	통과 (0.08ms, 29.8MB)
 *  테스트 9 〉	통과 (0.08ms, 29.9MB)
 *  테스트 10 〉통과 (0.14ms, 29.8MB)
 *  테스트 11 〉통과 (0.07ms, 29.8MB)
 *  테스트 12 〉통과 (0.08ms, 30MB)
 *  테스트 13 〉통과 (0.09ms, 30.2MB)
 *  테스트 14 〉통과 (0.08ms, 29.8MB)
 *  테스트 15 〉통과 (0.06ms, 29.8MB)
 * 채점 결과
 *  정확성: 100.0
 *  합계: 100.0 / 100.0
 */
