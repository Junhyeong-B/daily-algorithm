function countPrimes(n: number): number {
  if (n <= 2) {
    return 0;
  }

  const numbersIsPrime = Array.from({ length: n }, (_, i) =>
    i % 2 === 0 ? false : true
  );
  numbersIsPrime[1] = false;
  numbersIsPrime[2] = true;

  for (let i = 3; i <= Math.ceil(n ** 0.5); i += 2) {
    if (numbersIsPrime[i] === false) {
      continue;
    }

    numbersIsPrime[i] = true;
    for (let j = i + i; j < n; j += i) {
      numbersIsPrime[j] = false;
    }
  }

  return numbersIsPrime.filter((isPrime) => isPrime).length;
}
