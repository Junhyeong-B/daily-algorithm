/**
 * Runtime: 265 ms, faster than 31.55% of TypeScript online submissions for Coin Change.
 * Memory Usage: 48.3 MB, less than 66.07% of TypeScript online submissions for Coin Change.
 */
function coinChange(coins: number[], amount: number): number {
  if (amount === 0) {
    return 0;
  }

  const amountOfCoins = Array.from({ length: amount + 1 }, () => 0);

  for (let i = 1; i <= amount; i++) {
    let minimumCoins = Infinity;

    for (const coin of coins) {
      const remainingAmount = i - coin;

      if (remainingAmount < 0) {
        continue;
      } else if (remainingAmount === 0) {
        minimumCoins = 1;
        break;
      } else {
        minimumCoins = Math.min(minimumCoins, 1 + amountOfCoins[remainingAmount])
      }
    }

    amountOfCoins[i] = minimumCoins;
  }

  const numberOfCoin = amountOfCoins[amount];
  return numberOfCoin === Infinity ? -1 : numberOfCoin;
};
