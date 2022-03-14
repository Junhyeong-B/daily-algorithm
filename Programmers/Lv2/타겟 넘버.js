{
  /*
    정확성  테스트
      테스트 1 〉	통과 (13.73ms, 31.7MB)
      테스트 2 〉	통과 (14.06ms, 31.8MB)
      테스트 3 〉	통과 (0.21ms, 30MB)
      테스트 4 〉	통과 (0.93ms, 29.9MB)
      테스트 5 〉	통과 (2.68ms, 31.6MB)
      테스트 6 〉	통과 (0.35ms, 30MB)
      테스트 7 〉	통과 (0.22ms, 30.1MB)
      테스트 8 〉	통과 (1.94ms, 31.5MB)

    채점 결과
      정확성: 100.0
      합계: 100.0 / 100.0
  */
  const solution = (numbers, target) => {
    let answer = 0;
    const dfs = (L, sum) => {
      if (L === numbers.length) {
        if (sum !== target) {
          return;
        }
        answer++;
      } else {
        dfs(L + 1, sum + numbers[L]);
        dfs(L + 1, sum - numbers[L]);
      }
    };

    dfs(0, 0);

    return answer;
  };
}
