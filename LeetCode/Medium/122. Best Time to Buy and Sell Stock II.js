/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let left = 0;
  let right = 1;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      profit += prices[right] - prices[left];
    }
    left = right;
    right = left + 1;
  }

  return profit;
};
