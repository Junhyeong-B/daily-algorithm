function solution(queue1, queue2) {
  const totalQueue = [...queue1, ...queue2];
  const sum = totalQueue.reduce((acc, cur) => acc + cur);
  if (sum % 2 === 1) {
    return -1;
  }

  const target = sum / 2;
  let l = 0;
  let r = totalQueue.length / 2;
  let answer = 0;
  let currentSum = queue1.reduce((acc, cur) => acc + cur);

  while (l >= 0 && r < totalQueue.length && l <= r) {
    if (currentSum === target) {
      return answer;
    } else if (currentSum < target) {
      currentSum += totalQueue[r++];
      answer++;
    } else {
      currentSum -= totalQueue[l++];
      answer++;
    }
  }

  return -1;
}

/**
 * 정확성  테스트
 *  테스트 1 〉 	통과 (0.08ms, 29.6MB)
 *  테스트 2 〉 	통과 (0.07ms, 29.8MB)
 *  테스트 3 〉 	통과 (0.12ms, 30MB)
 *  테스트 4 〉 	통과 (0.13ms, 30.1MB)
 *  테스트 5 〉 	통과 (0.12ms, 29.9MB)
 *  테스트 6 〉 	통과 (0.14ms, 30MB)
 *  테스트 7 〉 	통과 (0.13ms, 29.8MB)
 *  테스트 8 〉 	통과 (0.16ms, 30.1MB)
 *  테스트 9 〉 	통과 (0.36ms, 29.8MB)
 *  테스트 10 〉	통과 (0.41ms, 30.2MB)
 *  테스트 11 〉	통과 (10.32ms, 36.4MB)
 *  테스트 12 〉	통과 (10.05ms, 37MB)
 *  테스트 13 〉	통과 (9.95ms, 37.2MB)
 *  테스트 14 〉	통과 (11.13ms, 38.4MB)
 *  테스트 15 〉	통과 (13.22ms, 39.9MB)
 *  테스트 16 〉	통과 (12.09ms, 40.6MB)
 *  테스트 17 〉	통과 (12.40ms, 40.9MB)
 *  테스트 18 〉	통과 (30.72ms, 63.3MB)
 *  테스트 19 〉	통과 (33.30ms, 58.2MB)
 *  테스트 20 〉	통과 (37.67ms, 63.3MB)
 *  테스트 21 〉	통과 (41.43ms, 64.4MB)
 *  테스트 22 〉	통과 (48.39ms, 72.3MB)
 *  테스트 23 〉	통과 (40.79ms, 72.3MB)
 *  테스트 24 〉	통과 (37.96ms, 64.3MB)
 *  테스트 25 〉	통과 (0.12ms, 30MB)
 *  테스트 26 〉	통과 (0.14ms, 29.9MB)
 *  테스트 27 〉	통과 (0.12ms, 30.1MB)
 *  테스트 28 〉	통과 (15.55ms, 41.3MB)
 *  테스트 29 〉	통과 (1.49ms, 30.2MB)
 *  테스트 30 〉	통과 (17.06ms, 44.1MB)
 * 채점 결과
 *  정확성: 100.0
 *  합계: 100.0 / 100.0
 */
