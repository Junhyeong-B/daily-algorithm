function solution(targets: number[][]): number {
  targets.sort((a, b) => b[0] - a[0]);

  let s = Infinity;
  let count = 0;

  for (const [targetS, targetE] of targets) {
    if (targetE <= s) {
      s = targetS;
      count++;
    }
  }

  return count;
}

console.log(
  solution([
    [4, 5],
    [4, 8],
    [10, 14],
    [11, 13],
    [5, 12],
    [3, 7],
    [1, 4],
  ])
); // 3

/**
 * 정확성  테스트
 *  테스트 1 〉	통과 (0.07ms, 33.6MB)
 *  테스트 2 〉	통과 (0.26ms, 33.4MB)
 *  테스트 3 〉	통과 (0.21ms, 33.6MB)
 *  테스트 4 〉	통과 (0.89ms, 33.9MB)
 *  테스트 5 〉	통과 (10.71ms, 38MB)
 *  테스트 6 〉	통과 (55.46ms, 56.6MB)
 *  테스트 7 〉	통과 (700.49ms, 168MB)
 *  테스트 8 〉	통과 (828.44ms, 167MB)
 *  테스트 9 〉	통과 (38.06ms, 161MB)
 *  테스트 10 〉통과 (577.59ms, 139MB)
 *  테스트 11 〉통과 (0.06ms, 33.4MB)
 * 채점 결과
 *  정확성: 100.0
 *  합계: 100.0 / 100.0
 */
