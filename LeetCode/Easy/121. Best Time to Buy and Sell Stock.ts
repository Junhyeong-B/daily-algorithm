
// Typescript 풀이 (2023. 02. 25)
{
  /**
   * Runtime 92 ms Beats 74.31%
   * Memory 50.9 MB Beats 99.74%
   */
  function maxProfit(prices: number[]): number {
    let buyIndex = 0;
    let sellIndex = 1;
    let maximumProfit = 0;

    while (sellIndex < prices.length) {
      if (prices[sellIndex] < prices[buyIndex]) {
        buyIndex = sellIndex;
        sellIndex = buyIndex + 1;
      } else {
        maximumProfit = Math.max(
          maximumProfit,
          prices[sellIndex] - prices[buyIndex]
        );
        sellIndex++;
      }
    }

    return maximumProfit;
  }

  console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
}

// Javascript 풀이 (2022. 03. 01)
// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function (prices) {
//   let answer = 0;
//   let left = 0;
//   let right = 1;

//   while (prices.length > right) {
//     if (prices[left] > prices[right]) {
//       left = right;
//       right = left + 1;
//     } else {
//       const profit = prices[right] - prices[left];
//       if (answer < profit) {
//         answer = profit;
//       }
//       right += 1;
//     }
//   }

//   return answer;
// };
