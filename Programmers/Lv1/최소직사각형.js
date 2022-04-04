/*
  정확성  테스트
    테스트 1 〉	통과 (0.07ms, 30MB)
    테스트 2 〉	통과 (0.11ms, 30.1MB)
    테스트 3 〉	통과 (0.13ms, 30.1MB)
    테스트 4 〉	통과 (0.14ms, 29.9MB)
    테스트 5 〉	통과 (0.15ms, 30.1MB)
    테스트 6 〉	통과 (0.15ms, 30.1MB)
    테스트 7 〉	통과 (0.13ms, 30.1MB)
    테스트 8 〉	통과 (0.14ms, 30MB)
    테스트 9 〉	통과 (0.19ms, 30.1MB)
    테스트 10 〉	통과 (0.21ms, 30.1MB)
    테스트 11 〉	통과 (0.35ms, 30.1MB)
    테스트 12 〉	통과 (0.41ms, 30.1MB)
    테스트 13 〉	통과 (1.03ms, 30.6MB)
    테스트 14 〉	통과 (4.16ms, 33.7MB)
    테스트 15 〉	통과 (4.72ms, 34.2MB)
    테스트 16 〉	통과 (8.10ms, 34.7MB)
    테스트 17 〉	통과 (13.17ms, 35.3MB)
    테스트 18 〉	통과 (10.64ms, 35.8MB)
    테스트 19 〉	통과 (16.15ms, 37.2MB)
    테스트 20 〉	통과 (19.94ms, 38.8MB)

  채점 결과
    정확성: 100.0
    합계: 100.0 / 100.0
 */

/**
 * @param {number[][]} sizes
 * @returns {number}
 */
function solution(sizes) {
  return sizes
    .map((size) => {
      size.sort((a, b) => a - b);
      return size;
    })
    .reduce((acc, cur) => {
      [acc[0], acc[1]] = [Math.max(acc[0], cur[0]), Math.max(acc[1], cur[1])];
      return acc;
    })
    .reduce((acc, cur) => acc * cur);
}
