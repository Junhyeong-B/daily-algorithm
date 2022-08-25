function solution(n) {
  let answer = "";

  while (n > 0) {
    const div = n % 3;

    switch (div) {
      case 1:
        answer = "1" + answer;
        break;
      case 2:
        answer = "2" + answer;
        break;
      case 0:
        answer = "4" + answer;
        break;
      default:
    }

    n = Math.floor(n / 3);
    if (div === 0) {
      n -= 1;
    }
  }

  return answer;
}

/**
 * 정확성  테스트
 *  테스트 1 〉	통과 (0.06ms, 30.2MB)
 *  테스트 2 〉	통과 (0.05ms, 30MB)
 *  테스트 3 〉	통과 (0.07ms, 30MB)
 *  테스트 4 〉	통과 (0.10ms, 30MB)
 *  테스트 5 〉	통과 (0.05ms, 30MB)
 *  테스트 6 〉	통과 (0.08ms, 30MB)
 *  테스트 7 〉	통과 (0.14ms, 29.9MB)
 *  테스트 8 〉	통과 (0.05ms, 30MB)
 *  테스트 9 〉	통과 (0.05ms, 30MB)
 *  테스트 10 〉통과 (0.05ms, 30MB)
 *  테스트 11 〉통과 (0.05ms, 29.7MB)
 *  테스트 12 〉통과 (0.05ms, 30.1MB)
 *  테스트 13 〉통과 (0.05ms, 30MB)
 *  테스트 14 〉통과 (0.05ms, 30MB)
 *
 * 효율성  테스트
 *  테스트 1 〉	통과 (0.07ms, 29.7MB)
 *  테스트 2 〉	통과 (0.06ms, 29.8MB)
 *  테스트 3 〉	통과 (0.07ms, 29.8MB)
 *  테스트 4 〉	통과 (0.07ms, 29.7MB)
 *  테스트 5 〉	통과 (0.08ms, 29.9MB)
 *  테스트 6 〉	통과 (0.07ms, 29.9MB)
 *
 * 채점 결과
 *  정확성: 70.0
 *  효율성: 30.0
 *  합계: 100.0 / 100.0
 */
