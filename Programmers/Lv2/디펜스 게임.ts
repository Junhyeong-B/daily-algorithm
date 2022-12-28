function solution(n: number, k: number, enemy: number[]): number {
  if (k === enemy.length) {
    return enemy.length;
  }
  let left = 0;
  let right = enemy.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let power = k;
    const enemyCount = enemy
      .slice(0, mid)
      .sort((a, b) => b - a)
      .reduce((acc, cur) => {
        if (power > 0) {
          power--;
          return acc;
        } else {
          return acc + cur;
        }
      }, 0);

    if (n >= enemyCount) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left - 1;
}

console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1])); // 5

/**
  정확성  테스트
    테스트 1 〉	  통과 (8.09ms, 36.2MB)
    테스트 2 〉	  통과 (53.29ms, 39.2MB)
    테스트 3 〉	  통과 (2282.25ms, 107MB)
    테스트 4 〉	  통과 (364.80ms, 77MB)
    테스트 5 〉	  통과 (0.05ms, 33.9MB)
    테스트 6 〉	  통과 (4436.18ms, 114MB)
    테스트 7 〉	  통과 (1963.79ms, 98.1MB)
    테스트 8 〉	  통과 (1562.38ms, 91.7MB)
    테스트 9 〉	  통과 (1694.91ms, 98.4MB)
    테스트 10 〉	통과 (6849.21ms, 125MB)
    테스트 11 〉	통과 (262.89ms, 75.9MB)
    테스트 12 〉	통과 (260.25ms, 75.9MB)
    테스트 13 〉	통과 (0.05ms, 33.4MB)
    테스트 14 〉	통과 (0.15ms, 33.4MB)
    테스트 15 〉	통과 (0.16ms, 33.5MB)
    테스트 16 〉	통과 (0.16ms, 33.4MB)
    테스트 17 〉	통과 (0.06ms, 33.4MB)
    테스트 18 〉	통과 (0.06ms, 33.5MB)
    테스트 19 〉	통과 (0.13ms, 33.4MB)
    테스트 20 〉	통과 (0.08ms, 33.5MB)
    테스트 21 〉	통과 (0.16ms, 33.4MB)
    테스트 22 〉	통과 (0.18ms, 33.4MB)
    테스트 23 〉	통과 (0.26ms, 33.5MB)
    테스트 24 〉	통과 (0.27ms, 33.5MB)
    테스트 25 〉	통과 (0.38ms, 33.4MB)
    테스트 26 〉	통과 (0.40ms, 33.5MB)
    테스트 27 〉	통과 (0.61ms, 33.4MB)
    테스트 28 〉	통과 (0.18ms, 33.4MB)
    테스트 29 〉	통과 (0.43ms, 33.5MB)
    테스트 30 〉	통과 (0.32ms, 33.5MB)
    테스트 31 〉	통과 (0.38ms, 33.5MB)
    테스트 32 〉	통과 (0.34ms, 33.5MB)
  채점 결과
    정확성: 100.0
    합계: 100.0 / 100.0
 */
