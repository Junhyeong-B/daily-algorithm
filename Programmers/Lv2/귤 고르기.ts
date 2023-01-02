{
  function solution(k: number, tangerine: number[]): number {
    const tangerineCount: Record<string, number> = {};
    tangerine.forEach(
      (tan) => (tangerineCount[tan] = (tangerineCount[tan] || 0) + 1)
    );
    const countDecOrder = Object.values(tangerineCount).sort((a, b) => b - a);

    let min = 0;
    for (let i = 0; i < countDecOrder.length; i++) {
      min += countDecOrder[i];

      if (min >= k) {
        return i + 1;
      }
    }

    return tangerine.length - 1;
  }

  console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3])); // 2

  /**
    정확성  테스트
      테스트 1 〉   통과 (2.66ms, 35.8MB)
      테스트 2 〉   통과 (4.18ms, 38.4MB)
      테스트 3 〉   통과 (4.33ms, 36.1MB)
      테스트 4 〉   통과 (2.87ms, 37.3MB)
      테스트 5 〉   통과 (3.03ms, 37.1MB)
      테스트 6 〉   통과 (5.71ms, 37.2MB)
      테스트 7 〉   통과 (3.22ms, 37.2MB)
      테스트 8 〉   통과 (4.31ms, 37.2MB)
      테스트 9 〉   통과 (4.38ms, 37.2MB)
      테스트 10 〉	통과 (2.62ms, 37.3MB)
      테스트 11 〉	통과 (0.21ms, 33.5MB)
      테스트 12 〉	통과 (0.06ms, 33.5MB)
      테스트 13 〉	통과 (0.08ms, 33.5MB)
      테스트 14 〉	통과 (0.07ms, 33.4MB)
      테스트 15 〉	통과 (0.07ms, 33.6MB)
      테스트 16 〉	통과 (0.06ms, 33.5MB)
      테스트 17 〉	통과 (0.08ms, 33.5MB)
      테스트 18 〉	통과 (0.11ms, 33.5MB)
      테스트 19 〉	통과 (0.09ms, 33.4MB)
      테스트 20 〉	통과 (0.08ms, 33.6MB)
      테스트 21 〉	통과 (0.33ms, 33.6MB)
      테스트 22 〉	통과 (0.30ms, 33.5MB)
      테스트 23 〉	통과 (0.34ms, 33.6MB)
      테스트 24 〉	통과 (0.93ms, 33.7MB)
      테스트 25 〉	통과 (3.60ms, 36.3MB)
      테스트 26 〉	통과 (14.76ms, 40.8MB)
      테스트 27 〉	통과 (103.58ms, 63.7MB)
      테스트 28 〉	통과 (52.63ms, 45.4MB)
      테스트 29 〉	통과 (77.24ms, 50.4MB)
      테스트 30 〉	통과 (79.49ms, 63.6MB)
      테스트 31 〉	통과 (12.30ms, 37.5MB)
      테스트 32 〉	통과 (17.79ms, 37.8MB)
      테스트 33 〉	통과 (69.47ms, 53.8MB)
      테스트 34 〉	통과 (61.66ms, 50.7MB)
    채점 결과
      정확성: 100.0
      합계: 100.0 / 100.0
   */
}
