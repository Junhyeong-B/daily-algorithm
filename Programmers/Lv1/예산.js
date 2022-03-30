/*
  정확성  테스트
    테스트 1 〉	통과 (0.06ms, 30.1MB)
    테스트 2 〉	통과 (0.09ms, 30MB)
    테스트 3 〉	통과 (0.06ms, 30.1MB)
    테스트 4 〉	통과 (0.13ms, 30MB)
    테스트 5 〉	통과 (0.07ms, 30MB)
    테스트 6 〉	통과 (0.09ms, 30.1MB)
    테스트 7 〉	통과 (0.11ms, 30MB)
    테스트 8 〉	통과 (0.29ms, 30.1MB)
    테스트 9 〉	통과 (0.16ms, 30MB)
    테스트 10 〉	통과 (0.12ms, 30.2MB)
    테스트 11 〉	통과 (0.16ms, 30MB)
    테스트 12 〉	통과 (0.18ms, 30.1MB)
    테스트 13 〉	통과 (0.11ms, 30.1MB)
    테스트 14 〉	통과 (0.09ms, 29.8MB)
    테스트 15 〉	통과 (0.09ms, 30MB)
    테스트 16 〉	통과 (0.21ms, 30MB)
    테스트 17 〉	통과 (0.17ms, 30MB)
    테스트 18 〉	통과 (0.20ms, 30.1MB)
    테스트 19 〉	통과 (0.09ms, 30.2MB)
    테스트 20 〉	통과 (0.22ms, 30MB)
    테스트 21 〉	통과 (0.09ms, 30.1MB)
    테스트 22 〉	통과 (0.08ms, 29.6MB)
    테스트 23 〉	통과 (0.08ms, 30MB)

  채점 결과
    정확성: 100.0
    합계: 100.0 / 100.0
*/

function solution(d, budget) {
  const sortedD = d.slice().sort((a, b) => a - b);
  let count = 0;
  let sum = 0;

  for (const amount of sortedD) {
    sum += amount;
    if (sum > budget) {
      break;
    }

    count += 1;
  }

  return count;
}
