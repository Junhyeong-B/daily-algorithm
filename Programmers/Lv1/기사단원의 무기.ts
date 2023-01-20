{
  function getFactor(num: number): number {
    let factorCount = 0;
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        factorCount++;

        if (num / i !== i) {
          factorCount++;
        }
      }
    }

    return factorCount;
  }

  function solution(number: number, limit: number, power: number): number {
    const knights = Array.from({ length: number }, (_, i) => i + 1).map(
      (knight) => getFactor(knight)
    );

    return knights.reduce(
      (acc, cur) => (cur > limit ? acc + power : acc + cur),
      0
    );
  }

  console.log(solution(10, 3, 2)); // 21

  /**
    정확성  테스트
      테스트 1 〉	통과 (7.01ms, 35.9MB)
      테스트 2 〉	통과 (2.50ms, 36.2MB)
      테스트 3 〉	통과 (1.98ms, 36.1MB)
      테스트 4 〉	통과 (2.69ms, 36.1MB)
      테스트 5 〉	통과 (1.59ms, 36.9MB)
      테스트 6 〉	통과 (5.83ms, 36MB)
      테스트 7 〉	통과 (2.52ms, 36MB)
      테스트 8 〉	통과 (2.31ms, 36.2MB)
      테스트 9 〉	통과 (7.00ms, 36.1MB)
      테스트 10 〉	통과 (2.13ms, 36.1MB)
      테스트 11 〉	통과 (86.07ms, 36.9MB)
      테스트 12 〉	통과 (90.44ms, 36.9MB)
      테스트 13 〉	통과 (87.28ms, 36.8MB)
      테스트 14 〉	통과 (89.87ms, 36.9MB)
      테스트 15 〉	통과 (95.80ms, 37MB)
      테스트 16 〉	통과 (97.87ms, 37MB)
      테스트 17 〉	통과 (0.14ms, 33.4MB)
      테스트 18 〉	통과 (99.51ms, 37MB)
      테스트 19 〉	통과 (2.46ms, 36.1MB)
      테스트 20 〉	통과 (2.47ms, 36.1MB)
      테스트 21 〉	통과 (0.11ms, 33.4MB)
      테스트 22 〉	통과 (0.10ms, 33.4MB)
      테스트 23 〉	통과 (0.20ms, 33.5MB)
      테스트 24 〉	통과 (101.74ms, 37MB)
      테스트 25 〉	통과 (100.95ms, 37MB)
      테스트 26 〉	통과 (1.46ms, 35.9MB)
      테스트 27 〉	통과 (2.30ms, 35.9MB)
    채점 결과
      정확성: 100.0
      합계: 100.0 / 100.0
 */
}
