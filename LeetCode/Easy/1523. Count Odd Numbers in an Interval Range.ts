const isOdd = (num: number): boolean => num % 2 === 1;

function countOdds(low: number, high: number): number {
  let sum = Math.ceil((high - low) / 2);

  if (isOdd(low) && isOdd(high)) {
    sum += 1;
  }

  return sum;
}

console.log(countOdds(0, 5)); // 3
