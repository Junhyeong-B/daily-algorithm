/**
 * @param {number} n
 * @returns {number}
 */
function solution(n) {
  const nums = Array.from({ length: n }, (_, i) => i + 1);
  let count = 0;

  nums.forEach((num) => {
    let sum = 0;

    while (sum < n) {
      sum += num;
      num += 1;
    }

    if (sum === n) {
      count += 1;
    }
  });

  return count;
}

/*
  정확성  테스트
    테스트 1 〉 	통과 (0.10ms, 30MB)
    테스트 2 〉 	통과 (0.25ms, 29.9MB)
    테스트 3 〉 	통과 (0.23ms, 30.3MB)
    테스트 4 〉 	통과 (0.22ms, 30MB)
    테스트 5 〉 	통과 (0.45ms, 30.1MB)
    테스트 6 〉 	통과 (0.37ms, 30.1MB)
    테스트 7 〉 	통과 (0.21ms, 30.1MB)
    테스트 8 〉 	통과 (0.48ms, 30MB)
    테스트 9 〉 	통과 (0.10ms, 29.9MB)
    테스트 10 〉	통과 (0.28ms, 30MB)
    테스트 11 〉	통과 (0.30ms, 30.2MB)
    테스트 12 〉	통과 (0.24ms, 30MB)
    테스트 13 〉	통과 (0.22ms, 30.1MB)
    테스트 14 〉	통과 (0.53ms, 29.8MB)
    테스트 15 〉	통과 (0.08ms, 29.9MB)
    테스트 16 〉	통과 (0.09ms, 30.2MB)
    테스트 17 〉	통과 (0.25ms, 30MB)
    테스트 18 〉	통과 (0.09ms, 30.1MB)

  효율성  테스트
    테스트 1 〉	통과 (4.85ms, 31.6MB)
    테스트 2 〉	통과 (3.40ms, 31.8MB)
    테스트 3 〉	통과 (3.84ms, 31.9MB)
    테스트 4 〉	통과 (3.93ms, 31.7MB)
    테스트 5 〉	통과 (19.10ms, 32.2MB)
    테스트 6 〉	통과 (3.91ms, 31.7MB)

  채점 결과
    정확성: 75.0
    효율성: 25.0
    합계: 100.0 / 100.0
 */
