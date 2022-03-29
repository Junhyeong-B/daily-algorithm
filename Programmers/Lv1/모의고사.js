/*
  정확성  테스트
    테스트 1 〉	통과 (0.15ms, 29.9MB)
    테스트 2 〉	통과 (0.17ms, 30MB)
    테스트 3 〉	통과 (0.18ms, 30.1MB)
    테스트 4 〉	통과 (0.09ms, 29.5MB)
    테스트 5 〉	통과 (0.14ms, 30.1MB)
    테스트 6 〉	통과 (0.18ms, 29.8MB)
    테스트 7 〉	통과 (1.17ms, 30.1MB)
    테스트 8 〉	통과 (0.40ms, 30.1MB)
    테스트 9 〉	통과 (4.56ms, 32.8MB)
    테스트 10 〉	통과 (0.81ms, 30.2MB)
    테스트 11 〉	통과 (4.37ms, 32.8MB)
    테스트 12 〉	통과 (4.38ms, 32.9MB)
    테스트 13 〉	통과 (0.19ms, 29.8MB)
    테스트 14 〉	통과 (4.52ms, 32.9MB)

  채점 결과
    정확성: 100.0
    합계: 100.0 / 100.0
*/

function solution(answers) {
  const student1 = [1, 2, 3, 4, 5];
  const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const answer = [
    [1, 0],
    [2, 0],
    [3, 0],
  ];

  for (let i = 0; i < answers.length; i++) {
    if (student1[i % student1.length] === answers[i]) answer[0][1] += 1;
    if (student2[i % student2.length] === answers[i]) answer[1][1] += 1;
    if (student3[i % student3.length] === answers[i]) answer[2][1] += 1;
  }

  const maxPoint = Math.max(...answer.map((ans) => ans[1]));

  return answer.filter((ans) => ans[1] === maxPoint).map((ans) => ans[0]);
}
