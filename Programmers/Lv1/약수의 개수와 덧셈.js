/*
  정확성  테스트
    테스트 1 〉	통과 (4.49ms, 32MB)
    테스트 2 〉	통과 (3.16ms, 31.8MB)
    테스트 3 〉	통과 (2.92ms, 31.9MB)
    테스트 4 〉	통과 (1.60ms, 31.9MB)
    테스트 5 〉	통과 (4.26ms, 31.8MB)
    테스트 6 〉	통과 (1.40ms, 31.9MB)
    테스트 7 〉	통과 (0.96ms, 31.9MB)

  채점 결과
    정확성: 100.0
    합계: 100.0 / 100.0
*/

const countFactors = (number) => {
  let count = 1;
  for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
      count += 1;
    }
  }

  return count;
};

function solution(left, right) {
  const arr = Array.from({ length: right - left + 1 }, (_, i) => left + i);

  return arr.reduce((acc, cur) => {
    if (countFactors(cur) % 2 === 0) {
      return acc + cur;
    } else {
      return acc - cur;
    }
  }, 0);
}
