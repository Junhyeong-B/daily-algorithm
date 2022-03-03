/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
  if (k === 0) {
    return 0;
  }
  const profits = Array.from({ length: k }, () => [-Infinity, 0]);

  for (const price of prices) {
    for (let i = 0; i < profits.length; i++) {
      if (i === 0) {
        profits[i][0] = Math.max(profits[i][0], -price);
        profits[i][1] = Math.max(profits[i][1], profits[i][0] + price);
      } else {
        profits[i][0] = Math.max(profits[i][0], profits[i - 1][1] - price);
        profits[i][1] = Math.max(profits[i][1], profits[i][0] + price);
      }
    }
  }

  return profits[profits.length - 1][1];
};
