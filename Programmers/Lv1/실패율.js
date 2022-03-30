/*
  정확성  테스트
    테스트 1 〉	통과 (0.22ms, 30.1MB)
    테스트 2 〉	통과 (0.79ms, 30.3MB)
    테스트 3 〉	통과 (95.48ms, 38.2MB)
    테스트 4 〉	통과 (607.00ms, 68.2MB)
    테스트 5 〉	통과 (2780.50ms, 74.3MB)
    테스트 6 〉	통과 (1.88ms, 30.6MB)
    테스트 7 〉	통과 (13.47ms, 34MB)
    테스트 8 〉	통과 (667.41ms, 66.1MB)
    테스트 9 〉	통과 (2615.38ms, 72.3MB)
    테스트 10 〉	통과 (267.80ms, 57.5MB)
    테스트 11 〉	통과 (544.10ms, 64.1MB)
    테스트 12 〉	통과 (199.51ms, 63.9MB)
    테스트 13 〉	통과 (1228.56ms, 63.3MB)
    테스트 14 〉	통과 (0.34ms, 29.8MB)
    테스트 15 〉	통과 (44.11ms, 43.5MB)
    테스트 16 〉	통과 (4.72ms, 33MB)
    테스트 17 〉	통과 (49.62ms, 43.5MB)
    테스트 18 〉	통과 (3.19ms, 32.9MB)
    테스트 19 〉	통과 (0.90ms, 30.2MB)
    테스트 20 〉	통과 (6.77ms, 34.1MB)
    테스트 21 〉	통과 (7.62ms, 36.5MB)
    테스트 22 〉	통과 (4356.66ms, 68MB)
    테스트 23 〉	통과 (27.90ms, 43.8MB)
    테스트 24 〉	통과 (112.40ms, 54.8MB)
    테스트 25 〉	통과 (0.32ms, 30.2MB)
    테스트 26 〉	통과 (0.13ms, 29.9MB)
    테스트 27 〉	통과 (0.28ms, 30.1MB)

  채점 결과
    정확성: 100.0
    합계: 100.0 / 100.0
*/

function solution(N, stages) {
  const failure = Array.from({ length: N }, (_, i) => [0, i + 1]);

  let currentStages = [...stages];
  for (let i = 1; i <= N; i++) {
    const totalPlayer = currentStages.length;

    currentStages = currentStages.filter((stage) => stage !== i);
    const passPlayer = currentStages.length;

    if (totalPlayer === passPlayer) {
      continue;
    } else {
      failure[i - 1][0] = (totalPlayer - passPlayer) / totalPlayer;
    }
  }

  return failure.sort((a, b) => b[0] - a[0]).map((stage) => stage[1]);
}
