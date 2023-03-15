function solution(scores: number[][]): number {
  const sums = scores.map(([a, b], i) => [a + b, i]);
  const moreThanWanhoScore = sums.filter((sum) => sums[0][0] < sum[0]);
  const sc = scores.filter((score) => sums[0][0] < score[0] + score[1]);

  for (let i = 0; i < moreThanWanhoScore.length; i++) {
    const index = moreThanWanhoScore[i][1];
    if (scores[0][0] < scores[index][0] && scores[0][1] < scores[index][1]) {
      return -1;
    }
  }

  sc.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return b[0] - a[0];
    }
  });
  let cannotGetInsentiveCount = 0;
  let firstMaxScore = 0;
  let secondMaxScore = 0;
  for (let i = 0; i < sc.length; i++) {
    if (sc[i][0] < firstMaxScore && sc[i][1] < secondMaxScore) {
      cannotGetInsentiveCount++;
    }

    firstMaxScore = Math.max(firstMaxScore, sc[i][0]);
    secondMaxScore = Math.max(secondMaxScore, sc[i][1]);
  }

  return moreThanWanhoScore.length + 1 - cannotGetInsentiveCount;
}

console.log(
  solution([
    [2, 2],
    [1, 4],
    [3, 2],
    [3, 2],
    [2, 1],
  ])
); // 4

console.log(
  solution([
    [5, 5],
    [10, 5],
    [1, 6],
    [9, 5],
    [7, 5],
    [5, 5],
    [5, 4],
    [6, 4],
    [7, 4],
    [9, 4],
    [8, 4],
  ])
); // 4

/**
 * 정확성  테스트
 *  테스트 1 〉	통과 (0.20ms, 33.6MB)
 *  테스트 2 〉	통과 (0.11ms, 33.6MB)
 *  테스트 3 〉	통과 (0.23ms, 33.5MB)
 *  테스트 4 〉	통과 (0.17ms, 33.6MB)
 *  테스트 5 〉	통과 (0.21ms, 33.6MB)
 *  테스트 6 〉	통과 (0.19ms, 33.6MB)
 *  테스트 7 〉	통과 (0.31ms, 33.5MB)
 *  테스트 8 〉	통과 (0.25ms, 33.6MB)
 *  테스트 9 〉	통과 (0.27ms, 33.6MB)
 *  테스트 10 〉통과 (0.42ms, 33.7MB)
 *  테스트 11 〉통과 (1.08ms, 33.9MB)
 *  테스트 12 〉통과 (0.41ms, 33.8MB)
 *  테스트 13 〉통과 (0.68ms, 33.9MB)
 *  테스트 14 〉통과 (0.78ms, 34MB)
 *  테스트 15 〉통과 (3.18ms, 37.6MB)
 *  테스트 16 〉통과 (6.56ms, 37.5MB)
 *  테스트 17 〉통과 (4.51ms, 39MB)
 *  테스트 18 〉통과 (7.20ms, 39MB)
 *  테스트 19 〉통과 (12.45ms, 51.2MB)
 *  테스트 20 〉통과 (10.21ms, 51.1MB)
 *  테스트 21 〉통과 (21.00ms, 64.7MB)
 *  테스트 22 〉통과 (38.88ms, 66.1MB)
 *  테스트 23 〉통과 (29.69ms, 65.9MB)
 *  테스트 24 〉통과 (44.03ms, 67.4MB)
 *  테스트 25 〉통과 (32.13ms, 65.4MB)
 * 채점 결과
 *  정확성: 100.0
 *  합계: 100.0 / 100.0
 */
