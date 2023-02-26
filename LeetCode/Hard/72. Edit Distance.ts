/**
 * word1, word2가 각각 공백이라면 필요한 distance는 0.
 * word1 / word2 둘 중 하나가 공백이라면 필요한 distance는 공백인 글자가 아닌 글자의 길이만큼 필요.
 * word1, word2의 길이 + 1 만큼의 배열을 만든다.
 * 만약, word1 = horse / word2 = ros 라고 할때, 배열의 의미는
 * dp[5][3] = 둘 다 공백 / dp[4][3] = word1: e, word2: "" / dp[1][3] = word1: rose, word2: "" / dp[2][1] = word1: ose, word2: os
 * 우선 배열의 맨 끝 라인을 각각의 문자열의 수로 초기화한다. 그 다음 Bottom 에서부터 위로 올라오며 각각의 글자로 word1 -> word2의 distance를 계산한다.
 * word1 === word2 라면 i + 1, j + 1 | insert: i, j + 1 | delete: i + 1, j | replace: i + 1, j + 1
 * 예를 들어, word1: abc, word2: adc => i=0, j=0 일 때 "a" === "a" 이므로 둘 다 i+1, j+1
 * i=1, j=1 이면 "b" !== "d" 이므로 3가지가 가능한데, 각각 insert, delete, replace했을 때 index를 생각해보면 insert: i, j+1, delete: i+1, j, replace: i+1, j+1 이 된다.
 * word1[i] === word2[j]면 dp[i][j] = dp[i + 1][j + 1]
 * word1[i] !== word2[j]면 dp[i][j] = 1 + Math.min(dp[i + 1][j], dp[i][j + 1], dp[i + 1][j + 1])
 */

/**
 * Runtime 121 ms Beats 22.73%
 * Memory 47.7 MB Beats 78.79%
 */
function minDistance(word1: string, word2: string): number {
  const dp = Array.from({ length: word1.length + 1 }, () =>
    Array.from({ length: word2.length + 1 }, () => 0)
  );

  for (let i = 0; i < word1.length; i++) {
    dp[i][word2.length] = word1.length - i;
  }

  for (let j = 0; j < word2.length; j++) {
    dp[word1.length][j] = word2.length - j;
  }

  for (let j = word2.length - 1; j >= 0; j--) {
    for (let i = word1.length - 1; i >= 0; i--) {
      if (word1[i] === word2[j]) {
        dp[i][j] = dp[i + 1][j + 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i + 1][j], dp[i][j + 1], dp[i + 1][j + 1]);
      }
    }
  }

  console.log(dp)
  return dp[0][0];
}

console.log(minDistance("horse", "ros")); // 3
