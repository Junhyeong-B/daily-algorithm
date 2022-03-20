```jsx
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let firstBuy = -Infinity;
  let firstSell = 0;
  let secondBuy = -Infinity;
  let secondSell = 0;

  for (const price of prices) {
    firstBuy = Math.max(firstBuy, -price);
    firstSell = Math.max(firstSell, firstBuy + price);

    secondBuy = Math.max(secondBuy, firstSell - price);
    secondSell = Math.max(secondSell, secondBuy + price);
  }

  return secondSell;
};
```