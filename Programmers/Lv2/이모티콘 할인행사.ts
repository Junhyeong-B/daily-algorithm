function solution(users: number[][], emoticons: number[]): number[] {
  const discount = [10, 20, 30, 40];

  const subScriberAndPrices: number[][] = [];
  const dfs = (
    users: number[][],
    emoticons: number[],
    discountInfo: number[],
    level: number
  ) => {
    if (emoticons.length === level) {
      let subscribers = 0;
      let prices = 0;
      for (let i = 0; i < users.length; i++) {
        let sum = 0;
        for (let j = 0; j < emoticons.length; j++) {
          if (users[i][0] <= discountInfo[j]) {
            sum += (emoticons[j] * (100 - discountInfo[j])) / 100;
          }
        }

        if (users[i][1] <= sum) {
          subscribers += 1;
        } else {
          prices += sum;
        }
      }
      subScriberAndPrices.push([subscribers, prices]);
    } else {
      for (let i = 0; i < 4; i++) {
        const disInfo = [...discountInfo];
        disInfo[level] = discount[i];
        dfs(users, emoticons, disInfo, level + 1);
      }
    }
  };

  dfs(users, emoticons, [10, 10, 10, 10], 0);

  subScriberAndPrices.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    } else {
      return b[0] - a[0];
    }
  });

  return subScriberAndPrices[0];
}

console.log(
  solution(
    [
      [40, 2900],
      [23, 10000],
      [11, 5200],
      [5, 5900],
      [40, 3100],
      [27, 9200],
      [32, 6900],
    ],
    [1300, 1500, 1600, 4900]
  )
); // [4, 13860]

/**
 * 정확성  테스트
 *  테스트 1 〉	통과 (0.26ms, 33.7MB)
 *  테스트 2 〉	통과 (0.30ms, 33.5MB)
 *  테스트 3 〉	통과 (0.68ms, 33.7MB)
 *  테스트 4 〉	통과 (2.24ms, 36.5MB)
 *  테스트 5 〉	통과 (2.21ms, 36.6MB)
 *  테스트 6 〉	통과 (2.56ms, 36.7MB)
 *  테스트 7 〉	통과 (5.56ms, 36.6MB)
 *  테스트 8 〉	통과 (5.83ms, 36.9MB)
 *  테스트 9 〉	통과 (7.15ms, 36.9MB)
 *  테스트 10 〉통과 (9.56ms, 37.9MB)
 *  테스트 11 〉통과 (20.42ms, 37.9MB)
 *  테스트 12 〉통과 (22.09ms, 40.7MB)
 *  테스트 13 〉통과 (66.06ms, 40.9MB)
 *  테스트 14 〉통과 (64.06ms, 41.4MB)
 *  테스트 15 〉통과 (7.27ms, 36.9MB)
 *  테스트 16 〉통과 (7.34ms, 36.8MB)
 *  테스트 17 〉통과 (0.41ms, 33.6MB)
 *  테스트 18 〉통과 (5.66ms, 36.8MB)
 *  테스트 19 〉통과 (0.25ms, 33.6MB)
 *  테스트 20 〉통과 (0.25ms, 33.7MB)
 * 채점 결과
 *  정확성: 100.0
 *  합계: 100.0 / 100.0
 */
