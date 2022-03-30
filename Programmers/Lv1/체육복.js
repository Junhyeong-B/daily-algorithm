/*
  정확성  테스트
    테스트 1 〉	통과 (0.29ms, 30.1MB)
    테스트 2 〉	통과 (0.44ms, 30MB)
    테스트 3 〉	통과 (0.29ms, 30MB)
    테스트 4 〉	통과 (0.14ms, 30.1MB)
    테스트 5 〉	통과 (0.13ms, 30.1MB)
    테스트 6 〉	통과 (0.14ms, 30MB)
    테스트 7 〉	통과 (0.43ms, 30MB)
    테스트 8 〉	통과 (0.16ms, 30MB)
    테스트 9 〉	통과 (0.39ms, 30MB)
    테스트 10 〉	통과 (0.15ms, 30.1MB)
    테스트 11 〉	통과 (0.11ms, 29.7MB)
    테스트 12 〉	통과 (0.41ms, 30.1MB)
    테스트 13 〉	통과 (0.12ms, 30MB)
    테스트 14 〉	통과 (0.26ms, 29.8MB)
    테스트 15 〉	통과 (0.35ms, 30.2MB)
    테스트 16 〉	통과 (0.17ms, 30MB)
    테스트 17 〉	통과 (0.37ms, 30.2MB)
    테스트 18 〉	통과 (0.37ms, 29.9MB)
    테스트 19 〉	통과 (0.11ms, 30.1MB)
    테스트 20 〉	통과 (0.30ms, 30MB)

  채점 결과
    정확성: 100.0
    합계: 100.0 / 100.0
*/

function solution(n, lost, reserve) {
  const gymSuits = Array.from({ length: n }, () => 1);

  for (const lostStudent of lost) {
    gymSuits[lostStudent - 1] = 0;
  }

  for (const extraStudent of reserve) {
    gymSuits[extraStudent - 1] += 1;
  }

  for (let i = 0; i < n; i++) {
    if (gymSuits[i] === 0) {
      if (i > 0 && gymSuits[i - 1] === 2) {
        gymSuits[i - 1] = 1;
        gymSuits[i] = 1;
      } else if (i < n - 1 && gymSuits[i + 1] === 2) {
        gymSuits[i + 1] = 1;
        gymSuits[i] = 1;
      }
    }
  }

  return gymSuits.filter((suit) => suit >= 1).length;
}
