function solution(progresses, speeds) {
  const remainingProgresses = progresses.map((progress) => 100 - progress);
  const requiredDate = remainingProgresses.map((progress, i) =>
    Math.ceil(progress / speeds[i])
  );

  const answer = [];
  let j = 0;
  let currentDate = requiredDate[j];
  for (let i = 0; i < requiredDate.length; i++) {
    if (currentDate < requiredDate[i]) {
      currentDate = requiredDate[i];
      answer.push(i - j);
      j = i;
    }
  }

  answer.push(requiredDate.length - j);

  return answer;
}

/**
 * 정확성  테스트
 *  테스트 1 〉	통과 (0.22ms, 30MB)
 *  테스트 2 〉	통과 (0.10ms, 29.7MB)
 *  테스트 3 〉	통과 (0.10ms, 29.9MB)
 *  테스트 4 〉	통과 (0.22ms, 29.8MB)
 *  테스트 5 〉	통과 (0.11ms, 30.1MB)
 *  테스트 6 〉	통과 (0.12ms, 29.9MB)
 *  테스트 7 〉	통과 (0.14ms, 29.8MB)
 *  테스트 8 〉	통과 (0.11ms, 30.1MB)
 *  테스트 9 〉	통과 (0.28ms, 29.9MB)
 *  테스트 10 〉통과 (0.15ms, 30MB)
 *  테스트 11 〉통과 (0.11ms, 30MB)
 * 채점 결과
 *  정확성: 100.0
 *  합계: 100.0 / 100.0
 */
