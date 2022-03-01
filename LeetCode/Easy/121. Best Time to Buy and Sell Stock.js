/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let answer = 0;
  let left = 0;
  let right = 1;

  while (prices.length > right) {
    if (prices[left] > prices[right]) {
      left = right;
      right = left + 1;
    } else {
      const profit = prices[right] - prices[left];
      if (answer < profit) {
        answer = profit;
      }
      right += 1;
    }
  }

  return answer;
};
