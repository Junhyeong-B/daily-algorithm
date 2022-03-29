/*
  정확성  테스트
    테스트 1 〉	통과 (0.40ms, 30.1MB)
    테스트 2 〉	통과 (0.64ms, 29.8MB)
    테스트 3 〉	통과 (0.39ms, 29.9MB)
    테스트 4 〉	통과 (0.38ms, 30.1MB)
    테스트 5 〉	통과 (0.80ms, 30.1MB)
    테스트 6 〉	통과 (1.56ms, 29.9MB)
    테스트 7 〉	통과 (0.42ms, 30.1MB)
    테스트 8 〉	통과 (4.86ms, 32.6MB)
    테스트 9 〉	통과 (0.92ms, 30MB)
    테스트 10 〉	통과 (6.34ms, 32.5MB)
    테스트 11 〉	통과 (0.18ms, 30.1MB)
    테스트 12 〉	통과 (0.35ms, 29.8MB)
    테스트 13 〉	통과 (0.34ms, 29.9MB)
    테스트 14 〉	통과 (0.45ms, 29.9MB)
    테스트 15 〉	통과 (0.15ms, 30.1MB)
    테스트 16 〉	통과 (8.25ms, 32.7MB)
    테스트 17 〉	통과 (9.21ms, 32.9MB)
    테스트 18 〉	통과 (1.29ms, 29.7MB)
    테스트 19 〉	통과 (0.73ms, 30MB)
    테스트 20 〉	통과 (12.11ms, 33MB)
    테스트 21 〉	통과 (8.60ms, 33MB)
    테스트 22 〉	통과 (2.75ms, 30.2MB)
    테스트 23 〉	통과 (0.14ms, 30MB)
    테스트 24 〉	통과 (8.27ms, 33.1MB)
    테스트 25 〉	통과 (8.79ms, 33.1MB)
    테스트 26 〉	통과 (0.12ms, 30.2MB)

  채점 결과
    정확성: 100.0
    합계: 100.0 / 100.0
*/

function solution(nums) {
  const max = nums.reduce((acc, cur) => acc + cur);
  const primeNumber = Array.from({ length: max + 1 }, () => true);
  primeNumber[1] = false;

  for (let i = 2; i <= Math.ceil(max ** 0.5); i++) {
    if (primeNumber[i]) {
      for (let j = i + i; j <= max; j += i) {
        primeNumber[j] = false;
      }
    }
  }

  let count = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (primeNumber[nums[i] + nums[j] + nums[k]]) {
          count += 1;
        }
      }
    }
  }

  return count;
}

console.log(solution([1, 2, 7, 6, 4]));
