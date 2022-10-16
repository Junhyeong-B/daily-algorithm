{
  /**
   * 정확성  테스트
   *  테스트 1 〉	통과 (0.11ms, 33.5MB)
   *  테스트 2 〉	통과 (0.18ms, 33.5MB)
   *  테스트 3 〉	통과 (0.34ms, 33.5MB)
   *  테스트 4 〉	통과 (0.31ms, 33.6MB)
   *  테스트 5 〉	통과 (0.21ms, 33.4MB)
   *  테스트 6 〉	통과 (0.22ms, 33.4MB)
   *  테스트 7 〉	통과 (0.46ms, 33.5MB)
   *  테스트 8 〉	통과 (0.59ms, 33.4MB)
   *  테스트 9 〉	통과 (0.42ms, 33.5MB)
   *  테스트 10 〉통과 (0.33ms, 33.5MB)
   * 채점 결과
   *  정확성: 100.0
   *  합계: 100.0 / 100.0
   */

  function checkScore(start, cards, check) {
    let index = cards[start] - 1;
    let score = 0;

    while (check[index] === 0) {
      check[index] = 1;
      index = cards[index] - 1;
      score++;
    }

    return score === cards.length ? 0 : score;
  }

  function checkMaxScore(cards, ch) {
    const check = [...ch];
    let max = 0;
    let tempCheck;

    for (let i = 0; i < cards.length; i++) {
      tempCheck = check;
      if (tempCheck[i] === 1) {
        continue;
      }

      const score = checkScore(i, cards, tempCheck);
      max = Math.max(score, max);
    }

    return max;
  }

  function solution(cards) {
    const check = Array.from({ length: cards.length }, () => 0);
    let tempCheck;
    let max = 0;

    for (let i = 0; i < cards.length; i++) {
      tempCheck = check;
      const firstScore = checkScore(i, cards, tempCheck);
      if (firstScore === 0) {
        continue;
      }

      const secondsScore = checkMaxScore(cards, tempCheck);
      if (secondsScore === 0) {
        continue;
      }

      max = Math.max(max, firstScore * secondsScore);
    }

    return max;
  }
}
