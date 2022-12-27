function solution(s: string): number[] {
  const map = new Map<string, number>();
  const result: number[] = [];

  for (let i = 0; i < s.length; i++) {
    const currentIndex = map.get(s[i]);
    if (currentIndex != undefined) {
      result.push(i - currentIndex);
    } else {
      result.push(-1);
    }
    map.set(s[i], i);
  }

  return result;
}

console.log(solution('abcda')); // [-1, -1, -1, -1, 4]

/**
 * 정확성  테스트
    테스트 1 〉	 통과 (0.05ms, 33.5MB)
    테스트 2 〉	 통과 (0.15ms, 33.6MB)
    테스트 3 〉	 통과 (0.15ms, 33.5MB)
    테스트 4 〉	 통과 (0.30ms, 33.7MB)
    테스트 5 〉	 통과 (4.61ms, 37.9MB)
    테스트 6 〉	 통과 (0.64ms, 37.2MB)
    테스트 7 〉	 통과 (4.53ms, 37.9MB)
    테스트 8 〉	 통과 (0.55ms, 37.1MB)
    테스트 9 〉	 통과 (7.46ms, 38MB)
    테스트 10 〉 통과 (0.69ms, 33.8MB)
    테스트 11 〉 통과 (7.01ms, 37.9MB)
    테스트 12 〉 통과 (0.06ms, 33.4MB)
    테스트 13 〉 통과 (0.05ms, 33.4MB)
    테스트 14 〉 통과 (0.20ms, 33.5MB)
    테스트 15 〉 통과 (0.05ms, 33.5MB)
    테스트 16 〉 통과 (0.14ms, 33.4MB)
    테스트 17 〉 통과 (0.23ms, 33.5MB)
    테스트 18 〉 통과 (0.62ms, 33.7MB)
    테스트 19 〉 통과 (0.69ms, 33.8MB)
    테스트 20 〉 통과 (0.19ms, 33.6MB)
    테스트 21 〉 통과 (0.19ms, 33.4MB)
    테스트 22 〉 통과 (0.74ms, 37.3MB)
    테스트 23 〉 통과 (0.20ms, 33.5MB)
    테스트 24 〉 통과 (0.23ms, 33.6MB)
    테스트 25 〉 통과 (0.40ms, 33.6MB)
    테스트 26 〉 통과 (0.18ms, 33.5MB)
    테스트 27 〉 통과 (0.24ms, 33.5MB)
    테스트 28 〉 통과 (0.23ms, 33.7MB)
    테스트 29 〉 통과 (0.05ms, 33.6MB)
    테스트 30 〉 통과 (4.59ms, 37.9MB)
  채점 결과
    정확성: 100.0
    합계: 100.0 / 100.0
 */
