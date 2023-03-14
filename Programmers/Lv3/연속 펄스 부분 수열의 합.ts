function solution(sequence: number[]) {
  let max = 0;
  const dpPositive: number[] = [];
  const dpNegative: number[] = [];

  for (let i = 0; i < sequence.length; i++) {
    if (i === 0) {
      dpPositive.push(sequence[i]);
      dpNegative.push(-sequence[i]);
    } else if (i % 2 === 0) {
      dpPositive.push(Math.max(dpPositive[i - 1] + sequence[i], sequence[i]));
      dpNegative.push(Math.max(dpNegative[i - 1] - sequence[i], -sequence[i]));
    } else {
      dpPositive.push(Math.max(dpPositive[i - 1] - sequence[i], -sequence[i]));
      dpNegative.push(Math.max(dpNegative[i - 1] + sequence[i], sequence[i]));
    }
    max = Math.max(max, dpPositive[i], dpNegative[i]);
  }

  return max;
}

console.log(solution([2, 3, -6, 1, 3, -1, 2, 4])); // 10

/**
 * 정확성  테스트
 *  테스트 1 〉	통과 (0.06ms, 33.6MB)
 *  테스트 2 〉	통과 (0.09ms, 33.3MB)
 *  테스트 3 〉	통과 (0.07ms, 33.3MB)
 *  테스트 4 〉	통과 (0.16ms, 33.6MB)
 *  테스트 5 〉	통과 (0.17ms, 33.2MB)
 *  테스트 6 〉	통과 (0.18ms, 33.6MB)
 *  테스트 7 〉	통과 (0.19ms, 33.7MB)
 *  테스트 8 〉	통과 (0.27ms, 33.2MB)
 *  테스트 9 〉	통과 (0.42ms, 33.7MB)
 *  테스트 10 〉통과 (1.36ms, 34.1MB)
 *  테스트 11 〉통과 (3.99ms, 37.7MB)
 *  테스트 12 〉통과 (13.72ms, 44.7MB)
 *  테스트 13 〉통과 (16.52ms, 44.7MB)
 *  테스트 14 〉통과 (12.54ms, 44.8MB)
 *  테스트 15 〉통과 (8.81ms, 44.7MB)
 *  테스트 16 〉통과 (11.98ms, 44.5MB)
 *  테스트 17 〉통과 (36.08ms, 72.6MB)
 *  테스트 18 〉통과 (43.80ms, 76.6MB)
 *  테스트 19 〉통과 (37.51ms, 65.3MB)
 *  테스트 20 〉통과 (39.94ms, 65.8MB)
 * 채점 결과
 *  정확성: 100.0
 *  합계: 100.0 / 100.0
 */
