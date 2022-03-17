{
  /*
    정확성  테스트
      테스트 1 〉	통과 (1.43ms, 29.9MB)
      테스트 2 〉	통과 (0.35ms, 30MB)
      테스트 3 〉	통과 (0.27ms, 30.1MB)
      테스트 4 〉	통과 (274.44ms, 70.6MB)
      테스트 5 〉	통과 (38.06ms, 37.2MB)
      테스트 6 〉	통과 (0.36ms, 30MB)
      테스트 7 〉	통과 (0.48ms, 30.3MB)
      테스트 8 〉	통과 (45.37ms, 37.4MB)
      테스트 9 〉	통과 (0.24ms, 30MB)
    채점 결과
      정확성: 100.0
      합계: 100.0 / 100.0
  */
  const solution = (N, number) => {
    const dp = Array.from({ length: 10 }, () => new Set());

    for (let i = 0; i < 9; i++) {
      const n = +N.toString().repeat(i + 1);
      dp[i].add(n);
      for (let j = 0; j < i; j++) {
        for (const num1 of dp[j]) {
          for (const num2 of dp[i - j - 1]) {
            dp[i].add(num1 + num2);
            dp[i].add(num1 - num2);
            dp[i].add(num1 * num2);
            dp[i].add(num1 / num2);
          }
        }
      }

      if (dp[i].has(number)) {
        return i + 1;
      }
    }

    return -1;
  };

  /* 첫 번째 시도 */
  /*
    틀린 이유:
      N의 갯수가 증가할 때 이전 결과와 상관 없이 기존 결과에 N을 뒤에 붙여 사칙연산을 진행함.
      N을 뒤에만 붙이게되면 -, / 연산은 두 가지 값이 나올 수 있는데 한 가지 값만 저장하게 된다.
      또, 그 이전에 계산한 결과를 사용하지 않고 N만 사용한다면
      (5 / 5) + (5 / 5) 같은 계산은 저장하지 않게되고 ((5 / 5) + 5) / 5 의 형태만 저장하게 된다.
  */
  /*
    정확성  테스트
      테스트 1 〉	실패 (0.77ms, 30.3MB)
      테스트 2 〉	실패 (0.28ms, 30.2MB)
      테스트 3 〉	통과 (0.25ms, 30.1MB)
      테스트 4 〉	통과 (1.93ms, 30.4MB)
      테스트 5 〉	실패 (1.88ms, 30.3MB)
      테스트 6 〉	실패 (1.15ms, 30.1MB)
      테스트 7 〉	실패 (0.52ms, 30.1MB)
      테스트 8 〉	실패 (2.28ms, 30.2MB)
      테스트 9 〉	실패 (0.27ms, 30MB)
    채점 결과
      정확성: 22.2
      합계: 22.2 / 100.0
  */

  const firstTry = (N, number) => {
    const dp = Array.from({ length: 10 }, () => new Set());

    for (let i = 1; i < 9; i++) {
      const n = +N.toString().repeat(i);
      dp[i].add(n);
      for (let j = 0; j < i; j++) {}
      for (const num of dp[i]) {
        dp[i + 1].add(num + N);
        dp[i + 1].add(num - N);
        dp[i + 1].add(num * N);
        dp[i + 1].add(num / N);
      }

      if (dp[i + 1].has(number)) {
        return i + 1;
      }
    }

    return -1;
  };
}
