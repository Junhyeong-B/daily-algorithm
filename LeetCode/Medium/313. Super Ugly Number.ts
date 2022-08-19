/**
 * Runtime: 630 ms, faster than 33.33% of TypeScript online submissions for Super Ugly Number.
 * Memory Usage: 62.8 MB, less than 33.33% of TypeScript online submissions for Super Ugly Number. 
 */

function nthSuperUglyNumber(n: number, primes: number[]): number {
  const count = Array(primes.length).fill(0);
  const uglyNums = [1];

  for (let i = 1; i < n; i++) {
    const multipliedPrimes = primes.map((prime, index) => prime * uglyNums[count[index]]);
    const min = Math.min(...multipliedPrimes);
    uglyNums.push(min);

    for (let j = 0; j < primes.length; j++) {
      if (min % primes[j] === 0) {
        count[j] += 1;
      }
    }
  }

  return uglyNums[n - 1];
};

console.log(nthSuperUglyNumber(15, [3, 5, 7, 11, 19, 23, 29, 41, 43, 47]));